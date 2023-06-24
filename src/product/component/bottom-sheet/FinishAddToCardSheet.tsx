import { Flex, Spacing } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { MText, MineryButton, useBottomSheet } from 'common/components';
import { colors } from 'common/constants';
import Router from 'next/router';
import { useCallback } from 'react';

export function useFinishAddToCartSheet() {
  const { open, close } = useBottomSheet();
  return useCallback(async () => {
    await new Promise<void>((reslove) => {
      open({
        children: <FinishAddToCartSheet onClose={reslove} />,
      });
    }).finally(close);
  }, [open, close]);
}

export function FinishAddToCartSheet({ onClose }: { onClose: () => void }) {
  return (
    <Container>
      <MText size="xxl" weight="semibold">
        탁월한 선택이에요!
      </MText>
      <Spacing height={6} />
      <MText size="base" color={colors.gray600}>
        상품이 장바구니에 잘 담겼어요.
      </MText>
      <Spacing height={24} />
      <Flex.CenterVertical>
        <MineryButton
          type="primaryLight"
          onClick={onClose}
          style={{ width: '85px' }}
        >
          계속
        </MineryButton>
        <Spacing width={10} />
        <MineryButton onClick={() => Router.push('/cart')}>
          장바구니 보러가기
        </MineryButton>
      </Flex.CenterVertical>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;
