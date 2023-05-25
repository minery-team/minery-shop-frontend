import { isServer, isAlpha } from '@boxfox/next';

// @TODO pxiel id 설정 필요
const PIXEL_ID = '';

export const trackFbPageView = async () => {
  if (isAlpha() || isServer()) {
    return;
  }
  const ReactPixel = require('react-facebook-pixel').default;
  ReactPixel.init(PIXEL_ID);
  ReactPixel.pageView();
};
