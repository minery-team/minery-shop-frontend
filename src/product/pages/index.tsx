import { AppBar, Section, Space } from '@/common/components';
import { Carousel } from '@/common/components/carousel';
import { Container } from '@/common/components/layout/Container';
import { colors } from '@/common/constants';
import { useProductList } from '@/common/hooks/queries/useWineList';
import {
  FLAG_BY_COUNTRY,
  NAME_BY_WINE_TYPE,
  Product,
  getWineFlagLabel,
} from '@/common/models';
import { Spacing, Text } from '@boxfoxs/bds-web';
import { Path } from '@boxfoxs/next';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import Image from 'next/image';
import { TabBar } from '@/common/components/tabbar';
import { useRef, useState } from 'react';
import notice from '../../../public/assets/notice.svg';
import snack_for_wine from '../../../public/assets/snack_for_wine.png';
import package_for_wine from '../../../public/assets/package_for_wine.png';
import DescriptionSection from '../component/DescriptionSection';
import DeliveryFeeNotice from '../component/DeliveryFeeNotice';

const HEADER_SIZE = 112;

type TabTitle = 'description' | 'review' | 'label';

const ProductPage = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  // const product = products?.find((product) => product.id === id);
  const product: Product = products?.[0];
  const containerRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [tab, setTab] = useState<TabTitle>('description');
  const handleTabClick = (selectedTab: TabTitle) => {
    const root = containerRef.current;
    const target = sectionRefs.current[selectedTab];
    if (!target || !root) {
      return;
    }
    const rect = target.getBoundingClientRect();
    containerRef.current?.scrollTo({
      top: root.scrollTop + rect.top - HEADER_SIZE + 8,
      behavior: 'smooth',
    });
  };

  if (!product) return <div>해당 상품이 없습니다 :(</div>;

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
        {product.images.map((image) => (
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
              src={product.image}
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
            <Image
              style={{
                width: '106px',
                height: '120px',
                borderRadius: '6px',
                background: colors.gray200,
              }}
              src={snack_for_wine}
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
            <Image
              style={{
                width: '106px',
                height: '120px',
                borderRadius: '6px',
                background: colors.gray200,
              }}
              src={package_for_wine}
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
      <DescriptionSection product={product} />
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
