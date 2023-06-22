import styled from '@emotion/styled';
import Router from 'next/router';
import { useMemo, useState } from 'react';

import { Divider } from '@boxfoxs/bds-web';
import { createAddress } from 'common/api/address';
import { AppBar, FixedBottomCTA } from 'common/components';
import { colors } from 'common/constants';
import { useAddressList, useUserQuery } from 'common/hooks/queries';
import { useFindAddress } from 'order/components/FindAddressPopUp';
import { useTypeDetailAddress } from 'order/components/TypeDetailAddressPopUp';
import { ShippingAddress } from './ShippingAddress';
import { UserInfo } from './UserInfo';

export default function NewAddress() {
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
      Router.back();
    }
  };

  return (
    <Container>
      <AppBar back>
        <AppBar.Title>배송지 등록</AppBar.Title>
      </AppBar>
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
      <FixedBottomCTA disabled={!isValidAddress} onClick={onClickEnroll}>
        배송지 등록하기
      </FixedBottomCTA>
    </Container>
  );
}

const Container = styled.div``;
