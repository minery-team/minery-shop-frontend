import { css } from '@emotion/react';
import Image from 'next/image';
import { Text } from '@boxfoxs/bds-web';
import { colors } from 'common/constants';
import Link from 'next/link';
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
        <img src="/assets/image_logo.svg" width={30} height={18} alt="logo" />
        <Space bottom="20px" />
        <div
          css={css`
            display: flex;
          `}
        >
          <Link href="http://pf.kakao.com/_SrDYxj">
            <Text size="base" weight="semibold" color="gray900">
              문의하기
            </Text>
          </Link>
          {/* FIXME: seperator 임시로 대응 */}
          <Space left="5px" />
          |
          <Space right="5px" />
          <Link href="https://ilovewine.notion.site/92e5ba41d6b848b582e88c76bdef83c9?pvs=4">
            <Text size="base" weight="semibold" color="gray900">
              이용약관
            </Text>
          </Link>
          <Space left="5px" />
          |
          <Space right="5px" />
          <Link href="https://ilovewine.notion.site/43d45441abbb4be3837887f606cbb0d7?pvs=4">
            <Text size="base" weight="semibold" color="gray900">
              개인정보처리방침
            </Text>
          </Link>
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
