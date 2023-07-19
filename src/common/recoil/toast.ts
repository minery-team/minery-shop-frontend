import { ReactNode } from 'react';
import { atom } from 'recoil';

export const toastState = atom<ReactNode | string>({
  key: 'toastState',
  default: '',
});
