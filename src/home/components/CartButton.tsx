import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { useCart } from 'common/hooks/useCart';
import { pressableStyle } from 'common/utils/pressableStyle';
import { useRouter } from 'next/router';

type Props = React.HTMLAttributes<HTMLDivElement>;

const CartButton = (props: Props) => {
  const { value: cartItems } = useCart();
  const router = useRouter();

  return (
    <Box {...props}>
      <StyledImage
        src="/assets/basket.svg"
        width={40}
        height={40}
        alt="basket"
        onClick={() => router.push('/cart')}
      />
      {cartItems.length > 0 && (
        <CartCount>
          <Text size="caption" weight="regluar" color={colors.defaultWhite}>
            {cartItems.length}
          </Text>
        </CartCount>
      )}
    </Box>
  );
};

export default CartButton;

const StyledImage = styled.img`
  ${pressableStyle.opacity()}
`;

const Box = styled.div`
  display: inline-block;
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
