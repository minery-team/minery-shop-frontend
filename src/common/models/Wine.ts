import { Country } from './Country';
import { Product } from './Product';

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
}

export interface ProductOption {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  images: string[];
}

export interface Wine extends Product {
  country: Country;
  minAlcohol?: number;
  maxAlcohol?: number;
  body?: number;
  tannins?: number;
  sweetness?: number;
  acidity?: number;
  order: number;
  searchable: boolean;
  maker: string;
  style: string | null;
  rating: string | null;
  ferment: string | null;
  minTemperature: number;
  maxTemperature: number;
  foods: string[];
  importer: string | null;
  kinds: {
    id: string;
    name: string;
  }[];
}
