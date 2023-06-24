import { useCombinedRefs } from '@boxfoxs/core-hooks';
import { isClient } from '@boxfoxs/next';
import React, {
  ComponentProps,
  ForwardedRef,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

export type NotifyVisibleRef = { setParent: (el: HTMLElement) => void };

interface Props extends ComponentProps<'div'> {
  offset?: { top?: number; bottom?: number } | number;
  onVisible?: (state: boolean) => void;
}

export const NotifyVisible = Object.assign(
  React.forwardRef(function NotifyVisible(
    { offset = 0, onVisible, ...props }: Props,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) {
    const ref = useRef<HTMLDivElement>(null);
    const prevVisible = useRef(false);
    const update = useCallback(() => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      const topOffset = typeof offset === 'number' ? offset : offset.top ?? 0;
      const bottomOffset =
        typeof offset === 'number' ? offset : offset.bottom ?? 0;
      const state = rect.top <= topOffset && rect.bottom > bottomOffset;
      if (state !== prevVisible.current) {
        prevVisible.current = state;
        onVisible?.(state);
      }
    }, []);
    const parentContainer = useContext(ParentContext);
    const target = parentContainer ?? (isClient() ? window : null);
    useEffect(() => {
      if (!target) {
        return;
      }
      target.addEventListener('scroll', update);
      return () => {
        target.removeEventListener('scroll', update);
      };
    }, [target]);

    const combinedRef = useCombinedRefs(forwardedRef, ref, update);
    return <div {...props} ref={combinedRef} />;
  }),
  { Parent }
);

function Parent({
  children,
}: {
  children: (ref: (el: HTMLElement | null) => void) => ReactNode;
}) {
  const [parent, setParent] = useState<HTMLElement | null>(null);
  return (
    <ParentContext.Provider value={parent}>
      {children(setParent)}
    </ParentContext.Provider>
  );
}

const ParentContext = createContext<HTMLElement | null>(null);
