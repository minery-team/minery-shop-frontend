import styled from '@emotion/styled';
import { AppBar, Container } from 'common/components';
import { colors } from 'common/constants';
import FAQToggle from 'customer-service/components/FAQToggle';
import { FAQList } from 'customer-service/constants';

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
