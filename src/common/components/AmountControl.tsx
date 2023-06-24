import { Flex, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { colors } from 'common/constants';

export function AmountControl({ value, onIncrease, onDecrease }: Props) {
  return (
    <CountBox>
      <StyledButton onClick={onDecrease} type="button">
        <MinusIcon
          width={12}
          height={12}
          color={value > 1 ? colors.gray900 : colors.gray400}
        />
      </StyledButton>
      <Flex.Center style={{ flex: 1 }}>
        <Text size="sm" weight="regular" color={colors.gray900}>
          {value}
        </Text>
      </Flex.Center>
      <StyledButton onClick={onIncrease} type="button">
        <PlusIcon width={12} height={12} color={colors.gray900} />
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
