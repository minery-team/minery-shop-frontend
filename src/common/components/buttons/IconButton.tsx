import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode, memo } from 'react';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background-color: white;
  margin: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  :hover {
    background-color: #f8f9fa;
  }
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

function IconButton({ icon, ...buttonProps }: Props) {
  return (
    <Button aria-label="icon-button" type="button" {...buttonProps}>
      {icon}
    </Button>
  );
}

export default memo(IconButton);
