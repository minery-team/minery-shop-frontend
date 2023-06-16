import { colors } from 'common/constants';
import { Text } from '@boxfoxs/bds-web';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import notice from '../../../public/assets/notice.svg';
import up_arrow from '../../../public/assets/up_arrow.svg';

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
          <Image src={notice} width={16} height={16} alt="배송비 안내" />
          <Text color={colors.gray700}>30,000원 이상 무료배송</Text>
        </div>
        <Image
          src={up_arrow}
          width={16}
          height={16}
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
            30,000원 이상 주문시 무료배송
          </Text>
          <Text color={colors.gray700} size="sm" weight="regular">
            30,000원 미만 주문시 배송비 3,500원
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
