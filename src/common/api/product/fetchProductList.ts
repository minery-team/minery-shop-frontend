import { Product } from '@/common/models/Product';
import { requester } from '@/common/api/requester';
import { Country, WineType } from '@/common/models';

export async function fetchProductList() {
  const res = await requester.get<Product[]>('/product');

  // return [dummyWine, dummyWine, dummyWine];
  return res.data;
}

const dummyWine: Product = {
  id: 1,
  name: '그랑 떼루아 그레 드 몽펠리에 - 랑그독산 레드 와인',
  enName: 'Grand Terroir Grès de Montpellier - Red Wine from Languedoc',
  desc: '진한 풍미의 레드 와인입니다.',
  price: 150000,
  originalPrice: 200000,
  image:
    'https://images.vivino.com/thumbs/2gRg4w2gQD29ElzNMZjZRA_pb_600x600.png',
  weight: 1.2,
  options: [
    {
      id: 1,
      name: '와인오프너',
      desc: '고급 와인 오프너입니다.',
      price: 5000,
      category: 'Accessory',
      images: [
        'https://www.ikea.com/kr/ko/images/products/idealisk-corkscrew-silver-colour-matt__0713023_pe729202_s5.jpg?f=s',
      ],
    },
  ],
  images: [
    'https://images.vivino.com/thumbs/2gRg4w2gQD29ElzNMZjZRA_pb_600x600.png',
    'https://uploads-ssl.webflow.com/62e3275f39c6be5d478e5b5b/62e3275f39c6be9adc8e5b84_BWC_MontPellier_750ML_5511_Merlot_WEB.webp',
    'https://www.montpellier.co.za/wp-content/uploads/2014/08/Cab-Sauv-NV-lowres.png',
  ],
  order: 1,
  wine: {
    id: 1,
    _id: 1,
    name: '몽펠리에',
    enName: 'Montpellier',
    image: 'http://example.com/images/wine1.jpg',
    rate: 4.5,
    type: WineType.RED,
    country: Country.프랑스,
    price: 35000,
    minAlcohol: 13,
    maxAlcohol: 14,
    sweetness: 1,
    acidity: 3,
    body: 2,
    tannins: 3,
    searchable: true,
    maker: '깔베  Calvet',
    style: 'Languedoc-Roussillon Red',
    rating: "Pays d'Oc IGP",
    ferment: null,
    minTemperature: 16,
    maxTemperature: 18,
    foods: [
      '부리또 또는 스테이크 등 육류 요리',
      ' 하드 치즈 등과 잘 어울린다.',
    ],
    importer: '금양인터내셔날&nbsp;&nbsp;&nbsp;',
    viewCount: 0,
    kinds: [
      {
        id: '6f54fd4e4a20e4984fb0b8a57760dad0',
        name: '카베르네 소비뇽 (Cabernet Sauvignon)',
      },
    ],
  },
};
