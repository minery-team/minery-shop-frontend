import { CartCreateItem } from 'common/models';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

export const localCartState = atom<CartCreateItem[]>({
  key: 'local-cart',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
