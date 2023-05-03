import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { AxiosProvider } from '@common/context';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef<QueryClient>(new QueryClient());

  return (
    <StrictMode>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <QueryClientProvider client={queryClient.current}>
          <AxiosProvider>
            <Component {...pageProps} />
          </AxiosProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </StrictMode>
  );
}
