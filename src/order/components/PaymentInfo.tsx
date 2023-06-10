import styled from '@emotion/styled';
import { commaizeNumber } from '@boxfox/utils';

export default function PaymentInfo({
  totalPayment,
}: {
  totalPayment: number;
}) {
  return (
    <TotalPayment>
      <div>결제 금액</div>
      <div className="payment_info">
        <span>총 상품금액</span>
        <span>{commaizeNumber(totalPayment)}원</span>
      </div>
      <div className="payment_info">
        <span>배송비</span>
        <span>3,000원</span>
      </div>
      <div className="payment_info">
        <span>최종 결제 금액</span>
        <span>{commaizeNumber(totalPayment + 3000)}원</span>
      </div>
    </TotalPayment>
  );
}

const TotalPayment = styled.div`
  .payment_info {
    display: flex;
    justify-content: space-between;
  }
`;
