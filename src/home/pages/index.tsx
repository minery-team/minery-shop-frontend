import { Flex, Spacing, Text } from '@boxfoxs/bds-web';

import { LoggingState } from '@boxfoxs/logger';

export default function Home() {
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
  //       <HeroSection />
  //       <Spacing height={32} />
  //       <section style={{ padding: '0 20px' }}>
  //         <Text size="heading4" weight="medium" color="black">
  //           마이너리 추천!
  //         </Text>
  //         <Text size="heading4" weight="bold" color="black">
  //           이달의 와인 & 스낵
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
