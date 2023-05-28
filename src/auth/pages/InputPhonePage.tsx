import { checkUserExist, sendSmsCode } from '@/common/api/auth';
import { AppBar, Container, InputField } from '@/common/components';
import type { CertificationResponse } from '@/common/types';
import { checkValidPhoneNumber } from '@/common/utils';
import { IMP } from '@/common/utils/IMP';
import { FixedBottomCTA } from '@boxfoxs/bds-web';
import { useAsyncCallback } from '@boxfoxs/core-hooks';
import { useInputState } from '@boxfoxs/core-hooks-dom';
import { QS } from '@boxfoxs/next';
import Router from 'next/router';

export default function InputPhonePage() {
  const [phone, onPhoneChange] = useInputState();

  const cta = useAsyncCallback(async () => {
    const isExists = await checkUserExist(phone);
    if (isExists) {
      await sendSmsCode(phone);
      Router.push(`/auth/code${QS.create({ phone })}`);
      return;
    }
    const res = await IMP.requestCertification(`${phone}_${Date.now()}`);
    if (res.success) {
      console.log(res.imp_uid);
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
