import styled from '@emotion/styled';
import Link from 'next/link';
import { memo } from 'react';
import { OrderStatusType } from '../types';

const Container = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f8f9fa;
  border-radius: 4px;
  color: black;
  text-decoration: none;
`;

interface Props {
  count: number;
  status: OrderStatusType;
  href: string;
}

const OrderStatus = ({ count, status, href }: Props) => {
  return (
    <Container href={href}>
      <p css={{ fontSize: '24px', margin: 0 }}>{count}</p>
      <span css={{ fontSize: '14px' }}>{status}</span>
    </Container>
  );
};

export default memo(OrderStatus);
