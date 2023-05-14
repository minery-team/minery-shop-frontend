import { Address } from "./Address";
import { OrderStatus } from "./OrderStatus";
import { Product, ProductOption } from "./Product";

export interface Order {
  id: string;
  cost: number;
  time: Date;
  address: Address;
  status: OrderStatus;
  items: {
    id: number;
    product: Product;
    amount: number;
    options: { id: number; option: ProductOption; amount: number }[];
  }[];
}
