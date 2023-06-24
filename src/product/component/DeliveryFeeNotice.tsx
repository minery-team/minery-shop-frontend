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
            src="/assets/notice.svg"
            width={16}
            height={16}
            alt="배송비 안내"
          />
          <Text color={colors.gray700}>70,000원 이상 무료배송</Text>
        </div>
        <img
          src="/assets/up_arrow.svg"
          width={24}
          height={24}
          alt="배송비 안내 자세히 보기"
          style={{
            transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </div>
      {expanded && (
        <div
          style={{
            marginTop: '20px',
            borderTop: `1px solid ${colors.gray200}`,
            paddingTop: '20px',
          }}
        >
          <Text color={colors.gray700} size="sm" weight="regular">
            70,000원 이상 주문시 무료배송
          </Text>
          <Text color={colors.gray700} size="sm" weight="regular">
            70,000원 미만 주문시 배송비 3,500원
          </Text>
          <Text color={colors.gray700} size="sm" weight="regular">
            제주, 도서 지역 시 2,000원 추가
          </Text>
        </div>
      )}
    </div>
  );
};

export default DeliveryFeeNotice;
