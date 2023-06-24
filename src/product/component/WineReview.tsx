import { Text } from '@boxfoxs/bds-web';
import { Path } from '@boxfoxs/next';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { Review } from 'common/models/Review';
import Link from 'next/link';

interface Props {
  review: Review;
  showImages?: boolean;
}

const WineReview = ({ review, showImages = true }: Props) => {
  const productId = Number(Path.get('id'));
  return (
    <Link href={`/product/${productId}/review/${review.id}`}>
      <ReviewContainer>
        <Text color={colors.gray900} size="base" weight="semibold">
          {review.name}
        </Text>
        <div
          style={{
            display: 'flex',
            gap: '4px',
          }}
        >
          <img src="/assets/star.svg" width={16} height={16} alt="별" />
          <Text color={colors.gray900} size="sm" weight="semibold">
            {review.rating}
          </Text>
          <Text color={colors.gray500} size="sm" weight="semibold">
            | {review.date}
          </Text>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '12px',
          }}
        >
          {showImages &&
            review.images?.map((image) => (
              <img
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '6px',
                }}
                key={image}
                src={image}
                alt="와인 리뷰 이미지"
              />
            ))}
        </div>
        <Text>{review.content}</Text>
      </ReviewContainer>
    </Link>
  );
};

export default WineReview;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 20px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.gray100};
  }
`;
