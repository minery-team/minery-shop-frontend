import { ReactNode } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export function CommonModal({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (isOpen) {
    return (
      <RootContainer onClick={onClose}>
        <ModalContaer onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContaer>
      </RootContainer>
    );
  }
  return <></>;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const RootContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);
  animation: ${fadeIn} 0.2s;
`;

const moveUp = keyframes`
  from {
    transform: translateY(30%);
  }
  to {
    transform: translateY(0%);
  }
`;

const ModalContaer = styled.div`
  background: white;
  box-shadow: 0px 16px 32px rgba(15, 18, 0, 0.12);
  border-radius: 4px;
  animation: ${moveUp} 0.2s;
`;
