"use strict";
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 85746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useOrderingItems)
/* harmony export */ });
/* harmony import */ var _boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23399);
/* harmony import */ var _boxfoxs_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_recoil_orderItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56321);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94715);
/* harmony import */ var _queries_useWineList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35982);
/* harmony import */ var _useCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24328);






function useOrderingItems(options) {
    const [products] = (0,_queries_useWineList__WEBPACK_IMPORTED_MODULE_4__/* .useProductList */ .u)({
        suspense: options === null || options === void 0 ? void 0 : options.suspense
    });
    const directOrderItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const data = {
            id: Number(_boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__.QS.get("productId")),
            amount: Number(_boxfoxs_next__WEBPACK_IMPORTED_MODULE_0__.QS.get("orderAmount"))
        };
        const product = products === null || products === void 0 ? void 0 : products.find((p)=>p.id === data.id);
        if (!data.id || !data.amount || !product) {
            return null;
        }
        return {
            id: product.id,
            isDirect: true,
            amount: data.amount,
            product,
            options: []
        };
    }, [
        products
    ]);
    const list = (0,recoil__WEBPACK_IMPORTED_MODULE_3__/* .useRecoilValue */ .sJ)(common_recoil_orderItems__WEBPACK_IMPORTED_MODULE_1__/* .orderItems */ .x);
    const cart = (0,_useCart__WEBPACK_IMPORTED_MODULE_5__/* .useCart */ .jD)(options);
    if (directOrderItem) {
        return [
            directOrderItem
        ];
    }
    return list.length ? list : cart.value;
}


/***/ }),

/***/ 56321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ orderItems)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94715);
/* harmony import */ var recoil_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6983);


const sessionStorage =  false ? 0 : undefined;
const { persistAtom  } = (0,recoil_persist__WEBPACK_IMPORTED_MODULE_1__/* .recoilPersist */ .J)({
    storage: sessionStorage
});
const orderItems = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: "orderItems",
    default: [],
    effects_UNSTABLE: [
        persistAtom
    ]
});


/***/ })

};
;