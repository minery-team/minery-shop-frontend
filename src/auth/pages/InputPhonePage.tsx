import { checkUserExist, sendSmsCode, confirmPass } from '@/common/api/auth';
import { AppBar, Container, InputField } from '@/common/components';
import { useUser } from '@/common/hooks';
import { checkValidPhoneNumber } from '@/common/utils';
import { IMP } from '@/common/utils/IMP';
import { FixedBottomCTA } from '@boxfoxs/bds-web';
import { useAsyncCallback } from '@boxfoxs/core-hooks';
import { useInputState } from '@boxfoxs/core-hooks-dom';
import { QS } from '@boxfoxs/next';
import Router from 'next/router';
import { redirectAfterAuth } from '../utils/redirectAfterAuth';

export default function InputPhonePage() {
  const [, reload] = useUser();
  const [phone, onPhoneChange] = useInputState();

  const cta = useAsyncCallback(async () => {
    const isExists = await checkUserExist(phone);
    if (isExists) {
      await sendSmsCode(phone);
      Router.push(
        `/auth/code${QS.create({ phone, redirectUrl: QS.get('redirectUrl') })}`
      );
      return;
    }
    const res = await IMP.requestCertification(`${phone}_${Date.now()}`);
    if (res.success) {
      await confirmPass(res.imp_uid);
      await reload();
      redirectAfterAuth();
    }
  });

  return (
    <Container>
      <AppBar back />
      <InputField value={phone} onChange={onPhoneChange} />
      <FixedBottomCTA
        disabled={!checkValidPhoneNumber(phone)}
        onClick={cta.callback}
        loading={cta.isLoading}
      >
        다음
      </FixedBottomCTA>
    </Container>
  );
}
