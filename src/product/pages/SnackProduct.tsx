import { Spacing, Text } from '@boxfoxs/bds-web';
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
import { ProductForSnack } from 'common/models';
import { useStartOrderSheet } from 'product/component/bottom-sheet/StartOrderSheet';
import { useRef } from 'react';
import DeliveryFeeNotice from '../component/DeliveryFeeNotice';
import RefundNotice from '../component/RefundNotice';
import SnackDescription from '../component/SnackDescription';

const HEADER_SIZE = 79;

interface Props {
  product: ProductForSnack;
}

const SnackProduct = ({ product }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [, reload] = useCartList();

  const open = useStartOrderSheet(product);

  const imagesForCarousel = product.images;

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
        <div
          style={{
            display: 'flex',
            gap: '6px',
            color: colors.gray700,
            alignItems: 'center',
          }}
        >
          <span>🍿</span>
          <Text>와인에 곁들여요</Text>
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
      <Spacing height={20} />
      <SectionDivider />
      <Spacing height={20} />
      <SnackDescription />
      <Spacing height={20} />
      <RefundNotice />
      <Spacing height={20} />
      {/* 주문하기 */}
      <Spacing height={HEADER_SIZE} />
      <FixedBottomCTA full onClick={open}>
        주문하기
      </FixedBottomCTA>
    </Container>
  );
};

export default SnackProduct;

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
