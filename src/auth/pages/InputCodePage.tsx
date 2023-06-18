import { Flex, Spacing, Text } from '@boxfoxs/bds-web';
import { useAsyncCallback, useBooleanState } from '@boxfoxs/core-hooks';
import { useInputState } from '@boxfoxs/core-hooks-dom';
import { QS, isClient } from '@boxfoxs/next';
import { sleep } from '@boxfoxs/utils';
import { sendSmsCode, validateSmsCode } from 'common/api/auth';
import { addToCart } from 'common/api/cart';
import {
  AppBar,
  Container,
  FixedBottomCTA,
  InputField,
  MText,
  MineryButton,
  Section,
} from 'common/components';
import { colors } from 'common/constants';
import { useCountdown, useUser } from 'common/hooks';
import { useLocalCart } from 'common/hooks/useCart';
import Router from 'next/router';
import { useRef } from 'react';
import { redirectAfterAuth } from '../utils/redirectAfterAuth';

export default function InputCodePage() {
  const phone = QS.get('phone');
  const [, reloadUser] = useUser();
  const [code, onCodeChange] = useInputState();
  const [isError, setError, clearError] = useBooleanState();
  const inputRef = useRef<HTMLInputElement>(null);
  const localCart = useLocalCart();
  const countdown = useCountdown(180);
  const cta = useAsyncCallback(async () => {
    if (!phone) {
      return;
    }
    try {
      await validateSmsCode(phone, code);
      await reloadUser();
      for (const item of localCart.value) {
        await addToCart(item);
      }
      localCart.clear();
      await sleep(1000);
      redirectAfterAuth();
    } catch {
      setError();
    }
  });

  const handleResendClick = async () => {
    if (!phone) {
      return;
    }
    await sendSmsCode(phone);
    countdown.reset();
    inputRef.current?.focus();
  };

  if (!phone && isClient()) {
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
            ref={inputRef}
            value={code.slice(0, 6)}
            onChange={onCodeChange}
            placeholder="인증번호"
            autoFocus
            type="tel"
            inputMode="numeric"
            pattern="[0-9]"
            autoComplete="one-time-code"
            maxLength={6}
            right={
              <CountdownLabel
                minute={countdown.minutes}
                second={countdown.seconds}
              />
            }
          />
          <Spacing width={20} />
          <MineryButton
            style={{ width: '90px' }}
            height={46}
            type="light"
            textStyle={{ size: 'lg' }}
            onClick={handleResendClick}
          >
            재요청
          </MineryButton>
        </Flex.CenterVertical>
      </Section>
      <FixedBottomCTA
        disabled={code.length < 6}
        onClick={cta.callback}
        loading={cta.isLoading}
        type="default"
      >
        확인
      </FixedBottomCTA>
    </Container>
  );
}

function CountdownLabel({
  minute,
  second,
}: {
  minute: number;
  second: number;
}) {
  return (
    <Text color={colors.systemError} size="lg">
      {minute.toString().padStart(2, '0')}:{second.toString().padStart(2, '0')}
    </Text>
  );
}
