import styled from '@emotion/styled';
import Image from 'next/image';
import { Spacing } from '@boxfoxs/bds-web';
import { pressableStyle } from 'common/utils/pressableStyle';
import Link from 'next/link';
import logo from '../../../public/assets/text_logo.svg';
import profile from '../../../public/assets/profile.svg';
import basket from '../../../public/assets/basket.svg';

export function Header() {
  return (
    <HeaderContaer>
      <Image src={logo} width={91} height={32} alt="logo" />
      <Spacing flex={1} />
      <Link passHref href="/cart">
        <StyledImage src={basket} width={40} height={40} alt="basket" />
      </Link>
      <Link passHref href="/my">
        <StyledImage src={profile} width={40} height={40} alt="profile" />
      </Link>
    </HeaderContaer>
  );
}

const HeaderContaer = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  height: 56px;
  z-index: 1;
  width: 335px;
  background-color: white;
  border-radius: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 24px;
  padding-right: 8px;
`;

const StyledImage = styled(Image)`
  ${pressableStyle.opacity()}
`;
