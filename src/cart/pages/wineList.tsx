import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import styled from '@emotion/styled';
import { commaizeNumber } from '@boxfox/utils';

import { addToCart, deleteFromCart, clearCart } from '@/common/api/cart';
import { CartItem } from '@/common/models';

interface Props {
  wineList: CartItem[];
  setWineList: Function;
}

export default function WineList({ wineList, setWineList }: Props) {
  const router = useRouter();

  const totalPrice = useMemo(() => {
    let tmp = 0;

    wineList.map((item: CartItem) => {
      tmp += item.amount * item.product.price;
    });

    return tmp;
  }, [wineList]);

  const renderWineList = () => {
    return wineList.map((item: CartItem, index: number) => {
      return (
        <ItemWrapper key={`${item.product.name}_${index}`}>
          <div>
            <Image
              src={item.product.image}
              alt={`${item.id}`}
              width={50}
              height={50}
            />
            <div>{item.product.name}</div>
            <div>{commaizeNumber(item.product.price)}원</div>
          </div>
          <div>
            <Icon
              icon="material-symbols:close"
              width={30}
              height={30}
              onClick={() => {
                const tmp = [...wineList];

                tmp.splice(index, 1);
                setWineList([...tmp]);

                // clearCart();
              }}
            />
            <CountWrapper>
              <Icon
                icon="entypo:circle-with-minus"
                width={30}
                height={30}
                onClick={() => {
                  const tmp = [...wineList];

                  if (tmp[index].amount > 1) {
                    tmp[index].amount -= 1;
                    setWineList([...tmp]);

                    // deleteFromCart();
                  }
                }}
              />
              <div>{item.amount}</div>
              <Icon
                icon="entypo:circle-with-plus"
                width={30}
                height={30}
                onClick={() => {
                  const tmp = [...wineList];

                  tmp[index].amount += 1;
                  setWineList([...tmp]);

                  // addToCart();
                }}
              />
            </CountWrapper>
          </div>
        </ItemWrapper>
      );
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

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 200px;
  padding: 0 20px;
  background-color: pink;
  border: 1px solid black;
`;

const CountWrapper = styled.div`
  display: flex;
`;

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
