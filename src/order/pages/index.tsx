import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';

import { useCartList } from '@/common/hooks/queries';
import WineInfoCard from '@order/components/WineIinfoCart';
import UserInfo from '@order/components/UserInfo';
import PaymentInfo from '@order/components/PaymentInfo';
import { CommonModal } from '@/components/common/Modal';
import AddressList from '@order/components/AddressList';
import { CartItem } from '@/common/models';

export default function OrderPage() {
  const router = useRouter();

  const [cartList] = useCartList();
  const [isOpen, setIsOpen] = useState(false);

  // TODO 주소 등록 및 추가 시 바뀌는 부분 구현
  // TODO modal 수정

  const totalPayment = useMemo(() => {
    if (cartList) {
      let payment = 0;
      cartList.map((item: CartItem) => {
        payment += item.product.price * item.amount;
      });

      return payment;
    }
    return 0;
  }, []);

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
      <UserInfo setIsOpen={(v: boolean) => setIsOpen(v)} />
      <WineInfoCard wineList={cartList ?? []} />
      <PaymentInfo totalPayment={totalPayment} />
      <BottomNavigator
        onClick={() => {
          // TODO 토스 페이먼츠 연동
        }}
      >
        주문하러가기
      </BottomNavigator>
      <CommonModal
        children={<AddressList />}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
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

const BottomNavigator = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100px;
  background-color: green;
`;
