import { CartItem } from 'common/models';
import { orderItems } from 'common/recoil/orderItems';
import { UseQueryOptions } from 'react-query';
import { useRecoilValue } from 'recoil';
import { useCart } from './useCart';

export function useOrderingItems(options?: UseQueryOptions<CartItem[]>) {
  const list = useRecoilValue(orderItems);
  const cart = useCart(options);

  return list.length ? list : cart.value;
}
