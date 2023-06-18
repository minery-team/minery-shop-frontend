import { KR_NAME_BY_WINE_TYPE, WineType } from '../models';

export enum WineSpecies {
  CABERNET_SAUVIGNON,
  PINOT_NOIR,
  SYRAH,
  RIESLING,
  CHENIN_BLANC,
  MOSCATO,
  MALBEC,
  CHARDONNAY,
  SAUVIGNON_BLANC,
  MERLOT,
  TEMPRANILLO,
  SAUGIOVESE,
}

interface WineSpeciesData {
  kindId: string;
  kindNameKo: string;
  kindNameEn: string;
  wineType: WineType;
}

export const WINE_SPECIES_DATA: Record<WineSpecies, WineSpeciesData> = {
  [WineSpecies.CABERNET_SAUVIGNON]: {
    kindId: '6f54fd4e4a20e4984fb0b8a57760dad0',
    kindNameKo: '카베르네 소비뇽',
    kindNameEn: 'Cabernet Sauvignon',
    wineType: WineType.RED,
  },
  [WineSpecies.PINOT_NOIR]: {
    kindId: 'a1136b376698a0bfa32157df3278e4e5',
    kindNameKo: '피노 누아',
    kindNameEn: 'Pinot Noir',
    wineType: WineType.RED,
  },
  [WineSpecies.SYRAH]: {
    kindId: '0a6f38f4a5858fd9f5100395759e1b0b',
    kindNameKo: '시라/쉬라즈',
    kindNameEn: 'Syrah/Shiraz',
    wineType: WineType.RED,
  },
  [WineSpecies.RIESLING]: {
    kindId: 'f360619b585054bea71f7e1bdee06ae1',
    kindNameKo: '리슬링',
    kindNameEn: 'Riesling',
    wineType: WineType.WHITE,
  },
  [WineSpecies.CHENIN_BLANC]: {
    kindId: 'bf5ff48c2852a4f1b4e916ac22bf1d1b',
    kindNameKo: '슈냉 블랑',
    kindNameEn: 'Chenin Blanc',
    wineType: WineType.WHITE,
  },
  [WineSpecies.MOSCATO]: {
    kindId: 'bceb5b3d045ea5fe5c0440208f0b411a',
    kindNameKo: '모스카토',
    kindNameEn: 'Moscato',
    wineType: WineType.WHITE,
  },
  [WineSpecies.MALBEC]: {
    kindId: '6feeaac1fcb9e641b7a959efdb385dbb',
    kindNameKo: '말벡',
    kindNameEn: 'Malbec',
    wineType: WineType.RED,
  },
  [WineSpecies.CHARDONNAY]: {
    kindId: '89f0fbbaa61014f37f7872b8ccc767af',
    kindNameKo: '샤르도네',
    kindNameEn: 'Chardonnay',
    wineType: WineType.WHITE,
  },
  [WineSpecies.SAUVIGNON_BLANC]: {
    kindId: '91028f436b37d3991ad7d3e8878acc8d',
    kindNameKo: '소비뇽 블랑',
    kindNameEn: 'Sauvignon Blanc',
    wineType: WineType.WHITE,
  },
  [WineSpecies.MERLOT]: {
    kindId: '797dadcbcca67efb6dea0f2963be01b1',
    kindNameKo: '메를로',
    kindNameEn: 'Merlot',
    wineType: WineType.RED,
  },
  [WineSpecies.TEMPRANILLO]: {
    kindId: 'e9cec61cc17e921518ba0e54284fe85d',
    kindNameKo: '템프라니요',
    kindNameEn: 'Tempranillo',
    wineType: WineType.RED,
  },
  [WineSpecies.SAUGIOVESE]: {
    kindId: 'ca25e69945c7a32938d5ee80de63ff4a',
    kindNameKo: '산지오베제',
    kindNameEn: 'Sangiovese',
    wineType: WineType.RED,
  },
};

interface WineSpeciesDescription {
  subTitle: string;
  wineType: string;
  detail: string;
  similarNames: string[];
  property: {
    sweatness: number;
    acidity: number;
    body: number;
    tannins: number;
  };
  smells: string;
}

export const DESCRIPTION_BY_WINE_SPECIES: Record<
  WineSpecies,
  WineSpeciesDescription
> = {
  [WineSpecies.CABERNET_SAUVIGNON]: {
    subTitle: '강한 탄닌감과 상반된 부드러운 질감을 가진 대중적인 레드 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.RED],
    detail:
      '프랑스를 비롯한 이탈리아, 에스파냐, 칠레, 미국, 오스트레일리아 등의 전 세계적인 포도주 생산국에서 많이 재배하는 적포도 품종이에요.\n\n환경적응성이 뛰어나 어떤 환경에서도 잘 자라지만 기후가 온화하고 건조하며 공기가 잘 통하는 자갈밭에서 가장 좋은 품질의 포도가 생산된답니다.\n\n껍질의 색이 진하고 두꺼워서 포도주의 빛깔도 진하고 향기로워요.\n카베르네 소비뇽의 풍부한 풍미는 고기, 버섯 음식들과 잘 어울린답니다.',
    similarNames: [
      '카베르네 소비뇽',
      '까르베네 소비뇽',
      '까베르네 소비뇽',
      '카버넷 쏘비뇽',
    ],
    property: {
      sweatness: 2,
      acidity: 2,
      body: 4,
      tannins: 4,
    },
    smells: '블랙 체리, 블랙 커런트, 레드 파프리카, 베이킹 향신료, 삼나무',
  },
  [WineSpecies.PINOT_NOIR]: {
    subTitle: '포도 송이 모양이 솔방울과 닮은 프랑스 부르고뉴 대표 레드 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.RED],
    detail:
      '피노 누아는 프랑스 부르고뉴 지역에 약 2천 년 전 전해졌다고 해요! 대표할 만하죠?\n소나무(Pine tree)와 검정(Noir)을 의미하는 프랑스어에서 유래했어요. 이는 피노 누아의 포도송이 모양이 솔방울과 닮았기 때문이죠.\n\n피노 누아의 재배 및 양조는 까다롭기로 유명해요. 기후에 예민하고 수확량도 적기 때문이죠. 낮은 기온 지역의 포도주는 색이 연하고 묽어요.\n\n반면 높은 기온의 지역에서는 과일잼 맛이 나는 와인을 얻죠.\n피노 누아 와인은 닭고기, 하몽과 잘 어울려요. 미국 오레곤 피노 누아는 연어 혹은 송어와도 찰떡이죠!',
    similarNames: [],
    property: {
      sweatness: 1,
      acidity: 3,
      body: 3,
      tannins: 3,
    },
    smells: '크랜베리, 체리, 라즈베리, 정향, 버섯',
  },
  [WineSpecies.SYRAH]: {
    subTitle: '각 지역에 잘 적응해 풍미가 다양한 두 이름의 레드 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.RED],
    detail:
      "시라의 원산지는 서아시아로 추정되지만. 호주의 다양한 토양과 기후에 성공적으로 적응했어요. 시라의 호주식 이름은 쉬라즈(Shiraz)!\n\n시라/쉬라즈를 딱 잘라서 나눌 순 없지만, 프랑스 론 밸리를 따라 재배되는 '시라'는 견고하고 드라이한 스타일이에요.\n\n반면 남호주 따뜻한 기후의 '쉬라즈'는 잼과 같은 진한 과일 풍미에 다크 초콜릿의 감미로움이 더해지죠.\n\n와인의 세계는 이렇게 두 가지로만 나눌 수 없이 칠레와 아르헨티나, 뉴질랜드, 남아공에서도 시라가 재배되는데요,각 지역 특성을 잘 살린 훌륭한 와인들로 탄생하고 있어요.",
    similarNames: ['시라즈'],
    property: {
      sweatness: 1,
      acidity: 3,
      body: 5,
      tannins: 5,
    },
    smells: '블루베리, 자두, 밀크 초콜릿, 담배, 그린 페퍼콘',
  },
  [WineSpecies.RIESLING]: {
    subTitle:
      '독일 라인 지역 품종으로, 소비뇽 블랑,샤르도네와 함께 3대로 꼽히는 화이트 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.WHITE],
    detail:
      '리슬링은 값비싼 품종으로도 꼽히며 산미가 높은 편이에요. 주로 드라이한 와인, 달콤한 와인, 스파클링 와인으로 만들어진답니다!\n\n리슬링은 독일에서 주로 생산되지만, 오스트리아, 프랑스 알자스, 호주, 뉴질랜드, 미국, 캐나다에서도 재배되고 있어요. 특히 오스트리아와 호주 리슬링은 단맛이 없이 완벽하게 드라이한 편이에요.\n\n함께 페어링 하기 좋은 음식은 아시아 음식, 특히 매운 음식이라고 하니 한식과 즐겨보는건 어때요?',
    similarNames: [],
    property: {
      sweatness: 3,
      acidity: 3,
      body: 1,
      tannins: 1,
    },
    smells: '라임, 풋사과, 밀랍, 자스민, 석유',
  },
  [WineSpecies.CHENIN_BLANC]: {
    subTitle: '남아공에서 많이 재배 되는 프랑스 루아르 밸리의 화이트 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.WHITE],
    detail:
      '슈냉 블랑은 출시 직후엔 청사과 향이 미네랄 풍미와 함께 조화를 이루며 청량하게 느껴지는 편이에요.\n\n산미가 높아 젖산 발효를 거친 경우, 크리미함 질감에 바디감이 더해진 슈냉 블랑이 되기도해요. 숙성이 진행된 슈냉 블랑은 아카시아와 꿀, 브리오쉬, 모과 등의 향이 진하게 난답니다!\n\n드라이한 슈냉 블랑은 식전 주로도 좋고, 해산물이나  닭고기와 잘 어울려요. 약간 단맛이 있는 슈냉 블랑은 크리미한 소스를 곁들인 닭고기 요리를 추천해요! 달콤한 슈냉 블랑은 디저트 혹은 푸아그라, 블루치즈와 함께 먹으면 아주 잘 어울린답니다.',
    similarNames: ['삐노 들 라 루아르(Pineau de la Loi re)', '스틴'],
    property: {
      sweatness: 1,
      acidity: 4,
      body: 1,
      tannins: 1,
    },
    smells: '레몬, 노란 사과, 배, 꿀, 카모마일',
  },
  [WineSpecies.MOSCATO]: {
    subTitle:
      '고대부터 지중해 지역 전반에 분포 되어 있는 향이 강한 화이트 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.WHITE],
    detail:
      '모스카토는 토양적인 머스크 향에서 따온 이름으로, 모스카토 품종으로 생산된 와인은 달고 순하며 강한 향을 자랑해요.\n\n술을 좋아하지 않아도 부담 없이 즐길 수 있으며. 생산지에 따라 다른 양조 기술을 사용하므로 달콤한 와인뿐 아니라 드라이한 테이블 와인, 주정 강화 와인까지 다양한 스타일을 자랑한답니다!\n\n대표적인 이탈리아 포도주 중 하나인 스파클링 와인의 기본 품종이기도 한 모스카토는 브레드 푸딩, 말린 과일, 라임이나 레몬 소르베, 시폰 케이크, 비스코티, 크렘 브륄레와 같은 디저트와 함께 페어링 하는 것을 추천해요!',
    similarNames: ['Muscat', '뮈스까'],
    property: {
      sweatness: 3,
      acidity: 3,
      body: 1,
      tannins: 1,
    },
    smells: '복숭아, 살구, 자두, 멜론, 꽃',
  },
  [WineSpecies.MALBEC]: {
    subTitle: '블랙와인이라 불리는 한국인이 가장 사랑하는 레드 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.RED],
    detail:
      '홈파티에 적절한 와인을 찾고 있다면? 말벡 와인을 추천해요!\n\n말벡은 한국인 입맛에 가장 잘 맞는 레드품종 중 하나인데요. 블랙와인으로 불릴만큼 색이 검고 묵직한 맛이 특징이지만, 풍부한 과실향과 부드러운 질감은 누구에게든 호감으로 느껴질 거에요.\n특히 소고기와 잘 어울리니 홈파티로 딱이겠죠?\n\n최초 생산지는 프랑스이지만, 지금은 말벡=아르헨티나 라는 공식이 생겼어요. 특이하게 아르헨티나에 처음 옮겨진 4월 17일을 ‘말벡 월드 데이’라고 부르는데, 각종 행사가 많으니 저렴한 말벡 와인을 겟해보세요!',
    similarNames: [],
    property: {
      sweatness: 1,
      acidity: 3,
      body: 4,
      tannins: 4,
    },
    smells: '레드 자두, 블루베리, 바닐라, 달콤한 담배, 코코아',
  },
  [WineSpecies.CHARDONNAY]: {
    subTitle: '가성비부터 프리미엄까지, 화이트와인의 여왕 청포도 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.WHITE],
    detail:
      '샤르도네는 가장 대중적인 화이트와인 품종이에요. 저가부터 프리미엄까지 가격대가 다양하고 특유의 튀지 않는 풍미 때문에 호불호가 적은 편이죠.\n\n특히 샤르도네는 어디서든 잘 자라서 다양한 생산지와 스타일에 따라 음식을 골라 먹는 재미가 있어요.\n\n서늘한 기후에서 자란 샤르도네는 새콤하고 사과, 배 같은 가벼운 맛이 난다면, 따뜻한 기후에서 자란 샤르도네는 묵직하고 열대과일이나 꿀 같은 풍미가 더해지죠.\n\n오크향의 농도에 따라서도 굴, 샐러드 같은 가벼운 음식부터 육류, 동남아요리 등 무거운 음식까지 다양한 페어링을 즐겨보세요.',
    similarNames: ['샤도네이'],
    property: {
      sweatness: 1,
      acidity: 4,
      body: 4,
      tannins: 1,
    },
    smells: '노란 사과, 스타푸르트, 파인애플, 버터, 분필',
  },
  [WineSpecies.SAUVIGNON_BLANC]: {
    subTitle: '봄 소풍갈 때 필수템, 싱그럽고 풋풋한 화이트 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.WHITE],
    detail:
      '소비뇽 블랑은 와인을 몰라도 가볍게 즐기기 좋은 품종이에요. 가격도 착해서 1~3만원이면 주변 마트나 편의점에서도 쉽게 구할 수 있죠.\n\n특히 소비뇽 블랑은 가볍고 복잡하지 않은 맛이라서 어떤 음식과도 잘 어울려요. 주로 ‘녹색 식물’ 향이 난다고 표현하는데, 샐러리나 아스파라거스 같은 산뜻하고 싱그러운 느낌을 떠올릴 수 있어요. 드라이하고 깔끔하기 때문에 맵고 짠 배달 음식과도 잘 어울린답니다.\n\n봄 여름철 차갑게 칠링된 소비뇽 블랑과 함께 즐기는 소풍은 어떤가요?',
    similarNames: [],
    property: {
      sweatness: 1,
      acidity: 4,
      body: 2,
      tannins: 1,
    },
    smells: '구즈베리, 그린 멜론, 자몽, 백도, 패션 프루트',
  },
  [WineSpecies.MERLOT]: {
    subTitle: '부드럽고 둥근 느낌, 농축된 풍미를 갖는 프랑스 레드 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.RED],
    detail:
      "메를로는 상당히 광범위한 향과 맛을 내요! 기후와 토양에 따라 가볍고 즙이 많은 피노 누아 같기도 하고, '카베르네 소비뇽'을 능가하는 힘과 무게를 지닌 와인이 되기도 하죠.\n\n음식 매칭에 있어서도 다재다능한 와인이에요! 음식 없이 와인 만으로 즐기기에도 좋고, 한식 요리 중 매운 음식이나 그외 다른 아시아 향신료에도 무난한 조화를 이루어요.\n\n메를로는 1784년 프랑스 보르도 우안 리부르네스에서 최초로 재배되었다고 하는데, 현재는 뉴질랜드 전 지역, 이탈리아 북부, 미국, 캐나다, 호주, 남아공, 칠레 등지에서도 잘 자라요.",
    similarNames: ['포르보', 'Faurveau'],
    property: {
      sweatness: 1,
      acidity: 3,
      body: 3,
      tannins: 2,
    },
    smells: '라즈베리, 블랙 체리, 단 자두, 초콜릿, 삼나무',
  },
  [WineSpecies.TEMPRANILLO]: {
    subTitle: '스페인 리오하 와인을 만드는 주요 레드 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.RED],
    detail:
      "'템프라노'는 '일찍(early)'이라는 스페인어로, 척박한 환경에서도 잘 자라며 수확이 빠른 품종의 특징을 따서 이름을 지었다고 해요.\n\n템프라니요는 스트로베리, 레드커런트, 정향 등의 붉은 과일 향과 흙냄새, 가죽 같은 향도 가지고 있어요. 향이 그다지 우수하지 않기 때문에, 향이 좋은 ‘그르나쉬’와 주로 블렌딩된답니다!\n\n카베르네 소비뇽과 피노 누아의 중간적인 맛을 내는데, 숙성된 경우 피노 누아와 상당히 비슷한 모습을 보여요! 주로 가금류, 훈연한 고기 요리, 육류 가공품인 초리조, 구운 고기 요리와 잘 어울린답니다.",
    similarNames: ['틴토피노', 'Tinto Fino', '템프라니오'],
    property: {
      sweatness: 1,
      acidity: 3,
      body: 4,
      tannins: 4,
    },
    smells: '체리, 말린 무화과, 삼나무, 담배, 딜',
  },
  [WineSpecies.SAUGIOVESE]: {
    subTitle: '음식과 즐기기에 아주 좋은, 산미 높은 이탈리아 레드 품종',
    wineType: KR_NAME_BY_WINE_TYPE[WineType.RED],
    detail:
      '산지오베재는 ‘제우스의 피’라는 라틴어에서 유래했어요. 수많은 변종이 존재하는 데, 그 중 ‘산지오베제 그로쏘(Sangiovese Grosso)’가 가장 유명해요!\n\n일반적으로 신선한 딸기, 체리 향에 약간의 스파이스 향이 묻어나며, 흙내음과 찻잎 향을 느낄 수 있어요. 자연적으로 강한 산도, 중상 정도의 높은 타닌감을 가지고 있죠!\n\n특히, 음식과 즐기기에 아주 좋은 와인이에요! 이탈리아 음식, 피자, 파스타 외에도 구운 닭고기, 바질, 타임, 세이지 등과 잘 어울려요. 묵직한 산지오베제는 두툼한 스테이크와 함께해도 좋아요.',
    similarNames: [],
    property: {
      sweatness: 1,
      acidity: 3,
      body: 4,
      tannins: 3,
    },
    smells: '레드 커런트, 구운 토마토, 라즈베리, 포푸리, 토기',
  },
};
