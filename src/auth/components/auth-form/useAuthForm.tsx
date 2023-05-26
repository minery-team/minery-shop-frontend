import { sendSmsCode, validateSmsCode, updateName } from '@/common/api/auth';
import { useUser } from '@/common/hooks';
import { checkValidPhoneNumber } from '@/common/utils/phoneUtil';
import { useAsyncCallback, useInputState, useStep } from '@boxfoxs/core-hooks';
import { sleep } from '@boxfoxs/utils';
import { useMemo, useRef } from 'react';

export function useAuthForm(
  onFinish: (params: { phone: string; name: string }) => void
) {
  const step = useStep(0, 3);
  const [phone, onPhoneChange] = useInputState();
  const [code, onCodeChange] = useInputState();
  const [name, onNameChange] = useInputState();
  const codeRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const isDisabled = useMemo(() => {
    if (step.value === 0) {
      return !checkValidPhoneNumber(phone);
    }
    if (step.value === 1) {
      return code.length !== 6;
    }
    return name.length < 2;
  }, [step.value, phone, name, code]);
  const [, reloadUser] = useUser();

  const submit = useAsyncCallback(async () => {
    if (isDisabled) {
      return;
    }
    if (step.value === 0) {
      await sendSmsCode(phone);
      step.next();
      sleep(1000).then(() => {
        codeRef.current?.focus();
      });
      return;
    }
    if (step.value === 1) {
      await validateSmsCode(phone, code);
      const { data: user } = await reloadUser();
      if (!user?.name) {
        step.next();
        sleep(1000).then(() => {
          nameRef.current?.focus();
        });
        return;
      }
    } else {
      await updateName(name);
      reloadUser();
    }
    onFinish({ phone, name });
  });

  const stepName =
    step.value === 0 ? 'phone' : step.value === 1 ? 'code' : 'name';

  return {
    step,
    phone: { value: phone, onChange: onPhoneChange },
    code: { value: code, onChange: onCodeChange },
    name: { value: name, onChange: onNameChange },
    submit,
    isDisabled,
    stepName,
    codeRef,
    nameRef,
  };
}