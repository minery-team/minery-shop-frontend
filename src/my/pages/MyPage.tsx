import { withAuth } from '@/common/hocs';
import { useUser } from '@/common/hooks';
import { Spacing } from '@boxfoxs/bds-web';
import {
  Container,
  Section,
  SectionDivider,
  AppBar,
} from '@/common/components';
import { Profile, MenuList, OrderDashboard } from '../components';

const MyPage = () => {
  const [userInfo] = useUser();

  // TODO: Loading, Error 처리
  if (!userInfo) return null;

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
            },
          ]}
        />
      </Section>
    </Container>
  );
};

export default withAuth(MyPage);
