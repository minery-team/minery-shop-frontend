import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from '@common/constants';

export function PaymentInfo() {
  return (
    <Wrapper>
      <TextWrapper>
        <Text size="base" weight="regular" color={colors.gray900}>
          상품금액
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          40,000원
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="regular" color={colors.gray900}>
          상품할인금액
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          -5,000원
        </Text>
      </TextWrapper>
      <TextWrapper>
        <ShipmentTextWrapper>
          <Text size="base" weight="regular" color={colors.gray900}>
            배송비
          </Text>
          <Text
            size="sm"
            weight="regular"
            color={colors.primary700Default}
            style={{ margin: '0 4px 0 8px' }}
          >
            10,000원 더 담으면
          </Text>
          <Text size="base" weight="semibold" color={colors.primary700Default}>
            무료배송!
          </Text>
        </ShipmentTextWrapper>
        <Text size="base" weight="medium" color={colors.gray900}>
          +3,500원
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="lg" weight="semibold" color={colors.gray900}>
          결제 예정금액
        </Text>
        <Text size="xl" weight="semibold" color={colors.gray900}>
          43,500원
        </Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShipmentTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;
