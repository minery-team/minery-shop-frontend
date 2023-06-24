import { CartItem } from 'common/models';
import { orderItems } from 'common/recoil/orderItems';
import { UseQueryOptions } from 'react-query';
import { useRecoilValue } from 'recoil';
import { QS } from '@boxfoxs/next';
import { useMemo } from 'react';
import { useCart } from './useCart';
import { useProductList } from './queries/useWineList';

export function useOrderingItems(options?: UseQueryOptions<CartItem[]>) {
  const [products] = useProductList();
  const directOrderItem = useMemo<CartItem | null>(() => {
    const data = {
      id: Number(QS.get('productId')),
      amount: Number(QS.get('amount')),
    };
    const product = products?.find((p) => p.id === data.id);
    if (!data.id || !data.amount || !product) {
      return null;
    }
    return {
      id: product.id,
      isDirect: true,
      amount: data.amount,
      product,
      options: [],
    };
  }, [products]);
  const list = useRecoilValue(orderItems);
  const cart = useCart(options);

  if (directOrderItem) {
    return [directOrderItem];
  }

  return list.length ? list : cart.value;
}
