import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Text, Divider } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { UserInfo } from 'order/components/enrollAddress/UserInfo';
import { ShippingAddress } from 'order/components/enrollAddress/ShippingAddress';

export function EnrollAddress({ onClose }: { onClose: () => void }) {
  const [roadAddress, setRoadAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const isFindAddress = useMemo(() => {
    if (roadAddress.length > 0 && detailAddress.length > 0) return true;
    return false;
  }, [roadAddress, detailAddress]);

  return (
    <Container>
      <TopNavigator>
        <Dummy />
        <Text>배송지 등록</Text>
        <Image
          src="/images/common/close.png"
          alt="close"
          width={20}
          height={20}
          onClick={onClose}
        />
      </TopNavigator>
      <Divider width="100%" height={1} color={colors.gray100} />
      <UserInfo />
      <Divider
        width="calc(100% - 40px)"
        height={1}
        color={colors.gray100}
        style={{ margin: '0 20px' }}
      />
      <ShippingAddress
        onChangeAddress={(road: string, detail: string) => {
          setRoadAddress(road);
          setDetailAddress(detail);
        }}
      />
      <Button
        size="xl"
        weight="medium"
        color={isFindAddress ? colors.defaultWhite : colors.gray500}
        isFindAddress={isFindAddress}
        onClick={() => {
          // TODO address post API
        }}
      >
        배송지 등록하기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  background-color: ${colors.defaultWhite};
`;

const TopNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  height: 50px;
`;

const Dummy = styled.div`
  width: 20px;
  height: 20px;
`;

const Button = styled(Text)<{ isFindAddress: boolean }>`
  position: fixed;
  bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 460px;
  height: 58px;
  margin-left: 20px;
  border-radius: 6px;
  background-color: ${({ isFindAddress }) =>
    isFindAddress ? colors.primary700Default : colors.gray200};
`;
