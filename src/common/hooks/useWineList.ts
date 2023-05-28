import { useQuery } from 'react-query';
import { type WineInfo } from '@/components/home/WineCard';
import hero from '../../../public/assets/hero.jpg';

export function useWineList({ category }: { category: string }) {
  const wineList1: WineInfo[] = [
    {
      id: 1,
      image: hero,
      country: '칠레1',
      category: 'red',
      name: '도멘 생 패트리스, 샤토네프 뒤 파프 2016',
      price: 128000,
      rate: 4.2,
      reviewCnt: 168,
    },
  ];

  const wineList2: WineInfo[] = [
    {
      id: 2,
      image: hero,
      country: '더미2',
      category: '더미2',
      name: '더미2',
      price: 128000,
      rate: 4.2,
      reviewCnt: 168,
    },
  ];

  const wineList3: WineInfo[] = [
    {
      id: 3,
      image: hero,
      country: '더미3',
      category: '더미3',
      name: '더미3',
      price: 128000,
      rate: 4.0,
      reviewCnt: 168,
    },
  ];

  const wineList4: WineInfo[] = [
    {
      id: 4,
      image: hero,
      country: '더미4',
      category: '더미4',
      name: '더미4',
      price: 128000,
      rate: 4.0,
      reviewCnt: 168,
    },
  ];

  const fetchProducts = async () => {
    if (category === 'popular') {
      return wineList1;
    }

    if (category === 'lowest') {
      return wineList2;
    }

    if (category === 'red') {
      return wineList3;
    }

    return wineList4;

    // const response = await fetch(`/api/products?key=${category}`);
    // const data = await response.json();
    // return data;
  };

  return useQuery(['products', category], fetchProducts);
}
