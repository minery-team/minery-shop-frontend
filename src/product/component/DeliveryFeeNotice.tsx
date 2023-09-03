import { Text } from '@boxfoxs/bds-web';
import { colors } from 'common/constants';
import Image from 'next/image';
import { useState } from 'react';

const DeliveryFeeNotice = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      style={{
        background: colors.gray100,
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onClick={toggleExpanded}
        onKeyUp={toggleExpanded}
        role="button"
        tabIndex={0}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <img
            src="/assets/home.svg"
            width={16}
            height={16}
            alt="배송비 안내"
          />
          <Text color={colors.gray700}>A 와인마트</Text>
        </div>
        <img
          src="/assets/chevron_up_gray.svg"
          width={24}
          height={24}
          alt="배송비 안내 자세히 보기"
          style={{
            color: 'red',
            transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </div>
      {expanded && (
        <div
          style={{
            borderTop: `1px solid ${colors.gray200}`,
            paddingTop: '10px',
          }}
        >
          <Text color={colors.gray700} size="sm" weight="regular">
            주소 화양동 46-30번지 401호
          </Text>
          <Text color={colors.gray700} size="sm" weight="regular">
            전화 000-000-0000
          </Text>
        </div>
      )}
    </div>
  );
};

export default DeliveryFeeNotice;
