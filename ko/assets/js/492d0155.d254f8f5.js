"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"data-permissions",title:"Data Permissions",description:"\ub370\uc774\ud130 \uad8c\ud55c\uc5d0 \ub300\ud55c \uc194\ub8e8\uc158",keywords:["Data Permissions","implicit"],authors:["ErikQQY"]},i=void 0,s={unversionedId:"data-permissions",id:"data-permissions",title:"Data Permissions",description:"\ub370\uc774\ud130 \uad8c\ud55c\uc5d0 \ub300\ud55c \uc194\ub8e8\uc158",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/DataPermissions.mdx",sourceDirName:".",slug:"/data-permissions",permalink:"/ko/docs/data-permissions",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/DataPermissions.mdx",tags:[],version:"current",frontMatter:{id:"data-permissions",title:"Data Permissions",description:"\ub370\uc774\ud130 \uad8c\ud55c\uc5d0 \ub300\ud55c \uc194\ub8e8\uc158",keywords:["Data Permissions","implicit"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"Scenarios",permalink:"/ko/docs/category/scenarios"},next:{title:"Menu Permissions",permalink:"/ko/docs/menu-permissions"}},c={},l=[{value:"1. \uc554\uc2dc\uc801 \uc5ed\ud560 \ub610\ub294 \uad8c\ud55c \ucffc\ub9ac",id:"1-\uc554\uc2dc\uc801-\uc5ed\ud560-\ub610\ub294-\uad8c\ud55c-\ucffc\ub9ac",level:3},{value:"2. <code>BatchEnforce()</code> \uc0ac\uc6a9",id:"2-batchenforce-\uc0ac\uc6a9",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("Tabs"),m=p("TabItem"),d={toc:l};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ub370\uc774\ud130 \uad8c\ud55c(\ud544\ud130\ub9c1)\uc5d0 \ub300\ud55c \ub450 \uac00\uc9c0 \uc194\ub8e8\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4: \uc554\uc2dc\uc801 \ud560\ub2f9 API\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchEnforce()")," API\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"1-\uc554\uc2dc\uc801-\uc5ed\ud560-\ub610\ub294-\uad8c\ud55c-\ucffc\ub9ac"},"1. \uc554\uc2dc\uc801 \uc5ed\ud560 \ub610\ub294 \uad8c\ud55c \ucffc\ub9ac"),(0,a.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \uc815\ucc45 \uaddc\uce59\uc5d0\uc11c \uc9c1\uc811 \ud560\ub2f9\ub418\uc9c0 \uc54a\uace0 RBAC \uacc4\uce35 \uad6c\uc870\ub97c \ud1b5\ud574 \uc5ed\ud560\uc774\ub098 \uad8c\ud55c\uc744 \uc0c1\uc18d\ubc1b\uc744 \ub54c, \uc774\ub7ec\ud55c \uc720\ud615\uc758 \ud560\ub2f9\uc744 '\uc554\uc2dc\uc801'\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc554\uc2dc\uc801 \uad00\uacc4\ub97c \ucffc\ub9ac\ud558\ub824\uba74, ",(0,a.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser()")," \ub300\uc2e0\uc5d0 \ub2e4\uc74c \ub450 \uac00\uc9c0 API\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4: ",(0,a.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser()"),".  \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"\uc774 GitHub \uc774\uc288"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h3",{id:"2-batchenforce-\uc0ac\uc6a9"},"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"BatchEnforce()")," \uc0ac\uc6a9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BatchEnforce()"),"\ub294 \uac01 \uc694\uccad\uc744 \uc9d1\ud589\ud558\uace0 \uacb0\uacfc\ub97c \ubd80\uc6b8 \ubc30\uc5f4\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uba74:"),(0,a.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"boolArray, err := e.BatchEnforce(requests)\n"))),(0,a.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const boolArray = await e.batchEnforce(requests);\n"))),(0,a.kt)(m,{value:"Java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"List<Boolean> boolArray = e.batchEnforce(requests);\n")))))}f.isMDXComponent=!0}}]);