import styled from '@emotion/styled';
import { AppBar, Container } from 'common/components';
import { colors } from 'common/constants';
import { OrderStatusForFilter, useOrderList } from 'common/hooks/queries';
import { useState } from 'react';
import { Flex, Spacing, Text } from '@boxfoxs/bds-web';
import OrderListFilter from '../component/OrderListFilter';
import OrderListItem from '../component/OrderListItem';
import { LoggingState } from '@boxfoxs/logger';

const OrderListPage = () => {
  const [filterStatus, setFilterStatus] = useState<OrderStatusForFilter>('ALL');
  const [orders] = useOrderList('ALL');
  const filteredOrders = orders?.filter(
    (order) => filterStatus === 'ALL' || order.status === filterStatus
  );

  return (
    <LoggingState name="Page View - Order List">
      <Container style={{ background: colors.gray100 }}>
        <AppBar back backgrounded>
          <AppBar.Title>주문내역</AppBar.Title>
        </AppBar>
        <OrderListFilter
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
        />
        <OrderListContainer>
          {filteredOrders?.length ? (
            filteredOrders.map((order) => (
              <OrderListItem order={order} key={order.id} />
            ))
          ) : (
            <EmptyBox />
          )}
        </OrderListContainer>
      </Container>
    </LoggingState>
  );
};

export default OrderListPage;

const OrderListContainer = styled.div`
  padding: 20px;
`;

function EmptyBox() {
  return (
    <EmptyContainer>
      <EmptyImage
        src="/assets/img_information_circle_gray300.png"
        alt="empty"
      />
      <Spacing height={24} />
      <Text size="lg" color={colors.gray600}>
        아직 주문내역이 없어요
      </Text>
    </EmptyContainer>
  );
}

const EmptyContainer = styled(Flex.Center)`
  height: 80vh;
  flex-direction: column;
`;

const EmptyImage = styled.img`
  width: 64px;
  height: 64px;
`;
