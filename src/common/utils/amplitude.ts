import { AmplitudeLogger, Logger, LogParams } from '@boxfox/logger';
import { isServer } from '@boxfox/next';
import type { AmplitudeClient } from 'amplitude-js';

const AMPLITUDE_API_KEY = '7266988443867d11011c285d5f08ba7a';

export function createWebAmplitudeLogger(): Logger & AmplitudeLogger {
  if (isServer()) {
    return {
      log: console.log,
      setUserId: console.log,
      setUserProperties: console.log,
    };
  }
  const amplitudeJs = require('amplitude-js');
  const client: AmplitudeClient = amplitudeJs.default.getInstance();
  client.init(AMPLITUDE_API_KEY);
  return {
    log: async (name: string, params?: LogParams) => {
      //if (isAlpha()) {
      console.log(
        '\x1b[36m[Alpha-Log]',
        name,
        JSON.stringify(params),
        '\x1b[0m'
      );
      //} else {
      client.logEvent(name, params ?? {});
      //}
    },
    setUserId: (id: string) => client.setUserId(id),
    setUserProperties: (props: Record<string, unknown>) =>
      client.setUserProperties(props),
  };
}

export const logger = createWebAmplitudeLogger();
