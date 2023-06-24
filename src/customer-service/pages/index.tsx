import styled from '@emotion/styled';
import { AppBar, Container } from 'common/components';
import { colors } from 'common/constants';
import FAQToggle from 'customer-service/components/FAQToggle';

const CustomerServicePage = () => {
  return (
    <Container>
      <AppBar back>
        <AppBar.Title>문의하기</AppBar.Title>
      </AppBar>
      <CustomerServiceContainer>
        {FAQList.map((faq) => (
          <FAQToggle
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </CustomerServiceContainer>
    </Container>
  );
};

export default CustomerServicePage;

const CustomerServiceContainer = styled.div`
  background-color: ${colors.gray100};
  padding: 24px 20px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

interface FAQ {
  question: string;
  answer: string;
}

const FAQList: FAQ[] = [
  {
    question: '와인을 꼭 스낵과 함께 사야하나요?',
    answer:
      '국내 주류법 상 와인은 음식과 함께 세트로만 온라인 배송 주문이 가능합니다. 마이너리는 합리적인 가격을 위해 맛있는 스낵 구성을 함께 제공합니다.',
  },
  {
    question: '와인을 택배 배송 받을 수 있나요?',
    answer:
      '마이너리에서는 가능합니다. 마이너리는 와인을 픽업지까지 찾아가서 수령하는 방식이 아닌, 전국 각지에서 택배로 배송 받을 수 있는 서비스입니다.',
  },
  {
    question: '어떤 와인을 파나요?',
    answer:
      '마이너리 모바일 APP서비스에서 평가가 높은 와인을 기준으로 선정하여 제공합니다. 와인 판매 리스트는 정기적으로 업데이트되며, 다양한 종류의 와인을 찾아보실 수 있습니다. 와인 상품명에 빈티지(생산년도)가 표시되지 않은 경우 임의의 빈티지로 판매됩니다. 빈티지에 따라 라벨이 상이할 수 있습니다. ',
  },
  {
    question: '어떻게 와인을 구매하나요?',
    answer:
      '원하는 와인을 선택한 후 회원가입을 완료해주세요. 마이너리는 본인인증을 위해 만 19세 이상의 성인만 구매 및 택배 수령이 가능합니다. 주소를 기입한 후 토스페이를 통해 결제를 진행하시면 약 3~4일 후에 와인을 받으실 수 있습니다.',
  },
  {
    question: '미성년자가 구매할 수 있나요?',
    answer:
      '불가능합니다. [주류의 통신판매에 관한 명령 위임 고시] 법령에 따라 미성년자는 구매 및 수령할 수 없으며, 19세 이상 성인인증 후 구매가 가능합니다. 대리 구매/수령 등 고객의 귀책사유로 인한 위법 행위가 판단될 경우 판매자가 결제 취소 및 회원 철회를 강제할 수 있으며, 발생하는 법적 문제에 대해 마이너리는 책임지지 않습니다.',
  },
  {
    question: '취소/교환/환불은 어떻게 하나요?',
    answer: `와인은 상품 가치 하락으로 인해 재판매가 불가능하기 때문에 단순 변심에 의한 교환/반품/취소는 불가능합니다.
    불량/파손된 와인을 수령하셨을 경우, 상품 수령 후 3일 이내에 [1:1문의하기]로 환불이나 재발송을 신청할 수 있습니다. 수령 후 3일이 지난 상품은 환불이 불가능합니다.
    1:1 문의 시 상품의 포장을 뜯지 말고 그대로 보관한 채 사진을 촬영하여 문의해주세요. 개봉 또는 사용 흔적이 있는 경우에는 교환 및 반품이 불가능합니다.
    배송 출발 이후 주문 취소 시 반품 배송비 5,000원을 제외한 금액을 환불해 드립니다.
    와인을 직접 수령할 수 없거나 고객의 부재 등으로 인한 택배사고 시 교환 및 반품이 불가능합니다.
    수취인의 주소나 연락처를 잘못 기재하여 발생한 배송사고는 교환 및 반품이 불가능합니다.
    고객의 귀책사유로 인해 상품과 구성품이 훼손된 경우 교환 및 반품이 불가능합니다.
    미성년자가 와인을 구매/수령한 경우, 미성년자 본인 또는 법정대리인이 구매를 취소할 수 있습니다.`,
  },
  {
    question: '다른 사람이 택배를 수령할 수 있나요?',
    answer:
      '주문한 와인은 반드시 본인이 수령해야 합니다. 마이너리는 수령자 본인 확인을 위해 본인이 수령한다는 동의를 한 회원만 주문이 가능합니다. 타인이나 미성년자가 대신 수령하는 경우 발생하는 문제에 대해서는 마이너리는 책임지지 않습니다.',
  },
  {
    question: '상품 주문이 취소되었어요',
    answer: `일시적인 품절 등의 사유로 주문이 불가한 상품은 부분 취소될 수 있습니다. 결제한 금액은 자동으로 환불되며, 환불이 정상적으로 이루어지지 않은 경우 [1:1문의하기]로 문의해주세요.`,
  },
];
