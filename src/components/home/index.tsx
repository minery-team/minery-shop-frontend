import { Text } from '@boxfoxs/bds-web';
import { css } from '@emotion/react';
import { Tag } from 'components/home/Tag';
import Image from 'next/image';

import { colors } from 'common/constants/colors';

import { useRef, useState } from 'react';
import { Space } from 'common/components';
import { WineList } from 'components/home/WineList';
import styled from '@emotion/styled';
import { Footer } from 'common/components/footer';
import logo from '../../../public/assets/text_logo.svg';
import profile from '../../../public/assets/profile.svg';
import basket from '../../../public/assets/basket.svg';
import hero from '../../../public/assets/hero.png';
import down from '../../../public/assets/down.svg';
import up from '../../../public/assets/up.svg';

type TagKey = 'popular' | 'red' | 'white' | 'etc';

export type TagInfo = {
  key: TagKey;
  text: string;
  spotColor: string;
};

export function Home() {
  const tagList: TagInfo[] = [
    {
      key: 'red',
      text: '레드',
      spotColor: ' #A10000',
    },
    {
      key: 'white',
      text: '화이트',
      spotColor: '#F3F0E8',
    },
    {
      key: 'etc',
      text: '기타',
      spotColor: '#CCCCCC',
    },
  ];

  const mainTextRef = useRef(null);

  const [category, setCategory] = useState<string>('popular');
  const [switchTag, setSwitchTag] = useState<{
    key: 'popular' | 'lowest';
    text: string;
  }>({
    key: 'popular',
    text: '인기순',
  });

  const handleTagClick = (key: TagKey) => {
    setCategory(key);
  };

  const handleTagSwitch = (key: 'popular' | 'lowest') => {
    if (key === 'popular') {
      setCategory(key);
      setSwitchTag({ key: 'lowest', text: '최저가순' });
      return;
    }
    setCategory(key);
    setSwitchTag({ key: 'popular', text: '인기순' });
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

  return (
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
          width: '100%',
          height: '540px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Image src={hero} fill alt="" />
        <ScrollMainButton
          type="button"
          onClick={() => {
            handleScroll(mainTextRef.current);
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
        </ScrollMainButton>
      </section>
      <Space bottom="32px" />
      <section
        ref={mainTextRef}
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
          onClick={() => handleTagSwitch(switchTag.key)}
          text={switchTag.text}
          key={switchTag.key}
        />
        {tagList.map((tag: TagInfo) => {
          return (
            <Tag
              onClick={() => handleTagClick(tag.key)}
              text={tag.text}
              spotColor={tag.spotColor}
              key={tag.key}
            />
          );
        })}
      </TagBox>
      <Space bottom="6px" />
      <WineList category={category} />
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
          <Image src={up} width={16} height={16} alt="" />
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

const ScrollMainButton = styled.button`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 177px;
  height: 46px;
  border: 1px solid #ffffff;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const TagBox = styled.section`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 56px;
  padding: 0 20px;
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
