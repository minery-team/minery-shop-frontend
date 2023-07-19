import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import Image from 'next/image';
import { colors } from 'common/constants';
import { useCallback } from 'react';
import { useToast } from 'common/layout/ToastProvider';

export function useNewToast() {
  const { open } = useToast();

  return useCallback(() => {
    open({
      children: (
        <Text size="base" weight="medium" color={colors.defaultWhite}>
          배송지 등록이 완료되었어요.
        </Text>
      ),
    });
  }, [open]);
}

export function useAddToast() {
  const { open } = useToast();

  return useCallback(() => {
    open({
      children: (
        <AddToastWrapper>
          <img
            src="/assets/check_mark.svg"
            width={16}
            height={16}
            alt="check_mark"
          />
          <Text size="base" weight="medium" color={colors.defaultWhite}>
            배송지 변경이 완료되었어요.
          </Text>
        </AddToastWrapper>
      ),
    });
  }, [open]);
}

const AddToastWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
