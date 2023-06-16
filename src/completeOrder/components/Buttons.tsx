import { useRouter } from 'next/router';
import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';

export function Buttons() {
  const router = useRouter();

  return (
    <Wrapper>
      <GoOrderList onClick={() => router.push('/order-list')}>
        <Text size="xl" weight="medium" color={colors.gray900}>
          주문 내역 보기
        </Text>
      </GoOrderList>
      <GoShopping onClick={() => router.push('/')}>
        <Text size="xl" weight="medium" color={colors.defaultWhite}>
          쇼핑 계속하기
        </Text>
      </GoShopping>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 20px;
  gap: 12px;
  background-color: ${colors.defaultWhite};
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 224px;
  width: 50%;
  height: 58px;
  border-radius: 6px;
`;

const GoOrderList = styled(Button)`
  border: 1px solid ${colors.gray300};
`;

const GoShopping = styled(Button)`
  background-color: ${colors.primary700Default};
`;
