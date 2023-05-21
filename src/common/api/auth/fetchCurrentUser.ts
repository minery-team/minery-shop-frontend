import { assertAxiosError } from '@boxfox/axios';
import { User } from '@/common/models/User';
import { requester } from '@/common/api/requester';

export async function fetchCurrentUser() {
  try {
    // const res = await requester.get<User>('/auth/me');
    // return res.data;
    return dummyUser;
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 401) {
      return;
    }
    throw e;
  }
}

// TODO: Remove
const dummyUser: User = {
  id: 0,
  name: '알콜과 엔돌핀',
  email: 'drink@drink.com',
  phone: '010-2023-0514',
  registeredAt: '2021-01-01',
};
