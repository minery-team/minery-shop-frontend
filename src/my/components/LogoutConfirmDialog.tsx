import { Text, usePopup } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { ConfirmModal } from 'common/components';
import { colors } from 'common/constants';
import { useUser } from 'common/hooks';
import { clearAccessToken } from 'common/utils';
import Router from 'next/router';
import { useCallback } from 'react';

export function useLogoutConfirm() {
  const { open, close } = usePopup('logout-confirm');

  const [, reload] = useUser();

  return useCallback(async () => {
    await new Promise<void>((resolve, reject) => {
      open({
        children: <LogoutConfirmDialog onConfirm={resolve} onClose={reject} />,
        onClose: reject,
      });
    }).finally(close);
    clearAccessToken();
    reload();
    Router.push('/');
  }, [open, close, reload]);
}

function LogoutConfirmDialog({
  onConfirm,
  onClose,
}: {
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <ConfirmModal
      type="select"
      content={
        <TextWrapper>
          <StyledText size="lg" weight="semibold" color={colors.gray900}>
            <div>로그아웃 할까요?</div>
          </StyledText>
        </TextWrapper>
      }
      closeText="취소"
      confirmText="로그아웃"
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
