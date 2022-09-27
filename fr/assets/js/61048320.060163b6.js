"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={id:"superadmin",title:"Super Admin",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc",keywords:["Super Admin"]},s=void 0,a={unversionedId:"superadmin",id:"superadmin",title:"Super Admin",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/fr/docs/superadmin",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"superadmin",title:"Super Admin",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc",keywords:["Super Admin"]},sidebar:"docs",previous:{title:"Mod\xe8le de priorit\xe9",permalink:"/fr/docs/priority-model"},next:{title:"Storage",permalink:"/fr/docs/category/storage"}},l={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Super Admin est l'administrateur de tout le syst\xe8me, nous pouvons l'utiliser dans des mod\xe8les comme RBAC, ABAC et RBAC avec des domaines etc. L'exemple d\xe9taill\xe9 est le suivant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,i.kt)("p",null,"Il illustre cela comme pour la ",(0,i.kt)("inlineCode",{parentName:"p"},"request_definition d\xe9finie"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_effect")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"matchers"),", Les juges de Casbin si la demande peut correspondre \xe0 la politique, ou le plus important, si le ",(0,i.kt)("inlineCode",{parentName:"p"},"sous-b")," est racine. Une fois que le jugement est correct, l'autorisation est alors autoris\xe9e, et l'utilisateur a la permission de tout faire.",(0,i.kt)("br",{parentName:"p"}),"\n","Tout comme la racine des syst\xe8mes Linux, apr\xe8s que les utilisateurs soient autoris\xe9s en tant que root, alors nous avons les permissions pour acc\xe9der \xe0 tous les fichiers et param\xe8tres. Donc, si nous voulons que ",(0,i.kt)("inlineCode",{parentName:"p"},"sous")," ait un acc\xe8s complet \xe0 l'ensemble du syst\xe8me, nous pouvons le laisser devenir le super admin, alors le ",(0,i.kt)("inlineCode",{parentName:"p"},"sous-b")," a la permission de tout faire."))}c.isMDXComponent=!0}}]);