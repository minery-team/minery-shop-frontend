import { Text } from '@boxfoxs/bds-web';
import { css } from '@emotion/react';
import { Tag } from 'home/components/Tag';
import Image from 'next/image';

import { colors } from 'common/constants/colors';

import { useEffect, useRef, useState } from 'react';
import { Space } from 'common/components';
import styled from '@emotion/styled';
import { Footer } from 'common/components/footer';
import { WineType } from 'common/models';
import { OrderType } from 'common/api/product';
import { useWineList } from 'common/hooks';
import { WineList } from '../components/WineList';

import { Header } from '../components/Header';

export type TagInfo = {
  key: WineType;
  text: string;
  spotColor: string;
};

const TAG_LIST: TagInfo[] = [
  {
    key: WineType.RED,
    text: '레드',
    spotColor: `${colors.primary700Default}`,
  },
  {
    key: WineType.WHITE,
    text: '화이트',
    spotColor: `${colors.subIvory100}`,
  },
  {
    key: WineType.ROSE,
    text: '로제',
    spotColor: `${colors.primary300}`,
  },
  {
    key: WineType.SPARKLING,
    text: '스파클링',
    spotColor: `${colors.subBlue100}`,
  },
  {
    key: WineType.ETC,
    text: '기타',
    spotColor: `${colors.gray400}`,
  },
];

export default function Home() {
  const [wineType, setWineType] = useState<WineType | undefined>();
  const [orderType, setOrderType] = useState<{
    key: OrderType;
    text: string;
  }>({
    key: OrderType.POPULAR,
    text: '인기순',
  });

  const { data, isLoading, refetch } = useWineList({
    wineType,
    order: orderType.key,
  });

  const handleWineTypeClick = (key: WineType) => {
    if (wineType === key) {
      setWineType(undefined);
      return;
    }
    setWineType(key);
  };

  const handleOrderTypeClick = (key: OrderType) => {
    if (key === OrderType.POPULAR) {
      setOrderType({ key: OrderType.LOWEST_PRICE, text: '최저가순' });
      return;
    }
    setOrderType({ key: OrderType.POPULAR, text: '인기순' });
  };

  const handleScroll = (target: any) => {
    if (target == null) return;

    if (target === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    refetch();
  }, [wineType, orderType]);

  return (
    <main>
      <div
        css={css({
          width: '100%',
          position: 'relative',
        })}
      >
        <Header />
        <section
          css={css({
            width: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          })}
        >
          <video
            css={css({
              width: '100%',
            })}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        </section>
      </div>
      <Space bottom="32px" />
      <section
        css={css({
          padding: '0 20px',
          height: '62px',
        })}
      >
        <Text size="heading4" weight="medium" color="black">
          마이너리 추천!
        </Text>
        <Text size="heading4" weight="bold" color="black">
          이달의 와인 & 스낵
        </Text>
      </section>
      <Space bottom="6px" />
      <TagBox>
        <Tag
          onClick={() => {
            handleOrderTypeClick(orderType.key);
          }}
          text={orderType.text}
          key={orderType.key}
        />
        {TAG_LIST.map((tag: TagInfo) => {
          return (
            <Tag
              onClick={() => handleWineTypeClick(tag.key)}
              text={tag.text}
              spotColor={tag.spotColor}
              key={tag.key}
              isSelected={wineType === tag.key}
            />
          );
        })}
      </TagBox>
      <Space bottom="6px" />
      <WineList data={data ?? []} isLoading={isLoading} />
      <Space bottom="32px" />
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <ScrollTopButton
          type="button"
          onClick={() => {
            handleScroll('top');
          }}
        >
          <img src="/assets/up.svg" width={16} height={16} alt="" />
          <Space left="8px" />
          <Text size="lg" weight="medium" color={colors.defaultBlack}>
            맨 위로
          </Text>
        </ScrollTopButton>
      </div>
      <Space bottom="32px" />
      <Footer />
    </main>
  );
}

const TagBox = styled.section`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 56px;
  padding: 0 20px;
  overflow-x: auto;
`;

const ScrollTopButton = styled.button`
  width: 118px;
  height: 46px;
  border: 1px solid #000000;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
`;
