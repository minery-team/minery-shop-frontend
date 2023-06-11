import { css } from '@emotion/react';

export function Space({
  bottom = 0,
  right = 0,
  left = 0,
}: {
  bottom?: 0 | string;
  right?: 0 | string;
  left?: 0 | string;
}) {
  return (
    <div
      css={css({
        paddingLeft: left,
        paddingBottom: bottom,
        paddingRight: right,
      })}
    />
  );
}
