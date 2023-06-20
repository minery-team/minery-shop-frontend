import { useQuery } from 'react-query';

import { fetchAddress } from 'common/api/address';

export const useAddressList = () => {
  const query = useQuery(['/fetch-address'], async () => {
    try {
      return await fetchAddress();
    } catch {
      return undefined;
    }
  });

  return [query.data, query.refetch] as const;
};
