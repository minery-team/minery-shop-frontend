"use strict";
exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 56263:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(84574), exports);
__exportStar(__webpack_require__(71827), exports);


/***/ }),

/***/ 84574:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withProps = void 0;
const react_1 = __importDefault(__webpack_require__(67294));
function withProps(Component, baseProps) {
    return react_1.default.forwardRef((props, ref) => (
    //@ts-ignore
    react_1.default.createElement(Component, Object.assign({}, baseProps, props, { ref: ref }))));
}
exports.withProps = withProps;


/***/ }),

/***/ 71827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withSuspense = void 0;
const react_1 = __importStar(__webpack_require__(67294));
function withSuspense(Component, Fallback = react_1.default.createElement(react_1.default.Fragment, null)) {
    return function (props) {
        return (react_1.default.createElement(react_1.Suspense, { fallback: typeof Fallback === "function" ? react_1.default.createElement(Fallback, Object.assign({}, props)) : Fallback },
            react_1.default.createElement(Component, Object.assign({}, props))));
    };
}
exports.withSuspense = withSuspense;


/***/ })

};
;