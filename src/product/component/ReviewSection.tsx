import { Spacing, Text } from '@boxfoxs/bds-web';
import { Section } from 'common/components';
import { colors } from 'common/constants';
import { Product } from 'common/models';
import { Review } from 'common/models/Review';
import { useState } from 'react';

import Link from 'next/link';
import WineReview from './WineReview';
import { WineReviews } from 'common/constants/wine-review';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

// TODO: 리뷰 전달 받은 뒤, constant 처리
const ReviewSection = ({ product, ...props }: Props) => {
  const [expanded, setExpanded] = useState(false);
  // TODO: DB에 와인데이터 들어가면, fallback 처리 제거
  const reviews: Review[] = WineReviews[product.name] || WineReviews['브레드 & 버터, 피노누아']

  const displayableReviews = expanded ? reviews : reviews.slice(0, 3);
  const reviewsForPreview = reviews
    .filter((review) => review.images !== undefined)
    .slice(0, 4);
  const averageRating =
    (reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length).toFixed(1);

  return (
    <Section {...props}>
      <Text size="xl" weight="semibold">
        마이너리 사용자들의 평가
      </Text>
      <Spacing height={20} />
      <div
        style={{
          background: colors.gray100,
          padding: '20px',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
          }}
        >
          <Text size="heading4" weight="semibold">
            {averageRating}
          </Text>
          <div
            style={{
              display: 'flex',
            }}
          >
            <img src="/assets/star.svg" width={16} height={16} alt="별" />
            <img src="/assets/star.svg" width={16} height={16} alt="별" />
            <img src="/assets/star.svg" width={16} height={16} alt="별" />
            <img src="/assets/star.svg" width={16} height={16} alt="별" />
            <img src="/assets/star.svg" width={16} height={16} alt="별" />
          </div>
        </div>
        <Spacing height={6} />
        <Text color={colors.gray600} size="sm" weight="regular">
          마이너리를 통해 상품을 구매한 사용자들이 남긴 리뷰입니다.
        </Text>
      </div>
      <Spacing height={20} />
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '6px',
        }}
      >
        <Text size="xl" weight="semibold">
          상품리뷰
        </Text>
        <Text color={colors.gray500} size="base" weight="medium">
          68개
        </Text>
      </div>

      <div
        style={{
          display: 'flex',
          padding: '20px 0',
          gap: '12px',
        }}
      >
        {reviewsForPreview.map((review) => (
          <Link
            key={review.id}
            href={`/product/${product.id}/review/${review.id}`}
          >
            <img
              src={review.images![0]}
              width={74}
              height={74}
              style={{
                borderRadius: '6px',
              }}
              alt="와인 리뷰 이미지"
            />
          </Link>
        ))}
      </div>

      <Spacing
        height={1}
        style={{
          background: colors.gray100,
        }}
      />

      {displayableReviews.map((review) => (
        <WineReview key={review.name} review={review} />
      ))}
      {reviews.length > 3 && !expanded && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '6px',
            padding: '16px 0',
            border: `1px solid ${colors.gray300}`,
          }}
          onClick={() => setExpanded(true)}
        >
          <Text color={colors.gray700} size="xl" weight="medium">
            리뷰 더보기
          </Text>
        </div>
      )}
    </Section>
  );
};

export default ReviewSection;
