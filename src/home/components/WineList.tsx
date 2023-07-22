import { css } from '@emotion/react';
import Router from 'next/router';
import { Product } from 'common/models';
import { UrlLottie } from '@boxfoxs/bds-web';
import { WineCard } from './WineCard';
import { LoggingClick } from '@boxfoxs/logger';

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

  const renderItem = (item: Product) => {
    return (
      <LoggingClick name="Tap - Product in Home" params={{ product: item.id }}>
        <WineCard
          key={item.id}
          data={item}
          onClick={() => handleWineDetailClick(item)}
        />
      </LoggingClick>
    );
  };

  return (
    <section
      css={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        gap: '10px',
        padding: '0 19px',
        placeItems: 'center',
      })}
    >
      {data.filter((i) => i.type === 'wine').map(renderItem)}
      {data.filter((i) => i.type === 'snack').map(renderItem)}
    </section>
  );
}
