import { validateSmsCode } from '@common/api/auth';
import {
  AppBar,
  Container,
  InputField,
  MText,
  Section,
} from '@common/components';
import { colors } from '@common/constants';
import { useUser } from '@common/hooks';
import { Button, FixedBottomCTA, Flex, Spacing, Text } from '@boxfoxs/bds-web';
import { useAsyncCallback, useBooleanState } from '@boxfoxs/core-hooks';
import { useInputState } from '@boxfoxs/core-hooks-dom';
import { QS } from '@boxfoxs/next';
import Router from 'next/router';
import { redirectAfterAuth } from '../utils/redirectAfterAuth';

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
      <Section>
        <MText size="xxl" weight="semibold" color={colors.gray900}>
          인증번호를 입력해주세요
        </MText>
        <Spacing height={6} />
        <Text size="base" weight="regular" color={colors.gray600}>
          입력해주신 휴대폰 번호로 인증번호를 발송했어요
        </Text>
        <Spacing height={24} />
        <Flex.CenterVertical>
          <InputField
            value={code}
            onChange={onCodeChange}
            placeholder="인증번호"
            right={<CountdownLabel />}
          />
          <Spacing width={20} />
          <Button style={{ width: '90px', height: '46px' }}>재요청</Button>
        </Flex.CenterVertical>
      </Section>
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

function CountdownLabel() {
  return (
    <Text color={colors.systemError} size="lg">
      03:00
    </Text>
  );
}
