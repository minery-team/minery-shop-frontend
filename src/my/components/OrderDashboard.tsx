import styled from '@emotion/styled';
import OrderStatus from './OrderStatus';
import { OrderStatusType } from '../types';
import { memo } from 'react';
import Link from 'next/link';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  gap: 20px;
`;

const OrderStatusList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

function OrderDashboard() {
  return (
    <Container>
      <Link href="/my/order">
        <h3 css={{ margin: 0 }}>주문내역</h3>
      </Link>
      <OrderStatusList>
        {Object.entries(OrderStatusType).map(([key, value], index) => (
          <OrderStatus
            key={key}
            count={0}
            status={value}
            href={`/my/order?status=${index}`}
          />
        ))}
      </OrderStatusList>
    </Container>
  );
}

export default memo(OrderDashboard);
