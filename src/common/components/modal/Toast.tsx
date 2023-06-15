import { ReactNode, useEffect, useCallback } from 'react';
import { usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

export function Toast({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 1000);
  }, []);

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
    </Container>
  );
}

export function useToast(key: string) {
  const { open, close } = usePopup(key);

  return {
    open: useCallback(
      (options: Parameters<ReturnType<typeof usePopup>['open']>[0]) => {
        open({
          ...options,
          children: <Toast onClose={close}>{options.children}</Toast>,
        });
      },
      [open, close]
    ),
  };
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
