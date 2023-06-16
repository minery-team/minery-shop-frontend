import { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { getAccessToken } from '../utils';

export async function interceptAuthToken(
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  const accessToken = getAccessToken();
  return {
    ...config,
    headers: new AxiosHeaders({
      ...config.headers.toJSON(),
      Authorization: `Bearer ${accessToken}`,
    }),
  };
}
