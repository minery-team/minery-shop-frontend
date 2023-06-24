import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { colors } from 'common/constants';
import { memo } from 'react';
import Image from 'next/image';
import right_arrow from '../../../public/assets/right_arrow.svg';

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
          <Image src={right_arrow} width={16} height={20} />
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
