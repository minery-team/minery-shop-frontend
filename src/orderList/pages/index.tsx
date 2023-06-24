import styled from '@emotion/styled';
import { AppBar, Container } from 'common/components';
import { colors } from 'common/constants';
import { OrderStatusForFilter, useOrderList } from 'common/hooks/queries';
import { useState } from 'react';
import OrderListFilter from '../component/OrderListFilter';
import OrderListItem from '../component/OrderListItem';

const OrderListPage = () => {
  const [filterStatus, setFilterStatus] = useState<OrderStatusForFilter>('ALL');
  const [orders] = useOrderList('ALL');
  const filteredOrders = orders?.filter(
    (order) => filterStatus === 'ALL' || order.status === filterStatus
  );

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
        {filteredOrders?.map((order) => (
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

const HeaderContainer = styled.div`
  background-color: white;
`;
