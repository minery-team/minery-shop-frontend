import { isServer } from '@boxfoxs/next';

// @TODO pxiel id 설정 필요
const PIXEL_ID = '6995384113825981';

export const trackFbPageView = async () => {
  if (isServer()) {
    return;
  }
  const ReactPixel = require('react-facebook-pixel').default;
  ReactPixel.init(PIXEL_ID);
  ReactPixel.pageView();
};

export function startOrder() {
  const ReactPixel = require('react-facebook-pixel').default;
  ReactPixel.track('StartOrder');
}

export function submitOrder() {
  const ReactPixel = require('react-facebook-pixel').default;
  ReactPixel.track('SubmitOrder');
}
