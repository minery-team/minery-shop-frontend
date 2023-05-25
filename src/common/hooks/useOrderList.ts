import { Order } from '@/common/models';
import { UseQueryOptions, useQuery } from 'react-query';
import { fetchOrders } from '../api/order';

export function useOrderList(options?: UseQueryOptions<Order[]>) {
  const query = useQuery<Order[]>('order-items', fetchOrders, options);
  return [query.data, query.refetch] as const;
}
