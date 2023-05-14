import { requester } from '@/common/api/requester';

export async function clearCart() {
  await requester.delete('/cart');
}
