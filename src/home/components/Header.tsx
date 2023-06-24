import styled from '@emotion/styled';
import Image from 'next/image';
import { Spacing } from '@boxfoxs/bds-web';
import { pressableStyle } from 'common/utils/pressableStyle';
import Link from 'next/link';

export function Header() {
  return (
    <HeaderContaer>
      <Image src="/assets/text_logo.svg" width={91} height={32} alt="logo" />
      <Spacing flex={1} />
      <Link passHref href="/cart">
        <StyledImage
          src="/assets/basket.svg"
          width={40}
          height={40}
          alt="basket"
        />
      </Link>
      <Link passHref href="/my">
        <StyledImage
          src="/assets/profile.svg"
          width={40}
          height={40}
          alt="profile"
        />
      </Link>
    </HeaderContaer>
  );
}

const HeaderContaer = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  top: 12px;
  height: 56px;
  z-index: 1;
  width: 85vw;
  background-color: white;
  border-radius: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 24px;
  padding-right: 8px;
  max-width: 450px;
`;

const StyledImage = styled(Image)`
  ${pressableStyle.opacity()}
`;
