import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { AppBar, MText } from 'common/components';
import { colors } from 'common/constants';
import { withAuth } from 'common/hocs';
import { useUser } from 'common/hooks';
import { useOrderList } from 'common/hooks/queries';
import { Buttons, PaymentInfo, ShippingInfo } from 'completeOrder/components';
import { OrderItemsSection } from 'order/components';
import { LoggingState } from '@boxfoxs/logger';

export default withAuth(function CompleteOrder() {
  const router = useRouter();
  const { query } = router;
  const [userInfo] = useUser(); // TODO userId 바꾸기
  const [myOrderList] = useOrderList('ALL');
  const order = myOrderList?.find((item) => String(item.id) === query.orderId);

  if (!order) {
    return <></>;
  }

  return (
    <LoggingState name="Page View - Order Finish">
      <Wrapper>
        <AppBar>
          <AppBar.Title>주문 완료!</AppBar.Title>
        </AppBar>
        <TitleWrapper>
          <MText size="xxl" weight="semibold" color={colors.gray900}>
            {`${userInfo?.name}님의 상품이\n성공적으로 주문되었어요.`}
          </MText>
          <Text size="base" weight="regular" color={colors.gray600}>
            상품을 준비 중에 있어요. 조금만 기다려주세요.
          </Text>
        </TitleWrapper>
        <StyledDivider width="100%" height={6} color={colors.gray100} />
        <OrderItemsSection data={order.items} />
        <StyledDivider width="100%" height={6} color={colors.gray100} />
        <PaymentInfo order={order} />
        <StyledDivider width="100%" height={6} color={colors.gray100} />
        <ShippingInfo deliveryMessage={order.deliveryMessage} />
        <StyledDivider width="100%" height={6} color={colors.gray100} />
        <Spacing height={98} />
        <Buttons />
      </Wrapper>
    </LoggingState>
  );
});

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  padding: 20px;
  gap: 6px;
`;

const StyledDivider = styled(Divider)`
  margin: 20px 0;
`;
