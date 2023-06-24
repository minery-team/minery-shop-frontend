import { Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import { sumBy } from 'lodash';
import { useMemo } from 'react';

import { FixedBottomCTA } from 'common/components';
import { colors } from 'common/constants';
import { Address, CartItem, User } from 'common/models';
import { requestPay } from 'common/utils/requestTossPay';
import { useCheckSelfReceving } from 'order/components/CheckSeflRecevingPopUp';
import { useEnrollAddress } from 'order/components/EnrollAddressPopUp';
import { QS } from '@boxfoxs/next';

export function PaymentButton({
  userInfo,
  orderList,
  isCheckSelfReceving,
  address,
}: {
  userInfo: User;
  orderList: CartItem[];
  isCheckSelfReceving: boolean;
  address?: Address;
}) {
  const openCheckSelfReceving = useCheckSelfReceving();
  const openEnrollAddress = useEnrollAddress();

  const totalPrice = useMemo(() => {
    return sumBy(orderList, (item) => item.amount * item.product.price);
  }, [orderList]);

  const submit = async () => {
    if (!address) openEnrollAddress();
    else if (!isCheckSelfReceving) openCheckSelfReceving();
    else {
      const { protocol, host } = window.location;
      const orderId = `minery_${Date.now()}_${orderList.length}`;
      const params = {
        ...QS.getData(),
        addressId: address.id,
      };

      await requestPay(
        `${orderId}`,
        `${orderList[0].product.name} 외 ${orderList.length - 1}개`,
        `${userInfo.name}`,
        totalPrice,
        {
          successUrl: `${protocol}//${host}/process-payment${QS.create(
            params
          )}`,
        }
      );
    }
  };

  return (
    <Wrapper>
      <Spacing height={12} />
      <Text size="base" weight="regular" color={colors.gray600}>
        이용약관을 확인하였으며 결제에 동의합니다.
      </Text>
      <Spacing height={100} />
      <FixedBottomCTA onClick={submit}>
        {commaizeNumber(totalPrice)}원 결제하기
      </FixedBottomCTA>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;
