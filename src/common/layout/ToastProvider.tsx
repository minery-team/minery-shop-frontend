import { ReactNode } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import { toastState } from 'common/recoil/toast';

const ToastItem = ({ content }: { content: ReactNode | string }) => {
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>{content}</ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const toastContent = useRecoilValue(toastState);

  return (
    <div>
      {toastContent && <ToastItem content={toastContent} />}
      {children}
    </div>
  );
}

export function useToast() {
  const setToastContent = useSetRecoilState(toastState);

  const open = ({ children }: { children: ReactNode | string }) => {
    setToastContent(children);

    setTimeout(() => {
      setToastContent('');
    }, 1000);
  };

  return { open };
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  width: calc(100% - 40px);
  max-width: 460px;
  padding: 14px 16px;
  border-radius: 6px;
  box-shadow: 0 4px 11px rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
