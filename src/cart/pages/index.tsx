import { Divider, Spacing, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { sumBy } from 'lodash';
import { useMemo, useState } from 'react';

import EmptyWineList from '@cart/components/EmptyWineList';
import WineList from '@cart/components/WineList';
import { AppBar } from '@common/components';
import { colors } from '@common/constants';
import { withAuth } from '@common/hocs';
import { useCartList } from '@common/hooks/queries/useCartList';
import { useMaxPriceGuide } from '@cart/components/MaxPricePopUp';
import Payment from '@cart/pages/payment';
import { useAdultCartGuide } from '../components/AdultCertGuidePopUp';

export default withAuth(function CartPage() {
  const [cartList, refetch] = useCartList();
  const [hasSelectedItem, setHasSelectedItem] = useState(false);

  const openMaxPriceGuide = useMaxPriceGuide();
  const openAdultCartGuide = useAdultCartGuide();

  const totalPrice = useMemo(
    () => sumBy(cartList, (item) => item.amount * item.product.price) || 0,
    [cartList]
  );

  const buttonText = useMemo(() => {
    if (hasSelectedItem) return '323,400원 주문하기';
    return '상품을 선택해주세요';
  }, [hasSelectedItem]);

  const handleCTAClick = () => {
    if (!hasSelectedItem) {
      return;
    }
    if (totalPrice > 5000000) {
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
        <WineList wineList={cartList} isItemSelected={setHasSelectedItem} />
      ) : (
        <EmptyWineList />
      )}
      <Spacing height={20} />
      <Divider width="100%" height="6px" color={colors.gray100} />
      <Payment />
      <WarningText>
        <Text size="base" weight="regular" color={colors.gray600}>
          (주)마이너리는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
          따라서(주)마이너리는 상품, 거래정보 및 거래에 대하여 책임을 지지
          않습니다.
        </Text>
      </WarningText>
      <OrderButton isItemSelected={hasSelectedItem} onClick={handleCTAClick}>
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
`;

const WarningText = styled.div`
  padding: 20px;
  background-color: ${colors.gray200};
`;

const OrderButton = styled.div<{ isItemSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  background-color: ${({ isItemSelected }) =>
    isItemSelected ? colors.primary700Default : colors.gray400};
`;
