import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';

import WineList from '@cart/pages/wineList';
import NoWineList from '@cart/pages/noWineList';
import { CartItem } from '@/common/models';

export default function CartPage() {
  const router = useRouter();
  const [wineList, setWineList] = useState<CartItem[]>([]);

  useQuery(
    ['cart-list'],
    async () => {
      return await axios.get('http://localhost:3000/api/cart');
    },
    {
      onSuccess: (res) => {
        console.log('success res : ', res);
        setWineList(res.data.item);
      },
      onError: (err) => {
        console.log('error : ', err);
      },
    }
  );

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
            setWineList([]);
          }}
        />
      </TopNavigator>
      {wineList.length ? (
        <WineList
          wineList={wineList}
          setWineList={(wineList: CartItem[]) => setWineList(wineList)}
        />
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
