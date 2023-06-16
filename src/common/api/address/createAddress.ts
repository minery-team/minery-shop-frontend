import { Address, BaseAddress } from 'common/models/Address';
import { requester } from 'common/api/requester';

export async function createAddress(data: BaseAddress) {
  const res = await requester.post<Address>('/address', data);
  return res.data;
}
