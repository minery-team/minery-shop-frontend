import colors from '@/styles/colors';
import styled from '@emotion/styled';
import React, { ComponentProps } from 'react';

type InputProps = {
  invalid?: boolean;
};

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & Omit<ComponentProps<'input'>, keyof InputProps>
>(({ className, invalid, ...rest }, ref) => {
  return <StyledInput ref={ref} type="text" {...rest} />;
});

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid ${colors.gray['300']};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 16px;
  &::placeholder {
    ${colors.gray['500']}
  }
`;
