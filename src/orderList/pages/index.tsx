import styled from '@emotion/styled';
import { AppBar, Container } from 'common/components';
import { colors } from 'common/constants';
import { OrderStatusForFilter } from 'common/hooks/queries';
import { useState } from 'react';
import useOrders from 'common/hooks/useOrders';
import OrderListFilter from '../component/OrderListFilter';
import OrderListItem from '../component/OrderListItem';

const OrderListPage = () => {
  const [filterStatus, setFilterStatus] = useState<OrderStatusForFilter>('ALL');
  const orderList = useOrders({
    status: filterStatus,
  });
  return (
    <Container style={{ background: colors.gray100 }}>
      <AppBar back backgrounded>
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
  padding: 20px;
`;
