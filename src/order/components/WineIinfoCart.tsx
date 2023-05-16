import Image from 'next/image';
import styled from '@emotion/styled';
import { commaizeNumber } from '@boxfox/utils';

import { CartItem } from '@/common/models';

export default function WineInfoCard({ wineList }: { wineList: CartItem[] }) {
  return (
    <>
      {wineList.map((item: CartItem, index: number) => {
        return (
          <CardWrapper>
            <Image
              src={item.product.image}
              alt={`${item.product.id}_${index}`}
              width={100}
              height={100}
            />
            <div>
              <div>{item.product.name}</div>
              <div>{commaizeNumber(item.product.price)}원</div>
            </div>
          </CardWrapper>
        );
      })}
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  border: 1px solid black;
`;
