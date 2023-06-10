import { AppBar } from '@/common/components';
import { Carousel } from '@/common/components/carousel';
import Container from '@/common/components/layout/Container';
import { colors } from '@/common/constants';
import { useProductList } from '@/common/hooks/queries/useWineList';
import { Product } from '@/common/models';
import { Path } from '@boxfoxs/next';
import styled from '@emotion/styled';
import Image from 'next/image';

const ProductPage = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  // const product = products?.find((product) => product.id === id);
  const product: Product = products?.[0];

  if (!product) return <div>해당 상품이 없습니다 :(</div>;

  console.log(products);

  return (
    <Container>
      <AppBar back />
      <Carousel
        dots
        dotsClass="df"
        // eslint-disable-next-line react/no-unstable-nested-components
        appendDots={(dots) => {
          return <CarouselDotsWrapper>{dots}</CarouselDotsWrapper>;
        }}
      >
        {product.images.map((image) => (
          <Rectangle key={image} style={{ background: colors.gray200 }}>
            <img src={image} alt="상품 이미지" style={{ width: '100%' }} />
          </Rectangle>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductPage;

const CarouselDotsWrapper = styled.ul`
  position: absolute;
  bottom: 0px;
  display: block;
  width: 100%;
  padding: 20px;
  margin: 0;

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
