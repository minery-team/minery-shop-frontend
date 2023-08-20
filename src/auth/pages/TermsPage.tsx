import { Checkbox, Divider, Flex, Spacing, Text } from '@boxfoxs/bds-web';
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
import { checkValidPhoneNumber, formatPhoneNumber, safeLocalStorage } from 'common/utils';
import { IMP } from 'common/utils/IMP';
import Router from 'next/router';
import { redirectAfterAuth } from '../utils/redirectAfterAuth';
import { LoggingClick, LoggingState } from '@boxfoxs/logger';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { WarningTextType } from 'order/model/WarningText';
import Link from 'next/link';
import { a } from 'react-spring';

const AGREE_LOCAL_STORAGE_KEY = 'agreeState';

export default function TermsPage() {
  const [, reload] = useUser();

  const [agreeState, setAgreeState] = useState(() => {
    const defaultState = {
      terms: false,
      privacy: false,
      // marketing: false,
    }
    const storedState = safeLocalStorage.get(AGREE_LOCAL_STORAGE_KEY);

    return storedState ? JSON.parse(storedState) : defaultState;
  })

  useEffect(() => {
    safeLocalStorage.set(AGREE_LOCAL_STORAGE_KEY, JSON.stringify(agreeState))
  }, [agreeState])

  const updateAgreeState = (key: string, value: boolean) => {
    setAgreeState({
      ...agreeState,
      [key]: value,
    })
  }

  const updateAllAgreeState = (value: boolean) => {
    setAgreeState({
      terms: value,
      privacy: value,
      // marketing: value,
    })
  }

  const isAllAgree = useMemo(() => {
    return agreeState.terms && agreeState.privacy;
  }, [agreeState])

  const cta = useCallback(() => {
    safeLocalStorage.remove(AGREE_LOCAL_STORAGE_KEY);
    Router.push(
      `/auth/phone${QS.create({ redirectUrl: QS.get('redirectUrl') })}`
    );
  }, []);

  return (
    <LoggingState name="Page View - Agree Terms">
      <div>
        <Container>
          <AppBar back />
          <Section>
            <div
              css={css`white-space: pre-wrap;`}
            >
              <Text size="xxl" weight="semibold" color={colors.gray900}>
                지금 마이너리에 가입하고{`\n`}
                와인 전국 배송을 받아보세요.
              </Text>
            </div>
            <Spacing height={6} />
            <Text size="base" weight="regular" color={colors.gray600}>
              아래 이용 약관에 동의해 주세요.
            </Text>
            <Spacing height={24} />
            <TermsBox>
              <label>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '20px 24px',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isAllAgree}
                    onChange={({ target: { checked } }) => updateAllAgreeState(checked)}
                  />
                  <Text size="xl" weight="semibold" color={colors.gray900}>
                    모두 동의합니다.
                  </Text>
                </div>
              </label>
              <div style={{
                height: '1px',
                background: `#F5F5F5`,
              }} />
              <div style={{
                padding: '20px 24px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <label>
                    <div
                      style={{
                        display: 'flex',
                        gap: '12px',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={agreeState.terms}
                        onChange={({ target: { checked } }) => updateAgreeState('terms', checked)}
                      />
                      <Text size="l" weight="semibold" color={colors.gray900}>
                        (필수) 서비스 이용약관
                      </Text>
                    </div>
                  </label>
                  <Link href="https://ilovewine.notion.site/92e5ba41d6b848b582e88c76bdef83c9?pvs=4">
                    <img
                      src={`/assets/chevron_up_gray.svg`}
                      alt="show more"
                      width={16}
                      height={16}
                      style={{
                        transform: 'rotate(90deg)',
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div style={{
                padding: '20px 24px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <label>
                    <div
                      style={{
                        display: 'flex',
                        gap: '12px',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={agreeState.privacy}
                        onChange={({ target: { checked } }) => updateAgreeState('privacy', checked)}
                      />
                      <Text size="l" weight="semibold" color={colors.gray900}>
                        (필수) 개인정보 처리방침
                      </Text>
                    </div>
                  </label>
                  <Link href="https://ilovewine.notion.site/43d45441abbb4be3837887f606cbb0d7?pvs=4">
                    <img
                      src={`/assets/chevron_up_gray.svg`}
                      alt="show more"
                      width={16}
                      height={16}
                      style={{
                        transform: 'rotate(90deg)',
                      }}
                    />
                  </Link>
                </div>
              </div>
            </TermsBox>
            <Spacing height={24} />
          </Section>
        </Container>
        <LoggingClick name="Tap - Next" params={{ step: 'terms_agree' }}>
          <FixedBottomCTA
            disabled={!isAllAgree}
            onClick={cta}
            type="default"
          >
            다음
          </FixedBottomCTA>
        </LoggingClick>
      </div>
    </LoggingState>
  );
}

const TermsBox = styled.div`
  border-radius: 6.024px;
  border: 1.004px solid var(--gray-100, #F5F5F5);
  background: var(--default-white, #FFF);
`;