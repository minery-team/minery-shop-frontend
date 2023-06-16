import { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Text, Divider } from '@boxfoxs/bds-web';

import { DeliveryRequest, EnrollAddress } from 'order/components';
import SlideUp from 'common/components/modal/SlideUp';
import { useModal } from 'common/components/modal/Modal';
import { useFetchAddress } from 'common/hooks/queries';
import { colors } from 'common/constants';

export function AddressInfo() {
  const [requestText, setRequestText] = useState('');
  const [addressList, refetch] = useFetchAddress();

  const defaultAddress = useMemo(() => {
    if (addressList) return addressList.filter((address) => address.default)[0];
    return undefined;
  }, [addressList]);

  const openDeliveryRequestModal = useDeliveryRequestModal(setRequestText);
  const openEnrollAddressModal = useEnrollAddress(refetch);

  return (
    <>
      <Wrapper>
        <DeleveryWrapper>
          <DeleveryInfoWrapper>
            <Text size="lg" weight="semibold" color={colors.gray900}>
              배송지 정보
            </Text>
            <Text
              size="base"
              weight="regular"
              color={defaultAddress ? colors.gray900 : colors.gray600}
            >
              {defaultAddress
                ? `${defaultAddress.address}(${defaultAddress.detailAddress})`
                : '배송받을 주소를 등록해주세요.'}
            </Text>
          </DeleveryInfoWrapper>
          <Text
            size="base"
            weight="semibold"
            color={colors.primary700Default}
            onClick={() => {
              openEnrollAddressModal();
            }}
          >
            {defaultAddress ? '변경하기' : '등록하기'}
          </Text>
        </DeleveryWrapper>
        <DeleveryRequestWrapper onClick={openDeliveryRequestModal}>
          <Text
            size="base"
            weight="regular"
            color={requestText ? colors.gray900 : colors.gray400}
          >
            {requestText || '배송 요청 사항을 선택해주세요.'}
          </Text>
          <Image
            src="/images/common/chevron-down.png"
            alt="chevron-down"
            width={12}
            height={6}
          />
        </DeleveryRequestWrapper>
      </Wrapper>
      <Divider width="100%" height={6} color={colors.gray100} />
    </>
  );
}

function useEnrollAddress(refetch: any) {
  const { open, close } = useModal('enroll-address');

  return useCallback(() => {
    open({
      children: <EnrollAddress onClose={close} refetch={refetch} />,
    });
  }, [open]);
}

function useDeliveryRequestModal(setRequest: (str: string) => void) {
  const { open, close } = useModal('delivery-request');

  return useCallback(() => {
    open({
      children: (
        <SlideUp>
          <DeliveryRequest setRequest={setRequest} onClose={close} />
        </SlideUp>
      ),
    });
  }, [open]);
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
`;

const DeleveryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleveryInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DeleveryRequestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  border-radius: 6px;
  margin-top: 16px;
  padding: 16px 20px;
  background-color: ${colors.gray100};
`;
