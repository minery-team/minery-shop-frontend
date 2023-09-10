import '../styles/global.css';

import { AxiosProvider, FontProvider } from 'common/context';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';
import { ReactChannelIO } from 'react-channel-plugin';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { PopupProvider, PortalProvider } from '@boxfoxs/bds-web';
import { LoggerRoot } from 'common/components';
import { ToastProvider } from 'common/layout/ToastProvider';
import 'react-spring-bottom-sheet/dist/style.css';
import '../styles/colors.css';

import { SEOHeader } from '@boxfoxs/next-seo';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { useMaintainScrollGlobal } from 'common/hooks';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useMaintainScrollGlobal();

  return (
    <StrictMode>
      <SEOHeader
        url="https://app.minery.co.kr"
        title="마이너리 | 집앞까지 배달되는 수백가지 와인"
        description="마시고 싶었던 와인, 찾으러 다니기 불편하셨죠? 집 앞까지 배달되는 와인 샵 마이너리를 만나보세요"
        thumbnail="/images/img_thumbnail.jpg"
      />
      <FontProvider>
        <RecoilRoot>
          <LoggerRoot>
            <QueryClientProvider client={queryClient}>
              <PortalProvider zIndex={3}>
                <PopupProvider>
                  <ToastProvider>
                    <AxiosProvider>
                      <RootContainer>
                        <Component {...pageProps} />
                      </RootContainer>
                      <ReactChannelIO
                        pluginKey={process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY!}
                        language="ko"
                        autoBoot
                      />
                    </AxiosProvider>
                  </ToastProvider>
                </PopupProvider>
              </PortalProvider>
            </QueryClientProvider>
          </LoggerRoot>
        </RecoilRoot>
      </FontProvider>
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
