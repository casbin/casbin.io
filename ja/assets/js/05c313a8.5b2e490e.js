"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3945],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,f=b["".concat(u,".").concat(m)]||b[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},911:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={title:"Casbin Server \u304c\u8d77\u52d5\u3057\u307e\u3057\u305f\uff01",author:"Helong Zhang",authorTitle:"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},u=void 0,s={permalink:"/ja/blog/2018/08/07/launching-casbin-server",editUrl:"https://crowdin.com/project/casbin-website/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md",title:"Casbin Server \u304c\u8d77\u52d5\u3057\u307e\u3057\u305f\uff01",description:"\u4e00\u90e8\u306e\u304a\u5ba2\u69d8\u306f\u3001Casbin\u304c\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4ee3\u308f\u308a\u306b\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u5c0b\u306d\u3066\u3044\u307e\u3059\u3002 \u306e\u7b54\u3048\u306f \u306f\u3044 \u3067\u3059\u3002 \u672c\u65e5\u3001 Casbin Server \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u3001 Access Control as a Service \u306e\u5177\u4f53\u7684\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u958b\u59cb\u3057\u307e\u3057\u305f\u3002",date:"2018-08-07T00:00:00.000Z",formattedDate:"2018\u5e748\u67087\u65e5",tags:[],readingTime:1.26,hasTruncateMarker:!1,authors:[{name:"Helong Zhang",title:"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc",url:"http://github.com/BetaCat0",imageURL:"https://avatars.githubusercontent.com/BetaCat0"}],frontMatter:{title:"Casbin Server \u304c\u8d77\u52d5\u3057\u307e\u3057\u305f\uff01",author:"Helong Zhang",authorTitle:"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},prevItem:{title:"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc",permalink:"/ja/blog/2018/08/27/node-casbin"}},l={authorsImageUrls:[void 0]},p=[],b={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e00\u90e8\u306e\u304a\u5ba2\u69d8\u306f\u3001Casbin\u304c\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4ee3\u308f\u308a\u306b\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u5c0b\u306d\u3066\u3044\u307e\u3059\u3002 \u306e\u7b54\u3048\u306f ",(0,o.kt)("strong",{parentName:"p"},"\u306f\u3044")," \u3067\u3059\u3002 \u672c\u65e5\u3001 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"Casbin Server")," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u3001 ",(0,o.kt)("strong",{parentName:"p"},"Access Control as a Service")," \u306e\u5177\u4f53\u7684\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u958b\u59cb\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Casbin Server")," \u306f\u30b3\u30a2\u30c1\u30fc\u30e0\u306b\u3088\u3063\u3066\u7a4d\u6975\u7684\u306b\u958b\u767a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3044\u304f\u3064\u304b\u306e\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7d14\u7c8b\u306b\u30b4\u30e9\u30f3\u3067\u958b\u767a\u3055\u308c\u307e\u3057\u305f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u5343\u306eCasbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7ba1\u7406\u3067\u304d\u308b\u305f\u3081\u3001\u30dd\u30ea\u30b7\u30fc\u57f7\u884c\u30ed\u30b8\u30c3\u30af\u3092\u8907\u6570\u306e\u30b5\u30fc\u30d3\u30b9\u304b\u30891\u3064\u306eCasbin\u30b5\u30fc\u30d0\u30fc\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"gRPC")," \u306fCasbin Server \u3068\u306e\u901a\u4fe1\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u307e\u305f\u3001\u8fd1\u3044\u5c06\u6765\u3001 ",(0,o.kt)("strong",{parentName:"li"},"RESTful")," \u306e\u30b5\u30dd\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u691c\u8a0e\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u958b\u767a\u8005\u4ee5\u5916\u306e\u7ba1\u7406\u8005\u306f\u3001Casbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b7\u30f3\u30b0\u306a\u3069\u306e\u3059\u3079\u3066\u306e\u8a73\u7d30\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u306aWeb\u7ba1\u7406\u8005\u30dd\u30fc\u30bf\u30eb\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,o.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f GitHub \u3067\u30db\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"https://github.com/casbin/casbin-server")),(0,o.kt)("p",null,"\u554f\u984c\u3084\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u6b53\u8fce\u3057\u307e\u3059:)"))}m.isMDXComponent=!0}}]);