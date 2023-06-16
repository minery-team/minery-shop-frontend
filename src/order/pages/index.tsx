import { useRouter } from 'next/router';
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
import { useUserQuery, useCartList } from 'common/hooks/queries';
import { withAuth } from 'common/hocs';

export default withAuth(function OrderPage() {
  const router = useRouter();

  const [userInfo] = useUserQuery(0); // TODO userId 변경
  const [cartList] = useCartList();

  return (
    <Wrapper>
      <AppBar back>
        <AppBar.Title>결제하기</AppBar.Title>
      </AppBar>
      <WineInfoCard wineList={cartList ?? []} />
      <AddressInfo />
      <UserInfo userInfo={userInfo} />
      <PaymentInfo cartList={cartList} />
      <Warning />
      <PaymentButton cartList={cartList} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
