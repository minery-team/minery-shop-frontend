"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 96369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ SHIPPING_PRICE),
/* harmony export */   "M": () => (/* binding */ FREE_SHIPPING_PRICE)
/* harmony export */ });
const FREE_SHIPPING_PRICE = 70000;
const SHIPPING_PRICE = 3500;


/***/ }),

/***/ 64208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* reexport */ withAuth)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/next/dist/index.js
var dist = __webpack_require__(23399);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/react/dist/index.js
var react_dist = __webpack_require__(56263);
// EXTERNAL MODULE: ./src/common/hooks/useUser.ts
var useUser = __webpack_require__(26808);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
var router_default = /*#__PURE__*/__webpack_require__.n(router);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/common/hocs/withAuth.tsx






function withAuth(Component) {
    return (0,react_dist.withSuspense)(function(props) {
        const [user] = (0,useUser/* useUser */.a)({
            suspense: true
        });
        if ((0,dist.isServer)()) {
            return null;
        }
        if (user == null) {
            router_default().replace(`/auth${dist.QS.create({
                redirectUrl: window.location.href,
                back: true
            })}`);
            return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(emotion_react_jsx_runtime_esm/* Fragment */.HY, {});
        }
        return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Component, {
            ...props
        });
    });
}

;// CONCATENATED MODULE: ./src/common/hocs/index.ts



/***/ }),

/***/ 14005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ DeliveryRequest),
  "EY": () => (/* reexport */ OrderItemsSection),
  "BE": () => (/* reexport */ PaymentButton),
  "ef": () => (/* reexport */ PaymentInfo),
  "ao": () => (/* reexport */ UserInfo),
  "v3": () => (/* reexport */ Warning)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/bds-web/dist/index.js
var dist = __webpack_require__(40756);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/utils/dist/index.js
var utils_dist = __webpack_require__(90665);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.esm.js
var emotion_styled_esm = __webpack_require__(56361);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/common/components/index.ts + 27 modules
var components = __webpack_require__(94312);
// EXTERNAL MODULE: ./src/common/constants/index.ts + 2 modules
var constants = __webpack_require__(16439);
// EXTERNAL MODULE: ./node_modules/@tosspayments/sdk/dist/tosspayments.cjs.js
var tosspayments_cjs = __webpack_require__(85685);
;// CONCATENATED MODULE: ./src/common/constants/toss.ts
const TOSS_PAYMENT_KEY = "live_ck_7DLJOpm5QrlJ6EBGWzN3PNdxbWnY";

;// CONCATENATED MODULE: ./src/common/utils/requestTossPay.ts


function getPayment() {
    return window.payment;
}
async function requestPay(orderId, orderName, name, cost, options) {
    const tossPayments = await (0,tosspayments_cjs/* loadTossPayments */.nT)(TOSS_PAYMENT_KEY);
    window.payment = tossPayments;
    await tossPayments.requestPayment("카드", {
        amount: cost,
        orderId,
        orderName,
        customerName: name,
        successUrl: (options === null || options === void 0 ? void 0 : options.successUrl) ?? window.location.href,
        failUrl: window.location.href
    });
}

;// CONCATENATED MODULE: ./src/order/components/CheckSeflRecevingPopUp.tsx






function CheckSelfRecevingPopUp({ onClose  }) {
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* ConfirmModal */.sm, {
        type: "confirm",
        content: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(TextWrapper, {
            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(StyledText, {
                size: "lg",
                weight: "semibold",
                color: constants/* colors.gray900 */.O9.gray900,
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
                    children: "본인 수령 여부를 체크해주세요"
                })
            })
        }),
        confirmText: "확인",
        onConfirm: onClose
    });
}
function useCheckSelfReceving() {
    const { open , close  } = (0,dist/* usePopup */.BF)("check-self-receving-popup");
    return (0,react.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(CheckSelfRecevingPopUp, {
                onClose: close
            }),
            onClose: close
        });
    }, [
        open,
        close
    ]);
}
const TextWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .highlight {
    color: ${constants/* colors.primary700Default */.O9.primary700Default};
  }
`;
const StyledText = (0,emotion_styled_esm/* default */.Z)(dist/* Text */.xv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

;// CONCATENATED MODULE: ./src/order/components/EnrollAddressPopUp.tsx






function EnrollAddressPopUp({ onClose  }) {
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* ConfirmModal */.sm, {
        type: "confirm",
        content: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(EnrollAddressPopUp_TextWrapper, {
            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(EnrollAddressPopUp_StyledText, {
                size: "lg",
                weight: "semibold",
                color: constants/* colors.gray900 */.O9.gray900,
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
                    children: "배송지 정보를 등록해주세요"
                })
            })
        }),
        confirmText: "확인",
        onConfirm: onClose
    });
}
function useEnrollAddress() {
    const { open , close  } = (0,dist/* usePopup */.BF)("enroll-address-popup");
    return (0,react.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(EnrollAddressPopUp, {
                onClose: close
            }),
            onClose: close
        });
    }, [
        open,
        close
    ]);
}
const EnrollAddressPopUp_TextWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .highlight {
    color: ${constants/* colors.primary700Default */.O9.primary700Default};
  }
`;
const EnrollAddressPopUp_StyledText = (0,emotion_styled_esm/* default */.Z)(dist/* Text */.xv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// EXTERNAL MODULE: ./src/cart/model/Price.ts
var Price = __webpack_require__(96369);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/next/dist/index.js
var next_dist = __webpack_require__(23399);
;// CONCATENATED MODULE: ./src/order/components/PaymentButton.tsx













function PaymentButton({ userInfo , orderList , isCheckSelfReceving , address  }) {
    const openCheckSelfReceving = useCheckSelfReceving();
    const openEnrollAddress = useEnrollAddress();
    const totalPrice = (0,react.useMemo)(()=>{
        const price = (0,lodash.sumBy)(orderList, (item)=>item.amount * item.product.price);
        const originalPrice = (0,lodash.sumBy)(orderList, (item)=>item.amount * item.product.originalPrice);
        if (Price/* FREE_SHIPPING_PRICE */.M - originalPrice > 0) return price + Price/* SHIPPING_PRICE */.$;
        return price;
    }, [
        orderList
    ]);
    const submit = async ()=>{
        if (!address) openEnrollAddress();
        else if (!isCheckSelfReceving) openCheckSelfReceving();
        else {
            const { protocol , host  } = window.location;
            const orderId = `minery_${Date.now()}_${orderList.length}`;
            const params = {
                ...next_dist.QS.getData(),
                addressId: address.id
            };
            await requestPay(`${orderId}`, `${orderList[0].product.name} 외 ${orderList.length - 1}개`, `${userInfo.name}`, totalPrice, {
                successUrl: `${protocol}//${host}/process-payment${next_dist.QS.create(params)}`
            });
        }
    };
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(Wrapper, {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                height: 12
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                size: "base",
                weight: "regular",
                color: constants/* colors.gray600 */.O9.gray600,
                children: "이용약관을 확인하였으며 결제에 동의합니다."
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                height: 100
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(components/* FixedBottomCTA */.Hp, {
                onClick: submit,
                children: [
                    (0,utils_dist.commaizeNumber)(totalPrice),
                    "원 결제하기"
                ]
            })
        ]
    });
}
const Wrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

;// CONCATENATED MODULE: ./src/order/components/PaymentInfo.tsx








function PaymentInfo({ orderList  }) {
    const totalPrice = (0,react.useMemo)(()=>{
        return (0,lodash.sumBy)(orderList, (item)=>item.amount * item.product.price);
    }, [
        orderList
    ]);
    const originalTotalPrice = (0,react.useMemo)(()=>{
        return (0,lodash.sumBy)(orderList, (item)=>item.amount * item.product.originalPrice || item.amount * item.product.price);
    }, [
        orderList
    ]);
    const shippingPrice = (0,react.useMemo)(()=>{
        if (Price/* FREE_SHIPPING_PRICE */.M - originalTotalPrice > 0) return Price/* SHIPPING_PRICE */.$;
        return 0;
    }, []);
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(PaymentInfo_Wrapper, {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                size: "lg",
                weight: "semibold",
                color: constants/* colors.gray900 */.O9.gray900,
                children: "결제 정보"
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Divider */.iz, {
                width: "100%",
                height: 1,
                color: constants/* colors.gray100 */.O9.gray100
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(PaymentInfo_TextWrapper, {
                children: [
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "base",
                        weight: "regular",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: "상품금액"
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "base",
                        weight: "medium",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: `${(0,utils_dist.commaizeNumber)(originalTotalPrice)}원`
                    })
                ]
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(PaymentInfo_TextWrapper, {
                children: [
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "base",
                        weight: "regular",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: "상품할인금액"
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "base",
                        weight: "medium",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: `${(0,utils_dist.commaizeNumber)(totalPrice - originalTotalPrice)}원`
                    })
                ]
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(PaymentInfo_TextWrapper, {
                children: [
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ShipmentTextWrapper, {
                        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                            size: "base",
                            weight: "regular",
                            color: constants/* colors.gray900 */.O9.gray900,
                            children: "배송비"
                        })
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "base",
                        weight: "medium",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: `+${(0,utils_dist.commaizeNumber)(shippingPrice)}원`
                    })
                ]
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(PaymentInfo_TextWrapper, {
                children: [
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "lg",
                        weight: "semibold",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: "결제 예정금액"
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "xl",
                        weight: "semibold",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: `${(0,utils_dist.commaizeNumber)(totalPrice + shippingPrice)}원`
                    })
                ]
            })
        ]
    });
}
const PaymentInfo_Wrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 24px 20px;
  gap: 16px;
`;
const PaymentInfo_TextWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: space-between;
`;
const ShipmentTextWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  align-items: center;
`;

;// CONCATENATED MODULE: ./src/order/components/UserInfo.tsx





function UserInfo({ userInfo , setIsCheckSelfReceving  }) {
    const { 0: isChecked , 1: setIsChecked  } = (0,react.useState)(true);
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(UserInfo_Wrapper, {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                size: "lg",
                weight: "semibold",
                color: constants/* colors.gray900 */.O9.gray900,
                children: "구매자 정보"
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(InfoWrapper, {
                children: [
                    /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(UserInfoWrapper, {
                        children: [
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                                size: "base",
                                weight: "medium",
                                color: constants/* colors.gray900 */.O9.gray900,
                                children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.name
                            }),
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                                size: "base",
                                weight: "medium",
                                color: constants/* colors.gray900 */.O9.gray900,
                                children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.phone
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(DirectlyReceving, {
                        htmlFor: "check",
                        children: [
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("input", {
                                id: "check",
                                type: "checkbox",
                                checked: isChecked,
                                onChange: ()=>{
                                    setIsChecked(!isChecked);
                                    setIsCheckSelfReceving(!isChecked);
                                },
                                style: {
                                    display: "none"
                                }
                            }),
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                                src: isChecked ? "/assets/checkbox_on.svg" : "/assets/checkbox_off.svg",
                                width: 16,
                                height: 16,
                                alt: "checkbox"
                            }),
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                                size: "base",
                                weight: "medium",
                                color: constants/* colors.gray900 */.O9.gray900,
                                children: "본인이 수령해요"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const UserInfo_Wrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
const InfoWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const UserInfoWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  gap: 8px;
`;
const DirectlyReceving = emotion_styled_esm/* default.label */.Z.label`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
`;

;// CONCATENATED MODULE: ./src/order/model/WarningText.ts
const WARNING_TEXT = [
    {
        category: "이용정책 및 배달상품 주의사항",
        content: [
            {
                title: "(주)마이너리 이용정책",
                content: [
                    {
                        prefix: "1.",
                        suffix: "(주)마이너리는 통신판매수단제공자이며, 각 제휴업체가 판매 주체입니다."
                    },
                    {
                        prefix: "2.",
                        suffix: "국내 주류법 상 와인은 음식과 함께 세트로만 온라인 배송 주문이 가능합니다. 마이너리는 합리적인 가격을 위해 맛있는 스낵 구성을 함께 제공합니다."
                    },
                    {
                        prefix: "3.",
                        suffix: "미성년자는 구매 및 수령이 불가합니다."
                    },
                    {
                        prefix: "4.",
                        suffix: "본인인증 및 성인인증이 완료된 사용자만 구매자 본인만 주문 및 수령이 가능합니다."
                    },
                    {
                        prefix: "5.",
                        suffix: "와인은 상품 가치 하락으로 인해 재판매가 불가능하기 때문에 단순 변심에 의한 교환/반품/취소는 불가합니다."
                    },
                    {
                        prefix: "6.",
                        suffix: "불량/파손된 와인을 수령하셨을 경우, 상품 수령 후 3일 이내에 [1:1문의하기]로 환불이나 재발송을 신청할 수 있습니다. 수령 후 3일이 지난 상품은 환불이 불가합니다."
                    },
                    {
                        prefix: "7.",
                        suffix: "1:1 문의 시 상품의 포장을 뜯지 말고 그대로 보관한 채 사진을 촬영하여 문의해주세요. 개봉 또는 사용 흔적이 있는 경우에는 교환 및 반품이 불가능합니다."
                    },
                    {
                        prefix: "8.",
                        suffix: "배송 출발 이후 주문 취소 시 반품 배송비 5,000원을 제외한 금액을 환불이 가능합니다."
                    },
                    {
                        prefix: "9.",
                        suffix: "와인을 직접 수령할 수 없거나 고객의 부재 등으로 인한 택배사고 시 교환 및 반품이 불가합니다."
                    },
                    {
                        prefix: "10.",
                        suffix: "수취인의 주소나 연락처를 잘못 기재하여 발생한 배송사고는 교환 및 반품이 불가합니다."
                    },
                    {
                        prefix: "11.",
                        suffix: "고객의 귀책사유로 인해 상품과 구성품이 훼손된 경우 교환 및 반품이 불가합니다."
                    },
                    {
                        prefix: "12.",
                        suffix: "미성년자가 와인을 구매 및 수령한 경우, 미성년자 본인 또는 법정대리인이 구매를 취소할 수 있습니다."
                    },
                    {
                        prefix: "13.",
                        suffix: "일시적인 품절 등의 사유로 주문이 불가한 상품은 부분 취소될 수 있습니다. 결제한 금액은 자동으로 환불됩니다."
                    }, 
                ]
            },
            {
                title: "(주)마이너리 배달상품 주의사항 동의",
                content: [
                    {
                        prefix: "1.",
                        suffix: "고객님의 주문에 따라 개별적으로 생산 또는 조리된 배달음식은 업주에게 회복할 수 없는 손해가 발생하므로 단순 변심에 의한 청약철회는 할 수 없습니다."
                    },
                    {
                        prefix: "2.",
                        suffix: "배달상품의 주문계약은 구매조건(상품의 내용 및 종류, 가격, 결제수단, 포인트/할인쿠폰 적용여부 등)에 동의하고 주문함으로써 성립합니다. 구매조건에 대한 동의는 고객님께서 과실없이 배달상품을 주문했다는 입증자료로 활용되며, 주문취소 또는 보상이 어려울 수 있으니, 사전에 면밀한 확인 부탁드립니다. "
                    },
                    {
                        prefix: "3.",
                        suffix: "고객님은 다음 각호의 귀책사유로 조리된 음식을 수령하지 못하더라도 고객님은 대금지급의무 또는 손해배상금을 부담합니다.",
                        suffixContent: [
                            {
                                prefix: "a. ",
                                suffix: "배달주소지를 고객님의 과실로 잘못 등록하거나 작성한 경우 단, 배달주소지 오류는 재배달 하지 않습니다. "
                            },
                            {
                                prefix: "b. ",
                                suffix: "마이너리 앱 내에 등록하여 고객님이 주문한 조리된 음식 등 상품 이외에 다음 각호과 같이 회사에서 허용(등록)하지 않는 상품 또는 용역행위를 요청한 경우 이행할 수 없는 주문상품으로 판단하여 강제 주문 취소가 진행 될 수 있습니다.",
                                suffixContent: [
                                    {
                                        prefix: "ⅰ.",
                                        suffix: "담배 구매 요청"
                                    },
                                    {
                                        prefix: "ⅱ.",
                                        suffix: "마이너리 앱 내에 등록되지 않은 주류 구매 요청"
                                    },
                                    {
                                        prefix: "ⅲ.",
                                        suffix: "기타 용역행위의 요청(세탁물 가져오기, 심부름 등)"
                                    }, 
                                ]
                            },
                            {
                                prefix: "c.",
                                suffix: "마이너리 앱 내 등록된 메뉴 외 요청사항에 고객님께서 작성한 추가메뉴는 배당상품을 수령하는 시점에 추가메뉴에 대한 상품 배달하지 않으며, 해당 상품의 현장결제를 금지합니다. "
                            }, 
                        ]
                    }, 
                ]
            }, 
        ]
    },
    {
        category: "개인정보 제3자 제공",
        content: [
            {
                title: "개인정보 제3자 제공\n(주)마이너리는 원활한 서비스 제공을 위해 아래와 같이 제3자에게 개인정보를 제공합니다.",
                content: [
                    {
                        prefix: "1.",
                        suffix: "제공받는자:(주)도남FNF"
                    },
                    {
                        prefix: "2.",
                        suffix: "제공받는자의 개인정보 이용 목적 : 주문 음식 제공 서비스 및 배달 서비스 제공(서비스 계약 이행, 수령인 확인, 배달정보 확인, 주문고나리, 교환/반품/취소 처리, 문의 및 상담)"
                    },
                    {
                        prefix: "3.",
                        suffix: "제공하는 개인정보 항목 : 수령인 정보(주소, 휴대전화번호 또는 안심번호), (환경설정에서 주문횟수 제공을 설정한 경우)주문횟수"
                    },
                    {
                        prefix: "4.",
                        suffix: "제공받는자의 보유기간 : 서비스 제공 완료 후 파기"
                    }, 
                ],
                footer: "개인정보 제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 서비스 이용이 제한될 수 있습니다."
            }, 
        ]
    },
    {
        category: "업무의 개인정보 처리 위탁안내",
        content: [
            {
                title: "업주는 주문 접수 건에 따라 업주가 지정한 배달대행사에 배달 업무를 위탁합니다."
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./src/order/components/Warning.tsx






function Warning() {
    const { 0: isShowWaring , 1: setIsShowWarning  } = (0,react.useState)(Array(WARNING_TEXT.length).fill(false));
    const textIndent = (prefixText, suffixText, suffixContent)=>{
        return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(TextIndent, {
            children: [
                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                    size: "sm",
                    weight: "regular",
                    color: constants/* colors.gray500 */.O9.gray500,
                    style: {
                        minWidth: "15px"
                    },
                    children: prefixText
                }),
                /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(dist/* Text */.xv, {
                    size: "sm",
                    weight: "regular",
                    color: constants/* colors.gray500 */.O9.gray500,
                    children: [
                        suffixText,
                        suffixContent && suffixContent.map((item)=>textIndent(item.prefix, item.suffix, item.suffixContent))
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(emotion_react_jsx_runtime_esm/* Fragment */.HY, {
        children: WARNING_TEXT.map((item, index)=>{
            return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(Warning_Wrapper, {
                onClick: ()=>setIsShowWarning((prev)=>{
                        const tmp = [
                            ...prev
                        ];
                        tmp[index] = !tmp[index];
                        return tmp;
                    }),
                children: [
                    /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(WarningNavWrapper, {
                        children: [
                            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(WarningNavTextWrapper, {
                                children: [
                                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                                        src: "/assets/exclamation_mark.svg",
                                        alt: "exclamation-mark",
                                        width: 12,
                                        height: 12
                                    }),
                                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                                        size: "base",
                                        weight: "medium",
                                        color: constants/* colors.gray700 */.O9.gray700,
                                        children: item.category
                                    })
                                ]
                            }),
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                                src: `/assets/chevron_${isShowWaring[index] ? "up" : "down"}_gray.svg`,
                                alt: "chevron-up-down",
                                width: 16,
                                height: 16
                            })
                        ]
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ItemWrapper, {
                        children: isShowWaring[index] && item.content.map((texts)=>{
                            var ref;
                            return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(emotion_react_jsx_runtime_esm/* Fragment */.HY, {
                                children: [
                                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Divider */.iz, {
                                        width: "calc(100% - 40px)",
                                        height: 1,
                                        color: constants/* colors.gray200 */.O9.gray200,
                                        style: {
                                            margin: "-4px 0 0 20px"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(WarningText, {
                                        children: [
                                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                                                size: "sm",
                                                weight: "regular",
                                                color: constants/* colors.gray500 */.O9.gray500,
                                                children: texts.title
                                            }),
                                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("br", {}),
                                            (ref = texts.content) === null || ref === void 0 ? void 0 : ref.map((text)=>textIndent(text.prefix, text.suffix, text.suffixContent))
                                        ]
                                    })
                                ]
                            });
                        })
                    })
                ]
            }, item.category);
        })
    });
}
const Warning_Wrapper = emotion_styled_esm/* default.div */.Z.div`
  width: 100%;
  background-color: ${constants/* colors.gray100 */.O9.gray100};
`;
const WarningNavWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;
const WarningNavTextWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const ItemWrapper = emotion_styled_esm/* default.div */.Z.div`
  max-height: 120px;
  overflow: scroll;
`;
const WarningText = emotion_styled_esm/* default.div */.Z.div`
  padding: 16px 20px 20px 20px;
`;
const TextIndent = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  gap: 2px;
`;

// EXTERNAL MODULE: ./node_modules/@boxfoxs/core-hooks/dist/index.js
var core_hooks_dist = __webpack_require__(28271);
;// CONCATENATED MODULE: ./src/order/components/OrderItemsSection.tsx






function OrderItemsSection({ data , initialVisible =false  }) {
    const [isOpen, , , toggle] = (0,core_hooks_dist.useBooleanState)(initialVisible);
    const renderWineList = ()=>{
        return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(emotion_react_jsx_runtime_esm/* Fragment */.HY, {
            children: [
                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                    height: 16
                }),
                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Divider */.iz, {
                    width: "100%",
                    height: 1,
                    color: constants/* colors.gray100 */.O9.gray100
                }),
                data.map((item, index)=>{
                    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(CardWrapper, {
                        children: [
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ImageWrapper, {
                                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                                    src: item.product.image,
                                    alt: `${item.product.id}_${index}`,
                                    width: 70,
                                    height: 79
                                })
                            }),
                            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ImageWrapper, {
                                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                                    src: item.product.image,
                                    alt: `${item.product.id}_${index}`,
                                    width: 70,
                                    height: 79
                                })
                            }),
                            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(WineInfoWrapper, {
                                children: [
                                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                                        size: "base",
                                        weight: "semibold",
                                        color: constants/* colors.gray900 */.O9.gray900,
                                        children: item.product.name
                                    }),
                                    /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(dist/* Text */.xv, {
                                        size: "sm",
                                        weight: "regular",
                                        color: constants/* colors.gray600 */.O9.gray600,
                                        children: [
                                            item.amount,
                                            "개"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(PriceInfoWrapper, {
                                        children: [
                                            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(dist/* Text */.xv, {
                                                size: "lg",
                                                weight: "semibold",
                                                color: constants/* colors.gray900 */.O9.gray900,
                                                children: [
                                                    (0,utils_dist.commaizeNumber)(item.product.price),
                                                    "원"
                                                ]
                                            }),
                                            item.product.originalPrice && /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(OriginPriceText, {
                                                size: "base",
                                                weight: "regular",
                                                color: constants/* colors.gray500 */.O9.gray500,
                                                children: [
                                                    (0,utils_dist.commaizeNumber)(item.product.originalPrice),
                                                    "원"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, item.id);
                })
            ]
        });
    };
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(OrderItemsSection_Wrapper, {
        children: /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(OrderListWrapper, {
            children: [
                /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(OrderTextWrapper, {
                    children: [
                        /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                            size: "lg",
                            weight: "semibold",
                            color: constants/* colors.gray900 */.O9.gray900,
                            children: "주문상품"
                        }),
                        /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(ListCountText, {
                            onClick: toggle,
                            children: [
                                /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(dist/* Text */.xv, {
                                    size: "lg",
                                    weight: "semibold",
                                    color: constants/* colors.gray900 */.O9.gray900,
                                    children: [
                                        data.length,
                                        "개"
                                    ]
                                }),
                                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                                    src: `/assets/chevron_${isOpen ? "up" : "down"}.svg`,
                                    alt: "chevron-up-down",
                                    width: 24,
                                    height: 24
                                })
                            ]
                        })
                    ]
                }),
                isOpen && renderWineList()
            ]
        })
    });
}
const OrderItemsSection_Wrapper = emotion_styled_esm/* default.div */.Z.div`
  padding: 0 20px;
`;
const OrderListWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  flex-direction: column;
`;
const OrderTextWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListCountText = emotion_styled_esm/* default.button */.Z.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CardWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  margin-top: 16px;
`;
const ImageWrapper = emotion_styled_esm/* default.div */.Z.div`
  width: 70px;
  height: 79px;
`;
const WineInfoWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  gap: 8px;
`;
const PriceInfoWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const OriginPriceText = (0,emotion_styled_esm/* default */.Z)(dist/* Text */.xv)`
  text-decoration: line-through;
  margin-left: 4px;
`;

;// CONCATENATED MODULE: ./src/order/model/DeliveryRequestText.ts
const DELIVERY_REQUEST_TEXT = [
    "부재 시 경비실에 맡겨주세요.",
    "부재 시 집 앞에 놓고가 주세요.",
    "배송 전 연락 바랍니다.",
    "직접 입력", 
];

;// CONCATENATED MODULE: ./src/order/components/DeliveryRequest.tsx







function DeliveryRequest({ onClose , setRequest  }) {
    const { 0: selectedRequest , 1: setSelectedRequest  } = (0,react.useState)(-1);
    const { 0: writtenText , 1: setWrittenText  } = (0,react.useState)("");
    const isActive = (0,react.useMemo)(()=>{
        if (selectedRequest !== -1 && selectedRequest !== 3) return true;
        else {
            if (writtenText.length > 0) return true;
            return false;
        }
    }, [
        selectedRequest,
        writtenText
    ]);
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(Container, {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* MText */.HP, {
                size: "xxl",
                weight: "semibold",
                color: constants/* colors.gray900 */.O9.gray900,
                children: "배송 시 요청사항"
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                height: 4
            }),
            DELIVERY_REQUEST_TEXT.map((text, index)=>{
                return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(RequestWrapper, {
                    onClick: ()=>{
                        setSelectedRequest(index);
                        if (index !== 3) setWrittenText("");
                    },
                    children: [
                        /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Round, {
                            isSelected: selectedRequest === index,
                            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
                                className: "inner_round"
                            })
                        }),
                        /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* MText */.HP, {
                            size: "lg",
                            weight: "medium",
                            color: constants/* colors.gray900 */.O9.gray900,
                            children: text
                        })
                    ]
                }, text);
            }),
            selectedRequest === 3 && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(RequestTextInput, {
                placeholder: "요청사항을 입력해주세요. (25자 이내)",
                maxLength: 25,
                onChange: (e)=>{
                    setWrittenText(e.target.value);
                }
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                height: 24
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Button, {
                isActive: isActive,
                onClick: ()=>{
                    if (selectedRequest !== 3) setRequest(DELIVERY_REQUEST_TEXT[selectedRequest]);
                    else setRequest(writtenText);
                    onClose();
                },
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* MText */.HP, {
                    size: "xl",
                    weight: "medium",
                    color: isActive ? constants/* colors.defaultWhite */.O9.defaultWhite : constants/* colors.gray500 */.O9.gray500,
                    children: "다음"
                })
            })
        ]
    });
}
const Container = emotion_styled_esm/* default.div */.Z.div`
  padding: 24px 20px;
`;
const RequestWrapper = (0,emotion_styled_esm/* default */.Z)(dist/* Flex.CenterVertical */.kC.CenterVertical)`
  padding: 11px 0 11px 4px;
  gap: 6px;
`;
const Round = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${({ isSelected  })=>isSelected ? constants/* colors.primary700Default */.O9.primary700Default : constants/* colors.gray400 */.O9.gray400};
  border-radius: 20px;

  .inner_round {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${({ isSelected  })=>isSelected ? constants/* colors.primary700Default */.O9.primary700Default : undefined};
  }
`;
function RequestTextInput(props) {
    const textStyle = (0,dist/* useTextStyle */.T)({
        size: "base"
    });
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(StyledRequestTextInput, {
        ...props,
        style: textStyle
    });
}
const StyledRequestTextInput = emotion_styled_esm/* default.input */.Z.input`
  &::placeholder {
    color: ${constants/* colors.gray400 */.O9.gray400};
  }
  color: ${constants/* colors.gray900 */.O9.gray900};
  padding: 12px 16px;
  border: 1px solid ${constants/* colors.gray200 */.O9.gray200};
  border-radius: 6px;
  width: 100%;
`;
const Button = (0,emotion_styled_esm/* default */.Z)(components/* MineryButton */.Cn)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background-color: ${({ isActive  })=>isActive ? constants/* colors.primary700Default */.O9.primary700Default : constants/* colors.gray200 */.O9.gray200};
`;

;// CONCATENATED MODULE: ./src/order/components/index.ts








/***/ })

};
;