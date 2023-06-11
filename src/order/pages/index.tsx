import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

import { useModal } from '@common/components';
import { useCartList } from '@common/hooks/queries';
import { sumBy } from 'lodash';
import { AddressList } from '../components/AddressList';
import { WineInfoCard } from '../components/WineIinfoCart';
import { PaymentInfo } from '../components/PaymentInfo';
import { UserInfo } from '../components/UserInfo';

export default function OrderPage() {
  const router = useRouter();

  const [cartList] = useCartList();

  const openAddressListModal = useAddressModal();

  // TODO 주소 등록 및 추가 시 바뀌는 부분 구현
  // TODO modal 수정

  const totalPayment = useMemo(() => {
    if (!cartList) {
      return 0;
    }
    return sumBy(cartList, (item) => item.product.price * item.amount);
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
      <UserInfo onAddressClick={openAddressListModal} />
      <WineInfoCard wineList={cartList ?? []} />
      <PaymentInfo totalPayment={totalPayment} />
      <BottomNavigator
        onClick={() => {
          // TODO 토스 페이먼츠 연동
        }}
      >
        주문하러가기
      </BottomNavigator>
    </div>
  );
}

function useAddressModal() {
  const open = useModal('address');
  return useCallback(() => {
    open(<AddressList />);
  }, [open]);
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
