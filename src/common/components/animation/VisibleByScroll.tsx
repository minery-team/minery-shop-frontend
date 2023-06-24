import { ComponentProps, ReactNode, useState } from 'react';
import { NotifyVisible } from './NotifyVisible';

interface Props {
  offset?: ComponentProps<typeof NotifyVisible>['offset'];
  children: (isVisible: boolean) => ReactNode;
}

export function VisibleByScroll({ children, offset = 0.7 }: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <NotifyVisible onVisible={setVisible} offset={offset}>
      {children(visible)}
    </NotifyVisible>
  );
}
