"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 70406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony export Toast */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40756);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56361);




function Toast({ children , onClose  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setTimeout(()=>{
            onClose();
        }, 1000);
    }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(Container, {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(Wrapper, {
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(ContentWrapper, {
                children: children
            })
        })
    });
}
function useToast(key) {
    const { open , close  } = (0,_boxfoxs_bds_web__WEBPACK_IMPORTED_MODULE_1__/* .usePopup */ .BF)(key);
    return {
        open: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((options)=>{
            open({
                ...options,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ(Toast, {
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
const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div */ .Z.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div */ .Z.div`
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
const ContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div */ .Z.div`
  display: flex;
  align-items: center;
`;


/***/ })

};
;