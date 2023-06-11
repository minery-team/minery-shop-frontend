import { css } from '@emotion/react';
import { useWineList } from '@common/hooks';
import { WineCard, WineInfo } from './WineCard';

export function WineList({ category }: { category: string }) {
  const { data, isLoading, isError, error } = useWineList({ category });

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
      {data?.map((info: WineInfo) => {
        return (
          <WineCard key={info.id} info={info} onClick={handleWineDetailClick} />
        );
      })}
    </section>
  );
}
