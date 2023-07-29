import { colors } from 'common/constants';
import { Spacing, Text } from '@boxfoxs/bds-web';
import { useMemo } from 'react';

interface Props {
  tasteType: string;
  tasteLevel: number;
  lowerDescription: string;
  upperDescription: string;
}

const WineTasteLevel = ({
  tasteType,
  tasteLevel,
  lowerDescription,
  upperDescription,
}: Props) => {
  const tasteDescription = useMemo(() => {
    switch (tasteLevel) {
      case 1:
        return `많이 ${lowerDescription}`;
      case 2:
        return `약간 ${lowerDescription}`;
      case 3:
        return '보통';
      case 4:
        return `약간 ${upperDescription}`;
      case 5:
        return `많이 ${upperDescription}`;
      default:
        return '';
    }
  }, [lowerDescription, tasteLevel, upperDescription]);

  if (!tasteLevel) {
    return <div />;
  }

  return (
    <div
      style={{
        background: colors.gray100,
        display: 'flex',
        padding: '16px',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '6px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text size="xl" weight="semibold">
          {tasteType}
        </Text>
        <Spacing width={12} />
        <Text
          style={{
            background: colors.primary100,
            color: colors.primary700Default,
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          {tasteDescription}
        </Text>
      </div>
      <div
        style={{
          maxWidth: '50%',
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Text size="caption" weight="regular" color={colors.gray600}>
            {lowerDescription}
          </Text>
          <Text size="caption" weight="regular" color={colors.gray600}>
            {upperDescription}
          </Text>
        </div>
        <Spacing height={6} />
        <div
          style={{
            position: 'relative',
            height: '8px',
          }}
        >
          {/* Base Line */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '8px',
              borderRadius: '2px',
              background: colors.gray300,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: `${(tasteLevel / 5) * 100}%`,
              height: '8px',
              borderRadius: '2px',
              background: colors.primary700Default,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WineTasteLevel;
