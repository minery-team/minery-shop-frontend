import { useQuery } from '@tanstack/react-query';

import { fetchCartList } from '@/common/api/cart';

export const useCartList = () => {
  const query = useQuery(['/cart'], async () => {
    try {
      return await fetchCartList();
    } catch {
      return undefined;
    }
  });

  return [query.data, query.refetch] as const;
};
