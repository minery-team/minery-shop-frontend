import { CSSProperties, ComponentProps } from 'react';
import { FixedBottomContainer } from './FixedBottomContainer';
import { MineryButton } from './MineryButton';

interface Props extends ComponentProps<typeof MineryButton> {
  background?: boolean;
  containerStyle?: CSSProperties;
  full?: boolean;
}

export function FixedBottomCTA({
  background,
  containerStyle: rawContainerStyle,
  full,
  ...props
}: Props) {
  const buttonProps = full
    ? {
        height: 'calc(56px + env(safe-area-inset-bottom))',
        style: { paddingBottom: 'env(safe-area-inset-bottom)' },
        radius: full ? 0 : 6,
      }
    : {};
  return (
    <FixedBottomContainer background={background} full={full}>
      <MineryButton
        {...props}
        {...buttonProps}
        style={{ ...buttonProps.style, ...props.style }}
      />
    </FixedBottomContainer>
  );
}
