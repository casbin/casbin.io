"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5077],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>C});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),C=r,u=d["".concat(o,".").concat(C)]||d[C]||m[C]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function C(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"Casbin RBAC\u548cRBAC96\u4e4b\u95f4\u7684\u533a\u522b",keywords:["RBAC96","Casbin RBAC"],authors:["kininaru"]},l=void 0,p={unversionedId:"rbac-96",id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"Casbin RBAC\u548cRBAC96\u4e4b\u95f4\u7684\u533a\u522b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/zh/docs/rbac-96",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"Casbin RBAC\u548cRBAC96\u4e4b\u95f4\u7684\u533a\u522b",keywords:["RBAC96","Casbin RBAC"],authors:["kininaru"]},sidebar:"docs",previous:{title:"RBAC with Conditions",permalink:"/zh/docs/rbac-with-conditions"},next:{title:"ABAC",permalink:"/zh/docs/abac"}},o={},c=[{value:"Casbin RBAC\u548cRBAC96",id:"casbin-rbac\u548crbac96",level:2},{value:"Casbin RBAC\u548cRBAC96\u4e4b\u95f4\u7684\u533a\u522b",id:"casbin-rbac\u548crbac96\u4e4b\u95f4\u7684\u533a\u522b",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"casbin-rbac\u548crbac96"},"Casbin RBAC\u548cRBAC96"),(0,r.kt)("p",null,"\u5728\u8fd9\u4efd\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5c06\u6bd4\u8f83Casbin RBAC\u548c",(0,r.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96"),"\u3002"),(0,r.kt)("p",null,"Casbin RBAC\u652f\u6301RBAC96\u7684\u51e0\u4e4e\u6240\u6709\u529f\u80fd\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u65b0\u7684\u529f\u80fd\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RBAC\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7ea7\u522b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC0\u662fRBAC96\u7684\u57fa\u7840\u7248\u672c\u3002 \u5b83\u660e\u786e\u4e86\u7528\u6237\u3001\u89d2\u8272\u548c\u6743\u9650\u4e4b\u95f4\u7684\u5173\u7cfb\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC1\u5728RBAC0\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u89d2\u8272\u5c42\u6b21\u7ed3\u6784\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"td"},"alice"),"\u6709",(0,r.kt)("inlineCode",{parentName:"td"},"role1"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"role1"),"\u6709",(0,r.kt)("inlineCode",{parentName:"td"},"role2"),"\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"td"},"alice"),"\u4e5f\u5c06\u62e5\u6709",(0,r.kt)("inlineCode",{parentName:"td"},"role2"),"\u5e76\u7ee7\u627f\u5176\u6743\u9650\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u4e92\u65a5\u5904\u7406\uff08",(0,r.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u50cf\u8fd9\u6837"),"\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC2\u5728RBAC0\u4e0a\u589e\u52a0\u4e86\u7ea6\u675f\u3002 \u8fd9\u4f7f\u5f97RBAC2\u80fd\u591f\u5904\u7406\u4e92\u65a5\u7684\u7b56\u7565\u3002 \u7136\u800c\uff0c\u4e0d\u652f\u6301\u6570\u91cf\u9650\u5236\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u4e92\u65a5\u5904\u7406\uff08",(0,r.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u50cf\u8fd9\u6837"),"\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC3\u662fRBAC1\u548cRBAC2\u7684\u7ed3\u5408\u3002 \u5b83\u652f\u6301RBAC1\u548cRBAC2\u4e2d\u7684\u89d2\u8272\u5c42\u6b21\u7ed3\u6784\u548c\u7ea6\u675f\u3002 \u7136\u800c\uff0c\u4e0d\u652f\u6301\u6570\u91cf\u9650\u5236\u3002")))),(0,r.kt)("h2",{id:"casbin-rbac\u548crbac96\u4e4b\u95f4\u7684\u533a\u522b"},"Casbin RBAC\u548cRBAC96\u4e4b\u95f4\u7684\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728Casbin\u4e2d\uff0c\u7528\u6237\u548c\u89d2\u8272\u4e4b\u95f4\u7684\u533a\u522b\u5e76\u4e0d\u50cf\u5728RBAC96\u4e2d\u90a3\u4e48\u660e\u663e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5728Casbin\u4e2d\uff0c\u7528\u6237\u548c\u89d2\u8272\u90fd\u88ab\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002 \u4f8b\u5982\uff0c\u8003\u8651\u4ee5\u4e0b\u7b56\u7565\u6587\u4ef6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4f7f\u7528Casbin Enforcer\u7684\u5b9e\u4f8b\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()"),"\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u503c\u5c06\u662f\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"[admin alice]\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u662f\u56e0\u4e3a\u5728Casbin\u4e2d\uff0c\u4e3b\u9898\u5305\u62ec\u7528\u6237\u548c\u89d2\u8272\u3002"),(0,r.kt)("p",{parentName:"li"},"\u7136\u800c\uff0c\u5982\u679c\u4f60\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"GetAllRoles()"),"\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u503c\u5c06\u662f\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,r.kt)("p",{parentName:"li"},"\u4ece\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u770b\u51fa\u5728Casbin\u4e2d\uff0c\u7528\u6237\u548c\u89d2\u8272\u662f\u6709\u533a\u522b\u7684\uff0c\u4f46\u5b83\u5e76\u4e0d\u50cf\u5728RBAC96\u4e2d\u90a3\u4e48\u660e\u663e\u3002 \u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u7b56\u7565\u4e2d\u6dfb\u52a0\u524d\u7f00\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"user::alice"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"role::admin"),"\u6765\u660e\u786e\u5b83\u4eec\u7684\u5173\u7cfb\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casbin RBAC\u63d0\u4f9b\u7684\u6743\u9650\u6bd4RBAC96\u66f4\u591a\u3002"),(0,r.kt)("p",{parentName:"li"},"RBAC96\u53ea\u5b9a\u4e49\u4e867\u79cd\u6743\u9650\uff1a\u8bfb\u3001\u5199\u3001\u8ffd\u52a0\u3001\u6267\u884c\u3001\u4fe1\u7528\u3001\u501f\u8bb0\u548c\u67e5\u8be2\u3002"),(0,r.kt)("p",{parentName:"li"},"\u7136\u800c\uff0c\u5728Casbin\u4e2d\uff0c\u6211\u4eec\u5c06\u6743\u9650\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002 \u8fd9\u4f7f\u4f60\u80fd\u591f\u521b\u5efa\u66f4\u9002\u5408\u4f60\u9700\u6c42\u7684\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casbin RBAC\u652f\u6301\u57df\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5728Casbin\u4e2d\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e\u57df\u8fdb\u884c\u6388\u6743\u3002 \u8fd9\u4e2a\u529f\u80fd\u4f7f\u4f60\u7684\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u66f4\u52a0\u7075\u6d3b\u3002"))))}m.isMDXComponent=!0}}]);