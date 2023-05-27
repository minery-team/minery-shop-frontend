import { AppBar } from '@/common/components';
import Container from '@/common/components/layout/Container';
import styled from '@emotion/styled';
import { colors } from '@/common/constants';
import useOrders, { OrderStatusForFilter } from '@/common/hooks/useOrders';
import { useState } from 'react';
import OrderListItem from '../component/OrderListItem';
import OrderListFilter from '../component/OrderListFilter';

const OrderListPage = () => {
  const [filterStatus, setFilterStatus] = useState<OrderStatusForFilter>('ALL');
  const orderList = useOrders({
    status: filterStatus,
  });
  return (
    <Container>
      <AppBar back>
        <AppBar.Title>주문내역</AppBar.Title>
      </AppBar>
      <OrderListFilter
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
      />
      <OrderListContainer>
        {orderList?.map((order) => (
          <OrderListItem order={order} key={order.id} />
        ))}
      </OrderListContainer>
    </Container>
  );
};

export default OrderListPage;

const OrderListContainer = styled.div`
  background-color: ${colors.gray100};
  padding: 20px;
`;
