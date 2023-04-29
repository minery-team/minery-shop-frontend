import MyPageTemplate from '../MyPageTemplate';
import { Profile, MenuList, OrderDashboard } from '../components';

function MyPage() {
  return (
    <MyPageTemplate>
      <Profile name="유저 이름" phoneNumber="010-0000-0000" />
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
