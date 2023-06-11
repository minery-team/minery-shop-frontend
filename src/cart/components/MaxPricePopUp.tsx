import { Text, usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { PopUp } from '@common/components';
import { colors } from '@common/constants';
import { useCallback } from 'react';

export function MaxPricePopUp({ onClose }: { onClose: () => void }) {
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
      onConfirm={onClose}
    />
  );
}

export function useMaxPriceGuide() {
  const { open, close } = usePopup('max-price-popup');
  return useCallback(() => {
    open({ children: <MaxPricePopUp onClose={close} />, onClose: close });
  }, [open, close]);
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
