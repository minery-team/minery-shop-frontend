import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { AxiosProvider, FontProvider } from '@common/context';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles';

import { Rozha_One } from 'next/font/google';

const rozha_one = Rozha_One({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef<QueryClient>(new QueryClient());

  return (
    <StrictMode>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <QueryClientProvider client={queryClient.current}>
          <AxiosProvider>
            <FontProvider>
              <main className={rozha_one.className}>
                <Component {...pageProps} />
              </main>
            </FontProvider>
          </AxiosProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </StrictMode>
  );
}
