import { useEffect, useState } from 'react';
import { Order, OrderStatus } from '../models';
import { useOrderList } from './queries/useOrderList';

export type OrderStatusForFilter = OrderStatus | 'ALL';

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
