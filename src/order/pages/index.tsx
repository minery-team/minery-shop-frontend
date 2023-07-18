import { Divider } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { useState } from 'react';

import { AppBar } from 'common/components';
import { colors } from 'common/constants';
import { withAuth } from 'common/hocs';
import { useUser } from 'common/hooks';
import { useAddressList } from 'common/hooks/queries';
import { useOrderingItems } from 'common/hooks/useOrderingItems';
import { Address } from 'common/models';
import { first } from 'lodash';
import {
  OrderItemsSection,
  PaymentButton,
  PaymentInfo,
  UserInfo,
  Warning,
} from 'order/components';
import { AddressInfo } from 'order/components/AddressInfo';

export default withAuth(function OrderPage() {
  const [user] = useUser(); // TODO userId 변경
  const [addressList] = useAddressList({ suspense: true });
  const cartList = useOrderingItems({ suspense: true });
  const [isCheckSelfReceving, setIsCheckSelfReceving] = useState(true);
  const [selectedAddress] = useState<Address>();
  const address =
    selectedAddress ??
    addressList?.find((a) => a.default) ??
    first(addressList);
  const [deliveryMessage, setDeliveryMessage] = useState('');

  if (!user) {
    return null;
  }

  return (
    <Wrapper>
      <AppBar back>
        <AppBar.Title>결제하기</AppBar.Title>
      </AppBar>
      <StyledDivider width="100%" height={6} color={colors.gray100} />
      <OrderItemsSection data={cartList ?? []} />
      <StyledDivider width="100%" height={6} color={colors.gray100} />
      <AddressInfo value={address} setDeliveryMessage={setDeliveryMessage} />
      <StyledDivider width="100%" height={6} color={colors.gray100} />
      <UserInfo
        userInfo={user}
        setIsCheckSelfReceving={setIsCheckSelfReceving}
      />
      <StyledDivider width="100%" height={6} color={colors.gray100} />
      <PaymentInfo orderList={cartList ?? []} />
      <Warning />
      <PaymentButton
        userInfo={user}
        orderList={cartList ?? []}
        isCheckSelfReceving={isCheckSelfReceving}
        address={address}
        deliveryMessage={deliveryMessage}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDivider = styled(Divider)`
  margin: 24px 0;
`;
