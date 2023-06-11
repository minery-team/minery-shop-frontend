import { colors } from '@boxfoxs/bds-common';
import { FixedBottomContainer as Container, Flex } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  background?: boolean;
}

export function FixedBottomContainer({ children, background }: Props) {
  return (
    <Flex.Center>
      <StyledContainer
        background={background ? 'solid' : false}
        style={{ zIndex: 100 }}
      >
        {children}
      </StyledContainer>
    </Flex.Center>
  );
}

const StyledContainer = styled(Container)<{ background?: 'solid' | boolean }>`
  background: ${colors.white};
  padding: 0 20px calc(12px + env(safe-area-inset-bottom));
  ${(p) =>
    p.background
      ? `filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.08));`
      : ''}
  max-width: 500px;
  margin: 0 auto;
  margin: 0 calc(calc(100vw - min(500px, 100vw)) / 2);
`;
