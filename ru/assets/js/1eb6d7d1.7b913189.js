"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={id:"data-permissions",title:"\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c",description:"Solutions for Data Permissions",keywords:["Data Permissions","implicit"],authors:["ErikQQY"]},a=void 0,s={unversionedId:"data-permissions",id:"data-permissions",title:"\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c",description:"Solutions for Data Permissions",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/DataPermissions.mdx",sourceDirName:".",slug:"/data-permissions",permalink:"/ru/docs/data-permissions",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/DataPermissions.mdx",tags:[],version:"current",frontMatter:{id:"data-permissions",title:"\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c",description:"Solutions for Data Permissions",keywords:["Data Permissions","implicit"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"Scenarios",permalink:"/ru/docs/category/scenarios"},next:{title:"Menu Permissions",permalink:"/ru/docs/menu-permissions"}},l={},c=[{value:"1. Query Implicit Roles or Permissions",id:"1-query-implicit-roles-or-permissions",level:3},{value:"2. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c <code>BatchEnforce()</code>",id:"2-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-batchenforce",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("Tabs"),m=p("TabItem"),d={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have two solutions for data permissions (filtering): using implicit assignment APIs or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"BatchEnforce()")," API."),(0,o.kt)("h3",{id:"1-query-implicit-roles-or-permissions"},"1. Query Implicit Roles or Permissions"),(0,o.kt)("p",null,'When a user inherits a role or permission via an RBAC hierarchy instead of being directly assigned them in a policy rule, we refer to this type of assignment as "implicit". To query such implicit relations, you need to use the following two APIs: ',(0,o.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser()"),", instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser()"),". For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"this GitHub issue"),"."),(0,o.kt)("h3",{id:"2-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-batchenforce"},"2. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"h3"},"BatchEnforce()")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BatchEnforce()")," enforces each request and returns the results in a boolean array."),(0,o.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,o.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"boolArray, err := e.BatchEnforce(requests)\n"))),(0,o.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const boolArray = await e.batchEnforce(requests);\n"))),(0,o.kt)(m,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<Boolean> boolArray = e.batchEnforce(requests);\n")))))}f.isMDXComponent=!0}}]);