"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7933],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(b,l(l({ref:r},c),{},{components:t})):n.createElement(b,l({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1783:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const a={id:"superadmin",title:"Super Admin",description:"S\xfcper Admin, t\xfcm sistemin y\xf6neticisidir. RBAC, ABAC ve alanlarla RBAC gibi modellerde kullan\u0131labilir.",keywords:["Super Admin"],authors:["ErikQQY"]},l=void 0,o={unversionedId:"superadmin",id:"superadmin",title:"Super Admin",description:"S\xfcper Admin, t\xfcm sistemin y\xf6neticisidir. RBAC, ABAC ve alanlarla RBAC gibi modellerde kullan\u0131labilir.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/tr/docs/superadmin",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SuperAdmin.mdx",tags:[],version:"current",frontMatter:{id:"superadmin",title:"Super Admin",description:"S\xfcper Admin, t\xfcm sistemin y\xf6neticisidir. RBAC, ABAC ve alanlarla RBAC gibi modellerde kullan\u0131labilir.",keywords:["Super Admin"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"Priority Model",permalink:"/tr/docs/priority-model"},next:{title:"Storage",permalink:"/tr/docs/category/storage"}},s={},p=[],c={toc:p};function m(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"S\xfcper Admin, t\xfcm sistemin y\xf6neticisidir. RBAC, ABAC ve alanlarla RBAC gibi modellerde kullan\u0131labilir. Detayl\u0131 \xf6rnek \u015fu \u015fekildedir:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,i.kt)("p",null,"Bu \xf6rnek, tan\u0131mlanan ",(0,i.kt)("inlineCode",{parentName:"p"},"request_definition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_effect")," ve ",(0,i.kt)("inlineCode",{parentName:"p"},"matchers")," ile Casbin'in talebin politikayla e\u015fle\u015fip e\u015fle\u015fmedi\u011fine karar verdi\u011fini g\xf6stermektedir. \xd6nemli bir nokta, ",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),"'\u0131n root olup olmad\u0131\u011f\u0131n\u0131 kontrol etmektir. E\u011fer yarg\u0131 do\u011fruysa, yetkilendirme verilir ve kullan\u0131c\u0131 t\xfcm eylemleri ger\xe7ekle\u015ftirme iznine sahiptir."),(0,i.kt)("p",null,"Linux sistemlerindeki root kullan\u0131c\u0131s\u0131na benzer \u015fekilde, root olarak yetkilendirmek t\xfcm dosyalara ve ayarlara eri\u015fim sa\u011flar. E\u011fer bir ",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),"'\u0131n t\xfcm sistemde tam eri\u015fime sahip olmas\u0131n\u0131 istiyorsak, ona Super Admin rol\xfcn\xfc atayabiliriz, bu da ",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),"'a t\xfcm eylemleri ger\xe7ekle\u015ftirme izni verir."))}m.isMDXComponent=!0}}]);