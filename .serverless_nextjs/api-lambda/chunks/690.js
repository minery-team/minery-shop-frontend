"use strict";
exports.id = 690;
exports.ids = [690];
exports.modules = {

/***/ 38690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InputPhonePage)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/bds-web/dist/index.js
var dist = __webpack_require__(40756);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/core-hooks/dist/index.js
var core_hooks_dist = __webpack_require__(28271);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/core-hooks-dom/dist/index.js
var core_hooks_dom_dist = __webpack_require__(25646);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/next/dist/index.js
var next_dist = __webpack_require__(23399);
// EXTERNAL MODULE: ./src/common/api/auth/index.ts + 7 modules
var auth = __webpack_require__(97173);
// EXTERNAL MODULE: ./src/common/components/index.ts + 22 modules
var components = __webpack_require__(15575);
// EXTERNAL MODULE: ./src/common/constants/index.ts + 2 modules
var constants = __webpack_require__(16439);
// EXTERNAL MODULE: ./src/common/hooks/index.ts + 6 modules
var hooks = __webpack_require__(25767);
// EXTERNAL MODULE: ./src/common/utils/index.ts + 4 modules
var utils = __webpack_require__(25616);
;// CONCATENATED MODULE: ./src/common/utils/IMP.ts

var IMP;
(function(IMP) {
    let isInitialized = false;
    function init() {
        if (isInitialized) {
            return;
        }
        window.IMP.init(constants/* IMP_KEY */.cF);
        isInitialized = true;
    }
    IMP.init = init;
    async function requestCertification(id) {
        init();
        return new Promise((resolve)=>{
            window.IMP.certification({
                pg: "A010002002",
                merchant_uid: id,
                popup: true
            }, resolve);
        });
    }
    IMP.requestCertification = requestCertification;
})(IMP || (IMP = {}));

// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
var router_default = /*#__PURE__*/__webpack_require__.n(router);
// EXTERNAL MODULE: ./src/auth/utils/redirectAfterAuth.ts
var redirectAfterAuth = __webpack_require__(849);
;// CONCATENATED MODULE: ./src/auth/pages/InputPhonePage.tsx













function InputPhonePage() {
    const [, reload] = (0,hooks/* useUser */.aF)();
    const [phone, onPhoneChange] = (0,core_hooks_dom_dist.useInputState)();
    const cta = (0,core_hooks_dist.useAsyncCallback)(async ()=>{
        const isExists = await (0,auth/* checkUserExist */.rk)(phone);
        if (isExists) {
            await (0,auth/* sendSmsCode */.W_)(phone);
            router_default().push(`/auth/code${next_dist.QS.create({
                phone,
                redirectUrl: next_dist.QS.get("redirectUrl")
            })}`);
            return;
        }
        const res = await IMP.requestCertification(`${phone}_${Date.now()}`);
        if (res.success) {
            await (0,auth/* confirmPass */.ui)(res.imp_uid);
            await reload();
            (0,redirectAfterAuth/* redirectAfterAuth */.t)();
        }
    });
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(components/* Container */.W2, {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* AppBar */.xG, {
                back: true
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(components/* Section */.$0, {
                children: [
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "xxl",
                        weight: "semibold",
                        color: constants/* colors.gray900 */.O9.gray900,
                        children: "우선, 휴대폰 번호를 알려주세요"
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                        height: 6
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        size: "base",
                        weight: "regular",
                        color: constants/* colors.gray600 */.O9.gray600,
                        children: "본인 확인을 위해 입력한 번호로 인증번호를 전송할게요"
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                        height: 24
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* InputField */.UP, {
                        label: "휴대폰 번호",
                        value: (0,utils/* formatPhoneNumber */.un)(phone),
                        onChange: onPhoneChange,
                        placeholder: "010-0000-0000",
                        autoFocus: true,
                        type: "tel"
                    })
                ]
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* FixedBottomCTA */.Hp, {
                disabled: !(0,utils/* checkValidPhoneNumber */.gb)(phone),
                onClick: cta.callback,
                loading: cta.isLoading,
                type: "default",
                children: "다음"
            })
        ]
    });
};


/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ redirectAfterAuth)
/* harmony export */ });
/* harmony import */ var _boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23399);
/* harmony import */ var _boxfoxs_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function redirectAfterAuth() {
    const redirectUrl = _boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__.QS.get("redirectUrl");
    if (redirectUrl) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default().replace(redirectUrl);
    } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default().back();
    }
}


/***/ })

};
;