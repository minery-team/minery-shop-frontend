import styled from '@emotion/styled';
import { Section } from 'common/components';
import { useUser } from 'common/hooks';
import { formatPhoneNumber } from 'common/utils';
import { memo } from 'react';

const ProfileSection = () => {
  const [user] = useUser();
  return (
    <Section>
      <Container>
        <h2 css={{ margin: 0 }}>{user?.name}</h2>
        <span>{`휴대폰 번호 ${formatPhoneNumber(user?.phone ?? '')}`}</span>
      </Container>
    </Section>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default memo(ProfileSection);
