import styled from '@emotion/styled';
import Router from 'next/router';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { first } from 'lodash';

import { Divider, Text } from '@boxfoxs/bds-web';
import { createAddress } from 'common/api/address';
import { FixedBottomCTA } from 'common/components';
import { colors } from 'common/constants';
import { useAddressList, useUserQuery } from 'common/hooks/queries';
import { useFindAddress } from 'order/components/FindAddressPopUp';
import { useTypeDetailAddress } from 'order/components/TypeDetailAddressPopUp';
import { useAddToast } from 'address/components/changeAddress';
import { ShippingAddress } from './ShippingAddress';
import { UserInfo } from './UserInfo';

export default function AddAddress() {
  const [userInfo] = useUserQuery(0);
  const [addressList, reload] = useAddressList();
  const address = addressList?.find((a) => a.default) ?? first(addressList);
  const [roadAddress, setRoadAddress] = useState(
    address ? address.address : ''
  );
  const [detailAddress, setDetailAddress] = useState(
    address ? address.detailAddress : ''
  );
  const [postalCode, setPostalCode] = useState('');

  const openFindAddress = useFindAddress();
  const openTypeDetailAddress = useTypeDetailAddress();
  const openAddAddressToast = useAddToast();

  const isValidAddress = useMemo(() => {
    if (roadAddress.length > 0 && detailAddress.length > 0) return true;
    return false;
  }, [address, roadAddress, detailAddress]);

  const routeChangeCompleteHandler = () => {
    openAddAddressToast();

    Router.events.off('routeChangeComplete', routeChangeCompleteHandler);
  };

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

      Router.events.on('routeChangeComplete', routeChangeCompleteHandler);

      Router.back();
    }
  };

  return (
    <Container>
      <TopNavigator>
        <Dummy />
        <Text size="lg" weight="semibold" color={colors.gray900}>
          배송지 변경
        </Text>
        <Image
          src="/assets/close.svg"
          width={20}
          height={20}
          alt="close"
          onClick={() => Router.back()}
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
        defaultAddress={{
          road: address ? address.address : '',
          detail: address ? address.detailAddress : '',
          code: address ? address.postalCode : '',
        }}
        onChangeAddress={(road: string, detail: string, code: string) => {
          setRoadAddress(road);
          setDetailAddress(detail);
          setPostalCode(code);
        }}
      />
      <FixedBottomCTA
        onClick={onClickEnroll}
        style={{
          backgroundColor: isValidAddress
            ? colors.primary700Default
            : colors.gray200,
          border: 'none',
          color: isValidAddress ? colors.defaultWhite : colors.gray500,
        }}
      >
        배송지 변경하기
      </FixedBottomCTA>
    </Container>
  );
}

const Container = styled.div``;

const TopNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
`;

const Dummy = styled.div`
  width: 20px;
  height: 20px;
`;
