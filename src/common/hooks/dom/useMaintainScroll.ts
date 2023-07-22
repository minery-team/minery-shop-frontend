import { useCombinedRefs, useDebounce } from '@boxfoxs/core-hooks';
import { useOnScroll, useWindowScrollEvent } from '@boxfoxs/core-hooks-dom';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export function useMaintainScroll(key: string) {
  const target = useRef<HTMLElement>();
  const router = useRouter();

  useEffect(() => {
    const pos = sessionStorage.getItem(
      `@scroll-position/${key}/${history.state.key}`
    );
    if (pos) {
      target.current?.scrollTo(0, Number(pos));
    }
  }, [router.route, key]);

  const save = useDebounce((key: string, y: number) => {
    sessionStorage.setItem(`@scroll-position/${key}`, String(y));
  }, 100);

  const setTarget = useOnScroll((e) => {
    const y = (e.target as HTMLElement).scrollTop;
    save(`${key}/${history.state.key}`, y);
  });

  return useCombinedRefs(target, setTarget);
}

export function useMaintainScrollGlobal() {
  const router = useRouter();
  useEffect(() => {
    const pos = sessionStorage.getItem(`@scroll-position/${history.state.key}`);
    if (pos) {
      window.scrollTo(0, Number(pos));
    }
  }, [router.route]);
  const save = useDebounce((key: string, y: number) => {
    sessionStorage.setItem(`@scroll-position/${key}`, String(y));
  }, 100);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      const key = history.state.key;
      save(key, y);
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);
}
