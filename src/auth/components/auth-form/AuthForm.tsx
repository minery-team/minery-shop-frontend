import { Form, Spacing, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import { formatPhoneNumber } from '@/common/utils/formatPhoneNumber';
import { colors } from '@/common/constants';
import { useAuthForm } from './useAuthForm';

export const AuthForm = ({
  controls,
}: {
  controls: ReturnType<typeof useAuthForm>;
}) => {
  const { phone, code, name, step, codeRef, nameRef } = controls;
  const style = useSpring({
    left: `-${step.value * 100}%`,
  });

  return (
    <div style={{ overflow: 'hidden', height: '300px', position: 'relative' }}>
      <ContentContainer style={style} key={step.value}>
        <FormContainer>
          <Text size="xl" weight="bold">
            휴대폰 번호를 입력해주세요
          </Text>
          <Spacing height={4} />
          <Text size="sm" color={colors.gray600}>
            본인 확인을 위해 휴대폰 번호를 입력해주세요
          </Text>
          <Spacing height={24} />
          <Form.Input
            placeholder="010-0000-0000"
            value={formatPhoneNumber(phone.value)}
            autoFocus
            onChange={phone.onChange}
            style={{ color: colors.gray900 }}
            type="tel"
          />
        </FormContainer>
        <FormContainer>
          <Text size="xl" weight="bold">
            인증번호 입력해주세요
          </Text>
          <Spacing height={4} />
          <Text size="sm" color={colors.gray600}>
            본인 확인을 위해 휴대폰으로 발송된 인증번호를 입력해주세요
          </Text>
          <Spacing height={24} />
          <Form.Input
            placeholder="인증번호"
            value={code.value}
            onChange={code.onChange}
            ref={codeRef}
            style={{ color: colors.gray900 }}
            type="tel"
            // @ts-ignore
            inputmode="numeric"
            pattern="[0-9]"
            autocomplete="one-time-code"
            maxLength={6}
          />
        </FormContainer>
        <FormContainer>
          <Text size="xl" weight="bold">
            이름을 입력해주세요
          </Text>
          <Spacing height={4} />
          <Text size="sm" color={colors.gray600}>
            본인 확인을 위해 실명을 입력해주세요
          </Text>
          <Spacing height={24} />
          <Form.Input
            placeholder="이름"
            value={name.value}
            onChange={name.onChange}
            ref={nameRef}
            maxLength={6}
            style={{ color: colors.gray900 }}
          />
        </FormContainer>
      </ContentContainer>
    </div>
  );
};
const ContentContainer = styled(animated.div)`
  display: flex;
  width: 300%;
  top: 0;
  position: absolute;
  height: 500px;
  left: 0;
`;

const FormContainer = styled(animated.div)`
  padding: 0 24px;
  width: 100%;
`;
