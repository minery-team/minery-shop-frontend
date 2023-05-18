import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';

import { useUserQuery, useCartList } from '@/common/hooks/queries';
import WineInfoCard from '@order/components/WineIinfoCart';

export default function OrderPage() {
  const router = useRouter();
  const [userInfo] = useUserQuery(0); // TODO userId 변경
  const [catList] = useCartList();

  return (
    <div>
      <TopNavigator>
        <Wrapper>
          <Icon
            icon="material-symbols:chevron-left-rounded"
            width={30}
            height={30}
            onClick={() => router.back()}
          />
          <div>주문하기</div>
        </Wrapper>
      </TopNavigator>
      <FlexDiv>
        <div>고객정보</div>
        <div>{userInfo?.name}</div>
      </FlexDiv>
      <FlexDiv>
        <div>배송지</div>
        <div onClick={() => console.log(123)}>룰루랄라</div>
      </FlexDiv>
      <WineInfoCard
        wineList={[
          {
            id: 1,
            amount: 1,
            product: {
              id: 1,
              image: '',
              name: 'test',
              enName: 'test',
              desc: '',
              price: 10000,
            },
          },
        ]}
      />
      <BottomNavigator
        onClick={() => {
          console.log('결제 연동!');
        }}
      >
        주문하러가기
      </BottomNavigator>
    </div>
  );
}

const TopNavigator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomNavigator = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100px;
  background-color: green;
`;
