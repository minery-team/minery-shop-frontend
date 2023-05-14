import { Product } from '@/common/models/Product';
import { requester } from '@/common/api/requester';

export async function fetchProductList() {
  const res = await requester.get<Product[]>('/product');
  return res.data;
}
