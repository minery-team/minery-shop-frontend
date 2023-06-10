import Image from 'next/image';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { commaizeNumber } from '@boxfoxs/utils';

import { useCartList } from '@/common/hooks/queries/useCartList';
import { updateAmount, deleteFromCart } from '@/common/api/cart';
import { CartItem } from '@/common/models';

export default function WineListItem({
  item,
  index,
}: {
  item: CartItem;
  index: number;
}) {
  const [_, refetch] = useCartList();

  const addWine = () => {
    updateAmount(item.id, item.amount + 1);
    refetch();
  };

  const deleteWine = () => {
    if (item.amount > 1) {
      updateAmount(item.id, item.amount - 1);
      refetch();
    }
  };

  const clearWine = () => {
    deleteFromCart(item.id);
    refetch();
  };

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
          onClick={clearWine}
        />
        <CountWrapper>
          <Icon
            icon="entypo:circle-with-minus"
            width={30}
            height={30}
            onClick={deleteWine}
          />
          <div>{item.amount}</div>
          <Icon
            icon="entypo:circle-with-plus"
            width={30}
            height={30}
            onClick={addWine}
          />
        </CountWrapper>
      </div>
    </ItemWrapper>
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
