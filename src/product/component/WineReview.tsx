import { Spacing, Text } from '@boxfoxs/bds-web';
import { Path } from '@boxfoxs/next';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { Review } from 'common/models/Review';
import { useDetailedReview } from 'product/component/DetailedReview';

interface Props {
  review: Review;
  showImages?: boolean;
  isModal?: boolean;
}

const WineReview = ({ review, showImages = true, isModal = false }: Props) => {
  const productId = Number(Path.get('id'));
  const openDetailedReview = useDetailedReview(
    isModal ? 0 : productId,
    isModal ? 0 : review.id
  );

  const hiddenName = hideName(review.name)

  return (
    <ReviewContainer
      onClick={() => {
        if (!isModal) openDetailedReview();
      }}
    >
      <Text color={colors.gray900} size="base" weight="semibold">
        {hiddenName}
      </Text>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <img src="/assets/star.svg" width={16} height={16} alt="별" />
        <Text color={colors.gray900} size="sm" weight="semibold">
          {review.rating}
        </Text>
        <Spacing
          height={7}
          width={1}
          style={{
            backgroundColor: colors.gray300,
            margin: '0 4px',
          }}
        />
        <Text color={colors.gray500} size="sm" weight="regular">
          {review.date}
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

function hideName(name: string): string {
  const nameArray = [...name];
  if (nameArray.length > 2) {
      for (let i = 1; i < nameArray.length - 1; i++) {
          nameArray[i] = '*';
      }
  } else if (nameArray.length === 2) {
      nameArray[nameArray.length - 1] = '*';
  }
  return nameArray.join('');
}