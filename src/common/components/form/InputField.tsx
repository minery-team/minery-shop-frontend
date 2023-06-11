import React, { ComponentProps, ForwardedRef } from 'react';

export const InputField = React.forwardRef(function InputField(
  props: ComponentProps<'input'>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <input {...props} ref={ref} />;
});
