"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[45],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"superadmin",title:"Super Admin",description:"The Super Admin is the administrator of the entire system. It can be used in models such as RBAC, ABAC, and RBAC with domains.",keywords:["Super Admin"],authors:["ErikQQY"]},a=void 0,s={unversionedId:"superadmin",id:"superadmin",title:"Super Admin",description:"The Super Admin is the administrator of the entire system. It can be used in models such as RBAC, ABAC, and RBAC with domains.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/ru/docs/superadmin",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SuperAdmin.mdx",tags:[],version:"current",frontMatter:{id:"superadmin",title:"Super Admin",description:"The Super Admin is the administrator of the entire system. It can be used in models such as RBAC, ABAC, and RBAC with domains.",keywords:["Super Admin"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"Priority Model",permalink:"/ru/docs/priority-model"},next:{title:"Storage",permalink:"/ru/docs/category/storage"}},c={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Super Admin is the administrator of the entire system. It can be used in models such as RBAC, ABAC, and RBAC with domains. The detailed example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,i.kt)("p",null,"This example illustrates that, with the defined ",(0,i.kt)("inlineCode",{parentName:"p"},"request_definition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_effect"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"matchers"),", Casbin determines whether the request can match the policy. One important aspect is checking if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," is root. If the judgment is correct, authorization is granted, and the user has permission to perform all actions."),(0,i.kt)("p",null,"Similar to the root user in Linux systems, being authorized as root grants access to all files and settings. If we want a ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," to have full access to the entire system, we can assign it the role of Super Admin, granting the ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," permission to perform all actions."))}l.isMDXComponent=!0}}]);