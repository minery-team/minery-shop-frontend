import { Spacing, Text, UrlLottie } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { sumBy } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { createOrder } from 'common/api/order';
import { colors } from 'common/constants';
import { useOrderingItems } from 'common/hooks/useOrderingItems';
import { withSuspense } from '@boxfoxs/react';

export default withSuspense(function ProcessPayment() {
  const router = useRouter();
  const { query } = router;
  const orderList = useOrderingItems({ suspense: true });

  useEffect(() => {
    const cost = sumBy(orderList, (item) => item.amount * item.product.price);
    const cartItemIds = orderList.map((item) => item.id);
    (async () => {
      try {
        const order = await createOrder({
          paymentKey: String(query.paymentKey),
          orderId: String(query.orderId),
          cost,
          cartItemIds,
          addressId: Number(query.addressId),
        });
        router.push(`/complete-order?orderId=${order.id}`);
      } catch {
        router.back();
      }
    })();
  }, []);

  return (
    <Wrapper>
      <UrlLottie
        src="https://assets6.lottiefiles.com/packages/lf20_XgfqoVFulv.json"
        options={{ loop: true, autoPlay: true }}
        style={{ width: '200px' }}
      />
      <Spacing height={14} />
      <Text size="lg" color={colors.gray600}>
        결제 처리중입니다
      </Text>
      <Spacing height={60} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
