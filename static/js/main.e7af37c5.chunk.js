(this["webpackJsonptypingmaster-react-app"]=this["webpackJsonptypingmaster-react-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),l=n.n(r),s=(n(17),n(7)),o=n(8),u=n(11),i=n(10),m=n(9),f=n.n(m),b=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:f.a,alt:"Logo"})))}}]),n}(a.Component),d=n(4),v=n(1),p=Object(a.createContext)(),j=function(e){var t=Object(a.useState)({content:"Press Play!!"}),n=Object(v.a)(t,2),r=n[0],l=n[1];return c.a.createElement(p.Provider,{value:[r,l]},e.children)};function O(){var e=Object(a.useContext)(p),t=Object(v.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),s=Object(v.a)(l,2),o=s[0],u=s[1],i=Object(a.useState)(0),m=Object(v.a)(i,2),f=m[0],b=m[1],j=Object(a.useState)(""),O=Object(v.a)(j,2),E=O[0],h=O[1],g=Object(a.useState)(!1),y=Object(v.a)(g,2),x=y[0],L=y[1],S=Object(a.useState)(!1),N=Object(v.a)(S,2),P=N[0],k=N[1],C=Object(a.useRef)(""),q=Object(a.useRef)(""),A=document.querySelectorAll(".correct"),I=document.querySelectorAll(".text");Object(a.useEffect)((function(){var e=setInterval((function(){b((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}),[P]),Object(a.useEffect)((function(){A.length===I.length&&!0===P&&L(!0)}),[o]);if(console.log(x),x){var M=A.length/4.7;L(!1),h(Math.round(M/f*60)+" Words Per Minute"),k(!1),q.current.disabled=!1,q.current.innerText="Play Again",C.current.disabled=!0}return c.a.createElement("div",null,c.a.createElement("div",{className:"speed-section"}," ",c.a.createElement("h3",{className:P?"":"timer"},f),c.a.createElement("h3",{className:"speed"},E)),c.a.createElement("div",{className:"text-box quote-display"}," ",n.content.split("").map((function(e,t){return c.a.createElement("span",{key:t,className:"text"},e)}))," "),c.a.createElement("div",{className:"type-box"},c.a.createElement("textarea",{ref:C,value:o,onChange:function(e){if(P){u(e.target.value);var t=e.target.value.split("");I.forEach((function(e,n){var a=t[n];null==a?(e.classList.remove("correct"),e.classList.remove("incorrect")):a==e.innerText?(e.classList.add("correct"),e.classList.remove("incorrect")):(e.classList.remove("correct"),e.classList.add("incorrect"))}))}}}),c.a.createElement("button",{onClick:function(){fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(e){return r({content:e.content})})),b(0),C.current.disabled=!1,C.current.focus(),k((function(e){return!e})),h(""),u(""),q.current.disabled=!0,Object(d.a)(A).map((function(e){return e.classList.remove("correct")})),Object(d.a)(A).map((function(e){return e.classList.remove("incorrect")}))},ref:q},"Play")))}var E=function(){return c.a.createElement(j,null,c.a.createElement("div",{className:"container"},c.a.createElement(b,null),c.a.createElement(O,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n.p+"static/media/Logo.cf908695.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.e7af37c5.chunk.js.map