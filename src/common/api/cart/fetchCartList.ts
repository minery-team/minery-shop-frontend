import { CartItem } from 'common/models/Cart';
import { requester } from 'common/api/requester';

export async function fetchCartList() {
  try {
    const res = await requester.get<CartItem[]>('/cart');
    return res.data;
  } catch {
    return [];
  }
}
