import { IconButton } from '@/common/components/buttons';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { PropsWithChildren, memo } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 58px;
  padding: 0px 12px;
`;

interface Props {}

function MyPageTemplate({ children }: PropsWithChildren<Props>) {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <IconButton
          icon={
            <Icon icon="material-symbols:chevron-left-rounded" width={36} />
          }
          onClick={() => router.back()}
        />
      </Header>
      {children}
    </Container>
  );
}

export default memo(MyPageTemplate);
