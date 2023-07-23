import { Spacing, Text } from '@boxfoxs/bds-web';
import { useAsyncCallback } from '@boxfoxs/core-hooks';
import { useInputState } from '@boxfoxs/core-hooks-dom';
import { QS } from '@boxfoxs/next';
import { checkUserExist, confirmPass, sendSmsCode } from 'common/api/auth';
import {
  AppBar,
  Container,
  FixedBottomCTA,
  InputField,
  Section,
} from 'common/components';
import { colors } from 'common/constants';
import { useUser } from 'common/hooks';
import { checkValidPhoneNumber, formatPhoneNumber } from 'common/utils';
import { IMP } from 'common/utils/IMP';
import Router from 'next/router';
import { redirectAfterAuth } from '../utils/redirectAfterAuth';
import { LoggingClick, LoggingState } from '@boxfoxs/logger';

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
    <LoggingState name="Page View - Input Phone in Auth">
      <div>
        <Container>
          <AppBar back />
          <Section>
            <Text size="xxl" weight="semibold" color={colors.gray900}>
              우선, 휴대폰 번호를 알려주세요
            </Text>
            <Spacing height={6} />
            <Text size="base" weight="regular" color={colors.gray600}>
              본인 확인을 위해 입력한 번호로 인증번호를 전송할게요
            </Text>
            <Spacing height={24} />
            <InputField
              label="휴대폰 번호"
              value={formatPhoneNumber(phone)}
              onChange={onPhoneChange}
              placeholder="010-0000-0000"
              autoFocus
              type="tel"
            />
          </Section>
        </Container>
        <LoggingClick name="Tap - Next" params={{ step: 'input_phone' }}>
          <FixedBottomCTA
            disabled={!checkValidPhoneNumber(phone)}
            onClick={cta.callback}
            loading={cta.isLoading}
            type="default"
          >
            다음
          </FixedBottomCTA>
        </LoggingClick>
      </div>
    </LoggingState>
  );
}
