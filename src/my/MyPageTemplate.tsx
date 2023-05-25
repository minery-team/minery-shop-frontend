import { AppBar } from '@/common/components';
import Container from '@/common/components/layout/Container';
import styled from '@emotion/styled';
import { PropsWithChildren, memo } from 'react';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 58px;
  padding: 0px 12px;
`;

interface Props {}

const MyPageTemplate = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <AppBar back />
      <Container>{children}</Container>
    </>
  );
};

export default memo(MyPageTemplate);
