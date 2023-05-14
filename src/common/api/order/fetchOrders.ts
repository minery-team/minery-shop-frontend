import { Order } from '@/common/models/Order';
import { requester } from '@/common/api/requester';

export async function fetchOrders() {
  const res = await requester.get<Order[]>('/order');
  return res.data;
}
