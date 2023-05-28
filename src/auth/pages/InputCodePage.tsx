import { validateSmsCode } from '@/common/api/auth';
import { AppBar, Container, InputField } from '@/common/components';
import { useUser } from '@/common/hooks';
import { FixedBottomCTA } from '@boxfoxs/bds-web';
import { useAsyncCallback, useBooleanState } from '@boxfoxs/core-hooks';
import { useInputState } from '@boxfoxs/core-hooks-dom';
import { QS } from '@boxfoxs/next';
import Router from 'next/router';
import { redirectAfterAuth } from '../utils/redirectAfterauth';

export default function InputCodePage() {
  const phone = QS.get('phone');
  const [, reloadUser] = useUser();
  const [code, onCodeChange] = useInputState();
  const [isError, setError, clearError] = useBooleanState();
  const cta = useAsyncCallback(async () => {
    if (!phone) {
      return;
    }
    try {
      await validateSmsCode(phone, code);
      await reloadUser();
      redirectAfterAuth();
    } catch {
      setError();
    }
  });

  if (!phone) {
    Router.replace('/auth');
    return null;
  }

  return (
    <Container>
      <AppBar back />
      <InputField value={code} onChange={onCodeChange} />
      <FixedBottomCTA
        disabled={code.length < 6}
        onClick={cta.callback}
        loading={cta.isLoading}
      >
        확인
      </FixedBottomCTA>
    </Container>
  );
}
