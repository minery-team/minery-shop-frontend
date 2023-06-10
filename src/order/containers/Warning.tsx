import React, { useState } from 'react';
import Image from 'next/image';
import { Text, Spacing, Divider } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { WARNING_TEXT } from '@order/model/WarningText';
import { colors } from '@/common/constants';

export default function Warning() {
  const [isShowWaring, setIsShowWarning] = useState(false);

  const textIndent = (prefixText, suffixText) => {
    return (
      <TextIndent>
        <Text
          size="sm"
          weight="regular"
          color={colors.gray500}
          style={{ minWidth: '15px' }}
        >
          {prefixText}
        </Text>
        <Text size="sm" weight="regular" color={colors.gray500}>
          {suffixText}
        </Text>
      </TextIndent>
    );
  };

  return (
    <Wrapper onClick={() => setIsShowWarning(!isShowWaring)}>
      <WarningNavWrapper>
        <WarningNavTextWrapper>
          <Image
            src="/images/common/exclamation-mark.png"
            alt="chevron-down"
            width={12}
            height={12}
          />
          <Text size="base" weight="medium" color={colors.gray700}>
            배달상품 주의사항
          </Text>
        </WarningNavTextWrapper>
        <Image
          src={`/images/common/chevron-${isShowWaring ? 'up' : 'down'}.png`}
          alt="chevron-down"
          width={12}
          height={6}
        />
      </WarningNavWrapper>
      {isShowWaring && (
        <>
          <Divider
            width="calc(100% - 40px)"
            height={1}
            color={colors.gray200}
            style={{ margin: '-4px 0 0 20px' }}
          />
          <WarningText>
            <Text size="sm" weight="regular" color={colors.gray500}>
              (주)마이너리 배달상품 주의사항 동의
            </Text>
            <br />
            {WARNING_TEXT.map((text) => textIndent(text.prefix, text.suffix))}
          </WarningText>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.gray100};
`;

const WarningNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const WarningNavTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const WarningText = styled.div`
  padding: 16px 20px 20px 20px;
`;

const TextIndent = styled.div`
  display: flex;
`;
