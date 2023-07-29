"use strict";
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 85718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46066);





const Carousel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Carousel({ children , ...props }, ref) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ(react_slick__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        ref: ref,
        children: Array.isArray(children) ? children.map((child, index)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ("div", {
                children: child
            }, index)) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ("div", {
            children: children
        })
    });
});


/***/ }),

/***/ 72926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ component_WineReview)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(68847);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/bds-web/dist/index.js
var dist = __webpack_require__(40756);
// EXTERNAL MODULE: ./node_modules/@boxfoxs/next/dist/index.js
var next_dist = __webpack_require__(23399);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.esm.js
var emotion_styled_esm = __webpack_require__(56361);
// EXTERNAL MODULE: ./src/common/constants/index.ts + 2 modules
var constants = __webpack_require__(16439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/common/components/index.ts + 28 modules
var components = __webpack_require__(2126);
// EXTERNAL MODULE: ./src/common/components/carousel/index.tsx
var carousel = __webpack_require__(85718);
// EXTERNAL MODULE: ./src/common/constants/wine-review.ts
var wine_review = __webpack_require__(55177);
;// CONCATENATED MODULE: ./src/product/component/DetailedReview.tsx








const ReviewDetail = ({ reviewId , onClose  })=>{
    const review = Object.values(wine_review/* WineReviews */.F).flat().find((review)=>review.id === reviewId);
    if (!review) return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
        children: "해당 리뷰가 없습니다 :("
    });
    return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(BackgroundContainer, {
        children: /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(SizedWrapper, {
            children: [
                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
                    style: {
                        height: "50px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        padding: "15px"
                    },
                    children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("button", {
                        onClick: onClose,
                        children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                            src: "/assets/x.svg",
                            width: 20,
                            height: 20,
                            alt: "닫기"
                        })
                    })
                }),
                review.images && review.images.length > 0 && /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(carousel/* Carousel */.l, {
                    dots: true,
                    dotsClass: "",
                    // eslint-disable-next-line react/no-unstable-nested-components
                    appendDots: (dots)=>{
                        return /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(CarouselDotsWrapper, {
                            children: dots
                        });
                    },
                    children: review.images.map((image)=>/*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(Rectangle, {
                            style: {
                                background: constants/* colors.gray200 */.O9.gray200
                            },
                            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                                src: image,
                                alt: "상품 이미지",
                                style: {
                                    width: "100%",
                                    objectFit: "cover"
                                }
                            })
                        }, image))
                }),
                /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(components/* Section */.$0, {
                    style: {
                        paddingTop: "0px"
                    },
                    children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(component_WineReview, {
                        review: review,
                        showImages: false,
                        isModal: true
                    })
                })
            ]
        })
    });
};
const useDetailedReview = (productId, reviewId)=>{
    const { open , close  } = (0,components/* useModal */.dd)(`product-${productId}-review-${reviewId}`);
    return (0,react.useCallback)(()=>{
        open({
            children: /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(ReviewDetail, {
                reviewId: reviewId,
                onClose: close
            })
        });
    }, [
        open,
        close
    ]);
};
const BackgroundContainer = emotion_styled_esm/* default.div */.Z.div`
  width: 100%;
  height: 100%;
  background-color: ${constants/* colors.defaultWhite */.O9.defaultWhite};
  display: flex;
  justify-content: center;
`;
const SizedWrapper = emotion_styled_esm/* default.div */.Z.div`
  width: 500px;
  height: 100%;
  background-color: ${constants/* colors.defaultWhite */.O9.defaultWhite};
`;
// 중복된 캐러셀 스타일 공통화
const CarouselDotsWrapper = emotion_styled_esm/* default.ul */.Z.ul`
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  padding: 20px;
  margin: 0;
  text-align: left;
  gap: 8px;

  li {
    display: inline-block;
  }

  li::before {
    content: '•';
    font-size: 40px;
    line-height: 0;
    color: white;
    opacity: 0.3;
  }

  li.slick-active::before {
    opacity: 1;
  }

  li > button {
    display: none;
  }
`;
const Rectangle = emotion_styled_esm/* default.div */.Z.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  & > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

;// CONCATENATED MODULE: ./src/product/component/WineReview.tsx






const WineReview = ({ review , showImages =true , isModal =false  })=>{
    var ref;
    const productId = Number(next_dist.Path.get("id"));
    const openDetailedReview = useDetailedReview(isModal ? 0 : productId, isModal ? 0 : review.id);
    const hiddenName = hideName(review.name);
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(ReviewContainer, {
        onClick: ()=>{
            if (!isModal) openDetailedReview();
        },
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                color: constants/* colors.gray900 */.O9.gray900,
                size: "base",
                weight: "semibold",
                children: hiddenName
            }),
            /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)("div", {
                style: {
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    alignContent: "center"
                },
                children: [
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                        src: "/assets/star.svg",
                        width: 16,
                        height: 16,
                        alt: "별"
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        color: constants/* colors.gray900 */.O9.gray900,
                        size: "sm",
                        weight: "semibold",
                        children: review.rating
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Spacing */.Ki, {
                        height: 7,
                        width: 1,
                        style: {
                            backgroundColor: constants/* colors.gray300 */.O9.gray300,
                            margin: "0 4px"
                        }
                    }),
                    /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                        color: constants/* colors.gray500 */.O9.gray500,
                        size: "sm",
                        weight: "regular",
                        children: review.date
                    })
                ]
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("div", {
                style: {
                    display: "flex",
                    gap: "12px"
                },
                children: showImages && ((ref = review.images) === null || ref === void 0 ? void 0 : ref.map((image)=>/*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("img", {
                        style: {
                            width: "74px",
                            height: "74px",
                            borderRadius: "6px"
                        },
                        src: image,
                        alt: "와인 리뷰 이미지"
                    }, image)))
            }),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(dist/* Text */.xv, {
                children: review.content
            })
        ]
    });
};
/* harmony default export */ const component_WineReview = (WineReview);
const ReviewContainer = emotion_styled_esm/* default.div */.Z.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 20px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${constants/* colors.gray100 */.O9.gray100};
  }
`;
function hideName(name) {
    const nameArray = name.split("");
    if (nameArray.length > 2) {
        for(let i = 1; i < nameArray.length - 1; i++){
            nameArray[i] = "*";
        }
    } else if (nameArray.length === 2) {
        nameArray[nameArray.length - 1] = "*";
    }
    return nameArray.join("");
}


/***/ })

};
;