import { Address } from 'common/models/Address';
import { requester } from 'common/api/requester';

export async function fetchAddress() {
  const res = await requester.get<Address[]>('/address');
  return res.data;
}
