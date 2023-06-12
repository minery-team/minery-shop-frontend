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
import { useCartList } from 'common/hooks/queries';

export default function OrderPage() {
  const router = useRouter();

  const [cartList] = useCartList();

  return (
    <Wrapper>
      <AppBar back>
        <AppBar.Title>결제하기</AppBar.Title>
      </AppBar>
      <WineInfoCard wineList={cartList ?? []} />
      <AddressInfo />
      <UserInfo />
      <PaymentInfo />
      <Warning />
      <PaymentButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
