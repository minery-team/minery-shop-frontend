import { css } from '@emotion/react';
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
