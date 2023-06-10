import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Spacing, Divider, Text } from '@boxfoxs/bds-web';
import { sum } from 'lodash';

import WineList from '@cart/pages/wineList';
import NoWineList from '@cart/pages/noWineList';
import Payment from '@cart/pages/payment';
import MaxPricePopUp from '@cart/containers/MaxPricePopUp';
import AdultCertGuidePopUp from '@cart/containers/AdultCertGuidePopUp';
import { AppBar } from '@/common/components';
import Modal from '@/common/components/modal/Modal';
import { useCartList } from '@/common/hooks/queries/useCartList';
import { colors } from '@/common/constants';

export default function CartPage() {
  const router = useRouter();
  const [cartList, refetch] = useCartList();
  const [hasSelectedItem, setHasSelectedItem] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const totalPrice = useMemo(() => {
    if (cartList && cartList.length > 0)
      return sum(cartList.map((item) => item.amount * item.product.price));
    return 0;
  }, [cartList]);

  const buttonText = useMemo(() => {
    if (hasSelectedItem) return '323,400원 주문하기';
    return '상품을 선택해주세요';
  }, [hasSelectedItem]);

  const selectPopUp = () => {
    if (totalPrice > 5000000)
      return <MaxPricePopUp setPopUpState={setShowModal} />;
    return <AdultCertGuidePopUp setPopUpState={setShowModal} />;
  };

  return (
    <Container>
      <AppBar back>
        <AppBar.Title>장바구니</AppBar.Title>
      </AppBar>
      {cartList && cartList.length ? (
        <WineList wineList={cartList} isItemSelected={setHasSelectedItem} />
      ) : (
        <NoWineList />
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
      <OrderButton
        isItemSelected={hasSelectedItem}
        onClick={() => {
          if (hasSelectedItem) setShowModal(true);
        }}
      >
        <Text size="xl" weight="semibold" color={colors.defaultWhite}>
          {buttonText}
        </Text>
      </OrderButton>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {selectPopUp()}
      </Modal>
    </Container>
  );
}

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
