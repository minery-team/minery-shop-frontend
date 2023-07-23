import { atom } from 'recoil';

import { CartItem } from 'common/models';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

export const orderItems = atom<CartItem[]>({
  key: 'orderItems',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
