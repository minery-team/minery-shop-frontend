import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { AxiosProvider } from '@common/context';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef<QueryClient>(new QueryClient());

  return (
    <StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient.current}>
          <AxiosProvider>
            <Component {...pageProps} />
          </AxiosProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </StrictMode>
  );
}
