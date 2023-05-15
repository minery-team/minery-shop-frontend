// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type WineData = {
  id: number;
  amount: number;
  product: {
    image: string;
    name: string;
    price: number;
  };
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
        amount: 2,
        product: {
          image: '/images/cart/test.png',
          name: '와인1',
          price: 10000,
        },
      },
      {
        id: 2,
        amount: 1,
        product: {
          image: '/images/cart/test.png',
          name: '와인2',
          price: 20000,
        },
      },
      {
        id: 3,
        amount: 1,
        product: {
          image: '/images/cart/test.png',
          name: '와인3',
          price: 30000,
        },
      },
      {
        id: 4,
        amount: 3,
        product: {
          image: '/images/cart/test.png',
          name: '와인4',
          price: 40000,
        },
      },
    ],
  });
}
