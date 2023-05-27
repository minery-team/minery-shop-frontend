import { AppBar } from '@/common/components';
import Container from '@/common/components/layout/Container';
import { useOrderList } from '@/common/hooks/useOrderList';
import styled from '@emotion/styled';
import Section from '@/common/components/layout/Section';
import { colors } from '@/common/constants';
import OrderListItem from '../component/OrderListItem';

const OrderListContainer = styled.div`
  background-color: ${colors.gray100};
  // background-color: red;
  padding: 20px;
`;

const OrderListPage = () => {
  const [orderList] = useOrderList();
  return (
    <Container>
      <AppBar back>
        <AppBar.Title>주문내역</AppBar.Title>
      </AppBar>
      <OrderListContainer>
        {orderList?.map((order) => (
          <OrderListItem order={order} key={order.id} />
        ))}
      </OrderListContainer>
    </Container>
  );
};

export default OrderListPage;
