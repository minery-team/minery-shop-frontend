"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 64023:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var SCRIPT_ID = "__tosspayments-sdk__";
var SCRIPT_URL = 'https://js.tosspayments.com/v1';

var cachedPromise;
function loadTossPayments(clientKey) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$src = _ref.src,
      src = _ref$src === void 0 ? SCRIPT_URL : _ref$src;

  // SSR 지원
  if (typeof window === 'undefined') {
    return Promise.resolve({
      requestPayment: function requestPayment() {
        throw new Error('[TossPayments.js] 서버에서는 실행할 수 없습니다.');
      },
      requestBillingAuth: function requestBillingAuth() {
        throw new Error('[TossPayments.js] 서버에서는 실행할 수 없습니다.');
      }
    });
  }

  var existingScript = document.getElementById(SCRIPT_ID);

  if (existingScript != null && cachedPromise !== undefined) {
    return cachedPromise;
  }

  if (existingScript != null && window.TossPayments !== undefined) {
    return Promise.resolve(window.TossPayments(clientKey));
  }

  var script = document.createElement('script');
  script.src = src;
  script.id = SCRIPT_ID;
  cachedPromise = new Promise(function (resolve, reject) {
    document.head.appendChild(script);
    window.addEventListener('tossPaymentsInitialize', function () {
      if (window.TossPayments !== undefined) {
        resolve(window.TossPayments(clientKey));
      } else {
        reject(new Error('[TossPayments.js] 인스턴스 초기화에 실패했습니다.'));
      }
    });
  });
  return cachedPromise;
}

function clearTossPayments() {
  var _a;

  var script = document.getElementById(SCRIPT_ID);
  (_a = script === null || script === void 0 ? void 0 : script.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(script);
  window.TossPayments = undefined;
}

__webpack_unused_export__ = clearTossPayments;
exports.nT = loadTossPayments;


/***/ })

};
;