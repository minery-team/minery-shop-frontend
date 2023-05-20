import { assertAxiosError } from '@boxfox/axios';
import { requester } from '@/common/api/requester';
import { setAccessToken } from '@/common/utils/access-token';

export async function validateSmsCode(phoneNumber: string, code: string) {
  try {
    const res = await requester.post<{ access_token: string }>(
      '/auth/sms/validate',
      {
        phoneNumber,
        code,
      }
    );
    console.log(res.data.access_token);
    await setAccessToken(res.data.access_token);
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 400) {
      throw new InvalidSmsCodeError();
    }
  }
}
export class InvalidSmsCodeError extends Error {}
