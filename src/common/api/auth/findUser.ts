import { requester } from '../requester';

export async function findUser(phone: string) {
  const res = await requester.get<{ exists: boolean }>('/user', {
    params: { phone },
  });
  return res.data.exists;
}
