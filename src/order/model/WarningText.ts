export type WarningTextType = {
  prefix: string;
  suffix: string;
  suffixContent?: WarningTextType[];
};

interface WarningTextItem {
  category: string;
  content: { title: string; content?: WarningTextType[]; footer?: string }[];
}

export const WARNING_TEXT: WarningTextItem[] = [
  {
    category: '이용정책 및 배달상품 주의사항',
    content: [
      {
        title: '(주)마이너리 이용정책',
        content: [
          {
            prefix: '1.',
            suffix:
              '(주)마이너리는 통신판매수단제공자이며, 각 제휴업체가 판매 주체입니다.',
          },
          {
            prefix: '2.',
            suffix:
              '국내 주류법 상 와인은 음식과 함께 세트로만 온라인 배송 주문이 가능합니다. 마이너리는 합리적인 가격을 위해 맛있는 스낵 구성을 함께 제공합니다.',
          },
          {
            prefix: '3.',
            suffix: '미성년자는 구매 및 수령이 불가합니다.',
          },
          {
            prefix: '4.',
            suffix:
              '본인인증 및 성인인증이 완료된 사용자만 구매자 본인만 주문 및 수령이 가능합니다.',
          },
          {
            prefix: '5.',
            suffix:
              '와인은 상품 가치 하락으로 인해 재판매가 불가능하기 때문에 단순 변심에 의한 교환/반품/취소는 불가합니다.',
          },
          {
            prefix: '6.',
            suffix:
              '불량/파손된 와인을 수령하셨을 경우, 상품 수령 후 3일 이내에 [1:1문의하기]로 환불이나 재발송을 신청할 수 있습니다. 수령 후 3일이 지난 상품은 환불이 불가합니다.',
          },
          {
            prefix: '7.',
            suffix:
              '1:1 문의 시 상품의 포장을 뜯지 말고 그대로 보관한 채 사진을 촬영하여 문의해주세요. 개봉 또는 사용 흔적이 있는 경우에는 교환 및 반품이 불가능합니다.',
          },
          {
            prefix: '8.',
            suffix:
              '배송 출발 이후 주문 취소 시 반품 배송비 5,000원을 제외한 금액을 환불이 가능합니다.',
          },
          {
            prefix: '9.',
            suffix:
              '와인을 직접 수령할 수 없거나 고객의 부재 등으로 인한 택배사고 시 교환 및 반품이 불가합니다.',
          },
          {
            prefix: '10.',
            suffix:
              '수취인의 주소나 연락처를 잘못 기재하여 발생한 배송사고는 교환 및 반품이 불가합니다.',
          },
          {
            prefix: '11.',
            suffix:
              '고객의 귀책사유로 인해 상품과 구성품이 훼손된 경우 교환 및 반품이 불가합니다.',
          },
          {
            prefix: '12.',
            suffix:
              '미성년자가 와인을 구매 및 수령한 경우, 미성년자 본인 또는 법정대리인이 구매를 취소할 수 있습니다.',
          },
          {
            prefix: '13.',
            suffix:
              '일시적인 품절 등의 사유로 주문이 불가한 상품은 부분 취소될 수 있습니다. 결제한 금액은 자동으로 환불됩니다.',
          },
        ],
      },
      {
        title: '(주)마이너리 배달상품 주의사항 동의',
        content: [
          {
            prefix: '1.',
            suffix:
              '고객님의 주문에 따라 개별적으로 생산 또는 조리된 배달음식은 업주에게 회복할 수 없는 손해가 발생하므로 단순 변심에 의한 청약철회는 할 수 없습니다.',
          },
          {
            prefix: '2.',
            suffix:
              '배달상품의 주문계약은 구매조건(상품의 내용 및 종류, 가격, 결제수단, 포인트/할인쿠폰 적용여부 등)에 동의하고 주문함으로써 성립합니다. 구매조건에 대한 동의는 고객님께서 과실없이 배달상품을 주문했다는 입증자료로 활용되며, 주문취소 또는 보상이 어려울 수 있으니, 사전에 면밀한 확인 부탁드립니다. ',
          },
          {
            prefix: '3.',
            suffix:
              '고객님은 다음 각호의 귀책사유로 조리된 음식을 수령하지 못하더라도 고객님은 대금지급의무 또는 손해배상금을 부담합니다.',
            suffixContent: [
              {
                prefix: 'a. ',
                suffix:
                  '배달주소지를 고객님의 과실로 잘못 등록하거나 작성한 경우 단, 배달주소지 오류는 재배달 하지 않습니다. ',
              },
              {
                prefix: 'b. ',
                suffix:
                  '마이너리 앱 내에 등록하여 고객님이 주문한 조리된 음식 등 상품 이외에 다음 각호과 같이 회사에서 허용(등록)하지 않는 상품 또는 용역행위를 요청한 경우 이행할 수 없는 주문상품으로 판단하여 강제 주문 취소가 진행 될 수 있습니다.',
                suffixContent: [
                  {
                    prefix: 'ⅰ.',
                    suffix: '담배 구매 요청',
                  },
                  {
                    prefix: 'ⅱ.',
                    suffix: '마이너리 앱 내에 등록되지 않은 주류 구매 요청',
                  },
                  {
                    prefix: 'ⅲ.',
                    suffix: '기타 용역행위의 요청(세탁물 가져오기, 심부름 등)',
                  },
                ],
              },
              {
                prefix: 'c.',
                suffix:
                  '마이너리 앱 내 등록된 메뉴 외 요청사항에 고객님께서 작성한 추가메뉴는 배당상품을 수령하는 시점에 추가메뉴에 대한 상품 배달하지 않으며, 해당 상품의 현장결제를 금지합니다. ',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: '개인정보 제3자 제공',
    content: [
      {
        title:
          '개인정보 제3자 제공\n(주)마이너리는 원활한 서비스 제공을 위해 아래와 같이 제3자에게 개인정보를 제공합니다.',
        content: [
          {
            prefix: '1.',
            suffix: '제공받는자:(주)도남FNF',
          },
          {
            prefix: '2.',
            suffix:
              '제공받는자의 개인정보 이용 목적 : 주문 음식 제공 서비스 및 배달 서비스 제공(서비스 계약 이행, 수령인 확인, 배달정보 확인, 주문고나리, 교환/반품/취소 처리, 문의 및 상담)',
          },
          {
            prefix: '3.',
            suffix:
              '제공하는 개인정보 항목 : 수령인 정보(주소, 휴대전화번호 또는 안심번호), (환경설정에서 주문횟수 제공을 설정한 경우)주문횟수',
          },
          {
            prefix: '4.',
            suffix: '제공받는자의 보유기간 : 서비스 제공 완료 후 파기',
          },
        ],
        footer:
          '개인정보 제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 서비스 이용이 제한될 수 있습니다.',
      },
    ],
  },
  // {
  //   category: '업무의 개인정보 처리 위탁안내',
  //   content: [
  //     {
  //       title:
  //         '업주는 주문 접수 건에 따라 업주가 지정한 배달대행사에 배달 업무를 위탁합니다.',
  //     },
  //   ],
  // },
];
