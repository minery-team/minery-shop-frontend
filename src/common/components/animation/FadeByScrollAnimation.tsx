import { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';
import { VisibleByScroll } from './VisibleByScroll';

interface Props {
  children: ReactNode;
  delay?: number;
}

export function FadeByScrollAnimation(props: Props) {
  return (
    <VisibleByScroll offset={0.6}>
      {(isVisible) => <FadeAnimation visible={isVisible} {...props} />}
    </VisibleByScroll>
  );
}
function FadeAnimation({
  visible,
  children,
  delay,
}: {
  visible: boolean;
  children: ReactNode;
  delay?: number;
}) {
  const spring1 = useSpring({
    from: { transform: 'translateY(10%)' },
    to: { transform: `translateY(${visible ? '0%' : '10%'})` },
    delay,
    config: {
      tension: 150,
      friction: 26,
      precision: 0.01,
      duration: 700,
    },
  });
  const spring2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: visible !== false ? 1 : 0 },
    delay,
    config: {
      tension: 150,
      friction: 26,
      precision: 0.01,
      duration: 1300,
    },
  });
  return (
    <animated.div style={{ ...spring1, ...spring2 }}>{children}</animated.div>
  );
}
