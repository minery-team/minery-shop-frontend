import {
  addToCart,
  clearCart,
  deleteFromCart,
  updateAmount as patchAmount,
} from 'common/api/cart';
import { CartCreateItem, CartItem } from 'common/models';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { localCartState } from 'common/recoil/cartState';
import { UseQueryOptions } from 'react-query';
import { useCartList } from './queries';
import { useProductList } from './queries/useWineList';
import { useUser } from './useUser';

export function useCart(options?: UseQueryOptions<CartItem[]>) {
  const [list, reload] = useCartList(options);
  const { value } = useLocalCart();
  const [products] = useProductList();

  const localList: CartItem[] = useMemo(() => {
    if (products == null) {
      return [];
    }
    return value.map((item) => {
      const product = products.find((p) => p.id === item.productId)!;
      return {
        id: Date.now(),
        product,
        amount: item.amount,
        options: item.options.map((o) => ({
          id: o.optionId,
          option: product.options.find((o2) => o2.id === o.optionId)!,
          amount: o.amount,
        })),
      };
    });
  }, [value, products]);
  const combined = useMemo(
    () => [...localList, ...(list ?? [])],
    [localList, list]
  );

  return { value: combined, local: localList, reload };
}

export function useControlCart() {
  const [user] = useUser();
  const { value, local, reload } = useCart();
  const localControl = useLocalCart();

  const add = useCallback(
    async (data: CartCreateItem) => {
      if (user) {
        await addToCart(data);
        await reload();
      } else {
        localControl.add(data);
      }
    },
    [user]
  );

  const remove = useCallback(
    async (id: number) => {
      const idx = local.findIndex((i) => i.id === id);
      if (idx >= 0) {
        localControl.remove(idx);
      } else {
        await deleteFromCart(id);
        await reload();
      }
    },
    [value, local]
  );

  const clear = useCallback(async () => {
    if (user) {
      await clearCart();
      await reload();
    }
    localControl.clear();
  }, [user]);

  const updateAmount = useCallback(
    async (id: number, amount: number) => {
      const idx = local.findIndex((i) => i.id === id);
      if (idx >= 0) {
        localControl.updateItem(idx, { amount });
      } else {
        await patchAmount(id, amount);
        await reload();
      }
    },
    [value, local]
  );

  return { value, local, reload, add, remove, clear, updateAmount } as const;
}

export function useLocalCart() {
  const [list, update] = useRecoilState(localCartState);

  const add = useCallback((data: CartCreateItem) => {
    update((prev) => [...prev, data]);
  }, []);

  const clear = useCallback(() => update([]), []);

  const remove = useCallback((targetIdx: number) => {
    update((prev) => prev.filter((_, idx) => idx !== targetIdx));
  }, []);

  const updateItem = useCallback(
    (idx: number, updates: Partial<CartCreateItem>) => {
      update((prev) => {
        const newList = [...prev];
        newList[idx] = { ...prev[idx], ...updates };
        return newList;
      });
    },
    []
  );

  return { add, clear, remove, value: list ?? [], updateItem };
}
