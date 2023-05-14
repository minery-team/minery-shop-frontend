import MyPageTemplate from '../MyPageTemplate';
import { Profile, MenuList, OrderDashboard } from '../components';
import { useUserQuery } from '@/hooks/queries/useUserQuery';

function MyPage() {
  const { data: userInfo } = useUserQuery(0)

  // TODO: Loading, Error 처리
  if (!userInfo) return null;

  return (
    <MyPageTemplate>
      <Profile name={userInfo.name} phoneNumber={userInfo.phone} />
      <OrderDashboard />
      <MenuList
        menus={[
          {
            label: '주소관리',
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

export default MyPage;
