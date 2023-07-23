import { useRouter } from 'next/router';
import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { QS } from '@boxfoxs/next';
import { LoggingClick } from '@boxfoxs/logger';

export function Buttons() {
  const router = useRouter();

  return (
    <Wrapper>
      <LoggingClick name="Tap - Go Order List">
        <GoOrderList
          onClick={() =>
            router.push(`/order/list${QS.create({ backTo: '/' })}`)
          }
        >
          <Text size="xl" weight="medium" color={colors.gray900}>
            주문 내역 보기
          </Text>
        </GoOrderList>
      </LoggingClick>
      <LoggingClick name="Tap - Go Shopping">
        <GoShopping onClick={() => router.push('/')}>
          <Text size="xl" weight="medium" color={colors.defaultWhite}>
            쇼핑 계속하기
          </Text>
        </GoShopping>
      </LoggingClick>
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
