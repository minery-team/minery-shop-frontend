import { Path } from '@boxfoxs/next';
import styled from '@emotion/styled';
import { Container, Section } from 'common/components';
import { Carousel } from 'common/components/carousel';
import { colors } from 'common/constants';
import { dummyReviews } from 'common/models/Review';
import Router from 'next/router';
import WineReview from '../component/WineReview';

const ReviewDetail = () => {
  const id = Number(Path.get('reviewId') || 5);
  const review = dummyReviews.find((i) => i.id === id);

  if (!review) return <div>해당 리뷰가 없습니다 :(</div>;

  return (
    <Container>
      <div
        style={{
          height: '50px',
          display: 'flex',
          flexDirection: 'row-reverse',
          padding: '15px',
        }}
      >
        {/* back시, 이전 상품 페이지의 스크롤 복원하도록 수정 필요 */}
        <img
          onClick={() => Router.back()}
          src="/assets/x.svg"
          width={20}
          height={20}
          alt="닫기"
        />
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
        <WineReview review={review} showImages={false} />
      </Section>
    </Container>
  );
};

export default ReviewDetail;

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
