import { colors } from '@boxfoxs/bds-common';
import { inDesktop } from '@boxfoxs/bds-web';

export const pressableStyle = {
  background: (background = colors.gray[100]) => `
    transition: background 250ms;
    &:active {
      background: ${background};
    }
    ${inDesktop(`
      &:focus {
        background: ${background};
      }
    `)}
  `,
  opacity: (opacity = 0.7) => `
    transition: opacity 200ms;
    &:active {
      opacity: ${opacity};
    }
    ${inDesktop(`
      &:focus {
        opacity: ${opacity};
      }
    `)}
  `,
  scale: (scale = 0.97) => `
    transition: transform 150ms;
    &:active {
      transform: scale(${scale});
    }
    ${inDesktop(`
      &:focus {
        transform: scale(${scale});
      }
    `)}
  `,
};
