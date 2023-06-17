import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import {
  WineInfoCard,
  UserInfo,
  PaymentInfo,
  Warning,
  PaymentButton,
} from 'order/components';
import { AddressInfo } from 'order/components/AddressInfo';
import { AppBar } from 'common/components';
import { useUserQuery } from 'common/hooks/queries';
import { orderItems } from 'common/recoil/orderItems';
import { withAuth } from 'common/hocs';

export default withAuth(function OrderPage() {
  const [userInfo] = useUserQuery(0); // TODO userId 변경
  const orderList = useRecoilValue(orderItems);
  const [isCheckSelfReceving, setIsCheckSelfReceving] = useState(false);
  const [hasDefaultAddress, setHasDefaultAddress] = useState(false);

  return (
    <Wrapper>
      <AppBar back>
        <AppBar.Title>결제하기</AppBar.Title>
      </AppBar>
      <WineInfoCard orderList={orderList ?? []} />
      <AddressInfo setHasDefaultAddress={setHasDefaultAddress} />
      <UserInfo
        userInfo={userInfo}
        setIsCheckSelfReceving={setIsCheckSelfReceving}
      />
      <PaymentInfo orderList={orderList ?? []} />
      <Warning />
      <PaymentButton
        userInfo={userInfo}
        orderList={orderList ?? []}
        isCheckSelfReceving={isCheckSelfReceving}
        hasDefaultAddress={hasDefaultAddress}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
