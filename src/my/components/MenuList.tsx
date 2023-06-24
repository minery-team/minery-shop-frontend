import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { colors } from 'common/constants';
import { memo } from 'react';
import Image from 'next/image';

export interface MenuItem {
  label: string;
  onClick?: () => void;
}

interface Props {
  menus: MenuItem[];
}

const MenuList = ({ menus }: Props) => {
  return (
    <Container>
      {menus.map(({ label, onClick }) => (
        <Menu aria-label={label} key={label} onClick={onClick}>
          <Text size="lg" weight="semibold" color={colors.gray900}>
            {label}
          </Text>
          <img src="/assets/right_arrow.svg" width={24} height={24} />
        </Menu>
      ))}
    </Container>
  );
};

export default memo(MenuList);

const Container = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  text-decoration: none;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.gray100};
  }
`;
