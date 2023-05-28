import { loadTossPayments, TossPaymentsInstance } from '@tosspayments/sdk';
import { TOSS_PAYMENT_KEY } from '../constants/toss';

declare const window: Window & {
  payment: TossPaymentsInstance;
};
export function getPayment() {
  return window.payment;
}
export async function requestPay(
  orderId: string,
  orderName: string,
  name: string,
  cost: number,
  options?: {
    successUrl?: string;
  }
) {
  const tossPayments = await loadTossPayments(TOSS_PAYMENT_KEY);
  window.payment = tossPayments;
  await tossPayments.requestPayment('카드', {
    amount: cost,
    orderId,
    orderName,
    customerName: name,
    successUrl: options?.successUrl ?? window.location.href,
    failUrl: window.location.href,
  });
}
