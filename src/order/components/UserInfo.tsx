import { useState } from 'react';
import { Text, Divider } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { User } from 'common/models/User';
import { colors } from 'common/constants';

export function UserInfo({ userInfo }: { userInfo: User }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Wrapper>
        <Text size="lg" weight="semibold" color={colors.gray900}>
          구매자 정보
        </Text>
        <InfoWrapper>
          <UserInfoWrapper>
            <Text size="base" weight="medium" color={colors.gray900}>
              권혁창
            </Text>
            <Text size="base" weight="medium" color={colors.gray900}>
              010 - 9667 - 5855
            </Text>
          </UserInfoWrapper>
          <DirectlyReceving htmlFor="check">
            <input
              id="check"
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
              }}
              style={{ accentColor: colors.primary700Default }}
            />
            <Text size="base" weight="medium" color={colors.gray900}>
              본인이 수령해요
            </Text>
          </DirectlyReceving>
        </InfoWrapper>
      </Wrapper>
      <Divider width="100%" height={6} color={colors.gray100} />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const DirectlyReceving = styled.label`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
`;
