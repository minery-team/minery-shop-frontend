import { Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import { css } from '@emotion/react';

import { Space } from 'common/components';
import { colors } from 'common/constants';
import { WineReviews } from 'common/constants/wine-review';
import { NAME_BY_WINE_TYPE, Product, WineType } from 'common/models';
import { Review } from 'common/models/Review';
import React from 'react';

export function WineCard({
  data,
  onClick,
}: {
  data: Product;
  onClick: () => void;
}) {
  const reviews: Review[] = WineReviews[data.id];
  const averageRating = reviews
    ? (
        reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length
      ).toFixed(1)
    : 4.2;
  const reviewCount = reviews ? reviews.length : 29;

  return (
    <article
      onClick={onClick}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        width: '158px',
        height: '315px',
      })}
    >
      <div
        css={css`
          width: 158px;
          height: 180px;
          border-radius: 6px;
          overflow: hidden;
        `}
      >
        <img width={158} height={180} src={data.image} alt="wine" />
      </div>
      <Space bottom="12px" />
      {data.wine != null && (
        <React.Fragment>
          <div
            css={css`
              display: flex;
            `}
          >
            <Text size="sm" weight="medium" color={`${colors.gray700}`}>
              {data.wine.country}
            </Text>
            <Space right="5px" />
            <Text size="sm" weight="medium" color={`${colors.gray300}`}>
              |
            </Text>
            <Space right="5px" />
            <Text size="sm" weight="medium" color={`${colors.gray700}`}>
              {NAME_BY_WINE_TYPE[data.wine.type as WineType]}
            </Text>
          </div>
          <Space bottom="8px" />
        </React.Fragment>
      )}
      <Text size="base" weight="semibold" color={`${colors.gray900}`}>
        {data.name}
      </Text>
      <Space bottom="8px" />
      {data.originalPrice && (
        <Text
          size="sm"
          weight="regular"
          color={`${colors.gray500}`}
          style={{ textDecoration: 'line-through' }}
        >
          {commaizeNumber(data.originalPrice)}원
        </Text>
      )}
      <Text size="lg" weight="semibold" color={`${colors.gray900}`}>
        {commaizeNumber(data.price)}원
      </Text>
      {data.type === 'wine' && (
        <>
          <Space bottom="4px" />
          <div
            css={css({
              display: 'flex',
              width: '55px',
              height: '12px',
              alignItems: 'center',
            })}
          >
            <img src="/assets/rating_star.svg" width={12} height={12} alt=" " />
            <Space right="2px" />
            <Text size="caption" weight="regular" color={`${colors.gray800}`}>
              {averageRating}
              {/* TODO: 리뷰기능 정식 출시 되면, 리뷰 wine.rate사용하도록 변경 */}
              {/* {Number.isInteger(data.wine.rate)
            ? `${data.wine.rate}.0`
            : data.wine.rate} */}
            </Text>
            <Space right="2px" />
            <Text size="caption" weight="regular" color={`${colors.gray500}`}>
              {/* TODO: 리뷰기능 정식 출시 되면, 리뷰 wine.viewCount 변경 */}
              {/* ({data.wine.viewCount}) */}({reviewCount})
            </Text>
          </div>
        </>
      )}
    </article>
  );
}
