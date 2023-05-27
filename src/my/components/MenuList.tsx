import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { memo } from 'react';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Menu = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

interface Props {
  menus: {
    label: string;
    to: string;
  }[];
}

const MenuList = ({ menus }: Props) => {
  return (
    <Container>
      {menus.map(({ label, to }) => (
        <Menu aria-label={label} key={label} href={to}>
          {label}
          <Icon icon="material-symbols:chevron-right-rounded" width={24} />
        </Menu>
      ))}
    </Container>
  );
};

export default memo(MenuList);
