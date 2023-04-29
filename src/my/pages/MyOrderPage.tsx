import { NextPage } from 'next';
import MyPageTemplate from '../MyPageTemplate';
import { useRouter } from 'next/router';
import { MyOrderFilterList } from '../components';

const MyOrderPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <MyPageTemplate>
      <MyOrderFilterList />
      <p>{query.status}</p>
    </MyPageTemplate>
  );
};

export default MyOrderPage;
