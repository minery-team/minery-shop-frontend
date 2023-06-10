import styled from '@emotion/styled';

import { useUserQuery } from '@/common/hooks/queries';

export default function UserInfo({
  onAddressClick,
}: {
  onAddressClick: (isClickAddress: boolean) => void;
}) {
  const [userInfo] = useUserQuery(0); // TODO userId 변경

  return (
    <>
      <FlexDiv>
        <div>고객정보</div>
        <div>{userInfo?.name}</div>
      </FlexDiv>
      <FlexDiv>
        <div>배송지</div>
        <div onClick={() => onAddressClick(true)}>룰루랄라</div>
      </FlexDiv>
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
