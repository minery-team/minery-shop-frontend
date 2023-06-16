import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { colors } from 'common/constants';

export default function SlideUp({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <HandleWrapper>
        <Handle />
      </HandleWrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px 20px 36px 20px;
  background-color: ${colors.defaultWhite};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const HandleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Handle = styled.div`
  width: 36px;
  height: 4px;
  margin: 12px 0 24px 0;
  border-radius: 100px;
  background-color: ${colors.gray200};
`;
