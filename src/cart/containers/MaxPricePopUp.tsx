import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import PopUp from '@/common/components/modal/PopUp';
import { colors } from '@/common/constants';

export default function MaxPricePopUp({
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
            <span>
              최대
              <span className="highlight"> 5,000,000원</span>까지
            </span>
            주문이 가능해요.
          </StyledText>
        </TextWrapper>
      }
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
