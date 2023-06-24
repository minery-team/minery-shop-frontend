import { Divider, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { useCallback, useState } from 'react';

import { useBottomSheet } from 'common/components';
import { colors } from 'common/constants';
import { Address } from 'common/models';
import Router from 'next/router';
import { DeliveryRequest } from 'order/components';

export function AddressInfo({ value }: { value?: Address }) {
  const [requestText, setRequestText] = useState('');

  const openDeliveryRequestModal = useDeliveryRequestModal(setRequestText);

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
              color={value ? colors.gray900 : colors.gray600}
            >
              {value
                ? `${value.address}(${value.detailAddress})`
                : '배송받을 주소를 등록해주세요.'}
            </Text>
          </DeleveryInfoWrapper>
          <Text
            size="base"
            weight="semibold"
            color={colors.primary700Default}
            onClick={() =>
              Router.push(
                value ? 'address/add-address' : '/address/new-address'
              )
            }
          >
            {value ? '변경하기' : '등록하기'}
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
          <img
            src="/assets/chevron_down.svg"
            alt="chevron-down"
            width={24}
            height={24}
          />
        </DeleveryRequestWrapper>
      </Wrapper>
      <Divider width="100%" height={6} color={colors.gray100} />
    </>
  );
}

function useDeliveryRequestModal(setRequest: (str: string) => void) {
  const { open, close } = useBottomSheet();

  return useCallback(() => {
    open({
      children: <DeliveryRequest setRequest={setRequest} onClose={close} />,
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
