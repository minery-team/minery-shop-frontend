import { useRouter } from 'next/router';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Icon } from '@iconify/react';
import styled from '@emotion/styled';

import { insertCommasToPrice } from '@cart/utils/cart';
import { ReactElement } from 'react';

interface IWine {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
}

interface IProps {
  wineList: IWine[];
  setWineList: Function;
}

export default function WineList({ wineList, setWineList }: IProps) {
  const router = useRouter();
  let totalPrice = 0;

  const { mutate: addItem } = useMutation(
    ['add-item'],
    async () => {
      return await axios.put('');
    },
    {
      onSuccess: (res) => {
        console.log('success res : ', res);
      },
      onError: (err) => {
        console.log('error : ', err);
      },
    }
  );

  const { mutate: minusItem } = useMutation(
    ['minus-item'],
    async () => {
      return await axios.put('');
    },
    {
      onSuccess: (res) => {
        console.log('success res : ', res);
      },
      onError: (err) => {
        console.log('error : ', err);
      },
    }
  );

  const { mutate: clearCart } = useMutation(
    ['minus-item'],
    async () => {
      return await axios.put('');
    },
    {
      onSuccess: (res) => {
        console.log('success res : ', res);
      },
      onError: (err) => {
        console.log('error : ', err);
      },
    }
  );

  return wineList.map((item: IWine, index: number) => {
    totalPrice += item.count * item.price;

    return (
      <>
        <ItemWrapper>
          <div>
            <Image
              src={item.image}
              alt={`${item.image}`}
              width={50}
              height={50}
            />
            <div>{item.name}</div>
            <div>{insertCommasToPrice(item.price)}원</div>
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

                // clear API
                clearCart();
              }}
            />
            <CountWrapper>
              <Icon
                icon="entypo:circle-with-minus"
                width={30}
                height={30}
                onClick={() => {
                  const tmp = [...wineList];

                  if (tmp[index].count > 1) {
                    tmp[index].count -= 1;
                    setWineList([...tmp]);

                    // minus API
                    minusItem();
                  }
                }}
              />
              <div>{item.count}</div>
              <Icon
                icon="entypo:circle-with-plus"
                width={30}
                height={30}
                onClick={() => {
                  const tmp = [...wineList];

                  tmp[index].count += 1;
                  setWineList([...tmp]);

                  // plus API
                  addItem();
                }}
              />
            </CountWrapper>
          </div>
        </ItemWrapper>
        <BottomNavigator
          onClick={() => {
            router.push('/OrderPage');
          }}
        >
          {insertCommasToPrice(totalPrice)}원 주문하러가기
        </BottomNavigator>
      </>
    );
  });
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
  width: 100vw;
  height: 100px;
  background-color: green;
`;
