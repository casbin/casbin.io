"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9100],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={id:"data-permissions",title:"Datenberechtigungen",description:"Solutions for data permissions",keywords:["Data Permissions","implicit"],authors:["ErikQQY"]},o=void 0,s={unversionedId:"data-permissions",id:"data-permissions",title:"Datenberechtigungen",description:"Solutions for data permissions",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/DataPermissions.mdx",sourceDirName:".",slug:"/data-permissions",permalink:"/de/docs/data-permissions",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"data-permissions",title:"Datenberechtigungen",description:"Solutions for data permissions",keywords:["Data Permissions","implicit"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"Rollen-Manager-API",permalink:"/de/docs/rolemanager-api"},next:{title:"Advanced usage",permalink:"/de/docs/category/advanced-usage"}},l={},c=[{value:"1. implizite Rollen oder Berechtigungen abfragen",id:"1-implizite-rollen-oder-berechtigungen-abfragen",level:3},{value:"2. <code>BatchEnforce() verwenden</code>",id:"2-batchenforce-verwenden",level:3}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},u=p("Tabs"),d=p("TabItem"),m={toc:c};function b(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wir haben zwei L\xf6sungen f\xfcr Datenberechtigungen (Filtern). Verwendung impliziter Zuweisungs-APIs. Oder benutzen Sie einfach die BatchEnforce() API."),(0,i.kt)("h3",{id:"1-implizite-rollen-oder-berechtigungen-abfragen"},"1. implizite Rollen oder Berechtigungen abfragen"),(0,i.kt)("p",null,"Wenn ein Benutzer eine Rolle oder Berechtigung \xfcber RBAC Hierarchie erbt anstatt sie direkt in einer Richtlinien-Regel zuzuweisen, wir nennen solche Art der Zuweisung als ",(0,i.kt)("inlineCode",{parentName:"p"},"implizit"),". Solche impliziten Beziehungen abfragen Sie m\xfcssen diese 2 APIs verwenden: ",(0,i.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser")," statt ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser"),". F\xfcr weitere Details siehe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"dieses GitHub Ticket"),"."),(0,i.kt)("h3",{id:"2-batchenforce-verwenden"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"BatchEnforce() verwenden")),(0,i.kt)("p",null,"BatchErzwinge jede Anfrage und gibt Ergebnis in einem Bool-Array zur\xfcck"),(0,i.kt)("p",null,"Zum Beispiel:"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"boolArray, err := e.BatchEnforce(requests)\n"))),(0,i.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const boolArray = await e.batchEnforce(requests);\n"))),(0,i.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Boolean> boolArray = e.batchEnforce(requests);\n")))))}b.isMDXComponent=!0}}]);