"use strict";
exports.id = 328;
exports.ids = [328];
exports.modules = {

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
    const add = (0,react.useCallback)(async (data)=>{
        if (user) {
            await (0,cart/* addToCart */.Xq)(data);
            await reload();
        } else {
            localControl.add(data);
        }
    }, [
        user
    ]);
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


/***/ })

};
;