import { useSessionStorage } from 'common/hooks';
import { logger } from 'common/utils';
import { trackFbPageView } from 'common/utils/trackFbPageView';
import { LoggerParamsProvider, LoggerProvider } from '@boxfoxs/logger';
import { QS } from '@boxfoxs/next';
import { ReactNode, useEffect } from 'react';

export const LoggerRoot = ({ children }: { children: ReactNode }) => {
  const rawFrom = QS.get('from');
  const [from, setFrom] = useSessionStorage('from');

  const props = {
    from,
    version: 1,
    service: 'minery-shop',
  };

  useEffect(() => {
    trackFbPageView();
    if (rawFrom) {
      setFrom(rawFrom);
    }
    logger.setUserProperties(props);
  }, [rawFrom]);

  return (
    <LoggerProvider logger={logger}>
      <LoggerParamsProvider params={props}>{children}</LoggerParamsProvider>
    </LoggerProvider>
  );
};
