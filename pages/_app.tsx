import '../styles/global.css';

import { globalStyles } from '@/styles';
import { AxiosProvider, FontProvider } from '@common/context';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';
import { ReactChannelIO } from 'react-channel-plugin';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { LoggerRoot } from '@/common/components';
import { PopupProvider, PortalProvider } from '@boxfoxs/bds-web';
import '../src/styles/colors.css';

import localFont from 'next/font/local';
import styled from '@emotion/styled';
import { colors } from '@/common/constants';

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

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <LoggerRoot>
          <QueryClientProvider client={queryClient}>
            <PortalProvider zIndex={3}>
              <PopupProvider>
                <AxiosProvider>
                  <FontProvider>
                    <RootContainer className={Pretendard.className}>
                      <Component {...pageProps} />
                    </RootContainer>
                    <ReactChannelIO
                      pluginKey={process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY!}
                      language="ko"
                      autoBoot
                    />
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

const RootContainer = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    display: none;
  }
  background: ${colors.defaultWhite};
  min-height: 100vh;
  max-width: 500px;
  overflow-x: hidden;
`;
