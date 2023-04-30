import React from 'react';
import styled from '@emotion/styled';

import colors from '@/styles/colors';
import { mergeRefs } from 'react-merge-refs';

type Variant = 'filled' | 'ghost' | 'rounded';
type Color = 'brand' | 'gray' | 'red' | 'none' | 'black';
type SizeType = 'large' | 'medium' | 'small';


const variantStyles: Record<Variant, string> = {
  filled: `
    border: none;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    font-weight: 600;
    transition: background-color 0.3s ease-out;
    &:disabled {
      cursor: not-allowed;
    }
  `,
  ghost: `
    background-color: transparent;
    color: #1f2937;
    border: 0px solid #e5e7eb;
    border-radius: 0.375rem;
    padding: 0.375rem 0.75rem;
    font-weight: 600;
    transition: background-color 0.3s ease-out;

    &:hover {
      background-color: #e1e2e4;
    }

    &:active {
      background-color: #e5e7eb;
    }

    &:disabled {
      cursor: not-allowed;
      border-color: #cbd5e0;
      color: #a0aec0;
    }
  `,
  rounded: `
    border: none;
    border-radius: 9999px;
    padding: 0.375rem 1.5rem;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    transition: background-color 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
    }
  `,
};

const colorStyles: Record<Color, string> = {
  none: '',
  brand: `
  color: ${colors.white};
  background-color: ${colors.blue['500']};
  &:hover {
    background-color: ${colors.blue['600']};
  }
  &:active {
    background-color:${colors.blue['700']};
  }
  &:disabled {
    cursor: not-allowed;
    background-color:${colors.blue['300']};
  }`,
  gray: `
  color: ${colors.white};
  background-color: ${colors.gray['500']};
  &:hover {
    background-color: ${colors.gray['600']};
  }
  &:active {
    background-color:${colors.gray['700']};
  }
  &:disabled {
    cursor: not-allowed;
    background-color:${colors.gray['300']};
  }
  `,
  red: `
  color: ${colors.white};
  background-color: ${colors.red['500']};
  &:hover {
    background-color: ${colors.red['600']};
  }
  &:active {
    background-color:${colors.red['700']};
  }
  &:disabled {
    cursor: not-allowed;
    background-color:${colors.red['300']};
  }`,
  black: `
  color: ${colors.white};
  background-color: ${colors.gray['800']};
  &:hover {
    background-color: ${colors.gray['600']};
  }
  &:active {
    background-color:${colors.gray['800']};
  }
  &:disabled {
    cursor: not-allowed;
    background-color:${colors.gray['300']};
  }
  `,
};


type ButtonProps = {
  variant?: Variant;
  size?: SizeType;
  color?: Color ;
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

const StyledButton = styled.button<ButtonProps>`
  ${({ variant }) => variantStyles[variant ?? 'filled']};
  ${({ color }) => colorStyles[color ?? 'brand']};
`

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
