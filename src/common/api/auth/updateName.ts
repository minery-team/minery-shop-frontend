import { requester } from '@common/api/requester';

export async function updateName(name: string) {
  await requester.patch('/user/me/name', { name });
}

export async function updatePhone(phone: string) {
  await requester.patch('/user/me/phone', { phone });
}
