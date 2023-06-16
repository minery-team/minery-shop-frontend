import { OrderStatus } from 'common/models';
import { useRouter } from 'next/router';
import { memo, useCallback } from 'react';

const MyOrderFilterList = () => {
  const router = useRouter();
  const { query } = router;

  const handleClickFilter = useCallback(
    (status?: number) => {
      if (!status) {
        router.replace('/my/order');
        return;
      }
      router.replace(`/my/order?status=${status}`);
    },
    [router]
  );

  return (
    <ul>
      <li
        css={{
          fontWeight: !query.status ? 'bold' : undefined,
        }}
      >
        전체
      </li>
      {Object.entries(OrderStatus).map(([key, value], index) => (
        <li
          key={key}
          css={{
            fontWeight:
              !!query.status && +query.status === index ? 'bold' : undefined,
          }}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default memo(MyOrderFilterList);
