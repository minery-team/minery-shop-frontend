import { useUser } from '@/common/hooks';
import { QS } from '@boxfox/next';
import Router from 'next/router';
import { LoggingClick, LoggingState } from '@boxfoxs/logger';
import { Spacing, FixedBottomCTA } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { AppBar } from '@/common/components';
import { AuthForm, useAuthForm } from '../components/auth-form';

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
  const controls = useAuthForm(async () => {
    await reload();
    redirect();
  });
  const { stepName, submit, isDisabled, step } = controls;

  return (
    <LoggingState name="Page View - Auth" params={{ step: stepName }}>
      <Container>
        <AppBar back />
        <Spacing height={16} />
        <AuthForm controls={controls} />
        <Spacing height={20} />
        <LoggingClick
          name="Tap - Next in Auth"
          params={{
            step: stepName,
          }}
        >
          <FixedBottomCTA
            loading={submit.isLoading}
            onClick={submit.callback}
            disabled={isDisabled}
          >
            {step.value === 0 ? '인증하고 로그인하기' : '확인'}
          </FixedBottomCTA>
        </LoggingClick>
      </Container>
    </LoggingState>
  );
}

const Container = styled.div`
  height: 90vh;
  overflow: hidden;
`;
