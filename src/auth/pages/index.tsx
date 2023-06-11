import { useUser } from '@common/hooks';
import { redirectAfterAuth } from '../utils/redirectAfterAuth';
import InputPhonePage from './InputPhonePage';

export default function AuthPage() {
  const [user] = useUser();

  if (user) {
    redirectAfterAuth();
    return null;
  }

  return <InputPhonePage />;
}
