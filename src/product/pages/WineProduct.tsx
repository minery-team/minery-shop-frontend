import { Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import {
  AppBar,
  FixedBottomCTA,
  NotifyVisible,
  Section,
  SectionDivider,
} from 'common/components';
import { Carousel } from 'common/components/carousel';
import { Container } from 'common/components/layout/Container';
import { TabBar } from 'common/components/tabbar';
import { colors } from 'common/constants';
import { NAME_BY_WINE_TYPE, Product, getWineFlagLabel } from 'common/models';
import { useStartOrderSheet } from 'product/component/bottom-sheet/StartOrderSheet';
import { useRef, useState } from 'react';
import DeliveryFeeNotice from '../component/DeliveryFeeNotice';
import DescriptionSection from '../component/DescriptionSection';
import RefundNotice from '../component/RefundNotice';
import ReviewSection from '../component/ReviewSection';
import WineLabelSection from '../component/WineLabelSection';
import { CartButton } from 'common/components/appbar/CartButton';

type TabType = 'description' | 'review' | 'label';

const HEADER_SIZE = 79;

interface Props {
  product: Product;
}

const WineProduct = ({ product }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>();
  const [tab, setTab] = useState<TabType>('description');
  const handleTabClick = (selectedTab: string) => {
    const section = document.querySelector(`#${selectedTab}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const open = useStartOrderSheet(product);

  const imagesForCarousel =
    product.images.length === 0 ? [product.wine.image] : product.images;

  return (
    <NotifyVisible.Parent>
      {(notifyRef) => (
        <StyledContainer
          ref={(el) => {
            notifyRef(el);
            containerRef.current = el;
          }}
        >
          <AppBar back floating backgrounded right={<CartButton />} />
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
            <div
              style={{
                display: 'flex',
                gap: '6px',
                color: colors.gray700,
                alignItems: 'center',
              }}
            >
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
              {product.wine.enName}
            </Text>

            {/* 가격 */}
            <Spacing height={12} />
            <div
              style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}
            >
              <Text
                color={colors.primary700Default}
                size="heading4"
                weight="semibold"
              >
                {Math.ceil(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
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
            <div style={{ display: 'flex', gap: '16px', overflow: 'scroll' }}>
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
                  마이너리 추천 와인 1병
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
                  와인과 잘 어울리는 스낵 세트 1개
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
                  집에서 받아보는 안심포장 패키지 1개
                </Text>
              </div>
            </div>
            <Spacing height={20} />
            <div>
              <Text size="sm" weight="regular" color={colors.gray500}>
                * 안주는 와인에 따라 구성이 달라질 수 있습니다.{' '}
              </Text>
              <Text size="sm" weight="regular" color={colors.gray500}>
                * 위 와인 이미지는 임의 빈티지(생산년도)로, 이미지와 다른 빈티지
                와인이 배송될 수 있습니다.
              </Text>
              <Text size="sm" weight="regular" color={colors.gray500}>
                * 빈티지에 따라 라벨 디자인이 상이할 수 있습니다.
              </Text>
            </div>
          </Section>
          <Spacing height={20} />
          <StyledTabBar
            value={tab}
            data={[
              { name: '상품 소개', id: 'description' },
              { name: '리뷰', id: 'review' },
              { name: '라벨 상세', id: 'label' },
            ]}
            onClick={handleTabClick}
          />
          <NotifyVisible
            offset={200}
            onVisible={(state) => state && setTab('description')}
          >
            <DescriptionSection id="description" product={product} />
            <Spacing height={20} />
            <RefundNotice />
          </NotifyVisible>
          <NotifyVisible
            offset={200}
            onVisible={(state) => state && setTab('review')}
          >
            <Spacing height={20} />
            <ReviewSection id="review" product={product} />
          </NotifyVisible>
          <SectionDivider />
          <NotifyVisible
            offset={200}
            onVisible={(state) => state && setTab('label')}
          >
            <WineLabelSection id="label" product={product} />
            <Spacing height={150} />
          </NotifyVisible>
          {/* 주문하기 */}
          <Spacing height={HEADER_SIZE} />
          <FixedBottomCTA full onClick={open}>
            주문하기
          </FixedBottomCTA>
        </StyledContainer>
      )}
    </NotifyVisible.Parent>
  );
};

export default WineProduct;

const StyledContainer = styled(Container)`
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

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
