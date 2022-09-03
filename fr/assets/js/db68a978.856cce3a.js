"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1202],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={id:"data-permissions",title:"Autorisations des donn\xe9es",description:"Solutions for data permissions",keywords:["Data Permissions","implicit"]},a=void 0,s={unversionedId:"data-permissions",id:"data-permissions",title:"Autorisations des donn\xe9es",description:"Solutions for data permissions",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/DataPermissions.mdx",sourceDirName:".",slug:"/data-permissions",permalink:"/fr/docs/data-permissions",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"data-permissions",title:"Autorisations des donn\xe9es",description:"Solutions for data permissions",keywords:["Data Permissions","implicit"]},sidebar:"docs",previous:{title:"API RoleManager",permalink:"/fr/docs/rolemanager-api"},next:{title:"Multi-threads",permalink:"/fr/docs/multi-threading"}},l={},c=[{value:"1. Requ\xeate de r\xf4les ou de permissions implicites",id:"1-requ\xeate-de-r\xf4les-ou-de-permissions-implicites",level:3},{value:"2. Utilisez <code>BatchEnforce()</code>",id:"2-utilisez-batchenforce",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("Tabs"),d=p("TabItem"),m={toc:c};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nous avons deux solutions pour les autorisations de donn\xe9es (filtrage). Utilisation des API d'affectation implicite. Ou utilisez simplement l'API BatchEnforce() ."),(0,i.kt)("h3",{id:"1-requ\xeate-de-r\xf4les-ou-de-permissions-implicites"},"1. Requ\xeate de r\xf4les ou de permissions implicites"),(0,i.kt)("p",null,"Lorsqu'un utilisateur h\xe9rite d'un r\xf4le ou d'une permission via la hi\xe9rarchie RBAC au lieu de les assigner directement dans une r\xe8gle de r\xe8gle, nous appelons un tel type d'affectation comme ",(0,i.kt)("inlineCode",{parentName:"p"},"implicite"),". Interroger de telles relations implicites, vous devez utiliser ces 2 API : ",(0,i.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser")," au lieu de ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser"),". Pour plus de d\xe9tails, veuillez consulter ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"ce probl\xe8me GitHub"),"."),(0,i.kt)("h3",{id:"2-utilisez-batchenforce"},"2. Utilisez ",(0,i.kt)("inlineCode",{parentName:"h3"},"BatchEnforce()")),(0,i.kt)("p",null,"BatchEnforce ex\xe9cute chaque requ\xeate et renvoie un tableau bool"),(0,i.kt)("p",null,"Par exemple :"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"boolArray, err := e.BatchEnforce(requests)\n"))),(0,i.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const boolArray = await e.batchEnforce(requests);\n"))),(0,i.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Boolean> boolArray = e.batchEnforce(requests);\n")))))}f.isMDXComponent=!0}}]);