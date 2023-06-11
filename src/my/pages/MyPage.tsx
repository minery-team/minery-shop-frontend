import { withAuth } from 'common/hocs';
import { useUser } from 'common/hooks';
import { Spacing } from '@boxfoxs/bds-web';
import { Container, Section, SectionDivider, AppBar } from 'common/components';
import { clearAccessToken } from 'common/utils';
import Router from 'next/router';
import { Profile, MenuList, OrderDashboard } from '../components';

const MyPage = () => {
  const [userInfo, reload] = useUser();
  const logout = () => {
    clearAccessToken();
    reload();
    Router.push('/');
  };

  // TODO: Loading, Error 처리
  if (!userInfo) return <div />;

  return (
    <Container>
      <AppBar back />
      <Section>
        <Profile name={userInfo.name} phoneNumber={userInfo.phone} />
      </Section>
      <SectionDivider />
      <Section>
        <Spacing height={16} />
        <OrderDashboard />
        <Spacing height={16} />
        <MenuList
          menus={[
            {
              label: '문의하기',
              to: '/',
            },
            {
              label: '로그아웃',
              to: '/',
              onClick: logout,
            },
          ]}
        />
      </Section>
    </Container>
  );
};

export default withAuth(MyPage);
