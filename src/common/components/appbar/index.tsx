import { Flex, Spacing, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Router from 'next/router';
import { ComponentProps, ReactNode } from 'react';
import { colors } from '@/common/constants';
import { ControlBox } from './ControlBox';
import { FloatingAppBarContainer } from './FloatingAppBarContainer';
import { Profile } from './Profile';

interface Props {
  back?: boolean | 'x';
  logo?: boolean;
  profile?: boolean;

  fixed?: boolean;
  initialHidden?: boolean;
  floating?: boolean;
  backgrounded?: boolean;
  elevated?: boolean;

  takeSpace?: boolean;

  children?: ReactNode;
}

export const AppBar = ({
  initialHidden,
  fixed,
  floating,
  elevated,
  profile,
  backgrounded,
  back,
  logo,
  takeSpace,
  children,
}: Props) => {
  const content = (
    <InnerContainer elevated={elevated} backgrounded={backgrounded}>
      {children && <ContentContainer>{children}</ContentContainer>}
      {logo && <Logo />}
      {back && (
        <ControlBox onClick={() => Router.back()}>
          {back === 'x' ? (
            <XMarkIcon width={28} color={colors.gray900} strokeWidth={1.5} />
          ) : (
            <ChevronLeftIcon
              height={22}
              color={colors.gray700}
              strokeWidth={2}
            />
          )}
        </ControlBox>
      )}
      <Spacing flex={1} />
      {profile && (
        <ControlBox>
          <Profile />
        </ControlBox>
      )}
    </InnerContainer>
  );

  if (!floating) {
    return content;
  }

  return (
    <FloatingAppBarContainer
      takeSpace={takeSpace}
      initialHidden={initialHidden}
      fixed={fixed}
    >
      {content}
    </FloatingAppBarContainer>
  );
};

// TODO: 정확한 Center 정렬로 수정
AppBar.Title = (props: ComponentProps<typeof Text>) => {
  return (
    <TitleContainer>
      <Text
        style={{
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '18px',
          textAlign: 'center',
        }}
        {...props}
      />
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  padding: 19px 40px;
`;

const InnerContainer = styled(Flex.CenterVertical)<{
  backgrounded?: boolean;
  elevated?: boolean;
}>`
  width: 100%;
  max-width: 1400px;
  padding: 0 12px;
  height: 58px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  ${(p) => (p.backgrounded ? 'background: white;' : '')}
  ${(p) => (p.elevated ? `border-bottom: 1px solid ${colors.gray200};` : '')}
`;

const Logo = () => {
  return <Text>Minery</Text>;
};

const ContentContainer = styled.div`
  position: absolute;
  width: calc(100% - 24px);
  height: 100%;
  z-index: -1;
`;
