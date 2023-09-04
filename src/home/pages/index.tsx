import { Flex, Spacing, Text } from '@boxfoxs/bds-web';

import { LoggingState } from '@boxfoxs/logger';
// import { OrderType } from 'common/api/product';
// import { Footer } from 'common/components/footer';
// import { useWineList } from 'common/hooks';
// import { Filter, FilterSection } from 'home/components/FilterSection';
// import { Header } from 'home/components/Header';
// import { HeroSection } from 'home/components/HeroSection';
// import { ScrollToTopSection } from 'home/components/ScrollToTopSection';
// import { useState } from 'react';
// import { WineList } from '../components/WineList';

// const defaultFilter = { orderType: OrderType.POPULAR, wineType: undefined };
const areaArray = [
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '도봉구',
  '동대문구',
  '동작구',
  '마포구',
  '서대문구',
  '서초구',
  '성동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];

export default function Home() {
  // const [filter, setFilter] = useState<Filter>(defaultFilter);

  // const { data, isLoading } = useWineList({
  //   wineType: filter.wineType,
  //   order: filter.orderType,
  // });

  return (
    <LoggingState name="Page View - Home">
      <main>
        <Flex.Center direction="column" style={{ height: '85vh' }}>
          <img
            alt="icon"
            src="/assets/text_logo.svg"
            style={{ width: '160px' }}
          />
          <Spacing height={24} />
          <Text size="heading5" weight="bold" center>
            서비스 점검중
          </Text>
        </Flex.Center>
      </main>
    </LoggingState>
  );

  // return (
  //   <LoggingState name="Page View - Home">
  //     <main>
  //       <Header />
  //       <Spacing height={100} />
  //       <div style={{ paddingLeft: '20px' }}>
  //         <select
  //           style={{
  //             height: '32px',
  //             border: '1px solid gray',
  //             padding: '0 16px',
  //             borderRadius: '25px',
  //           }}
  //         >
  //           {areaArray.map((item) => (
  //             <option key={item}>{item}</option>
  //           ))}
  //         </select>
  //       </div>

  //       <Spacing height={32} />
  //       <section style={{ padding: '0 20px' }}>
  //         <Text size="heading4" weight="medium" color="black">
  //           바로 픽업! 내 주변 와인 추천
  //         </Text>
  //         <Text size="heading4" weight="bold" color="black">
  //           이런 와인 어때요?
  //         </Text>
  //       </section>
  //       <Spacing height={6} />
  //       <FilterSection value={filter} onChange={setFilter} />
  //       <Spacing height={6} />
  //       <WineList data={data ?? []} isLoading={isLoading} />
  //       <Spacing height={32} />
  //       <ScrollToTopSection />
  //       <Spacing height={32} />
  //       <Footer />
  //     </main>
  //   </LoggingState>
  // );
}
