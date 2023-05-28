import { useUser } from '@/common/hooks';
import { QS } from '@boxfoxs/next';
import Router from 'next/router';
import InputPhonePage from './InputPhonePage';

export default function AuthPage() {
  const [user, reload] = useUser();
  const redirect = () => {
    const redirectUrl = QS.get('redirectUrl')!;
    if (redirectUrl) {
      Router.replace(redirectUrl);
    } else {
      Router.back();
    }
  };
  if (user) {
    redirect();
  }

  return <InputPhonePage />;
}
