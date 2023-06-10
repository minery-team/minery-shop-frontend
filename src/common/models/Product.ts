import { Wine } from './Wine';

export interface Product {
  id: number;
  name: string;
  enName: string;
  desc: string;
  price: number;
  originalPrice: number;
  image: string;
  weight: number;
  options: ProductOption[];
  images: string[];
  order?: number;
  wine: Wine;
}

export interface ProductOption {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  images: string[];
}
