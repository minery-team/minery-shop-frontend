import { fetchProductList } from 'common/api/product';
import { Product } from 'common/models';
import { UseQueryOptions, useQuery } from 'react-query';

export function useProductList(options?: UseQueryOptions<Product[]>) {
  const query = useQuery<Product[]>(
    'product-list',
    () => fetchProductList({}),
    options
  );
  return [query.data, query.refetch] as const;
}
