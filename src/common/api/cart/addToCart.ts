import { CartCreateItem } from '@/models/Cart';
import { requester } from '@/common/api/requester';

export async function addToCart(data: CartCreateItem) {
  await requester.post('/cart', data);
}
