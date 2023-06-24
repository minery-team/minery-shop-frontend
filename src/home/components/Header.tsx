import { Spacing } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { pressableStyle } from 'common/utils/pressableStyle';
import Image from 'next/image';
import Link from 'next/link';

import { useScrollIsOnTop } from 'common/hooks';
import { CartButton } from '../../common/components/appbar/CartButton';
import { LoggingClick } from '@boxfoxs/logger';

export function Header() {
  const { isOnTop } = useScrollIsOnTop(10);

  return (
    <HeaderContaer full={!isOnTop}>
      <img src="/assets/text_logo.svg" width={91} height={32} alt="logo" />
      <Spacing flex={1} />
      <LoggingClick name="Tap - Cart in Home Header">
        <CartButton />
      </LoggingClick>
      <LoggingClick name="Tap - My in Home Header">
        <Link passHref href="/my">
          <StyledImage
            src="/assets/profile.svg"
            width={40}
            height={40}
            alt="profile"
          />
        </Link>
      </LoggingClick>
    </HeaderContaer>
  );
}

const HeaderContaer = styled.nav<{ full?: boolean }>`
  display: flex;
  align-items: center;

  height: 56px;
  padding: 0 24px;
  background: white;
  position: fixed;
  top: 0px;
  z-index: 2;

  max-width: ${(p) => (p.full ? '500px' : 'calc(500px - 40px)')};
  width: ${(p) => (p.full ? '100%' : 'calc(100% - 40px)')};
  transform: translate(${(p) => (p.full ? '0, 0' : '20px, 20px')});
  border-radius: ${(p) => (p.full ? '0px' : '54px')};
  transition: all 300ms;
  filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.05));
`;

export const StyledImage = styled(Image)`
  ${pressableStyle.opacity()}
`;
