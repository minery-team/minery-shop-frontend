import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import EmptyWineList from 'cart/components/EmptyWineList';
import { useMaxPriceGuide } from 'cart/components/MaxPricePopUp';
import PaymentInfo from 'cart/components/PaymentInfo';
import WineList from 'cart/components/WineList';
import { AppBar, FixedBottomCTA } from 'common/components';
import { colors } from 'common/constants';
import { withAuth } from 'common/hocs';
import { useCart } from 'common/hooks/useCart';
import Router from 'next/router';

export default withAuth(function CartPage() {
  const { value: cartList } = useCart();
  const [priceInfo, setPriceInfo] = useState({ price: 0, originalPrice: 0 });

  const openMaxPriceGuide = useMaxPriceGuide();
  // const openAdultCartGuide = useAdultCartGuide();

  const buttonText = useMemo(() => {
    if (priceInfo.price > 0)
      return `${commaizeNumber(priceInfo.price)}원 주문하기`;
    return '상품을 선택해주세요';
  }, [priceInfo]);

  const handleCTAClick = () => {
    if (!priceInfo.price) return;

    if (priceInfo.price > 5000000) {
      openMaxPriceGuide();
      return;
    }

    // openAdultCartGuide();
    Router.push('/order');
  };

  return (
    <Container>
      <AppBar back>
        <AppBar.Title>장바구니</AppBar.Title>
      </AppBar>
      {cartList && cartList.length ? (
        <>
          <WineList
            wineList={cartList}
            priceInfo={priceInfo}
            setPriceInfo={setPriceInfo}
          />
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
          <FixedBottomCTA
            disabled={!priceInfo.price}
            onClick={handleCTAClick}
            full
          >
            {buttonText}
          </FixedBottomCTA>
        </>
      ) : (
        <EmptyWineList />
      )}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 58px;
`;

const WarningText = styled.div`
  padding: 20px;
  background-color: ${colors.gray200};
`;
