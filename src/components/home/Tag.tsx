import { css } from '@emotion/react';
import { Text } from '@boxfoxs/bds-web';

export function Tag({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <Text
      size="sm"
      weight="medium"
      color="#4F4F4F"
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '91px',
        height: '32px',
        border: '1px solid #F1F1F1',
        borderRadius: '24px',
      })}
      onClick={onClick}
    >
      {text}
    </Text>
  );
}
