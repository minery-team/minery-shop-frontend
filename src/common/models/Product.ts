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
  labelImages: string[];
  contentImage: string;
}

export interface ProductOption {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  images: string[];
}

export type ProductForSnack = Omit<Product, 'wine' | 'labelImages'>;

export const dummySnack: ProductForSnack = {
  id: 99,
  name: '와인과 어울리는 모둠 스낵',
  enName: 'Wine Snack Assortment',
  desc: '와인과 어울리는 모둠 스낵',
  price: 20000,
  originalPrice: 40000,
  image:
    'https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/1:1/w_3505,h_3505,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg',
  weight: 0,
  options: [],
  images: [
    'https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/1:1/w_3505,h_3505,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg',
    'https://images.kosher.com/details.slide/g/a/Game_Day_Snack_Mix_-_Stacey_Berk%281%29.jpg',
    'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  ],
  contentImage: '',
};
