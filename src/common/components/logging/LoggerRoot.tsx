import { useSessionStorage } from '@/common/hooks';
import { logger } from '@/common/utils';
import { trackFbPageView } from '@/common/utils/trackFbPageView';
import { LoggerParamsProvider, LoggerProvider } from '@boxfox/logger';
import { QS } from '@boxfox/next';
import { ReactNode, useEffect } from 'react';

export function LoggerRoot({ children }: { children: ReactNode }) {
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
}
