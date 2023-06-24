import { Tag } from 'home/components/Tag';
import { OrderType } from 'common/api/product';
import { WineType } from 'common/models';
import styled from '@emotion/styled';
import { TagInfo } from '../types/TagInfo';
import { TAG_LIST } from '../constants/TAG_LIST';

export interface Filter {
  orderType: OrderType;
  wineType: WineType | undefined;
}

interface Props {
  value: Filter;
  onChange: (value: Filter) => void;
}

export function FilterSection({ value, onChange }: Props) {
  const { orderType, wineType } = value;

  const handleWineTypeClick = (key: WineType) => {
    if (key === wineType) {
      onChange({ ...value, wineType: undefined });
      return;
    }

    onChange({ ...value, wineType: key });
  };

  const toggleOrderType = () => {
    onChange({
      ...value,
      orderType:
        value.orderType === OrderType.POPULAR
          ? OrderType.LOWEST_PRICE
          : OrderType.POPULAR,
    });
  };

  return (
    <TagBox>
      <Tag
        onClick={toggleOrderType}
        text={LABEL_BY_ORDER_TYPE[orderType]}
        key={orderType}
      />
      {TAG_LIST.map((tag: TagInfo) => {
        return (
          <Tag
            onClick={() => handleWineTypeClick(tag.key)}
            text={tag.text}
            spotColor={tag.spotColor}
            key={tag.key}
            isSelected={wineType === tag.key}
          />
        );
      })}
    </TagBox>
  );
}

const TagBox = styled.section`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 56px;
  padding: 0 20px;
  overflow-x: auto;
`;

const LABEL_BY_ORDER_TYPE = {
  [OrderType.LOWEST_PRICE]: '최저가순',
  [OrderType.POPULAR]: '인기순',
};
