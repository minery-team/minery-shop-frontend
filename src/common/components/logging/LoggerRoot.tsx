import { useSessionStorage } from '@/common/hooks';
import { logger } from '@/common/utils';
import { trackFbPageView } from '@/common/utils/trackFbPageView';
import { LoggerParamsProvider, LoggerProvider } from '@boxfoxs/logger';
import { QS } from '@boxfoxs/next';
import { ReactNode, useEffect } from 'react';

export const LoggerRoot = ({ children }: { children: ReactNode }) => {
  const rawFrom = QS.get('from');
  const [from, setFrom] = useSessionStorage('from');

  useEffect(() => {
    trackFbPageView();
    if (rawFrom) {
      setFrom(rawFrom);
    }
    logger.setUserProperties({
      from,
      version: 1,
      service: 'minery-shop',
    });
  }, [rawFrom]);

  return (
    <LoggerProvider logger={logger}>
      <LoggerParamsProvider
        params={{
          from,
          service: 'minery-shop',
          version: 1,
        }}
      >
        {children}
      </LoggerParamsProvider>
    </LoggerProvider>
  );
};
