"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5238],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),m=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(c.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,o=k["".concat(c,".").concat(N)]||k[N]||g[N]||i;return a?n.createElement(o,p(p({ref:e},d),{},{components:a})):n.createElement(o,p({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,p=new Array(i);p[0]=k;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2075:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={id:"overview",title:"\u6982\u8981",description:"Casbin overview",keywords:["overview","supported languages"]},p=void 0,l={unversionedId:"overview",id:"overview",title:"\u6982\u8981",description:"Casbin overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/ja/docs/overview",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"overview",title:"\u6982\u8981",description:"Casbin overview",keywords:["overview","supported languages"]},sidebar:"docs",previous:{title:"The basics",permalink:"/ja/docs/category/the-basics"},next:{title:"\u306f\u3058\u3081\u306b",permalink:"/ja/docs/get-started"}},c={},m=[{value:"Casbin\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u8a00\u8a9e:",id:"casbin\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u8a00\u8a9e",level:2},{value:"\u8a00\u8a9e\u3054\u3068\u306e\u6a5f\u80fd",id:"\u8a00\u8a9e\u3054\u3068\u306e\u6a5f\u80fd",level:3},{value:"Casbin\u3068\u306f\uff1f",id:"casbin\u3068\u306f",level:2},{value:"Casbin\u304c\u884c\u3046\u3053\u3068\uff1a",id:"casbin\u304c\u884c\u3046\u3053\u3068",level:3},{value:"Casbin\u304c\u884c\u3046\u3082\u306e <strong>NOT</strong> \u3084\u308a\u307e\u3059:",id:"casbin\u304c\u884c\u3046\u3082\u306e-not-\u3084\u308a\u307e\u3059",level:3}],d={toc:m};function g(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casbin\u306f\u5f37\u529b\u3067\u52b9\u7387\u7684\u306a\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3001\u30dc\u30fc\u30c9\u5168\u4f53\u3067\u8a8d\u53ef\u3092\u884c\u3046\u305f\u3081\u306e\u3055\u307e\u3056\u307e\u306a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Access_control#Access_control_models"},"\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30e2\u30c7\u30eb")," \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e00\u9023\u306e\u30eb\u30fc\u30eb\u3092\u5f37\u5236\u3059\u308b\u3053\u3068\u306f\u3001\u4ef6\u540d\u3092\u30ea\u30b9\u30c8\u30c0\u30a6\u30f3\u3059\u308b\u306e\u3068\u540c\u3058\u304f\u3089\u3044\u7c21\u5358\u3067\u3059\u3002 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30dd\u30ea\u30b7\u30fc"))," \u30d5\u30a1\u30a4\u30eb\u3067\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b\u30a2\u30af\u30b7\u30e7\u30f3 (\u307e\u305f\u306f\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u4ed6\u306e\u5f62\u5f0f) \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001Casbin\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d5\u30ed\u30fc\u3067\u540c\u7fa9\u3067\u3059\u3002 \u958b\u767a\u8005/\u7ba1\u7406\u8005\u306f\u3001 \u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u5b8c\u5168\u306b\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30e2\u30c7\u30eb"))," \u30d5\u30a1\u30a4\u30eb\u3092\u4ecb\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u8a8d\u8a3c\u306e\u5b9f\u884c\u3068\u6761\u4ef6\u3002 Casbin \u306f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Enforker"))," \u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u306b\u4e0e\u3048\u3089\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u3068\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u306b\u57fa\u3065\u3044\u3066\u53d7\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"casbin\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u8a00\u8a9e"},"Casbin\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u8a00\u8a9e:"),(0,r.kt)("p",null,"Casbin \u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u5185\u3067\u7d71\u5408\u3055\u308c\u308b\u6e96\u5099\u304c\u3067\u304d\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/casbin"},(0,r.kt)("img",{alt:"golang",src:a(2067).Z,width:"480",height:"251"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/jcasbin"},(0,r.kt)("img",{alt:"java",src:a(8951).Z,width:"480",height:"240"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/node-casbin"},(0,r.kt)("img",{alt:"nodejs",src:a(1875).Z,width:"480",height:"293"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/php-casbin/php-casbin"},(0,r.kt)("img",{alt:"php",src:a(9818).Z,width:"480",height:"259"}))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin"},"Casbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/jcasbin"},"jCasbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/node-casbin"},"node-Casbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/php-casbin"},"PHP-Casbin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/pycasbin"},(0,r.kt)("img",{alt:"python",src:a(1634).Z,width:"480",height:"270"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/Casbin.NET"},(0,r.kt)("img",{alt:"dotnet",src:a(145).Z,width:"480",height:"270"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/casbin-cpp"},(0,r.kt)("img",{alt:"c++",src:a(5081).Z,width:"480",height:"270"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/casbin-rs"},(0,r.kt)("img",{alt:"rust",src:a(3383).Z,width:"480",height:"240"}))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/pycasbin"},"PyCasbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/Casbin.NET"},"Casbin.NET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-cpp"},"Casbin-CPP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-rs"},"Casbin-RS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready")))),(0,r.kt)("h3",{id:"\u8a00\u8a9e\u3054\u3068\u306e\u6a5f\u80fd"},"\u8a00\u8a9e\u3054\u3068\u306e\u6a5f\u80fd"),(0,r.kt)("p",null,"Casbin\u304c\u3059\u3079\u3066\u306e \u8a00\u8a9e\u306b\u5bfe\u3057\u3066\u540c\u3058\u6a5f\u80fd\u3092\u6301\u305f\u305b\u308b\u305f\u3081\u306b\u3001\u79c1\u305f\u3061\u306f\u5e38\u306b\u6700\u5584\u3092\u5c3d\u304f\u3057\u3066\u3044\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u73fe\u5b9f\u306f\u305d\u308c\u307b\u3069\u7c21\u5358\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6a5f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Go"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Java"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:"center"},"PHP"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Python"),(0,r.kt)("th",{parentName:"tr",align:"center"},"C#"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Delphi"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Rust"),(0,r.kt)("th",{parentName:"tr",align:"center"},"C++"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Lua"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Dart"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Elixir"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b9f\u884c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Scaling ABAC (",(0,r.kt)("inlineCode",{parentName:"td"},"eval()"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Adapter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Management API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RBAC API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Batch API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Filtered Adapter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Watcher"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Role Manager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Multi-Threading"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"'in' of matcher"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30e1\u30e2"),"- \u2705 \u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u307e\u305f\u306f\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u7528\u306e \u306f\u3001\u30b3\u30a2\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u304c\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 It is not indicative of whether there is a watcher or role manager implementation available."),(0,r.kt)("h2",{id:"casbin\u3068\u306f"},"Casbin\u3068\u306f\uff1f"),(0,r.kt)("p",null,"Casbin \u306f\u3001\u7279\u5b9a\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u307e\u305f\u306f\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u30b5\u30d6\u30b8\u30a7\u30af\u30c8")," \u306b\u3088\u3063\u3066\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u3088\u3046\u306b\u30d5\u30ed\u30fc\u3067\u4f7f\u7528\u3067\u304d\u308b\u8a8d\u8a3c\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002 The type of access i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," can be ",(0,r.kt)("em",{parentName:"p"},"read"),", ",(0,r.kt)("em",{parentName:"p"},"write"),", ",(0,r.kt)("em",{parentName:"p"},"delete")," or any other action as set by the developer. \u3053\u308c\u306f Casbin \u304c\u6700\u3082\u5e83\u304f\u4f7f\u7528\u3055\u308c\u3001\u300c\u6a19\u6e96\u300d \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"{ subject, object, action }")," \u3068\u3044\u3046\u30d5\u30ed\u30fc\u3068\u547c\u3070\u308c\u308b\u65b9\u6cd5\u3067\u3059\u3002"),(0,r.kt)("p",null,"Casbin \u306f\u3001\u6a19\u6e96\u30d5\u30ed\u30fc\u4ee5\u5916\u306e\u591a\u304f\u306e\u8907\u96d1\u306a\u8a8d\u53ef\u30bb\u30f3\u30ea\u30aa\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac"},"\u30ed\u30fc\u30eb (RBAC)"),"\u3001 ",(0,r.kt)("a",{parentName:"p",href:"/docs/abac"},"\u5c5e\u6027 (ABAC)")," \u306a\u3069\u304c\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"casbin\u304c\u884c\u3046\u3053\u3068"},"Casbin\u304c\u884c\u3046\u3053\u3068\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"{ subject, object, action }")," \u30d5\u30a9\u30fc\u30e0 \u307e\u305f\u306f\u5b9a\u7fa9\u3057\u305f\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u3067\u30dd\u30ea\u30b7\u30fc\u3092\u5f37\u5236\u3057\u307e\u3059\u3002\u8a31\u53ef\u3068\u62d2\u5426\u306e\u4e21\u65b9\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30e2\u30c7\u30eb\u3068\u305d\u306e\u30dd\u30ea\u30b7\u30fc\u306e\u4fdd\u5b58\u3092\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u307e\u3059"),(0,r.kt)("li",{parentName:"ol"},"\u30ed\u30fc\u30eb\u30fb\u30e6\u30fc\u30b6\u30fc\u9593\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u3068\u30ed\u30fc\u30eb\u30fb\u30ed\u30fc\u30eb\u9593\u306e\u30de\u30c3\u30d4\u30f3\u30b0\uff08RBAC\u306e\u30ed\u30fc\u30eb\u968e\u5c64\uff09\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"root")," \u3084 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u7ba1\u7406\u8005")," \u306e\u3088\u3046\u306a\u7d44\u307f\u8fbc\u307f\u306e\u30b9\u30fc\u30d1\u30fc\u30e6\u30fc\u30b6\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002 \u30b9\u30fc\u30d1\u30fc\u30e6\u30fc\u30b6\u306f\u660e\u793a\u7684\u306a\u6a29\u9650\u306a\u3057\u306b\u4f55\u3067\u3082\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30eb\u30fc\u30eb\u306e\u30de\u30c3\u30c1\u30f3\u30b0\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u8907\u6570\u306e\u7d44\u307f\u8fbc\u307f\u6f14\u7b97\u5b50\u3002 \u4f8b\u3048\u3070\u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch")," \u306f \u30ea\u30bd\u30fc\u30b9 \u30ad\u30fc ",(0,r.kt)("inlineCode",{parentName:"li"},"/foo/bar")," \u3092\u30d1\u30bf\u30fc\u30f3 ",(0,r.kt)("inlineCode",{parentName:"li"},"/foo*")," \u306b\u30de\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"casbin\u304c\u884c\u3046\u3082\u306e-not-\u3084\u308a\u307e\u3059"},"Casbin\u304c\u884c\u3046\u3082\u306e ",(0,r.kt)("strong",{parentName:"h3"},"NOT")," \u3084\u308a\u307e\u3059:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8a8d\u8a3c (\u30ed\u30b0\u30a4\u30f3\u6642\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"\u30e6\u30fc\u30b6\u30fc\u540d")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u30d1\u30b9\u30ef\u30fc\u30c9")," \u306e\u691c\u8a3c)"),(0,r.kt)("li",{parentName:"ol"},"\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f\u30ed\u30fc\u30eb\u306e\u30ea\u30b9\u30c8\u7ba1\u7406\u3002")),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u3001\u30ed\u30fc\u30eb\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30ea\u30b9\u30c8\u3092\u7ba1\u7406\u3059\u308b\u65b9\u304c\u4fbf\u5229\u3067\u3059\u3002 \u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u901a\u5e38\u30e6\u30fc\u30b6\u304c\u4fdd\u6301\u3057\u3066\u304a\u308a\u3001Casbin\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4fdd\u7ba1\u3059\u308b\u3082\u306e\u3068\u3057\u3066\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002 \u3057\u304b\u3057\u3001Casbin\u306fRBAC\u30b7\u30ca\u30ea\u30aa\u306e\u30e6\u30fc\u30b6\u30fc\u30fb\u30ed\u30fc\u30eb\u9593\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u306b\u3064\u3044\u3066\u306f\u4fdd\u5b58\u3092\u884c\u3044\u307e\u3059\u3002"))}g.isMDXComponent=!0},5081:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cpp-56b38b73abf68f92c17de2d420951248.png"},145:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dotnet-72b4fc5b6729af5affc0dad178cca8e8.png"},2067:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/golang-bb03eb73d50185d94e628cc517857215.png"},8951:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/java-1a1bba41af766a38ce2c5abb53785db3.png"},1875:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/nodejs-6ddbd197a96684461fe7e1e19f946aab.png"},9818:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/php-c6cf7587c7ce90491250aa5877d5621a.png"},1634:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/python-d2e764c939405c0ddad577ca4d53f9f9.png"},3383:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAADwCAQAAAByfH8xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAABIAAAASABGyWs+AAAe/klEQVR42u2dd4AURdbAf7sLC0hcRSVIzkkQREBA8ECOYATXiIeHCt6ZPT09Pg/1PD3DnVkxnJg9RcSAgSRRxUQSyYKAZBAkLbDs7nx/7LLMTHdPV4fp6pl9v/pnt6v6dVVNv67uqlfvgSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIQrqSpbsCKUJNhtCJHezRXRFBEJzSiC1EiLCHzrqrIghCLGcylrH0SFBiGpGStIRsy1LteY7XOF93cwShLNGfQiJEKOQPFiUuL1XfCBFGWZQ6i4MlJa7S3SRBKDt8VaqahznXJD+n5PX5SMqjsUmpruwrLfGLzCwIQjC0i1HOfAYYSoyNKREhwkwy4sp0ZHdMiQFqFxcEwRsPxSnn/rhv4d9RZFDgCENjyrRkW1z+27qbJQjpQhuGM8AwZhaTxS8G5dxGi9L88iwyUd8Im6heWqYWqwz5eVH5sfTiapnJFgRVbiwZQadzkkluP1P1XEe9kvzbTfMjRHi6pEQNFprmX2NytRzGleQ+rLtbBCEVqFo6MxzhVwYb8t+0UM9lHE8tzoiamIpPhVxAHaowxyL/C8O1erG+NLeIJrq7RhDCT684tRpHTlRuDgcsFdR7ahV1pQo8EfctfYXurhHSg0zdFUgqreP+z2VB1CTVJVRM4rWPriq3Yx43xn2Ft3IqThDKHk+YjIyHuI1MoCJzkzj+RlhPVQCGscck933dXSMI4WeKhXLN4EP2J1V9ix8VU/jIIm+57q4R0oMM7yJCzEbq6K6CBYVU5pDuSgipTzp/A+eEVn0hK2q1WRBck+oKXINn2cQsLjKxPw63irQ0HMmgP5+yhddC/OARBF+ZWfpVuZrrOCYmb7hvX7MLGcUIruVlH7+c74mpa3muiLL6WkZ53R0rCMmnSZxSbOduapbm/tsXRcvjqqiZgrpM90mBx5XKrMotUUYexam37q4VhOTTxkQx9vM0jcnmJn71RdGGxF2zAt/4Inc/91CFWjzATpNc2c8klAEaWyhHAZt9Gic/MLlqe9MdSm7S9ihTTxmBBRek9iTWAYvjWdTy6QovmxxbxHyfpNekgsOWCUIM6anA/rHE9OgPadAyIS1IbQU+mPQrREyPJt/8JfktE9KC1FbgQxQl+QptTY+2S3rLZAQWlEhtBY4kfaT6o8mx9nRMestEgYUywQ6f5oOLUxFLDYtP9stIv7KYAl/rEaGy7o4VBP9owBC6mVon/eKLuuxjOvcxiGOBDnHrsnaGHJtpA1SlN3cyxTcXAcY3oyxOIZfmun8KQXDKpRwuUaVZ3M9AapTmtOE3j4qyjRcZGLeY09Wwg3cho7iE4SamlOtoFnNuJfrxmMGuymkqjHI7UIU+jGZySZ2KuFn3zyEITqjOXsPtvZgxDGWo6VZ51bSVx+ll4YK9N3lKMlbRwPT8DLrxaJxDeGfpENeTy+N8V/LwOpoKaKT7JxEEdTr69FIaneYy1NKEopj+HLKVssRm11B5hjC5JHCLn+lcBCFlqOrrBFEeLynOIV9gGPti03yOV5LThCcN7xDeUri3SQpCHPN8uvEP8ZSjnbaXJRg950Z9iduTw51s96kVW9Pci4qQdjzmw21/gAcVR8xohlqo8KS4nccqHMMd7PKhJeN1/xyC4IyLPN/079LU5bVvMpH2KZVcSqvNC56/if+i++cQBGfU8XTDr/G4t/ZvcfLeSxDiW4VTmO2pPafp/jkEwSmrXd7s+fzLxctuPMNKX33383cfYv9mMNS1s4F94mxHSD1edXWzf0cbn65fhYGM4CKO861FdfjMVZs+1/MDCIIXRji+0Yt4xOOrbrLJ4FoXhpf36q62IDinpcPbfEOKuKRpwQ8OW9ZXd5UFwTmDHN3kU3xzqJN8qjHeUdtG6q6wEC7CZRRQnr5UAXZRxG4K2Es++2nEDKopy3iO6ynU3RAHZHA3o5V/h3wGMY9KVKQy2VSlHNXJ5BDTyNPdEKGsU43vXc7NHv3yHaW7Ea64SHHzhHX6ibq6GyGUdf7h8SY+lMJhs7t5ttIaq7sJQlnnY0838N4Un+DpwFZP7V+ouwGCDsLkE2uRh3PzOIdpuhvgiYX0YpOH8730niD4QB2FPbjmaQ+n6668LzRlo+uv/5N1V14Qxrp8ee7h/dIhoYVLPx5TdFdc0EO4lpFOZqGLGr3MZ7orbmAXW9jEThdnduVzF/bbA0PYB0IZxJ2FcFjTGsbxVzo5fCid69gHyeKQPYiFMksf7UqXjLSe/1jEeDDnzw7lD9P9swnCEfxyoBO+NJdc5c2ITzqQuyHk2zaEMsUl2hUtmeknLlDqhWy+VZZ5u+6fTBCOUo6ftatZctNkGiv0Q6O4CBFWaTfVdf9kgj7CZMhRTBH7dFchyfRjAZfalvqZa5Sk5VGgu0GCPsI3e3k1L+quQiC8wPUctinzIlcrSLqXe3Q3Jg24maE2JXbST3cljYRFgavSkja0pjXdHXlcTmU+JtcmPGp1FlPPVk4eX7CEZSxhGbt0NypleYTbbEps40TdlTSiV4GbcQYtaUsrixhD6c5UzrOJBHyWQxurTSxlKUuZyw+6G5dipKgC62Sk71F1Uy99bDsL8ZZLyffo/nlTjEdse3Sr7iqGi+M8b2JPj2Tnpq42u13JLZQYSo5IUQXWNwvd1nV8g/TiLpupkc085EpuJp10N01IPvoUeDmHdDc+FGTynM3mhfau5EZYrLtpQvLRp8BbxcdxCY0Sfq82YLArqWNEgYXkksEn2r9Aw5EOJnCE+5griQtsApgL8cg3sGMiDA9npwROBf5kkVOdq1zIy+Ny+UApG+g1pdzK9bo7ICSMsNinNIyqLqT9H0t1N0gIBt220OMZo7sLQkEtOpocLcetLmR9yOO6myMEhW4FhlvFZgiAM02One/CQm2zkv20kCboV+CDDCffMncbn/ABy3RXMgB6mhy7wXCkkN8SSolwDTt0N0UIjnK6KwDM40FGmxzfzM2MpwiATjxFt5jc+UTiymfTTndTPNDacKQTZ8T8/zkPMpMCqnEeo2lqKuUVPtHdkCRRiUY04hhyOIZKVAci/MYh8tjDBjazycaqPE0JgwJjGrpsPaezsfS/efRmPOdE5f+dT+POqM86T7W4zZFz9Cya0YE+NPSpD4y7jm6O+W80/yx5ZO3hdSbwDoNMpKgHgSumAc1sy8xRnNG2j4yxyvEvlE1netKZjgr9vJMNLONHlvIja2x2SdfgVENP2NfFvoX5zHbYwrTgJ5NVt96GUjlsj8qfasiv73E19kyFmhrpzkc+rQbHrtzWJT8q73+G61ZljYmMPQ7Xf/+qUK86irLsJf3VUd168Qp7Xa+sf8MTXGqplt2TtKK/xdU9lMLUYxTLTTriW9PS90eVKDK8MOtRYIDzFd3fJE4VY2Q+ENPWhiZXHW4qZT33O9jGEFYF7stcn1RqExNMZnpEgT1TmSuYRqFFR/zH9Jz+MWXi4/HpU2Do6FmFY7/gjmFHVN6Pptc8MYG0r7iWHIV6h1GBq/O6z2pl/FBMGwXWMQudSW9eZjOv0cfy+ntMj+6O+e+yEG2wnu85MvGamP/+wHFR/5kHPduawCVPN8awmXGcHZJZDnWa842tcxuhlOAV+EJWM4MrbSyMGpoebRTzXwVGBF57a/4bNeXmhugJtAxuismraXpGDuUTSqxALhPZwEjdXeOA1sySfcxOCFqB2/K20rztANPJmHifyucFXPtEFPC1p/OnR/3dlZYxeSdzvMkZfZTknshznOWpZhFPZzvhOCYn2NYhmBC0Ap+tGJvgRP5iONbVsLEuXJ607HxMJj73w6j/4kOFZpk4b89yMCV0vqd2BafAj3BSYNdKE4JW4Dzlkv/gypj/O/CBobbhsjlq5eHcCWyP+s+4hvkXLo75P4On6Kws3Zun7SI/OkeB1vwhoCulEUEr8P+UvxSzGMu7nEkOObTlQb4ymbKaqigrCLp4CLFdyD9i/je+jGfyFg+Xfgu3ZqLlBkQjuz162g5qBL5NOXKUoJEmpgYIbtLOuBcunctIx7PYw5XfMMj72LRcAQv5npWOZG9L6BtLZRmpJmp4W0Y6xrXRRpleRgp+kWE1PZhCG89ydnABGwKvvTl9eVbBJNGKndxpOHYVM0xeybMc+8f6hX4s99i6YEbgnlSxLXOYGcxhIWvYDEBFqlGVGtTlZNrTIWbpTUgix/K1x7H3QZMfS8cIXJuhzPF43QtNJVfn357HpBXUt6m/ygh8rGJfeBuB/2lzbgFP2M5Q12Uwz5m84ckI7DM76cv7CqbhZqziCV5hfxJqdSuXOCidSQOa+zAP/iLjTY/v5jbuZwTXu56ZXUB/tvnQL8GMwC1t8m/iGVsZG5nABKA5/RjAWQnWyRcZNjP4ExvJy0pEilGOlx0+3YqYSI8EEr2OwDrSO7YTN5mcw1QXkidRWeFXUBmBVcOXehuBv0t45jIXQYCO5wa+sRiBjaSoUzudZPGS8u14iFfpYCMv9RR4hrJz+158aGk3bpY+VpSsosCqWxS9KfCyhGc+7/oua8F9SrPbKarAOj1yFHK10jTUDu6nIcNYqLGuyWASZytvQp/FebTkWcVPhwIG+7i9PZhX6IoJc9372FzB3ykMpAVa0OtSx36CZBMjqc9dJbOO6cSbnOvwS34V11GfURZbG6Ip58qXpRXBKHBiFe2mKKXMoVeBO9kEFYFPeSENXaUUMporXE147ORfNDJspDTSU0GWKsEo8N6Euac6MFwpU+hT4Go8b7FtP5pQfnd45Ge6cZ8HtchX8OP5PuM4waf6BmNKafcx9SyveTJWTVN0KfBAFjFC4erbFWSlFh/Sle88ytijUCaXxT7tqw1mBF5pW+IKlrKY57mJvspOBtIeHevAdXicXMWyOzXUL3ns4wZe8UHObqVSJ/A6w/gzqzxeLRgFVnuotaVtyV97WMFKlrGcJawuS+uvsQStwNmM4nbbL9+jpNf3b2VakunDK6nKCFxMX5YwhlGeDF+CeYWewWEbBwWxVKNz6X6sw6xiKQuYyXdlTZWDfYVuxmzudqC+6abAGdzB20oGFolRV2Aoz4185ynYdzAj8K9Mdn1ueVpzIffzJbuYzCjTMDVpSpAKXJFpdHF4TvrF2MvlC8++pNV3VRfTimkeprSC2k74pA8yKtOP+5nHCu7ybRIv1ASpwF1sTeuNODegCz8d+MrW8jcx2Y7PqOHBrU5QG/qnMsk3Wc25j/U8nf5KHKQCu3kdTs8t3rWZ7mH7oZ3VkjlOR+2jBPcQHeGrj5UKXMdKLgus9loIUoG/Z67jc1LNKaoqtfnQg7WUcwVe6eELU+0h6oea/0KuhweNGdV5M87bSZoRpAIX8Xued/hC5n3CJ6y04iXX5zpV4HH09KAYag9Rf36pmQzwZQtkNH93FWU5RQh2Fnov19KRbxycUSPQ+gVLbkywNic4UeBl9OJiT0qhNgKrbjq0YzYdmOCTrCM8nL621MG/oi6iJ7cyWnExya/bIpw8zCSldcu63BLzwt1EUf5hHuNezy+laveI07iI1mxmCL24y6XDBzOyeJLTAptNLxM04lOlfa0PO5CZevuBI3HOYq24y5XsrxT8ZPrn1O5Mj/uBjbTjMTb51tN2s/Apuh9Y1yTRzwzkIh6ntk25ugHW6V6W2JapQl3qc6ZFeG3n3MA7CqWcLxv9xt94wacFoMpKc8MdfOqRoyzmFm6hLX3pQ28Fl3eJuSpUToh9Q+cs7zim225WCFKBZzJTuWw3bjcEenFDd9o7Ciuuyu9Y4JusHKWw3E79ZaryIz/yOOVoQmta0pqWtHA1fz+A8uloZql3mWYHu22+cuspSgqauQzmYsYohfBMzBAFBXa+RPOTYjkVXxU1lCQ5tbFzRgErWFH6X00a0YS2tKINTZS/0dsxP6l11ILeDf2VOWhTooEro4VgeIc+7PIs5VyFMk6XaApMQ8OZoWKqquJWtqNH2zJn7OA73uYuhtCSauQqrnF3CLCGgaFTgXOYahvhN4vmGmtoxwIGkO9RRnsF17ROHZaXY7aiM1q7ByigZDOmL6rRAcbTn3MU5toT97P9fIHewS50larNLKXVuXB7YfiGxzzL6GVbwnnIzVZ8ofToU9lv3cG2xIlxgeiC52OFGe7EvbjX9nw//Yz5hi4FbsQc2imVPEVTDVW5z3OAl9Ns8svR1YXUBsxR6DuVpZHutqYcD4Rgvf4N23XexJYH9ls0K4QxdIseBW7LF8rGCKcqltPFfp7wKMFOgbu5NJI4gRm2zu1UHj71GJAwv5/28Rdgt60KJp7sUtlj7eZBmmR0KHAXZjnwadQp9FsKX/Pod7i9zUTd7YpyjFRnMoMSlliv5KvjkQQz0Z15z5e7qDJvenrbqmj7mEscJVlFga/xoZ0pT1/HIbtaK0r2aonV23WbZnu88pAEsgdS5El2vs2Gum+VpHxusWB2CTsc1CXRd2pVIkSYxqXK0SpiybW9+kMJz++h1IJbQj+cJJkW5Dm+Ba9XlK1Pge/1eOUNlj46urHbo+wIBXRPUPfHFKWs5bwYn1VZ9FU0h3WiwBEi7OK/DHBofVaLn22vfnVCCTUV27CA0VxEN1rR2JD8swcPLX9zcQO+ryhbnwKf7VnJfuUawzdaVUaT71lyhAhPJ6j7+Q7kbOdtHuROHuNtNruoh5oCF6ffGM9IRZPVs1ircHW7L1jvdtcjXN9BrgnaEsvNzpjfKYa28mot6x6vfp7hWF7gXt5lNhsooAZNOIOBPth5FZPIF8oU9isbitRU3HzhB9UZwhBgF/NZxCpWsZbNcfdPDq3ow4UKmzZgN9/blJjJpYG1zjeCfqOvy5IQLDmYs5eChPkRfrAMAr7Ohb+voDhEZxYnyH+PwQHV5I4Eu8uqKk0j7Y2ynj/O0Z30BlfYlBjuwcVCMSN5wWsXhZ92vMchX14MdSSrB9672mtmngqYxOk2v4jKRkB/kpNXaL+TvdFQjuf7UsMrdPDLSIsZwvEMYxrptMHaiZeRoPiSkRxPf76yKTfDl51Lv+hubkImKvhj28VruquZWtTjDlZpH6OcJasRuJf2mkWntdzjyAS1u8elqgibaaJQStcIvF+xN5p7HIM1jMC6yeL3vOn59gkuWSlwVQq11604fcwFLhwAvOLpmnvoAgrldCmwepC3f3q6ThlU4GLUjAnCkKwn/RZpr1uECBtcTktWYanra+4oiVFkX1KHAhc5sp/KYqKHa5WJb2AzJuqugA+E4yv4E9zNLOzjbDa5OnM9vXxYRksWB/kTLzooX8hQpuiutBPCocDhXYJRJxw3cX3XC4Nr6Mtqx2dN5BQFT2K6WMDpijYER9nNIO5Ms6B6SWaw9hdP9WStHu2016043ejhl8jhHQdX2sWfYvrD2yt0ee5hugtDW6u0lus9mCnV5mG2psIrtH4a8pv2m94PBc5gg/baRYiQb7s9MTGDmK9wlf08Z/Cm4k2Bi8mmB6OYxE4PPXCQD7jQBxvDLPpyP7McbNfQoMC691ZkMSuhqX3YyMT6G/MlhuuuHgA/0VHBv0Qi+jCM8y08UBQyl/G8ym+GnFxbuT9EOaazoz4nczLtaU8jxVn1AlbwNZ8x1VH8ZBVqkkM1cqhq81iYxxqfr2yLbgW+k39proEzEinwJfxPd/VKeEZ5B5c15enIaTShQYmN+R72spzlfGnrCthvMqhFA+pRj/pUojLZVCMLOMgBdnGQA2xmHetYpuThS/CR0zms/ZXTr1doqOTpxc/fFNymA0ErOmehq/BKWoUPPcAruqtQylMuHOEJgiNe0j5O+TsCQ80QTcj5F+1eEExomkIGlKoKDH/WXsOj6QzdP7GQfPS9QtfSPoGWDJ5jhu4qlCIv0WUAfUpUibWcoLv5jkk0C13MCcxTjIqQXPJoHM6AmIKf6BuBD3BJ4AsSQbCN/mzRXQn2MkzUtyyg9zW2HG1oQSta0pIWLt2JBov9CAzQko+UIgr5Sz6rWMYKlrKCJbImWjYIz3doJg1oQWv+SFvdVUlYS7XdPtV4iqEBvd+s41mWs4yfbXx6CWlIeBT4CGcwS6lcIR96jIjgnI3c4qB0cy6muXKgTyP9FJ22Xc5bAfeDICRgjuIySWoZYTplqGIvrA7JllBBAKC6g1gEw3RXNml04aBiHxTQWHdlBeEotzkwVcijo+7qJoW6juIePK67uoJwhHJKQTKOppXU1F1l36nADEd9sDu0rvKFpBO2zQQX0cBR+WZ8Qh+TwJFZtOI0TqMhRczmeXbpblgJNRjESexhEQss3LZk8ZbDKE3VGJkg4oEgBIiKN4j4NCkqal4DcnmEWXEhTLcq+OUPggujNhzmM48x/JE2MZNQGYx10QMbXDiSFQTf6evSbP9N+jOaiWyxLLEtBGab51n4jt7DDB5iMPWAR132wJW6GycIMNnl7auSHvJePU9kK4SvdBIsOzb9GMIVfaGM0T6pGwyXa27dWUlsW4QIA3X/fIIOwmQEcG1SR5HmHKu1dcl23Xet1tYJmgiTAtdJqvQMj+5WvZLsq9fW2jpBE2FaRprEuT5I2cdUtpPJaYa47V00upkxe3zsYheZ1PfpITpZW9sEAYBMxlAQ9VV3mJ1sYTXbHXwJPktOqbw+cUYhn2hsW9O4ei6kP1lAcQwAJ745d7GaTeyMCYRZxDgPmyYEwTeq05jG5MTYFtVkteLNPTpO2omsj8rdrnGm9rKYen5ExZjcPsqWz9tpFHVeVXJoSGPNX/eCYEMHpZv7WxMF7R9Toqm2FjwRVYsNJjEPbldU4LO1tUAIJWGaxLJGzc7oGYyb7SexKuo/fdNY0Vd+1CTwyROKxp5icSXEkBoK3EOplHmAz2+j/u6iqf7ZdIj673OTEvnMUZKUSnGkhABIDQVWu23NNwfkRf2tS4Hbx3zz7jAts01JktqjTCgzpIICZyjetuYb26O/eztomquNfXU/0bSMmhfnU6ispQVCSEkFBW6muBHhIpNjdWJG7wq019KC2JG/n0mJSopxFMrTVUsLBME1wxVnaPPpZDg3PuL8DVpasDymDltNln3uUV4HvltLCwTBNepB0DZyatR55XjcUOJzixfYZHKcYZPGdKrFlBjswJRjiuZfQxAcssKBndJhxtKfZrTnOpaZljjIWIORZfJoyIOmlmQ/cSnHANCKFx3twtoTKvNXQbDhhKRsMpzDcBNzCj+pSC4TLbbwH3mU7HQVjjQ9HfkJacopSVDf4rSf1xmSBDWuSH9eTmKk4HN0/yRCeAi/H4cKrKZuzJFVfMUXfAl8QHPP8vOZxWdMZzFFnmU15UwG0deHpZ7NDGEr3elOD1rH/Ep7aWyxkiyUQcKvwNCZCZzEYeaXKO7RqHs1WMnxPl1lB7P4lkX8wGaHZ+ZwMu3pTk/f9uQWUZ+NUfK7czo96ExFdnCFxk2RQuhIBQWGcpzEthibqiNsTIIbgB2sYBWrWMsmtrMtLghqJY7jWI6lFg1pSENaUT8JLS5vEqgsm5PYQH4SriakLKmhwNbsjNr/mzyK2A1AhZKZ4+RTzWTDgyAYSPUliWAUKjOQx0Q0lUSBBRVSwZQyUe3T1Q9FKgQ7F0JAaitwRe8iQooosKBEaitw+t7m6dsywVdSW4HTdwRO35YJvpLaCmw1Tm1iqu6qKfElPzlsmSDEkH4KvJThNKIfPVmpu3oJ2cI59KAFF/KNYssEIc2oHbfRYRZnR61s35c0a2Q/0qtR7ejFx3EtOdV5ZwhC6vFMyQ1fyHsGXxWXBaySztKdcbVtw8ulzto/0N2tQqqQ6pZYGVxJV3YyNsZ9bDEdWKC7egk4j48Mx+pyNXX4kefFYFJQI9UVOBEV2VcSviSMNGW17ioIqU9qT2Il5iBrdFfBkgP8rLsKQjqQ6rbQiVlOM5Ojh7mPPAbTNcmPrwVMYA8PmO4OXunD7mNBSHMeMJk8WkybktwJSZ2k+r7kKg34wiT3Dd1dI6QH6fwKDcsMR57kNJaU/P2qM2EOOSJ9Hb25l0LbmgmCEEfnmFFvL8NicrPZYTl+rmJDTKxiYypik4XfywgR8uOc0Q9iW0z+EN1dIwjhJztKbb438Z/1lIX6fUY2UI2Nlgq6jwZAhqXP6g8M16rN1NLcPMVYE4JQxunBL0Q4zCOmgTk7mSrfl6VuAnItFfi2khJZFl/SF5hcLZM7OECEXzlfd7cIQqpQjvYJ/GYtNqjeohjvG5+aqueiqNn7Ckwz5G+3jONbk1PS1gmBIATOLXGqt5SaMfn12GtQz4K4GEyVmB1X4lHdzRKEssEJ5Ecp3lpOMpS4zaDATxnKVGd+TIm2upslCGWFiaVq9yvtTPKz+TFGObeYOrg7ibWlJRbqbpIglB3algQf20U3ixI9Y7b6XW5RqjkbShareulukiCUJXIYxnBqJShxdLEokaePGgzjqoRyBEHQQHW+JkKE5SbfyIIghJ4MWnNyiDcnCoIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIJQZvh/FzYACC3g5LEAAABSdEVYdGNvbW1lbnQAVGhpcyBpbWFnZSBpcyBmcm9tIFtWZWN0b3JMb2dvWm9uZV0oaHR0cHM6Ly93d3cudmVjdG9ybG9nby56b25lLykuICBFbmpveSHUiVybAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTI5VDEyOjM1OjUwKzAwOjAw6W0dKAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0yOVQxMjozNTo1MCswMDowMJgwpZQAAAAASUVORK5CYII="}}]);