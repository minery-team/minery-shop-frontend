import { Order } from "models/Order";
import { useQuery, UseQueryOptions } from "react-query";
import { fetchOrders } from "remotes/order";

export function useOrderList(options?: UseQueryOptions<Order[]>) {
  const query = useQuery<Order[]>("order-items", fetchOrders, options);
  return [query.data, query.refetch] as const;
}
