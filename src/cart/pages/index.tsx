import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import EmptyWineList from 'cart/components/EmptyWineList';
import { useMaxPriceGuide } from 'cart/components/MaxPricePopUp';
import PaymentInfo from 'cart/components/PaymentInfo';
import WineList from 'cart/components/WineList';
import { FREE_SHIPPING_PRICE, SHIPPING_PRICE } from 'cart/model/Price';
import { AppBar, FixedBottomCTA } from 'common/components';
import { colors } from 'common/constants';
import { withAuth } from 'common/hocs';
import { useCart } from 'common/hooks/useCart';
import Router from 'next/router';
import { useAdultCartGuide } from 'cart/components/AdultCertGuidePopUp';
import { useUser } from 'common/hooks';
import { LoggingClick, LoggingState } from '@boxfoxs/logger';

export default withAuth(function CartPage() {
  const { value: cartList } = useCart();
  const [priceInfo, setPriceInfo] = useState({ price: 0, originalPrice: 0 });

  const openMaxPriceGuide = useMaxPriceGuide();
  // const openAdultCartGuide = useAdultCartGuide();

  const totalPrice = useMemo(() => {
    if (FREE_SHIPPING_PRICE - priceInfo.originalPrice > 0)
      return priceInfo.price + SHIPPING_PRICE;
    return priceInfo.price;
  }, [cartList, priceInfo]);

  const buttonText = useMemo(() => {
    if (priceInfo.price > 0) return `${commaizeNumber(totalPrice)}원 주문하기`;
    return '상품을 선택해주세요';
  }, [priceInfo]);

  const opneAdult = useAdultCartGuide();
  const [user] = useUser();

  const handleCTAClick = () => {
    if (!priceInfo.price) return;

    if (priceInfo.price > 5000000) {
      openMaxPriceGuide();
      return;
    }

    if (
      !!user &&
      (!user.birthday ||
        new Date(user.birthday).getFullYear() > new Date().getFullYear() - 19)
    ) {
      opneAdult();
      return;
    }

    // openAdultCartGuide();
    Router.push('/order');
  };

  return (
    <LoggingState name="Page View - Cart">
      <Container>
        <AppBar back>
          <AppBar.Title>장바구니</AppBar.Title>
        </AppBar>
        {cartList && cartList.length ? (
          <>
            <WineList wineList={cartList} setPriceInfo={setPriceInfo} />
            <Spacing height={20} />
            <Divider width="100%" height="6px" color={colors.gray100} />
            <PaymentInfo priceInfo={priceInfo} />
            <WarningText>
              <Text size="base" weight="regular" color={colors.gray600}>
                (주)마이너리는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
                따라서(주)마이너리는 상품, 거래정보 및 거래에 대하여 책임을 지지
                않습니다.
              </Text>
            </WarningText>
            <LoggingClick
              name="Tap - Start Order in Cart"
              params={{ cost: priceInfo.price }}
            >
              <FixedBottomCTA
                disabled={!priceInfo.price}
                onClick={handleCTAClick}
                full
                style={{
                  backgroundColor: priceInfo.price
                    ? colors.primary700Default
                    : colors.gray400,
                  color: colors.defaultWhite,
                }}
              >
                {buttonText}
              </FixedBottomCTA>
            </LoggingClick>
          </>
        ) : (
          <EmptyWineList />
        )}
      </Container>
    </LoggingState>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 55px;
`;

const WarningText = styled.div`
  padding: 20px;
  background-color: ${colors.gray200};
`;
