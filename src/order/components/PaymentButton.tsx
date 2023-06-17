import { useMemo } from 'react';
import { Text, Spacing } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { sumBy } from 'lodash';

import { requestPay } from 'common/utils/requestTossPay';
import { colors } from 'common/constants';
import { User, CartItem } from 'common/models';

export function PaymentButton({
  userInfo,
  orderList,
}: {
  userInfo: User;
  orderList: CartItem[];
}) {
  const totalPrice = useMemo(() => {
    return sumBy(orderList, (item) => item.amount * item.product.price);
  }, [orderList]);

  const submit = async () => {
    const { protocol, host } = window.location;
    const orderId = new Date().getTime();

    await requestPay(
      `${orderId}`,
      `${orderList[0].product.name} 외 ${orderList.length - 1}개`,
      `${userInfo.name}`,
      totalPrice,
      {
        successUrl: `${protocol}//${host}/process-payment?orderId=${orderId}`,
      }
    );
  };

  return (
    <Wrapper>
      <Spacing height={12} />
      <Text size="base" weight="regular" color={colors.gray600}>
        이용약관을 확인하였으며 결제에 동의합니다.
      </Text>
      <Spacing height={10} />
      <Button
        size="xl"
        weight="medium"
        color={colors.defaultWhite}
        onClick={submit}
      >
        다음
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Button = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 6px;
  margin-bottom: 36px;
  background-color: ${colors.primary700Default};
`;
