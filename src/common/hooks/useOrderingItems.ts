import { QS } from '@boxfoxs/next';
import { CartItem } from 'common/models';
import { orderItems } from 'common/recoil/orderItems';
import { useMemo } from 'react';
import { UseQueryOptions } from 'react-query';
import { useRecoilValue } from 'recoil';
import { useProductList } from './queries/useWineList';
import { useCart } from './useCart';

export function useOrderingItems(options?: UseQueryOptions<CartItem[]>) {
  const [products] = useProductList({ suspense: options?.suspense });
  const directOrderItem = useMemo<CartItem | null>(() => {
    const data = {
      id: Number(QS.get('productId')),
      amount: Number(QS.get('orderAmount')),
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
