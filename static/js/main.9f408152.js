(()=>{"use strict";var e={5675:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(4942),o=n(5861),i=n(885),a=n(3292),l=n(2550),u=n(9233),f=n(1133),c=n(1451),s=n(3497),d=n(7922),h=n(6032),y=n(8859),p=n(7132),g={bg:"black",grey:"#3A3D40",toDoBg:"#5C5C60"},b=n(9526),v=n(5519),x=n(2030),j=n(1223),w=n(7557);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D="@toDos",S="@working";function T(){var e=(0,b.useState)(!0),t=(0,i.default)(e,2),n=t[0],l=t[1],O=(0,b.useState)(""),T=(0,i.default)(O,2),P=T[0],C=T[1],z=(0,b.useState)({}),E=(0,i.default)(z,2),I=E[0],H=E[1],W=(0,b.useState)(!0),_=(0,i.default)(W,2),A=_[0],M=_[1],N=(0,b.useState)(""),R=(0,i.default)(N,2),V=R[0],B=R[1];(0,b.useEffect)((function(){Y(),M(!1)}),[]);var J=function(){var e=(0,o.default)((function*(){l(!1),C(""),yield v.default.setItem(S,"false")}));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,o.default)((function*(){l(!0),C(""),yield v.default.setItem(S,"true")}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,o.default)((function*(){if(""!==P){var e=m(m({},I),{},(0,r.default)({},Date.now(),{text:P,working:n,finish:!1,changing:!1}));H(e),yield L(e),C("")}}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,o.default)((function*(e){yield v.default.setItem(D,JSON.stringify(e))}));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=(0,o.default)((function*(){var e=yield v.default.getItem(S);l("true"===e),null!==(yield v.default.getItem(D))&&H(JSON.parse(yield v.default.getItem(D)))}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,o.default)((function*(e){if("web"===p.default.OS){if(confirm("Do you want to delete ths To Do?")){var t=m({},I);delete t[e],H(t),yield L(t)}}else y.default.alert("Delte To Do?","Are you sure?",[{text:"Yes",onPress:function(){var t=(0,o.default)((function*(){var t=m({},I);delete t[e],H(t),yield L(t)}));return function(){return t.apply(this,arguments)}}()},{text:"No"}])}));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=(0,o.default)((function*(e){var t=m({},I);t[e]=m(m({},t[e]),{},{finish:!t[e].finish}),H(t),yield L(t)}));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=(0,o.default)((function*(e){var t=m({},I);t[e]=m(m({},t[e]),{},{changing:!t[e].changing}),H(t),yield L(t)}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=(0,o.default)((function*(e,t){var n=m({},I);n[e]=m(m({},n[e]),{},{text:t,changing:!n[e].changing}),H(n),yield L(n)}));return function(t,n){return e.apply(this,arguments)}}();return(0,w.jsxs)(f.default,{style:k.container,children:[(0,w.jsx)(a.default,{style:"auto"}),(0,w.jsxs)(f.default,{style:k.header,children:[(0,w.jsx)(c.default,{onPress:F,children:(0,w.jsx)(u.default,{style:m(m({},k.btnText),{},{color:n?"white":g.grey}),children:"Work"})}),(0,w.jsx)(c.default,{onPress:J,children:(0,w.jsx)(u.default,{style:m(m({},k.btnText),{},{color:n?g.grey:"white"}),children:"Travel"})})]}),(0,w.jsx)(s.default,{style:k.input,onChangeText:function(e){C(e)},onSubmitEditing:K,value:P,placeholder:n?"Add a To Do":"Where do you want to go",returnKeyType:"done"}),(0,w.jsx)(d.default,{children:A?(0,w.jsx)(h.default,{color:"white",size:"large",style:{marginTop:30}}):Object.keys(I).map((function(e){return I[e].working===n?(0,w.jsxs)(f.default,{style:k.toDo,children:[I[e].changing?(0,w.jsx)(s.default,{style:k.change,onChangeText:function(e){B(e)},onSubmitEditing:function(){U(e,V)}}):(0,w.jsx)(u.default,{style:I[e].finish?m(m({},k.toDoText),{},{textDecorationLine:"line-through"}):m({},k.toDoText),children:I[e].text}),(0,w.jsxs)(f.default,{style:k.icons,children:[(0,w.jsx)(f.default,{style:k.icon,children:(0,w.jsx)(c.default,{onPress:function(){return Q(e)},children:(0,w.jsx)(j.default,{name:"pencil",size:18,color:"white"})})}),(0,w.jsx)(f.default,{style:k.icon,children:(0,w.jsx)(c.default,{onPress:function(){return q(e)},children:(0,w.jsx)(x.default,{name:"trash",size:18,color:"white"})})}),(0,w.jsx)(f.default,{style:k.icon,children:(0,w.jsx)(c.default,{onPress:function(){return G(e)},children:I[e].finish?(0,w.jsx)(x.default,{name:"checkbox-active",size:18,color:"white"}):(0,w.jsx)(x.default,{name:"checkbox-passive",size:18,color:"white"})})})]})]},e):null}))})]})}var k=l.default.create({container:{flex:1,backgroundColor:g.bg,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},btnText:{fontSize:30,fontWeight:"600"},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:g.grey,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,flexDirection:"row",alignContent:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"500"},icons:{flexDirection:"row"},icon:{marginRight:10},change:{backgroundColor:"white",width:180}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],l=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/WorkHardTravelHard/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,u]=r,f=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(t&&t(r);f<a.length;f++)i=a[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[850],(()=>n(9484)));r=n.O(r)})();
//# sourceMappingURL=main.9f408152.js.map