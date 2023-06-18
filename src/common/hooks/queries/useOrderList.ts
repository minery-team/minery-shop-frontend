import { Order, OrderStatus } from 'common/models';
import { UseQueryOptions, useQuery } from 'react-query';
import { fetchOrders } from '../../api/order';

export type OrderStatusForFilter = OrderStatus | 'ALL';

export function useOrderList(
  status: OrderStatusForFilter,
  options?: UseQueryOptions<Order[]>
) {
  const query = useQuery<Order[]>(
    ['order-items', status],
    fetchOrders,
    options
  );
  return [query.data, query.refetch] as const;
}
