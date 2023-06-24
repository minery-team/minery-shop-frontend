import { Text, usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { ConfirmModal } from 'common/components';
import { useCallback } from 'react';

export function EnrollAddressPopUp({ onClose }: { onClose: () => void }) {
  return (
    <ConfirmModal
      type="confirm"
      content={
        <TextWrapper>
          <StyledText size="lg" weight="semibold" color={colors.gray900}>
            <div>배송지 정보를 등록해주세요</div>
          </StyledText>
        </TextWrapper>
      }
      confirmText="확인"
      onConfirm={onClose}
    />
  );
}

export function useEnrollAddress() {
  const { open, close } = usePopup('enroll-address-popup');

  return useCallback(() => {
    open({
      children: <EnrollAddressPopUp onClose={close} />,
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
