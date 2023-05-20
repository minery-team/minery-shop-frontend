import { withAuth } from '@/common/hocs';
import MyPageTemplate from '../MyPageTemplate';
import { Profile, MenuList, OrderDashboard } from '../components';
import { useUser } from '@/common/hooks';

function MyPage() {
  const [userInfo] = useUser();

  // TODO: Loading, Error 처리
  if (!userInfo) return null;

  return (
    <MyPageTemplate>
      <Profile name={userInfo.name} phoneNumber={userInfo.phone} />
      <OrderDashboard />
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
}

export default withAuth(MyPage);
