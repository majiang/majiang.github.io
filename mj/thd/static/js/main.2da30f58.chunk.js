(this.webpackJsonptenhoudan=this.webpackJsonptenhoudan||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){},159:function(e,t){},160:function(e,t){},161:function(e,t){},173:function(e,t,n){"use strict";n.r(t);var i=n(4),r=n(0),c=n.n(r),a=n(14),u=n.n(a),s=(n(156),n(11)),o=n(53),j=n(174),l=(n(157),n(41)),b=n(60),d=n.n(b),f=n(143),O=n(230),p=n(219),h=n(218),v=n(220),x=n(228),y=n(229),m=n(231),g=n(227),w=n(221),T=n(222),D=n(225),k=n(223),F=n(224),V=n(54),E=n(55),P=n(42);var _=function(e){return e.reduce((function(e,t){return e+t}),0)},C=[1,2,3,4];function A(e){if(4!==e.length)throw new Error("simpleDistribution must be of length 4");return{1:e[0],2:e[1],3:e[2],4:e[3]}}function I(e){return[e[1],e[2],e[3],e[4]]}var S={"\u822c":[2,1],"\u4e0a":[4,1],"\u7279":[5,2],"\u9cf3":[6,3]},G={"\u6771":2,"\u5357":3};var N=function(e){return function(t){return e(Object(s.a)(Object(s.a)({},t),{},{distribution:$(t.distribution)}))}};function z(e){return t=e.field,n=e.result,i=e.internalDan,(n<=2?5*S[t][n-1]:4===n?5*-i:0)*G[e.gameType];var t,n,i}var B=function(e){return _(C.map((function(t){return z(Object(s.a)(Object(s.a)({},e),{},{result:t}))*e.distribution[t]})))},J=N(B),L=function(e){return _(C.map((function(t,n){return Math.pow(z(Object(s.a)(Object(s.a)({},e),{},{result:t})),2)*e.distribution[t]})))},M=N(L);var K=[{init:0,up:100,down:-100},{init:0,up:100,down:-100},{init:0,up:100,down:-100},{init:200,up:400,down:0},{init:400,up:800,down:0},{init:600,up:1200,down:0},{init:800,up:1600,down:0},{init:1e3,up:2e3,down:0},{init:1200,up:2400,down:0},{init:1400,up:2800,down:0},{init:1600,up:3200,down:0},{init:1800,up:3600,down:0},{init:2e3,up:4e3,down:0}],Y=K.map((function(e,t){return t}));function q(e){var t=K[e];return(t.init-t.down)/5}function H(e){return R(e)[q(e.internalDan)]}var Q=N((function(e){for(var t=K[e.internalDan],n=(t.up-t.down)/5,i=Object(P.eye)(n),r=function(t){C.forEach((function(r){var c=t+z(Object(s.a)(Object(s.a)({},e),{},{result:r}))/5;0<=c&&c<n&&i.set(t,c,i.get(t,c)-e.distribution[r])}))},c=0;c<n;c++)r(c);return i.transpose()})),R=N((function(e){for(var t=K[e.internalDan],n=(t.up-t.down)/5,i=Object(P.zeros)(n,1),r=function(t){C.forEach((function(r){var c=t+z(Object(s.a)(Object(s.a)({},e),{},{result:r}))/5;(c<0||n<=c)&&0<z(Object(s.a)(Object(s.a)({},e),{},{result:r}))&&i.set(t,0,i.get(t,0)-e.distribution[r])}))},c=0;c<n;c++)r(c);return Array.from(Q(e).solve(i).data.map((function(e){return-e})))})),U=N((function(e){var t=R(e);return Array.from(Q(e).solve(new P.NDArray(t.map((function(e){return[e]})))).data.map((function(e,n){return e/t[n]})))}));function W(e){return U(e)[q(e.internalDan)]}var X=N((function(e){var t=R(e).map((function(e){return 1-e}));return Array.from(Q(e).solve(new P.NDArray(t.map((function(e){return[e]})))).data.map((function(e,n){return e/t[n]})))}));function Z(e){return X(e)[q(e.internalDan)]}function $(e){var t=_(I(e));return{1:e[1]/t,2:e[2]/t,3:e[3]/t,4:e[4]/t}}var ee=function(){function e(t){Object(V.a)(this,e),this.kind="independent",this._distribution=void 0,this._distribution=t}return Object(E.a)(e,[{key:"distribution",value:function(){return this._distribution}},{key:"setDistribution",value:function(e){return this._distribution=e,this}}]),e}(),te=new ee(A([2500,2500,2500,2500])),ne=function(){function e(t){Object(V.a)(this,e),this.kind="array",this._distributions=void 0,this._distributions=t}return Object(E.a)(e,[{key:"distribution",value:function(e){return this._distributions[e]}},{key:"setDistribution",value:function(e,t){return this._distributions[t]=e,this}}]),e}(),ie=function(){function e(t){Object(V.a)(this,e),this.kind="function",this.distribution=void 0,this.distribution=t}return Object(E.a)(e,[{key:"setDistribution",value:function(e){return this.distribution=e,this}}]),e}();var re=n(226);function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){return Object(i.jsxs)(O.a,{children:[Object(i.jsx)(h.a,{children:t}),Object(i.jsx)(y.a,{onChange:function(e){return n.setValue(e.target.value)},children:e.map((function(e){return Object(i.jsx)(p.a,{control:Object(i.jsx)(x.a,{}),value:e,label:e,checked:e===n.value})}))})]})}}var ae=ce(["\u9cf3","\u7279","\u4e0a","\u822c"],"Field"),ue=ce(["slider","text"],"Input Type"),se=ce(["independent","array","function"],"Player Type"),oe=ce(["\u6771","\u5357"],"Game Type");function je(e){var t=e.player;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(se,{value:e.player.kind,setValue:function(t){return e.setPlayer(function(e){switch(e){case"independent":return new ee(A([2500,2500,2500,2500]));case"array":return new ne([A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250]),A([250,250,250,250])]);case"function":return new ie((function(e){return A([2500,2500,2500,2500])}))}}(t))}}),Object(i.jsx)(ue,{value:e.inputType,setValue:e.setInputType}),Object(i.jsx)(ae,{value:e.field,setValue:e.setField}),Object(i.jsx)(oe,{value:e.gameType,setValue:e.setGameType}),function(){if("independent"===t.kind){var n=t.distribution();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(le,{inputType:e.inputType,values:I(n),setValues:function(n){return i=A(n),e.setPlayer(t.setDistribution(i));var i},field:e.field,gameType:e.gameType})})}return Object(i.jsx)(j.a,{children:"Not Supported Yet"})}()]})}function le(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(fe,{inputType:e.inputType,values:e.values,setValues:e.setValues}),Object(i.jsxs)(v.a,{container:!0,children:[Object(i.jsx)(v.a,{item:!0,xs:6,children:Object(i.jsxs)(j.a,{children:["DE=",(t=e.field,n=A(e.values),(0===n[4]?1/0:(S[t][0]*n[1]+S[t][1]*n[2])/n[4])-2)]})}),Object(i.jsx)(v.a,{})]}),Object(i.jsxs)(w.a,{size:"small",children:[Object(i.jsx)(T.a,{children:Object(i.jsxs)(k.a,{children:[Object(i.jsx)(F.a,{children:"@"}),Object(i.jsx)(F.a,{children:"adv"}),Object(i.jsx)(F.a,{children:"dif"}),Object(i.jsx)(F.a,{children:Object(i.jsx)("a",{href:"https://note.com/chanpukin/n/ne668771fe917#nhceu",children:"Pe"})}),Object(i.jsx)(F.a,{children:"P\u2191"}),Object(i.jsx)(F.a,{children:"E\u2191"}),Object(i.jsx)(F.a,{children:"E\u2193"})]})}),Object(i.jsx)(D.a,{children:Y.slice().reverse().map((function(t,n){return Object(i.jsx)(be,{field:e.field,distribution:A(e.values),internalDan:t,gameType:e.gameType},n)}))})]})]});var t,n}function be(e){return Object(i.jsxs)(k.a,{children:[Object(i.jsx)(F.a,{children:(n=e.internalDan,n<3?"".concat(3-n,"K"):"".concat(n-2,"D"))}),Object(i.jsx)(F.a,{children:J(e)}),Object(i.jsx)(F.a,{children:M(e)}),Object(i.jsx)(F.a,{children:(t=e,B(t)/L(t))}),Object(i.jsx)(F.a,{children:Object(i.jsx)(de,Object(s.a)(Object(s.a)({},e),{},{f:H}))}),Object(i.jsx)(F.a,{children:Object(i.jsx)(de,Object(s.a)(Object(s.a)({},e),{},{f:W}))}),Object(i.jsx)(F.a,{children:Object(i.jsx)(de,Object(s.a)(Object(s.a)({},e),{},{f:Z}))})]});var t,n}var de=function(e){var t=Object(r.useState)(Object(i.jsx)(re.a,{})),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){(function(){var t=Object(f.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.f(e),a(Object(i.jsx)(i.Fragment,{children:n}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(i.jsx)(i.Fragment,{children:c})};function fe(e){return"slider"===e.inputType?Object(i.jsxs)(v.a,{container:!0,children:[Object(i.jsx)(v.a,{item:!0,xs:8,children:Object(i.jsx)(pe,{values:e.values,setValues:e.setValues})}),Object(i.jsx)(v.a,{item:!0,xs:4,children:Object(i.jsx)(he,{values:e.values})})]}):Object(i.jsxs)(v.a,{container:!0,children:[Object(i.jsx)(v.a,{item:!0,xs:6,children:Object(i.jsx)(Oe,{values:e.values,setValues:e.setValues})}),Object(i.jsx)(v.a,{item:!0,xs:6,children:Object(i.jsx)(he,{values:e.values})})]})}function Oe(e){return Object(i.jsx)(v.a,{container:!0,children:e.values.map((function(t,n){return Object(i.jsx)(v.a,{item:!0,xs:3,children:Object(i.jsx)(g.a,{value:t,onChange:function(t){var i=Object(l.a)(e.values);i[n]=parseFloat(t.target.value),e.setValues(i)}})},n)}))})}function pe(e){var t=function(e){var t=e.slice(0,-1);return t.forEach((function(e,n){n&&(t[n]+=t[n-1])})),[t,t.slice(-1)[0]+e.slice(-1)[0]]}(e.values);return Object(i.jsx)(m.a,{onChange:function(n,i){"number"===typeof i?console.warn("single slider.value"):e.setValues(function(e,t){var n=[].concat(Object(l.a)(e),[t]),i=[0].concat(Object(l.a)(e));return n.map((function(e,t){return e-i[t]}))}(i,t[1]))},value:t[0],min:0,max:t[1]})}function he(e){var t=_(e.values);return Object(i.jsx)(v.a,{container:!0,children:e.values.map((function(e,n){return Object(i.jsx)(v.a,{item:!0,xs:3,children:Object(i.jsx)(j.a,{children:e/t})},n)}))})}var ve={field:"\u9cf3",inputType:"slider",player:te,gameType:"\u5357"};var xe=function(){var e=c.a.useState(ve),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(je,{field:n.field,setField:function(e){return r(Object(s.a)(Object(s.a)({},n),{},{field:e}))},inputType:n.inputType,setInputType:function(e){return r(Object(s.a)(Object(s.a)({},n),{},{inputType:e}))},player:n.player,setPlayer:function(e){return r(Object(s.a)(Object(s.a)({},n),{},{player:e}))},gameType:n.gameType,setGameType:function(e){return r(Object(s.a)(Object(s.a)({},n),{},{gameType:e}))}}),Object(i.jsx)(j.a,{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"\u5353\u306e\u6607\u964d\u306a\u3057: \u5e38\u306b\u540c\u3058\u5353\u3067 (\u4e03\u6bb5\u672a\u6e80\u3082\u9cf3\u51f0\u5353\u3067, etc) \u6253\u3061\u7d9a\u3051\u308b"}),Object(i.jsx)("li",{children:"3\u7d1a\u20131\u7d1a\u306e\u6607\u964d\u3042\u308a: \u521d\u671f0, \u6607\u6bb5100, \u964d\u6bb5-100 \u3092\u4eee\u5b9a"})]})})]})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(xe,{})}),document.getElementById("root")),ye()}},[[173,1,2]]]);
//# sourceMappingURL=main.2da30f58.chunk.js.map