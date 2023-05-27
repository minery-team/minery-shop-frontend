import { useMemo } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { commaizeNumber } from '@boxfox/utils';
import { sum } from 'lodash';

import WineListItem from '@cart/components/WineListItem';
import { CartItem } from '@/common/models';

export default function WineList({ wineList }: { wineList: CartItem[] }) {
  const router = useRouter();

  const totalPrice = useMemo(
    () => sum(wineList.map((item) => item.amount * item.product.price)),
    [wineList]
  );

  const renderWineList = () => {
    return wineList.map((item: CartItem, index: number) => {
      return <WineListItem item={item} index={index} />;
    });
  };

  return (
    <>
      {renderWineList()}
      <BottomNavigator
        onClick={() => {
          router.push('/OrderPage');
        }}
      >
        {commaizeNumber(totalPrice)}원 주문하러가기
      </BottomNavigator>
    </>
  );
}

const BottomNavigator = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: green;
`;
