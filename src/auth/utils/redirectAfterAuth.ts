import { QS } from '@boxfoxs/next';
import Router from 'next/router';

export function redirectAfterAuth() {
  const redirectUrl = QS.get('redirectUrl');
  if (redirectUrl) {
    Router.replace(redirectUrl);
  } else {
    Router.back();
  }
}
