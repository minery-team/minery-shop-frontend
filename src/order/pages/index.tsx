import styled from '@emotion/styled';
import { useState } from 'react';

import { AppBar } from 'common/components';
import { withAuth } from 'common/hocs';
import { useUser } from 'common/hooks';
import { useOrderingItems } from 'common/hooks/useOrderingItems';
import {
  PaymentButton,
  PaymentInfo,
  UserInfo,
  Warning,
  OrderItemsSection,
} from 'order/components';
import { AddressInfo } from 'order/components/AddressInfo';
import { Address } from 'common/models';
import { useAddressList } from 'common/hooks/queries';
import { first } from 'lodash';

export default withAuth(function OrderPage() {
  const [user] = useUser(); // TODO userId 변경
  const orderList = useOrderingItems();
  const [isCheckSelfReceving, setIsCheckSelfReceving] = useState(false);
  const [addressList] = useAddressList();
  const [selectedAddress] = useState<Address>();
  const address =
    selectedAddress ??
    addressList?.find((a) => a.default) ??
    first(addressList);

  if (!user) {
    return null;
  }

  return (
    <Wrapper>
      <AppBar back>
        <AppBar.Title>결제하기</AppBar.Title>
      </AppBar>
      <OrderItemsSection orderList={orderList ?? []} />
      <AddressInfo value={address} />
      <UserInfo
        userInfo={user}
        setIsCheckSelfReceving={setIsCheckSelfReceving}
      />
      <PaymentInfo orderList={orderList ?? []} />
      <Warning />
      <PaymentButton
        userInfo={user}
        orderList={orderList ?? []}
        isCheckSelfReceving={isCheckSelfReceving}
        address={address}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
