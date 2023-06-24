import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { Section } from 'common/components';
import { colors } from 'common/constants';
import { useUser } from 'common/hooks';
import { formatPhoneNumber } from 'common/utils';
import { memo } from 'react';

const ProfileSection = () => {
  const [user] = useUser();
  return (
    <Section>
      <Container>
        <Text size="xxl" weight="semibold" color={colors.gray900}>
          회원님, 반가워요!
        </Text>
        <Text
          size="base"
          weight="regular"
          color={colors.gray600}
        >{`휴대폰 번호 ${formatPhoneNumber(user?.phone ?? '')}`}</Text>
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
