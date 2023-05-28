import '../styles/global.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StrictMode, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { AxiosProvider, FontProvider } from '@common/context';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles';

import { LoggerRoot } from '@/common/components';
import { PopupProvider, PortalProvider } from '@boxfoxs/bds-web';
import '../src/styles/colors.css';

import localFont from 'next/font/local';

const Pretendard = localFont({
  src: [
    {
      path: '../styles/fonts/Pretendard/Pretendard-Black.woff2',
      weight: '900',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: '../styles/fonts/Pretendard/Pretendard-Thin.woff2',
      weight: '100',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef<QueryClient>(new QueryClient());

  return (
    <StrictMode>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <LoggerRoot>
          <QueryClientProvider client={queryClient.current}>
            <PortalProvider zIndex={3}>
              <PopupProvider>
                <AxiosProvider>
                  <FontProvider>
                    <main className={Pretendard.className}>
                      <Component {...pageProps} />
                    </main>
                  </FontProvider>
                </AxiosProvider>
              </PopupProvider>
            </PortalProvider>
          </QueryClientProvider>
        </LoggerRoot>
      </RecoilRoot>
    </StrictMode>
  );
}
