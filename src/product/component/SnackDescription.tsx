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
          src="https://static.minery.co.kr/market/images/snack/%E1%84%89%E1%85%B3%E1%84%82%E1%85%A2%E1%86%A8%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A6.jpg"
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <Section>
        <Text color={colors.gray900} size="base" weight="regular">
          구성 : 피넛버터 프레첼 35g, 트위스츠 프레첼 30g
          <br />
          <br />* 스낵 구성은 재고에 따라 달라질 수 있습니다.
        </Text>
      </Section>
    </>
  );
};

export default SnackDescription;
