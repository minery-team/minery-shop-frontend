import { useCallback } from 'react';
import styled from '@emotion/styled';

import WineReview from 'product/component/WineReview';
import { useModal, Section } from 'common/components';
import { Carousel } from 'common/components/carousel';
import { colors } from 'common/constants';
import { WineReviews } from 'common/constants/wine-review';

export const ReviewDetail = ({
  reviewId,
  onClose,
}: {
  reviewId: number;
  onClose: () => void;
}) => {

  const review = Object.values(WineReviews).flat().find((review) => review.id === reviewId);

  if (!review) return <div>{'해당 리뷰가 없습니다 :('}</div>;
  return (
    <Wrapper>
      <div
        style={{
          height: '50px',
          display: 'flex',
          flexDirection: 'row-reverse',
          padding: '15px',
        }}
      >
        <button onClick={onClose}>
          <img src="/assets/x.svg" width={20} height={20} alt="닫기" />
        </button>
      </div>
      {review.images && review.images.length > 0 && (
        <Carousel
          dots
          dotsClass=""
          // eslint-disable-next-line react/no-unstable-nested-components
          appendDots={(dots) => {
            return <CarouselDotsWrapper>{dots}</CarouselDotsWrapper>;
          }}
        >
          {review.images.map((image) => (
            <Rectangle key={image} style={{ background: colors.gray200 }}>
              <img
                src={image}
                alt="상품 이미지"
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Rectangle>
          ))}
        </Carousel>
      )}
      <Section
        style={{
          paddingTop: '0px',
        }}
      >
        <WineReview review={review} showImages={false} isModal />
      </Section>
    </Wrapper>
  );
};

export const useDetailedReview = (productId: number, reviewId: number) => {
  const { open, close } = useModal(`product-${productId}-review-${reviewId}`);

  return useCallback(() => {
    open({
      children: <ReviewDetail reviewId={reviewId} onClose={close} />,
    });
  }, [open, close]);
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.defaultWhite};
`;

// 중복된 캐러셀 스타일 공통화
const CarouselDotsWrapper = styled.ul`
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  padding: 20px;
  margin: 0;
  text-align: left;
  gap: 8px;

  li {
    display: inline-block;
  }

  li::before {
    content: '•';
    font-size: 40px;
    line-height: 0;
    color: white;
    opacity: 0.3;
  }

  li.slick-active::before {
    opacity: 1;
  }

  li > button {
    display: none;
  }
`;

const Rectangle = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  & > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
