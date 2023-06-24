import { Text } from '@boxfoxs/bds-web';
import { useCallbackRef } from '@boxfoxs/core-hooks';
import { flatMap } from 'lodash';
import { ComponentProps, ReactNode, useEffect, useMemo, useState } from 'react';

interface Props extends ComponentProps<typeof Text> {
  children: ReactNode;
  speed?: number;
  onFinish?: () => void;
}

export function TypingAnimation({
  children,
  speed = 100,
  onFinish,
  ...rest
}: Props) {
  const [items, setItems] = useState<ReactNode[]>([]);
  const data = useMemo(() => convert(children), [children]);
  const preservedCallback = useCallbackRef(onFinish ?? console.log);

  useEffect(() => {
    if (items.length === data.length) {
      return;
    }
    let idx = 0;
    const interval = setInterval(() => {
      const item = data[idx++];
      setItems((items) => [...items, item]);
      if (idx === data.length) {
        clearInterval(interval);
        preservedCallback();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  return <Text {...rest}>{items}</Text>;
}

function convert(items: ReactNode) {
  const convertItem = (item: ReactNode): ReactNode[] => {
    if (typeof item === 'string') {
      return item.split('');
    }
    if (Array.isArray(item)) {
      return flatMap(item.map(convertItem));
    }
    return [item];
  };
  return flatMap(convertItem(items));
}
