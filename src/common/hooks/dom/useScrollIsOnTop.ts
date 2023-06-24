import { useOnScroll } from "@boxfoxs/core-hooks-dom";
import { useState } from "react";

export function useScrollIsOnTop(offset: number = 0) {
  const [isOnTop, set] = useState(true);
  const ref = useOnScroll((e) => {
    const scrollTop =
      "documentElement" in (e.target as Document)
        ? (e.target as Document).documentElement.scrollTop
        : (e.target as HTMLElement).scrollTop;
    set(scrollTop <= offset);
  });
  return { isOnTop, ref };
}
