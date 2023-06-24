import { Text, usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { ConfirmModal } from 'common/components';
import { useCallback } from 'react';

export function TypeDetailAddressPopUp({ onClose }: { onClose: () => void }) {
  return (
    <ConfirmModal
      type="confirm"
      content={
        <TextWrapper>
          <StyledText size="lg" weight="semibold" color={colors.gray900}>
            <div>상세 주소를 입력해주세요</div>
          </StyledText>
        </TextWrapper>
      }
      confirmText="확인"
      onConfirm={onClose}
    />
  );
}

export function useTypeDetailAddress() {
  const { open, close } = usePopup('type-detail-address-popup');

  return useCallback(() => {
    open({
      children: <TypeDetailAddressPopUp onClose={close} />,
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
