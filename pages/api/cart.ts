// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type WineData = {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
};

type Data = {
  item: WineData[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    item: [
      {
        id: 1,
        image: '/images/cart/test.png',
        name: '와인1',
        price: 10000,
        count: 2,
      },
      {
        id: 2,
        image: '/images/cart/test.png',
        name: '와인2',
        price: 20000,
        count: 1,
      },
      {
        id: 3,
        image: '/images/cart/test.png',
        name: '와인3',
        price: 30000,
        count: 1,
      },
      {
        id: 4,
        image: '/images/cart/test.png',
        name: '와인4',
        price: 40000,
        count: 3,
      },
    ],
  });
}
