import { Flex, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { colors } from 'common/constants';

export function AmountControl({ value, onIncrease, onDecrease }: Props) {
  return (
    <CountBox>
      <StyledButton onClick={onDecrease} type="button">
        <img src="/assets/minus.svg" alt="minus" width={12} height={12} />
      </StyledButton>
      <Flex.Center style={{ flex: 1 }}>
        <Text size="sm" weight="regular" color={colors.gray900}>
          {value}
        </Text>
      </Flex.Center>
      <StyledButton onClick={onIncrease} type="button">
        <img src="/assets/plus.svg" alt="plus" width={12} height={12} />
      </StyledButton>
    </CountBox>
  );
}
interface Props {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CountBox = styled(Flex.CenterVertical)`
  min-width: 70px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
`;
