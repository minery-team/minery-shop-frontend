import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Divider, Text } from '@boxfoxs/bds-web';
import { sumBy } from 'lodash';

import WineListItem from 'cart/components/WineListItem';
import { CartItem } from 'common/models';
import { colors } from 'common/constants';

export default function WineList({
  wineList,
  totalPrice,
  setTotalPrice,
}: {
  wineList: CartItem[];
  totalPrice: number;
  setTotalPrice: (nbr: number) => void;
}) {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(
    (Array(wineList.length) as boolean[]).fill(false)
  );
  const isSelectedAll = useMemo(() => {
    const selectedItemLen = selectedItems.filter(
      (isSelected: boolean) => isSelected
    ).length;

    if (selectedItemLen === wineList.length) return true;
    return false;
  }, [selectedItems]);

  const renderWineList = () => {
    return wineList.map((item: CartItem, index: number) => {
      return (
        <WineListItem
          key={`${item.id}`}
          item={item}
          index={index}
          isSelected={selectedItems[index]}
          setSelectItem={(bool: boolean) => {
            setSelectedItems((prev: boolean[]) => {
              const newList = [...prev];
              newList[index] = bool;
              return newList;
            });

            if (bool)
              setTotalPrice(
                totalPrice +
                  wineList[index].amount * wineList[index].product.price
              );
            else
              setTotalPrice(
                totalPrice -
                  wineList[index].amount * wineList[index].product.price
              );
          }}
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
          onChange={() => {
            setSelectedItems(
              (Array(wineList.length) as boolean[]).fill(!isSelectedAll)
            );

            if (!isSelectedAll) {
              const price =
                sumBy(wineList, (item) => item.amount * item.product.price) ||
                0;

              setTotalPrice(price);
            } else setTotalPrice(0);
          }}
          style={{ accentColor: colors.primary700Default }}
        />
        <Text size="base" weight="regular">
          전체 선택
        </Text>
      </SelectAllWrapper>
      <Divider width="100%" color={colors.gray100} />
      {renderWineList()}
      <QuestionText>
        <Image
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
