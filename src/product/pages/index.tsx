import { Path } from '@boxfoxs/next';
import { useProductList } from 'common/hooks/queries/useWineList';
import { dummySnack } from 'common/models';
import SnackProduct from './SnackProduct';
import WineProduct from './WineProduct';

const ProductPage = () => {
  const id = Number(Path.get('id') || 5);
  const [products] = useProductList();
  const product = products?.find((i) => i.id === id);

  // TODO: Snack 결정 로직 결정
  const isSnack = id === 99;
  if (isSnack) return <SnackProduct product={dummySnack} />;

  if (!product) return <div>해당 상품이 없습니다 :(</div>;

  return <WineProduct product={product} />;
};

export default ProductPage;
