import { Flex, Spacing } from '@boxfoxs/bds-web';
import { QS } from '@boxfoxs/next';
import styled from '@emotion/styled';
import {
  AmountControl,
  MText,
  MineryButton,
  useBottomSheet,
} from 'common/components';
import { useUser } from 'common/hooks';
import { useControlCart } from 'common/hooks/useCart';
import { Product, ProductForSnack } from 'common/models';
import Router from 'next/router';
import { useCallback, useState } from 'react';
import { useFinishAddToCartSheet } from './FinishAddToCardSheet';
import { useAdultCartGuide } from 'cart/components/AdultCertGuidePopUp';

export function useStartOrderSheet(product: Product | ProductForSnack) {
  const { open } = useBottomSheet();
  const [user] = useUser();
  const openCartAdded = useFinishAddToCartSheet();

  return useCallback(async () => {
    open({
      children: <StartOrderSheet onCart={openCartAdded} product={product} />,
    });
  }, [product, open, openCartAdded, user]);
}

export function StartOrderSheet({
  product,
  onCart,
}: {
  product: { id: number };
  onCart: () => void;
}) {
  const [value, setValue] = useState(1);
  const [user] = useUser();
  const opneAdult = useAdultCartGuide();

  const handleIncease = () => {
    setValue((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setValue((prev) => prev - 1 || 1);
  };

  const cart = useControlCart();

  const handleAddToCartClick = async () => {
    await cart.add({ productId: product.id, amount: value, options: [] });
    onCart();
  };

  const handleOrderClick = async () => {
    if (
      !!user &&
      (!user.birthday ||
        new Date(user.birthday).getFullYear() > new Date().getFullYear() - 19)
    ) {
      opneAdult();
      return;
    }
    Router.push(
      `/order${QS.create({ productId: product.id, orderAmount: value })}`
    );
  };

  return (
    <Container>
      <Flex.CenterVertical>
        <MText size="xxl" weight="semibold">
          주문 수량
        </MText>
        <Spacing flex={1} />
        <AmountControl
          onIncrease={handleIncease}
          onDecrease={handleDecrease}
          value={value}
        />
      </Flex.CenterVertical>
      <Spacing height={24} />
      <Flex.CenterVertical>
        <MineryButton type="light" onClick={handleAddToCartClick}>
          장바구니 담기
        </MineryButton>
        <Spacing width={10} />
        <MineryButton onClick={handleOrderClick}>주문하기</MineryButton>
      </Flex.CenterVertical>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;
