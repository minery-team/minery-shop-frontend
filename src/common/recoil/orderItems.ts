import { atom } from 'recoil';

import { CartItem } from 'common/models';

export const orderItems = atom<CartItem[]>({
  key: 'orderItems',
  default: [],
});
