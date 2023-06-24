import { Flex, Spacing } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import {
  AmountControl,
  MText,
  MineryButton,
  useBottomSheet,
} from 'common/components';
import { useControlCart } from 'common/hooks/useCart';
import { Product } from 'common/models';
import { useCallback, useState } from 'react';

export function useStartOrderSheet(product: Product) {
  const { open, close } = useBottomSheet();
  return useCallback(async () => {
    await new Promise<void>((reslove) => {
      open({
        children: <StartOrderSheet onClose={reslove} product={product} />,
      });
    }).finally(close);
  }, [product, open, close]);
}

export function StartOrderSheet({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [value, setValue] = useState(1);
  const handleIncease = () => {
    setValue((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setValue((prev) => prev - 1 || 1);
  };

  const cart = useControlCart();

  const handleAddToCartClick = async () => {
    await cart.add({ productId: product.id, amount: value, options: [] });
    onClose();
  };

  const handleOrderClick = async () => {
    await cart.add({ productId: product.id, amount: value, options: [] });
    onClose();
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
