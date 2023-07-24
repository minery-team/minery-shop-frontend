import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import { useMemo } from 'react';
import styled from '@emotion/styled';
import { sumBy } from 'lodash';

import { useBooleanState } from '@boxfoxs/core-hooks';
import { colors } from 'common/constants';
import { CartItem, OrderItem } from 'common/models';

interface Props {
  data: (CartItem | OrderItem)[];
  initialVisible?: boolean;
}

export function OrderItemsSection({ data, initialVisible = false }: Props) {
  const [isOpen, , , toggle] = useBooleanState(initialVisible);
  const orderItemsCount = useMemo(() => {
    return sumBy(data, (items) => items.amount);
  }, [data]);

  const renderWineList = () => {
    return (
      <>
        <Spacing height={16} />
        <Divider width="100%" height={1} color={colors.gray100} />
        {data.map((item: CartItem, index: number) => {
          return (
            <CardWrapper key={item.id}>
              <ImageWrapper>
                <img
                  src={item.product.image}
                  alt={`${item.product.id}_${index}`}
                  width={70}
                  height={79}
                />
              </ImageWrapper>
              {item.product.type !== 'snack' && (
                <ImageWrapper>
                  <img
                    src="images/snack_for_wine.png"
                    alt="snack"
                    width={70}
                    height={79}
                  />
                </ImageWrapper>
              )}
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
                  {item.product.originalPrice && (
                    <OriginPriceText
                      size="base"
                      weight="regular"
                      color={colors.gray500}
                    >
                      {commaizeNumber(item.product.originalPrice)}원
                    </OriginPriceText>
                  )}
                </PriceInfoWrapper>
              </WineInfoWrapper>
            </CardWrapper>
          );
        })}
      </>
    );
  };

  return (
    <Wrapper>
      <OrderListWrapper>
        <OrderTextWrapper>
          <Text size="lg" weight="semibold" color={colors.gray900}>
            주문상품
          </Text>
          <ListCountText onClick={toggle}>
            <Text size="lg" weight="semibold" color={colors.gray900}>
              {orderItemsCount}개
            </Text>
            <img
              src={`/assets/chevron_${isOpen ? 'up' : 'down'}.svg`}
              alt="chevron-up-down"
              width={24}
              height={24}
            />
          </ListCountText>
        </OrderTextWrapper>
        {isOpen && renderWineList()}
      </OrderListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px;
`;

const OrderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListCountText = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 79px;
  margin-right: 6px;
`;

const WineInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
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
