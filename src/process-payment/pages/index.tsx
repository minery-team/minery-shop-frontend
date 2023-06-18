import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Spacing, Text, UrlLottie } from '@boxfoxs/bds-web';
import { sumBy } from 'lodash';
import styled from '@emotion/styled';

import { orderItems } from 'common/recoil/orderItems';
import { useFetchAddress } from 'common/hooks/queries';
import { createOrder } from 'common/api/order';
import { colors } from 'common/constants';
import { TOSS_PAYMENT_KEY } from 'common/constants/toss';

export default function ProcessPayment() {
  const router = useRouter();
  const { query } = router;
  const orderList = useRecoilValue(orderItems);
  const [address] = useFetchAddress();

  useEffect(() => {
    const defaultAddress = address!.filter((item) => item.default)[0];
    const cost = sumBy(orderList, (item) => item.amount * item.product.price);
    const cartItemIds = orderList.map((item) => item.id);

    createOrder({
      paymentKey: TOSS_PAYMENT_KEY,
      orderId: `${query.orderId}`,
      cost,
      cartItemIds,
      addressId: defaultAddress!.id,
    })
      .then(() => {
        router.push(`/complete-order?orderId=${query.orderId}`);
      })
      .catch((err) => {
        console.log('error occurs when payment : ', err);
        router.back();
      });
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
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
