import { PortalConsumer, Spacing } from '@boxfoxs/bds-web';
import { useScrollDiriection } from '@boxfoxs/core-hooks-dom';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';

export const FloatingAppBarContainer = ({
  children,
  initialHidden,
  takeSpace = false,
  fixed = false,
}: {
  children: ReactNode;
  initialHidden?: boolean;
  takeSpace?: boolean;
  fixed?: boolean;
}) => {
  const scroll = useScrollDiriection('window');
  const hidden = fixed
    ? false
    : scroll
    ? scroll.direction === 'down' || scroll.value < 50
    : initialHidden ?? false;
  const spring = useSpring({
    transform: hidden ? `translateY(-100%)` : `translateY(0%)`,
    config: {
      duration: 200,
    },
  });
  return (
    <div>
      <PortalConsumer>
        <Container style={{ transform: spring.transform }}>
          {children}
        </Container>
      </PortalConsumer>
      {takeSpace && <Spacing height={56} />}
    </div>
  );
};

const Container = styled(animated.div)<{ background?: boolean }>`
  width: 100%;
  transition: all 200ms;
  position: fixed;
  top: 0;
  // box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;
