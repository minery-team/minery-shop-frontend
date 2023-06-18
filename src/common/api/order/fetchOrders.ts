import { requester } from 'common/api/requester';
import { Order } from 'common/models/Order';

export async function fetchOrders() {
  const res = await requester.get<Order[]>('/order');
  return res.data;
}
