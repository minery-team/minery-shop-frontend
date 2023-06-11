import { useQuery } from '@tanstack/react-query';

import { fetchCurrentUser } from '@/common/api/auth';

export const useUserQuery = (userId: number) => {
  const query = useQuery(['/auth/me'], async () => {
    try {
      return await fetchCurrentUser();
    } catch {
      return undefined;
    }
  });

  return [query.data, query.refetch] as const;
};
