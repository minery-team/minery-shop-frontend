import { Section } from 'common/components';
import { Product } from 'common/models';
import { Spacing, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const WineLabelSection = ({ product, ...props }: Props) => {
  return (
    <Section {...props}>
      <Text size="xl" weight="semibold">
        와인 라벨
      </Text>
      <Spacing height={12} />
      <LabelContainer>
        {product.labelImages.map((image) => (
          <img
            style={{
              width: '100%',
            }}
            src={image}
            alt="와인 라벨 이미지"
          />
        ))}
      </LabelContainer>
    </Section>
  );
};

const LabelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
`;

export default WineLabelSection;
