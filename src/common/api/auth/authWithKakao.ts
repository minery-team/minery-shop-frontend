import { requester } from '@common/api/requester';
import { setAccessToken } from '@common/utils/access-token';

export async function authWithKakao(code: string) {
  const res = await requester.post('/auth/kakao', { code });
  await setAccessToken(res.data.access_token);
}
