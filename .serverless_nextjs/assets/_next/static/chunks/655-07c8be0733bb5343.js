(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,l=e.unoptimized,s=void 0!==l&&l,p=e.priority,h=void 0!==p&&p,S=e.loading,I=e.lazyRoot,E=void 0===I?null:I,_=e.lazyBoundary,R=e.className,L=e.quality,O=e.width,N=e.height,q=e.style,C=e.objectFit,P=e.objectPosition,Z=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,M=e.blurDataURL,D=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),J=d.useContext(m.ImageConfigContext),U=d.useMemo((function(){var e=b||J||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:i})}),[J]),V=D,F=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(F=V.layout),delete V.layout);var H=x;if("loader"in V){if(V.loader){var G=V.loader;H=function(e){e.config;var t=c(e,["config"]);return G(t)}}delete V.loader}var T="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=z(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(M=M||Q.blurDataURL,T=Q.src,(!F||"fill"!==F)&&(N=N||Q.height,O=O||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var K=!h&&("lazy"===S||"undefined"===typeof S);((t="string"===typeof t?t:T).startsWith("data:")||t.startsWith("blob:"))&&(s=!0,K=!1);v.has(t)&&(K=!1);y&&(s=!0);var X,Y=o(d.useState(!1),2),$=Y[0],ee=Y[1],te=o(g.useIntersection({rootRef:E,rootMargin:_||"200px",disabled:!K}),3),ie=te[0],ne=te[1],oe=te[2],re=!K||ne,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:P},de=k(O),ue=k(N),fe=k(L);0;var ge=Object.assign({},q,ce),me="blur"!==B||$?{}:{backgroundSize:C||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(M,'")')};if("fill"===F)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof de&&"undefined"!==typeof ue){var pe=ue/de,he=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===F?(ae.display="block",ae.position="relative",se=!0,le.paddingTop=he):"intrinsic"===F?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",se=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(de,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===F&&(ae.display="inline-block",ae.position="relative",ae.width=de,ae.height=ue)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};re&&(ye=A({config:U,src:t,unoptimized:s,layout:F,width:de,quality:fe,sizes:i,loader:H}));var be=t;0;var ve,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var ze=(n(ve={},we,ye.srcSet),n(ve,Se,ye.sizes),ve),Ae=d.default.useLayoutEffect,ke=d.useRef(Z),xe=d.useRef(t);d.useEffect((function(){ke.current=Z}),[Z]),Ae((function(){xe.current!==t&&(oe(),xe.current=t)}),[oe,t]);var Ie=a({isLazy:K,imgAttributes:ye,heightInt:ue,widthInt:de,qualityInt:fe,layout:F,className:R,imgStyle:ge,blurStyle:me,loading:S,config:U,unoptimized:s,placeholder:B,loader:H,srcString:be,onLoadingCompleteRef:ke,setBlurComplete:ee,setIntersection:ie,isVisible:re,noscriptSizes:i},V);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ae},se?d.default.createElement("span",{style:le},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(j,Object.assign({},Ie))),h?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},ze))):null)};var a=i(6495).Z,l=i(2648).Z,s=i(1598).Z,c=i(7273).Z,d=s(i(7294)),u=l(i(5443)),f=i(9309),g=i(7190),m=i(9977),p=(i(3794),i(2392));var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1}||{},y=h.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},v=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=new URL("".concat(t.path).concat(E(i))),a=r.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return r.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(E(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(E(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function A(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,r(c));return{widths:a.filter((function(e){return e>=o[0]*u})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,s),u=d.widths,f=d.kind,g=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({config:t,src:i,quality:l,width:u[g]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=S.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function I(e,t,i,n,o,r){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===n&&r(!0),null==o?void 0:o.current)){var i=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))}var j=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,s=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,z=e.onError,k=(e.isVisible,e.noscriptSizes),x=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},x,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,s),ref:d.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&I(e,m,0,f,b,v)}),[w,m,o,f,b,v]),onLoad:function(e){I(e.currentTarget,m,0,f,b,v),S&&S(e)},onError:function(e){"blur"===f&&v(!0),z&&z(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},x,A({config:p,src:m,unoptimized:h,layout:o,width:i,quality:n,sizes:k,loader:y}),{decoding:"async","data-nimg":o,style:l,className:r,loading:g}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(8045)},6983:function(e,t){"use strict";t.J=void 0;t.J=(e={})=>{if("undefined"===typeof window)return{persistAtom:()=>{}};const{key:t="recoil-persist",storage:i=localStorage}=e,n=(e,t,i,n)=>{n?delete t[i]:t[i]=e,a(t)},o=()=>{const e=i.getItem(t);return null===e||void 0===e?{}:"string"===typeof e?r(e):"function"===typeof e.then?e.then(r):{}},r=e=>{if(void 0===e)return{};try{return JSON.parse(e)}catch(t){return console.error(t),{}}},a=e=>{try{"function"===typeof i.mergeItem?i.mergeItem(t,JSON.stringify(e)):i.setItem(t,JSON.stringify(e))}catch(n){console.error(n)}};return{persistAtom:({onSet:e,node:t,trigger:i,setSelf:r})=>{if("get"===i){const e=o();"function"===typeof e.then&&e.then((e=>{e.hasOwnProperty(t.key)&&r(e[t.key])})),e.hasOwnProperty(t.key)&&r(e[t.key])}e((async(e,i,r)=>{const a=o();"function"===typeof a.then?a.then((i=>n(e,i,t.key,r))):n(e,a,t.key,r)}))}}}},9815:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(943);var o=i(3375);var r=i(1566);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,o.Z)(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);