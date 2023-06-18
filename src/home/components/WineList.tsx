import { css } from '@emotion/react';
import Router from 'next/router';
import { Product } from 'common/models';
import { WineCard } from './WineCard';

export function WineList({
  data,
  isLoading,
}: {
  data: Product[];
  isLoading: boolean;
}) {
  const handleWineDetailClick = (product: Product) => {
    Router.push(`/product/${product.id}`);
  };

  // FIXME: 스켈레톤 사용하면 좋을듯싶어 임시 대응하였습니다.
  if (isLoading) {
    return (
      <div
        css={css`
          height: 500px;
        `}
      >
        is loading...
      </div>
    );
  }

  return (
    <section
      css={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        gap: '10px',
        padding: '0 19px',
      })}
    >
      {data.map((item: Product, idx: number) => {
        return (
          <WineCard
            // eslint-disable-next-line react/no-array-index-key
            key={item.wine.id + idx}
            data={item}
            onClick={() => handleWineDetailClick(item)}
          />
        );
      })}
    </section>
  );
}
