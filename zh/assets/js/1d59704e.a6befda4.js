"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(s,".").concat(b)]||d[b]||l[b]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"multi-threading",title:"\u591a\u7ebf\u7a0b",description:"\u4ee5\u591a\u7ebf\u7a0b\u65b9\u5f0f\u4f7f\u7528 Casbin",keywords:["multi-threading"],authors:["hsluoyz"]},i=void 0,c={unversionedId:"multi-threading",id:"multi-threading",title:"\u591a\u7ebf\u7a0b",description:"\u4ee5\u591a\u7ebf\u7a0b\u65b9\u5f0f\u4f7f\u7528 Casbin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/MultiThreading.mdx",sourceDirName:".",slug:"/multi-threading",permalink:"/zh/docs/multi-threading",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"multi-threading",title:"\u591a\u7ebf\u7a0b",description:"\u4ee5\u591a\u7ebf\u7a0b\u65b9\u5f0f\u4f7f\u7528 Casbin",keywords:["multi-threading"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Advanced usage",permalink:"/zh/docs/category/advanced-usage"},next:{title:"Benchmarks",permalink:"/zh/docs/benchmark"}},s={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you use Casbin in a multi-threading manner, you can use the synchronized wrapper of the Casbin enforcer: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"https://github.com/casbin/casbin/blob/master/enforcer_synced.go")," (GoLang) and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcer_synced.cpp"},"https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcer_synced.cpp")," (C++)."),(0,a.kt)("p",null,"\u5b83\u8fd8\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoLoad")," \u7279\u6027\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u6700\u65b0\u7684\u7b56\u7565\u89c4\u5219\u53d1\u751f\u4e86\u66f4\u6539\uff0cCasbin enforcer \u5c06\u81ea\u52a8\u4eceDB\u52a0\u8f7d\u8fd9\u4e9b\u89c4\u5219\u3002 \u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"StartAutoLoadPolicy()")," \u542f\u52a8\u5b9a\u671f\u81ea\u52a8\u52a0\u8f7d\u7b56\u7565\uff0c\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"StopAutoLoadPolicy()")," \u505c\u6b62\u7b56\u7565\u3002"))}l.isMDXComponent=!0}}]);