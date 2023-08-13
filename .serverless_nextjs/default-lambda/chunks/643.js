"use strict";
exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 41193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(45306);
;// CONCATENATED MODULE: ./src/common/context/AxiosContext.tsx



axios/* default.defaults.paramsSerializer */.Z.defaults.paramsSerializer = {
    indexes: null
};
const AxiosContext = /*#__PURE__*/ (0,react.createContext)(axios/* default.create */.Z.create({
    baseURL: ""
}));
const AxiosProvider = ({ children  })=>{
    const axiosRef = (0,react.useRef)(axios/* default.create */.Z.create({
        baseURL: ""
    }));
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(AxiosContext.Provider, {
        value: axiosRef.current,
        children: children
    });
};
const useAxios = ()=>useContext(AxiosContext);
/* harmony default export */ const context_AxiosContext = ((/* unused pure expression or super */ null && (AxiosContext)));

// EXTERNAL MODULE: ./node_modules/@boxfoxs/bds-web/dist/index.js
var dist = __webpack_require__(40756);
// EXTERNAL MODULE: ./src/common/constants/textStyles.ts
var textStyles = __webpack_require__(13547);
;// CONCATENATED MODULE: ./src/common/context/FontProvider.tsx



const FontProvider = ({ children  })=>{
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* FontProvider */.jv, {
        fontSize: getFontSize,
        lineHeight: getLineHeight,
        children: children
    });
};
function getFontSize(props) {
    return textStyles/* textSizes */.i[props.size ?? "base"];
}
function getLineHeight(props) {
    if (props.weight === "semibold") {
        return "130%";
    }
    return "140%";
}

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
;// CONCATENATED MODULE: ./src/common/context/IamportProvider.tsx


function IamportProvider({ children , key  }) {
    useQuery("init-imp", ()=>{
        window.IMP.init(key);
    });
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: children
    });
}

;// CONCATENATED MODULE: ./src/common/context/index.ts




// EXTERNAL MODULE: ./node_modules/react-channel-plugin/lib/index.js
var react_channel_plugin_lib = __webpack_require__(50814);
// EXTERNAL MODULE: ./node_modules/recoil/cjs/index.js
var cjs = __webpack_require__(94715);
// EXTERNAL MODULE: ./src/common/layout/ToastProvider.tsx + 1 modules
var ToastProvider = __webpack_require__(80923);
// EXTERNAL MODULE: ./src/common/components/index.ts + 28 modules
var components = __webpack_require__(2126);
// EXTERNAL MODULE: ./node_modules/react-spring-bottom-sheet/dist/style.css
var style = __webpack_require__(57830);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/next-seo/dist/index.js
var next_seo_dist = __webpack_require__(89108);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.esm.js
var emotion_styled_esm = __webpack_require__(56361);
// EXTERNAL MODULE: ./src/common/constants/index.ts + 2 modules
var constants = __webpack_require__(16439);
// EXTERNAL MODULE: ./src/common/hooks/index.ts + 7 modules
var hooks = __webpack_require__(61441);
;// CONCATENATED MODULE: ./pages/_app.tsx
















const queryClient = new lib.QueryClient();
function App({ Component , pageProps  }) {
    (0,hooks/* useMaintainScrollGlobal */.H5)();
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(react.StrictMode, {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(next_seo_dist.SEOHeader, {
                url: "https://app.minery.co.kr",
                title: "마이너리 | 집앞까지 배달되는 수백가지 와인",
                description: "마시고 싶었던 와인, 찾으러 다니기 불편하셨죠? 집 앞까지 배달되는 와인 샵 마이너리를 만나보세요",
                thumbnail: "/images/img_thumbnail.jpg"
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(FontProvider, {
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(cjs/* RecoilRoot */.Wh, {
                    children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* LoggerRoot */.N9, {
                        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(lib.QueryClientProvider, {
                            client: queryClient,
                            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* PortalProvider */.Xp, {
                                zIndex: 3,
                                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* PopupProvider */.g8, {
                                    children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ToastProvider/* ToastProvider */.V, {
                                        children: /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(AxiosProvider, {
                                            children: [
                                                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(RootContainer, {
                                                    children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Component, {
                                                        ...pageProps
                                                    })
                                                }),
                                                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(react_channel_plugin_lib.ReactChannelIO, {
                                                    pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY,
                                                    language: "ko",
                                                    autoBoot: true
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
const RootContainer = emotion_styled_esm/* default.main */.Z.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    display: none;
  }
  background: ${constants/* colors.defaultWhite */.O9.defaultWhite};
  min-height: 100vh;
  max-width: 500px;
  overflow-x: hidden;
`;


/***/ }),

/***/ 34208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68847);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56859);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);



function Document() {
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsxs */ .BX)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsxs */ .BX)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "https://cdn.iamport.kr/v1/iamport.js",
                        strategy: "beforeInteractive"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ("meta", {
                        name: "viewport",
                        content: "width=device-width, minimal-ui"
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsxs */ .BX)("body", {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})
                ]
            })
        ]
    });
};


/***/ }),

/***/ 90155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ createAddress),
  "H": () => (/* reexport */ fetchAddress)
});

// EXTERNAL MODULE: ./src/common/api/requester.ts + 1 modules
var requester = __webpack_require__(66796);
;// CONCATENATED MODULE: ./src/common/api/address/createAddress.ts

async function createAddress(data) {
    const res = await requester/* requester.post */.L.post("/address", data);
    return res.data;
}

;// CONCATENATED MODULE: ./src/common/api/address/fetchAddress.ts

async function fetchAddress() {
    const res = await requester/* requester.get */.L.get("/address");
    return res.data;
}

;// CONCATENATED MODULE: ./src/common/api/address/index.ts




/***/ }),

/***/ 97173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rk": () => (/* reexport */ checkUserExist),
  "ui": () => (/* reexport */ confirmPass),
  "k": () => (/* reexport */ fetchCurrentUser),
  "W_": () => (/* reexport */ sendSmsCode),
  "dJ": () => (/* reexport */ validateSmsCode)
});

// UNUSED EXPORTS: InvalidSmsCodeError, authWithKakao, updateName, updatePhone

// EXTERNAL MODULE: ./src/common/api/requester.ts + 1 modules
var api_requester = __webpack_require__(66796);
;// CONCATENATED MODULE: ./src/common/api/auth/sendSmsCode.ts

async function sendSmsCode(phoneNumber) {
    await api_requester/* requester.post */.L.post("/auth/sms", {
        phoneNumber
    });
}

// EXTERNAL MODULE: ./node_modules/@boxfoxs/axios/dist/index.js
var dist = __webpack_require__(75789);
// EXTERNAL MODULE: ./src/common/utils/access-token.ts
var access_token = __webpack_require__(33499);
;// CONCATENATED MODULE: ./src/common/api/auth/validateSmsCode.ts



async function validateSmsCode(phoneNumber, code) {
    try {
        const res = await api_requester/* requester.post */.L.post("/auth/sms/validate", {
            phoneNumber,
            code
        });
        await (0,access_token/* setAccessToken */.M8)(res.data.access_token);
    } catch (e) {
        (0,dist.assertAxiosError)(e);
        if (e.response?.status === 400) {
            throw new InvalidSmsCodeError();
        }
    }
}
class InvalidSmsCodeError extends Error {
}

;// CONCATENATED MODULE: ./src/common/api/auth/updateName.ts

async function updateName(name) {
    await requester.patch("/user/me/name", {
        name
    });
}
async function updatePhone(phone) {
    await requester.patch("/user/me/phone", {
        phone
    });
}

;// CONCATENATED MODULE: ./src/common/api/auth/fetchCurrentUser.ts


async function fetchCurrentUser() {
    try {
        const res = await api_requester/* requester.get */.L.get("/user/me");
        return res.data;
    } catch (e) {
        (0,dist.assertAxiosError)(e);
        if (e.response?.status === 401) {
            return undefined;
        }
        throw e;
    }
}

;// CONCATENATED MODULE: ./src/common/api/auth/authWithKakao.ts


async function authWithKakao(code) {
    const res = await requester.post("/auth/kakao", {
        code
    });
    await setAccessToken(res.data.access_token);
}

;// CONCATENATED MODULE: ./src/common/api/auth/checkUserExist.ts

async function checkUserExist(phone) {
    const res = await api_requester/* requester.get */.L.get("/user", {
        params: {
            phone
        }
    });
    return res.data.exists;
}

// EXTERNAL MODULE: ./src/common/utils/index.ts + 3 modules
var utils = __webpack_require__(73373);
;// CONCATENATED MODULE: ./src/common/api/auth/confirmPass.ts


async function confirmPass(impUid) {
    const res = await api_requester/* requester.post */.L.post("/auth/pass/confirm", {
        impUid
    });
    await (0,utils/* setAccessToken */.M8)(res.data.access_token);
}

;// CONCATENATED MODULE: ./src/common/api/auth/index.ts









/***/ }),

/***/ 21708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xq": () => (/* reexport */ addToCart),
  "LL": () => (/* reexport */ clearCart),
  "EI": () => (/* reexport */ deleteFromCart),
  "As": () => (/* reexport */ fetchCartList),
  "oZ": () => (/* reexport */ updateAmount)
});

// UNUSED EXPORTS: updateOption

// EXTERNAL MODULE: ./src/common/api/requester.ts + 1 modules
var api_requester = __webpack_require__(66796);
;// CONCATENATED MODULE: ./src/common/api/cart/addToCart.ts

async function addToCart(data) {
    await api_requester/* requester.post */.L.post("/cart", data);
}

;// CONCATENATED MODULE: ./src/common/api/cart/fetchCartList.ts

async function fetchCartList() {
    try {
        const res = await api_requester/* requester.get */.L.get("/cart");
        return res.data;
    } catch  {
        return [];
    }
}

;// CONCATENATED MODULE: ./src/common/api/cart/deleteFromCart.ts

async function deleteFromCart(id) {
    await api_requester/* requester.delete */.L["delete"](`/cart/${id}`);
}

;// CONCATENATED MODULE: ./src/common/api/cart/clearCart.ts

async function clearCart() {
    await api_requester/* requester.delete */.L["delete"]("/cart");
}

;// CONCATENATED MODULE: ./src/common/api/cart/updateAmount.ts

async function updateAmount(id, amount) {
    await api_requester/* requester.patch */.L.patch(`/cart/${id}`, {
        amount
    });
}

;// CONCATENATED MODULE: ./src/common/api/cart/updateOption.ts

async function updateOption(id, data) {
    await requester.patch(`/cart/${id}/option`, data);
}

;// CONCATENATED MODULE: ./src/common/api/cart/index.ts








/***/ }),

/***/ 35066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* reexport */ createOrder),
  "A": () => (/* reexport */ fetchOrders)
});

// EXTERNAL MODULE: ./src/common/api/requester.ts + 1 modules
var requester = __webpack_require__(66796);
;// CONCATENATED MODULE: ./src/common/api/order/createOrder.ts

async function createOrder(data) {
    const { protocol , host  } = window.location;
    const url = `${protocol}//${host}`;
    const res = await requester/* requester.post */.L.post("/order", {
        ...data,
        url
    });
    return res.data;
}

;// CONCATENATED MODULE: ./src/common/api/order/fetchOrders.ts

async function fetchOrders() {
    const res = await requester/* requester.get */.L.get("/order");
    return res.data;
}

;// CONCATENATED MODULE: ./src/common/api/order/index.ts




/***/ }),

/***/ 4026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* reexport */ OrderType),
  "y": () => (/* reexport */ fetchProductList)
});

// EXTERNAL MODULE: ./src/common/api/requester.ts + 1 modules
var requester = __webpack_require__(66796);
;// CONCATENATED MODULE: ./src/common/api/product/fetchProductList.ts

async function fetchProductList({ wineType , order  }) {
    const res = await requester/* requester.get */.L.get("/product", {
        params: {
            wineType,
            order
        }
    });
    return res.data;
}
var OrderType;
(function(OrderType) {
    OrderType[OrderType["POPULAR"] = 0] = "POPULAR";
    OrderType[OrderType["LOWEST_PRICE"] = 1] = "LOWEST_PRICE";
})(OrderType || (OrderType = {}));

;// CONCATENATED MODULE: ./src/common/api/product/index.ts



/***/ }),

/***/ 66796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ requester)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(45306);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(29204);
// EXTERNAL MODULE: ./src/common/utils/index.ts + 3 modules
var utils = __webpack_require__(73373);
;// CONCATENATED MODULE: ./src/common/api/interceptAuthToken.ts


async function interceptAuthToken(config) {
    const accessToken = (0,utils/* getAccessToken */.hP)();
    return {
        ...config,
        headers: new node_modules_axios/* AxiosHeaders */.uu({
            ...config.headers.toJSON(),
            Authorization: `Bearer ${accessToken}`
        })
    };
}

;// CONCATENATED MODULE: ./src/common/api/requester.ts


const requester = axios/* default.create */.Z.create({
    baseURL: "https://r0up0kec01.execute-api.ap-northeast-2.amazonaws.com/live"
});
requester.interceptors.request.use(interceptAuthToken);


/***/ }),

/***/ 75275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ AmountControl)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68847);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56361);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14348);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88005);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16439);





function AmountControl({ value , onIncrease , onDecrease  }) {
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsxs */ .BX)(CountBox, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(StyledButton, {
                onClick: onDecrease,
                type: "button",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    width: "12px",
                    height: "12px",
                    color: value > 1 ? common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray900 */ .O9.gray900 : common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray400 */ .O9.gray400
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Flex.Center */ .kC.Center, {
                style: {
                    flex: 1
                },
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                    size: "sm",
                    weight: "regular",
                    color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray900 */ .O9.gray900,
                    children: value
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(StyledButton, {
                onClick: onIncrease,
                type: "button",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    width: 12,
                    color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray900 */ .O9.gray900
                })
            })
        ]
    });
}
const CountBox = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Flex.CenterVertical */ .kC.CenterVertical)`
  min-width: 70px;
  border: 1px solid ${common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.gray300 */ .O9.gray300};
  border-radius: 4px;
`;
const StyledButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].button */ .Z.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  padding: 0;
`;


/***/ }),

/***/ 76660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CartButton)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68847);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56361);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24328);
/* harmony import */ var _home_components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57172);









function CartButton({ onClick  }) {
    const { value  } = (0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_6__/* .useCart */ .jD)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const cartItemsCount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.sumBy)(value, (items)=>items.amount);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__/* .jsxs */ .BX)(Box, {
        onClick: onClick,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ(_home_components_Header__WEBPACK_IMPORTED_MODULE_7__/* .StyledImage */ .Y, {
                src: "/assets/basket.svg",
                width: 40,
                height: 40,
                alt: "basket",
                onClick: ()=>router.push("/cart")
            }),
            value.length > 0 && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ(CartCount, {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ(_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv, {
                    size: "caption",
                    weight: "regluar",
                    color: common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.defaultWhite */ .O9.defaultWhite,
                    children: cartItemsCount
                })
            })
        ]
    });
}
const Box = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div */ .Z.div`
  position: relative;
  width: 40px;
  height: 40px;
`;
const CartCount = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div */ .Z.div`
  background-color: ${common_constants__WEBPACK_IMPORTED_MODULE_2__/* .colors.primary700Default */ .O9.primary700Default};
  border-radius: 50%;
  width: 17px;
  height: 17px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  padding-top: 1px;
`;


/***/ }),

/***/ 2126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g8": () => (/* reexport */ AmountControl/* AmountControl */.g),
  "xG": () => (/* reexport */ AppBar),
  "WE": () => (/* reexport */ CartButton/* CartButton */.W),
  "sm": () => (/* reexport */ ConfirmModal),
  "W2": () => (/* reexport */ Container_Container),
  "Hp": () => (/* reexport */ FixedBottomCTA),
  "UP": () => (/* reexport */ InputField),
  "N9": () => (/* reexport */ LoggerRoot),
  "HP": () => (/* reexport */ MText),
  "Cn": () => (/* reexport */ MineryButton),
  "T0": () => (/* reexport */ NotifyVisible_NotifyVisible),
  "$0": () => (/* reexport */ Section),
  "dv": () => (/* reexport */ SectionDivider),
  "T": () => (/* reexport */ space/* Space */.T),
  "aN": () => (/* reexport */ useBottomSheet),
  "dd": () => (/* reexport */ useModal)
});

// UNUSED EXPORTS: CommonModal, ContentCard, FadeByScrollAnimation, FixedBottomContainer, IconButton, LoggingRead, TypingAnimation, VisibleByScroll

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/bds-web/dist/index.js
var dist = __webpack_require__(40756);
;// CONCATENATED MODULE: ./src/common/components/Text.tsx


function MText(props) {
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
        ...props
    });
}

// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.esm.js
var emotion_styled_esm = __webpack_require__(56361);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(31415);
// EXTERNAL MODULE: ./src/common/constants/index.ts + 2 modules
var constants = __webpack_require__(16439);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
var router_default = /*#__PURE__*/__webpack_require__.n(router);
;// CONCATENATED MODULE: ./src/common/components/appbar/ControlBox.tsx


const ControlBox = (0,emotion_styled_esm/* default */.Z)(dist/* Flex.Center */.kC.Center)`
  background: white;
  border-radius: 100%;
  // box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.05);
  padding: 0px 0px;
  height: 40px;
  width: 40px;
`;

// EXTERNAL MODULE: ./node_modules/@boxfoxs/core-hooks-dom/dist/index.js
var core_hooks_dom_dist = __webpack_require__(25646);
// EXTERNAL MODULE: ./node_modules/react-spring/dist/esm/index.js + 6 modules
var esm = __webpack_require__(90128);
;// CONCATENATED MODULE: ./src/common/components/appbar/FloatingAppBarContainer.tsx





const FloatingAppBarContainer = ({ children , initialHidden , takeSpace =false , fixed =false  })=>{
    const scroll = (0,core_hooks_dom_dist.useScrollDiriection)("window");
    const hidden = fixed ? false : scroll ? scroll.direction === "down" || scroll.value < 50 : initialHidden ?? false;
    const spring = (0,esm.useSpring)({
        transform: hidden ? `translateY(-100%)` : `translateY(0%)`,
        config: {
            duration: 200
        }
    });
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)("div", {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* PortalConsumer */.hl, {
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Container, {
                    style: {
                        transform: spring.transform
                    },
                    children: children
                })
            }),
            takeSpace && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                height: 56
            })
        ]
    });
};
const Container = (0,emotion_styled_esm/* default */.Z)(esm.animated.div)`
  width: 100%;
  transition: all 200ms;
  position: fixed;
  top: 0;
  // box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

// EXTERNAL MODULE: ./node_modules/@boxfoxs/next/dist/index.js
var next_dist = __webpack_require__(23399);
// EXTERNAL MODULE: ./src/common/components/appbar/CartButton.tsx
var CartButton = __webpack_require__(76660);
;// CONCATENATED MODULE: ./src/common/components/appbar/index.tsx










const AppBar = ({ initialHidden , fixed , floating , elevated , backgrounded , back , logo , takeSpace , children , right  })=>{
    const backUrl = next_dist.QS.get("backTo");
    const content = /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(InnerContainer, {
        elevated: elevated,
        backgrounded: backgrounded,
        children: [
            children && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ContentContainer, {
                children: children
            }),
            logo && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Logo, {}),
            back && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ControlBox, {
                onClick: ()=>backUrl ? router_default().push(backUrl) : router_default().back(),
                children: back === "x" ? /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(XMarkIcon/* default */.Z, {
                    width: 28,
                    color: constants/* colors.gray900 */.O9.gray900,
                    strokeWidth: 1.5
                }) : /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                    src: "/assets/back.svg",
                    width: 20,
                    height: 20,
                    alt: "back"
                })
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                flex: 1
            }),
            right
        ]
    });
    if (!floating) {
        return content;
    }
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(FloatingAppBarContainer, {
        takeSpace: takeSpace,
        initialHidden: initialHidden,
        fixed: fixed,
        children: content
    });
};
// TODO: 정확한 Center 정렬로 수정
AppBar.Title = function AppBarTitle(props) {
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(TitleContainer, {
        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
            style: {
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20.8px",
                textAlign: "center"
            },
            ...props
        })
    });
};
const TitleContainer = emotion_styled_esm/* default.div */.Z.div`
  padding: 19px 40px;
`;
const InnerContainer = (0,emotion_styled_esm/* default */.Z)(dist/* Flex.CenterVertical */.kC.CenterVertical)`
  width: 100%;
  max-width: 500px;
  padding: 0 10px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  ${(p)=>p.backgrounded ? "background: white;" : ""}
  ${(p)=>p.elevated ? `border-bottom: 1px solid ${constants/* colors.gray200 */.O9.gray200};` : ""}
`;
const Logo = ()=>{
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
        children: "Minery"
    });
};
const ContentContainer = emotion_styled_esm/* default.div */.Z.div`
  position: absolute;
  width: calc(100% - 24px);
  height: 100%;
  z-index: -1;
`;

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/common/components/buttons/IconButton.tsx



const Button = emotion_styled_esm/* default.button */.Z.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background-color: white;
  margin: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  :hover {
    background-color: #f8f9fa;
  }
`;
const IconButton = ({ icon , ...buttonProps })=>{
    return /*#__PURE__*/ _jsx(Button, {
        "aria-label": "icon-button",
        type: "button",
        ...buttonProps,
        children: icon
    });
};
/* harmony default export */ const buttons_IconButton = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(IconButton))));

;// CONCATENATED MODULE: ./src/common/utils/coerceCssPixelValue.ts
function coerceCssPixelValue(value) {
    return typeof value === "number" ? `${value}px` : value;
}

;// CONCATENATED MODULE: ./src/common/components/buttons/MineryButton.tsx





function MineryButton({ htmlType ="button" , type ="primary" , textStyle ={
    size: "xl",
    weight: "medium"
} , loading , left , right , radius =4 , ...props }) {
    const style = (0,dist/* useTextStyle */.T)(textStyle);
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(StyledButton, {
        ...props,
        type: htmlType,
        onClick: !loading ? props.onClick : undefined,
        style: {
            ...{
                ...style,
                color: undefined
            },
            ...props.style
        },
        radius: radius,
        styleType: type,
        loading: loading,
        children: [
            right && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                width: 4
            }),
            left,
            loading ? /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* UrlLottie */.od, {
                src: "https://assets9.lottiefiles.com/packages/lf20_czwfqh7b.json",
                options: {
                    loop: true,
                    autoplay: true
                },
                style: {
                    width: "22px"
                }
            }) : props.children,
            right,
            left && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                width: 4
            })
        ]
    });
}
const StyledButton = emotion_styled_esm/* default.button */.Z.button`
  ${(p)=>p.loading ? "opacity: 0.9;" : ""}
  ${(p)=>`border-radius: ${coerceCssPixelValue(p.radius ?? 0)} !important;`}
  height: ${(p)=>p.height ? `${coerceCssPixelValue(p.height)}` : "58px"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;

  padding-horizontal: 20px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  ${(p)=>{
    const colorSet = getColorSet(p.styleType);
    return `
      color: ${colorSet.color};
      background: ${colorSet.background};
      border-color: ${colorSet.borderColor};
      &:active {
        background: ${colorSet.active.background};
        color: ${colorSet.active.color || "auto"};
        border-color: ${colorSet.active.borderColor || "auto"};
      }
      &:disabled {
        background: ${colorSet.disabled.background};
        color: ${colorSet.disabled.color || "auto"};
        border-color: ${colorSet.disabled.borderColor || "auto"};
      }`;
}}
  &:focus {
    outline: none;
  }
`;
function getColorSet(type) {
    switch(type){
        case "light":
            return {
                color: constants/* colors.gray900 */.O9.gray900,
                background: constants/* colors.defaultWhite */.O9.defaultWhite,
                borderColor: constants/* colors.gray300 */.O9.gray300,
                active: {
                    color: constants/* colors.primary700Default */.O9.primary700Default,
                    background: constants/* colors.defaultWhite */.O9.defaultWhite,
                    borderColor: constants/* colors.primary700Default */.O9.primary700Default
                },
                disabled: {
                    background: constants/* colors.gray200 */.O9.gray200,
                    color: constants/* colors.gray500 */.O9.gray500,
                    borderColor: constants/* colors.gray200 */.O9.gray200
                }
            };
        case "primaryLight":
            return {
                color: constants/* colors.primary700Default */.O9.primary700Default,
                background: constants/* colors.primary100 */.O9.primary100,
                borderColor: constants/* colors.primary100 */.O9.primary100,
                active: {
                    background: constants/* colors.primary300 */.O9.primary300
                },
                disabled: {
                    background: constants/* colors.gray200 */.O9.gray200,
                    color: constants/* colors.gray500 */.O9.gray500,
                    borderColor: constants/* colors.gray200 */.O9.gray200
                }
            };
        case "default":
            return {
                color: constants/* colors.defaultWhite */.O9.defaultWhite,
                background: constants/* colors.gray900 */.O9.gray900,
                borderColor: constants/* colors.gray900 */.O9.gray900,
                active: {
                    background: constants/* colors.gray800 */.O9.gray800
                },
                disabled: {
                    background: constants/* colors.gray200 */.O9.gray200,
                    color: constants/* colors.gray500 */.O9.gray500,
                    borderColor: constants/* colors.gray200 */.O9.gray200
                }
            };
        case "primary":
        default:
            return {
                color: constants/* colors.defaultWhite */.O9.defaultWhite,
                background: constants/* colors.primary700Default */.O9.primary700Default,
                borderColor: constants/* colors.primary700Default */.O9.primary700Default,
                active: {
                    background: constants/* colors.primary800Pressed */.O9.primary800Pressed
                },
                disabled: {
                    background: constants/* colors.gray200 */.O9.gray200,
                    color: constants/* colors.gray500 */.O9.gray500,
                    borderColor: constants/* colors.gray200 */.O9.gray200
                }
            };
    }
}

;// CONCATENATED MODULE: ./src/common/components/buttons/FixedBottomContainer.tsx




function FixedBottomContainer({ children , background , style , full  }) {
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Flex.Center */.kC.Center, {
        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(StyledContainer, {
            background: background ? "solid" : false,
            style: {
                zIndex: 3,
                ...style
            },
            full: full,
            children: children
        })
    });
}
const StyledContainer = (0,emotion_styled_esm/* default */.Z)(dist/* FixedBottomContainer */.vp)`
  background: ${constants/* colors.defaultWhite */.O9.defaultWhite};
  padding: ${(p)=>p.full ? "0px" : " 0 20px calc(12px + env(safe-area-inset-bottom))"};
  ${(p)=>p.full ? `& > * { padding-bottom: 0px !important;}` : ""}
  ${(p)=>p.background ? `border-top: 1px solid ${constants/* colors.gray200 */.O9.gray200};` : ""}
  max-width: 500px;
  margin: 0 auto;
  margin: 0 calc(calc(100vw - min(500px, 100vw)) / 2);
  touch-action: none;
`;

;// CONCATENATED MODULE: ./src/common/components/buttons/FixedBottomCTA.tsx



function FixedBottomCTA({ background , containerStyle: rawContainerStyle , full , ...props }) {
    const buttonProps = full ? {
        height: "calc(56px + env(safe-area-inset-bottom))",
        style: {
            paddingBottom: "env(safe-area-inset-bottom)"
        },
        radius: full ? 0 : 6
    } : {};
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(FixedBottomContainer, {
        background: background,
        full: full,
        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(MineryButton, {
            ...props,
            ...buttonProps,
            style: {
                ...buttonProps.style,
                ...props.style
            }
        })
    });
}

;// CONCATENATED MODULE: ./src/common/components/buttons/index.ts





;// CONCATENATED MODULE: ./src/common/components/form/InputField.tsx





const InputField = /*#__PURE__*/ react.forwardRef(function InputField({ label , right , style , containerStyle , ...props }, ref) {
    const textStyle = (0,dist/* useTextStyle */.T)({
        size: "xl"
    });
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(InputField_Container, {
        style: containerStyle,
        children: [
            label && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Label, {
                children: label
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(StyledInput, {
                ...props,
                ref: ref,
                style: {
                    ...textStyle,
                    ...style
                }
            }),
            right && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(RightContainer, {
                children: right
            })
        ]
    });
});
const InputField_Container = emotion_styled_esm/* default.div */.Z.div`
  position: relative;
  width: 100%;
`;
const Label = emotion_styled_esm/* default.label */.Z.label`
  color: ${constants/* colors.gray600 */.O9.gray600};
  margin-bottom: 4px;
`;
const StyledInput = emotion_styled_esm/* default.input */.Z.input`
  width: 100%;
  padding: 8px 0;
  color: ${constants/* colors.gray900 */.O9.gray900};
  border: none;
  outline: none;
  border-bottom: 1px solid ${constants/* colors.gray300 */.O9.gray300};
  &:focus {
    border-color: ${constants/* colors.primary700Default */.O9.primary700Default};
  }
  transition: all 150ms;
  &::placeholder {
    color: ${constants/* colors.gray400 */.O9.gray400};
  }
`;
const RightContainer = (0,emotion_styled_esm/* default */.Z)(dist/* Flex.Center */.kC.Center)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

;// CONCATENATED MODULE: ./src/common/components/form/index.ts


;// CONCATENATED MODULE: ./src/common/components/layout/Container.tsx

const Container_Container = emotion_styled_esm/* default.div */.Z.div`
  min-height: 100vh;
  overflow-y: scroll;
`;

// EXTERNAL MODULE: ./src/common/components/layout/ContentCard.tsx
var ContentCard = __webpack_require__(51196);
;// CONCATENATED MODULE: ./src/common/components/layout/Section.tsx

const Section = emotion_styled_esm/* default.section */.Z.section`
  background-color: #ffffff;
  padding: 24px 20px;
`;

;// CONCATENATED MODULE: ./src/common/components/layout/SectionDivider.tsx

const SectionDivider = emotion_styled_esm/* default.div */.Z.div`
  background-color: #f1f1f1;
  height: 7px;
  width: 100%;
`;

;// CONCATENATED MODULE: ./src/common/components/layout/index.ts





// EXTERNAL MODULE: ./node_modules/@boxfoxs/core-hooks/dist/index.js
var core_hooks_dist = __webpack_require__(28271);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/logger/dist/index.js
var logger_dist = __webpack_require__(255);
;// CONCATENATED MODULE: ./src/common/components/logging/LoggingRead.tsx




const LoggingRead = ({ children , ...rest })=>{
    const ref = (0,react.useRef)(null);
    const [log, setLogTrue] = (0,core_hooks_dist.useBooleanState)(false);
    const parent = (0,react.useContext)(ParentContext);
    (0,react.useEffect)(()=>{
        if (log) {
            return;
        }
        const handler = ()=>{
            const rect = ref.current?.getBoundingClientRect();
            if (!rect) {
                return;
            }
            if (rect.top + rect.height < window.innerHeight || rect.top < window.innerHeight / 4) {
                setLogTrue();
            }
        };
        const target = parent ?? document;
        target.addEventListener("scroll", handler);
        return ()=>{
            target.removeEventListener("scroll", handler);
        };
    }, [
        log,
        parent
    ]);
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(logger_dist.LoggingState, {
        ...rest,
        log: log,
        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
            ref: ref,
            children: children
        })
    });
};
LoggingRead.Parent = function Parent({ children  }) {
    const { 0: parent , 1: setParent  } = (0,react.useState)(null);
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ParentContext.Provider, {
        value: parent,
        children: children(setParent)
    });
};
const ParentContext = /*#__PURE__*/ (0,react.createContext)(null);

// EXTERNAL MODULE: ./src/common/hooks/index.ts + 7 modules
var hooks = __webpack_require__(61441);
// EXTERNAL MODULE: ./src/common/utils/index.ts + 3 modules
var utils = __webpack_require__(73373);
// EXTERNAL MODULE: ./src/common/utils/trackFbPageView.ts
var trackFbPageView = __webpack_require__(91338);
;// CONCATENATED MODULE: ./src/common/components/logging/LoggerRoot.tsx







const LoggerRoot = ({ children  })=>{
    const rawFrom = next_dist.QS.get("from");
    const [from, setFrom] = (0,hooks/* useSessionStorage */.Xs)("from");
    const props = {
        from,
        version: 1,
        service: "minery-shop"
    };
    (0,react.useEffect)(()=>{
        (0,trackFbPageView/* trackFbPageView */.jY)();
        if (rawFrom) {
            setFrom(rawFrom);
        }
        utils/* logger.setUserProperties */.kg.setUserProperties(props);
    }, [
        rawFrom
    ]);
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(logger_dist.LoggerProvider, {
        logger: utils/* logger */.kg,
        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(logger_dist.LoggerParamsProvider, {
            params: props,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/common/components/logging/index.ts



;// CONCATENATED MODULE: ./src/common/components/modal/Modal.tsx




function CommonModal({ children , onClose  }) {
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(BackDrop, {
        onClick: onClose,
        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(StyledModal, {
            onClick: (e)=>e.stopPropagation(),
            children: children
        })
    });
}
function useModal(key) {
    const { open , close  } = (0,dist/* usePopup */.BF)(key);
    return {
        close,
        open: (0,react.useCallback)((options)=>{
            open({
                ...options,
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(CommonModal, {
                    onClose: close,
                    children: options.children
                })
            });
        }, [
            open,
            close
        ])
    };
}
const BackDrop = emotion_styled_esm/* default.div */.Z.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
`;
const StyledModal = emotion_styled_esm/* default.div */.Z.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
`;

;// CONCATENATED MODULE: ./src/common/components/modal/ConfirmModal.tsx





function ConfirmModal({ type , content , confirmText ="확인" , onConfirm , closeText ="취소" , onClose  }) {
    const button = ()=>{
        if (type === "confirm") {
            return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ButtonWrapper, {
                onClick: onConfirm,
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ConfirmButton, {
                    size: "lg",
                    weight: "semibold",
                    color: constants/* colors.primary700Default */.O9.primary700Default,
                    children: confirmText
                })
            });
        }
        if (type === "select") {
            return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(ButtonWrapper, {
                children: [
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(CloseButton, {
                        size: "lg",
                        weight: "medium",
                        color: constants/* colors.gray600 */.O9.gray600,
                        onClick: onClose,
                        children: closeText
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ConfirmButton, {
                        size: "lg",
                        weight: "semibold",
                        color: constants/* colors.primary700Default */.O9.primary700Default,
                        onClick: onConfirm,
                        children: confirmText
                    })
                ]
            });
        }
        return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(emotion_react_jsx_runtime_esm/* Fragment */.HY, {});
    };
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(CommonModal, {
        onClose: onClose,
        children: /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(Wrapper, {
            children: [
                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ContentWrapper, {
                    children: content
                }),
                button()
            ]
        })
    });
}
const Wrapper = emotion_styled_esm/* default.div */.Z.div`
  width: calc(100% - 80px);
  max-width: 296px;
  padding: 32px 28px;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.02);
  background-color: ${constants/* colors.defaultWhite */.O9.defaultWhite};
`;
const DisplayCenter = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = (0,emotion_styled_esm/* default */.Z)(DisplayCenter)``;
const ButtonWrapper = (0,emotion_styled_esm/* default */.Z)(DisplayCenter)`
  margin-top: 32px;
`;
const CloseButton = (0,emotion_styled_esm/* default */.Z)(dist/* Text */.xv)`
  width: 50%;
  text-align: center;
`;
const ConfirmButton = (0,emotion_styled_esm/* default */.Z)(dist/* Text */.xv)`
  width: 50%;
  text-align: center;
`;

// EXTERNAL MODULE: ./node_modules/react-spring-bottom-sheet/dist/index.js
var react_spring_bottom_sheet_dist = __webpack_require__(47243);
;// CONCATENATED MODULE: ./src/common/components/modal/BottomSheet.tsx





function useBottomSheet() {
    const { open , close  } = (0,dist/* usePopup */.BF)("bottom-sheet");
    const ref = (0,react.useRef)(null);
    const openSheet = (0,react.useCallback)((options)=>{
        close();
        open({
            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(WrappedBottomSheet, {
                /** @ts-ignore */ ref: ref,
                ...options,
                onClose: ()=>{
                    close();
                    options.onClose?.();
                }
            }, Date.now().toString())
        });
    }, [
        open,
        close
    ]);
    const closeSheet = (0,react.useCallback)(()=>ref.current?.close(), []);
    return {
        open: openSheet,
        close: closeSheet
    };
}
const WrappedBottomSheet = /*#__PURE__*/ react.forwardRef(function WrappedBottomSheet({ children , onClose , ...props }, ref) {
    const [state, , close] = (0,core_hooks_dist.useBooleanState)(true);
    (0,react.useImperativeHandle)(ref, ()=>({
            close
        }), []);
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(react_spring_bottom_sheet_dist/* BottomSheet */.R, {
        open: state,
        onDismiss: close,
        onSpringEnd: ({ type  })=>type === "CLOSE" && onClose?.(),
        ...props,
        children: children
    });
});

;// CONCATENATED MODULE: ./src/common/components/modal/index.ts




// EXTERNAL MODULE: ./src/common/components/space/index.tsx
var space = __webpack_require__(83133);
// EXTERNAL MODULE: ./src/common/components/AmountControl.tsx
var AmountControl = __webpack_require__(75275);
;// CONCATENATED MODULE: ./src/common/components/animation/NotifyVisible.tsx




const NotifyVisible_NotifyVisible = Object.assign(/*#__PURE__*/ react.forwardRef(function NotifyVisible({ offset =0 , onVisible , ...props }, forwardedRef) {
    const ref = (0,react.useRef)(null);
    const prevVisible = (0,react.useRef)(false);
    const update = (0,react.useCallback)(()=>{
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) {
            return;
        }
        const topOffset = typeof offset === "number" ? offset : offset.top ?? 0;
        const bottomOffset = typeof offset === "number" ? offset : offset.bottom ?? 0;
        const state = rect.top <= topOffset && rect.bottom > bottomOffset;
        if (state !== prevVisible.current) {
            prevVisible.current = state;
            onVisible?.(state);
        }
    }, []);
    const parentContainer = (0,react.useContext)(NotifyVisible_ParentContext);
    const target = parentContainer ?? ((0,next_dist.isClient)() ? window : null);
    (0,react.useEffect)(()=>{
        if (!target) {
            return;
        }
        target.addEventListener("scroll", update);
        return ()=>{
            target.removeEventListener("scroll", update);
        };
    }, [
        target
    ]);
    const combinedRef = (0,core_hooks_dist.useCombinedRefs)(forwardedRef, ref, update);
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
        ...props,
        ref: combinedRef
    });
}), {
    Parent
});
function Parent({ children  }) {
    const { 0: parent , 1: setParent  } = (0,react.useState)(null);
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(NotifyVisible_ParentContext.Provider, {
        value: parent,
        children: children(setParent)
    });
}
const NotifyVisible_ParentContext = /*#__PURE__*/ (0,react.createContext)(null);

;// CONCATENATED MODULE: ./src/common/components/animation/VisibleByScroll.tsx



function VisibleByScroll_VisibleByScroll({ children , offset =0.7  }) {
    const { 0: visible , 1: setVisible  } = useState(false);
    return /*#__PURE__*/ _jsx(NotifyVisible, {
        onVisible: setVisible,
        offset: offset,
        children: children(visible)
    });
}

;// CONCATENATED MODULE: ./src/common/components/animation/FadeByScrollAnimation.tsx



function FadeByScrollAnimation(props) {
    return /*#__PURE__*/ _jsx(VisibleByScroll, {
        offset: 0.6,
        children: (isVisible)=>/*#__PURE__*/ _jsx(FadeAnimation, {
                visible: isVisible,
                ...props
            })
    });
}
function FadeAnimation({ visible , children , delay  }) {
    const spring1 = useSpring({
        from: {
            transform: "translateY(10%)"
        },
        to: {
            transform: `translateY(${visible ? "0%" : "10%"})`
        },
        delay,
        config: {
            tension: 150,
            friction: 26,
            precision: 0.01,
            duration: 700
        }
    });
    const spring2 = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: visible !== false ? 1 : 0
        },
        delay,
        config: {
            tension: 150,
            friction: 26,
            precision: 0.01,
            duration: 1300
        }
    });
    return /*#__PURE__*/ _jsx(animated.div, {
        style: {
            ...spring1,
            ...spring2
        },
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./src/common/components/animation/TypingAnimation.tsx





function TypingAnimation({ children , speed =100 , onFinish , ...rest }) {
    const { 0: items , 1: setItems  } = useState([]);
    const data = useMemo(()=>convert(children), [
        children
    ]);
    const preservedCallback = useCallbackRef(onFinish ?? console.log);
    useEffect(()=>{
        if (items.length === data.length) {
            return;
        }
        let idx = 0;
        const interval = setInterval(()=>{
            const item = data[idx++];
            setItems((items)=>[
                    ...items,
                    item
                ]);
            if (idx === data.length) {
                clearInterval(interval);
                preservedCallback();
            }
        }, speed);
        return ()=>clearInterval(interval);
    }, [
        speed
    ]);
    return /*#__PURE__*/ _jsx(Text, {
        ...rest,
        children: items
    });
}
function convert(items) {
    const convertItem = (item)=>{
        if (typeof item === "string") {
            return item.split("");
        }
        if (Array.isArray(item)) {
            return flatMap(item.map(convertItem));
        }
        return [
            item
        ];
    };
    return flatMap(convertItem(items));
}

;// CONCATENATED MODULE: ./src/common/components/animation/index.ts





;// CONCATENATED MODULE: ./src/common/components/index.ts












/***/ }),

/***/ 51196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ContentCard)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56361);

const ContentCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"].article */ .Z.article`
  padding: 16px;
  background: #ffffff;
  border-radius: 6px;
`;


/***/ }),

/***/ 83133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Space)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68847);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16657);


function Space({ bottom =0 , right =0 , left =0  }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__/* .jsx */ .tZ("div", {
        css: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)({
            paddingLeft: left,
            paddingBottom: bottom,
            paddingRight: right
        })
    });
}


/***/ }),

/***/ 46173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
const colors = {
    primary100: "var(--primary--100)",
    primary200: "var(--primary--200)",
    primary300: "var(--primary--300)",
    primary400: "var(--primary--400)",
    primary500: "var(--primary--500)",
    primary600: "var(--primary--600)",
    primary700Default: "var(--primary--700-default)",
    primary800Pressed: "var(--primary--800-pressed)",
    primary900: "var(--primary--900)",
    gray100: "var(--gray--100)",
    gray200: "var(--gray--200)",
    gray300: "var(--gray--300)",
    gray400: "var(--gray--400)",
    gray500: "var(--gray--500)",
    gray600: "var(--gray--600)",
    gray700: "var(--gray--700)",
    gray800: "var(--gray--800)",
    gray900: "var(--gray--900)",
    defaultWhite: "var(--default---white)",
    defaultBlack: "var(--default---black)",
    systemError: "var(--system---error)",
    systemWarning: "var(--system---warning)",
    systemSuccess: "var(--system---success)",
    subBlue100: "var(--sub---blue_100)",
    subBlue500: "var(--sub---blue_500)",
    subGreen100: "var(--sub---green_100)",
    subGreen500: "var(--sub---green_500)",
    subIvory100: "var(--sub---ivory_100)",
    backupWhiteWhite: "var(--backup---white---white)",
    backupWhite95: "var(--backup---white--95)",
    backupWhite90: "var(--backup---white--90)",
    backupWhite85: "var(--backup---white--85)",
    backupWhite80: "var(--backup---white--80)",
    backupWhite75: "var(--backup---white--75)",
    backupWhite70: "var(--backup---white--70)",
    backupWhite65: "var(--backup---white--65)",
    backupWhite60: "var(--backup---white--60)",
    backupWhite55: "var(--backup---white--55)",
    backupWhite50: "var(--backup---white--50)",
    backupWhite45: "var(--backup---white--45)",
    backupWhite40: "var(--backup---white--40)",
    backupWhite35: "var(--backup---white--35)",
    backupWhite30: "var(--backup---white--30)",
    backupWhite25: "var(--backup---white--25)",
    backupWhite15: "var(--backup---white--15)",
    backupWhite10: "var(--backup---white--10)",
    backupBlackBlack: "var(--backup---black---black)",
    backupBlack95: "var(--backup---black--95)",
    backupBlack90: "var(--backup---black--90)",
    backupBlack85: "var(--backup---black--85)",
    backupBlack80: "var(--backup---black--80)",
    backupBlack75: "var(--backup---black--75)",
    backupBlack70: "var(--backup---black--70)",
    backupBlack65: "var(--backup---black--65)",
    backupBlack60: "var(--backup---black--60)",
    backupBlack55: "var(--backup---black--55)",
    backupBlack50: "var(--backup---black--50)",
    backupBlack45: "var(--backup---black--45)",
    backupBlack40: "var(--backup---black--40)",
    backupBlack35: "var(--backup---black--35)",
    backupBlack30: "var(--backup---black--30)",
    backupBlack25: "var(--backup---black--25)",
    backupBlack20: "var(--backup---black--20)",
    backupBlack15: "var(--backup---black--15)",
    backupBlack10: "var(--backup---black--10)"
};


/***/ }),

/***/ 16439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cF": () => (/* reexport */ IMP_KEY),
  "tD": () => (/* reexport */ KAKAO_CHANNEL_LINK),
  "O9": () => (/* reexport */ colors/* colors */.O)
});

// UNUSED EXPORTS: textSizes

// EXTERNAL MODULE: ./src/common/constants/colors.ts
var colors = __webpack_require__(46173);
;// CONCATENATED MODULE: ./src/common/constants/env.ts
const IMP_KEY = "imp34226882";

// EXTERNAL MODULE: ./src/common/constants/textStyles.ts
var textStyles = __webpack_require__(13547);
;// CONCATENATED MODULE: ./src/common/constants/kakao.ts
const KAKAO_CHANNEL_LINK = "http://pf.kakao.com/_SrDYxj";

;// CONCATENATED MODULE: ./src/common/constants/index.ts






/***/ }),

/***/ 13547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ textSizes)
/* harmony export */ });
const textSizes = {
    base: 14,
    sm: 12,
    lg: 16,
    xl: 18,
    xxl: 20,
    heading1: 40,
    heading2: 36,
    heading3: 30,
    heading4: 24,
    caption: 10
};


/***/ }),

/***/ 61441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "au": () => (/* reexport */ useCountdown),
  "H5": () => (/* reexport */ useMaintainScrollGlobal),
  "Sm": () => (/* reexport */ useScrollIsOnTop),
  "Xs": () => (/* reexport */ useSessionStorage),
  "aF": () => (/* reexport */ useUser/* useUser */.a),
  "nW": () => (/* reexport */ useWineList)
});

// UNUSED EXPORTS: useMaintainScroll

// EXTERNAL MODULE: ./src/common/hooks/useUser.ts
var useUser = __webpack_require__(26808);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/core-hooks-dom/dist/index.js
var dist = __webpack_require__(25646);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/next/dist/index.js
var next_dist = __webpack_require__(23399);
;// CONCATENATED MODULE: ./src/common/hooks/useStorage.ts


const sessionStorage$ = (0,dist.createObservableStorage)(next_dist.safeSessionStorage);
function useSessionStorage(key, defaultValue) {
    return (0,dist.useStorage)(sessionStorage$, key, defaultValue);
}

// EXTERNAL MODULE: ./src/common/hooks/queries/index.ts + 4 modules
var queries = __webpack_require__(74653);
;// CONCATENATED MODULE: ./src/common/hooks/useOrders.ts

const useOrders = ({ status  })=>{
    const [orders] = useOrderList(status);
    const filteredOrders = orders?.filter((order)=>{
        if (status === "ALL") {
            return true;
        }
        return order.status === status;
    });
    return filteredOrders;
};
/* harmony default export */ const hooks_useOrders = ((/* unused pure expression or super */ null && (useOrders)));

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./src/common/api/product/index.ts + 1 modules
var product = __webpack_require__(4026);
;// CONCATENATED MODULE: ./src/common/hooks/useWineList.ts


function useWineList({ wineType , order  }) {
    return (0,lib.useQuery)([
        "/products",
        wineType,
        order
    ], ()=>(0,product/* fetchProductList */.y)({
            wineType,
            order
        }));
}

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/common/hooks/useCountdown.ts


function useCountdown(value) {
    const intervalRef = (0,react.useRef)();
    const { 0: restSeconds , 1: setRestSeconds  } = (0,react.useState)(value);
    const start = (0,react.useCallback)(()=>{
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(()=>setRestSeconds((prev)=>{
                if (prev === 0) {
                    clearInterval(intervalRef.current);
                }
                return (0,lodash.max)([
                    0,
                    prev - 1
                ]) ?? 0;
            }), 1000);
    }, []);
    (0,react.useEffect)(()=>{
        start();
        return ()=>{
            clearInterval(intervalRef.current);
        };
    }, [
        start
    ]);
    const reset = (0,react.useCallback)(()=>{
        setRestSeconds(value);
        start();
    }, [
        value,
        start
    ]);
    return {
        value: restSeconds,
        reset,
        minutes: Math.floor(restSeconds / 60),
        seconds: restSeconds % 60
    };
}

;// CONCATENATED MODULE: ./src/common/hooks/dom/useScrollIsOnTop.ts


function useScrollIsOnTop(offset = 0) {
    const { 0: isOnTop , 1: set  } = (0,react.useState)(true);
    const ref = (0,dist.useOnScroll)((e)=>{
        const scrollTop = "documentElement" in e.target ? e.target.documentElement.scrollTop : e.target.scrollTop;
        set(scrollTop <= offset);
    });
    return {
        isOnTop,
        ref
    };
}

// EXTERNAL MODULE: ./node_modules/@boxfoxs/core-hooks/dist/index.js
var core_hooks_dist = __webpack_require__(28271);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./src/common/hooks/dom/useMaintainScroll.ts




function useMaintainScroll(key) {
    const target = useRef();
    const router = useRouter();
    useEffect(()=>{
        const pos = sessionStorage.getItem(`@scroll-position/${key}/${history.state.key}`);
        if (pos) {
            target.current?.scrollTo(0, Number(pos));
        }
    }, [
        router.route,
        key
    ]);
    const save = useDebounce((key, y)=>{
        sessionStorage.setItem(`@scroll-position/${key}`, String(y));
    }, 100);
    const setTarget = useOnScroll((e)=>{
        const y = e.target.scrollTop;
        save(`${key}/${history.state.key}`, y);
    });
    return useCombinedRefs(target, setTarget);
}
function useMaintainScrollGlobal() {
    const router = (0,next_router.useRouter)();
    (0,react.useEffect)(()=>{
        const pos = sessionStorage.getItem(`@scroll-position/${history.state.key}`);
        if (pos) {
            window.scrollTo(0, Number(pos));
        }
    }, [
        router.route
    ]);
    const save = (0,core_hooks_dist.useDebounce)((key, y)=>{
        sessionStorage.setItem(`@scroll-position/${key}`, String(y));
    }, 100);
    (0,react.useEffect)(()=>{
        const handler = ()=>{
            const y = window.scrollY;
            const key = history.state.key;
            save(key, y);
        };
        window.addEventListener("scroll", handler);
        return ()=>{
            window.removeEventListener("scroll", handler);
        };
    }, []);
}

;// CONCATENATED MODULE: ./src/common/hooks/dom/index.ts



;// CONCATENATED MODULE: ./src/common/hooks/index.ts








/***/ }),

/***/ 74653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v4": () => (/* reexport */ useAddressList),
  "VI": () => (/* reexport */ useCartList),
  "rB": () => (/* reexport */ useOrderList),
  "bT": () => (/* reexport */ useUserQuery)
});

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./src/common/api/auth/index.ts + 7 modules
var auth = __webpack_require__(97173);
;// CONCATENATED MODULE: ./src/common/hooks/queries/useUserQuery.ts


const useUserQuery = (userId)=>{
    const query = (0,lib.useQuery)([
        "/auth/me"
    ], async ()=>{
        try {
            return await (0,auth/* fetchCurrentUser */.k)();
        } catch  {
            return undefined;
        }
    });
    return [
        query.data,
        query.refetch
    ];
};

// EXTERNAL MODULE: ./src/common/api/cart/index.ts + 6 modules
var cart = __webpack_require__(21708);
// EXTERNAL MODULE: ./src/common/hooks/useUser.ts
var useUser = __webpack_require__(26808);
;// CONCATENATED MODULE: ./src/common/hooks/queries/useCartList.ts



const useCartList = (options)=>{
    const [user] = (0,useUser/* useUser */.a)();
    const query = (0,lib.useQuery)([
        "/cart",
        user?.id
    ], cart/* fetchCartList */.As, options);
    return [
        query.data,
        query.refetch
    ];
};

// EXTERNAL MODULE: ./src/common/api/order/index.ts + 2 modules
var order = __webpack_require__(35066);
;// CONCATENATED MODULE: ./src/common/hooks/queries/useOrderList.ts


function useOrderList(status, options) {
    const query = (0,lib.useQuery)([
        "order-items",
        status
    ], order/* fetchOrders */.A, options);
    return [
        query.data,
        query.refetch
    ];
}

// EXTERNAL MODULE: ./src/common/api/address/index.ts + 2 modules
var address = __webpack_require__(90155);
;// CONCATENATED MODULE: ./src/common/hooks/queries/useAddressQuery.ts


const useAddressList = (options)=>{
    const query = (0,lib.useQuery)([
        "/fetch-address"
    ], async ()=>{
        try {
            return await (0,address/* fetchAddress */.H)();
        } catch  {
            return [];
        }
    }, options);
    return [
        query.data,
        query.refetch
    ];
};

;// CONCATENATED MODULE: ./src/common/hooks/queries/index.ts






/***/ }),

/***/ 35982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useProductList)
/* harmony export */ });
/* harmony import */ var common_api_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4026);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23724);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);


function useProductList(options) {
    const query = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("product-list", ()=>(0,common_api_product__WEBPACK_IMPORTED_MODULE_0__/* .fetchProductList */ .y)({}), options);
    return [
        query.data,
        query.refetch
    ];
}


/***/ }),

/***/ 24328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jD": () => (/* binding */ useCart),
  "l8": () => (/* binding */ useControlCart),
  "XZ": () => (/* binding */ useLocalCart)
});

// EXTERNAL MODULE: ./src/common/api/cart/index.ts + 6 modules
var cart = __webpack_require__(21708);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/recoil/cjs/index.js
var cjs = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/recoil-persist/dist/index.js
var dist = __webpack_require__(6983);
;// CONCATENATED MODULE: ./src/common/recoil/cartState.ts


const sessionStorage =  false ? 0 : undefined;
const { persistAtom  } = (0,dist/* recoilPersist */.J)({
    storage: sessionStorage
});
const localCartState = (0,cjs/* atom */.cn)({
    key: "local-cart",
    default: [],
    effects_UNSTABLE: [
        persistAtom
    ]
});

// EXTERNAL MODULE: ./src/common/hooks/queries/index.ts + 4 modules
var queries = __webpack_require__(74653);
// EXTERNAL MODULE: ./src/common/hooks/queries/useWineList.ts
var useWineList = __webpack_require__(35982);
// EXTERNAL MODULE: ./src/common/hooks/useUser.ts
var useUser = __webpack_require__(26808);
;// CONCATENATED MODULE: ./src/common/hooks/useCart.ts







function useCart(options) {
    const [list, reload] = (0,queries/* useCartList */.VI)(options);
    const { value  } = useLocalCart();
    const [products] = (0,useWineList/* useProductList */.u)();
    const localList = (0,react.useMemo)(()=>{
        if (products == null) {
            return [];
        }
        return value.map((item)=>{
            const product = products.find((p)=>p.id === item.productId);
            return {
                id: Date.now(),
                product,
                amount: item.amount,
                options: item.options.map((o)=>({
                        id: o.optionId,
                        option: product.options.find((o2)=>o2.id === o.optionId),
                        amount: o.amount
                    }))
            };
        });
    }, [
        value,
        products
    ]);
    const combined = (0,react.useMemo)(()=>[
            ...localList,
            ...list ?? []
        ], [
        localList,
        list
    ]);
    return {
        value: combined,
        local: localList,
        reload
    };
}
function useControlCart() {
    const [user] = (0,useUser/* useUser */.a)();
    const { value , local , reload  } = useCart();
    const localControl = useLocalCart();
    const remove = (0,react.useCallback)(async (id)=>{
        const idx = local.findIndex((i)=>i.id === id);
        if (idx >= 0) {
            localControl.remove(idx);
        } else {
            await (0,cart/* deleteFromCart */.EI)(id);
            await reload();
        }
    }, [
        value,
        local
    ]);
    const clear = (0,react.useCallback)(async ()=>{
        if (user) {
            await (0,cart/* clearCart */.LL)();
            await reload();
        }
        localControl.clear();
    }, [
        user
    ]);
    const updateAmount = (0,react.useCallback)(async (id, amount)=>{
        const idx = local.findIndex((i)=>i.id === id);
        if (idx >= 0) {
            localControl.updateItem(idx, {
                amount
            });
        } else {
            await (0,cart/* updateAmount */.oZ)(id, amount);
            await reload();
        }
    }, [
        value,
        local
    ]);
    const add = (0,react.useCallback)(async (data)=>{
        const item = value.find((i)=>i.product.id === data.productId && i.options.every((o)=>data.options.find((o2)=>o.option.id === o2.optionId)?.amount === o.amount));
        if (item) {
            return updateAmount(item.id, item.amount + data.amount);
        }
        if (user) {
            await (0,cart/* addToCart */.Xq)(data);
            await reload();
        } else {
            localControl.add(data);
        }
    }, [
        user,
        value,
        updateAmount
    ]);
    return {
        value,
        local,
        reload,
        add,
        remove,
        clear,
        updateAmount
    };
}
function useLocalCart() {
    const [list, update] = (0,cjs/* useRecoilState */.FV)(localCartState);
    const add = (0,react.useCallback)((data)=>{
        update((prev)=>[
                ...prev,
                data
            ]);
    }, []);
    const clear = (0,react.useCallback)(()=>update([]), []);
    const remove = (0,react.useCallback)((targetIdx)=>{
        update((prev)=>prev.filter((_, idx)=>idx !== targetIdx));
    }, []);
    const updateItem = (0,react.useCallback)((idx, updates)=>{
        update((prev)=>{
            const newList = [
                ...prev
            ];
            newList[idx] = {
                ...prev[idx],
                ...updates
            };
            return newList;
        });
    }, []);
    return {
        add,
        clear,
        remove,
        value: list ?? [],
        updateItem
    };
}


/***/ }),

/***/ 26808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var common_api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97173);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23724);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);


function useUser(options) {
    const query = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("user", common_api_auth__WEBPACK_IMPORTED_MODULE_0__/* .fetchCurrentUser */ .k, options);
    return [
        query.data,
        query.refetch
    ];
}


/***/ }),

/***/ 80923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ ToastProvider),
  "p": () => (/* binding */ useToast)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/recoil/cjs/index.js
var cjs = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.esm.js
var emotion_styled_esm = __webpack_require__(56361);
;// CONCATENATED MODULE: ./src/common/recoil/toast.ts

const toastState = (0,cjs/* atom */.cn)({
    key: "toastState",
    default: ""
});

;// CONCATENATED MODULE: ./src/common/layout/ToastProvider.tsx




const ToastItem = ({ content  })=>{
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Container, {
        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Wrapper, {
            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ContentWrapper, {
                children: content
            })
        })
    });
};
function ToastProvider({ children  }) {
    const toastContent = (0,cjs/* useRecoilValue */.sJ)(toastState);
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)("div", {
        children: [
            toastContent && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ToastItem, {
                content: toastContent
            }),
            children
        ]
    });
}
function useToast() {
    const setToastContent = (0,cjs/* useSetRecoilState */.Zl)(toastState);
    const open = ({ children  })=>{
        setToastContent(children);
        setTimeout(()=>{
            setToastContent("");
        }, 1000);
    };
    return {
        open
    };
}
const Container = emotion_styled_esm/* default.div */.Z.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = emotion_styled_esm/* default.div */.Z.div`
  position: fixed;
  top: 50px;
  width: calc(100% - 40px);
  max-width: 460px;
  padding: 14px 16px;
  border-radius: 6px;
  box-shadow: 0 4px 11px rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;
const ContentWrapper = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  align-items: center;
`;


/***/ }),

/***/ 79201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EN": () => (/* binding */ safeLocalStorage)
/* harmony export */ });
/* unused harmony exports generateStorage, generateSessionStorage, safeSessionStorage */
class MemoStorage {
    storage = new Map();
    get(key) {
        return this.storage.get(key);
    }
    set(key, value) {
        this.storage.set(key, value);
    }
    remove(key) {
        this.storage.delete(key);
    }
}
class LocalStorage {
    static canUse() {
        const TEST_KEY = "LOCAL_STORAGE_TEST_KEY";
        try {
            localStorage.setItem(TEST_KEY, "test");
            localStorage.removeItem(TEST_KEY);
            return true;
        } catch (err) {
            return false;
        }
    }
    get(key) {
        return localStorage.getItem(key) ?? undefined;
    }
    set(key, value) {
        localStorage.setItem(key, value);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
class SessionStorage {
    static canUse() {
        const TEST_KEY = "SESSION_STORAGE_TEST_KEY";
        try {
            sessionStorage.setItem(TEST_KEY, "test");
            sessionStorage.removeItem(TEST_KEY);
            return true;
        } catch (err) {
            return false;
        }
    }
    get(key) {
        return sessionStorage.getItem(key) ?? undefined;
    }
    set(key, value) {
        sessionStorage.setItem(key, value);
    }
    remove(key) {
        sessionStorage.removeItem(key);
    }
}
function generateStorage() {
    if (LocalStorage.canUse()) {
        return new LocalStorage();
    }
    return new MemoStorage();
}
function generateSessionStorage() {
    if (SessionStorage.canUse()) {
        return new SessionStorage();
    }
    return new MemoStorage();
}
const safeLocalStorage = generateStorage();
const safeSessionStorage = generateSessionStorage();


/***/ }),

/***/ 33499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$9": () => (/* binding */ clearAccessToken),
/* harmony export */   "M8": () => (/* binding */ setAccessToken),
/* harmony export */   "hP": () => (/* binding */ getAccessToken)
/* harmony export */ });
/* unused harmony export ACCESS_TOKEN_KEY */
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79201);

const ACCESS_TOKEN_KEY = "@YWNjZXNzX3Rva2Vu";
function getAccessToken() {
    return _Storage__WEBPACK_IMPORTED_MODULE_0__/* .safeLocalStorage.get */ .EN.get(ACCESS_TOKEN_KEY);
}
function clearAccessToken() {
    return _Storage__WEBPACK_IMPORTED_MODULE_0__/* .safeLocalStorage.remove */ .EN.remove(ACCESS_TOKEN_KEY);
}
function setAccessToken(accessToken) {
    return _Storage__WEBPACK_IMPORTED_MODULE_0__/* .safeLocalStorage.set */ .EN.set(ACCESS_TOKEN_KEY, accessToken);
}


/***/ }),

/***/ 73373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gb": () => (/* reexport */ checkValidPhoneNumber),
  "$9": () => (/* reexport */ access_token/* clearAccessToken */.$9),
  "un": () => (/* reexport */ formatPhoneNumber),
  "hP": () => (/* reexport */ access_token/* getAccessToken */.hP),
  "kg": () => (/* reexport */ logger),
  "M8": () => (/* reexport */ access_token/* setAccessToken */.M8),
  "bP": () => (/* reexport */ trackFbPageView/* startOrder */.bP),
  "pm": () => (/* reexport */ trackFbPageView/* submitOrder */.pm)
});

// UNUSED EXPORTS: ACCESS_TOKEN_KEY, FORMATTED_PHONE_NUMBER_REGEX, PHONE_NUMBER_REGEX, createWebAmplitudeLogger, formatPrice, formatTimeLeft, generateSessionStorage, generateStorage, safeLocalStorage, safeSessionStorage, trackFbPageView

// EXTERNAL MODULE: ./src/common/utils/access-token.ts
var access_token = __webpack_require__(33499);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/next/dist/index.js
var dist = __webpack_require__(23399);
;// CONCATENATED MODULE: ./src/common/utils/amplitude.ts

const AMPLITUDE_API_KEY = "7266988443867d11011c285d5f08ba7a";
function createWebAmplitudeLogger() {
    if ((0,dist.isServer)()) {
        return {
            log: console.log,
            setUserId: console.log,
            setUserProperties: console.log
        };
    }
    const amplitudeJs = __webpack_require__(16791);
    const client = amplitudeJs.default.getInstance();
    client.init(AMPLITUDE_API_KEY);
    return {
        log: async (name, params)=>{
            // if (isAlpha()) {
            console.log("\x1b[36m[Alpha-Log]", name, JSON.stringify(params), "\x1b[0m");
            // } else {
            client.logEvent(name, params ?? {});
        // }
        },
        setUserId: (id)=>client.setUserId(id),
        setUserProperties: (props)=>client.setUserProperties(props)
    };
}
const logger = createWebAmplitudeLogger();

;// CONCATENATED MODULE: ./src/common/utils/formatPhoneNumber.ts
function formatPhoneNumber(rawPhoneNumber) {
    if (!rawPhoneNumber) {
        return "";
    }
    const phoneNumber = rawPhoneNumber.replace(/[^0-9]/g, "");
    const isSeoulNumber = phoneNumber.startsWith("02");
    // 서울 국번(02)인 경우에만 지역번호가 2자리입니다.
    const areaCodeEndIndex = isSeoulNumber ? 2 : 3;
    const centerLength = phoneNumber.length >= areaCodeEndIndex + 8 ? 4 : 3;
    // 10자리 전화번호 (또는 서울인 경우, 9자리 전화번호)에 대응하기 위해서
    // [0:areaCodeEndIndex], [areaCodeEndIndex:length-4], [length-4:length] 형식으로 나누고 join합니다.
    return [
        phoneNumber.slice(0, areaCodeEndIndex),
        phoneNumber.substr(areaCodeEndIndex, centerLength),
        phoneNumber.substr(areaCodeEndIndex + centerLength, 4), 
    ].filter((i)=>i.length > 0).join("-");
}

;// CONCATENATED MODULE: ./src/common/utils/phoneUtil.ts
const PHONE_NUMBER_REGEX = /(01[016789]|099|098|090)[0-9]{8}/;
const FORMATTED_PHONE_NUMBER_REGEX = /(01[016789]|099|098|090)-([0-9]{4})-([0-9]{4})/;
function checkValidPhoneNumber(phoneNumber) {
    if (phoneNumber === undefined) return false;
    else return PHONE_NUMBER_REGEX.test(phoneNumber.replace(/[^0-9]/g, ""));
}
function formatTimeLeft(timeLeft) {
    const leftMinute = Math.floor(timeLeft / 60);
    const leftSecond = timeLeft % 60;
    const formattedLeftMinute = leftMinute < 10 ? "0" + leftMinute : leftMinute;
    const formattedLeftSecond = leftSecond < 10 ? "0" + leftSecond : leftSecond;
    return formattedLeftMinute + ":" + formattedLeftSecond;
}

// EXTERNAL MODULE: ./src/common/utils/Storage.ts
var Storage = __webpack_require__(79201);
// EXTERNAL MODULE: ./src/common/utils/trackFbPageView.ts
var trackFbPageView = __webpack_require__(91338);
;// CONCATENATED MODULE: ./src/common/utils/index.ts









/***/ }),

/***/ 91338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bP": () => (/* binding */ startOrder),
/* harmony export */   "jY": () => (/* binding */ trackFbPageView),
/* harmony export */   "pm": () => (/* binding */ submitOrder)
/* harmony export */ });
/* harmony import */ var _boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23399);
/* harmony import */ var _boxfoxs_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__);

// @TODO pxiel id 설정 필요
const PIXEL_ID = "6995384113825981";
const trackFbPageView = async ()=>{
    if ((0,_boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__.isServer)()) {
        return;
    }
    const ReactPixel = (__webpack_require__(51767)["default"]);
    ReactPixel.init(PIXEL_ID);
    ReactPixel.pageView();
};
function startOrder() {
    const ReactPixel = (__webpack_require__(51767)["default"]);
    ReactPixel.track("StartOrder");
}
function submitOrder() {
    const ReactPixel = (__webpack_require__(51767)["default"]);
    ReactPixel.track("SubmitOrder");
}


/***/ }),

/***/ 57172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header),
  "Y": () => (/* binding */ StyledImage)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/bds-web/dist/index.js
var dist = __webpack_require__(40756);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.esm.js
var emotion_styled_esm = __webpack_require__(56361);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/bds-common/dist/index.js
var bds_common_dist = __webpack_require__(5547);
;// CONCATENATED MODULE: ./src/common/utils/pressableStyle.ts


const pressableStyle = {
    background: (background = bds_common_dist.colors.gray[100])=>`
    transition: background 250ms;
    &:active {
      background: ${background};
    }
    ${(0,dist/* inDesktop */.Qx)(`
      &:focus {
        background: ${background};
      }
    `)}
  `,
    opacity: (opacity = 0.7)=>`
    transition: opacity 200ms;
    &:active {
      opacity: ${opacity};
    }
    ${(0,dist/* inDesktop */.Qx)(`
      &:focus {
        opacity: ${opacity};
      }
    `)}
  `,
    scale: (scale = 0.97)=>`
    transition: transform 150ms;
    &:active {
      transform: scale(${scale});
    }
    ${(0,dist/* inDesktop */.Qx)(`
      &:focus {
        transform: scale(${scale});
      }
    `)}
  `
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/hooks/index.ts + 7 modules
var hooks = __webpack_require__(61441);
// EXTERNAL MODULE: ./src/common/components/appbar/CartButton.tsx
var CartButton = __webpack_require__(76660);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/logger/dist/index.js
var logger_dist = __webpack_require__(255);
;// CONCATENATED MODULE: ./src/home/components/Header.tsx









function Header() {
    const { isOnTop  } = (0,hooks/* useScrollIsOnTop */.Sm)(10);
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(HeaderContaer, {
        full: !isOnTop,
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                src: "/assets/text_logo.svg",
                width: 91,
                height: 32,
                alt: "logo"
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                flex: 1
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(logger_dist.LoggingClick, {
                name: "Tap - Cart in Home Header",
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(CartButton/* CartButton */.W, {})
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(logger_dist.LoggingClick, {
                name: "Tap - My in Home Header",
                children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ((link_default()), {
                    passHref: true,
                    href: "/my",
                    children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(StyledImage, {
                        src: "/assets/profile.svg",
                        width: 40,
                        height: 40,
                        alt: "profile"
                    })
                })
            })
        ]
    });
}
const HeaderContaer = emotion_styled_esm/* default.nav */.Z.nav`
  display: flex;
  align-items: center;

  height: 56px;
  padding: 0 24px;
  background: white;
  position: fixed;
  top: 0px;
  z-index: 2;

  max-width: ${(p)=>p.full ? "500px" : "calc(500px - 40px)"};
  width: ${(p)=>p.full ? "100%" : "calc(100% - 40px)"};
  transform: translate(${(p)=>p.full ? "0, 0" : "20px, 20px"});
  border-radius: ${(p)=>p.full ? "0px" : "54px"};
  transition: all 300ms;
  filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.05));
`;
const StyledImage = (0,emotion_styled_esm/* default */.Z)((image_default()))`
  ${pressableStyle.opacity()}
`;


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-c67a75d1b6f99dc8.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/XO-MSJyvG54R224rrExGJ/_buildManifest.js","static/XO-MSJyvG54R224rrExGJ/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/177-89066147dfd01bf9.js","static/chunks/pages/index-2741a3e279a233d0.js"],"/_app":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/css/9e85e6e2b6f4bbd6.css","static/chunks/pages/_app-505a4300d111062a.js"],"/_error":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/_error-a4ba2246ff8fb532.js"],"/address/add-address":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/159-05aec3b80de6526d.js","static/chunks/pages/address/add-address-9e0c93afbb97d35e.js"],"/address/new-address":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/159-05aec3b80de6526d.js","static/chunks/pages/address/new-address-682fe4689ae8285a.js"],"/auth":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/auth-d8271f68860aa935.js"],"/auth/code":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/auth/code-5979099c66a28846.js"],"/auth/phone":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/auth/phone-a80182aea4353517.js"],"/cart":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/cart-333bc504ccb24b0b.js"],"/complete-order":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/797-c3117c16fed7c671.js","static/chunks/pages/complete-order-6d1b3708fc1eb0a2.js"],"/customer-service":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/customer-service-e087a77ccb5573fe.js"],"/my":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/my-d474f3dac852caa2.js"],"/order":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/797-c3117c16fed7c671.js","static/chunks/pages/order-f7a446d755fd4808.js"],"/order/list":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/order/list-4f4a54cd292e1dc8.js"],"/process-payment":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/pages/process-payment-a58200aae242b05e.js"],"/product/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/842-94820a0fc076d09a.js","static/chunks/177-89066147dfd01bf9.js","static/css/738e8f61204d6bba.css","static/chunks/pages/product/[id]-cc1a4790e4fc61c7.js"],"/product/[id]/label":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/842-94820a0fc076d09a.js","static/css/738e8f61204d6bba.css","static/chunks/pages/product/[id]/label-78fefa863323bdde.js"],"/product/[id]/review/[reviewId]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-4556c45dd113b893.js","static/chunks/main-a9843dfedfe4c8a6.js","static/chunks/842-94820a0fc076d09a.js","static/chunks/177-89066147dfd01bf9.js","static/css/738e8f61204d6bba.css","static/chunks/pages/product/[id]/review/[reviewId]-180bcd44f0b6155f.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;