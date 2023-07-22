import { Text, usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { ConfirmModal } from 'common/components';
import { colors } from 'common/constants';
import { useCallback } from 'react';

export function AdultCertGuidePopUp({ onClose }: { onClose: () => void }) {
  return (
    <ConfirmModal
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
      onConfirm={onClose}
    />
  );
}

export function useAdultCartGuide() {
  const router = useRouter();
  const { open, close } = usePopup('adult-cart-guide-popup');

  return useCallback(() => {
    open({
      children: <AdultCertGuidePopUp onClose={close} />,
      onClose: close,
    });
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
