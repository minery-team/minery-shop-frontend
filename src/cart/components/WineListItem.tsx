import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';

import { colors } from 'common/constants';
import { useControlCart } from 'common/hooks/useCart';
import { CartItem } from 'common/models';
import { AmountControl } from '../../common/components/AmountControl';
import { useDeleteProduct, useDeleteProductToast } from './DeleteProduct';

export default function WineListItem({
  item,
  index,
  selectedItems,
  setSelectItem,
}: {
  item: CartItem;
  index: number;
  selectedItems: number[];
  setSelectItem: (nbr: number) => void;
}) {
  const confirmDelete = useDeleteProduct();
  const deleteToast = useDeleteProductToast();
  const cart = useControlCart();

  const plusWine = () => {
    cart.updateAmount(item.id, item.amount + 1);
  };

  const minusWine = () => {
    cart.updateAmount(item.id, item.amount - 1);
  };

  const deleteWine = async () => {
    await confirmDelete();
    await cart.remove(item.id);
    deleteToast();
  };

  const onClickLabel = () => {
    if (selectedItems[index] > 0) setSelectItem(0);
    else setSelectItem(item.id);
  };

  return (
    <>
      <Wrapper key={`${item.product.name}_${index}`}>
        <ContentWrapper>
          <input
            id={`${index}`}
            type="checkbox"
            checked={selectedItems[index] > 0}
            onChange={onClickLabel}
            style={{ display: 'none' }}
          />
          <button onClick={onClickLabel} type="button">
            <img
              src={
                selectedItems[index] > 0
                  ? '/assets/checkbox_on.svg'
                  : '/assets/checkbox_off.svg'
              }
              width={16}
              height={16}
              alt="checkbox"
            />
          </button>
          <Spacing width={12} />
          <ItemWrapper>
            <label htmlFor={`${index}`}>
              <Text size="base" weight="semibold">
                {item.product.name}
              </Text>
            </label>
            <Spacing height={12} />
            <WineInfoWrapper>
              <WineImageWrapper>
                <WineImageBox>
                  <img
                    src={item.product.image}
                    alt={`${item.id}`}
                    width={70}
                    height={79}
                  />
                </WineImageBox>
                <WineImageBox>
                  <img
                    src={item.product.image}
                    alt={`${item.id}`}
                    width={70}
                    height={79}
                  />
                </WineImageBox>
              </WineImageWrapper>
              <div>
                <AmountControl
                  onIncrease={plusWine}
                  onDecrease={minusWine}
                  value={item.amount}
                />
                <Text
                  size="sm"
                  weight="regular"
                  color={colors.gray500}
                  style={{ textDecoration: 'line-through', marginTop: '12px' }}
                >
                  {commaizeNumber(item.product.price)}원
                </Text>
                <Text
                  size="lg"
                  weight="semibold"
                  color={colors.gray900}
                  style={{ marginTop: '4px' }}
                >
                  {commaizeNumber(item.product.price)}원
                </Text>
              </div>
            </WineInfoWrapper>
          </ItemWrapper>
        </ContentWrapper>
        <button onClick={deleteWine} type="button">
          <img
            src="/assets/close_gray.svg"
            alt="close"
            width={16}
            height={16}
            style={{ marginLeft: '12px' }}
          />
        </button>
      </Wrapper>
      {cart.value!.length - 1 !== index && (
        <Divider
          width="calc(100% - 40px)"
          color={colors.gray100}
          style={{ marginLeft: '20px' }}
        />
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
`;

const ItemWrapper = styled.div``;

const WineInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const WineImageWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const WineImageBox = styled.div`
  width: 70px;
  height: 79px;
  border: 1px solid ${colors.gray300};
  border-radius: 6px;
`;
