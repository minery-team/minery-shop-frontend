import { Section } from 'common/components';
import { colors } from 'common/constants';
import { Spacing, Text } from '@boxfoxs/bds-web';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from 'common/models';
import { dummyReviews } from 'common/models/Review';
import star from '../../../public/assets/star.svg';
import wine_review_image from '../../../public/assets/wine_review_image.png';
import WineReview from './WineReview';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

// TODO: 리뷰 전달 받은 뒤, constant 처리
const ReviewSection = (props: Props) => {
  const [expanded, setExpanded] = useState(false);
  const displayableReviews = expanded ? dummyReviews : dummyReviews.slice(0, 3);
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
            4.9
          </Text>
          <div>
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
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
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
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
      {dummyReviews.length > 3 && !expanded && (
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
