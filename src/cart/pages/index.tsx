import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import { commaizeNumber } from '@boxfoxs/utils';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import EmptyWineList from 'cart/components/EmptyWineList';
import WineList from 'cart/components/WineList';
import PaymentInfo from 'cart/components/PaymentInfo';
import { AppBar } from 'common/components';
import { colors } from 'common/constants';
import { withAuth } from 'common/hocs';
import { useCartList } from 'common/hooks/queries/useCartList';
import { useMaxPriceGuide } from 'cart/components/MaxPricePopUp';
import { useAdultCartGuide } from 'cart/components/AdultCertGuidePopUp';

export default withAuth(function CartPage() {
  const [cartList, refetch] = useCartList();
  const [priceInfo, setPriceInfo] = useState({ price: 0, originalPrice: 0 });

  const openMaxPriceGuide = useMaxPriceGuide();
  const openAdultCartGuide = useAdultCartGuide();

  const buttonText = useMemo(() => {
    if (priceInfo.price > 0)
      return `${commaizeNumber(priceInfo.price)}원 주문하기`;
    return '상품을 선택해주세요';
  }, [priceInfo]);

  const handleCTAClick = () => {
    if (!priceInfo) {
      return;
    }
    if (priceInfo.price > 5000000) {
      openMaxPriceGuide();
      return;
    }
    openAdultCartGuide();
  };

  return (
    <Container>
      <AppBar back>
        <AppBar.Title>장바구니</AppBar.Title>
      </AppBar>
      {cartList && cartList.length ? (
        <WineList
          wineList={cartList as any}
          priceInfo={priceInfo}
          setPriceInfo={setPriceInfo}
        />
      ) : (
        <EmptyWineList />
      )}
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
      <OrderButton
        isItemSelected={priceInfo.price > 0}
        onClick={handleCTAClick}
      >
        <Text size="xl" weight="semibold" color={colors.defaultWhite}>
          {buttonText}
        </Text>
      </OrderButton>
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

const OrderButton = styled.div<{ isItemSelected: boolean }>`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 58px;
  padding: 16px 0;
  background-color: ${({ isItemSelected }) =>
    isItemSelected ? colors.primary700Default : colors.gray400};
`;
