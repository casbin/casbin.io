"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2632],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?t.createElement(b,o(o({ref:n},p),{},{components:a})):t.createElement(b,o({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8844:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const i={id:"online-editor",title:"Online Editor",description:"Menulis model dan polisi Casbin dalam pelayar web",keywords:["online editor","Casbin editor"],authors:["hsluoyz"]},o=void 0,l={unversionedId:"online-editor",id:"online-editor",title:"Online Editor",description:"Menulis model dan polisi Casbin dalam pelayar web",source:"@site/i18n/ms/docusaurus-plugin-content-docs/current/OnlineEditor.mdx",sourceDirName:".",slug:"/online-editor",permalink:"/ms/docs/online-editor",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/OnlineEditor.mdx",tags:[],version:"current",frontMatter:{id:"online-editor",title:"Online Editor",description:"Menulis model dan polisi Casbin dalam pelayar web",keywords:["online editor","Casbin editor"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Editor",permalink:"/ms/docs/category/editor"},next:{title:"IDE Plugins",permalink:"/ms/docs/ide-plugins"}},s={},d=[{value:"Pola Penggunaan",id:"pola-penggunaan",level:2}],p={toc:d};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Anda juga boleh menggunakan ",(0,r.kt)("a",{parentName:"p",href:"/editor"},"editor dalam talian"),' untuk menulis model dan polisi Casbin anda dalam pelayar web anda. Ia menyediakan fungsi seperti "penyorotan sintaks" dan "penyiapan kod", sama seperti IDE untuk bahasa pengaturcaraan.'),(0,r.kt)("h2",{id:"pola-penggunaan"},"Pola Penggunaan"),(0,r.kt)("p",null,'Jika anda menggunakan "RBAC dengan pola" atau "RBAC dengan semua pola", fungsi pencocokan pola ditentukan di sudut kiri bawah.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"petua-editor",src:a(9523).Z,width:"480",height:"272"}),"."),(0,r.kt)("p",null,"Jika anda ingin menulis kod yang setara, anda perlu menentukan fungsi pencocokan pola melalui API yang berkaitan. Rujuk ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC dengan Pola")," untuk maklumat lanjut."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Editor ini berdasarkan ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-casbin"),'. Disebabkan oleh kelewatan penyegerakan antara versi Casbin yang berbeza, hasil pengesahan untuk "editor" mungkin berbeza daripada hasil pengesahan versi Casbin yang anda gunakan. Jika anda menghadapi sebarang masalah, sila hantarkannya ke repositori Casbin yang anda gunakan.')))}u.isMDXComponent=!0},9523:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);