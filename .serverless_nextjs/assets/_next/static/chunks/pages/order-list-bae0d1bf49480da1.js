(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{7099:function(n,t,r){"use strict";function e(n){const t=String(n).split(".");return[Number(t.splice(0,1)).toLocaleString(),...t].join(".")}r.d(t,{jZ:function(){return e}})},1034:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-list",function(){return r(9191)}])},9191:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var e=r(7297),i=r(5944),o=r(8985),u=r(7337),c=r(1727),a=r(1754),d=r(7294),l=r(1196),s=r(4324),f=r(756),p=r(7099);function h(){var n=(0,e.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 20px;\n  }\n"]);return h=function(){return n},n}function g(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return g=function(){return n},n}function v(){var n=(0,e.Z)(["\n  font-weight: 600;\n"]);return v=function(){return n},n}function Z(){var n=(0,e.Z)(["\n  height: 17px;\n  border-radius: 6px;\n  padding: 4px 8px;\n"]);return Z=function(){return n},n}function x(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 16px 0;\n  height: 73px;\n\n  &:not(:last-of-type) {\n    padding-bottom: 20px;\n    border-bottom: 1px solid ",";\n  }\n"]);return x=function(){return n},n}function b(){var n=(0,e.Z)(["\n  // width: 63px;\n  height: 100%;\n"]);return b=function(){return n},n}function w(){var n=(0,e.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n"]);return w=function(){return n},n}function m(){var n=(0,e.Z)(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);return m=function(){return n},n}var y=function(n){var t=n.order;return(0,i.BX)(O,{children:[(0,i.BX)(E,{children:[(0,i.tZ)(S,{children:L(t.time)}),(0,i.tZ)(F,{style:{backgroundColor:X(t.status)},children:(0,i.tZ)(f.xv,{color:A(t.status),children:(0,s.Gq)(t.status)})})]}),(0,i.tZ)(f.Ki,{height:20}),t.items.map((function(n){return(0,i.BX)(k,{children:[(0,i.tZ)(N,{src:n.product.image,alt:n.product.name}),(0,i.BX)(_,{children:[(0,i.tZ)(B,{weight:"semibold",children:n.product.name}),(0,i.BX)(f.xv,{color:c.O9.gray600,children:[n.amount,"\uac1c"]}),(0,i.tZ)(f.xv,{weight:"semibold",size:"2xl",children:(0,p.jZ)(n.product.price)})]})]},n.id)}))]})},O=(0,u.Z)(l.u)(h()),E=u.Z.div(g()),S=u.Z.span(v()),F=u.Z.div(Z()),k=u.Z.div(x(),c.O9.gray100),N=u.Z.img(b()),_=u.Z.div(w()),B=(0,u.Z)(f.xv)(m());function L(n){var t=n.getFullYear(),r=(n.getMonth()+1).toString().padStart(2,"0"),e=n.getDate().toString().padStart(2,"0"),i=n.getHours().toString().padStart(2,"0"),o=n.getMinutes().toString().padStart(2,"0");return"".concat(t,".").concat(r,".").concat(e," ").concat(i,":").concat(o)}function X(n){switch(n){case s.iF.PAYMENT:return c.O9.primary100;case s.iF.PREPARE:return c.O9.subBlue100;case s.iF.SENT:return c.O9.subGreen100;case s.iF.DONE:return c.O9.gray100;default:throw new Error("Invalid OrderStatus")}}function A(n){switch(n){case s.iF.PAYMENT:return c.O9.primary700Default;case s.iF.PREPARE:return c.O9.subBlue500;case s.iF.SENT:return c.O9.subGreen500;case s.iF.DONE:return c.O9.gray500;default:throw new Error("Invalid OrderStatus")}}function P(){var n=(0,e.Z)(["\n  width: 100%;\n  overflow: scroll;\n  box-sizing: border-box;\n  padding: 18px 21px;\n  white-space: nowrap;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return P=function(){return n},n}function j(){var n=(0,e.Z)(["\n  display: inline-block;\n  height: 32px;\n  padding: 6px 16px;\n  box-sizing: border-box;\n  border-radius: 24px;\n  background-color: ",";\n  color: ",";\n  border: ",";\n\n  &:not(:last-of-type) {\n    margin-right: 12px;\n  }\n"]);return j=function(){return n},n}var C=function(n){var t=n.filterStatus,r=n.onFilterChange;return(0,i.BX)(T,{children:[(0,i.tZ)(G,{selected:"ALL"===t,onClick:function(){return r("ALL")},children:"\uc804\uccb4"},"ALL"),Object.keys(s.iF).map((function(n){return(0,i.tZ)(G,{selected:t===n,onClick:function(){return r(n)},children:(0,s.Gq)(n)},n)}))]})},T=u.Z.div(P()),G=u.Z.div(j(),(function(n){return n.selected?c.O9.gray800:"#ffffff"}),(function(n){return n.selected?"#ffffff":c.O9.gray700}),(function(n){return n.selected?"none":"1px solid #F1F1F1"}));function D(){var n=(0,e.Z)(["\n  background-color: ",";\n  padding: 20px;\n"]);return D=function(){return n},n}var M=function(){var n=(0,d.useState)("ALL"),t=n[0],r=n[1],e=(0,a.Z)({status:t});return(0,i.BX)(o.W2,{children:[(0,i.tZ)(o.xG,{back:!0,children:(0,i.tZ)(o.xG.Title,{children:"\uc8fc\ubb38\ub0b4\uc5ed"})}),(0,i.tZ)(C,{filterStatus:t,onFilterChange:r}),(0,i.tZ)(R,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,i.tZ)(y,{order:n},n.id)}))})]})},R=u.Z.div(D(),c.O9.gray100)}},function(n){n.O(0,[774,888,179],(function(){return t=1034,n(n.s=t);var t}));var t=n.O();_N_E=t}]);