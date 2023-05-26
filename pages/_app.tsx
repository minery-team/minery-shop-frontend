import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StrictMode, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { AxiosProvider, FontProvider } from '@common/context';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles';

import { Rozha_One } from 'next/font/google';
import { LoggerRoot } from '@/common/components';
import { PopupProvider, PortalProvider } from '@boxfoxs/bds-web';
import useChannelTalk from '@/channelTalk/hooks/useChannelTalk';
import '../src/styles/colors.css';

const rozha_one = Rozha_One({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef<QueryClient>(new QueryClient());

  if (typeof window !== 'undefined') {
    useChannelTalk();
  }

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
                    <main className={rozha_one.className}>
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
