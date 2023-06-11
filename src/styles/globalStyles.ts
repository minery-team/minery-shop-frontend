import { css } from '@emotion/react';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
  }

  #__next,
  main {
    width: 100%;
    height: 100%;
  }
`;

export default globalStyles;
