import { colors } from '@/common/constants';
import { useTextStyle } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import React, {
  CSSProperties,
  ComponentProps,
  ForwardedRef,
  ReactNode,
} from 'react';

interface Props extends ComponentProps<'input'> {
  label?: string;
  right?: ReactNode;
  containerStyle?: CSSProperties;
}

export const InputField = React.forwardRef(function InputField(
  { label, right, style, containerStyle, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const textStyle = useTextStyle({ size: 'xl' });
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} ref={ref} style={{ ...textStyle, ...style }} />
      {right}
    </Container>
  );
});

const Container = styled.div``;

const Label = styled.label`
  color: ${colors.gray600};
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 0;
  color: ${colors.gray900};
  border: none;
  outline: none;
  border-bottom: 1px solid ${colors.gray300};
  &:focus {
    border-color: ${colors.primary700Default};
  }
  transition: all 150ms;
  &::placeholder {
    color: ${colors.gray400};
  }
`;
