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
import { NAME_BY_WINE_TYPE, dummySnack, getWineFlagLabel } from 'common/models';
import Router from 'next/router';
import { useRef, useState } from 'react';
import RefundNotice from 'product/component/RefundNotice';
import DeliveryFeeNotice from '../component/DeliveryFeeNotice';
import DescriptionSection from '../component/DescriptionSection';
import ReviewSection from '../component/ReviewSection';
import WineLabelSection from '../component/WineLabelSection';
import WineProduct from './WineProduct';
import SnackProduct from './SnackProduct';

type TabType = 'description' | 'review' | 'label';

const HEADER_SIZE = 79;

const ProductPage = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  const cart = useControlCart();
  const product = products?.find((i) => i.id === id);

  // TODO: Snack 결정 로직 결정
  const isSnack = id === 99;
  if (isSnack) return <SnackProduct product={dummySnack} />;

  if (!product) return <div>해당 상품이 없습니다 :(</div>;

  return <WineProduct product={product} />;

};

export default ProductPage;
