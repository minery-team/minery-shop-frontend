import { Text, usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { PopUp } from 'common/components';
import { useCallback } from 'react';

export function FindAddressPopUp({ onClose }: { onClose: () => void }) {
  return (
    <PopUp
      type="confirm"
      content={
        <TextWrapper>
          <StyledText size="lg" weight="semibold" color={colors.gray900}>
            <div>주소를 검색해주세요</div>
          </StyledText>
        </TextWrapper>
      }
      confirmText="확인"
      onConfirm={onClose}
    />
  );
}

export function useFindAddress() {
  const { open, close } = usePopup('find-address-popup');

  return useCallback(() => {
    open({
      children: <FindAddressPopUp onClose={close} />,
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
