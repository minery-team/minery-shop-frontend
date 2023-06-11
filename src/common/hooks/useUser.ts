import { fetchCurrentUser } from '@common/api/auth';
import { User } from '@common/models';
import { UseQueryOptions, useQuery } from 'react-query';

export function useUser(options?: UseQueryOptions<User | undefined>) {
  const query = useQuery<User | undefined>('user', fetchCurrentUser, options);
  return [query.data, query.refetch] as const;
}
