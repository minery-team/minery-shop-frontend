import { Text } from '@boxfoxs/bds-web';
import { css } from '@emotion/react';
import { colors } from 'common/constants/colors';
import styled from '@emotion/styled';
import { Space } from 'common/components';
import { scrollTo } from '../utils/scrollTo';

export function ScrollToTopSection() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <ScrollTopButton
        type="button"
        onClick={() => {
          scrollTo('top');
        }}
      >
        <img src="/assets/up.svg" width={16} height={16} alt="" />
        <Space left="8px" />
        <Text size="lg" weight="medium" color={colors.defaultBlack}>
          맨 위로
        </Text>
      </ScrollTopButton>
    </div>
  );
}
const ScrollTopButton = styled.button`
  width: 118px;
  height: 46px;
  border: 1px solid #000000;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
`;
