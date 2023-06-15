import { useQuery, useMutation } from 'react-query';

import { createAddress, fetchAddress } from 'common/api/address';
import { BaseAddress } from 'common/models';

export const useCreateAddress = (address: BaseAddress) => {
  const query = useMutation(['/create-address'], async () => {
    try {
      return await createAddress(address);
    } catch {
      return undefined;
    }
  });

  return [query.data, query.mutate] as const;
};

export const useFetchAddress = () => {
  const query = useQuery(['/fetch-address'], async () => {
    try {
      return await fetchAddress();
    } catch {
      return undefined;
    }
  });

  return [query.data, query.refetch] as const;
};
