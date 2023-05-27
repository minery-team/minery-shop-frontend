import { Product } from '@/common/models/Product';
import { requester } from '@/common/api/requester';
import { Wine } from '@/common/models/Wine';
import { Country } from '@/common/models/Country';

export async function fetchProductList() {
  // const res = await requester.get<Product[]>('/product');
  return [dummyWine, dummyWine];
}

const dummyWine: Wine = {
  id: 1,
  name: 'Chateau Margaux 2018',
  enName: 'Chateau Margaux 2018',
  desc: 'A rich, expressive, slightly showy style, with waves of cassis, creamed raspberry and boysenberry fruit racing forth, backed by a polished yet ample structure.',
  price: 500.0,
  originalPrice: 550.0,
  image: 'https://example.com/images/wine1.png',
  weight: 1.5,
  options: [
    {
      id: 101,
      name: 'Gift Packaging',
      desc: 'Luxury Gift Packaging',
      price: 20.0,
      category: 'Packaging',
      images: [
        'https://example.com/images/gift1.png',
        'https://example.com/images/gift2.png',
      ],
    },
  ],
  images: [
    'https://example.com/images/wine1_1.png',
    'https://example.com/images/wine1_2.png',
  ],
  order: 1,
  country: Country.프랑스,
  minAlcohol: 13.5,
  maxAlcohol: 15.0,
  body: 4,
  tannins: 5,
  sweetness: 2,
  acidity: 3,
  searchable: true,
  maker: 'Margaux',
  style: 'Red',
  rating: '96',
  ferment: 'Oak',
  minTemperature: 15,
  maxTemperature: 18,
  foods: ['Beef', 'Lamb', 'Game (deer, venison)', 'Poultry'],
  importer: 'Wine Importers Ltd.',
  kinds: [
    {
      id: '1',
      name: 'Cabernet Sauvignon',
    },
    {
      id: '2',
      name: 'Merlot',
    },
  ],
};
