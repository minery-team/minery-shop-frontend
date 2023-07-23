import { useMemo } from 'react';
import styled from '@emotion/styled';
import { Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';

import { FREE_SHIPPING_PRICE, SHIPPING_PRICE } from 'cart/model/Price';
import { colors } from 'common/constants';

export default function PaymentInfo({
  priceInfo,
}: {
  priceInfo: { price: number; originalPrice: number };
}) {
  const shippingPrice = useMemo(() => {
    if (FREE_SHIPPING_PRICE - priceInfo.price > 0) return SHIPPING_PRICE;
    return 0;
  }, [priceInfo]);

  return (
    <Wrapper>
      <TextWrapper>
        <Text size="base" weight="regular" color={colors.gray900}>
          상품금액
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {`${commaizeNumber(priceInfo.originalPrice)}원`}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size="base" weight="regular" color={colors.gray900}>
          상품할인금액
        </Text>
        <Text size="base" weight="medium" color={colors.gray900}>
          {`${commaizeNumber(priceInfo.price - priceInfo.originalPrice)}원`}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <ShipmentTextWrapper>
          <Text size="base" weight="regular" color={colors.gray900}>
            배송비
          </Text>
          {FREE_SHIPPING_PRICE - priceInfo.price > 0 && (
            <>
              <Text
                size="sm"
                weight="regular"
                color={colors.primary700Default}
                style={{ margin: '0 4px 0 8px' }}
              >
                {`${commaizeNumber(FREE_SHIPPING_PRICE - priceInfo.price)}`}원
                더 담으면
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
          {`${commaizeNumber(priceInfo.price + shippingPrice)}원`}
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
