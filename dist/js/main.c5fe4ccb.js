!function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],c=0,f=[];c<i.length;c++)u=i[c],o[u]&&f.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(p&&p(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=l;a.push([9,0]),n()}({1:function(e,t,n){},5:function(e,t,n){"use strict";var r=n(1);n.n(r).a},9:function(e,t,n){"use strict";n.r(t);var r=n(2),o={name:"App",data:function(){return{msg:"xiaoming"}}},a=(n(5),n(0)),u=Object(a.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"App"},[t("div",[this._v("\n  Hello "+this._s(this.msg)+"\n  ")]),t("div",[t("router-link",{attrs:{to:"/page1"}},[this._v("go page1")]),t("router-link",{attrs:{to:"/page2"}},[this._v("go page2")])],1),t("div",[t("router-view")],1)])},[],!1,null,"bfbbbbfe",null).exports,i=n(4),l=Object(a.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page1"},[this._v("\n  page1\n")])},[],!1,null,null,null).exports,s=Object(a.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page2"},[this._v("\n  page2\n")])},[],!1,null,null,null).exports;r.a.use(i.a);var p=new i.a({mode:"hash",routes:[{path:"/page1",component:l},{path:"/page2",component:s},{path:"*",redirect:"/page2"}]});new r.a({router:p,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=main.c5fe4ccb.js.map