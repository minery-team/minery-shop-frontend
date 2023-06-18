import { MTextSize, colors } from 'common/constants';
import {
  Spacing,
  TextStyleProps,
  UrlLottie,
  useTextStyle,
} from '@boxfoxs/bds-web';
import { coerceCssPixelValue } from 'common/utils/coerceCssPixelValue';
import styled from '@emotion/styled';
import {
  AllHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react';

type StyleType = 'primary' | 'default' | 'light' | 'primaryLight';

type Props = Omit<
  AllHTMLAttributes<HTMLButtonElement>,
  'as' | 'type' | 'size'
> & {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  textStyle?: TextStyleProps<MTextSize>;
  type?: StyleType;
  loading?: boolean;
  left?: ReactNode;
  right?: ReactNode;

  radius?: CSSProperties['borderRadius'] | number;
};

export function MineryButton({
  htmlType = 'button',
  type = 'primary',
  textStyle = { size: 'xl', weight: 'medium' },
  loading,
  left,
  right,
  radius = 4,
  ...props
}: Props) {
  const style = useTextStyle(textStyle);
  return (
    <StyledButton
      {...props}
      type={htmlType}
      onClick={!loading ? props.onClick : undefined}
      style={{ ...{ ...style, color: undefined }, ...props.style }}
      radius={radius}
      styleType={type}
      loading={loading}
    >
      {right && <Spacing width={4} />}
      {left}
      {loading ? (
        <UrlLottie
          src="https://assets9.lottiefiles.com/packages/lf20_czwfqh7b.json"
          options={{ loop: true, autoplay: true }}
          style={{ width: '22px' }}
        />
      ) : (
        props.children
      )}
      {right}
      {left && <Spacing width={4} />}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  styleType: StyleType;
  loading?: boolean;
  height?: CSSProperties['height'];
  radius?: CSSProperties['borderRadius'];
}>`
  ${(p) => (p.loading ? 'opacity: 0.9;' : '')}
  ${(p) => `border-radius: ${coerceCssPixelValue(p.radius ?? 0)} !important;`}
  height: ${(p) => (p.height ? `${coerceCssPixelValue(p.height)}` : '58px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;

  padding-horizontal: 20px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  ${(p) => {
    const colorSet = getColorSet(p.styleType);
    return `
      color: ${colorSet.color};
      background: ${colorSet.background};
      border-color: ${colorSet.borderColor};
      &:active {
        background: ${colorSet.active.background};
        color: ${colorSet.active.color || 'auto'};
        border-color: ${colorSet.active.borderColor || 'auto'};
      }
      &:disabled {
        background: ${colorSet.disabled.background};
        color: ${colorSet.disabled.color || 'auto'};
        border-color: ${colorSet.disabled.borderColor || 'auto'};
      }`;
  }}
  &:focus {
    outline: none;
  }
`;

function getColorSet(type: StyleType) {
  switch (type) {
    case 'light':
      return {
        color: colors.gray900,
        background: colors.defaultWhite,
        borderColor: colors.gray300,
        active: {
          color: colors.primary700Default,
          background: colors.defaultWhite,
          borderColor: colors.primary700Default,
        },
        disabled: {
          background: colors.gray200,
          color: colors.gray500,
          borderColor: colors.gray200,
        },
      };
    case 'primaryLight':
      return {
        color: colors.primary700Default,
        background: colors.primary100,
        borderColor: colors.primary100,
        active: { background: colors.primary300 },
        disabled: {
          background: colors.gray200,
          color: colors.gray500,
          borderColor: colors.gray200,
        },
      };
    case 'default':
      return {
        color: colors.defaultWhite,
        background: colors.gray900,
        borderColor: colors.gray900,
        active: { background: colors.gray800 },
        disabled: {
          background: colors.gray200,
          color: colors.gray500,
          borderColor: colors.gray200,
        },
      };
    case 'primary':
    default:
      return {
        color: colors.defaultWhite,
        background: colors.primary700Default,
        borderColor: colors.primary700Default,
        active: { background: colors.primary800Pressed },
        disabled: {
          background: colors.gray200,
          color: colors.gray500,
          borderColor: colors.gray200,
        },
      };
  }
}
