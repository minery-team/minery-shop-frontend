import { CartItem } from '@/models/Cart';
import { requester } from '@/common/api/requester';

export async function fetchCartList() {
  const res = await requester.get<CartItem[]>('/cart');
  return res.data;
}
