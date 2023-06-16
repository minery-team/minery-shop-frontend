import { useMemo } from 'react';
import { Text, Divider } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import { sumBy } from 'lodash';

import { colors } from 'common/constants';
import { CartItem } from 'common/models';
import { FREE_SHIPPING_PRICE, SHIPPING_PRICE } from 'cart/model/Price';

export function PaymentInfo({ cartList }: { cartList: CartItem[] }) {
  const totalPrice = useMemo(() => {
    return sumBy(cartList, (item) => item.amount * item.product.price);
  }, [cartList]);

  const originalTotalPrice = useMemo(() => {
    return sumBy(cartList, (item) => item.amount * item.product.originalPrice);
  }, [cartList]);

  const shippingPrice = useMemo(() => {
    if (FREE_SHIPPING_PRICE - originalTotalPrice > 0) return SHIPPING_PRICE;
    return 0;
  }, []);

  return (
    <Wrapper>
      <Text size="lg" weight="semibold" color={colors.gray900}>
        결제 정보
      </Text>
      <Divider width="100%" height={1} color={colors.gray100} />
      <TextWrapper>
        <Text size="base" weight="regular" color={colors.gray900}>
          상품금액
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {`${commaizeNumber(originalTotalPrice)}원`}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="regular" color={colors.gray900}>
          상품할인금액
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {`${commaizeNumber(totalPrice - originalTotalPrice)}원`}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <ShipmentTextWrapper>
          <Text size="base" weight="regular" color={colors.gray900}>
            배송비
          </Text>
          {FREE_SHIPPING_PRICE - originalTotalPrice > 0 && (
            <>
              <Text
                size="sm"
                weight="regular"
                color={colors.primary700Default}
                style={{ margin: '0 4px 0 8px' }}
              >
                {`${commaizeNumber(FREE_SHIPPING_PRICE - originalTotalPrice)}`}
                원 더 담으면
              </Text>

              <Text
                size="base"
                weight="semibold"
                color={colors.primary700Default}
              >
                무료배송!
              </Text>
            </>
          )}
        </ShipmentTextWrapper>
        <Text size="base" weight="medium" color={colors.gray900}>
          {`+${commaizeNumber(shippingPrice)}원`}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="lg" weight="semibold" color={colors.gray900}>
          결제 예정금액
        </Text>
        <Text size="xl" weight="semibold" color={colors.gray900}>
          {`${commaizeNumber(totalPrice + shippingPrice)}원`}
        </Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShipmentTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;