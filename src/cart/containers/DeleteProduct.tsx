import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import PopUp from '@/common/components/modal/PopUp';
import { colors } from '@/common/constants';

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
