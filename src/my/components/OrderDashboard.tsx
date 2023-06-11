import { OrderStatus, orderStatusToHumanReadable } from '@common/models';
import styled from '@emotion/styled';
import Link from 'next/link';
import { memo } from 'react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OrderStatusList = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: #f1f1f1;
  border-radius: 16px;
`;

const OrderStatusIndicator = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 4px;
  color: black;
`;

const OrderDashboard = () => {
  return (
    <Container>
      <h3 css={{ margin: 0 }}>주문내역</h3>
      <OrderStatusList href="/orderList">
        {Object.keys(OrderStatus).map((status) => (
          <OrderStatusIndicator key={status}>
            <h1 css={{ margin: 0 }}>{0}</h1>
            <span css={{ fontSize: '14px' }}>
              {orderStatusToHumanReadable(status as unknown as OrderStatus)}
            </span>
          </OrderStatusIndicator>
        ))}
      </OrderStatusList>
    </Container>
  );
};

export default memo(OrderDashboard);
