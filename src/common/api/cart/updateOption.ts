import { CartCreateItemOption } from '@/models/Cart';
import { requester } from '@/common/api/requester';

export async function updateOption(id: number, data: CartCreateItemOption[]) {
  await requester.patch(`/cart/${id}/option`, data);
}
