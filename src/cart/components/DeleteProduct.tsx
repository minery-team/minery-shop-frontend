import { Text, usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { useCallback } from 'react';
import { PopUp } from 'common/components';

export default function DeleteProduct({
  onConfirm,
  onClose,
}: {
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <PopUp
      type="select"
      content={
        <TextWrapper>
          <StyledText size="lg" weight="semibold" color={colors.gray900}>
            <div>선택한 상품을 삭제할까요?</div>
          </StyledText>
        </TextWrapper>
      }
      onConfirm={onConfirm}
      onClose={onClose}
    />
  );
}

export function useDeleteProduct() {
  const { open, close } = usePopup('delete-product-popup');
  return useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      open({
        children: <DeleteProduct onConfirm={resolve} onClose={reject} />,
        onClose: reject,
      });
    }).finally(close);
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
