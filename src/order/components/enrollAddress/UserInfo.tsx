import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { useUserQuery } from 'common/hooks/queries';
import { colors } from 'common/constants';

export function UserInfo() {
  const [userInfo] = useUserQuery(0); // TODO userId 변경

  return (
    <Wrapper>
      <Text size="base" weight="regular" color={colors.gray700}>
        받는 분
      </Text>
      <UserInfoWrapper>
        <Text size="xl" weight="semibold" color={colors.defaultBlack}>
          권혁창
        </Text>
        <Text size="xl" weight="semibold" color={colors.defaultBlack}>
          010 - 9667 - 5855
        </Text>
      </UserInfoWrapper>
      <Text size="sm" weight="medium" color={colors.primary700Default}>
        주류 상품은 주문자의 직접수령만 가능해요.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
