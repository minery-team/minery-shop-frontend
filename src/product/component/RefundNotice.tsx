import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import Image from 'next/image';
import { useState } from 'react';

const RefundNotice = () => {
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
            alt="교환/환불 안내"
          />
          <Text color={colors.gray700}>교환/환불 안내</Text>
        </div>
        <img
          src="/assets/up_arrow.svg"
          width={16}
          height={16}
          alt="배송비 안내 자세히 보기"
          style={{
            transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </div>
      {expanded && (
        <NoticeDetailContainer>
          <Text color={colors.gray500} size="sm" weight="regular">
            • 마이너리 상품은 전체 식품으로 구성되어 있습니다.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 식품의 경우 신선도가 중요하므로, 연락이 안 되실 경우 손상된 상품을
            받으실 수 있습니다.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 와인 및 냉장/냉동 식품의 경우 상품 가치 하락으로 재판매가
            불가하므로 상품 수령 후, 고객님의 단순 변심에 의한 교환/반품/취소가
            불가합니다.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 수취인의 주소, 연락처를 잘못 기재하여 발생된 배송사고, 제품을 직접
            받으실 수 없거나 고객의 부재 등으로 인한 택배사고 시 교환 및 반품
            불가합니다.
          </Text>

          {/* 채널톡 메시지 ID 채우기 */}
          <Text color={colors.gray500} size="sm" weight="regular">
            • 제품의 불량, 파손, 오배송일 경우 수령 후 3일 이내 톡채널
            메시지(000000)로 교환 및 반품을 접수 해주세요.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 제품 이상이 있을 경우 포장을 뜯거나 버리지 말고 받은 그대로
            사진촬영 후 문의 주시기 바랍니다. (반품 배송비는 판매자가
            부담합니다.)
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 상품의 개봉 및 사용 흔적이 발생 하였을 경우 교환 및 반품이
            불가합니다.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 상품수령 후 결함/불량을 발견하신 경우 [박스 겉면 운송장 사진 1장,
            제품 사진 1장 이상]을 미리 찍어 확보해주세요.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 고객의 귀책사유로 인해 상품과 구성품이 멸실 또는 훼손된 경우 교환
            및 반품 불가 합니다.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 교환 및 반품에 대해 사전 협의 없이 제품을 보낸 경우 반송
            처리됩니다.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 화면 상에 보이는 색상은 모니터 및 PC 사양에 따라 다를 수 있으며,
            이로 인한 반품 및 가격보상은 불가합니다.
          </Text>

          <Text color={colors.gray500} size="sm" weight="regular">
            • 해당 페이지에 표기된 와인 이미지는 임의 빈티지로, 재고 상황에 따라
            배송되는 와인의 빈티지는 이미지와 상이할 수 있습니다. 빈티지 차이에
            따른 교환/반품/취소는 불가합니다.
          </Text>
        </NoticeDetailContainer>
      )}
    </div>
  );
};

export default RefundNotice;

const NoticeDetailContainer = styled.div`
  margin-top: 16px;
  border-top: 1px solid ${colors.gray200};
  padding-top: 16px;
  & > div {
    margin-bottom: 2px;
  }
`;
