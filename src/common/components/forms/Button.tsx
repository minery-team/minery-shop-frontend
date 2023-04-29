import React from 'react';
import styled from '@emotion/styled';
import colors from '@/styles/colors';
import { mergeRefs } from 'react-merge-refs';

type Color = 'brand' | 'gray' | 'red';
type SizeType = 'large' | 'medium' | 'small';
type Variant = 'filled' | 'ghost' | 'rounded';


type ButtonProps = {
  variant?: Variant;
  size?: SizeType;
  color?: Color;
  children: React.ReactNode;
};

const Button = React.forwardRef<
  HTMLButtonElement,
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonProps> &
    ButtonProps
>(
  (
    {
      size = 'medium',
      variant = 'filled',
      color = 'brand',
      children,
      disabled,
      ...rest
    },
    forwardedRef
  ) => {
    const ref = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const sizeType = getSizeType(size);
    return <StyledButton  ref={mergeRefs([forwardedRef, ref])} variant={variant} color={color} style={{...sizeType}}{...rest} type="button" >{children}</StyledButton>;
  }
);

const StyledButton = styled.button<{variant:Variant,color:Color}>`
width: 100%;
${(p) => {
    const variant = getVariant(p.variant);
    const colors = getColorSet(p.color);
    return `
      cursor: pointer;
      color: ${colors.color};
      background: ${colors.background};
      border-color: ${colors.color};
      padding:${variant.padding};
      border-radius:${variant.borderRadius};
      &:active {
        background: ${colors.active?.background};
      }
      &:disabled {
        background: ${colors.color};
        color: ${colors.color || "auto"};
        border-color: ${colors.color || "auto"};
      }`;
  }}
`

function getColorSet(type: Color) {
  switch (type) {
    case "brand":
      return {
        color: colors.indigo[700],
        background: colors.white,
        active: { background: colors.gray[50] },
        disabled: { background: colors.gray[100], color: colors.gray[500] },
      };
    case "gray":
      return {
        color: colors.gray,
        background: colors.white,
        active: { background: colors.gray[50] },
        disabled: { background: colors.gray[200] },
      };
    case "red":
      return {
        color: colors.red[300],
        background: colors.white,
        active: { background: colors.red[300] },
        disabled: { background: colors.gray[200] },
      };
  }
}

function getVariant(variant: Variant) {
  switch (variant) {
    case 'filled':
      return {
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
      }
    case 'ghost':
      return {
        padding : "0.5rem 0.25rem",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "0.25rem",
      }
    case 'rounded':
      return {
        display:"flex",
        gap:"2rem",
        padding : "1.5rem 3rem",
        border: "none",
        borderRadius: "9999px",
      }
  }
}

function getSizeType(size: SizeType) {
  switch (size) {
    case 'large':
      return {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "16px",
      }
    case 'medium':
      return {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "16px",
      }
    case 'small':
      return {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
      }
  }
}

export default Button;
