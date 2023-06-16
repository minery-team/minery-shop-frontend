import { Section } from '@/common/components';
import { colors } from '@/common/constants';
import { Spacing, Text } from '@boxfoxs/bds-web';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/common/models';
import star from '../../../public/assets/star.svg';
import wine_review_image from '../../../public/assets/wine_review_image.png';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

// TODO: 리뷰 전달 받은 뒤, constant 처리
const ReviewSection = (props: Props) => {
  const [expanded, setExpanded] = useState(false);
  const displayableReviews = expanded ? dummyReviews : dummyReviews.slice(0, 3);
  return (
    <Section {...props}>
      <Text size="xl" weight="semibold">
        마이너리 사용자들의 평가
      </Text>
      <Spacing height={20} />
      <div
        style={{
          background: colors.gray100,
          padding: '20px',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
          }}
        >
          <Text size="heading4" weight="semibold">
            4.9
          </Text>
          <div>
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
            <Image src={star} width={16} height={16} alt="별" />
          </div>
        </div>
        <Spacing height={6} />
        <Text color={colors.gray600} size="sm" weight="regular">
          마이너리를 통해 상품을 구매한 사용자들이 남긴 리뷰입니다.
        </Text>
      </div>
      <Spacing height={20} />
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '6px',
        }}
      >
        <Text size="xl" weight="semibold">
          상품리뷰
        </Text>
        <Text color={colors.gray500} size="base" weight="medium">
          68개
        </Text>
      </div>

      <div
        style={{
          display: 'flex',
          padding: '20px 0',
          gap: '12px',
        }}
      >
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
        <Image
          src={wine_review_image}
          width={74}
          height={74}
          alt="와인 리뷰 이미지"
        />
      </div>

      {displayableReviews.map((review) => (
        <WineReview key={review.name} review={review} />
      ))}
      {dummyReviews.length > 3 && !expanded && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '6px',
            padding: '16px 0',
            border: `1px solid ${colors.gray300}`,
          }}
          onClick={() => setExpanded(true)}
        >
          <Text color={colors.gray700} size="xl" weight="medium">
            리뷰 더보기
          </Text>
        </div>
      )}
    </Section>
  );
};

export default ReviewSection;

const WineReview = ({ review }: { review: Review }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
        borderTop: `1px solid ${colors.gray100}`,
        padding: '20px 0',
      }}
    >
      <Text color={colors.gray900} size="base" weight="semibold">
        {review.name}
      </Text>
      <div
        style={{
          display: 'flex',
          gap: '4px',
        }}
      >
        <Image src={star} width={16} height={16} alt="별" />
        <Text color={colors.gray900} size="sm" weight="semibold">
          {review.rating}
        </Text>
        <Text color={colors.gray500} size="sm" weight="semibold">
          | {review.date}
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '12px',
        }}
      >
        {review.images?.map((image) => (
          <img
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '6px',
            }}
            key={image}
            src={image}
            alt="와인 리뷰 이미지"
          />
        ))}
      </div>
      <Text>{review.content}</Text>
    </div>
  );
};

interface Review {
  name: string;
  rating: number;
  date: string;
  content: string;
  images?: string[];
}

const dummyReview0: Review = {
  name: '이*건',
  rating: 3.5,
  date: '23/01/12',
  content: `가루 삼겹살과 페어링이 좋음. 넓은 의미에서의 와인은 과실을 발효시켜 만든 알코올 함유 음료를
  말하지만 일반적으로 신선한 천연 과일인 순수한 포도만을 원료로 발효시켜
  만든 포도주를 의미넓은 의미에서의 와인은 과실을 발효시켜 만든 알코올
  함유 음료를 말하지만 일반적으로 신선한 천연 과일인 순수한 포도만을
  원료로 발효시켜 만든 포도주를 의미`,
};

const dummyReview00: Review = {
  name: '주*민',
  rating: 3.5,
  date: '23/01/12',
  content: '재즈를 부르는 맛',
  images: [
    'https://cdn.britannica.com/27/125427-050-28FB4BA8/Louis-Armstrong-1953.jpg',
  ],
};

const dummyReview1: Review = {
  name: '이*수',
  rating: 4.2,
  date: '23/02/18',
  content: '과일 향이 가득하면서도 섬세한 산도가 인상적인 와인',
  images: [],
};

const dummyReview2: Review = {
  name: '김*미',
  rating: 3.6,
  date: '23/02/26',
  content: '화려한 색감과 잘 조화된 산미가 마음에 드네요',
  images: [],
};

const dummyReview3: Review = {
  name: '박*영',
  rating: 4.8,
  date: '23/03/04',
  content: '진한 베리 향과 부드러운 탄닌이 매력적인 와인입니다',
  images: [],
};

const dummyReview4: Review = {
  name: '최*린',
  rating: 3.0,
  date: '23/03/15',
  content:
    '가격 대비 만족스러운 품질, 다만 복합적인 향을 원한다면 아쉬울 수 있음',
  images: [],
};

const dummyReview5: Review = {
  name: '장*희',
  rating: 5.0,
  date: '23/04/01',
  content: '부드럽고 깊은 체리향, 와인 초보자도 쉽게 즐길 수 있을 것 같아요',
  images: [],
};

const dummyReview6: Review = {
  name: '박*환',
  rating: 2.7,
  date: '23/04/22',
  content: '다소 강한 산미와 향, 보다 깊은 맛을 선호하는 사람들에게 추천합니다',
  images: [],
};

const dummyReview7: Review = {
  name: '손*원',
  rating: 3.5,
  date: '23/05/08',
  content: '매우 고급스러운 향, 그러나 가격이 다소 비싼 편',
  images: [],
};

const dummyReview8: Review = {
  name: '김*연',
  rating: 4.3,
  date: '23/05/16',
  content: '첫 입에서 느껴지는 신선함과 끝 맛의 깔끔함이 좋았습니다',
  images: [],
};

const dummyReview9: Review = {
  name: '조*식',
  rating: 3.8,
  date: '23/06/02',
  content: '풍부한 과일향과 적절한 산도의 밸런스가 좋은 와인',
  images: [],
};

const dummyReview10: Review = {
  name: '유*진',
  rating: 4.5,
  date: '23/06/09',
  content: '딸기와 체리의 향이 강하면서도 깊고 복합적인 맛이 훌륭해요',
  images: [],
};

const dummyReviews: Review[] = [
  dummyReview0,
  dummyReview00,
  dummyReview1,
  dummyReview2,
  dummyReview3,
  dummyReview4,
  dummyReview5,
  dummyReview6,
  dummyReview7,
  dummyReview8,
  dummyReview9,
  dummyReview10,
];
