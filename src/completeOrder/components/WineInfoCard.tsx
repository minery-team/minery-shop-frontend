import { useState } from 'react';
import Image from 'next/image';
import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { Order, OrderItem } from 'common/models';

export function WineInfoCard({ order }: { order: Order }) {
  const [isShowList, setIsShowList] = useState(false);

  const renderWineList = () => {
    if (isShowList)
      return (
        <>
          <Spacing height={16} />
          <Divider width="100%" height={1} color={colors.gray100} />
          {order.items.map((item: OrderItem) => {
            return (
              <CardWrapper key={`${item.id}`}>
                <img
                  src={item.product.image}
                  alt={item.product.image}
                  width={70}
                  height={79}
                />
                <img
                  src={item.product.image}
                  alt={item.product.image}
                  width={70}
                  height={79}
                />
                <WineInfoWrapper>
                  <Text size="base" weight="semibold" color={colors.gray900}>
                    {item.product.name}
                  </Text>
                  <Text size="sm" weight="regular" color={colors.gray600}>
                    {item.amount}개
                  </Text>
                  <PriceInfoWrapper>
                    <Text size="lg" weight="semibold" color={colors.gray900}>
                      {commaizeNumber(item.product.price)}원
                    </Text>
                    <OriginPriceText
                      size="base"
                      weight="regular"
                      color={colors.gray500}
                    >
                      {commaizeNumber(item.product.originalPrice)}원
                    </OriginPriceText>
                  </PriceInfoWrapper>
                </WineInfoWrapper>
              </CardWrapper>
            );
          })}
        </>
      );
    return undefined;
  };

  return (
    <Wrapper>
      <OrderListWrapper>
        <OrderTextWrapper>
          <Text size="lg" weight="semibold" color={colors.gray900}>
            주문상품
          </Text>
          <ListCountText onClick={() => setIsShowList(!isShowList)}>
            <Text size="lg" weight="semibold" color={colors.gray900}>
              {order.items ? order.items.length : 0}개
            </Text>
            <img
              src={`/images/common/chevron-${isShowList ? 'up' : 'down'}.png`}
              alt="chevron-down"
              width={12}
              height={6}
            />
          </ListCountText>
        </OrderTextWrapper>
        {renderWineList()}
      </OrderListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const OrderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const OrderTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListCountText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

const WineInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  gap: 8px;
`;

const PriceInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OriginPriceText = styled(Text)`
  text-decoration: line-through;
  margin-left: 4px;
`;
