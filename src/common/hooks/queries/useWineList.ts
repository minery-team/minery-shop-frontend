import { fetchProductList } from 'common/api/product';
import { Wine } from 'common/models/Wine';
import { Product } from 'models/Product';
import { UseQueryOptions, useQuery } from 'react-query';

export function useProductList(options?: UseQueryOptions<Wine[]>) {
  const query = useQuery<Product[]>('product-list', fetchProductList, options);
  return [query.data, query.refetch] as const;
}
