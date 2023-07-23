import { Spacing } from '@boxfoxs/bds-web';
import { AppBar, Container, Section, SectionDivider } from 'common/components';
import { withAuth } from 'common/hocs';
import Router from 'next/router';
import { colors } from 'common/constants';
import {
  MenuList,
  OrderDashboard,
  ProfileSection,
  useLogoutConfirm,
} from '../components';
import { LoggingState } from '@boxfoxs/logger';

const MyPage = () => {
  const logout = useLogoutConfirm();

  return (
    <LoggingState name="Page View - My Page">
      <Container>
        <AppBar back />
        <ProfileSection />
        <SectionDivider />
        <Section>
          <OrderDashboard />
          <Spacing height={24} />
          <Spacing
            height={1}
            style={{
              background: colors.gray100,
            }}
          />
          <MenuList
            menus={[
              {
                label: '문의하기',
                onClick: () => Router.push('/customer-service'),
              },
              {
                label: '로그아웃',
                onClick: logout,
              },
            ]}
          />
        </Section>
      </Container>
    </LoggingState>
  );
};

export default withAuth(MyPage);
