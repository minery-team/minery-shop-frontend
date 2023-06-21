import { colors } from 'common/constants';
import { OrderStatus, orderStatusToHumanReadable } from 'common/models';
import styled from '@emotion/styled';
import { OrderStatusForFilter } from 'common/hooks/queries';

interface Props {
  filterStatus: OrderStatusForFilter;
  onFilterChange: (status: OrderStatusForFilter) => void;
}

const OrderListFilter = ({ filterStatus, onFilterChange }: Props) => {
  return (
    <OrderListFilterContainer>
      <FilterListItem
        key="ALL"
        selected={filterStatus === 'ALL'}
        onClick={() => onFilterChange('ALL')}
      >
        전체
      </FilterListItem>
      {Object.keys(OrderStatus).map((status) => (
        <FilterListItem
          key={status}
          selected={filterStatus === status}
          onClick={() => onFilterChange(status as unknown as OrderStatus)}
        >
          {orderStatusToHumanReadable(status as unknown as OrderStatus)}
        </FilterListItem>
      ))}
    </OrderListFilterContainer>
  );
};

export default OrderListFilter;

const OrderListFilterContainer = styled.div`
  width: 100%;
  overflow: scroll;
  box-sizing: border-box;
  padding: 18px 21px;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterListItem = styled.div<{ selected: boolean }>`
  display: inline-block;
  height: 32px;
  padding: 6px 16px;
  box-sizing: border-box;
  border-radius: 24px;
  background-color: ${({ selected }) =>
    selected ? colors.gray800 : '#ffffff'};
  color: ${({ selected }) => (selected ? '#ffffff' : colors.gray700)};
  border: ${({ selected }) => (selected ? 'none' : '1px solid #F1F1F1')};

  &:not(:last-of-type) {
    margin-right: 12px;
  }
`;
