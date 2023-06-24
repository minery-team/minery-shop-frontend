import { BottomSheet } from 'react-spring-bottom-sheet';
import { usePopup } from '@boxfoxs/bds-web';
import React, {
  ComponentProps,
  ForwardedRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { useBooleanState } from '@boxfoxs/core-hooks';

interface Props extends Omit<ComponentProps<typeof BottomSheet>, 'open'> {
  children: ReactNode;
  onClose?: () => void;
}

export function useBottomSheet() {
  const { open, close } = usePopup('bottom-sheet');
  const ref = useRef<{ close: () => void }>(null);

  const openSheet = useCallback(
    (options: Props) => {
      close();
      open({
        children: (
          <WrappedBottomSheet
            /** @ts-ignore */
            ref={ref}
            key={Date.now().toString()}
            {...options}
            onClose={() => {
              close();
              options.onClose?.();
            }}
          />
        ),
      });
    },
    [open, close]
  );
  const closeSheet = useCallback(() => ref.current?.close(), []);
  return { open: openSheet, close: closeSheet };
}

const WrappedBottomSheet = React.forwardRef(function WrappedBottomSheet(
  { children, onClose, ...props }: Props,
  ref?: ForwardedRef<{ close: () => void }>
) {
  const [state, , close] = useBooleanState(true);
  useImperativeHandle(ref, () => ({ close }), []);
  return (
    <BottomSheet
      open={state}
      onDismiss={close}
      onSpringEnd={({ type }) => type === 'CLOSE' && onClose?.()}
      {...props}
    >
      {children}
    </BottomSheet>
  );
});
