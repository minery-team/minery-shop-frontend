import { Flex, UrlLottie } from '@boxfoxs/bds-web';
import { Path } from '@boxfoxs/next';
import { AppBar } from 'common/components';
import { useProductList } from 'common/hooks/queries/useWineList';
import SnackProduct from './SnackProduct';
import WineProduct from './WineProduct';

const ProductPage = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  const product = products?.find((i) => i.id === id);

  if (!product)
    return (
      <div>
        <AppBar back />
        <Flex.Center style={{ height: '80vh' }}>
          <UrlLottie
            src="https://lottie.host/95d6d68f-6172-4601-bb20-67ebb1ef4357/RVGwMbanZT.json"
            options={{ loop: true, autoplay: true }}
            style={{ width: '150px', height: '150px' }}
          />
        </Flex.Center>
      </div>
    );

  const isSnack = product.type === 'snack';
  if (isSnack) return <SnackProduct product={product} />;

  return <WineProduct product={product} />;
};

export default ProductPage;
