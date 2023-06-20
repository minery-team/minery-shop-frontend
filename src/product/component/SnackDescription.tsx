import { Spacing, Text } from '@boxfoxs/bds-web';
import { Section } from 'common/components';
import { colors } from 'common/constants';

const SnackDescription = () => {
  return (
    <>
      <Section>
        <Text size="xl" weight="semibold">
          스낵은 이렇게 만나요!
        </Text>
        <Spacing height={12} />
      </Section>
      <div
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        <img
          src="/assets/snack_example.png"
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <Section>
        <Text color={colors.gray900} size="base" weight="regular">
          구성 : 견과 5종(땅콩, 아몬드, 호두, 크랜베리, 캐슈넛) 5g, 올리브 5g,
          땅콩버터 건빵 3g
        </Text>
      </Section>
    </>
  );
};

export default SnackDescription;
