import { useBooleanState } from "@boxfox/core-hooks";
import { LoggingState } from "@boxfox/logger";
import {
  ComponentProps,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export function LoggingRead({
  children,
  ...rest
}: ComponentProps<typeof LoggingState>) {
  const ref = useRef<HTMLDivElement>(null);
  const [log, setLogTrue] = useBooleanState(false);

  const parent = useContext(ParentContext);

  useEffect(() => {
    if (log) {
      return;
    }
    const handler = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }

      if (
        rect.top + rect.height < window.innerHeight ||
        rect.top < window.innerHeight / 4
      ) {
        setLogTrue();
      }
    };
    const target = parent ?? document;
    target.addEventListener("scroll", handler);
    return () => {
      target.removeEventListener("scroll", handler);
    };
  }, [log, parent]);

  return (
    <LoggingState {...rest} log={log}>
      <div ref={ref}>{children}</div>
    </LoggingState>
  );
}

LoggingRead.Parent = function Parent({
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
};

const ParentContext = createContext<HTMLElement | null>(null);
