"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1405],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={id:"enforcers",title:"\u6267\u884c\u5668",description:"\u6267\u884c\u5668\u662fCasbin\u7684\u4e3b\u8981\u7ed3\u6784\u3002\u5b83\u4f5c\u4e3a\u7528\u6237\u5728\u89c4\u5219\u548c\u6a21\u5f0f\u4e0a\u5f00\u5c55\u4e1a\u52a1\u7684\u4e00\u4e2a\u63a5\u53e3",keywords:["\u6267\u884c\u5668","\u652f\u6301\u7684\u6267\u884c\u5668"]},l=void 0,p={unversionedId:"enforcers",id:"enforcers",title:"\u6267\u884c\u5668",description:"\u6267\u884c\u5668\u662fCasbin\u7684\u4e3b\u8981\u7ed3\u6784\u3002\u5b83\u4f5c\u4e3a\u7528\u6237\u5728\u89c4\u5219\u548c\u6a21\u5f0f\u4e0a\u5f00\u5c55\u4e1a\u52a1\u7684\u4e00\u4e2a\u63a5\u53e3",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Enforcers.mdx",sourceDirName:".",slug:"/enforcers",permalink:"/zh/docs/enforcers",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"enforcers",title:"\u6267\u884c\u5668",description:"\u6267\u884c\u5668\u662fCasbin\u7684\u4e3b\u8981\u7ed3\u6784\u3002\u5b83\u4f5c\u4e3a\u7528\u6237\u5728\u89c4\u5219\u548c\u6a21\u5f0f\u4e0a\u5f00\u5c55\u4e1a\u52a1\u7684\u4e00\u4e2a\u63a5\u53e3",keywords:["\u6267\u884c\u5668","\u652f\u6301\u7684\u6267\u884c\u5668"]},sidebar:"docs",previous:{title:"\u7b56\u7565\u5b50\u96c6\u52a0\u8f7d",permalink:"/zh/docs/policy-subset-loading"},next:{title:"\u9002\u914d\u5668",permalink:"/zh/docs/adapters"}},d={},s=[{value:"\u652f\u6301\u7684\u6267\u884c\u5668",id:"\u652f\u6301\u7684\u6267\u884c\u5668",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=u("Tabs"),f=u("TabItem"),b={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Enforcer")," \u662fCasbin\u7684\u4e3b\u8981\u7ed3\u6784\u3002 \u5b83\u662f\u7528\u6237\u5c31\u89c4\u5219\u548c\u6a21\u5f0f\u5f00\u5c55\u4e1a\u52a1\u7684\u4e00\u4e2a\u63a5\u53e3\u3002"),(0,o.kt)("h2",{id:"\u652f\u6301\u7684\u6267\u884c\u5668"},"\u652f\u6301\u7684\u6267\u884c\u5668"),(0,o.kt)("p",null,"Casbin\u7684\u9002\u914d\u5668\u5b8c\u6574\u5217\u8868\u5982\u4e0b\u3002 \u6211\u4eec\u6b22\u8fce\u6765\u81ea\u7b2c\u4e09\u65b9\u7684\u9002\u914d\u5668\uff0c\u8bf7\u901a\u77e5\u6211\u4eec\uff0c\u4ee5\u5c06\u60a8\u7684\u9002\u914d\u5668\u52a0\u5165\u5217\u8868:)"),(0,o.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6267\u884c\u5668"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer.go"},"\u6267\u884c\u5668")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," \u662f\u7528\u6237\u4e0eCasbin \u7b56\u7565\u548c\u6a21\u578b\u4ea4\u4e92\u7684\u57fa\u672c\u7ed3\u6784\u3002 \u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc ",(0,o.kt)("a",{parentName:"td",href:"/docs/management-api"},"\u627e\u5230\u4e0e",(0,o.kt)("inlineCode",{parentName:"a"},"Enforcer"),"\u76f8\u5173 API \u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_cached.go"},"CachedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer")," \u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),". \u4ed6\u652f\u6301\u5c06\u8bf7\u6c42\u7684\u6267\u884c\u7ed3\u679c\u7f13\u5b58\u5728\u5185\u5b58\u4e2d(\u901a\u8fc7\u4f7f\u7528map), \u5e76\u4e14\u5728\u9884\u5b9a\u7684\u8fc7\u671f\u65f6\u95f4\u540e\u6e05\u9664\u7f13\u5b83 \u6b64\u5916, \u5b83\u901a\u8fc7Read-Write\u9501\u6765\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168 \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"td"},"EnableCache")," \u6765\u542f\u7528\u6267\u884c\u7ed3\u679c\u7f13\u5b58(\u9ed8\u8ba4\u542f\u7528)\u3002 ",(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer"),"\u7684\u5176\u4ed6 API \u4e0e ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),"' \u76f8\u540c\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_distributed.go"},"\u5206\u5e03\u5f0f\u6267\u884c")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DistributedEnforcer")," \u652f\u6301\u5206\u5e03\u5f0f\u96c6\u7fa4\u4e2d\u7684\u591a\u4e2a\u5b9e\u4f8b\u3002 \u5b83\u4e3a\u8c03\u5ea6\u5668\u5305\u88c5\u4e86 ",(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforcer")," \u60a8\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"td",href:"/docs/dispatchers#distributedenforcer"},"\u8fd9\u91cc\u627e\u5230\u66f4\u591a\u5173\u4e8e\u8c03\u5ea6\u5668\u7684\u8be6\u7ec6\u4fe1\u606f"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"SyncedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforer")," \u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," \u5e76\u63d0\u4f9b\u540c\u6b65\u8bbf\u95ee\u3002 \u5b83\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002")))))))}k.isMDXComponent=!0}}]);