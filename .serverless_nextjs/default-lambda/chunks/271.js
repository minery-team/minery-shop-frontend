"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 44271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useAdultCartGuide)
/* harmony export */ });
/* unused harmony export AdultCertGuidePopUp */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68847);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56361);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94312);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);







function AdultCertGuidePopUp({ onClose  }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ(common_components__WEBPACK_IMPORTED_MODULE_3__/* .ConfirmModal */ .sm, {
        type: "confirm",
        content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ(TextWrapper, {
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__/* .jsxs */ .BX)(StyledText, {
                size: "lg",
                weight: "semibold",
                color: common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.gray900 */ .O9.gray900,
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ("div", {
                        children: "만 19세 이상만"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ("div", {
                        children: "구매할 수 있는 상품이"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ("div", {
                        children: "포함되어 있어요!"
                    })
                ]
            })
        }),
        confirmText: "다음",
        onConfirm: onClose
    });
}
function useAdultCartGuide() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { open , close  } = (0,_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .usePopup */ .BF)("adult-cart-guide-popup");
    return (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ(AdultCertGuidePopUp, {
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
    color: ${common_constants__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary700Default */ .O9.primary700Default};
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