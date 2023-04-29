import { NextPage } from 'next';
import MyPageTemplate from '../MyPageTemplate';
import { Profile, MenuList, OrderDashboard } from '../components';

const MyPage: NextPage = () => {
  return (
    <MyPageTemplate>
      <Profile />
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
};

export default MyPage;
