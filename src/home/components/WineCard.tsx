import { css } from '@emotion/react';
import { Text } from '@boxfoxs/bds-web';
import Image, { StaticImageData } from 'next/image';

import { formatPrice } from 'common/utils';
import { Space } from 'common/components';
import ratingStar from '../../../public/assets/rating_star.svg';

export type WineInfo = {
  id: number;
  image: string | StaticImageData;
  country: string;
  category: string;
  name: string;
  price: number;
  rate: number;
  reviewCnt: number;
};

export function WineCard({
  info,
  onClick,
}: {
  info: WineInfo;
  onClick: () => void;
}) {
  return (
    // FIXME: eslint 에러제거 필요
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <article
      onClick={onClick}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        width: '158px',
        height: '298px',
      })}
    >
      <Image width={158} height={180} src={info.image} alt="wine image" />
      <Space bottom="12px" />
      <Text size="sm" weight="medium" color="gray700">
        {info.country} | {info.category}
      </Text>
      <Space bottom="8px" />
      <Text size="base" weight="semibold" color="gray900">
        {info.name}
      </Text>
      <Space bottom="8px" />
      <Text size="lg" weight="semibold" color="gray900">
        {formatPrice(info.price)}원
      </Text>
      <Space bottom="4px" />
      <div
        css={css({
          display: 'flex',
          width: '55px',
          height: '12px',
          alignItems: 'center',
        })}
      >
        <Image src={ratingStar} width={12} height={12} alt=" " />
        <Space right="2px" />
        <Text size="caption" weight="regular" color="gray800">
          {Number.isInteger(info.rate) ? `${info.rate}.0` : info.rate}
        </Text>
        <Space right="2px" />
        <Text size="caption" weight="regular" color="gray500">
          ({info.reviewCnt})
        </Text>
      </div>
    </article>
  );
}
