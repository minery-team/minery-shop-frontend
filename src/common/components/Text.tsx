import { Text, TextProps } from '@boxfoxs/bds-web';
import { MTextSize } from '../constants';

export function MText<T extends keyof JSX.IntrinsicElements = 'div'>(
  props: TextProps<T, MTextSize>
) {
  return <Text<T, MTextSize> {...props} />;
}
