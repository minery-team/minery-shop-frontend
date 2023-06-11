import { css } from '@emotion/react';
import Image from 'next/image';
import { Text } from '@boxfoxs/bds-web';
import { colors } from '@common/constants';
import logo from '../../../../public/assets/image_logo.svg';
import { Space } from '../space';

export function Footer() {
  return (
    <section
      css={css`
        width: 100%;
        background-color: ${colors.gray200};
      `}
    >
      <div
        css={css`
          padding: 36px 20px;
        `}
      >
        <Image src={logo} width={30} height={18} alt="logo" />
        <Space bottom="20px" />
        <div
          css={css`
            display: flex;
          `}
        >
          <Text size="base" weight="semibold" color="gray900">
            문의하기
          </Text>
          {/* FIXME: seperator 임시로 대응 */}
          <Space left="5px" />
          |
          <Space right="5px" />
          <Text size="base" weight="semibold" color="gray900">
            이용약관
          </Text>
          <Space left="5px" />
          |
          <Space right="5px" />
          <Text size="base" weight="semibold" color="gray900">
            개인정보처리방침
          </Text>
        </div>
        <Space bottom="20px" />
        <div
          css={css`
            white-space: pre-wrap;
          `}
        >
          <Text size="sm" weight="regular" color={colors.gray600}>
            {`대표 : \n사업자등록번호 :\n고객센터 : 서울특별시 건대...?\n\nⓒ 2023 Minery. All rights reserved.`}
          </Text>
        </div>
      </div>
    </section>
  );
}
