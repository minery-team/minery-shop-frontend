import { useAsyncCallback, useStep } from "@boxfox/core-hooks";
import { useInputState } from "@boxfox/core-hooks-dom";
import { sleep } from "@boxfox/utils";
import { useUser } from "hooks/useUser";
import { useMemo, useRef } from "react";
import { sendSmsCode, updateName, validateSmsCode } from "remotes/auth";
import { checkValidPhoneNumber } from "utils/phoneUtil";

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
    } else if (step.value === 1) {
      return code.length !== 6;
    } else {
      return name.length < 2;
    }
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
    } else if (step.value === 1) {
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
    step.value === 0 ? "phone" : step.value === 1 ? "code" : "name";

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
