import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import Image from 'next/image';

import { deleteFromCart, updateAmount } from '@/common/api/cart';
import { colors } from '@/common/constants';
import { useCartList } from '@/common/hooks/queries/useCartList';
import { CartItem } from '@/common/models';
import { useDeleteProduct } from './DeleteProduct';

export default function WineListItem({
  item,
  index,
  isSelected,
  setSelectItem,
}: {
  item: CartItem;
  index: number;
  isSelected: boolean;
  setSelectItem: (bool: boolean) => void;
}) {
  const [cartList, refetch] = useCartList();
  const confirmDelete = useDeleteProduct();

  const plusWine = () => {
    updateAmount(item.id, item.amount + 1);
    refetch();
  };

  const minusWine = () => {
    if (item.amount > 1) {
      updateAmount(item.id, item.amount - 1);
      refetch();
    }
  };

  const deleteWine = async () => {
    await confirmDelete();
    deleteFromCart(item.id);
    refetch();
  };

  return (
    <>
      <Wrapper key={`${item.product.name}_${index}`}>
        <ContentWrapper>
          <input
            id={`${index}`}
            type="checkbox"
            checked={isSelected}
            onChange={() => {
              setSelectItem(!isSelected);
            }}
            style={{ accentColor: colors.primary700Default }}
          />
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
                  <Image
                    src={item.product.image}
                    alt={`${item.id}`}
                    width={70}
                    height={79}
                  />
                </WineImageBox>
                <WineImageBox>
                  <Image
                    src={item.product.image}
                    alt={`${item.id}`}
                    width={70}
                    height={79}
                  />
                </WineImageBox>
              </WineImageWrapper>
              <div>
                <CountBox>
                  <Image
                    src="/images/common/minus_gray.png"
                    alt="minus"
                    width={12}
                    height={12}
                    onClick={minusWine}
                  />
                  <Text size="sm" weight="regular" color={colors.gray900}>
                    {item.amount}
                  </Text>
                  <Image
                    src="/images/common/plus.png"
                    alt="plus"
                    width={12}
                    height={12}
                    onClick={plusWine}
                  />
                </CountBox>
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
        <Image
          src="/images/common/close.png"
          alt="close"
          width={16}
          height={16}
          onClick={deleteWine}
          style={{ marginLeft: '12px' }}
        />
      </Wrapper>
      {cartList!.length - 1 !== index && (
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

const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 62px;
  height: 25px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  padding: 6.5px 4px;
`;
