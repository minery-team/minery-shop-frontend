export const textSizes = {
  base: 14,
  sm: 12,
  lg: 16,
  xl: 18,
  xxl: 20,
  heading1: 40,
  heading2: 36,
  heading3: 30,
  heading4: 24,
  caption: 10,
} as const;

export type MTextSize = keyof typeof textSizes;
