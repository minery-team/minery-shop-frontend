(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{7099:function(n,t,e){"use strict";function r(n){const t=String(n).split(".");return[Number(t.splice(0,1)).toLocaleString(),...t].join(".")}e.d(t,{jZ:function(){return r},_v:function(){return o}});var i=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function c(n){try{a(r.next(n))}catch(t){o(t)}}function u(n){try{a(r.throw(n))}catch(t){o(t)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((r=r.apply(n,t||[])).next())}))};function o(n){return i(this,void 0,void 0,(function*(){return yield new Promise((t=>{setTimeout(t,n)}))}))}},8749:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/list",function(){return e(1352)}])},1352:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return z}});var r=e(828),i=e(7297),o=e(5944),c=e(7337),u=e(5352),a=e(6439),s=e(4653),d=e(7294),l=e(756),f=e(9808);function p(){var n=(0,i.Z)(["\n  width: 100%;\n  overflow: scroll;\n  box-sizing: border-box;\n  padding: 12px 21px;\n  white-space: nowrap;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  background: white;\n"]);return p=function(){return n},n}function h(){var n=(0,i.Z)(["\n  display: inline-block;\n  height: 32px;\n  padding: 6px 16px;\n  box-sizing: border-box;\n  border-radius: 24px;\n  background-color: ",";\n  color: ",";\n  border: ",";\n\n  &:not(:last-of-type) {\n    margin-right: 12px;\n  }\n\n  font-size: 14px;\n  font-family: Pretendard;\n  font-weight: 500;\n  line-height: 140%;\n"]);return h=function(){return n},n}var Z=function(n){var t=n.filterStatus,e=n.onFilterChange;return(0,o.BX)(g,{children:[(0,o.tZ)(v,{selected:"ALL"===t,onClick:function(){return e("ALL")},children:"\uc804\uccb4"},"ALL"),Object.keys(f.iF).map((function(n){return(0,o.tZ)(v,{selected:t===n,onClick:function(){return e(n)},children:(0,f.Gq)(n)},n)}))]})},g=c.Z.div(p()),v=c.Z.div(h(),(function(n){return n.selected?a.O9.gray800:"#ffffff"}),(function(n){return n.selected?"#ffffff":a.O9.gray700}),(function(n){return n.selected?"none":"1px solid #F1F1F1"})),x=e(1196),m=e(7099),b=e(1664),w=e.n(b);function E(){var n=(0,i.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 20px;\n  }\n"]);return E=function(){return n},n}function y(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return y=function(){return n},n}function S(){var n=(0,i.Z)(["\n  border-radius: 6px;\n  padding: 4px 8px;\n"]);return S=function(){return n},n}function O(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 20px 0;\n\n  &:not(:last-of-type) {\n    padding-bottom: 20px;\n    border-bottom: 1px solid ",";\n  }\n"]);return O=function(){return n},n}function N(){var n=(0,i.Z)(["\n  width: 63px;\n  height: 73px;\n"]);return N=function(){return n},n}function _(){var n=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  gap: 8px;\n"]);return _=function(){return n},n}function P(){var n=(0,i.Z)(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);return P=function(){return n},n}var R=function(n){var t=n.order;return(0,o.BX)(T,{children:[(0,o.BX)(k,{children:[(0,o.BX)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,o.tZ)(l.xv,{size:"base",weight:"semibold",children:B(new Date(t.time))}),t.waybillNumber&&(0,o.BX)(l.xv,{size:"sm",weight:"regular",color:a.O9.gray600,children:["\uc6b4\uc1a1\uc7a5\ubc88\ud638 ",t.waybillNumber]})]}),(0,o.tZ)(A,{style:{backgroundColor:I(t.status)},children:(0,o.tZ)(l.xv,{color:C(t.status),children:(0,f.Gq)(t.status)})})]}),(0,o.tZ)(l.Ki,{height:20}),t.items.map((function(n){return(0,o.tZ)(w(),{href:"/product/".concat(n.product.id),children:(0,o.BX)(L,{children:[(0,o.tZ)(D,{src:n.product.image,alt:n.product.name}),(0,o.BX)(F,{children:[(0,o.tZ)(M,{weight:"semibold",children:n.product.name}),(0,o.BX)(l.xv,{size:"sm",color:a.O9.gray600,children:[n.amount,"\uac1c"]}),(0,o.BX)(l.xv,{weight:"semibold",size:"2xl",children:[(0,m.jZ)(n.product.price*n.amount),"\uc6d0"]})]})]})},n.id)}))]})},T=(0,c.Z)(x.u)(E()),k=c.Z.div(y()),A=c.Z.div(S()),L=c.Z.div(O(),a.O9.gray100),D=c.Z.img(N()),F=c.Z.div(_()),M=(0,c.Z)(l.xv)(P());function B(n){var t=n.getFullYear(),e=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getDate().toString().padStart(2,"0"),i=n.getHours().toString().padStart(2,"0"),o=n.getMinutes().toString().padStart(2,"0");return"".concat(t,".").concat(e,".").concat(r," ").concat(i,":").concat(o)}function I(n){switch(n){case f.iF.PAYMENT:return a.O9.primary100;case f.iF.PREPARE:return a.O9.subBlue100;case f.iF.SENT:return a.O9.subGreen100;case f.iF.DONE:return a.O9.gray100;default:throw new Error("Invalid OrderStatus")}}function C(n){switch(n){case f.iF.PAYMENT:return a.O9.primary700Default;case f.iF.PREPARE:return a.O9.subBlue500;case f.iF.SENT:return a.O9.subGreen500;case f.iF.DONE:return a.O9.gray500;default:throw new Error("Invalid OrderStatus")}}function X(){var n=(0,i.Z)(["\n  padding: 20px;\n"]);return X=function(){return n},n}function G(){var n=(0,i.Z)(["\n  height: 80vh;\n  flex-direction: column;\n"]);return G=function(){return n},n}function j(){var n=(0,i.Z)(["\n  width: 64px;\n  height: 64px;\n"]);return j=function(){return n},n}var z=function(){var n=(0,d.useState)("ALL"),t=n[0],e=n[1],i=(0,r.Z)((0,s.rB)("ALL"),1)[0],c=null===i||void 0===i?void 0:i.filter((function(n){return"ALL"===t||n.status===t}));return(0,o.BX)(u.W2,{style:{background:a.O9.gray100},children:[(0,o.tZ)(u.xG,{back:!0,backgrounded:!0,children:(0,o.tZ)(u.xG.Title,{children:"\uc8fc\ubb38\ub0b4\uc5ed"})}),(0,o.tZ)(Z,{filterStatus:t,onFilterChange:e}),(0,o.tZ)(W,{children:(null===c||void 0===c?void 0:c.length)?c.map((function(n){return(0,o.tZ)(R,{order:n},n.id)})):(0,o.tZ)(H,{})})]})},W=c.Z.div(X());function H(){return(0,o.BX)(Y,{children:[(0,o.tZ)(K,{src:"/assets/img_information_circle_gray300.png",alt:"empty"}),(0,o.tZ)(l.Ki,{height:24}),(0,o.tZ)(l.xv,{size:"lg",color:a.O9.gray600,children:"\uc544\uc9c1 \uc8fc\ubb38\ub0b4\uc5ed\uc774 \uc5c6\uc5b4\uc694"})]})}var Y=(0,c.Z)(l.kC.Center)(G()),K=c.Z.img(j())},9808:function(n,t,e){"use strict";var r;e.d(t,{PU:function(){return Z},yS:function(){return h},iF:function(){return r},zM:function(){return s},NE:function(){return u},Wg:function(){return f},Gq:function(){return c}}),function(n){n.PAYMENT="PAYMENT",n.PREPARE="PREPARE",n.SENT="SENT",n.DONE="DONE"}(r||(r={}));var i,o,c=function(n){switch(n){case r.PAYMENT:return"\uacb0\uc81c";case r.PREPARE:return"\uc900\ube44\uc911";case r.SENT:return"\ubc30\uc1a1\uc911";case r.DONE:return"\ubc30\uc1a1\uc644\ub8cc";default:throw new Error("Invalid OrderStatus")}},u={id:99,name:"\uc640\uc778\uacfc \uc5b4\uc6b8\ub9ac\ub294 \ubaa8\ub460 \uc2a4\ub0b5",enName:"Wine Snack Assortment",desc:"\uc640\uc778\uacfc \uc5b4\uc6b8\ub9ac\ub294 \ubaa8\ub460 \uc2a4\ub0b5",price:2e4,originalPrice:4e4,image:"https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/1:1/w_3505,h_3505,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg",weight:0,options:[],images:["https://assets.bonappetit.com/photos/61b7c725ae5736f3022cb4fb/1:1/w_3505,h_3505,c_limit/20211207%20ITS%20Snack%20Mix%20Lede.jpg","https://images.kosher.com/details.slide/g/a/Game_Day_Snack_Mix_-_Stacey_Berk%281%29.jpg","https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80"],contentImage:"",foodDescription:""},a=e(4924);!function(n){n["\uc774\ud0c8\ub9ac\uc544"]="\uc774\ud0c8\ub9ac\uc544",n["\ud504\ub791\uc2a4"]="\ud504\ub791\uc2a4",n["\uc2a4\ud398\uc778"]="\uc2a4\ud398\uc778",n["\uce60\ub808"]="\uce60\ub808",n["\ubbf8\uad6d"]="\ubbf8\uad6d",n["\ud638\uc8fc"]="\ud638\uc8fc",n["\ub274\uc9c8\ub79c\ub4dc"]="\ub274\uc9c8\ub79c\ub4dc",n["\uc544\ub974\ud5e8\ud2f0\ub098"]="\uc544\ub974\ud5e8\ud2f0\ub098",n["\ub3c5\uc77c"]="\ub3c5\uc77c",n["\ud3ec\ub974\ud22c\uac08"]="\ud3ec\ub974\ud22c\uac08",n["\uae30\ud0c0"]="\uae30\ud0c0",n["\uc624\uc2a4\ud2b8\ub9ac\uc544"]="\uc624\uc2a4\ud2b8\ub9ac\uc544",n["\uc2ac\ub85c\ubca0\ub2c8\uc544"]="\uc2ac\ub85c\ubca0\ub2c8\uc544",n["\ubd88\uac00\ub9ac\uc544"]="\ubd88\uac00\ub9ac\uc544",n["\uce90\ub098\ub2e4"]="\uce90\ub098\ub2e4",n["\uc601\uad6d"]="\uc601\uad6d",n["\ub0a8\uc544\ud504\ub9ac\uce74"]="\ub0a8\uc544\ud504\ub9ac\uce74",n["\ub0a8\uc544\ud504\ub9ac\uce74 \uacf5\ud654\uad6d"]="\ub0a8\uc544\ud504\ub9ac\uce74 \uacf5\ud654\uad6d",n["\uadf8\ub9ac\uc2a4"]="\uadf8\ub9ac\uc2a4",n["\ud06c\ub85c\uc544\ud2f0\uc544"]="\ud06c\ub85c\uc544\ud2f0\uc544",n["\ud5dd\uac00\ub9ac"]="\ud5dd\uac00\ub9ac",n["\ub808\ubc14\ub17c"]="\ub808\ubc14\ub17c",n["\uc77c\ubcf8"]="\uc77c\ubcf8"}(i||(i={}));var s,d,l=(o={},(0,a.Z)(o,i.\uc774\ud0c8\ub9ac\uc544,"\ud83c\uddee\ud83c\uddf9"),(0,a.Z)(o,i.\ud504\ub791\uc2a4,"\ud83c\uddeb\ud83c\uddf7"),(0,a.Z)(o,i.\uc2a4\ud398\uc778,"\ud83c\uddea\ud83c\uddf8"),(0,a.Z)(o,i.\uce60\ub808,"\ud83c\udde8\ud83c\uddf1"),(0,a.Z)(o,i.\ubbf8\uad6d,"\ud83c\uddfa\ud83c\uddf8"),(0,a.Z)(o,i.\ud638\uc8fc,"\ud83c\udde6\ud83c\uddfa"),(0,a.Z)(o,i.\ub274\uc9c8\ub79c\ub4dc,"\ud83c\uddf3\ud83c\uddff"),(0,a.Z)(o,i.\uc544\ub974\ud5e8\ud2f0\ub098,"\ud83c\udde6\ud83c\uddf7"),(0,a.Z)(o,i.\ub3c5\uc77c,"\ud83c\udde9\ud83c\uddea"),(0,a.Z)(o,i.\uae30\ud0c0,""),(0,a.Z)(o,i.\ud3ec\ub974\ud22c\uac08,"\ud83c\uddf5\ud83c\uddf9"),(0,a.Z)(o,i.\uc624\uc2a4\ud2b8\ub9ac\uc544,"\ud83c\uddf5\ud83c\udde6"),(0,a.Z)(o,i.\uc2ac\ub85c\ubca0\ub2c8\uc544,"\ud83c\uddf8\ud83c\uddee"),(0,a.Z)(o,i.\ubd88\uac00\ub9ac\uc544,"\ud83c\udde7\ud83c\uddec"),(0,a.Z)(o,i.\uce90\ub098\ub2e4,"\ud83c\udde8\ud83c\udde6"),(0,a.Z)(o,i.\uc601\uad6d,"\ud83c\uddec\ud83c\udde7"),(0,a.Z)(o,i["\ub0a8\uc544\ud504\ub9ac\uce74 \uacf5\ud654\uad6d"],"\ud83c\uddff\ud83c\udde6"),(0,a.Z)(o,i.\ub0a8\uc544\ud504\ub9ac\uce74,"\ud83c\uddff\ud83c\udde6"),(0,a.Z)(o,i.\uadf8\ub9ac\uc2a4,"\ud83c\uddf5\ud83c\uddec"),(0,a.Z)(o,i.\ud06c\ub85c\uc544\ud2f0\uc544,"\ud83c\udded\ud83c\uddf7"),(0,a.Z)(o,i.\ud5dd\uac00\ub9ac,"\ud83c\uddf5\ud83c\udded"),(0,a.Z)(o,i.\ub808\ubc14\ub17c,"\ud83c\uddf1\ud83c\udde7"),(0,a.Z)(o,i.\uc77c\ubcf8,"\ud83c\uddef\ud83c\uddf5"),o);function f(n){if(n&&l[n])return"".concat(l[n]," ")}!function(n){n[n.RED=0]="RED",n[n.WHITE=1]="WHITE",n[n.ROSE=2]="ROSE",n[n.SPARKLING=3]="SPARKLING",n[n.ETC=4]="ETC"}(s||(s={}));var p,h=(d={},(0,a.Z)(d,s.RED,"Red"),(0,a.Z)(d,s.WHITE,"White"),(0,a.Z)(d,s.ROSE,"Rose"),(0,a.Z)(d,s.SPARKLING,"Sparkling"),(0,a.Z)(d,s.ETC,"etc"),d),Z=(p={},(0,a.Z)(p,s.RED,"\ub808\ub4dc"),(0,a.Z)(p,s.WHITE,"\ud654\uc774\ud2b8"),(0,a.Z)(p,s.ROSE,"\ub85c\uc81c"),(0,a.Z)(p,s.SPARKLING,"\uc2a4\ud30c\ud074\ub9c1"),(0,a.Z)(p,s.ETC,"\uae30\ud0c0"),p)}},function(n){n.O(0,[774,888,179],(function(){return t=8749,n(n.s=t);var t}));var t=n.O();_N_E=t}]);