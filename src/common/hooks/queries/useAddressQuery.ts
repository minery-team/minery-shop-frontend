import { UseQueryOptions, useQuery } from 'react-query';

import { fetchAddress } from 'common/api/address';
import { Address } from 'common/models';

export const useAddressList = (options?: UseQueryOptions<Address[]>) => {
  const query = useQuery<Address[]>(
    ['/fetch-address'],
    async () => {
      try {
        return await fetchAddress();
      } catch {
        return [];
      }
    },
    options
  );

  return [query.data, query.refetch] as const;
};
