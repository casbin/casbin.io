"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[979],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(i),f=r,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||o;return i?n.createElement(m,a(a({ref:t},s),{},{components:i})):n.createElement(m,a({ref:t},s))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},7244:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const o={id:"online-editor",title:"Online Editor",description:"Scrittura del modello e della politica di Casbin in un browser web",keywords:["online editor","Casbin editor"],authors:["hsluoyz"]},a=void 0,l={unversionedId:"online-editor",id:"online-editor",title:"Online Editor",description:"Scrittura del modello e della politica di Casbin in un browser web",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/OnlineEditor.mdx",sourceDirName:".",slug:"/online-editor",permalink:"/it/docs/online-editor",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/OnlineEditor.mdx",tags:[],version:"current",frontMatter:{id:"online-editor",title:"Online Editor",description:"Scrittura del modello e della politica di Casbin in un browser web",keywords:["online editor","Casbin editor"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Editor",permalink:"/it/docs/category/editor"},next:{title:"IDE Plugins",permalink:"/it/docs/ide-plugins"}},d={},c=[{value:"Modello di Utilizzo",id:"modello-di-utilizzo",level:2}],s={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Puoi anche utilizzare l'",(0,r.kt)("a",{parentName:"p",href:"/editor"},"editor online"),' per scrivere il tuo modello e la tua politica di Casbin nel tuo browser web. Fornisce funzionalit\xe0 come "evidenziazione della sintassi" e "completamento del codice", proprio come un IDE per un linguaggio di programmazione.'),(0,r.kt)("h2",{id:"modello-di-utilizzo"},"Modello di Utilizzo"),(0,r.kt)("p",null,'Se stai utilizzando "RBAC con pattern" o "RBAC con tutti i pattern", la funzione di corrispondenza dei pattern \xe8 specificata nell\'angolo in basso a sinistra.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"suggerimenti-editor",src:i(9523).Z,width:"480",height:"272"}),"."),(0,r.kt)("p",null,"Se desideri scrivere il codice equivalente, devi specificare la funzione di corrispondenza dei pattern attraverso l'API pertinente. Fai riferimento a ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC con Pattern")," per ulteriori informazioni."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"L'editor \xe8 basato su ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-casbin"),". A causa del ritardo di sincronizzazione tra diverse versioni di Casbin, il risultato dell'autenticazione dell'\"editor\" potrebbe differire dal risultato dell'autenticazione della versione di Casbin che stai utilizzando. Se riscontri problemi, inviali al repository di Casbin che stai utilizzando.")))}p.isMDXComponent=!0},9523:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);