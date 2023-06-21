import { css } from '@emotion/react';
import Router from 'next/router';
import { Product } from 'common/models';
import { UrlLottie } from '@boxfoxs/bds-web';
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

  if (isLoading) {
    return (
      <div
        css={css`
          height: 300px;
          display: flex;
          align-items: center;
        `}
      >
        <UrlLottie
          src="https://lottie.host/95d6d68f-6172-4601-bb20-67ebb1ef4357/RVGwMbanZT.json"
          options={{ loop: true, autoplay: true }}
          style={{ width: '150px', height: '150px' }}
        />
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
