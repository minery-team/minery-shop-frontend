import { Spacing, Text } from '@boxfoxs/bds-web';

import { OrderType } from 'common/api/product';
import { Footer } from 'common/components/footer';
import { useWineList } from 'common/hooks';
import { WineType } from 'common/models';
import { ScrollToTopSection } from 'home/components/ScrollToTopSection';
import { useState } from 'react';
import { WineList } from '../components/WineList';

import { Filter, FilterSection } from '../components/FilterSection';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';

const defaultFilter = { orderType: OrderType.POPULAR, wineType: WineType.RED };

export default function Home() {
  const [filter, setFilter] = useState<Filter>(defaultFilter);

  const { data, isLoading } = useWineList({
    wineType: filter.wineType,
    order: filter.orderType,
  });

  return (
    <main>
      <Header />
      <HeroSection />
      <Spacing height={32} />
      <section style={{ padding: '0 20px' }}>
        <Text size="heading4" weight="medium" color="black">
          마이너리 추천!
        </Text>
        <Text size="heading4" weight="bold" color="black">
          이달의 와인 & 스낵
        </Text>
      </section>
      <Spacing height={6} />
      <FilterSection value={filter} onChange={setFilter} />
      <Spacing height={6} />
      <WineList data={data ?? []} isLoading={isLoading} />
      <Spacing height={32} />
      <ScrollToTopSection />
      <Spacing height={32} />
      <Footer />
    </main>
  );
}
