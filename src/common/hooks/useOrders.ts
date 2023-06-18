import { OrderStatusForFilter, useOrderList } from './queries';

interface Props {
  status: OrderStatusForFilter;
}

const useOrders = ({ status }: Props) => {
  const [orders] = useOrderList(status);

  const filteredOrders = orders?.filter((order) => {
    if (status === 'ALL') {
      return true;
    }
    return order.status === status;
  });

  return filteredOrders;
};

export default useOrders;
