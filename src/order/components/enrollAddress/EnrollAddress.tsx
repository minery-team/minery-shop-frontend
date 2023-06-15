import { useCallback } from 'react';
import Image from 'next/image';
import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { useToast } from 'common/components/modal/Toast';
import { colors } from 'common/constants';

export function useEnrollAddress() {
  const { open } = useToast('enroll-address-toast');

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

export function useChangeAddress() {
  const { open } = useToast('change-address-toast');

  return useCallback(() => {
    open({
      children: (
        <Wrapper>
          <Image
            src="/images/common/check-mark.png"
            alt="check-mark"
            width={16}
            height={16}
          />
          <Text size="base" weight="medium" color={colors.defaultWhite}>
            배송지 변경이 완료되었어요.
          </Text>
        </Wrapper>
      ),
    });
  }, [open]);
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
