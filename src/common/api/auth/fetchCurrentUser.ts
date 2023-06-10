import { assertAxiosError } from '@boxfoxs/axios';
import { User } from '@/common/models/User';
import { requester } from '@/common/api/requester';

export async function fetchCurrentUser() {
  try {
    const res = await requester.get<User>('/user/me');
    return res.data;
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 401) {
      return undefined;
    }
    throw e;
  }
}
