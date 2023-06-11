import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import styled from '@emotion/styled';

export function AddressList() {
  const router = useRouter();

  // TODO address list get API 추가
  return (
    <Wrapper>
      <TopNavigator>
        <div>배송지 선택</div>
        <Icon icon="material-symbols:close" width={20} height={20} />
      </TopNavigator>
      <AddressWrapper>
        <div>대구 중구 남산로 4길 40-19</div>
        <div>
          <span>권혁창</span>
          <span>01096675855</span>
        </div>
      </AddressWrapper>
      <AddressWrapper>
        <div>대구 중구 남산로 4길 40-19</div>
        <div>
          <span>권혁창</span>
          <span>01096675855</span>
        </div>
      </AddressWrapper>
      <AddressWrapper>
        <div>대구 중구 남산로 4길 40-19</div>
        <div>
          <span>권혁창</span>
          <span>01096675855</span>
        </div>
      </AddressWrapper>
      <AddAddressButton
        onClick={() => {
          router.push('/address/new-address');
        }}
      >
        주소 추가하기
      </AddAddressButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
`;

const TopNavigator = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddressWrapper = styled.div`
  border: 1px solid black;
`;

const AddAddressButton = styled.div``;
