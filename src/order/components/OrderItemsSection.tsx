import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';

import { useBooleanState } from '@boxfoxs/core-hooks';
import { colors } from 'common/constants';
import { CartItem, OrderItem } from 'common/models';

interface Props {
  data: (CartItem | OrderItem)[];
  initialVisible?: boolean;
}

export function OrderItemsSection({ data, initialVisible = false }: Props) {
  const [isOpen, , , toggle] = useBooleanState(initialVisible);

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
              <ImageWrapper>
                <img
                  src={item.product.image}
                  alt={`${item.product.id}_${index}`}
                  width={70}
                  height={79}
                />
              </ImageWrapper>
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
              {data.length}개
            </Text>
            <img
              src={`/assets/chevron_${isOpen ? 'up' : 'down'}.svg`}
              alt="chevron-up-down"
              width={16}
              height={16}
            />
          </ListCountText>
        </OrderTextWrapper>
        {isOpen && renderWineList()}
      </OrderListWrapper>
      <Spacing height={18} />
      <Divider width="100%" height={6} color={colors.gray100} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 24px;
`;

const OrderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
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

const ImageWrapper = styled.div`
  width: 70px;
  height: 79px;
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
