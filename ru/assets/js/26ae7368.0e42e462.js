"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[45],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={id:"superadmin",title:"Super Admin",description:"\u0421\u0443\u043f\u0435\u0440\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432 \u043c\u043e\u0434\u0435\u043b\u044f\u0445, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a RBAC, ABAC \u0438 RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438.",keywords:["Super Admin"],authors:["ErikQQY"]},a=void 0,p={unversionedId:"superadmin",id:"superadmin",title:"Super Admin",description:"\u0421\u0443\u043f\u0435\u0440\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432 \u043c\u043e\u0434\u0435\u043b\u044f\u0445, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a RBAC, ABAC \u0438 RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/ru/docs/superadmin",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SuperAdmin.mdx",tags:[],version:"current",frontMatter:{id:"superadmin",title:"Super Admin",description:"\u0421\u0443\u043f\u0435\u0440\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432 \u043c\u043e\u0434\u0435\u043b\u044f\u0445, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a RBAC, ABAC \u0438 RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438.",keywords:["Super Admin"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"Priority Model",permalink:"/ru/docs/priority-model"},next:{title:"Storage",permalink:"/ru/docs/category/storage"}},c={},u=[],s={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0421\u0443\u043f\u0435\u0440\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432 \u043c\u043e\u0434\u0435\u043b\u044f\u0445, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a RBAC, ABAC \u0438 RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d \u043d\u0438\u0436\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"request_definition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_effect")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"matchers"),", Casbin \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043c\u043e\u0436\u0435\u0442 \u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435. \u041e\u0434\u043d\u0438\u043c \u0432\u0430\u0436\u043d\u044b\u043c \u0430\u0441\u043f\u0435\u043a\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," root. \u0415\u0441\u043b\u0438 \u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u043d\u043e, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f, \u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0435\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439."),(0,i.kt)("p",null,"\u041f\u043e\u0445\u043e\u0436\u0435 \u043d\u0430 root \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 Linux, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u0430\u043a root \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c \u0444\u0430\u0439\u043b\u0430\u043c \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c. \u0415\u0441\u043b\u0438 \u043c\u044b \u0445\u043e\u0442\u0438\u043c, \u0447\u0442\u043e\u0431\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," \u0438\u043c\u0435\u043b \u043f\u043e\u043b\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0435\u043c\u0443 \u0440\u043e\u043b\u044c \u0421\u0443\u043f\u0435\u0440\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439."))}l.isMDXComponent=!0}}]);