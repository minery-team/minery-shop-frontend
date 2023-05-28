import { setAccessToken } from '@/common/utils';
import { requester } from '../requester';

export async function confirmPass(impUid: string) {
  const res = await requester.post<{ access_token: string }>('/pass/confirm', {
    impUid,
  });
  await setAccessToken(res.data.access_token);
}
