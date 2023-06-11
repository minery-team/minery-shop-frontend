import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import PopUp from '@/common/components/modal/PopUp';
import { colors } from '@/common/constants';

export default function AdultCertGuidePopUp({
  setPopUpState,
}: {
  setPopUpState: (bool: boolean) => void;
}) {
  return (
    <PopUp
      type="confirm"
      content={
        <TextWrapper>
          <StyledText size="lg" weight="semibold" color={colors.gray900}>
            <div>만 19세 이상만</div>
            <div>구매할 수 있는 상품이</div>
            <div>포함되어 있어요!</div>
          </StyledText>
        </TextWrapper>
      }
      confirmText="다음"
      onConfirm={() => setPopUpState(false)}
    />
  );
}

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .highlight {
    color: ${colors.primary700Default};
  }
`;

const StyledText = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
