import { Path } from '@boxfoxs/next';
import styled from '@emotion/styled';
import { Container } from 'common/components';
import { Carousel } from 'common/components/carousel';
import { colors } from 'common/constants';
import Router from 'next/router';
import { useProductList } from 'common/hooks/queries/useWineList';

const LabelDetail = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  const product = products?.find((i) => i.id === id);
  
  if (!product) return <div>해당 상품이 없습니다 :(</div>;

  const labelImages = product?.labelImages;
  
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
        <Carousel
          dots
          dotsClass=""
          // eslint-disable-next-line react/no-unstable-nested-components
          appendDots={(dots) => {
            return <CarouselDotsWrapper>{dots}</CarouselDotsWrapper>;
          }}
        >
          {labelImages.map((image) => (
            <Rectangle key={image} style={{ background: colors.gray200 }}>
              <img
                src={image}
                alt="라벨 이미지"
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Rectangle>
          ))}
        </Carousel>
    </Container>
  );
};

export default LabelDetail;

// TODO: 중복된 캐러셀 스타일 공통화
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