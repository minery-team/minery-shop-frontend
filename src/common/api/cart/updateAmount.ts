import { requester } from '@/common/api/requester';

export async function updateAmount(id: number, amount: number) {
  await requester.patch(`/cart/${id}`, { amount });
}
