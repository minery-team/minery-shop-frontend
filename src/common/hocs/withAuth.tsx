import { isClient, QS } from '@boxfox/next';
import { withSuspense } from '@boxfox/react';
import Router from 'next/router';
import React, { ComponentType } from 'react';
import { useUser } from '../hooks';

export function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>
) {
  return withSuspense(function (props: T) {
    const [user] = useUser({ suspense: true });
    if (user == null && isClient()) {
      Router.replace(
        `/auth${QS.create({ redirectUrl: location.href, back: true })}`
      );
      return <></>;
    }
    return <Component {...props} />;
  });
}
