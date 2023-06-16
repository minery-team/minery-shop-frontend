import { Text, Spacing, Divider } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import {
  WineInfoCard,
  PaymentInfo,
  ShippingInfo,
  Buttons,
} from 'completeOrder/components';
import { useUserQuery, useCartList } from 'common/hooks/queries';
import { AppBar } from 'common/components';
import { colors } from 'common/constants';

export default function CompleteOrder() {
  const userInfo = useUserQuery(0); // TODO userId 바꾸기
  const [cartList, refetch] = useCartList();

  return (
    <Wrapper>
      <AppBar>
        <AppBar.Title>주문 완료!</AppBar.Title>
      </AppBar>
      <TitleWrapper>
        <Text size="2xl" weight="semibold" color={colors.gray900}>
          {'권혁창님의 상품이\n성공적으로 주문되었어요.'}
        </Text>
        <Text size="base" weight="regular" color={colors.gray600}>
          곧 배송이 시작될 예정이에요. 조금만 기다려주세요.
        </Text>
      </TitleWrapper>
      <Divider width="100%" height={6} color={colors.gray100} />
      <WineInfoCard orderList={cartList ?? []} />
      <Divider width="100%" height={6} color={colors.gray100} />
      <PaymentInfo cartList={cartList ?? []} />
      <Divider width="100%" height={6} color={colors.gray100} />
      <ShippingInfo />
      <Divider width="100%" height={1} color={colors.gray100} />
      <Spacing height={98} />
      <Buttons />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  padding: 20px;
  gap: 6px;
`;
