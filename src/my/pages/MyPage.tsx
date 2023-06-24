import { Spacing } from '@boxfoxs/bds-web';
import { AppBar, Container, Section, SectionDivider } from 'common/components';
import { withAuth } from 'common/hocs';
import {
  MenuList,
  OrderDashboard,
  ProfileSection,
  useLogoutConfirm,
} from '../components';

const MyPage = () => {
  const logout = useLogoutConfirm();

  return (
    <Container>
      <AppBar back />
      <ProfileSection />
      <SectionDivider />
      <Section>
        <Spacing height={16} />
        <OrderDashboard />
        <Spacing height={16} />
        <MenuList
          menus={[
            {
              label: '문의하기',
              to: '/customer-service',
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
