import { Spacing, Text } from '@boxfoxs/bds-web';
import { colors } from 'common/constants';
import {
  DESCRIPTION_BY_WINE_SPECIES,
  WINE_SPECIES_DATA,
  WineSpecies,
} from 'common/constants/wineSpecies';
import { Product } from 'common/models';
import { useMemo, useState } from 'react';

interface Props {
  product: Product;
}

const WineKindDescription = ({ product }: Props) => {
  const [rawWineKind] = product.wine.kinds;
  const wineSpecies = useMemo(() => {
    if (!rawWineKind) return null;
    return extractWineSpecies(rawWineKind.name);
  }, [rawWineKind?.name]);
  const wineSpeciesData = useMemo(() => {
    if (wineSpecies === null) return null;
    return WINE_SPECIES_DATA[wineSpecies];
  }, [wineSpecies]);
  const wineSpeciesDescription = useMemo(() => {
    if (wineSpecies === null) return null;
    return DESCRIPTION_BY_WINE_SPECIES[wineSpecies];
  }, [wineSpecies]);

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  if (!wineSpeciesData || !wineSpeciesDescription) return null

  return (
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
          justifyContent: 'space-between',
          width: '100%',
        }}
        onClick={toggleExpanded}
        onKeyUp={toggleExpanded}
        role="button"
        tabIndex={0}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src="/assets/wine_pictogram.svg"
            width={48}
            height={48}
            alt="와인 픽토그램"
          />
          <div>
            <Text color={colors.gray500} size="sm" weight="regular">
              {wineSpeciesData.kindNameEn}
            </Text>
            <Text color={colors.gray700} size="xl" weight="semibold">
              {wineSpeciesData.kindNameKo}이란?
            </Text>
          </div>
        </div>
        <img
          src="/assets/chevron_up_gray.svg"
          width={24}
          height={24}
          alt="배송비 안내 자세히 보기"
          style={{
            transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </div>

      {expanded && (
        <div
          style={{
            marginTop: '20px',
            borderTop: `1px solid ${colors.gray200}`,
            paddingTop: '20px',
          }}
        >
          <Text color={colors.gray700} size="lg" weight="semibold">
            {wineSpeciesDescription.subTitle}
          </Text>
          <Spacing height={16} />
          <Text color={colors.gray700} size="base" weight="regular">
            {wineSpeciesDescription.detail}
          </Text>
          <Spacing height={12} />
          <Text color={colors.gray700} size="base" weight="semibold">
            주로 이런 향이 나요
          </Text>
          <Text color={colors.gray700} size="base" weight="regular">
            {wineSpeciesDescription.smells}
          </Text>
        </div>
      )}
    </div>
  );
};

export default WineKindDescription;

function extractWineSpecies(kindName: string) {
  const targetSpecies = kindName.replaceAll(' ', '').toLowerCase();

  // TODO: Speice 표시 정책 결정 필요
  // Client에서 매핑하는 것 보단, BE에서 모든 정보를 내려주면 어떨지
  switch (targetSpecies) {
    case '카베르네소비뇽':
    case 'cabernetsauvignon':
    case '카베르네소비뇽(cabernetsauvignon)':
      return WineSpecies.CABERNET_SAUVIGNON;
    case '피노누아':
    case 'pinotnoir':
    case '피노누아(pinotnoir)':
      return WineSpecies.PINOT_NOIR;
    case '시라/쉬라즈':
    case 'syrah/shiraz':
    case '시라/쉬라즈(syrah/shiraz)':
      return WineSpecies.SYRAH;
    case '리슬링':
    case 'riesling':
    case '리슬링(riesling)':
      return WineSpecies.RIESLING;
    case '슈냉블랑':
    case 'cheninblanc':
    case '슈냉블랑(cheninblanc)':
      return WineSpecies.CHENIN_BLANC;
    case '모스카토':
    case 'moscato':
    case '모스카토(moscato)':
      return WineSpecies.MOSCATO;
    case '말벡':
    case 'malbec':
    case '말벡(malbec)':
      return WineSpecies.MALBEC;
    case '샤르도네':
    case 'chardonnay':
    case '샤르도네(chardonnay)':
      return WineSpecies.CHARDONNAY;
    case '소비뇽블랑':
    case 'sauvignonblanc':
    case '소비뇽블랑(sauvignonblanc)':
      return WineSpecies.SAUVIGNON_BLANC;
    case '메를로':
    case 'merlot':
    case '메를로(merlot)':
      return WineSpecies.MERLOT;
    case '템프라니요':
    case 'tempranillo':
    case '템프라니요(tempranillo)':
      return WineSpecies.TEMPRANILLO;
    case '산지오베제':
    case 'sangiovese':
    case '산지오베제(sangiovese)':
      return WineSpecies.SAUGIOVESE;
  }

  return null
}
