import { Product } from 'common/models/Product';
import { requester } from 'common/api/requester';
import { WineType } from 'common/models';

export async function fetchProductList({
  wineType,
  order,
}: {
  wineType?: WineType;
  order?: OrderType;
}) {
  const res = await requester.get<Product[]>('/product', {
    params: { wineType, order },
  });
  return res.data;
}

export enum OrderType {
  POPULAR,
  LOWEST_PRICE,
}
