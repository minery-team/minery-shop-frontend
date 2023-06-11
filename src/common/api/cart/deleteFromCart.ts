import { requester } from '@common/api/requester';

export async function deleteFromCart(id: number) {
  await requester.delete(`/cart/${id}`);
}
