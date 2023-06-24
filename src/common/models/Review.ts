export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  content: string;
  images?: string[];
}

const dummyReview0: Review = {
  id: 1,
  name: '이*건',
  rating: 3.5,
  date: '23/01/12',
  content: `가루 삼겹살과 페어링이 좋음. 넓은 의미에서의 와인은 과실을 발효시켜 만든 알코올 함유 음료를
  말하지만 일반적으로 신선한 천연 과일인 순수한 포도만을 원료로 발효시켜
  만든 포도주를 의미넓은 의미에서의 와인은 과실을 발효시켜 만든 알코올
  함유 음료를 말하지만 일반적으로 신선한 천연 과일인 순수한 포도만을
  원료로 발효시켜 만든 포도주를 의미`,
  images: [
    'https://m.soollove.com/web/product/extra/big/202108/3651ff8abe41047b8628707f66127441.jpg',
  ],
};

const dummyReview00: Review = {
  id: 2,
  name: '주*민',
  rating: 3.5,
  date: '23/01/12',
  content: '재즈를 부르는 맛',
  images: [
    'https://cdn.britannica.com/27/125427-050-28FB4BA8/Louis-Armstrong-1953.jpg',
    'https://www.foodandwine.com/thmb/srEHECIjjqIsJfKkhy-oiwcoZ4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine-Guide-Beaujolais-FT-BLOG0722-2000-7f1cac81f5044d3cbfeac708b66c4bea.jpg',
  ],
};

const dummyReview1: Review = {
  id: 3,
  name: '이*수',
  rating: 4.2,
  date: '23/02/18',
  content: '과일 향이 가득하면서도 섬세한 산도가 인상적인 와인',
  images: [
    'https://cdn.imweb.me/upload/S2017101359e025984d346/671b7600c2bf9.jpg',
  ],
};

const dummyReview2: Review = {
  id: 4,
  name: '김*미',
  rating: 3.6,
  date: '23/02/26',
  content: '화려한 색감과 잘 조화된 산미가 마음에 드네요',
  images: [
    'https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2019/12/1-14.png',
  ],
};

const dummyReview3: Review = {
  id: 5,
  name: '박*영',
  rating: 4.8,
  date: '23/03/04',
  content: '진한 베리 향과 부드러운 탄닌이 매력적인 와인입니다',
  images: [],
};

const dummyReview4: Review = {
  id: 6,
  name: '최*린',
  rating: 3.0,
  date: '23/03/15',
  content:
    '가격 대비 만족스러운 품질, 다만 복합적인 향을 원한다면 아쉬울 수 있음',
  images: [],
};

const dummyReview5: Review = {
  id: 7,
  name: '장*희',
  rating: 5.0,
  date: '23/04/01',
  content: '부드럽고 깊은 체리향, 와인 초보자도 쉽게 즐길 수 있을 것 같아요',
  images: [],
};

const dummyReview6: Review = {
  id: 8,
  name: '박*환',
  rating: 2.7,
  date: '23/04/22',
  content: '다소 강한 산미와 향, 보다 깊은 맛을 선호하는 사람들에게 추천합니다',
  images: [],
};

const dummyReview7: Review = {
  id: 9,
  name: '손*원',
  rating: 3.5,
  date: '23/05/08',
  content: '매우 고급스러운 향, 그러나 가격이 다소 비싼 편',
  images: [],
};

const dummyReview8: Review = {
  id: 10,
  name: '김*연',
  rating: 4.3,
  date: '23/05/16',
  content: '첫 입에서 느껴지는 신선함과 끝 맛의 깔끔함이 좋았습니다',
  images: [],
};

const dummyReview9: Review = {
  id: 11,
  name: '조*식',
  rating: 3.8,
  date: '23/06/02',
  content: '풍부한 과일향과 적절한 산도의 밸런스가 좋은 와인',
  images: [],
};

const dummyReview10: Review = {
  id: 12,
  name: '유*진',
  rating: 4.5,
  date: '23/06/09',
  content: '딸기와 체리의 향이 강하면서도 깊고 복합적인 맛이 훌륭해요',
  images: [],
};

export const dummyReviews: Review[] = [
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
