import { Text, Spacing } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';

export function PaymentButton() {
  return (
    <Wrapper>
      <Spacing height={12} />
      <Text size="base" weight="regular" color={colors.gray600}>
        이용약관을 확인하였으며 결제에 동의합니다.
      </Text>
      <Spacing height={10} />
      <Button
        size="xl"
        weight="medium"
        color={colors.defaultWhite}
        onClick={() => {}}
      >
        다음
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Button = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 6px;
  margin-bottom: 36px;
  background-color: ${colors.primary700Default};
`;
