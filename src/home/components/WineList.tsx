import { css } from '@emotion/react';
import { UrlLottie } from '@boxfoxs/bds-web';
import { WineCard } from './WineCard';

export function WineList({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) {
  const handleWineDetailClick = () => {
    console.log('상세페이지로 이동');
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
      {data?.map((item: any, idx: number) => {
        return (
          <WineCard
            // eslint-disable-next-line react/no-array-index-key
            key={item.wine.id + idx}
            info={item.wine}
            price={item.price}
            onClick={handleWineDetailClick}
          />
        );
      })}
    </section>
  );
}
