import { max } from 'lodash';
import { useRef, useState, useCallback, useEffect } from 'react';

export function useCountdown(value: number) {
  const intervalRef = useRef<NodeJS.Timer>();
  const [restSeconds, setRestSeconds] = useState(value);

  const start = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(
      () =>
        setRestSeconds((prev) => {
          if (prev === 0) {
            clearInterval(intervalRef.current);
          }
          return max([0, prev - 1]) ?? 0;
        }),
      1000
    );
  }, []);

  useEffect(() => {
    start();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start]);

  const reset = useCallback(() => {
    setRestSeconds(value);
    start();
  }, [value, start]);

  return {
    value: restSeconds,
    reset,
    minutes: Math.floor(restSeconds / 60),
    seconds: restSeconds % 60,
  };
}
