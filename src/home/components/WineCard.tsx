import { Text } from '@boxfoxs/bds-web';
import { css } from '@emotion/react';
import Image from 'next/image';

import { Space } from 'common/components';
import { NAME_BY_WINE_TYPE, Product, Wine, WineType } from 'common/models';
import { formatPrice } from 'common/utils';
import ratingStar from '../../../public/assets/rating_star.svg';

// price만 별도로 사용
export function WineCard({
  data,
  onClick,
}: {
  data: Product;
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
      <Image width={158} height={180} src={data.image} alt="wine image" />
      <Space bottom="12px" />
      <Text size="sm" weight="medium" color="gray700">
        {data.wine.country} | {NAME_BY_WINE_TYPE[data.wine.type as WineType]}
      </Text>
      <Space bottom="8px" />
      <Text size="base" weight="semibold" color="gray900">
        {data.wine.name}
      </Text>
      <Space bottom="8px" />
      <Text size="lg" weight="semibold" color="gray900">
        {formatPrice(data.price)}원
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
          {Number.isInteger(data.wine.rate)
            ? `${data.wine.rate}.0`
            : data.wine.rate}
        </Text>
        <Space right="2px" />
        <Text size="caption" weight="regular" color="gray500">
          ({data.wine.viewCount})
        </Text>
      </div>
    </article>
  );
}
