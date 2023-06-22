"use strict";
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 9808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PU": () => (/* reexport */ KR_NAME_BY_WINE_TYPE),
  "yS": () => (/* reexport */ NAME_BY_WINE_TYPE),
  "iF": () => (/* reexport */ OrderStatus),
  "zM": () => (/* reexport */ WineType),
  "NE": () => (/* reexport */ dummySnack),
  "Wg": () => (/* reexport */ getWineFlagLabel),
  "Gq": () => (/* reexport */ orderStatusToHumanReadable)
});

// UNUSED EXPORTS: Country, FLAG_BY_COUNTRY

;// CONCATENATED MODULE: ./src/common/models/OrderStatus.tsx
var OrderStatus;
(function(OrderStatus) {
    OrderStatus["PAYMENT"] = "PAYMENT";
    OrderStatus["PREPARE"] = "PREPARE";
    OrderStatus["SENT"] = "SENT";
    OrderStatus["DONE"] = "DONE";
})(OrderStatus || (OrderStatus = {}));
const orderStatusToHumanReadable = (status)=>{
    switch(status){
        case OrderStatus.PAYMENT:
            return "결제";
        case OrderStatus.PREPARE:
            return "준비중";
        case OrderStatus.SENT:
            return "배송중";
        case OrderStatus.DONE:
            return "배송완료";
        default:
            throw new Error("Invalid OrderStatus");
    }
};

;// CONCATENATED MODULE: ./src/common/models/Product.ts
const dummySnack = {
    id: 99,
    name: "와인과 어울리는 모둠 스낵",
    enName: "Wine Snack Assortment",
    desc: "와인과 어울리는 모둠 스낵",
    price: 20000,
    originalPrice: 40000,
    image: "https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/1:1/w_3505,h_3505,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg",
    weight: 0,
    options: [],
    images: [
        "https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/1:1/w_3505,h_3505,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg",
        "https://images.kosher.com/details.slide/g/a/Game_Day_Snack_Mix_-_Stacey_Berk%281%29.jpg",
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80", 
    ],
    contentImage: ""
};

;// CONCATENATED MODULE: ./src/common/models/Country.ts
var Country;
(function(Country) {
    Country["이탈리아"] = "이탈리아";
    Country["프랑스"] = "프랑스";
    Country["스페인"] = "스페인";
    Country["칠레"] = "칠레";
    Country["미국"] = "미국";
    Country["호주"] = "호주";
    Country["뉴질랜드"] = "뉴질랜드";
    Country["아르헨티나"] = "아르헨티나";
    Country["독일"] = "독일";
    Country["포르투갈"] = "포르투갈";
    Country["기타"] = "기타";
    Country["오스트리아"] = "오스트리아";
    Country["슬로베니아"] = "슬로베니아";
    Country["불가리아"] = "불가리아";
    Country["캐나다"] = "캐나다";
    Country["영국"] = "영국";
    Country["남아프리카"] = "남아프리카";
    Country["남아프리카 공화국"] = "남아프리카 공화국";
    Country["그리스"] = "그리스";
    Country["크로아티아"] = "크로아티아";
    Country["헝가리"] = "헝가리";
    Country["레바논"] = "레바논";
    Country["일본"] = "일본";
})(Country || (Country = {}));
const FLAG_BY_COUNTRY = {
    [Country.이탈리아]: "\uD83C\uDDEE\uD83C\uDDF9",
    [Country.프랑스]: "\uD83C\uDDEB\uD83C\uDDF7",
    [Country.스페인]: "\uD83C\uDDEA\uD83C\uDDF8",
    [Country.칠레]: "\uD83C\uDDE8\uD83C\uDDF1",
    [Country.미국]: "\uD83C\uDDFA\uD83C\uDDF8",
    [Country.호주]: "\uD83C\uDDE6\uD83C\uDDFA",
    [Country.뉴질랜드]: "\uD83C\uDDF3\uD83C\uDDFF",
    [Country.아르헨티나]: "\uD83C\uDDE6\uD83C\uDDF7",
    [Country.독일]: "\uD83C\uDDE9\uD83C\uDDEA",
    [Country.기타]: "",
    [Country.포르투갈]: "\uD83C\uDDF5\uD83C\uDDF9",
    [Country.오스트리아]: "\uD83C\uDDF5\uD83C\uDDE6",
    [Country.슬로베니아]: "\uD83C\uDDF8\uD83C\uDDEE",
    [Country.불가리아]: "\uD83C\uDDE7\uD83C\uDDEC",
    [Country.캐나다]: "\uD83C\uDDE8\uD83C\uDDE6",
    [Country.영국]: "\uD83C\uDDEC\uD83C\uDDE7",
    [Country["남아프리카 공화국"]]: "\uD83C\uDDFF\uD83C\uDDE6",
    [Country.남아프리카]: "\uD83C\uDDFF\uD83C\uDDE6",
    [Country.그리스]: "\uD83C\uDDF5\uD83C\uDDEC",
    [Country.크로아티아]: "\uD83C\uDDED\uD83C\uDDF7",
    [Country.헝가리]: "\uD83C\uDDF5\uD83C\uDDED",
    [Country.레바논]: "\uD83C\uDDF1\uD83C\uDDE7",
    [Country.일본]: "\uD83C\uDDEF\uD83C\uDDF5"
};
function getWineFlagLabel(country) {
    if (!country || !FLAG_BY_COUNTRY[country]) {
        return undefined;
    }
    return `${FLAG_BY_COUNTRY[country]} `;
}

;// CONCATENATED MODULE: ./src/common/models/WineType.tsx
var WineType;
(function(WineType) {
    WineType[WineType["RED"] = 0] = "RED";
    WineType[WineType["WHITE"] = 1] = "WHITE";
    WineType[WineType["ROSE"] = 2] = "ROSE";
    WineType[WineType["SPARKLING"] = 3] = "SPARKLING";
    WineType[WineType["ETC"] = 4] = "ETC";
})(WineType || (WineType = {}));
const NAME_BY_WINE_TYPE = {
    [WineType.RED]: "Red",
    [WineType.WHITE]: "White",
    [WineType.ROSE]: "Rose",
    [WineType.SPARKLING]: "Sparkling",
    [WineType.ETC]: "etc"
};
const KR_NAME_BY_WINE_TYPE = {
    [WineType.RED]: "레드",
    [WineType.WHITE]: "화이트",
    [WineType.ROSE]: "로제",
    [WineType.SPARKLING]: "스파클링",
    [WineType.ETC]: "기타"
};

;// CONCATENATED MODULE: ./src/common/models/index.ts











/***/ })

};
;