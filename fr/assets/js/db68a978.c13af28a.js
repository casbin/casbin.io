"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1202],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9904:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),s=["components"],a={id:"data-permissions",title:"Autorisations des donn\xe9es",description:"Solutions for data permissions",keywords:["Data Permissions","implicit"]},l=void 0,u={unversionedId:"data-permissions",id:"data-permissions",title:"Autorisations des donn\xe9es",description:"Solutions for data permissions",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/DataPermissions.mdx",sourceDirName:".",slug:"/data-permissions",permalink:"/fr/docs/data-permissions",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/DataPermissions.mdx",tags:[],version:"current",frontMatter:{id:"data-permissions",title:"Autorisations des donn\xe9es",description:"Solutions for data permissions",keywords:["Data Permissions","implicit"]},sidebar:"docs",previous:{title:"API RoleManager",permalink:"/fr/docs/rolemanager-api"},next:{title:"Multi-threads",permalink:"/fr/docs/multi-threading"}},c={},p=[{value:"1. Requ\xeate de r\xf4les ou de permissions implicites",id:"1-requ\xeate-de-r\xf4les-ou-de-permissions-implicites",level:3},{value:"2. Utilisez <code>BatchEnforce()</code>",id:"2-utilisez-batchenforce",level:3}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=d("Tabs"),f=d("TabItem"),b={toc:p};function v(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Nous avons deux solutions pour les autorisations de donn\xe9es (filtrage). Utilisation des API d'affectation implicite. Ou utilisez simplement l'API BatchEnforce() ."),(0,o.kt)("h3",{id:"1-requ\xeate-de-r\xf4les-ou-de-permissions-implicites"},"1. Requ\xeate de r\xf4les ou de permissions implicites"),(0,o.kt)("p",null,"Lorsqu'un utilisateur h\xe9rite d'un r\xf4le ou d'une permission via la hi\xe9rarchie RBAC au lieu de les assigner directement dans une r\xe8gle de r\xe8gle, nous appelons un tel type d'affectation comme ",(0,o.kt)("inlineCode",{parentName:"p"},"implicite"),". Interroger de telles relations implicites, vous devez utiliser ces 2 API : ",(0,o.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser")," au lieu de ",(0,o.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser"),". Pour plus de d\xe9tails, veuillez consulter ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"ce probl\xe8me GitHub"),"."),(0,o.kt)("h3",{id:"2-utilisez-batchenforce"},"2. Utilisez ",(0,o.kt)("inlineCode",{parentName:"h3"},"BatchEnforce()")),(0,o.kt)("p",null,"BatchEnforce ex\xe9cute chaque requ\xeate et renvoie un tableau bool"),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"boolArray, err := e.BatchEnforce(requests)\n"))),(0,o.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const boolArray = await e.batchEnforce(requests);\n"))),(0,o.kt)(f,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<Boolean> boolArray = e.batchEnforce(requests);\n")))))}v.isMDXComponent=!0}}]);