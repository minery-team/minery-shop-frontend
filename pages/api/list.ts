import type { NextApiRequest, NextApiResponse } from 'next';
import { sampleData as list } from './data/list.js';

type Option = {
  id: number;
  name: string;
  desc: string | null;
  price: number;
  category: string;
  images: string[];
};
type List = {
  id: number;
  name: string;
  enName: string;
  desc: string;
  price: number;
  originalPrice: number;
  images: string[];
  order: number;
  options: Option[];
};

const handler = (
  _req: NextApiRequest,
  res: NextApiResponse<List[] | { message: string }>
) => {
  try {
    if (!Array.isArray(list)) {
      throw new Error('Cannot find user data');
    }
    res.status(200).json(list);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
export default handler;
