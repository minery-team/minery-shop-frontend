import { createObservableStorage, useStorage } from '@boxfoxs/core-hooks-dom';
import { safeSessionStorage } from '@boxfoxs/next';

const sessionStorage$ = createObservableStorage(safeSessionStorage);

export function useSessionStorage<T extends string>(
  key: string,
  defaultValue?: T
) {
  return useStorage(sessionStorage$, key, defaultValue);
}
