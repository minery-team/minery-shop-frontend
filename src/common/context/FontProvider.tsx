import {
  FontProvider as BaseFontProvider,
  TextStyleProps,
} from '@boxfoxs/bds-web';
import { ReactNode } from 'react';
import { textSizes } from '../constants/textStyles';

export const FontProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BaseFontProvider fontSize={getFontSize} lineHeight={getLineHeight}>
      {children}
    </BaseFontProvider>
  );
};

function getFontSize(props: TextStyleProps) {
  return textSizes[props.size ?? 'base'];
}

function getLineHeight(props: TextStyleProps) {
  if (props.weight === 'semibold') {
    return '130%';
  }
  return '140%';
}
