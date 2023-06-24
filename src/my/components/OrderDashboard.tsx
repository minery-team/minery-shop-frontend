import { OrderStatus, orderStatusToHumanReadable } from 'common/models';
import styled from '@emotion/styled';
import Link from 'next/link';
import { memo } from 'react';
import { Text } from '@boxfoxs/bds-web';
import { colors } from 'common/constants';
import { useOrderList } from 'common/hooks/queries';

const OrderDashboard = () => {
  const [orders] = useOrderList('ALL');

  return (
    <Container>
      <Link href="/order/list">
        <OrderStatusList>
          {Object.keys(OrderStatus).map((status) => (
            <OrderStatusIndicator key={status}>
              {/* <h1 css={{ margin: 0 }}>{0}</h1> */}
              <Text size="heading4" weight="semibold" color={colors.gray900}>
                {orders?.filter((order) => order.status === status).length ?? 0}
              </Text>
              <Text size="base" weight="regular" color={colors.gray700}>
                {orderStatusToHumanReadable(status as unknown as OrderStatus)}
              </Text>
            </OrderStatusIndicator>
          ))}
        </OrderStatusList>
      </Link>
    </Container>
  );
};

export default memo(OrderDashboard);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OrderStatusList = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-radius: 16px;
`;

const OrderStatusIndicator = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 4px;
  position: relative;

  &:not(:last-of-type)::after {
    content: '';
    height: 12px;
    width: 1px;

    position: absolute;
    right: 0;
    top: 50%; // If you want to set a smaller height and center it, change this value
    transform: translateY(-50%);

    background-color: ${colors.gray300};
  }
`;
