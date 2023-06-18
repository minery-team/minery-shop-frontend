import { Divider, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import { createAddress } from 'common/api/address';
import { MineryButton } from 'common/components';
import { colors } from 'common/constants';
import { useAddressList, useUserQuery } from 'common/hooks/queries';
import { useFindAddress } from 'order/components/FindAddressPopUp';
import { useTypeDetailAddress } from 'order/components/TypeDetailAddressPopUp';
import { ShippingAddress } from 'order/components/enrollAddress/ShippingAddress';
import { UserInfo } from 'order/components/enrollAddress/UserInfo';

export function EnrollAddress({ onClose }: { onClose: () => void }) {
  const [userInfo] = useUserQuery(0);
  const [roadAddress, setRoadAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [, reload] = useAddressList();

  const openFindAddress = useFindAddress();
  const openTypeDetailAddress = useTypeDetailAddress();

  const isValidAddress = useMemo(() => {
    if (roadAddress.length > 0 && detailAddress.length > 0) return true;
    return false;
  }, [roadAddress, detailAddress]);

  const onClickEnroll = async () => {
    if (!roadAddress) openFindAddress();
    else if (!detailAddress) openTypeDetailAddress();
    else {
      await createAddress({
        address: roadAddress,
        detailAddress,
        postalCode,
        phone: userInfo?.phone || '',
        name: userInfo?.name || '',
        default: true,
      });
      await reload();
      onClose();
    }
  };

  return (
    <Container>
      <TopNavigator>
        <Dummy />
        <Text>배송지 등록</Text>
        <button onClick={onClose} type="button">
          <img
            src="/images/common/close.png"
            alt="close"
            width={20}
            height={20}
          />
        </button>
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
        onChangeAddress={(road: string, detail: string, code: string) => {
          setRoadAddress(road);
          setDetailAddress(detail);
          setPostalCode(code);
        }}
      />
      <Button disabled={!isValidAddress} onClick={onClickEnroll}>
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

const Button = styled(MineryButton)`
  position: fixed;
  bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 460px;
  height: 58px;
  margin-left: 20px;
`;
