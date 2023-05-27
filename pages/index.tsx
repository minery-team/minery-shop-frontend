import Head from 'next/head';
import { Text } from '@boxfoxs/bds-web';
import { css } from '@emotion/react';
import { Tag } from '@/components/home/Tag';
import { WineCard, WineInfo } from '@/components/home/WineCard';
import Image from 'next/image';

import { colors } from '@/common/constants/colors';
import logo from '../public/assets/logo.svg';
import profile from '../public/assets/profile.svg';
import basket from '../public/assets/basket.svg';
import hero from '../public/assets/hero.jpg';
import down from '../public/assets/down.svg';
import up from '../public/assets/up.svg';
import { Ref, useEffect, useRef } from 'react';

type TagKey = 'popular' | 'red' | 'white' | 'etc';

export type TagInfo = {
  key: TagKey;
  text: string;
};

export default function HomePage() {
  const tagList: TagInfo[] = [
    { key: 'popular', text: '인기순' },
    {
      key: 'red',
      text: '레드',
    },
    {
      key: 'white',
      text: '화이트',
    },
    {
      key: 'etc',
      text: '기타',
    },
  ];

  const wineList: WineInfo[] = [
    {
      id: 1,
      image: hero,
      country: '칠레',
      category: 'red',
      name: '도멘 생 패트리스, 샤토네프 뒤 파프 2016',
      price: 128000,
      rate: 4.2,
      reviewCnt: 168,
    },
    {
      id: 2,
      image: hero,
      country: '칠레',
      category: 'red',
      name: '도멘 생 패트리스, 샤토네프 뒤 파프 2016',
      price: 128000,
      rate: 4.2,
      reviewCnt: 168,
    },
    {
      id: 3,
      image: hero,
      country: '칠레',
      category: 'red',
      name: '도멘 생 패트리스, 샤토네프 뒤 파프 2016',
      price: 128000,
      rate: 4.0,
      reviewCnt: 168,
    },
    {
      id: 4,
      image: hero,
      country: '칠레',
      category: 'red',
      name: '도멘 생 패트리스, 샤토네프 뒤 파프 2016',
      price: 128000,
      rate: 4.0,
      reviewCnt: 168,
    },
  ];

  const mainSectionRef = useRef(null);

  const handleTagClick = (key: TagKey) => {
    // api 호출 => react-query를 사용하는 get에 영향이 가서 새로운 리스트를 불러와서 (업데이트 되도록)
    console.log(`${key}로 새로운 리스트 렌더링`);
  };

  const handleWineDetailClick = () => {
    console.log('상세페이지로 이동');
  };

  const handleScroll = (target: any) => {
    if (target == undefined) return;

    if (target === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth' });
  };

  // FIXME: home화면 입장 시에 api 호출해서 와인리스트 불러오도록 대응

  return (
    <>
      <Head>
        <title>Minery App</title>
        <meta name="description" content="Minery description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav
          css={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            height: '56px',
          })}
        >
          <Image src={logo} width={91} height={32} alt="logo" />
          <div
            css={css({
              display: 'flex',
            })}
          >
            <Image src={basket} width={40} height={40} alt="basket" />
            <Image src={profile} width={40} height={40} alt="profile" />
          </div>
        </nav>
        <section
          css={css({
            width: '375px',
            height: '540px',
            position: 'relative',
          })}
        >
          <Image src={hero} width={375} height={540} alt="hero" />
          <button
            css={css({
              position: 'absolute',
              bottom: 32,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '177px',
              height: '46px',
              border: '1px solid #FFFFFF',
              borderRadius: '30px',
              backgroundColor: 'transparent',
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            })}
            type="button"
            onClick={() => {
              handleScroll(mainSectionRef.current);
            }}
          >
            <Image src={down} width={16} height={16} alt="" />
            <div
              css={css({
                paddingLeft: '8px',
              })}
            />
            <Text size="lg" weight="bold" color={colors.defaultWhite}>
              이달의 추천 와인
            </Text>
          </button>
        </section>
        {/* section간의 간격 */}
        <div
          css={css({
            paddingBottom: '32px',
          })}
        />
        <section
          ref={mainSectionRef}
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
        {/* section간의 간격 */}
        <div
          css={css({
            paddingBottom: '6px',
          })}
        />
        <section
          css={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            height: '56px',
          })}
        >
          {/* 태그를 동적으로 받아오는 것에 대한 고려 */}
          {tagList.map((tag: TagInfo) => {
            return (
              <Tag
                onClick={() => handleTagClick(tag.key)}
                text={tag.text}
                key={tag.key}
              />
            );
          })}
        </section>
        {/* section간의 간격 */}
        <div
          css={css({
            paddingBottom: '6px',
          })}
        />
        <section
          css={css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto',
            gap: '10px',
            padding: '0 19px',
          })}
        >
          {/* 태그를 동적으로 받아오는 것에 대한 고려 */}
          {wineList.map((info: WineInfo) => {
            return (
              <WineCard
                key={info.id}
                info={info}
                onClick={handleWineDetailClick}
              />
            );
          })}
        </section>
        <div
          css={css({
            paddingBottom: '32px',
          })}
        />
        <button
          css={css({
            width: '118px',
            height: '46px',
            border: '1px solid #000000',
            borderRadius: '30px',
            backgroundColor: 'transparent',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          })}
          type="button"
          onClick={() => {
            handleScroll('top');
          }}
        >
          <Image src={up} width={16} height={16} alt="" />
          <div
            css={css({
              paddingLeft: '8px',
            })}
          />
          <Text size="lg" weight="bold" color={colors.defaultBlack}>
            맨 위로
          </Text>
        </button>
      </main>
    </>
  );
}
