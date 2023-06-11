"use strict";
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 82527:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addEllipsis = void 0;
function addEllipsis(text, length) {
    if (text.length > length) {
        return `${text.substr(0, length)}...`;
    }
    return text;
}
exports.addEllipsis = addEllipsis;


/***/ }),

/***/ 5168:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commaizeNumber = void 0;
function commaizeNumber(value) {
    const parts = String(value).split(".");
    return [Number(parts.splice(0, 1)).toLocaleString(), ...parts].join(".");
}
exports.commaizeNumber = commaizeNumber;


/***/ }),

/***/ 90665:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(82527), exports);
__exportStar(__webpack_require__(5168), exports);
__exportStar(__webpack_require__(70953), exports);
__exportStar(__webpack_require__(29547), exports);
__exportStar(__webpack_require__(49852), exports);


/***/ }),

/***/ 70953:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.matchAll = void 0;
function matchAll(text, regex) {
    const res = regex.exec(text);
    if (res == null) {
        return [];
    }
    const startIndex = res.index + res[0].length;
    const restText = text.substr(startIndex);
    const matchs = matchAll(restText, regex);
    matchs.forEach((item) => (item.index += startIndex));
    return [res, ...matchs];
}
exports.matchAll = matchAll;


/***/ }),

/***/ 29547:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isJson = exports.parseJson = void 0;
function parseJson(raw) {
    return JSON.parse(raw);
}
exports.parseJson = parseJson;
function isJson(raw) {
    try {
        JSON.parse(raw);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.isJson = isJson;


/***/ }),

/***/ 49852:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
function sleep(time) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    });
}
exports.sleep = sleep;


/***/ })

};
;