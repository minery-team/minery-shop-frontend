import { QS, isServer } from '@boxfoxs/next';
import { withSuspense } from '@boxfoxs/react';
import { useUser } from 'common/hooks/useUser';
import Router from 'next/router';
import React, { ComponentType } from 'react';

export function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>
) {
  return withSuspense(function (props: T) {
    const [user] = useUser({ suspense: true });

    if (isServer()) {
      return null;
    }

    if (user == null) {
      Router.replace(
        `/auth${QS.create({ redirectUrl: window.location.href, back: true })}`
      );
      return <></>;
    }

    return <Component {...props} />;
  });
}
