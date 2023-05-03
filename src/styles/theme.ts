export const fontSize = {
  textXS: '0.75rem',
  textSM: '0.875rem',
  textBase: '1rem',
  textLg: '1.125rem',
  textXl: '1.25rem',
  text2Xl: '1.5rem',
  text3Xl: '1.875rem',
  text4Xl: '2.25rem',
  text5Xl: '3rem',
  text6Xl: '3.75rem',
  text7Xl: '4.5rem',
  text8Xl: '6rem',
  text9Xl: '8rem',
};

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;

const theme = {
  fontSize,
  fontWeight,
};

export default theme;
