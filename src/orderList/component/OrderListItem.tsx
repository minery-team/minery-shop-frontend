import ContentCard from '@/common/components/layout/ContentCard';
import { colors } from '@/common/constants';
import {
  Order,
  OrderStatus,
  orderStatusToHumanReadable,
} from '@/common/models';
import { Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';

interface Props {
  order: Order;
}

const OrderListItem = ({ order }: Props) => {
  return (
    <OrderListItemContainer>
      <OrderListItemHeader>
        <DateIndicator>{dateToYYYYMMDDHHmm(order.time)}</DateIndicator>
        <OrderStatusIndicator
          style={{
            backgroundColor: orderStatusToBackgroundColor(order.status),
          }}
        >
          <Text color={orderStatusToTextColor(order.status)}>
            {orderStatusToHumanReadable(order.status)}
          </Text>
        </OrderStatusIndicator>
      </OrderListItemHeader>
      <Spacing height={20} />
      {order.items.map((item) => (
        <OrderProductListItem key={item.id}>
          <ProductImage src={item.product.image} alt={item.product.name} />
          <ProductInfoContainer>
            <ProductTitle weight="semibold">{item.product.name}</ProductTitle>
            <Text color={colors.gray600}>{item.amount}개</Text>
            <Text weight="semibold" size="2xl">
              {commaizeNumber(item.product.price)}
            </Text>
          </ProductInfoContainer>
        </OrderProductListItem>
      ))}
    </OrderListItemContainer>
  );
};

export default OrderListItem;

const OrderListItemContainer = styled(ContentCard)`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const OrderListItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DateIndicator = styled.span`
  font-weight: 600;
`;

const OrderStatusIndicator = styled.div`
  height: 17px;
  border-radius: 6px;
  padding: 4px 8px;
`;

const OrderProductListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 16px 0;
  height: 73px;

  &:not(:last-of-type) {
    padding-bottom: 20px;
    border-bottom: 1px solid ${colors.gray100};
  }
`;

const ProductImage = styled.img`
  // width: 63px;
  height: 100%;
`;

const ProductInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const ProductTitle = styled(Text)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// YYYY.MM.DD HH:mm
function dateToYYYYMMDDHHmm(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // JavaScript에서 월은 0부터 시작하므로 1을 더해야 합니다.
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}

function orderStatusToBackgroundColor(status: OrderStatus) {
  switch (status) {
    case OrderStatus.PAYMENT:
      return colors.primary100;
    case OrderStatus.PREPARE:
      return colors.subBlue100;
    case OrderStatus.SENT:
      return colors.subGreen100;
    case OrderStatus.DONE:
      return colors.gray100;
    default:
      throw new Error('Invalid OrderStatus');
  }
}

function orderStatusToTextColor(status: OrderStatus) {
  switch (status) {
    case OrderStatus.PAYMENT:
      return colors.primary700Default;
    case OrderStatus.PREPARE:
      return colors.subBlue500;
    case OrderStatus.SENT:
      return colors.subGreen500;
    case OrderStatus.DONE:
      return colors.gray500;
    default:
      throw new Error('Invalid OrderStatus');
  }
}
