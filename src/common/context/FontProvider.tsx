import {
  FontProvider as BaseFontProvider,
  TextStyleProps,
} from '@boxfoxs/bds-web';
import { ReactNode } from 'react';
import { MTextSize, textSizes } from '../constants/textStyles';

export const FontProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BaseFontProvider<MTextSize>
      fontSize={getFontSize}
      lineHeight={getLineHeight}
    >
      {children}
    </BaseFontProvider>
  );
};

function getFontSize(props: TextStyleProps<MTextSize>) {
  return textSizes[props.size ?? 'base'];
}

function getLineHeight(props: TextStyleProps<MTextSize>) {
  if (props.weight === 'semibold') {
    return '130%';
  }
  return '140%';
}
