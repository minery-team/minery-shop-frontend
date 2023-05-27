import { useRouter } from 'next/router';
import styled from '@emotion/styled';

export default function noWineList() {
  const router = useRouter();

  return (
    <NoItemWrapper>
      장바구니가 비어있어요
      <GoCartButton
        onClick={() => {
          // router.push('/list');
        }}
      >
        채우러 가기
      </GoCartButton>
    </NoItemWrapper>
  );
}

const NoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const GoCartButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: pink;
`;
