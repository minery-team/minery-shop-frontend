import { AppBar } from '@/common/components';
import Container from '@/common/components/layout/Container';
import { useOrderList } from '@/common/hooks/useOrderList';
import OrderListItem from '../component/OrderListItem';

const OrderList = () => {
  const [orderList] = useOrderList();
  return (
    <Container>
      <AppBar back>
        <AppBar.Title>주문내역</AppBar.Title>
      </AppBar>
      {orderList?.map((order) => (
        <OrderListItem order={order} key={order.id} />
      ))}
    </Container>
  );
};

export default OrderList;
