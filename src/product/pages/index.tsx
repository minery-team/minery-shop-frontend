import { Spacing, Text } from '@boxfoxs/bds-web';
import { useAsyncCallback } from '@boxfoxs/core-hooks';
import { Path } from '@boxfoxs/next';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import {
  AppBar,
  FixedBottomCTA,
  Section,
  SectionDivider,
} from 'common/components';
import { Carousel } from 'common/components/carousel';
import { Container } from 'common/components/layout/Container';
import { TabBar } from 'common/components/tabbar';
import { colors } from 'common/constants';
import { useCartList } from 'common/hooks/queries';
import { useProductList } from 'common/hooks/queries/useWineList';
import { useControlCart } from 'common/hooks/useCart';
import { NAME_BY_WINE_TYPE, getWineFlagLabel } from 'common/models';
import Router from 'next/router';
import { useRef, useState } from 'react';
import DeliveryFeeNotice from '../component/DeliveryFeeNotice';
import DescriptionSection from '../component/DescriptionSection';
import ReviewSection from '../component/ReviewSection';
import WineLabelSection from '../component/WineLabelSection';

type TabType = 'description' | 'review' | 'label';

const HEADER_SIZE = 79;

const ProductPage = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  const cart = useControlCart();
  const product = products?.find((i) => i.id === id);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<TabType>('description');
  const handleTabClick = (selectedTab: string) => {
    const section = document.querySelector(`#${selectedTab}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [, reload] = useCartList();

  const cta = useAsyncCallback(async () => {
    if (!product) {
      return;
    }
    await cart.add({ productId: product.id, amount: 1, options: [] });
    await reload();
    Router.push('/order');
  });

  if (!product) return <div>해당 상품이 없습니다 :(</div>;

  const imagesForCarousel =
    product.images.length === 0 ? [product.wine.image] : product.images;

  return (
    <Container ref={containerRef}>
      <AppBar back />
      <Carousel
        dots
        dotsClass=""
        // eslint-disable-next-line react/no-unstable-nested-components
        appendDots={(dots) => {
          return <CarouselDotsWrapper>{dots}</CarouselDotsWrapper>;
        }}
      >
        {imagesForCarousel.map((image) => (
          <Rectangle key={image} style={{ background: colors.gray200 }}>
            <img src={image} alt="상품 이미지" style={{ width: '100%' }} />
          </Rectangle>
        ))}
      </Carousel>

      <Section>
        {/* 국가 및 와인 타입 */}
        <div style={{ display: 'flex', gap: '6px', color: colors.gray700 }}>
          {getWineFlagLabel(product.wine.country) ? (
            <span>{getWineFlagLabel(product.wine.country)}</span>
          ) : null}
          <Text>{product.wine.country}</Text>
          <span>|</span>
          <Text>{NAME_BY_WINE_TYPE[product.wine.type]}</Text>
        </div>
        {/* 타이틀 */}
        <Spacing height={12} />
        <Text size="xl" weight="semibold">
          {product.name}
        </Text>
        <Text size="base" weight="regular" color={colors.gray600}>
          {product.enName}
        </Text>

        {/* 가격 */}
        <Spacing height={12} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
          <Text
            color={colors.primary700Default}
            size="heading4"
            weight="semibold"
          >
            {/* TODO: 할인율 소숫점 정책 필요 */}
            {((product.originalPrice - product.price) / product.originalPrice) *
              100}
            %
          </Text>
          <Text size="heading4" weight="semibold">
            {commaizeNumber(product.price)}원
          </Text>
          <Text
            style={{
              textDecoration: 'line-through',
            }}
            color={colors.gray500}
          >
            {commaizeNumber(product.originalPrice)}원
          </Text>
        </div>
      </Section>
      {/* 배송비 */}
      <DeliveryFeeNotice />
      <Section>
        {/* 상품 설명 */}
        <Text size="xl" weight="semibold">
          상품구성
        </Text>
        <Spacing height={20} />
        <div style={{ display: 'flex', gap: '16px' }}>
          <div>
            <img
              style={{
                width: '106px',
                height: '120px',
                borderRadius: '6px',
                background: colors.gray200,
              }}
              src={product.wine.image}
            />
            <Spacing height={8} />
            <Text size="base" weight="semibold">
              마이너리 추천 와인
            </Text>
            <Spacing height={4} />
            <Text size="sm" weight="regular">
              1병
            </Text>
          </div>
          <div>
            <img
              style={{
                width: '106px',
                height: '120px',
                borderRadius: '6px',
                background: colors.gray200,
              }}
              src="/assets/snack_for_wine.png"
            />
            <Spacing height={8} />
            <Text size="base" weight="semibold">
              와인과 잘 어울리는 스낵 세트
            </Text>
            <Spacing height={4} />
            <Text size="sm" weight="regular">
              1개
            </Text>
          </div>
          <div>
            <img
              style={{
                width: '106px',
                height: '120px',
                borderRadius: '6px',
                background: colors.gray200,
              }}
              src="/assets/package_for_wine.png"
            />
            <Spacing height={8} />
            <Text size="base" weight="semibold">
              집에서 받아보는 안심포장 패키지
            </Text>
            <Spacing height={4} />
            <Text size="sm" weight="regular">
              1개
            </Text>
          </div>
        </div>
      </Section>
      <StyledTabBar
        value={tab}
        data={[
          { name: '상품 소개', id: 'description' },
          { name: '리뷰', id: 'review' },
          { name: '라벨 상세', id: 'label' },
        ]}
        onClick={handleTabClick}
      />
      <DescriptionSection id="description" product={product} />
      <SectionDivider />
      <ReviewSection id="review" product={product} />
      <SectionDivider />
      <WineLabelSection id="label" product={product} />
      {/* 주문하기 */}
      <Spacing height={HEADER_SIZE} />
      <FixedBottomCTA full onClick={cta.callback} loading={cta.isLoading}>
        주문하기
      </FixedBottomCTA>
    </Container>
  );
};

export default ProductPage;

const CarouselDotsWrapper = styled.ul`
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  padding: 20px;
  margin: 0;
  text-align: left;
  gap: 8px;

  li {
    display: inline-block;
  }

  li::before {
    content: '•';
    font-size: 40px;
    line-height: 0;
    color: white;
    opacity: 0.3;
  }

  li.slick-active::before {
    opacity: 1;
  }

  li > button {
    display: none;
  }
`;

const Rectangle = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  & > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

const StyledTabBar = styled(TabBar)`
  background: white;
  position: sticky;
  top: 50px;
  z-index: 2;
  padding-top: 4px;
`;
