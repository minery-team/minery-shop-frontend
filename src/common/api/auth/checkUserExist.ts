import { requester } from '../requester';

export async function checkUserExist(phone: string) {
  const res = await requester.get<{ exists: boolean }>('/user', {
    params: { phone },
  });
  return res.data.exists;
}
