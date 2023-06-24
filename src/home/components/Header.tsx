import { Spacing, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { pressableStyle } from 'common/utils/pressableStyle';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useScrollIsOnTop } from 'common/hooks';
import { useCart } from '../../common/hooks/useCart';

export function Header() {
  const { isOnTop } = useScrollIsOnTop(10);
  const { value } = useCart();
  const router = useRouter();

  return (
    <HeaderContaer full={!isOnTop}>
      <img src="/assets/text_logo.svg" width={91} height={32} alt="logo" />
      <Spacing flex={1} />
      <Box>
        <StyledImage
          src="/assets/basket.svg"
          width={40}
          height={40}
          alt="basket"
          onClick={() => router.push('/cart')}
        />
        {value.length > 0 && (
          <CartCount>
            <Text size="caption" weight="regluar" color={colors.defaultWhite}>
              {value.length}
            </Text>
          </CartCount>
        )}
      </Box>
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

const StyledImage = styled(Image)`
  ${pressableStyle.opacity()}
`;

const Box = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const CartCount = styled.div`
  background-color: ${colors.primary700Default};
  border-radius: 50%;
  width: 17px;
  height: 17px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  padding-top: 1px;
`;
