"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 36193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useCartList)
/* harmony export */ });
/* unused harmony export TEST_CART_DATA */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23724);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);

const TEST_CART_DATA = [
    {
        id: 1,
        amount: 1,
        product: {
            id: 1,
            image: "/images/common/exclamation-mark.png",
            name: "wine1",
            price: 10000
        }
    },
    {
        id: 2,
        amount: 3,
        product: {
            id: 2,
            image: "/images/common/exclamation-mark.png",
            name: "wine2",
            price: 20000
        }
    },
    {
        id: 3,
        amount: 1,
        product: {
            id: 3,
            image: "/images/common/exclamation-mark.png",
            name: "wine3",
            price: 30000
        }
    }, 
];
const useCartList = ()=>{
    const query = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "/cart"
    ], async ()=>{
        try {
            return TEST_CART_DATA;
        // return await fetchCartList();
        } catch  {
            return undefined;
        }
    });
    return [
        query.data,
        query.refetch
    ];
};


/***/ })

};
;