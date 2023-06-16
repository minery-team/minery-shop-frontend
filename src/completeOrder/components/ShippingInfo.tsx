import { Text, Divider } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { useUserQuery, useFetchAddress } from 'common/hooks/queries';
import { colors } from 'common/constants';

export function ShippingInfo() {
  const [userInfo] = useUserQuery(0);
  const [addressList] = useFetchAddress();
  const defaultAddress = addressList?.filter((address) => address.default)[0];

  return (
    <Wrapper>
      <Text size="lg" weight="semibold" color={colors.gray900}>
        배송지 정보
      </Text>
      <Divider width="100%" height={1} color={colors.gray100} />
      <TextWrapper>
        <Text size="base" weight="semibold" color={colors.gray900}>
          받는 분
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {userInfo?.name}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="semibold" color={colors.gray900}>
          연락처
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {userInfo?.phone}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="semibold" color={colors.gray900}>
          주소
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {`${defaultAddress?.address}(${defaultAddress?.detailAddress})`}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="semibold" color={colors.gray900}>
          배송 메시지
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          부재시 문 앞에 놓아주세요.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
