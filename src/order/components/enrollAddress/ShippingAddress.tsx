import { useState } from 'react';
import { useDaumPostcodePopup, Address } from 'react-daum-postcode';
import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';

export function ShippingAddress({
  onChangeAddress,
}: {
  onChangeAddress: (road: string, detail: string, code: string) => void;
}) {
  const open = useDaumPostcodePopup();
  const [roadAddress, setRoadAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleComplete = (data: Address) => {
    setRoadAddress(data.roadAddress);
    setPostalCode(data.zonecode);
    onChangeAddress(data.roadAddress, detailAddress, postalCode);
  };

  return (
    <Wrapper>
      <Text size="base" weight="regular" color={colors.gray700}>
        배송지
      </Text>
      <AddressWrapper>
        <AddressText>
          <Text
            size="lg"
            weight="regular"
            color={roadAddress ? colors.gray900 : colors.gray400}
          >
            {roadAddress || '주소 찾기를 통해 입력'}
          </Text>
        </AddressText>
        <FindAddress
          size="lg"
          weight="medium"
          color={colors.defaultWhite}
          onClick={() => open({ onComplete: handleComplete })}
        >
          주소찾기
        </FindAddress>
      </AddressWrapper>
      <DetailAddess
        placeholder="상세 주소를 입력해주세요"
        onChange={(e) => {
          setDetailAddress(e.target.value);
          onChangeAddress(roadAddress, e.target.value, postalCode);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
`;

const AddressWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const AddressText = styled.div`
  width: calc(100% - 116px);
  height: 54px;
  border: 1px solid ${colors.gray200};
  border-radius: 6px;
  padding: 16px; 18.5px;
`;

const FindAddress = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 54px;
  border-radius: 6px;
  background-color: ${colors.gray900};
`;

const DetailAddess = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid ${colors.gray200};
  border-radius: 6px;
  padding: 12px 16px;
  outline: none;
`;
