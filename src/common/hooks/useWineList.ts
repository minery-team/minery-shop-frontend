import { useQuery } from 'react-query';
import { OrderType, fetchProductList } from '../api/product';
import { WineType } from '../models';

export function useWineList({
  wineType,
  order,
}: {
  wineType?: WineType;
  order: OrderType;
}) {
  return useQuery(['/products', wineType, order], () =>
    fetchProductList({ wineType, order })
  );
}
