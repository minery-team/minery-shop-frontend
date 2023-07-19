import { requester } from 'common/api/requester';
import { Order } from 'common/models/Order';

export async function createOrder(data: InstantPaymentDTO) {
  const { protocol, host } = window.location;
  const url = `${protocol}//${host}`;
  const res = await requester.post<Order>('/order', { ...data, url });
  return res.data;
}

export interface InstantPaymentDTO {
  paymentKey: string;
  orderId: string;
  cost: number;

  cartItemIds: number[];
  directItems: {
    productId: number;
    amount: number;
  }[];
  addressId: number;
  deliveryMessage: string;
  url?: string;
}
