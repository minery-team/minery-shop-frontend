import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';

import WineList from '@cart/pages/wineList';
import NoWineList from '@cart/pages/noWineList';
import { useCartList } from '@/common/hooks/queries/useCartList';
import { clearCart } from '@/common/api/cart';

export default function CartPage() {
  const router = useRouter();
  const [cartList, refetch] = useCartList();

  return (
    <Container>
      <TopNavigator>
        <Wrapper>
          <Icon
            icon="material-symbols:chevron-left-rounded"
            width={30}
            height={30}
            onClick={() => router.back()}
          />
          <div>장바구니</div>
        </Wrapper>
        <Icon
          icon="ph:trash"
          width={30}
          height={30}
          onClick={() => {
            clearCart();
            refetch();
          }}
        />
      </TopNavigator>
      {cartList && cartList.length ? (
        <WineList wineList={cartList} />
      ) : (
        <NoWineList />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  padding-bottom: 100px;
`;

const TopNavigator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
