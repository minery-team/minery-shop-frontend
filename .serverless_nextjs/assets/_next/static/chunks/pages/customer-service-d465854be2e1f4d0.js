(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{5052:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customer-service",function(){return t(3)}])},7190:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(4941).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(n){var e=n.rootRef,t=n.rootMargin,s=n.disabled||!u,d=i.useRef(),f=r(i.useState(!1),2),l=f[0],p=f[1],v=r(i.useState(null),2),g=v[0],w=v[1];i.useEffect((function(){if(u){if(d.current&&(d.current(),d.current=void 0),s||l)return;return g&&g.tagName&&(d.current=function(n,e,t){var r=function(n){var e,t={root:n.root||null,margin:n.rootMargin||""},r=c.find((function(n){return n.root===t.root&&n.margin===t.margin}));if(r&&(e=a.get(r)))return e;var i=new Map,o=new IntersectionObserver((function(n){n.forEach((function(n){var e=i.get(n.target),t=n.isIntersecting||n.intersectionRatio>0;e&&t&&e(t)}))}),n);return e={id:t,observer:o,elements:i},c.push(t),a.set(t,e),e}(t),i=r.id,o=r.observer,u=r.elements;return u.set(n,e),o.observe(n),function(){if(u.delete(n),o.unobserve(n),0===u.size){o.disconnect(),a.delete(i);var e=c.findIndex((function(n){return n.root===i.root&&n.margin===i.margin}));e>-1&&c.splice(e,1)}}}(g,(function(n){return n&&p(n)}),{root:null==e?void 0:e.current,rootMargin:t})),function(){null==d.current||d.current(),d.current=void 0}}if(!l){var n=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(n)}}}),[g,s,t,e,l]);var b=i.useCallback((function(){p(!1)}),[]);return[w,l,b]};var i=t(7294),o=t(9311),u="function"===typeof IntersectionObserver;var a=new Map,c=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)},3:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var r=t(7297),i=t(5944),o=t(7337),u=t(15),a=t(1727),c=t(756),s=t(7294),d=t(5675),f=t.n(d),l={src:"/_next/static/media/up_arrow.c2758154.svg",height:20,width:20};function p(){var n=(0,r.Z)(["\n  background-color: white;\n  padding: 16px;\n  border-radius: 6px;\n"]);return p=function(){return n},n}function v(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding-bottom: 11px;\n  border-bottom: 1px solid ",";\n"]);return v=function(){return n},n}function g(){var n=(0,r.Z)(["\n  padding-top: 11px;\n  text-overflow: ",";\n  white-space: ",";\n  overflow: hidden;\n  display: inline-block;\n  width: calc(100%);\n\n  color: var(--gray-700, #4f4f4f);\n  /* Base/Regular */\n  font-size: 14px;\n  font-family: Pretendard;\n  line-height: 140%;\n"]);return g=function(){return n},n}var w=function(n){var e=n.question,t=n.answer,r=(0,s.useState)(!1),o=r[0],u=r[1];return(0,i.BX)(b,{children:[(0,i.BX)(h,{onClick:function(){u((function(n){return!n}))},children:[(0,i.tZ)(c.xv,{size:"lg",weight:"semibold",color:a.O9.gray900,children:e}),(0,i.tZ)(f(),{src:l,width:16,height:16,alt:"\ub2f5\ubcc0 \uc790\uc138\ud788 \ubcf4\uae30",style:{transform:o?"rotate(0deg)":"rotate(180deg)"}})]}),(0,i.tZ)(x,{expanded:o,children:t})]})},b=o.Z.div(p()),h=o.Z.div(v(),a.O9.gray100),x=o.Z.div(g(),(function(n){return n.expanded?"unset":"ellipsis"}),(function(n){return n.expanded?"unset":"nowrap"})),_=[{question:"\uc640\uc778\uc744 \uaf2d \uc2a4\ub0b5\uacfc \ud568\uaed8 \uc0ac\uc57c\ud558\ub098\uc694?",answer:"\uad6d\ub0b4 \uc8fc\ub958\ubc95 \uc0c1 \uc640\uc778\uc740 \uc74c\uc2dd\uacfc \ud568\uaed8 \uc138\ud2b8\ub85c\ub9cc \uc628\ub77c\uc778 \ubc30\uc1a1 \uc8fc\ubb38\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub9c8\uc774\ub108\ub9ac\ub294 \ud569\ub9ac\uc801\uc778 \uac00\uaca9\uc744 \uc704\ud574 \ub9db\uc788\ub294 \uc2a4\ub0b5 \uad6c\uc131\uc744 \ud568\uaed8 \uc81c\uacf5\ud569\ub2c8\ub2e4."},{question:"\uc640\uc778\uc744 \ud0dd\ubc30 \ubc30\uc1a1 \ubc1b\uc744 \uc218 \uc788\ub098\uc694?",answer:"\ub9c8\uc774\ub108\ub9ac\uc5d0\uc11c\ub294 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub9c8\uc774\ub108\ub9ac\ub294 \uc640\uc778\uc744 \ud53d\uc5c5\uc9c0\uae4c\uc9c0 \ucc3e\uc544\uac00\uc11c \uc218\ub839\ud558\ub294 \ubc29\uc2dd\uc774 \uc544\ub2cc, \uc804\uad6d \uac01\uc9c0\uc5d0\uc11c \ud0dd\ubc30\ub85c \ubc30\uc1a1 \ubc1b\uc744 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."},{question:"\uc5b4\ub5a4 \uc640\uc778\uc744 \ud30c\ub098\uc694?",answer:"\ub9c8\uc774\ub108\ub9ac \ubaa8\ubc14\uc77c APP\uc11c\ube44\uc2a4\uc5d0\uc11c \ud3c9\uac00\uac00 \ub192\uc740 \uc640\uc778\uc744 \uae30\uc900\uc73c\ub85c \uc120\uc815\ud558\uc5ec \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc640\uc778 \ud310\ub9e4 \ub9ac\uc2a4\ud2b8\ub294 \uc815\uae30\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\uba70, \ub2e4\uc591\ud55c \uc885\ub958\uc758 \uc640\uc778\uc744 \ucc3e\uc544\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc640\uc778 \uc0c1\ud488\uba85\uc5d0 \ube48\ud2f0\uc9c0(\uc0dd\uc0b0\ub144\ub3c4)\uac00 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc784\uc758\uc758 \ube48\ud2f0\uc9c0\ub85c \ud310\ub9e4\ub429\ub2c8\ub2e4. \ube48\ud2f0\uc9c0\uc5d0 \ub530\ub77c \ub77c\ubca8\uc774 \uc0c1\uc774\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "},{question:"\uc5b4\ub5bb\uac8c \uc640\uc778\uc744 \uad6c\ub9e4\ud558\ub098\uc694?",answer:"\uc6d0\ud558\ub294 \uc640\uc778\uc744 \uc120\ud0dd\ud55c \ud6c4 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694. \ub9c8\uc774\ub108\ub9ac\ub294 \ubcf8\uc778\uc778\uc99d\uc744 \uc704\ud574 \ub9cc 19\uc138 \uc774\uc0c1\uc758 \uc131\uc778\ub9cc \uad6c\ub9e4 \ubc0f \ud0dd\ubc30 \uc218\ub839\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc8fc\uc18c\ub97c \uae30\uc785\ud55c \ud6c4 \ud1a0\uc2a4\ud398\uc774\ub97c \ud1b5\ud574 \uacb0\uc81c\ub97c \uc9c4\ud589\ud558\uc2dc\uba74 \uc57d 3~4\uc77c \ud6c4\uc5d0 \uc640\uc778\uc744 \ubc1b\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\ubbf8\uc131\ub144\uc790\uac00 \uad6c\ub9e4\ud560 \uc218 \uc788\ub098\uc694?",answer:"\ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. [\uc8fc\ub958\uc758 \ud1b5\uc2e0\ud310\ub9e4\uc5d0 \uad00\ud55c \uba85\ub839 \uc704\uc784 \uace0\uc2dc] \ubc95\ub839\uc5d0 \ub530\ub77c \ubbf8\uc131\ub144\uc790\ub294 \uad6c\ub9e4 \ubc0f \uc218\ub839\ud560 \uc218 \uc5c6\uc73c\uba70, 19\uc138 \uc774\uc0c1 \uc131\uc778\uc778\uc99d \ud6c4 \uad6c\ub9e4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub300\ub9ac \uad6c\ub9e4/\uc218\ub839 \ub4f1 \uace0\uac1d\uc758 \uadc0\ucc45\uc0ac\uc720\ub85c \uc778\ud55c \uc704\ubc95 \ud589\uc704\uac00 \ud310\ub2e8\ub420 \uacbd\uc6b0 \ud310\ub9e4\uc790\uac00 \uacb0\uc81c \ucde8\uc18c \ubc0f \ud68c\uc6d0 \ucca0\ud68c\ub97c \uac15\uc81c\ud560 \uc218 \uc788\uc73c\uba70, \ubc1c\uc0dd\ud558\ub294 \ubc95\uc801 \ubb38\uc81c\uc5d0 \ub300\ud574 \ub9c8\uc774\ub108\ub9ac\ub294 \ucc45\uc784\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."},{question:"\ucde8\uc18c/\uad50\ud658/\ud658\ubd88\uc740 \uc5b4\ub5bb\uac8c \ud558\ub098\uc694?",answer:"\uc640\uc778\uc740 \uc0c1\ud488 \uac00\uce58 \ud558\ub77d\uc73c\ub85c \uc778\ud574 \uc7ac\ud310\ub9e4\uac00 \ubd88\uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e8\uc21c \ubcc0\uc2ec\uc5d0 \uc758\ud55c \uad50\ud658/\ubc18\ud488/\ucde8\uc18c\ub294 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\n    \ubd88\ub7c9/\ud30c\uc190\ub41c \uc640\uc778\uc744 \uc218\ub839\ud558\uc168\uc744 \uacbd\uc6b0, \uc0c1\ud488 \uc218\ub839 \ud6c4 3\uc77c \uc774\ub0b4\uc5d0 [1:1\ubb38\uc758\ud558\uae30]\ub85c \ud658\ubd88\uc774\ub098 \uc7ac\ubc1c\uc1a1\uc744 \uc2e0\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc218\ub839 \ud6c4 3\uc77c\uc774 \uc9c0\ub09c \uc0c1\ud488\uc740 \ud658\ubd88\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\n    1:1 \ubb38\uc758 \uc2dc \uc0c1\ud488\uc758 \ud3ec\uc7a5\uc744 \ub72f\uc9c0 \ub9d0\uace0 \uadf8\ub300\ub85c \ubcf4\uad00\ud55c \ucc44 \uc0ac\uc9c4\uc744 \ucd2c\uc601\ud558\uc5ec \ubb38\uc758\ud574\uc8fc\uc138\uc694. \uac1c\ubd09 \ub610\ub294 \uc0ac\uc6a9 \ud754\uc801\uc774 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uad50\ud658 \ubc0f \ubc18\ud488\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\n    \ubc30\uc1a1 \ucd9c\ubc1c \uc774\ud6c4 \uc8fc\ubb38 \ucde8\uc18c \uc2dc \ubc18\ud488 \ubc30\uc1a1\ube44 5,000\uc6d0\uc744 \uc81c\uc678\ud55c \uae08\uc561\uc744 \ud658\ubd88\ud574 \ub4dc\ub9bd\ub2c8\ub2e4.\n    \uc640\uc778\uc744 \uc9c1\uc811 \uc218\ub839\ud560 \uc218 \uc5c6\uac70\ub098 \uace0\uac1d\uc758 \ubd80\uc7ac \ub4f1\uc73c\ub85c \uc778\ud55c \ud0dd\ubc30\uc0ac\uace0 \uc2dc \uad50\ud658 \ubc0f \ubc18\ud488\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\n    \uc218\ucde8\uc778\uc758 \uc8fc\uc18c\ub098 \uc5f0\ub77d\ucc98\ub97c \uc798\ubabb \uae30\uc7ac\ud558\uc5ec \ubc1c\uc0dd\ud55c \ubc30\uc1a1\uc0ac\uace0\ub294 \uad50\ud658 \ubc0f \ubc18\ud488\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\n    \uace0\uac1d\uc758 \uadc0\ucc45\uc0ac\uc720\ub85c \uc778\ud574 \uc0c1\ud488\uacfc \uad6c\uc131\ud488\uc774 \ud6fc\uc190\ub41c \uacbd\uc6b0 \uad50\ud658 \ubc0f \ubc18\ud488\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\n    \ubbf8\uc131\ub144\uc790\uac00 \uc640\uc778\uc744 \uad6c\ub9e4/\uc218\ub839\ud55c \uacbd\uc6b0, \ubbf8\uc131\ub144\uc790 \ubcf8\uc778 \ub610\ub294 \ubc95\uc815\ub300\ub9ac\uc778\uc774 \uad6c\ub9e4\ub97c \ucde8\uc18c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\ub2e4\ub978 \uc0ac\ub78c\uc774 \ud0dd\ubc30\ub97c \uc218\ub839\ud560 \uc218 \uc788\ub098\uc694?",answer:"\uc8fc\ubb38\ud55c \uc640\uc778\uc740 \ubc18\ub4dc\uc2dc \ubcf8\uc778\uc774 \uc218\ub839\ud574\uc57c \ud569\ub2c8\ub2e4. \ub9c8\uc774\ub108\ub9ac\ub294 \uc218\ub839\uc790 \ubcf8\uc778 \ud655\uc778\uc744 \uc704\ud574 \ubcf8\uc778\uc774 \uc218\ub839\ud55c\ub2e4\ub294 \ub3d9\uc758\ub97c \ud55c \ud68c\uc6d0\ub9cc \uc8fc\ubb38\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud0c0\uc778\uc774\ub098 \ubbf8\uc131\ub144\uc790\uac00 \ub300\uc2e0 \uc218\ub839\ud558\ub294 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc5d0 \ub300\ud574\uc11c\ub294 \ub9c8\uc774\ub108\ub9ac\ub294 \ucc45\uc784\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."},{question:"\uc0c1\ud488 \uc8fc\ubb38\uc774 \ucde8\uc18c\ub418\uc5c8\uc5b4\uc694",answer:"\uc77c\uc2dc\uc801\uc778 \ud488\uc808 \ub4f1\uc758 \uc0ac\uc720\ub85c \uc8fc\ubb38\uc774 \ubd88\uac00\ud55c \uc0c1\ud488\uc740 \ubd80\ubd84 \ucde8\uc18c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacb0\uc81c\ud55c \uae08\uc561\uc740 \uc790\ub3d9\uc73c\ub85c \ud658\ubd88\ub418\uba70, \ud658\ubd88\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc740 \uacbd\uc6b0 [1:1\ubb38\uc758\ud558\uae30]\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694."}];function m(){var n=(0,r.Z)(["\n  background-color: ",";\n  padding: 24px 20px;\n  gap: 24px;\n  display: flex;\n  flex-direction: column;\n"]);return m=function(){return n},n}var y=function(){return(0,i.BX)(u.W2,{children:[(0,i.tZ)(u.xG,{back:!0,children:(0,i.tZ)(u.xG.Title,{children:"\ubb38\uc758\ud558\uae30"})}),(0,i.tZ)(Z,{children:_.map((function(n){return(0,i.tZ)(w,{question:n.question,answer:n.answer},n.question)}))})]})},Z=o.Z.div(m(),a.O9.gray100)}},function(n){n.O(0,[675,774,888,179],(function(){return e=5052,n(n.s=e);var e}));var e=n.O();_N_E=e}]);