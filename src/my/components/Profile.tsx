import styled from '@emotion/styled';
import { memo } from 'react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 25px 20px;
`;

interface Props {
  name: string;
  phoneNumber: string;
}

function Profile({ name, phoneNumber }: Props) {
  return (
    <Container>
      <h2 css={{ margin: 0 }}>{name}</h2>
      <span>{`휴대폰 번호 ${phoneNumber}`}</span>
    </Container>
  );
}

export default memo(Profile);
