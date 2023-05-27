import { Order } from '@/common/models/Order';
import { requester } from '@/common/api/requester';
import { Address, OrderStatus, Product } from '@/common/models';

export async function fetchOrders() {
  // const res = await requester.get<Order[]>('/order');
  // return res.data;

  return dummyOrderList;
}

const dummyAddress: Address = {
  id: 0,
  address: '서울특별시 강남구 테헤란로 427',
  detailAddress: '역삼동 123-456',
  postalCode: '12345',
  phone: '010-1234-5678',
  name: '홍길동',
  default: true,
};

const dummyProduct: Product = {
  id: 0,
  name: '샤또 몬텔레나, 나파 밸리 샤도네이 2019 + 아주 맛 좋은 살라미',
  enName: 'Chateau Montelena, Napa Valley Chardonnay',
  desc: '1976년 파리 테이스팅에서 화이트 와인 부문 1위를 차지한 기념비적인 와인',
  price: 200000,
  originalPrice: 200000,
  image: 'https://wine21.speedgabia.com/WINE_MST/TITLE/0156000/W0156723.jpg',
  weight: 750,
  options: [],
  images: [],
};

const dummyOrderList: Order[] = [
  {
    id: 0,
    cost: 10000,
    time: new Date(),
    address: dummyAddress,
    status: OrderStatus.DONE,
    items: [
      {
        id: 0,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
      {
        id: 1,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
    ],
  },
  {
    id: 0,
    cost: 10000,
    time: new Date(),
    address: dummyAddress,
    status: OrderStatus.PREPARE,
    items: [
      {
        id: 0,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
      {
        id: 1,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
    ],
  },
  {
    id: 0,
    cost: 10000,
    time: new Date(),
    address: dummyAddress,
    status: OrderStatus.SENT,
    items: [
      {
        id: 0,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
      {
        id: 1,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
    ],
  },
  {
    id: 0,
    cost: 10000,
    time: new Date(),
    address: dummyAddress,
    status: OrderStatus.PAYMENT,
    items: [
      {
        id: 0,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
      {
        id: 1,
        product: dummyProduct,
        amount: 1,
        options: [],
      },
    ],
  },
];
