import { useUser } from '@/common/hooks';
import { redirectAfterAuth } from '../utils/redirectAfterauth';
import InputPhonePage from './InputPhonePage';

export default function AuthPage() {
  const [user] = useUser();

  if (user) {
    redirectAfterAuth();
  }

  return <InputPhonePage />;
}
