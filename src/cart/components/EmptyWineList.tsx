import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Text } from '@boxfoxs/bds-web';

import { colors } from 'common/constants';

export default function EmptyWineList() {
  const router = useRouter();

  return (
    <NoCartWrapper>
      <img src="/assets/shopping.svg" alt="shopping" width={64} height={64} />
      <Text size="base" weight="regular" color={colors.gray600}>
        장바구니가 비어있어요
      </Text>
      <GoShoppingButton onClick={() => router.push('/')}>
        <Text size="base" weight="semibold" color={colors.gray600}>
          쇼핑 계속하기
        </Text>
      </GoShoppingButton>
    </NoCartWrapper>
  );
}

const NoCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 116px);
  gap: 24px;
`;

const GoShoppingButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 42px;
  border: 1px solid ${colors.gray300};
  border-radius: 6px;
`;
