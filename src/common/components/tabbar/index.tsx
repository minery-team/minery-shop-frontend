import { colors } from 'common/constants';
import { Flex, inDesktop } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import React, { ComponentProps } from 'react';

export function TabBar({
  data,
  value,
  onClick,
  ...props
}: {
  data: { name: string; id: string }[];
  value: string;
  onClick: (id: string) => void;
} & Omit<ComponentProps<typeof Container>, 'onClick'>) {
  return (
    <Container {...props}>
      {data.map((item) => (
        <TabBarButton
          key={item.id}
          active={value === item.id}
          onClick={() => onClick(item.id)}
        >
          {item.name}
        </TabBarButton>
      ))}
    </Container>
  );
}

const Container = styled(Flex.CenterVertical)``;

const TabBarButton = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(p) => (p.active ? '700' : '400')};
  padding: 10px 0;
  flex: 1;
  color: ${(p) => (p.active ? colors.gray900 : colors.gray300)};
  border-bottom: ${(p) =>
    p.active ? `2px solid ${colors.gray900}` : `1px solid ${colors.gray900}`};
  ${(p) => (p.active ? '' : pressableStyle.opacity())}
`;

const pressableStyle = {
  background: (background = colors.gray100) => `
    transition: background 250ms;
    &:active {
      background: ${background};
    }
    ${inDesktop(`
      &:focus {
        background: ${background};
      }
    `)}
  `,
  opacity: (opacity = 0.7) => `
    transition: opacity 200ms;
    &:active {
      opacity: ${opacity};
    }
    ${inDesktop(`
      &:focus {
        opacity: ${opacity};
      }
    `)}
  `,
  scale: (scale = 0.97) => `
    transition: transform 150ms;
    &:active {
      transform: scale(${scale});
    }
    ${inDesktop(`
      &:focus {
        transform: scale(${scale});
      }
    `)}
  `,
};
