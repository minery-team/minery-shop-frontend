import { createObservableStorage, useStorage } from "@boxfox/core-hooks-dom";
import { safeSessionStorage } from "@boxfox/next";

const sessionStorage$ = createObservableStorage(safeSessionStorage);

export function useSessionStorage<T extends string>(
  key: string,
  defaultValue?: T
) {
  return useStorage(sessionStorage$, key, defaultValue);
}
