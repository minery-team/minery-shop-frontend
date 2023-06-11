import { usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { ReactNode, useCallback } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export function CommonModal({ children, onClose }: ModalProps) {
  return (
    <BackDrop onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>{children}</StyledModal>
    </BackDrop>
  );
}

export function useModal(key: string) {
  const { open, close } = usePopup(key);
  return useCallback(
    (children: ReactNode) => {
      open({
        children: <CommonModal onClose={close}>{children}</CommonModal>,
        onClose: close,
      });
    },
    [open, close]
  );
}

const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
`;

const StyledModal = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
`;
