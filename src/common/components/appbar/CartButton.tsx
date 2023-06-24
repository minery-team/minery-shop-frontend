import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { useRouter } from 'next/router';
import { useCart } from '../../hooks/useCart';
import { StyledImage } from '../../../home/components/Header';

export function CartButton() {
  const { value } = useCart();
  const router = useRouter();
  return (
    <Box>
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
            {value.length}
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
