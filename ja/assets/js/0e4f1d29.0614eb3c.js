"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,b=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"understanding-casbin-detail",title:"Understanding How Casbin Matching Works in Detail",description:"Casbin\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc",keywords:["RBAC","ACL"],authors:["aravindarc"]},o=void 0,l={unversionedId:"understanding-casbin-detail",id:"understanding-casbin-detail",title:"Understanding How Casbin Matching Works in Detail",description:"Casbin\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/UnderstandingCasbinMatchingInDetail.mdx",sourceDirName:".",slug:"/understanding-casbin-detail",permalink:"/ja/docs/understanding-casbin-detail",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/UnderstandingCasbinMatchingInDetail.mdx",tags:[],version:"current",frontMatter:{id:"understanding-casbin-detail",title:"Understanding How Casbin Matching Works in Detail",description:"Casbin\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u8fd4\u91d1\u30dd\u30ea\u30b7\u30fc",keywords:["RBAC","ACL"],authors:["aravindarc"]},sidebar:"docs",previous:{title:"Tutorials",permalink:"/ja/docs/tutorials"},next:{title:"Model",permalink:"/ja/docs/category/model"}},s={},p=[{value:"RBAC\u3078\u306e\u5c0e\u5165",id:"rbac\u3078\u306e\u5c0e\u5165",level:2},{value:"Azure\u306e\u968e\u5c64\u578bRBAC\u306e\u7406\u89e3",id:"azure\u306e\u968e\u5c64\u578brbac\u306e\u7406\u89e3",level:2},{value:"Casbin\u306f\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u306e\u304b\uff1f",id:"casbin\u306f\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u306e\u304b",level:2},{value:"ACL\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",id:"acl\u3068\u306f\u4f55\u3067\u3059\u304b",level:2},{value:"\u30e2\u30c7\u30eb\u5b9a\u7fa9",id:"\u30e2\u30c7\u30eb\u5b9a\u7fa9",level:3},{value:"\u3067\u306f\u3001Casbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046",id:"\u3067\u306fcasbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046",level:3},{value:"ACL\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe",id:"acl\u30e2\u30c7\u30eb\u30dd\u30ea\u30b7\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe",level:3},{value:"RBAC\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",id:"rbac\u3068\u306f\u4f55\u3067\u3059\u304b",level:2},{value:"\u30e2\u30c7\u30eb\u5b9a\u7fa9",id:"\u30e2\u30c7\u30eb\u5b9a\u7fa9-1",level:3},{value:"\u3067\u306f\u3001Casbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046",id:"\u3067\u306fcasbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046-1",level:3},{value:"RBAC\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe",id:"rbac\u30e2\u30c7\u30eb\u30dd\u30ea\u30b7\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe",level:3},{value:"\u968e\u5c64\u578bRBAC\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",id:"\u968e\u5c64\u578brbac\u3068\u306f\u4f55\u3067\u3059\u304b",level:2},{value:"\u30e2\u30c7\u30eb\u306e\u5b9a\u7fa9",id:"\u30e2\u30c7\u30eb\u306e\u5b9a\u7fa9",level:3},{value:"\u6b21\u306b\u3001Casbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046",id:"\u6b21\u306bcasbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046",level:3},{value:"RBAC\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u8868\u73fe",id:"rbac\u30e2\u30c7\u30eb\u30dd\u30ea\u30b7\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u8868\u73fe",level:3},{value:"Subject Matching\u306e\u8996\u899a\u7684\u8868\u73fe",id:"subject-matching\u306e\u8996\u899a\u7684\u8868\u73fe",level:4},{value:"Action Matching\u306e\u8996\u899a\u7684\u8868\u73fe",id:"action-matching\u306e\u8996\u899a\u7684\u8868\u73fe",level:4},{value:"Object Matching\u306e\u8996\u899a\u7684\u8868\u73fe",id:"object-matching\u306e\u8996\u899a\u7684\u8868\u73fe",level:4},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u6295\u7a3f\u3067\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u305fRBAC\u306e\u8a2d\u8a08\u3068\u5b9f\u88c5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u8907\u6570\u306e\u30ea\u30bd\u30fc\u30b9\u968e\u5c64\u3068\u3001\u4e0a\u4f4d\u30ec\u30d9\u30eb\u304b\u3089\u6a29\u9650\u3092\u7d99\u627f\u3059\u308b\u30ed\u30fc\u30eb\u3092\u6271\u3046SaaS\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5bfe\u3057\u3066\u3001Casbin\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9ad8\u3044\u4ee3\u66ff\u624b\u6bb5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"rbac\u3078\u306e\u5c0e\u5165"},"RBAC\u3078\u306e\u5c0e\u5165"),(0,a.kt)("p",null,"RBAC\u306f\u3001\u500b\u3005\u306e\u6301\u3064\u5f79\u5272\u306b\u57fa\u3065\u3044\u3066\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002 \u968e\u5c64\u578bRBAC\u306e\u4ed5\u7d44\u307f\u3092\u3088\u308a\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u3001\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067Azure\u306eRBAC\u30b7\u30b9\u30c6\u30e0\u3092\u898b\u3066\u307f\u3066\u3001\u305d\u308c\u306b\u4f3c\u305f\u30b7\u30b9\u30c6\u30e0\u3092\u5b9f\u88c5\u3057\u3088\u3046\u3068\u8a66\u307f\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"azure\u306e\u968e\u5c64\u578brbac\u306e\u7406\u89e3"},"Azure\u306e\u968e\u5c64\u578bRBAC\u306e\u7406\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/media/organize-resources/scope-levels.png",alt:"Azure Hierarchy"})),(0,a.kt)("p",null,"Azure\u306e\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u306f",(0,a.kt)("strong",{parentName:"p"},"Owner"),"\u3068\u3044\u3046\u5f79\u5272\u304c\u3042\u308a\u307e\u3059\u3002 \u3082\u3057\u79c1\u304c\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30ec\u30d9\u30eb\u3067",(0,a.kt)("strong",{parentName:"p"},"Owner"),"\u306e\u5f79\u5272\u3092\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3059\u308b\u3068\u3001\u305d\u308c\u306f\u79c1\u304c\u305d\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306e\u4e0b\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u30b0\u30eb\u30fc\u30d7\u3068\u30ea\u30bd\u30fc\u30b9\u306e",(0,a.kt)("strong",{parentName:"p"},"Owner"),"\u3067\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u3082\u3057\u79c1\u304c\u30ea\u30bd\u30fc\u30b9\u30b0\u30eb\u30fc\u30d7\u30ec\u30d9\u30eb\u3067",(0,a.kt)("strong",{parentName:"p"},"Owner"),"\u3092\u6301\u3063\u3066\u3044\u308b\u306a\u3089\u3001\u79c1\u306f\u305d\u306e\u30ea\u30bd\u30fc\u30b9\u30b0\u30eb\u30fc\u30d7\u306e\u4e0b\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u306e",(0,a.kt)("strong",{parentName:"p"},"Owner"),"\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u753b\u50cf\u306f\u3001\u79c1\u304c\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30ec\u30d9\u30eb\u3067",(0,a.kt)("strong",{parentName:"p"},"Owner"),"\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 ",(0,a.kt)("img",{alt:"Subscription Owner",src:n(6970).Z,width:"3456",height:"1836"})),(0,a.kt)("p",null,"\u3053\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306e\u4e0b\u306e\u30ea\u30bd\u30fc\u30b9\u30b0\u30eb\u30fc\u30d7\u306eIAM\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001\u79c1\u304c\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u304b\u3089",(0,a.kt)("strong",{parentName:"p"},"Owner"),"\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u7d99\u627f\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 ",(0,a.kt)("img",{alt:"RG Owner",src:n(878).Z,width:"3456",height:"1836"})),(0,a.kt)("p",null,"\u3053\u308c\u304c\u3001Azure\u306eRBAC\u304c\u968e\u5c64\u7684\u3067\u3042\u308b\u65b9\u6cd5\u3067\u3059\u3002 \u30ea\u30bd\u30fc\u30b9\u30ec\u30d9\u30eb\u306e\u968e\u5c64\u6027\u306e\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u306e\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u968e\u5c64\u578bRBAC\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Casbin\u3092\u4f7f\u7528\u3057\u3066\u540c\u69d8\u306e\u30b7\u30b9\u30c6\u30e0\u3092\u5b9f\u88c5\u3057\u3088\u3046\u3068\u8a66\u307f\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"casbin\u306f\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u306e\u304b"},"Casbin\u306f\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u306e\u304b\uff1f"),(0,a.kt)("p",null,"\u5b9f\u88c5\u306b\u5165\u308b\u524d\u306b\u3001Casbin\u304c\u4f55\u3067\u3042\u308a\u3001\u9ad8\u30ec\u30d9\u30eb\u3067\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u304b\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002 \u3053\u306e\u7406\u89e3\u306f\u5fc5\u8981\u3067\u3059\u3002\u306a\u305c\u306a\u3089\u3001\u5404\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\uff08RBAC\uff09\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u7279\u5b9a\u306e\u8981\u4ef6\u306b\u57fa\u3065\u3044\u3066\u7570\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002 Casbin\u306e\u4ed5\u7d44\u307f\u3092\u628a\u63e1\u3059\u308b\u3053\u3068\u3067\u3001\u30e2\u30c7\u30eb\u3092\u52b9\u679c\u7684\u306b\u5fae\u8abf\u6574\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"acl\u3068\u306f\u4f55\u3067\u3059\u304b"},"ACL\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f"),(0,a.kt)("p",null,"ACL\u306fAccess Control List\u306e\u7565\u3067\u3059\u3002 \u3053\u308c\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u308b\u65b9\u6cd5\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"\u30e2\u30c7\u30eb\u5b9a\u7fa9"},"\u30e2\u30c7\u30eb\u5b9a\u7fa9"),(0,a.kt)("p",null,"ACL\u30e2\u30c7\u30eb\u306e\u7c21\u5358\u306a\u4f8b\u3092\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[request_definition]\nr = sub, act, obj\n\n[policy_definition]\np = sub, act, obj\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"request","_","definition"),"\u306f\u30b7\u30b9\u30c6\u30e0\u306e\u30af\u30a8\u30ea\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059\u3002 \u4f8b\u3048\u3070\u3001\u30ea\u30af\u30a8\u30b9\u30c8",(0,a.kt)("inlineCode",{parentName:"p"},"alice, write, data1"),"\u306f\u300c\u4e3b\u4f53Alice\u304c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8'data1'\u306b\u5bfe\u3057\u3066'write'\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3067\u304d\u308b\u304b\uff1f\u300d\u3068\u89e3\u91c8\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"policy","_","definition"),"\u306f\u30b7\u30b9\u30c6\u30e0\u306e\u5272\u308a\u5f53\u3066\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30dd\u30ea\u30b7\u30fc",(0,a.kt)("inlineCode",{parentName:"p"},"alice, write, data1"),"\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3001Alice\u3068\u3044\u3046\u4e3b\u4f53\u306b\u5bfe\u3057\u3066\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8'data1'\u306b\u5bfe\u3059\u308b'action'\u3092\u5b9f\u884c\u3059\u308b\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"policy","_","effect"),"\u306f\u30dd\u30ea\u30b7\u30fc\u306e\u52b9\u679c\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"matchers"),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6761\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"r.sub == p.sub && r.obj == p.obj && r.act == p.act"),"\u3092\u4f7f\u7528\u3057\u3066\u30dd\u30ea\u30b7\u30fc\u3068\u4e00\u81f4\u3057\u307e\u3059\u3002"))),(0,a.kt)("h3",{id:"\u3067\u306fcasbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046"},"\u3067\u306f\u3001Casbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"\u30a8\u30c7\u30a3\u30bf\u30fc"),"\u3092\u958b\u304d\u3001\u4e0a\u8a18\u306e\u30e2\u30c7\u30eb\u3092\u30e2\u30c7\u30eb\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u3092\u30dd\u30ea\u30b7\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, read, data1\np, bob, write, data2\n")),(0,a.kt)("p",null,"\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"alice, read, data1\n")),(0,a.kt)("p",null,"\u7d50\u679c\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"true\n")),(0,a.kt)("h3",{id:"acl\u30e2\u30c7\u30eb\u30dd\u30ea\u30b7\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe"},"ACL\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"acl",src:n(3353).Z,width:"6968",height:"3096"})),(0,a.kt)("h2",{id:"rbac\u3068\u306f\u4f55\u3067\u3059\u304b"},"RBAC\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f"),(0,a.kt)("p",null,"RBAC\u306fRole-Based Access Control\u306e\u7565\u3067\u3059\u3002 RBAC\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u30ea\u30bd\u30fc\u30b9\u306e\u5f79\u5272\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3001\u5f79\u5272\u306b\u306f\u4efb\u610f\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30e2\u30c7\u30eb\u5b9a\u7fa9-1"},"\u30e2\u30c7\u30eb\u5b9a\u7fa9"),(0,a.kt)("p",null,"\u7c21\u5358\u306a\u4f8b\u3068\u3057\u3066RBAC\u30e2\u30c7\u30eb\u3092\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[request_definition]\nr = sub, act, obj\n\n[policy_definition]\np = sub, act, obj\n\n[role_definition]\ng = _, _\ng2 = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && g(p.act, r.act) && r.obj == p.obj\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"role","_","definition"),"\u306f\u3001\u30b0\u30e9\u30d5\u3092\u4f7f\u7528\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u30dd\u30ea\u30b7\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6bd4\u8f03\u3059\u308b\u30b0\u30e9\u30d5\u95a2\u4fc2\u30d3\u30eb\u30c0\u30fc\u3067\u3059\u3002")),(0,a.kt)("h3",{id:"\u3067\u306fcasbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046-1"},"\u3067\u306f\u3001Casbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"\u30a8\u30c7\u30a3\u30bf\u30fc"),"\u3092\u958b\u304d\u3001\u4e0a\u8a18\u306e\u30e2\u30c7\u30eb\u3092\u30e2\u30c7\u30eb\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u3092\u30dd\u30ea\u30b7\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, reader, data1\np, bob, owner, data2\n\ng, reader, read\ng, owner, read\ng, owner, write\n")),(0,a.kt)("p",null,"\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"alice, read, data1\nalice, write, data1\nbob, write, data2\nbob, read, data2\nbob, write, data1\n")),(0,a.kt)("p",null,"\u7d50\u679c\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"true\nfalse\ntrue\ntrue\nfalse\n")),(0,a.kt)("h3",{id:"rbac\u30e2\u30c7\u30eb\u30dd\u30ea\u30b7\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe"},"RBAC\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u306a\u8868\u73fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rbac",src:n(3859).Z,width:"7016",height:"2844"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"g - Role to action mapping"),"\u30c6\u30fc\u30d6\u30eb\u306f\u3001\u5f79\u5272\u3092\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u30b0\u30e9\u30d5\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30b0\u30e9\u30d5\u306f\u3001\u30dd\u30ea\u30b7\u30fc\u306b\u793a\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001\u30a8\u30c3\u30b8\u306e\u30ea\u30b9\u30c8\u3068\u3057\u3066\u30b3\u30fc\u30c9\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u30b0\u30e9\u30d5\u3092\u8868\u73fe\u3059\u308b\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3067\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"g, reader, read\ng, owner, read\ng, owner, write\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"p"),"\u306f\u3001","*","*","==","*","*","\u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u6bd4\u8f03\u3067\u304d\u308b\u901a\u5e38\u306e\u30dd\u30ea\u30b7\u30fc\u3092\u793a\u3057\u307e\u3059\u3002 ",(0,a.kt)("strong",{parentName:"p"},"g"),"\u306f\u30b0\u30e9\u30d5\u30d9\u30fc\u30b9\u306e\u6bd4\u8f03\u95a2\u6570\u3067\u3059\u3002 \u6570\u5024\u306e\u63a5\u5c3e\u8f9e\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001","*","*","g, g2, g3, ...","*","*","\u306a\u3069\u3068\u3044\u3063\u305f\u8907\u6570\u306e\u30b0\u30e9\u30d5\u6bd4\u8f03\u5668\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u968e\u5c64\u578brbac\u3068\u306f\u4f55\u3067\u3059\u304b"},"\u968e\u5c64\u578bRBAC\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f"),(0,a.kt)("p",null,"\u968e\u5c64\u7684RBAC\u3067\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u7a2e\u985e\u304c\u8907\u6570\u3042\u308a\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u7a2e\u985e\u9593\u306b\u306f\u7d99\u627f\u95a2\u4fc2\u304c\u5b58\u5728\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001\u300csubscription\u300d\u306f\u4e00\u3064\u306e\u7a2e\u985e\u3067\u3001\u300cresourceGroup\u300d\u306f\u5225\u306e\u7a2e\u985e\u3067\u3059\u3002 ",(0,a.kt)("strong",{parentName:"p"},"Subscription"),"\u30bf\u30a4\u30d7\u306esub1\u306f\u3001",(0,a.kt)("strong",{parentName:"p"},"ResourceGroup"),"\u30bf\u30a4\u30d7\u306e\u8907\u6570\u306eresourceGroups\uff08rg1\u3001rg2\uff09\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30ea\u30bd\u30fc\u30b9\u306e\u968e\u5c64\u3068\u540c\u69d8\u306b\u3001\u5f79\u5272\u3068\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u306f2\u3064\u306e\u30bf\u30a4\u30d7\u304c\u3042\u308a\u307e\u3059\uff1aSubscription\u306e\u5f79\u5272\u3068\u30a2\u30af\u30b7\u30e7\u30f3\u3001\u304a\u3088\u3073ResourceGroup\u306e\u5f79\u5272\u3068\u30a2\u30af\u30b7\u30e7\u30f3\u3002 Subscription\u306e\u5f79\u5272\u3068ResourceGroup\u306e\u5f79\u5272\u306e\u9593\u306b\u306f\u4efb\u610f\u306e\u95a2\u4fc2\u304c\u3042\u308a\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001Subscription Role\u306e",(0,a.kt)("strong",{parentName:"p"},"sub-owner"),"\u3092\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002 \u3053\u306e\u5f79\u5272\u306f\u3001ResourceGroup Role\u306e",(0,a.kt)("strong",{parentName:"p"},"rg-owner"),"\u306b\u7d99\u627f\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u79c1\u304cSubscription\u306e",(0,a.kt)("strong",{parentName:"p"},"sub1"),"\u306b",(0,a.kt)("strong",{parentName:"p"},"sub-owner"),"\u306e\u5f79\u5272\u3092\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u5834\u5408\u3001\u81ea\u52d5\u7684\u306b",(0,a.kt)("strong",{parentName:"p"},"rg1\u3068rg2"),"\u306e",(0,a.kt)("strong",{parentName:"p"},"rg-owner"),"\u306e\u5f79\u5272\u3082\u5f97\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30e2\u30c7\u30eb\u306e\u5b9a\u7fa9"},"\u30e2\u30c7\u30eb\u306e\u5b9a\u7fa9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u968e\u5c64\u7684RBAC"),"\u30e2\u30c7\u30eb\u306e\u7c21\u5358\u306a\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[request_definition]\nr = sub, act, obj\n\n[policy_definition]\np = sub, act, obj\n\n[role_definition]\ng = _, _\ng2 = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && g(p.act, r.act) && g2(p.obj, r.obj)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"role","_","definition"),"\u306f\u3001\u30b0\u30e9\u30d5\u3092\u4f7f\u7528\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u30dd\u30ea\u30b7\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6bd4\u8f03\u3059\u308b\u30b0\u30e9\u30d5\u95a2\u4fc2\u30d3\u30eb\u30c0\u30fc\u3067\u3059\u3002")),(0,a.kt)("h3",{id:"\u6b21\u306bcasbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046"},"\u6b21\u306b\u3001Casbin\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30e2\u30c7\u30eb\u3092\u30c6\u30b9\u30c8\u3057\u3066\u307f\u307e\u3057\u3087\u3046"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"\u30a8\u30c7\u30a3\u30bf\u30fc"),"\u3092\u958b\u304d\u3001\u4e0a\u8a18\u306e\u30e2\u30c7\u30eb\u3092\u30e2\u30c7\u30eb\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u3092\u30dd\u30ea\u30b7\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, sub-reader, sub1\np, bob, rg-owner, rg2\n\n// subscription role to subscription action mapping\ng, sub-reader, sub-read\ng, sub-owner, sub-read\ng, sub-owner, sub-write\n\n// resourceGroup role to resourceGroup action mapping\ng, rg-reader, rg-read\ng, rg-owner, rg-read\ng, rg-owner, rg-write\n\n// subscription role to resourceGroup role mapping\ng, sub-reader, rg-reader\ng, sub-owner, rg-owner\n\n// subscription resource to resourceGroup resource mapping\ng2, sub1, rg1\ng2, sub2, rg2\n")),(0,a.kt)("p",null,"\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"alice, rg-read, rg1\n")),(0,a.kt)("p",null,"\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"true\n")),(0,a.kt)("h3",{id:"rbac\u30e2\u30c7\u30eb\u30dd\u30ea\u30b7\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u8868\u73fe"},"RBAC\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u8996\u899a\u7684\u8868\u73fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hrbac",src:n(4492).Z,width:"7968",height:"4204"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"g - Role to (Action, Role) Mapping"),"\u30c6\u30fc\u30d6\u30eb\u306f\u3001\u5f79\u5272\u3092\u30a2\u30af\u30b7\u30e7\u30f3\u3001\u5f79\u5272\u30de\u30c3\u30d4\u30f3\u30b0\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u30b0\u30e9\u30d5\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30b0\u30e9\u30d5\u306f\u3001\u30dd\u30ea\u30b7\u30fc\u306b\u793a\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001\u30a8\u30c3\u30b8\u306e\u30ea\u30b9\u30c8\u3068\u3057\u3066\u30b3\u30fc\u30c9\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u30b0\u30e9\u30d5\u3092\u8868\u73fe\u3059\u308b\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3067\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"// subscription role to subscription action mapping\ng, sub-reader, sub-read\ng, sub-owner, sub-read\ng, sub-owner, sub-write\n\n// resourceGroup role to resourceGroup action mapping\ng, rg-reader, rg-read\ng, rg-owner, rg-read\ng, rg-owner, rg-write\n\n// subscription role to resourceGroup role mapping\ng, sub-reader, rg-reader\ng, sub-owner, rg-owner\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"g2 - Sub to RG Mapping"),"\u30c6\u30fc\u30d6\u30eb\u306f\u3001subscription\u3092resourceGroup\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u30b0\u30e9\u30d5\u3092\u6301\u3063\u3066\u3044\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"// subscription resource to resourceGroup resource mapping\ng2, sub1, rg1\ng2, sub2, rg2\n")),(0,a.kt)("h4",{id:"subject-matching\u306e\u8996\u899a\u7684\u8868\u73fe"},"Subject Matching\u306e\u8996\u899a\u7684\u8868\u73fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hrbac-sub-match",src:n(3541).Z,width:"8176",height:"4336"})),(0,a.kt)("h4",{id:"action-matching\u306e\u8996\u899a\u7684\u8868\u73fe"},"Action Matching\u306e\u8996\u899a\u7684\u8868\u73fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hrbac-act-match",src:n(8303).Z,width:"7964",height:"4376"})),(0,a.kt)("h4",{id:"object-matching\u306e\u8996\u899a\u7684\u8868\u73fe"},"Object Matching\u306e\u8996\u899a\u7684\u8868\u73fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hrbac-obj-match",src:n(6879).Z,width:"7964",height:"4296"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u30ea\u30af\u30a8\u30b9\u30c8\u304cCasbin\u306b\u9001\u4fe1\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u30de\u30c3\u30c1\u30f3\u30b0\u306f\u3059\u3079\u3066\u306e\u30dd\u30ea\u30b7\u30fc\u306b\u5bfe\u3057\u3066\u884c\u308f\u308c\u307e\u3059\u3002 \u5c11\u306a\u304f\u3068\u3082\u4e00\u3064\u306e\u30dd\u30ea\u30b7\u30fc\u304c\u30de\u30c3\u30c1\u3059\u308b\u3068\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u7d50\u679c\u306ftrue\u306b\u306a\u308a\u307e\u3059\u3002 \u30dd\u30ea\u30b7\u30fc\u304c\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4e00\u81f4\u3057\u306a\u3044\u5834\u5408\u3001\u7d50\u679c\u306ffalse\u306b\u306a\u308a\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u8a8d\u8a3c\u30e2\u30c7\u30eb\u304c\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3057\u3001\u305d\u308c\u3089\u304cCasbin\u3092\u4f7f\u7528\u3057\u3066\u3069\u306e\u3088\u3046\u306b\u30e2\u30c7\u30eb\u5316\u3067\u304d\u308b\u304b\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3057\u305f\u3002 \u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u7b2c2\u90e8\u3067\u306f\u3001\u3053\u308c\u3092\u30c7\u30e2\u306eSpring Boot\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5b9f\u88c5\u3057\u3001Casbin\u3092\u4f7f\u7528\u3057\u3066API\u3092\u4fdd\u8b77\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0},3353:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/acl-704097c47b27a1f2235c82f593af469e.png"},8303:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hrbac-act-match-bbb086158782591771f2df01419dc4b8.png"},6879:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hrbac-obj-match-aad370d5cbfe1020ec108b9242f8d4bd.png"},3541:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hrbac-sub-match-55dffd4e5fadb9773658dc90bacbb091.png"},4492:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hrbac-1350d755e04234a34394996344d2b259.png"},3859:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rbac-4c8e405408b9e4df554f7cd619eae897.png"},878:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rg-owner-9c6cd2ae5997a5fba717c445f43130e6.png"},6970:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subscription-owner-f1a7e1c9c03d7c587ce910ae5e6d8a35.png"}}]);