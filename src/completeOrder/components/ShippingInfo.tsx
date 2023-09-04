import { Text, Divider } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { useUserQuery, useAddressList } from 'common/hooks/queries';
import { colors } from 'common/constants';
import { formatPhoneNumber } from 'common/utils';

export function ShippingInfo({
  deliveryMessage,
}: {
  deliveryMessage: string | null;
}) {
  const [userInfo] = useUserQuery(0);
  const [addressList] = useAddressList();
  const defaultAddress = addressList?.filter((address) => address.default)[0];

  return (
    <Wrapper>
      <Text size="lg" weight="semibold" color={colors.gray900}>
        픽업지 정보
      </Text>
      <Divider width="100%" height={1} color={colors.gray100} />
      <TextWrapper>
        <Text size="base" weight="semibold" color={colors.gray900}>
          픽업지
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {/* {userInfo?.name} */}A 와인마트
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="semibold" color={colors.gray900}>
          연락처
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {/* {formatPhoneNumber(userInfo?.phone ?? '')} */}
          010-6423-3522
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="semibold" color={colors.gray900}>
          주소
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {/* {`${defaultAddress?.address}(${defaultAddress?.detailAddress})`} */}
          화양동 46-30번지 401호
        </Text>
      </TextWrapper>
      {deliveryMessage && (
        <TextWrapper>
          <Text size="base" weight="semibold" color={colors.gray900}>
            배송 메시지
          </Text>
          <Text size="base" weight="medium" color={colors.gray900}>
            {deliveryMessage}
          </Text>
        </TextWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
