import { Path } from '@boxfoxs/next';
import { useProductList } from 'common/hooks/queries/useWineList';
import SnackProduct from './SnackProduct';
import WineProduct from './WineProduct';

const ProductPage = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  const product = products?.find((i) => i.id === id);

  if (!product) return <div>해당 상품이 없습니다 :(</div>;

  const isSnack = product.type === 'snack';
  if (isSnack) return <SnackProduct product={product} />;

  return <WineProduct product={product} />;
};

export default ProductPage;
