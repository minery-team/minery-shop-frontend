import { css } from '@emotion/react';
import Image from 'next/image';
import { Text } from '@boxfoxs/bds-web';
import { KAKAO_CHANNEL_LINK, colors } from 'common/constants';
import Link from 'next/link';
import { Space } from '../space';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link href="/customer-service">
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
          <div style={{ display: 'flex' }}>
            <Text size="sm" weight="regular" color={colors.gray600}>
              {`상호명: 주식회사 마이너리`}
            </Text>
            <img
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              src={isOpen ? '/assets/upArrow.svg' : '/assets/downArrow.svg'}
              width={16}
              height={16}
              alt=""
              style={{ cursor: 'pointer' }}
            />
          </div>
          {isOpen && (
            <>
              <Text size="sm" weight="regular" color={colors.gray600}>
                {`대표자: 박유선\n이메일 : minery.app@gmail.com\n사업자등록번호 : 359-87-02819\n경기 성남시 분당구 동판교로 122 204동 2502호`}
              </Text>
              <Space bottom="30px" />
            </>
          )}

          <Space bottom="13px" />
          <Text size="base" weight="regular" color={colors.defaultBlack}>
            {`'마이너리'는 주류통신판매수단제공자로서 '마이너리'의\n거래당사자가 아니며 제휴 업체가 판매의 주체입니다.`}
          </Text>
          <Space bottom="20px" />
          <Text size="sm" weight="regular" color={colors.gray600}>
            {`ⓒ 2023 Minery. All rights reserved.`}
          </Text>
        </div>
      </div>
    </section>
  );
}
