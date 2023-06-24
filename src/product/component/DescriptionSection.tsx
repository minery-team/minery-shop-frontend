import { Product } from 'common/models';
import Image from 'next/image';
import { colors } from 'common/constants';
import { Spacing, Text } from '@boxfoxs/bds-web';
import { Section, SectionDivider } from 'common/components';
import styled from '@emotion/styled';

import WineTasteLevel from './WineTasteLevel';
import WineKindDescription from './WineKindDescription';
import SnackDescription from './SnackDescription';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const DescriptionSection = ({ product, ...props }: Props) => {
  return (
    <div {...props}>
      {/* 성인인증 관련 */}
      <div
        style={{
          background: colors.gray100,
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <img
            src="/assets/adult_only.svg"
            width={16}
            height={16}
            alt="성인인증"
          />
          <Text size="base" weight="semibold">
            주류의 통신판매에 관한 명령 위임 고시
          </Text>
        </div>
        <Spacing height={4} />
        <Text>
          관계법령에 따라 미성년자는 구매할 수 없으며, 19세 이상 성인인증을
          하셔야 구매 가능한 상품입니다.
        </Text>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        <img
          src="/assets/wine_page_header_image.png"
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <Spacing height={9} />
      <Section>
        <Text size="xl" weight="semibold">
          와인 스타일
        </Text>
        <Spacing height={12} />
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexDirection: 'column',
          }}
        >
          <WineTasteLevel
            tasteType="당도"
            tasteLevel={5}
            lowerDescription="드라이한"
            upperDescription="달콤한"
          />
          <WineTasteLevel
            tasteType="산도"
            tasteLevel={3}
            lowerDescription="산미없는"
            upperDescription="새콤한"
          />{' '}
          <WineTasteLevel
            tasteType="바디감"
            tasteLevel={1}
            lowerDescription="가벼운"
            upperDescription="묵직한"
          />{' '}
          <WineTasteLevel
            tasteType="탄닌"
            tasteLevel={2}
            lowerDescription="부드러운"
            upperDescription="떪은"
          />
        </div>
      </Section>
      <Spacing height={9} />
      <SectionDivider />
      <Spacing height={9} />
      <div
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        <img
          src={product.contentImage}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <SectionDivider />
      <Spacing height={9} />
      <Section>
        <Text size="xl" weight="semibold">
          정보
        </Text>
        <Spacing height={12} />
        <WineInfoTable>
          <tr>
            <td>
              <Text size="base" weight="regular" color={colors.gray900}>
                브랜드
              </Text>
            </td>
            <td>
              <Text size="base" weight="semibold" color={colors.gray900}>
                {product.wine.maker}
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text size="base" weight="regular" color={colors.gray900}>
                도수
              </Text>
            </td>
            <td>
              <Text size="base" weight="semibold" color={colors.gray900}>
                {product.wine.minAlcohol === product.wine.maxAlcohol
                  ? `${product.wine.minAlcohol}%`
                  : `${product.wine.minAlcohol}~${product.wine.maxAlcohol}%`}
              </Text>
            </td>{' '}
          </tr>
          <tr>
            <td>
              <Text size="base" weight="regular" color={colors.gray900}>
                음용 온도
              </Text>
            </td>
            <td>
              <Text size="base" weight="semibold" color={colors.gray900}>
                {product.wine.minTemperature}~{product.wine.maxTemperature} ℃
              </Text>
            </td>{' '}
          </tr>
          <tr>
            <td>
              <Text size="base" weight="regular" color={colors.gray900}>
                와인 품종
              </Text>
            </td>
            <td>
              <Text size="base" weight="semibold" color={colors.gray900}>
                {product.wine.style ?? '정보 없음'}
              </Text>
            </td>{' '}
          </tr>
        </WineInfoTable>
      </Section>
      <WineKindDescription product={product} />
      <Spacing height={9} />
      <SnackDescription />
    </div>
  );
};

export default DescriptionSection;

const WineInfoTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 12px;
  tr td:first-child {
    width: 30%;
  }

  tr td:last-child {
    width: 70%;
  }
`;
