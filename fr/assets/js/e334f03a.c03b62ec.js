"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[856],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6953:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],c={id:"service",title:"Service Casbin"},l=void 0,s={unversionedId:"service",id:"service",title:"Service Casbin",description:"Comment utiliser Casbin comme service?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Service.mdx",sourceDirName:".",slug:"/service",permalink:"/fr/docs/service",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Service.mdx",tags:[],version:"current",frontMatter:{id:"service",title:"Service Casbin"},sidebar:"docs",previous:{title:"Portail Admin",permalink:"/fr/docs/admin-portal"},next:{title:"Log & gestion des erreurs",permalink:"/fr/docs/log-error"}},u={},p=[{value:"Comment utiliser Casbin comme service?",id:"comment-utiliser-casbin-comme-service",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"comment-utiliser-casbin-comme-service"},"Comment utiliser Casbin comme service?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nom"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-server"},"Serveur Casbin")),(0,i.kt)("td",{parentName:"tr",align:null},"La solution officielle ",(0,i.kt)("inlineCode",{parentName:"td"},"Casbin as a Service")," bas\xe9e sur ",(0,i.kt)("a",{parentName:"td",href:"https://grpc.io/"},"gRPC"),", \xe0 la fois l'API de gestion et l'API RBAC sont fournies.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/paysuper/casbin-server"},"Serveur PaySuper Casbin")),(0,i.kt)("td",{parentName:"tr",align:null},"PaySuper's fork of the above official ",(0,i.kt)("inlineCode",{parentName:"td"},"Casbin-Server")," but more actively maintained. Il fournit une interface ",(0,i.kt)("a",{parentName:"td",href:"https://micro.mu/"},"go-micro")," pour l'autorisation de Casbin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/luk4z7/middleware-acl"},"acl middleware")),(0,i.kt)("td",{parentName:"tr",align:null},"RESTful access control middleware based on Casbin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/merajsahebdar/buttress-server"},"Bouton")),(0,i.kt)("td",{parentName:"tr",align:null},"La solution de contr\xf4le d'acc\xe8s en tant que service bas\xe9 sur Casbin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ZettaAI/auth-server"},"serveur-authentification")),(0,i.kt)("td",{parentName:"tr",align:null},"Serveur d'authentification pour les services de relecture.")))))}d.isMDXComponent=!0}}]);