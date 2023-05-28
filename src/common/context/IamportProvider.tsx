import { ReactNode } from 'react';
import { useQuery } from 'react-query';

export function IamportProvider({
  children,
  key,
}: {
  key: string;
  children: ReactNode;
}) {
  useQuery('init-imp', () => {
    window.IMP.init(key);
  });
  return <>{children}</>;
}
