import { withAuth } from '@/common/hocs';
import { useUser } from '@/common/hooks';
import { Spacing } from '@boxfox/bds-web';
import MyPageTemplate from '../MyPageTemplate';
import { Profile, MenuList, OrderDashboard } from '../components';

const MyPage = () => {
  const [userInfo] = useUser();

  // TODO: Loading, Error 처리
  if (!userInfo) return null;

  return (
    <MyPageTemplate>
      <Profile name={userInfo.name} phoneNumber={userInfo.phone} />
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
    </MyPageTemplate>
  );
};

export default withAuth(MyPage);
