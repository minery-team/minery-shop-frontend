import { css } from '@emotion/react';
import { useWineList } from '@/common/hooks';
import { WineCard, WineInfo } from './WineCard';

export function WineList({ category }: { category: string }) {
  const { data, isLoading, isError, error } = useWineList({ category });

  const handleWineDetailClick = () => {
    console.log('상세페이지로 이동');
  };

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
      {data?.map((info: WineInfo) => {
        return (
          <WineCard key={info.id} info={info} onClick={handleWineDetailClick} />
        );
      })}
    </section>
  );
}
