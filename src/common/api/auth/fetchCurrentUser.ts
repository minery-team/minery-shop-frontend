import { assertAxiosError } from '@boxfox/axios';
import { User } from '@/common/models/User';
import { requester } from '@/common/api/requester';

export async function fetchCurrentUser() {
  try {
    const res = await requester.get<User>('/auth/me');
    return res.data;
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 401) {
      return;
    }
    throw e;
  }
}
