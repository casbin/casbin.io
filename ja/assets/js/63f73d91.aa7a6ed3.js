"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||d[k]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={id:"menu-permissions",title:"Menu Permissions",description:"\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306e\u4f8b",keywords:["Menu Permissions","example"],authors:["amikecoXu"]},l=void 0,p={unversionedId:"menu-permissions",id:"menu-permissions",title:"Menu Permissions",description:"\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306e\u4f8b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/MenuPermissions.mdx",sourceDirName:".",slug:"/menu-permissions",permalink:"/ja/docs/menu-permissions",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/MenuPermissions.mdx",tags:[],version:"current",frontMatter:{id:"menu-permissions",title:"Menu Permissions",description:"\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306e\u4f8b",keywords:["Menu Permissions","example"],authors:["amikecoXu"]},sidebar:"docs",previous:{title:"Data Permissions",permalink:"/ja/docs/data-permissions"},next:{title:"Extensions",permalink:"/ja/docs/category/extensions"}},o={},m=[{value:"1. \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",id:"1-\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",level:3},{value:"1.1 \u6982\u8981",id:"11-\u6982\u8981",level:4},{value:"1.2 \u6a29\u9650\u5b9a\u7fa9\uff08\u30dd\u30ea\u30b7\u30fc\uff09",id:"12-\u6a29\u9650\u5b9a\u7fa9\u30dd\u30ea\u30b7\u30fc",level:4},{value:"1.3 \u5f79\u5272\u3068\u30e6\u30fc\u30b6\u30fc\u306e\u95a2\u9023\u4ed8\u3051",id:"13-\u5f79\u5272\u3068\u30e6\u30fc\u30b6\u30fc\u306e\u95a2\u9023\u4ed8\u3051",level:4},{value:"1.4 \u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306e\u968e\u5c64",id:"14-\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306e\u968e\u5c64",level:4},{value:"1.5 \u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306e\u7d99\u627f\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30eb",id:"15-\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306e\u7d99\u627f\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30eb",level:4},{value:"1.6 \u7279\u5225\u306a\u6a29\u9650\u7d99\u627f\u30eb\u30fc\u30eb",id:"16-\u7279\u5225\u306a\u6a29\u9650\u7d99\u627f\u30eb\u30fc\u30eb",level:4},{value:"1.7 \u4f8b\u306e\u8aac\u660e",id:"17-\u4f8b\u306e\u8aac\u660e",level:4},{value:"2. \u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u5236\u5fa1",id:"2-\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u5236\u5fa1",level:3}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u307e\u305a\u3001\u30e1\u30cb\u30e5\u30fc\u30b7\u30b9\u30c6\u30e0\u3092\u7279\u5fb4\u3068\u3059\u308bSpring Boot\u306e\u4f8b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306bjCasbin\u3092\u6d3b\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u6700\u7d42\u7684\u306b\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306b\u7279\u5316\u3057\u305f\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u62bd\u8c61\u5316\u3059\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u304a\u308a\u3001Casbin\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308bGo\u3084Python\u306a\u3069\u306e\u4ed6\u306e\u8a00\u8a9e\u306b\u3082\u62e1\u5f35\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"1-\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"},"1. \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv"),"\u30d5\u30a1\u30a4\u30eb\u3067\u30ed\u30fc\u30eb\u3068\u6a29\u9650\u306e\u7ba1\u7406\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u9593\u306e\u89aa\u5b50\u95a2\u4fc2\u3082\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jcasbin/jcasbin-menu-permission"},"\u3053\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h4",{id:"11-\u6982\u8981"},"1.1 \u6982\u8981"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv"),"\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u5f79\u5272\u306e\u6a29\u9650\u3068\u30e1\u30cb\u30e5\u30fc\u69cb\u9020\u3092\u67d4\u8edf\u306b\u8a2d\u5b9a\u3057\u3001\u8a73\u7d30\u306a\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u7570\u306a\u308b\u5f79\u5272\u306b\u5bfe\u3059\u308b\u5404\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u3001\u30e6\u30fc\u30b6\u30fc\u3068\u5f79\u5272\u306e\u95a2\u9023\u4ed8\u3051\u3001\u304a\u3088\u3073\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u9593\u306e\u968e\u5c64\u95a2\u4fc2\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"12-\u6a29\u9650\u5b9a\u7fa9\u30dd\u30ea\u30b7\u30fc"},"1.2 \u6a29\u9650\u5b9a\u7fa9\uff08\u30dd\u30ea\u30b7\u30fc\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb"),": \u30dd\u30ea\u30b7\u30fc\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"p"),"\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3001\u5f79\u5272\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"sub"),"\uff09\u3068\u305d\u306e\u6a29\u9650\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"act"),"\uff09\u3001\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"obj"),"\uff09\u3001\u304a\u3088\u3073\u30eb\u30fc\u30eb\u306e\u52b9\u679c\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"eft"),"\uff09\u304c\u6307\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"allow"),"\u306f\u6a29\u9650\u304c\u8a31\u53ef\u3055\u308c\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"deny"),"\u306f\u62d2\u5426\u3055\u308c\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"p, ROLE_ROOT, SystemMenu, read, allow"),"\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"ROLE_ROOT"),"\u5f79\u5272\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"SystemMenu"),"\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306b\u5bfe\u3059\u308b\u8aad\u307f\u53d6\u308a\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u6301\u3064\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"p, ROLE_ROOT, UserMenu, read, deny"),"\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"ROLE_ROOT"),"\u5f79\u5272\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"UserMenu"),"\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306b\u5bfe\u3059\u308b\u8aad\u307f\u53d6\u308a\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u62d2\u5426\u3055\u308c\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",{id:"13-\u5f79\u5272\u3068\u30e6\u30fc\u30b6\u30fc\u306e\u95a2\u9023\u4ed8\u3051"},"1.3 \u5f79\u5272\u3068\u30e6\u30fc\u30b6\u30fc\u306e\u95a2\u9023\u4ed8\u3051"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f79\u5272\u306e\u7d99\u627f"),": \u30e6\u30fc\u30b6\u30fc\u3068\u5f79\u5272\u306e\u95a2\u4fc2\u304a\u3088\u3073\u5f79\u5272\u306e\u968e\u5c64\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"g"),"\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306f1\u3064\u307e\u305f\u306f\u8907\u6570\u306e\u30ed\u30fc\u30eb\u304b\u3089\u6a29\u9650\u3092\u7d99\u627f\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g, user, ROLE_USER")," \u306f\u3001\u30e6\u30fc\u30b6\u30fc ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u304c ",(0,r.kt)("inlineCode",{parentName:"li"},"ROLE_USER")," \u30ed\u30fc\u30eb\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g, ROLE_ADMIN, ROLE_USER")," \u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"ROLE_ADMIN")," \u304c ",(0,r.kt)("inlineCode",{parentName:"li"},"ROLE_USER")," \u304b\u3089\u6a29\u9650\u3092\u7d99\u627f\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",{id:"14-\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306e\u968e\u5c64"},"1.4 \u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306e\u968e\u5c64"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30e1\u30cb\u30e5\u30fc\u306e\u95a2\u4fc2"),": \u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u9593\u306e\u89aa\u5b50\u95a2\u4fc2\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"g2")," \u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3001\u30e1\u30cb\u30e5\u30fc\u306e\u69cb\u9020\u3092\u69cb\u7bc9\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g2, UserSubMenu_allow, UserMenu")," \u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"UserSubMenu_allow")," \u304c ",(0,r.kt)("inlineCode",{parentName:"li"},"UserMenu")," \u306e\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g2, (NULL), SystemMenu")," \u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"SystemMenu")," \u306b\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u304c\u306a\u3044\u3053\u3068\u3092\u793a\u3057\u3001\u30c8\u30c3\u30d7\u30ec\u30d9\u30eb\u306e\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u3067\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",{id:"15-\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306e\u7d99\u627f\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30eb"},"1.5 \u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u306e\u7d99\u627f\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30eb"),(0,r.kt)("p",null,"jCasbin\u3067\u30e1\u30cb\u30e5\u30fc\u306e\u6a29\u9650\u3092\u7ba1\u7406\u3059\u308b\u969b\u3001\u89aa\u30e1\u30cb\u30e5\u30fc\u3068\u5b50\u30e1\u30cb\u30e5\u30fc\u306e\u6a29\u9650\u95a2\u4fc2\u306f\u7279\u5b9a\u306e\u7d99\u627f\u30eb\u30fc\u30eb\u306b\u5f93\u3044\u30012\u3064\u306e\u91cd\u8981\u306a\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89aa\u30e1\u30cb\u30e5\u30fc\u306e\u6a29\u9650\u306e\u7d99\u627f"),":"),(0,r.kt)("p",null,"\u89aa\u30e1\u30cb\u30e5\u30fc\u304c\u660e\u793a\u7684\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),"\u6a29\u9650\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u3059\u3079\u3066\u306e\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u3082\u7279\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"\u3068\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),"\u6a29\u9650\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u89aa\u30e1\u30cb\u30e5\u30fc\u304c\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306b\u306a\u308b\u3068\u3001\u305d\u306e\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u3082\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u306e\u6a29\u9650\u8a2d\u5b9a\u304c\u306a\u3044\u89aa\u30e1\u30cb\u30e5\u30fc\u306e\u6271\u3044"),":"),(0,r.kt)("p",null,"\u89aa\u30e1\u30cb\u30e5\u30fc\u306b\u76f4\u63a5\u306e\u6a29\u9650\u8a2d\u5b9a\uff08\u660e\u793a\u7684\u306b\u8a31\u53ef\u307e\u305f\u306f\u62d2\u5426\u3055\u308c\u3066\u3044\u306a\u3044\uff09\u304c\u306a\u3044\u304c\u3001\u5c11\u306a\u304f\u3068\u30821\u3064\u306e\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u304c\u660e\u793a\u7684\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),"\u6a29\u9650\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u89aa\u30e1\u30cb\u30e5\u30fc\u306f\u6697\u9ed9\u7684\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),"\u6a29\u9650\u3092\u6301\u3064\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u3053\u308c\u3089\u306e\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"16-\u7279\u5225\u306a\u6a29\u9650\u7d99\u627f\u30eb\u30fc\u30eb"},"1.6 \u7279\u5225\u306a\u6a29\u9650\u7d99\u627f\u30eb\u30fc\u30eb"),(0,r.kt)("p",null,"\u6a29\u9650\u306e\u7d99\u627f\u306b\u95a2\u3057\u3066\u3001\u7279\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"\u6a29\u9650\u304c\u95a2\u4e0e\u3059\u308b\u30b7\u30ca\u30ea\u30aa\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u6a29\u9650\u306e\u6b63\u78ba\u306a\u5236\u5fa1\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u306e\u30eb\u30fc\u30eb\u306b\u5f93\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u660e\u793a\u7684\u306a\u62d2\u5426\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u62d2\u5426\u306e\u533a\u5225"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN"),"\u306e\u3088\u3046\u306a\u30ed\u30fc\u30eb\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"AdminSubMenu_deny"),"\u306e\u3088\u3046\u306a\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u660e\u793a\u7684\u306b\u62d2\u5426\u3055\u308c\u3066\u3044\u308b\u5834\u5408\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"\u3068\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u308b\uff09\u3001\u3053\u306e\u30ed\u30fc\u30eb\u304c\u5225\u306e\u30ed\u30fc\u30eb\uff08\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_ROOT"),"\uff09\u306b\u3088\u3063\u3066\u7d99\u627f\u3055\u308c\u305f\u3068\u3057\u3066\u3082\u3001\u7d99\u627f\u3059\u308b\u30ed\u30fc\u30eb\u306f\u62d2\u5426\u3055\u308c\u305f\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3055\u308c\u307e\u305b\u3093\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30ed\u30fc\u30eb\u306e\u7d99\u627f\u306b\u3088\u3063\u3066\u660e\u793a\u7684\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u304c\u8fc2\u56de\u3055\u308c\u308b\u3053\u3068\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u62d2\u5426\u6a29\u9650\u306e\u7d99\u627f"),":"),(0,r.kt)("p",null,"\u9006\u306b\u3001\u30ed\u30fc\u30eb\u304c\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\uff08\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"UserSubMenu_deny"),"\uff09\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u62d2\u5426\u3057\u3066\u3044\u308b\u304c\u3001\u3053\u308c\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3042\u308b\u5834\u5408\uff08\u660e\u793a\u7684\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"\u3068\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u306a\u3044\u304c\u3001\u660e\u793a\u7684\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),"\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\uff09\u3001\u3053\u306e\u30ed\u30fc\u30eb\u304c\u5225\u306e\u30ed\u30fc\u30eb\uff08\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN"),"\uff09\u306b\u3088\u3063\u3066\u7d99\u627f\u3055\u308c\u308b\u3068\u3001\u7d99\u627f\u3059\u308b\u30ed\u30fc\u30eb\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u4e0a\u66f8\u304d\u3057\u3001\u3053\u308c\u3089\u306e\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"17-\u4f8b\u306e\u8aac\u660e"},"1.7 \u4f8b\u306e\u8aac\u660e"),(0,r.kt)("p",null,"\u30dd\u30ea\u30b7\u30fc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, ROLE_ROOT, SystemMenu, read, allow\np, ROLE_ROOT, AdminMenu, read, allow\np, ROLE_ROOT, UserMenu, read, deny\np, ROLE_ADMIN, UserMenu, read, allow\np, ROLE_ADMIN, AdminMenu, read, allow\np, ROLE_ADMIN, AdminSubMenu_deny, read, deny\np, ROLE_USER, UserSubMenu_allow, read, allow\n\ng, user, ROLE_USER\ng, admin, ROLE_ADMIN\ng, root, ROLE_ROOT\ng, ROLE_ADMIN, ROLE_USER\n\ng2, UserSubMenu_allow, UserMenu\ng2, UserSubMenu_deny, UserMenu\ng2, UserSubSubMenu, UserSubMenu_allow\ng2, AdminSubMenu_allow, AdminMenu\ng2, AdminSubMenu_deny, AdminMenu\ng2, (NULL), SystemMenu\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30e1\u30cb\u30e5\u30fc\u540d"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ROLE","_","ROOT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ROLE","_","ADMIN"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ROLE","_","USER"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SystemMenu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UserMenu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UserSubMenu","_","allow"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UserSubSubMenu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UserSubMenu","_","deny"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdminMenu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdminSubMenu","_","allow"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AdminSubMenu","_","deny"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,r.kt)("h3",{id:"2-\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u5236\u5fa1"},"2. \u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u5236\u5fa1"),(0,r.kt)("p",null,"\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306e\u30ea\u30b9\u30c8\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jcasbin/jcasbin-menu-permission/blob/master/src/main/java/org/casbin/service/MenuService.java"},"MenuService")," \u3067\u5229\u7528\u53ef\u80fd\u306a ",(0,r.kt)("inlineCode",{parentName:"p"},"findAccessibleMenus()")," \u95a2\u6570\u3092\u901a\u3058\u3066\u7279\u5b9a\u3067\u304d\u307e\u3059\u3002 \u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30cb\u30e5\u30fc\u30a2\u30a4\u30c6\u30e0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"checkMenuAccess()")," \u30e1\u30bd\u30c3\u30c9\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u3088\u308a\u3001jCasbin \u306e\u80fd\u529b\u3092\u6d3b\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u3001\u30e1\u30cb\u30e5\u30fc\u6a29\u9650\u304c\u52b9\u679c\u7684\u306b\u5236\u5fa1\u3055\u308c\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);