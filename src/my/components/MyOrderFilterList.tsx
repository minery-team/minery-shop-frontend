import { memo, useCallback } from 'react';
import { OrderStatusType } from '../types';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface MyOrderFilterProps {
  label: string;
  statusCode?: number;
  count: number;
  selected?: boolean;
}

const FilterContainer = styled.div<{ selected?: boolean }>`
  padding: 8px 16px;
  border: 1px solid #808080;
  border-radius: 24px;
  text-align: center;
  white-space: nowrap;
  font-weight: ${(p) => (p.selected ? 'bold' : undefined)};
`;

const MyOrderFilter = memo(function MyOrderFilter({
  label,
  statusCode,
  count,
  selected,
}: MyOrderFilterProps) {
  const router = useRouter();

  const handleClickFilter = useCallback(
    (status?: number) => {
      if (typeof status === 'undefined') {
        router.replace('/my/order');
        return;
      }
      router.replace(`/my/order?status=${status}`);
    },
    [router]
  );

  return (
    <FilterContainer
      onClick={() => handleClickFilter(statusCode)}
      selected={selected}
    >
      <span css={{ fontSize: '14px' }}>{`${label} ${count}`}</span>
    </FilterContainer>
  );
});

const FilterSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 20px;
  overflow-x: scroll;
`;

function MyOrderFilterList() {
  const router = useRouter();
  const { query } = router;

  return (
    <FilterSection>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <MyOrderFilter
          label="전체"
          count={0}
          selected={typeof query.status === 'undefined'}
        />
        {Object.entries(OrderStatusType).map(([, value], index) => (
          <MyOrderFilter
            label={value}
            count={0}
            statusCode={index}
            selected={query.status === String(index)}
          />
        ))}
      </div>
    </FilterSection>
  );
}

export default memo(MyOrderFilterList);
