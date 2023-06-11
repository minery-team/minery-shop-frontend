import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDaumPostcodePopup, Address } from 'react-daum-postcode';
import { Icon } from '@iconify/react';
import styled from '@emotion/styled';

import { useUserQuery } from '@/common/hooks/queries';

export default function NewAddress() {
  const router = useRouter();
  const open = useDaumPostcodePopup();
  const [userInfo] = useUserQuery(0); // TODO userId 변경
  const [zonecode, setZonecode] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const isDefaultAddress = useRef<boolean>(false);

  const handleComplete = (data: Address) => {
    setZonecode(data.zonecode);
    setRoadAddress(data.roadAddress);
  };

  return (
    <Container>
      <TopNavigator>
        <Icon
          icon="material-symbols:arrow-back-ios-rounded"
          width={20}
          height={20}
          onClick={() => router.back()}
        />
        <div>신규 배송지 등록</div>
      </TopNavigator>
      <div style={{ width: 'calc(100% - 40px)' }}>
        <InputBox placeholder="이름" value={userInfo?.name} />
        <InputBox placeholder="휴대폰 번호" value={userInfo?.phone} />
        <div style={{ position: 'relative' }}>
          <InputBox placeholder="우편번호" value={zonecode} />
          <AddAddressButton
            onClick={() => {
              open({ onComplete: handleComplete });
            }}
          >
            주소 찾기
          </AddAddressButton>
        </div>
        <InputBox placeholder="주소" value={roadAddress} />
        <InputBox placeholder="상세 주소" />
      </div>
      <span style={{ marginTop: '10px' }}>
        <input
          type="checkbox"
          id="default_address"
          onClick={() => (isDefaultAddress.current = !isDefaultAddress.current)}
        />
        <label htmlFor="default_address">기본 배송지로 설정</label>
      </span>
      <BottomButton
        onClick={() => {
          // TODO address post API 추가
          router.back();
        }}
      >
        저장하기
      </BottomButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100vh;
  padding: 0 20px;
`;

const TopNavigator = styled.div`
  display: flex;
`;

const InputBox = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid black;
`;

const AddAddressButton = styled.div`
  position: absolute;
  top: 10px;
  left: 200px;
  width: 100px;
  height: 30px;
  background-color: black;
  color: white;
`;

const BottomButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 300px;
  height: 56px;
  background-color: green;
`;
