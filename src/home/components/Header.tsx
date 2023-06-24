import styled from '@emotion/styled';
import Image from 'next/image';
import { Spacing } from '@boxfoxs/bds-web';
import { pressableStyle } from 'common/utils/pressableStyle';
import Link from 'next/link';
import { colors } from 'common/constants';

import React from 'react';
import { Text } from '@boxfoxs/bds-web';
import { useRouter } from 'next/router';
import { useCart } from '../../common/hooks/useCart';

export function Header() {
  const { value } = useCart();
  const router = useRouter();

  return (
    <HeaderContaer>
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
