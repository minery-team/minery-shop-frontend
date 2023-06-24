"use strict";
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 57568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useNewToast),
/* harmony export */   "p": () => (/* binding */ useAddToast)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68847);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56361);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var common_components_modal_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70406);






function useNewToast() {
    const { open  } = (0,common_components_modal_Toast__WEBPACK_IMPORTED_MODULE_4__/* .useToast */ .p)("new-address-toast");
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                size: "base",
                weight: "medium",
                color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.defaultWhite */ .O9.defaultWhite,
                children: "배송지 등록이 완료되었어요."
            })
        });
    }, [
        open
    ]);
}
function useAddToast() {
    const { open  } = (0,common_components_modal_Toast__WEBPACK_IMPORTED_MODULE_4__/* .useToast */ .p)("add-address-toast");
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsxs */ .BX)(AddToastWrapper, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ("img", {
                        src: "/assets/check_mark.svg",
                        width: 16,
                        height: 16,
                        alt: "check_mark"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                        size: "base",
                        weight: "medium",
                        color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.defaultWhite */ .O9.defaultWhite,
                        children: "배송지 변경이 완료되었어요."
                    })
                ]
            })
        });
    }, [
        open
    ]);
}
const AddToastWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div */ .Z.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;


/***/ }),

/***/ 65310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ShippingAddress)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60007);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56361);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16439);






function ShippingAddress({ defaultAddress , onChangeAddress  }) {
    const open = (0,react_daum_postcode__WEBPACK_IMPORTED_MODULE_1__/* .useDaumPostcodePopup */ .U)();
    const { 0: roadAddress , 1: setRoadAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultAddress ? defaultAddress.road : "");
    const { 0: detailAddress , 1: setDetailAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultAddress ? defaultAddress.detail : "");
    const { 0: postalCode , 1: setPostalCode  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultAddress ? defaultAddress.code : "");
    const handleComplete = (data)=>{
        setRoadAddress(data.roadAddress);
        setPostalCode(data.zonecode);
        onChangeAddress(data.roadAddress, detailAddress, postalCode);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsxs */ .BX)(Wrapper, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv, {
                size: "base",
                weight: "regular",
                color: common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray700 */ .O9.gray700,
                children: "배송지"
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsxs */ .BX)(AddressWrapper, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(AddressText, {
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv, {
                            size: "lg",
                            weight: "regular",
                            color: roadAddress ? common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray900 */ .O9.gray900 : common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray400 */ .O9.gray400,
                            children: roadAddress || "주소 찾기를 통해 입력"
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(FindAddress, {
                        size: "lg",
                        weight: "medium",
                        color: common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.defaultWhite */ .O9.defaultWhite,
                        onClick: ()=>open({
                                onComplete: handleComplete
                            }),
                        children: "주소찾기"
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(DetailAddess, {
                placeholder: "상세 주소를 입력해주세요",
                value: detailAddress,
                onChange: (e)=>{
                    setDetailAddress(e.target.value);
                    onChangeAddress(roadAddress, e.target.value, postalCode);
                }
            })
        ]
    });
}
const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__/* ["default"].div */ .Z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
`;
const AddressWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__/* ["default"].div */ .Z.div`
  display: flex;
  gap: 12px;
`;
const AddressText = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__/* ["default"].div */ .Z.div`
  display: flex;
  align-items: center;
  width: calc(100% - 116px);
  height: 54px;
  border: 1px solid ${common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray200 */ .O9.gray200};
  border-radius: 6px;
  padding: 16px; 18.5px;
`;
const FindAddress = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 54px;
  border-radius: 6px;
  background-color: ${common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray900 */ .O9.gray900};
`;
const DetailAddess = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__/* ["default"].input */ .Z.input`
  width: 100%;
  height: 44px;
  border: 1px solid ${common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray200 */ .O9.gray200};
  border-radius: 6px;
  padding: 12px 16px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: ${common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray900 */ .O9.gray900}

  ::placeholder {
    color: ${common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray400 */ .O9.gray400};
  }
`;


/***/ }),

/***/ 60821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ UserInfo)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68847);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56361);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16439);
/* harmony import */ var common_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25767);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25616);






function UserInfo() {
    const [userInfo] = (0,common_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useUser */ .aF)();
    if (!userInfo) {
        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .Fragment */ .HY, {});
    }
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsxs */ .BX)(Wrapper, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                size: "base",
                weight: "regular",
                color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray700 */ .O9.gray700,
                children: "받는 분"
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsxs */ .BX)(UserInfoWrapper, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                        size: "xl",
                        weight: "semibold",
                        color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.defaultBlack */ .O9.defaultBlack,
                        children: userInfo.name
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                        size: "xl",
                        weight: "semibold",
                        color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.defaultBlack */ .O9.defaultBlack,
                        children: (0,common_utils__WEBPACK_IMPORTED_MODULE_4__/* .formatPhoneNumber */ .un)(userInfo.phone)
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                size: "sm",
                weight: "medium",
                color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.primary700Default */ .O9.primary700Default,
                children: "주류 상품은 주문자의 직접수령만 가능해요."
            })
        ]
    });
}
const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div */ .Z.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
`;
const UserInfoWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div */ .Z.div`
  display: flex;
  gap: 8px;
`;


/***/ }),

/***/ 7491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useFindAddress)
/* harmony export */ });
/* unused harmony export FindAddressPopUp */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68847);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56361);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16439);
/* harmony import */ var common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);






function FindAddressPopUp({ onClose  }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(common_components__WEBPACK_IMPORTED_MODULE_3__/* .ConfirmModal */ .sm, {
        type: "confirm",
        content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(TextWrapper, {
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(StyledText, {
                size: "lg",
                weight: "semibold",
                color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray900 */ .O9.gray900,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ("div", {
                    children: "주소를 검색해주세요"
                })
            })
        }),
        confirmText: "확인",
        onConfirm: onClose
    });
}
function useFindAddress() {
    const { open , close  } = (0,_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .usePopup */ .BF)("find-address-popup");
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(FindAddressPopUp, {
                onClose: close
            }),
            onClose: close
        });
    }, [
        open,
        close
    ]);
}
const TextWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div */ .Z.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .highlight {
    color: ${common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.primary700Default */ .O9.primary700Default};
  }
`;
const StyledText = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


/***/ }),

/***/ 77894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useTypeDetailAddress)
/* harmony export */ });
/* unused harmony export TypeDetailAddressPopUp */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68847);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56361);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16439);
/* harmony import */ var common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);






function TypeDetailAddressPopUp({ onClose  }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(common_components__WEBPACK_IMPORTED_MODULE_3__/* .ConfirmModal */ .sm, {
        type: "confirm",
        content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(TextWrapper, {
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(StyledText, {
                size: "lg",
                weight: "semibold",
                color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray900 */ .O9.gray900,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ("div", {
                    children: "상세 주소를 입력해주세요"
                })
            })
        }),
        confirmText: "확인",
        onConfirm: onClose
    });
}
function useTypeDetailAddress() {
    const { open , close  } = (0,_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .usePopup */ .BF)("type-detail-address-popup");
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__/* .jsx */ .tZ(TypeDetailAddressPopUp, {
                onClose: close
            }),
            onClose: close
        });
    }, [
        open,
        close
    ]);
}
const TextWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div */ .Z.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .highlight {
    color: ${common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.primary700Default */ .O9.primary700Default};
  }
`;
const StyledText = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


/***/ })

};
;