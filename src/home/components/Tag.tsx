import { css } from '@emotion/react';
import { Text } from '@boxfoxs/bds-web';
import { Space } from 'common/components';

import { colors } from 'common/constants';

export function Tag({
  text,
  onClick,
  spotColor,
  isSelected,
}: {
  text: string;
  onClick: () => void;
  spotColor?: string;
  isSelected?: boolean;
}) {
  return (
    <button
      type="button"
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32px',
        backgroundColor: isSelected ? `${colors.primary100}` : 'transparent',
        border: isSelected
          ? `1px solid ${colors.primary400}`
          : '1px solid #F1F1F1',
        borderRadius: '24px',
        padding: '6px 16px',
        flex: 'none',
      })}
      onClick={onClick}
    >
      {spotColor === undefined ? (
        <img
          src="/assets/swap.svg"
          width={16}
          height={16}
          alt="swap another category"
        />
      ) : (
        <div
          css={css`
            background-color: ${spotColor};
            width: 8px;
            height: 8px;
            border-radius: 50%;
          `}
        />
      )}
      <Space right="6px" />
      <Text size="sm" weight="medium" color="#4F4F4F">
        {text}
      </Text>
    </button>
  );
}
