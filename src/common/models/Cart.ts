import { Product, ProductOption } from "./Product";

export interface CartItem {
  id: number | string;
  amount: number;
  product: Product;
  options: CartItemOption[];
}

export interface CartItemOption {
  id: number | string;
  option: ProductOption;
  amount: number;
}

export interface CartCreateItem {
  productId: number;
  amount: number;
  options: CartCreateItemOption[];
}

export interface CartCreateItemOption {
  optionId: number;
  amount: number;
}
