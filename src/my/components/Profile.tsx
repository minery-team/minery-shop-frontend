import styled from '@emotion/styled';
import { memo } from 'react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 25px 20px;
`;

const Profile = () => {
  return (
    <Container>
      <h2 css={{ margin: 0 }}>유저 이름</h2>
      <span>휴대폰 번호 010-0000-0000</span>
    </Container>
  );
};

export default memo(Profile);
