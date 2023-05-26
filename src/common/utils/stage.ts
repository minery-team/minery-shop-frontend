import getConfig from 'next/config';

export function stage() {
  const { publicRuntimeConfig } = getConfig();
  return publicRuntimeConfig.STAGE;
}
export function isAlpha() {
  return stage() === 'alpha';
}

export function isLive() {
  return !isAlpha();
}
