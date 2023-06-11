import '../styles/global.css';

import { AxiosProvider, FontProvider } from 'common/context';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';
import { ReactChannelIO } from 'react-channel-plugin';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { PopupProvider, PortalProvider } from '@boxfoxs/bds-web';
import { LoggerRoot } from 'common/components';
import '../styles/colors.css';

import { colors } from 'common/constants';
import styled from '@emotion/styled';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <RecoilRoot>
        <LoggerRoot>
          <QueryClientProvider client={queryClient}>
            <PortalProvider zIndex={3}>
              <PopupProvider>
                <AxiosProvider>
                  <FontProvider>
                    <RootContainer>
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
