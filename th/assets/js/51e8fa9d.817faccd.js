"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={id:"rbac",title:"RBAC",description:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 RBAC \u0e02\u0e2d\u0e07 Casbin",keywords:["RBAC","role definition","role hierarchy"],authors:["hsluoyz"]},l=void 0,o={unversionedId:"rbac",id:"rbac",title:"RBAC",description:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 RBAC \u0e02\u0e2d\u0e07 Casbin",source:"@site/i18n/th/docusaurus-plugin-content-docs/current/RBAC.mdx",sourceDirName:".",slug:"/rbac",permalink:"/th/docs/rbac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBAC.mdx",tags:[],version:"current",frontMatter:{id:"rbac",title:"RBAC",description:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 RBAC \u0e02\u0e2d\u0e07 Casbin",keywords:["RBAC","role definition","role hierarchy"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Functions",permalink:"/th/docs/function"},next:{title:"RBAC with Pattern",permalink:"/th/docs/rbac-with-pattern"}},p={},c=[{value:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17",id:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17",level:2},{value:"\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17",id:"\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17",level:2},{value:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49?",id:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49",level:2},{value:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e22?",id:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e22",level:2},{value:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e01\u0e32\u0e23\u0e08\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19 RBAC",id:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e01\u0e32\u0e23\u0e08\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19-rbac",level:2},{value:"\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1a\u0e17\u0e1a\u0e32\u0e17",id:"\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1a\u0e17\u0e1a\u0e32\u0e17",level:2}],s={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17"},"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17"),(0,r.kt)("p",null,"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 ",(0,r.kt)("inlineCode",{parentName:"p"},"[role_definition]")," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e43\u0e19 RBAC Casbin \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e21\u0e35\u0e2b\u0e25\u0e32\u0e22\u0e2d\u0e34\u0e19\u0e2a\u0e41\u0e15\u0e19\u0e0b\u0e4c\u0e02\u0e2d\u0e07\u0e23\u0e30\u0e1a\u0e1a RBAC \u0e17\u0e35\u0e48\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e35\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e41\u0e25\u0e30\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14 \u0e41\u0e25\u0e30\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e32\u0e01\u0e23\u0e01\u0e47\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e35\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e41\u0e25\u0e30\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14\u0e44\u0e14\u0e49\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e31\u0e19 \u0e23\u0e30\u0e1a\u0e1a RBAC \u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e08\u0e30\u0e44\u0e21\u0e48\u0e23\u0e1a\u0e01\u0e27\u0e19\u0e01\u0e31\u0e19"),(0,r.kt)("p",null,"\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19 \u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e49\u0e1a\u0e17\u0e1a\u0e32\u0e17 RBAC \u0e43\u0e19\u0e42\u0e21\u0e40\u0e14\u0e25 \u0e01\u0e47\u0e02\u0e49\u0e32\u0e21\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e44\u0e1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _\ng2 = _, _\n")),(0,r.kt)("p",null,"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e02\u0e49\u0e32\u0e07\u0e15\u0e49\u0e19\u0e41\u0e2a\u0e14\u0e07\u0e27\u0e48\u0e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \u0e40\u0e1b\u0e47\u0e19\u0e23\u0e30\u0e1a\u0e1a RBAC \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," \u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e35\u0e01\u0e23\u0e30\u0e1a\u0e1a RBAC ",(0,r.kt)("inlineCode",{parentName:"p"},"_,_")," \u0e2b\u0e21\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e27\u0e48\u0e32\u0e21\u0e35\u0e2a\u0e2d\u0e07\u0e1d\u0e48\u0e32\u0e22\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e43\u0e19\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14 \u0e43\u0e19\u0e01\u0e23\u0e13\u0e35\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14 \u0e04\u0e38\u0e13\u0e21\u0e31\u0e01\u0e08\u0e30\u0e43\u0e0a\u0e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e17\u0e31\u0e49\u0e07 ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1a\u0e17\u0e1a\u0e32\u0e17 (\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e25\u0e38\u0e48\u0e21) \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e31\u0e49\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e41\u0e25\u0e30\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e32\u0e01\u0e23 \u0e42\u0e1b\u0e23\u0e14\u0e14\u0e39\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"rbac","_","model.conf")," \u0e41\u0e25\u0e30 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf"},"rbac","_","model","_","with","_","resource","_","roles.conf")),(0,r.kt)("p",null,"Casbin \u0e40\u0e01\u0e47\u0e1a\u0e01\u0e32\u0e23\u0e41\u0e21\u0e1b\u0e1b\u0e34\u0e49\u0e07\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e08\u0e23\u0e34\u0e07 (\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e41\u0e21\u0e1b\u0e1b\u0e34\u0e49\u0e07\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e32\u0e01\u0e23\u0e01\u0e31\u0e1a\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e43\u0e0a\u0e49\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e01\u0e31\u0e1a\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e32\u0e01\u0e23) \u0e43\u0e19\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e0a\u0e48\u0e19:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, data2_admin, data2, read\ng, alice, data2_admin\n")),(0,r.kt)("p",null,"\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e27\u0e48\u0e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14/\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e02\u0e2d\u0e07\u0e1a\u0e17\u0e1a\u0e32\u0e17 ",(0,r.kt)("inlineCode",{parentName:"p"},"data2_admin")," \u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 \u0e17\u0e23\u0e31\u0e1e\u0e22\u0e32\u0e01\u0e23 \u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e17\u0e1a\u0e32\u0e17 Casbin \u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e21\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2a\u0e15\u0e23\u0e34\u0e07"),(0,r.kt)("p",null,"\u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19 \u0e43\u0e19\u0e15\u0e31\u0e27\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19 \u0e04\u0e38\u0e13\u0e04\u0e27\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e41\u0e2a\u0e14\u0e07\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e27\u0e48\u0e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," \u0e43\u0e19\u0e04\u0e33\u0e02\u0e2d\u0e04\u0e27\u0e23\u0e21\u0e35\u0e1a\u0e17\u0e1a\u0e32\u0e17 ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," \u0e43\u0e19\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Casbin \u0e40\u0e01\u0e47\u0e1a\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e01\u0e32\u0e23\u0e41\u0e21\u0e1b\u0e1b\u0e34\u0e49\u0e07\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a\u0e1a\u0e17\u0e1a\u0e32\u0e17"),(0,r.kt)("li",{parentName:"ol"},"Casbin \u0e44\u0e21\u0e48\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e27\u0e48\u0e32\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e40\u0e1b\u0e47\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48 \u0e2a\u0e34\u0e48\u0e07\u0e19\u0e31\u0e49\u0e19\u0e04\u0e27\u0e23\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e14\u0e39\u0e41\u0e25\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c"),(0,r.kt)("li",{parentName:"ol"},"\u0e2d\u0e22\u0e48\u0e32\u0e43\u0e0a\u0e49\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e41\u0e25\u0e30\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e20\u0e32\u0e22\u0e43\u0e19\u0e23\u0e30\u0e1a\u0e1a RBAC \u0e40\u0e1e\u0e23\u0e32\u0e30 Casbin \u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e41\u0e25\u0e30\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e15\u0e23\u0e34\u0e07 \u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e21\u0e35\u0e17\u0e32\u0e07\u0e17\u0e35\u0e48 Casbin \u0e08\u0e30\u0e23\u0e39\u0e49\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e30\u0e1a\u0e38\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"alice")," \u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e17\u0e1a\u0e32\u0e17 ",(0,r.kt)("inlineCode",{parentName:"li"},"alice")," \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e01\u0e49\u0e44\u0e02\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22\u0e46 \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"role_alice")),(0,r.kt)("li",{parentName:"ol"},"\u0e2b\u0e32\u0e01 ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," \u0e21\u0e35\u0e1a\u0e17\u0e1a\u0e32\u0e17 ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," \u0e21\u0e35\u0e1a\u0e17\u0e1a\u0e32\u0e17 ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," \u0e41\u0e25\u0e49\u0e27 ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," \u0e01\u0e47\u0e08\u0e30\u0e21\u0e35\u0e1a\u0e17\u0e1a\u0e32\u0e17 ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e34\u0e49\u0e19\u0e2a\u0e38\u0e14\u0e43\u0e19\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49"))),(0,r.kt)("admonition",{title:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e17\u0e40\u0e04\u0e47\u0e19",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u0e15\u0e32\u0e21\u0e1b\u0e01\u0e15\u0e34 \u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e17\u0e40\u0e04\u0e47\u0e19\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e04\u0e37\u0e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," \u0e41\u0e25\u0e30\u0e27\u0e32\u0e07\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48\u0e15\u0e49\u0e19 \u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49 Golang Casbin \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e17\u0e40\u0e04\u0e47\u0e19\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e40\u0e2d\u0e07\u0e41\u0e25\u0e30\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e40\u0e2d\u0e07 \u0e2b\u0e32\u0e01\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e17\u0e40\u0e04\u0e47\u0e19\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e04\u0e37\u0e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," \u0e42\u0e17\u0e40\u0e04\u0e47\u0e19\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e27\u0e32\u0e07\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e43\u0e14\u0e01\u0e47\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21 \u0e2b\u0e32\u0e01\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e17\u0e40\u0e04\u0e47\u0e19\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," \u0e04\u0e27\u0e23\u0e40\u0e23\u0e35\u0e22\u0e01 ",(0,r.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a ",(0,r.kt)("inlineCode",{parentName:"p"},"constant.SubjectIndex")," \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e15\u0e31\u0e27\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e43\u0e0a\u0e49\u0e16\u0e39\u0e01\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19 \u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e08\u0e30\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e43\u0e14\u0e01\u0e47\u0e15\u0e32\u0e21"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# `subject` here is for sub\n[policy_definition]\np =  obj, act, subject\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.SetFieldIndex("p", constant.SubjectIndex, 2) // index starts from 0\nok, err := e.DeleteUser("alice") // without SetFieldIndex, it will raise an error\n'))),(0,r.kt)("h2",{id:"\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17"},"\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17"),(0,r.kt)("p",null,"RBAC \u0e02\u0e2d\u0e07 Casbin \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e02\u0e2d\u0e07 RBAC1 \u0e0b\u0e36\u0e48\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e27\u0e48\u0e32\u0e2b\u0e32\u0e01 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u0e21\u0e35 ",(0,r.kt)("inlineCode",{parentName:"p"},"role1")," \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"role1")," \u0e21\u0e35 ",(0,r.kt)("inlineCode",{parentName:"p"},"role2")," \u0e41\u0e25\u0e49\u0e27 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u0e08\u0e30\u0e21\u0e35 ",(0,r.kt)("inlineCode",{parentName:"p"},"role2")," \u0e41\u0e25\u0e30\u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e02\u0e2d\u0e07\u0e21\u0e31\u0e19"),(0,r.kt)("p",null,"\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 \u0e40\u0e23\u0e32\u0e21\u0e35\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14\u0e17\u0e35\u0e48\u0e40\u0e23\u0e35\u0e22\u0e01\u0e27\u0e48\u0e32\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19 \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19 \u0e43\u0e19\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e35\u0e49 \u0e23\u0e30\u0e14\u0e31\u0e1a\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e04\u0e37\u0e2d 2 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e15\u0e31\u0e27\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 Casbin \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e23\u0e30\u0e1a\u0e38\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e44\u0e14\u0e49 \u0e04\u0e48\u0e32\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e04\u0e37\u0e2d 10 \u0e19\u0e35\u0e48\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e27\u0e48\u0e32\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07\u0e40\u0e0a\u0e48\u0e19 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e44\u0e14\u0e49\u0e40\u0e1e\u0e35\u0e22\u0e07 10 \u0e23\u0e30\u0e14\u0e31\u0e1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// NewRoleManager is the constructor for creating an instance of the\n// default RoleManager implementation.\nfunc NewRoleManager(maxHierarchyLevel int) rbac.RoleManager {\n    rm := RoleManager{}\n    rm.allRoles = &sync.Map{}\n    rm.maxHierarchyLevel = maxHierarchyLevel\n    rm.hasPattern = false\n\n    return &rm\n}\n")),(0,r.kt)("h2",{id:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49"},"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49?"),(0,r.kt)("p",null,"Casbin \u0e44\u0e21\u0e48\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e41\u0e25\u0e30\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19 RBAC \u0e02\u0e2d\u0e07\u0e21\u0e31\u0e19 \u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e16\u0e39\u0e01\u0e21\u0e2d\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e15\u0e23\u0e34\u0e07 \u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e43\u0e0a\u0e49 RBAC \u0e41\u0e1a\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27 (\u0e17\u0e35\u0e48\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e08\u0e30\u0e44\u0e21\u0e48\u0e40\u0e04\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e02\u0e2d\u0e07\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2d\u0e37\u0e48\u0e19) \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllSubjects()")," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllRoles()")," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 \u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32\u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," \u0e41\u0e25\u0e30\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," \u0e15\u0e32\u0e21\u0e25\u0e33\u0e14\u0e31\u0e1a \u0e43\u0e19\u0e01\u0e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"g, u, r")," \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),(0,r.kt)("p",null,"\u0e41\u0e15\u0e48\u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e43\u0e0a\u0e49 RBAC \u0e2b\u0e25\u0e32\u0e22\u0e23\u0e30\u0e14\u0e31\u0e1a (\u0e17\u0e35\u0e48\u0e21\u0e35\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17) \u0e41\u0e25\u0e30\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e27\u0e48\u0e32\u0e0a\u0e37\u0e48\u0e2d (\u0e2a\u0e15\u0e23\u0e34\u0e07) \u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e17\u0e1a\u0e32\u0e17 \u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e38\u0e13\u0e21\u0e35\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e41\u0e25\u0e30\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e17\u0e35\u0e48\u0e21\u0e35\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e40\u0e0a\u0e48\u0e19 ",(0,r.kt)("inlineCode",{parentName:"p"},"role::admin")," \u0e01\u0e48\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e44\u0e1b\u0e22\u0e31\u0e07 Casbin \u0e27\u0e34\u0e18\u0e35\u0e19\u0e35\u0e49 \u0e04\u0e38\u0e13\u0e08\u0e30\u0e23\u0e39\u0e49\u0e27\u0e48\u0e32\u0e21\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49"),(0,r.kt)("h2",{id:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e22"},"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e22?"),(0,r.kt)("p",null,"\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2a\u0e37\u0e1a\u0e17\u0e2d\u0e14\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e1c\u0e48\u0e32\u0e19\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e0a\u0e31\u0e49\u0e19 RBAC \u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e21\u0e2d\u0e1a\u0e2b\u0e21\u0e32\u0e22\u0e42\u0e14\u0e22\u0e15\u0e23\u0e07\u0e43\u0e19\u0e01\u0e0e\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22 \u0e40\u0e23\u0e32\u0e40\u0e23\u0e35\u0e22\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e21\u0e2d\u0e1a\u0e2b\u0e21\u0e32\u0e22\u0e19\u0e35\u0e49\u0e27\u0e48\u0e32 'implicit' \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e22\u0e40\u0e0a\u0e48\u0e19\u0e19\u0e35\u0e49 \u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49 API \u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e19\u0e35\u0e49: ",(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser()")," \u0e41\u0e17\u0e19 ",(0,r.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser()")," \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21 \u0e42\u0e1b\u0e23\u0e14\u0e14\u0e39 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"this GitHub issue")),(0,r.kt)("h2",{id:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e01\u0e32\u0e23\u0e08\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19-rbac"},"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e01\u0e32\u0e23\u0e08\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19 RBAC"),(0,r.kt)("p",null,"\u0e14\u0e39 ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC with Pattern")),(0,r.kt)("h2",{id:"\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1a\u0e17\u0e1a\u0e32\u0e17"},"\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1a\u0e17\u0e1a\u0e32\u0e17"),(0,r.kt)("p",null,"\u0e14\u0e39\u0e2a\u0e48\u0e27\u0e19 ",(0,r.kt)("a",{parentName:"p",href:"/docs/role-managers"},"Role Managers")," \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"))}m.isMDXComponent=!0}}]);