import { Order } from '@common/models/Order';
import { requester } from '@common/api/requester';

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
  addressId: number;
  url?: string;
}
