import { useEffect, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
  const [target, setTarget] = useState<Element | null>(null);
  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show && (
    <BackDrop>
      <StyledModal>{children}</StyledModal>
    </BackDrop>
  );
  useEffect(() => {
    if (document) {
      setTarget(document.querySelector('#modal'));
    }
  }, []);

  if (!target) return <></>;

  return ReactDOM.createPortal(modalContent, target);
};

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

export default Modal;
