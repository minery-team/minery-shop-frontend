import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { sumBy } from 'lodash';
import { useCart } from '../../hooks/useCart';
import { StyledImage } from '../../../home/components/Header';

export function CartButton({ onClick }: { onClick?: () => void }) {
  const { value } = useCart();
  const router = useRouter();

  const cartItemsCount = useMemo(() => {
    return sumBy(value, (items) => items.amount);
  }, [value]);

  return (
    <Box onClick={onClick}>
      <StyledImage
        src="/assets/basket.svg"
        width={40}
        height={40}
        alt="basket"
        onClick={() => router.push('/cart')}
      />
      {value.length > 0 && (
        <CartCount>
          <Text size="caption" weight="regluar" color={colors.defaultWhite}>
            {cartItemsCount}
          </Text>
        </CartCount>
      )}
    </Box>
  );
}
const Box = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;
const CartCount = styled.div`
  background-color: ${colors.primary700Default};
  border-radius: 50%;
  width: 17px;
  height: 17px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  padding-top: 1px;
`;
