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
              <PriceInfoWrapper>
                <div>{commaizeNumber(item.product.price)}원</div>
                <Divider />
                <div>{item.amount}개</div>
              </PriceInfoWrapper>
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

const PriceInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Divider = styled.div`
  width: 2px;
  height: 15px;
  background-color: gray;
  margin: 0 10px;
`;
