import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

export const deliveryMessageState = atom<string>({
  key: 'deliveryMessageState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
