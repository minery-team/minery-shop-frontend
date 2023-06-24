"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 36481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderabsolute404Path_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolutePagePath_private_next_pages_2Fapi_2Fcart_ts_assetPrefix_basePath_buildId_N6E6Jts9sF6FTrXHgMb2Z_canonicalBase_distDir_private_dot_next_generateEtags_true_i18n_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUE1TEU2QUZRTUVIMk4yTVNTXG5BV1NfU0VDUkVUX0FDQ0VTU19LRVk9dVVxR29STkU3Nk85bUxKT3Nsdk5MMEVaOTBXMlhIWlhuQW50L0FyUlxuXG4ifV0_3D_page_2Fapi_2Fcart_poweredByHeader_true_previewProps_7B_22previewModeId_22_3A_22de1e4c2c5e3618498541f52978d6aa4a_22_2C_22previewModeSigningKey_22_3A_225c11e76988b7f384f5ade052cefe62001518d1deaa3918e21f6d598349cb0bf1_22_2C_22previewModeEncryptionKey_22_3A_2236b655f1acf0216efbd756ce4413d5a1d1454af361250e0a86a8e1bbf8e567e4_22_7D_runtimeConfig_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?absolute404Path=&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolutePagePath=private-next-pages%2Fapi%2Fcart.ts&assetPrefix=&basePath=&buildId=N6E6Jts9sF6FTrXHgMb2Z&canonicalBase=&distDir=private-dot-next&generateEtags=true&i18n=&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUE1TEU2QUZRTUVIMk4yTVNTXG5BV1NfU0VDUkVUX0FDQ0VTU19LRVk9dVVxR29STkU3Nk85bUxKT3Nsdk5MMEVaOTBXMlhIWlhuQW50L0FyUlxuXG4ifV0%3D&page=%2Fapi%2Fcart&poweredByHeader=true&previewProps=%7B%22previewModeId%22%3A%22de1e4c2c5e3618498541f52978d6aa4a%22%2C%22previewModeSigningKey%22%3A%225c11e76988b7f384f5ade052cefe62001518d1deaa3918e21f6d598349cb0bf1%22%2C%22previewModeEncryptionKey%22%3A%2236b655f1acf0216efbd756ce4413d5a1d1454af361250e0a86a8e1bbf8e567e4%22%7D&runtimeConfig=!

        
      const { processEnv } = __webpack_require__(19936)
      processEnv([{"path":".env","contents":"AWS_ACCESS_KEY_ID=AKIA5LE6AFQMEH2N2MSS\nAWS_SECRET_ACCESS_KEY=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\n\n"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const rewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? {
            afterFiles: routes_manifest_namespaceObject.Dg
          }
          : routes_manifest_namespaceObject.Dg

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(68588),
          rewrites: rewrites,
          i18n: undefined,
          page: "/api/cart",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"de1e4c2c5e3618498541f52978d6aa4a",previewModeSigningKey:"5c11e76988b7f384f5ade052cefe62001518d1deaa3918e21f6d598349cb0bf1",previewModeEncryptionKey:"36b655f1acf0216efbd756ce4413d5a1d1454af361250e0a86a8e1bbf8e567e4"}
        })
        /* harmony default export */ const next_serverless_loaderabsolute404Path_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolutePagePath_private_next_pages_2Fapi_2Fcart_ts_assetPrefix_basePath_buildId_N6E6Jts9sF6FTrXHgMb2Z_canonicalBase_distDir_private_dot_next_generateEtags_true_i18n_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUE1TEU2QUZRTUVIMk4yTVNTXG5BV1NfU0VDUkVUX0FDQ0VTU19LRVk9dVVxR29STkU3Nk85bUxKT3Nsdk5MMEVaOTBXMlhIWlhuQW50L0FyUlxuXG4ifV0_3D_page_2Fapi_2Fcart_poweredByHeader_true_previewProps_7B_22previewModeId_22_3A_22de1e4c2c5e3618498541f52978d6aa4a_22_2C_22previewModeSigningKey_22_3A_225c11e76988b7f384f5ade052cefe62001518d1deaa3918e21f6d598349cb0bf1_22_2C_22previewModeEncryptionKey_22_3A_2236b655f1acf0216efbd756ce4413d5a1d1454af361250e0a86a8e1bbf8e567e4_22_7D_runtimeConfig_ = (apiHandler);
      

/***/ }),

/***/ 68588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
    res.status(200).json({
        item: [
            {
                id: 1,
                amount: 2,
                product: {
                    image: "/images/cart/test.png",
                    name: "와인1",
                    price: 10000
                }
            },
            {
                id: 2,
                amount: 1,
                product: {
                    image: "/images/cart/test.png",
                    name: "와인2",
                    price: 20000
                }
            },
            {
                id: 3,
                amount: 1,
                product: {
                    image: "/images/cart/test.png",
                    name: "와인3",
                    price: 30000
                }
            },
            {
                id: 4,
                amount: 3,
                product: {
                    image: "/images/cart/test.png",
                    name: "와인4",
                    price: 40000
                }
            }, 
        ]
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458], () => (__webpack_exec__(36481)));
module.exports = __webpack_exports__;

})();