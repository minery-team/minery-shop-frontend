import { ComponentProps } from 'react';
import { FixedBottomContainer } from './FixedBottomContainer';
import { MineryButton } from './MineryButton';

interface Props extends ComponentProps<typeof MineryButton> {
  background?: boolean;
}

export function FixedBottomCTA({ background, ...props }: Props) {
  return (
    <FixedBottomContainer background={background}>
      <MineryButton {...props} />
    </FixedBottomContainer>
  );
}
