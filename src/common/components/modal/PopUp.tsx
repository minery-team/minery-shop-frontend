import { ReactNode } from 'react';
import { Flex, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { CommonModal } from './Modal';

export function PopUp({
  type,
  content,
  confirmText = '확인',
  onConfirm,
  closeText = '취소',
  onClose,
}: {
  type: 'confirm' | 'select';
  content: string | ReactNode;
  confirmText?: string;
  onConfirm: () => void;
  closeText?: string;
  onClose?: () => void;
}) {
  const button = () => {
    if (type === 'confirm') {
      return (
        <ButtonWrapper onClick={onConfirm}>
          <ConfirmButton
            size="lg"
            weight="semibold"
            color={colors.primary700Default}
          >
            {confirmText}
          </ConfirmButton>
        </ButtonWrapper>
      );
    }

    if (type === 'select') {
      return (
        <ButtonWrapper>
          <CloseButton
            size="lg"
            weight="medium"
            color={colors.gray600}
            onClick={onClose}
          >
            {closeText}
          </CloseButton>
          <ConfirmButton
            size="lg"
            weight="semibold"
            color={colors.primary700Default}
            onClick={onConfirm}
          >
            {confirmText}
          </ConfirmButton>
        </ButtonWrapper>
      );
    }

    return <></>;
  };

  return (
    <CommonModal onClose={onClose}>
      <Wrapper>
        <ContentWrapper>{content}</ContentWrapper>
        {button()}
      </Wrapper>
    </CommonModal>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 80px);
  max-width: 296px;
  padding: 32px 28px;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.02);
  background-color: ${colors.defaultWhite};
`;

const DisplayCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled(DisplayCenter)``;

const ButtonWrapper = styled(DisplayCenter)`
  margin-top: 32px;
`;

const CloseButton = styled(Text)`
  width: 50%;
  text-align: center;
`;

const ConfirmButton = styled(Text)`
  width: 50%;
  text-align: center;
`;
