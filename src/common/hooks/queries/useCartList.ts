import { UseQueryOptions, useQuery } from 'react-query';

import { fetchCartList } from 'common/api/cart';
import { CartItem } from 'common/models';
import { useUser } from '../useUser';

export const useCartList = (options?: UseQueryOptions<CartItem[]>) => {
  const [user] = useUser();
  const query = useQuery<CartItem[]>(
    ['/cart', user?.id],
    fetchCartList,
    options
  );

  return [query.data, query.refetch] as const;
};
