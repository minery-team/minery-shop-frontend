import { Spacing } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { AppBar, Container } from 'common/components';
import { KAKAO_CHANNEL_LINK, colors } from 'common/constants';
import FAQToggle from 'customer-service/components/FAQToggle';
import { FAQList } from 'customer-service/constants';
import Link from 'next/link';

const CustomerServicePage = () => {
  return (
    <Container
      style={{
        backgroundColor: colors.gray100,
      }}
    >
      <AppBar back backgrounded>
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
      <OneOnOneContainer>
        <p>더 궁금한 점이 있으신가요?</p>
        <Link href={KAKAO_CHANNEL_LINK}>
          <OneOnOneButton>1:1 문의하기</OneOnOneButton>
        </Link>
      </OneOnOneContainer>
      <Spacing height={24} />
    </Container>
  );
};

export default CustomerServicePage;

const CustomerServiceContainer = styled.div`
  padding: 24px 20px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

const OneOnOneContainer = styled.div`
  color: var(--gray-500, #aaa);
  text-align: center;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 130%;
`;

const OneOnOneButton = styled.span`
  text-decoration: underline;
`;
