import { useQuery } from 'react-query';

import { fetchCartList } from 'common/api/cart';

export const TEST_CART_DATA = [
  {
    id: 1,
    amount: 1,
    product: {
      id: 1,
      image: '/images/common/exclamation-mark.png',
      name: 'wine1',
      price: 10000,
    },
  },
  {
    id: 2,
    amount: 3,
    product: {
      id: 2,
      image: '/images/common/exclamation-mark.png',
      name: 'wine2',
      price: 20000,
    },
  },
  {
    id: 3,
    amount: 1,
    product: {
      id: 3,
      image: '/images/common/exclamation-mark.png',
      name: 'wine3',
      price: 30000,
    },
  },
];

export const useCartList = () => {
  const query = useQuery(['/cart'], async () => {
    try {
      return TEST_CART_DATA;
      // return await fetchCartList();
    } catch {
      return undefined;
    }
  });

  return [query.data, query.refetch] as const;
};
