import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Divider, Text } from '@boxfoxs/bds-web';
import { sumBy } from 'lodash';

import WineListItem from 'cart/components/WineListItem';
import { orderItems } from 'common/recoil/orderItems';
import { CartItem } from 'common/models';
import { colors } from 'common/constants';

export default function WineList({
  wineList,
  priceInfo,
  setPriceInfo,
}: {
  wineList: CartItem[];
  priceInfo: { price: number; originalPrice: number };
  setPriceInfo: ({
    price,
    originalPrice,
  }: {
    price: number;
    originalPrice: number;
  }) => void;
}) {
  const setOrderItemList = useSetRecoilState(orderItems);
  const [selectedItems, setSelectedItems] = useState<number[]>(
    (Array(wineList.length) as number[]).fill(0)
  );
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const popUpRef = useRef<HTMLDivElement>(null);
  const isShowRef = useRef<{ isShow: boolean; isClickInfoText: boolean }>({
    isShow: false,
    isClickInfoText: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', () => {
        if (isShowRef.current.isShow) {
          if (isShowRef.current.isClickInfoText) {
            isShowRef.current.isClickInfoText = false;
          } else {
            setIsShowPopUp(false);
            isShowRef.current.isShow = false;
          }
        }
      });

      return () => {
        window.removeEventListener('click', () => {});
      };
    }

    return undefined;
  }, []);

  const isSelectedAll = useMemo(() => {
    const selectedItemLen = selectedItems.filter(
      (isSelected: number) => isSelected > 0
    ).length;

    if (selectedItemLen === wineList.length) return true;
    return false;
  }, [selectedItems]);

  const onSelectItem = (isSelect: number, index: number) => {
    setSelectedItems((prev: number[]) => {
      const newList = [...prev];
      newList[index] = isSelect;

      const orderList = wineList.filter((_, nbr) => newList[nbr]);
      setOrderItemList(orderList);

      return newList;
    });

    if (isSelect) {
      const price =
        priceInfo.price +
        wineList[index].amount * wineList[index].product.price;
      const originalPrice =
        priceInfo.originalPrice +
        wineList[index].amount * wineList[index].product.originalPrice;

      setPriceInfo({ price, originalPrice });
    } else {
      const price =
        priceInfo.price -
        wineList[index].amount * wineList[index].product.price;
      const originalPrice =
        priceInfo.originalPrice -
        wineList[index].amount * wineList[index].product.originalPrice;

      setPriceInfo({ price, originalPrice });
    }
  };

  const onClickAll = () => {
    if (!isSelectedAll) {
      setSelectedItems(wineList.map((item) => item.id));
      setOrderItemList(wineList);

      const price =
        sumBy(wineList, (item) => item.amount * item.product.price) || 0;
      const originalPrice =
        sumBy(wineList, (item) => item.amount * item.product.originalPrice) ||
        0;

      setPriceInfo({ price, originalPrice });
    } else {
      setSelectedItems((Array(wineList.length) as number[]).fill(0));
      setOrderItemList([]);
      setPriceInfo({ price: 0, originalPrice: 0 });
    }
  };

  const renderWineList = () => {
    return wineList.map((item: CartItem, index: number) => {
      return (
        <WineListItem
          key={`${item.id}`}
          item={item}
          index={index}
          selectedItems={selectedItems}
          setSelectItem={(nbr: number) => onSelectItem(nbr, index)}
        />
      );
    });
  };

  return (
    <Wrapper>
      <SelectAllWrapper>
        <input
          type="checkbox"
          checked={isSelectedAll}
          onChange={onClickAll}
          style={{ display: 'none' }}
        />
        <img
          src={
            isSelectedAll
              ? '/assets/checkbox_on.svg'
              : '/assets/checkbox_off.svg'
          }
          width={16}
          height={16}
          alt="checkbox"
        />
        <Text size="base" weight="regular">
          전체 선택
        </Text>
      </SelectAllWrapper>
      <Divider width="100%" color={colors.gray100} />
      {renderWineList()}
      <QuestionText
        onClick={() => {
          isShowRef.current = { isShow: true, isClickInfoText: true };
          setIsShowPopUp(true);
        }}
      >
        <InfoPopUp
          ref={popUpRef}
          isShow={isShowPopUp}
          top={popUpRef.current ? popUpRef.current.offsetHeight : 0}
        >
          <PopUpTextWrapper>
            <Text size="base" weight="medium" color={colors.gray600}>
              국내 주류법 상 와인은 음식과 함께 세트로만 주문이 가능해요!
              <span className="highlight"> 마이너리</span>는 합리적인 가격을
              위해 맛있는 스낵 구성을 함께드려요.
            </Text>
          </PopUpTextWrapper>
          <ReversedTriangle
            src="/images/common/reversed_triangle.png"
            alt="reversed_triangle"
            width={24}
            height={24}
          />
        </InfoPopUp>
        <img
          src="/images/common/question_gray.png"
          alt="minus"
          width={12}
          height={12}
        />
        <Text size="sm" weight="regular" color={colors.gray500}>
          와인에 스낵은 왜 항상 포함되어 있나요?
        </Text>
      </QuestionText>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SelectAllWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
  gap: 8px;
`;

const QuestionText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const InfoPopUp = styled.div<{ isShow: boolean; top: number }>`
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  position: absolute;
  top: ${({ top }) => `-${top}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const PopUpTextWrapper = styled.div`
  display: flex;
  width: calc(100% - 40px);
  max-width: 460px;
  padding: 16px;
  border-radius: 6px;
  background-color: ${colors.gray100};

  .highlight {
    font-weight: 600;
    color: ${colors.primary700Default};
  }
`;

const ReversedTriangle = styled(Image)`
  position: absolute;
  top: -18px !important;
  z-index: 5;
`;
