"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4287],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>m});var c=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,c)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function h(t,n){if(null==t)return{};var e,c,r=function(t,n){if(null==t)return{};var e,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)e=a[c],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)e=a[c],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=c.createContext({}),l=function(t){var n=c.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},u=function(t){var n=l(t.components);return c.createElement(i.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return c.createElement(c.Fragment,{},n)}},s=c.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,u=h(t,["components","mdxType","originalType","parentName"]),s=l(e),m=r,k=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return e?c.createElement(k,o(o({ref:n},u),{},{components:e})):c.createElement(k,o({ref:n},u))}));function m(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,o=new Array(a);o[0]=s;var h={};for(var i in n)hasOwnProperty.call(n,i)&&(h[i]=n[i]);h.originalType=t,h.mdxType="string"==typeof t?t:r,o[1]=h;for(var l=2;l<a;l++)o[l]=e[l];return c.createElement.apply(null,o)}return c.createElement.apply(null,e)}s.displayName="MDXCreateElement"},9064:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>l});var c=e(7462),r=(e(7294),e(3905));const a={id:"how-it-works",title:"How It Works",description:"C\xe1ch Casbin Ho\u1ea1t \u0110\u1ed9ng",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},o=void 0,h={unversionedId:"how-it-works",id:"how-it-works",title:"How It Works",description:"C\xe1ch Casbin Ho\u1ea1t \u0110\u1ed9ng",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/HowItWorks.mdx",sourceDirName:".",slug:"/how-it-works",permalink:"/vi/docs/how-it-works",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/HowItWorks.mdx",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"How It Works",description:"C\xe1ch Casbin Ho\u1ea1t \u0110\u1ed9ng",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},sidebar:"docs",previous:{title:"Get Started",permalink:"/vi/docs/get-started"},next:{title:"Tutorials",permalink:"/vi/docs/tutorials"}},i={},l=[{value:"Request",id:"request",level:3},{value:"Policy",id:"policy",level:3},{value:"Matcher",id:"matcher",level:3},{value:"Effect",id:"effect",level:3}],u={toc:l};function p(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,c.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Trong Casbin, m\u1ed9t m\xf4 h\xecnh ki\u1ec3m so\xe1t truy c\u1eadp \u0111\u01b0\u1ee3c tr\u1eebu t\u01b0\u1ee3ng h\xf3a th\xe0nh m\u1ed9t t\u1ec7p CONF d\u1ef1a tr\xean ",(0,r.kt)("strong",{parentName:"p"},"m\xf4 h\xecnh PERM (Policy, Effect, Request, Matchers)"),". Chuy\u1ec3n \u0111\u1ed5i ho\u1eb7c n\xe2ng c\u1ea5p c\u01a1 ch\u1ebf \u1ee7y quy\u1ec1n cho m\u1ed9t d\u1ef1 \xe1n \u0111\u01a1n gi\u1ea3n nh\u01b0 s\u1eeda \u0111\u1ed5i m\u1ed9t c\u1ea5u h\xecnh. B\u1ea1n c\xf3 th\u1ec3 t\xf9y ch\u1ec9nh m\xf4 h\xecnh ki\u1ec3m so\xe1t truy c\u1eadp c\u1ee7a ri\xeang m\xecnh b\u1eb1ng c\xe1ch k\u1ebft h\u1ee3p c\xe1c m\xf4 h\xecnh c\xf3 s\u1eb5n. V\xed d\u1ee5, b\u1ea1n c\xf3 th\u1ec3 k\u1ebft h\u1ee3p vai tr\xf2 RBAC v\xe0 thu\u1ed9c t\xednh ABAC l\u1ea1i v\u1edbi nhau trong m\u1ed9t m\xf4 h\xecnh v\xe0 chia s\u1ebb m\u1ed9t t\u1eadp h\u1ee3p c\xe1c quy t\u1eafc ch\xednh s\xe1ch."),(0,r.kt)("p",null,"M\xf4 h\xecnh PERM bao g\u1ed3m b\u1ed1n n\u1ec1n t\u1ea3ng: Policy, Effect, Request, v\xe0 Matchers. Nh\u1eefng n\u1ec1n t\u1ea3ng n\xe0y m\xf4 t\u1ea3 m\u1ed1i quan h\u1ec7 gi\u1eefa t\xe0i nguy\xean v\xe0 ng\u01b0\u1eddi d\xf9ng."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"\u0110\u1ecbnh ngh\u0129a c\xe1c tham s\u1ed1 y\xeau c\u1ea7u. M\u1ed9t y\xeau c\u1ea7u c\u01a1 b\u1ea3n l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng tuple, y\xeau c\u1ea7u \xedt nh\u1ea5t m\u1ed9t ch\u1ee7 \u0111\u1ec1 (th\u1ef1c th\u1ec3 \u0111\u01b0\u1ee3c truy c\u1eadp), \u0111\u1ed1i t\u01b0\u1ee3ng (t\xe0i nguy\xean \u0111\u01b0\u1ee3c truy c\u1eadp) v\xe0 h\xe0nh \u0111\u1ed9ng (ph\u01b0\u01a1ng th\u1ee9c truy c\u1eadp)."),(0,r.kt)("p",null,"V\xed d\u1ee5, m\u1ed9t \u0111\u1ecbnh ngh\u0129a y\xeau c\u1ea7u c\xf3 th\u1ec3 tr\xf4ng nh\u01b0 th\u1ebf n\xe0y:"),(0,r.kt)("p",null,"\u0110\u1ecbnh ngh\u0129a n\xe0y ch\u1ec9 \u0111\u1ecbnh t\xean v\xe0 th\u1ee9 t\u1ef1 c\u1ee7a c\xe1c tham s\u1ed1 y\xeau c\u1ea7u b\u1edfi h\xe0m so kh\u1edbp ki\u1ec3m so\xe1t truy c\u1eadp."),(0,r.kt)("h3",{id:"policy"},"Policy"),(0,r.kt)("p",null,"\u0110\u1ecbnh ngh\u0129a m\xf4 h\xecnh cho chi\u1ebfn l\u01b0\u1ee3c truy c\u1eadp. N\xf3 ch\u1ec9 \u0111\u1ecbnh t\xean v\xe0 th\u1ee9 t\u1ef1 c\u1ee7a c\xe1c tr\u01b0\u1eddng trong t\xe0i li\u1ec7u quy t\u1eafc Ch\xednh s\xe1ch."),(0,r.kt)("p",null,"V\xed d\u1ee5:"),(0,r.kt)("p",null,"L\u01b0u \xfd: N\u1ebfu eft (k\u1ebft qu\u1ea3 ch\xednh s\xe1ch) kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a, tr\u01b0\u1eddng k\u1ebft qu\u1ea3 trong t\u1ec7p ch\xednh s\xe1ch s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ecdc v\xe0 k\u1ebft qu\u1ea3 so kh\u1edbp ch\xednh s\xe1ch s\u1ebd \u0111\u01b0\u1ee3c cho ph\xe9p theo m\u1eb7c \u0111\u1ecbnh."),(0,r.kt)("h3",{id:"matcher"},"Matcher"),(0,r.kt)("p",null,"X\xe1c \u0111\u1ecbnh c\xe1c quy t\u1eafc kh\u1edbp cho Y\xeau c\u1ea7u v\xe0 Ch\xednh s\xe1ch."),(0,r.kt)("p",null,"V\xed d\u1ee5: ",(0,r.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p.obj")," K\u1ebft qu\u1ea3 c\u1ee7a chi\u1ebfn l\u01b0\u1ee3c s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u trong ",(0,r.kt)("inlineCode",{parentName:"p"},"p.eft"),"."),(0,r.kt)("h3",{id:"effect"},"Effect"),(0,r.kt)("p",null,"Th\u1ef1c hi\u1ec7n ph\xe9p k\u1ebft h\u1ee3p logic \u0111\u1ec3 \u0111\xe1nh gi\xe1 k\u1ebft qu\u1ea3 kh\u1edbp c\u1ee7a Matchers."),(0,r.kt)("p",null,"V\xed d\u1ee5: ",(0,r.kt)("inlineCode",{parentName:"p"},"e = some(where(p.eft == allow))")),(0,r.kt)("p",null,"C\xe2u l\u1ec7nh n\xe0y c\xf3 ngh\u0129a l\xe0 n\u1ebfu k\u1ebft qu\u1ea3 c\u1ee7a chi\u1ebfn l\u01b0\u1ee3c kh\u1edbp ",(0,r.kt)("inlineCode",{parentName:"p"},"p.eft")," c\xf3 k\u1ebft qu\u1ea3 l\xe0 (m\u1ed9t s\u1ed1) cho ph\xe9p, th\xec k\u1ebft qu\u1ea3 cu\u1ed1i c\xf9ng l\xe0 \u0111\xfang."),(0,r.kt)("p",null,"H\xe3y xem x\xe9t m\u1ed9t v\xed d\u1ee5 kh\xe1c:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"e = some(where (p.eft == allow)) && !some(where (p.eft == deny))")),(0,r.kt)("p",null,"\xdd ngh\u0129a logic c\u1ee7a s\u1ef1 k\u1ebft h\u1ee3p v\xed d\u1ee5 n\xe0y l\xe0: n\u1ebfu c\xf3 m\u1ed9t chi\u1ebfn l\u01b0\u1ee3c kh\u1edbp v\u1edbi k\u1ebft qu\u1ea3 c\u1ee7a allow v\xe0 kh\xf4ng c\xf3 chi\u1ebfn l\u01b0\u1ee3c n\xe0o kh\u1edbp v\u1edbi k\u1ebft qu\u1ea3 c\u1ee7a deny, k\u1ebft qu\u1ea3 l\xe0 true. N\xf3i c\xe1ch kh\xe1c, n\xf3 l\xe0 true khi t\u1ea5t c\u1ea3 c\xe1c chi\u1ebfn l\u01b0\u1ee3c kh\u1edbp \u0111\u1ec1u l\xe0 allow. N\u1ebfu c\xf3 b\u1ea5t k\u1ef3 deny n\xe0o, c\u1ea3 hai \u0111\u1ec1u false (\u0111\u01a1n gi\u1ea3n h\u01a1n, khi allow v\xe0 deny t\u1ed3n t\u1ea1i c\xf9ng l\xfac, deny s\u1ebd \u01b0u ti\xean)."),(0,r.kt)("p",null,"M\xf4 h\xecnh c\u01a1 b\u1ea3n v\xe0 \u0111\u01a1n gi\u1ea3n nh\u1ea5t trong Casbin l\xe0 ACL. M\xf4 h\xecnh CONF cho ACL nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Request definition\n[request_definition]\nr = sub, obj, act\n\n# Policy definition\n[policy_definition]\np = sub, obj, act\n\n# Policy effect\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,r.kt)("p",null,"M\u1ed9t v\xed d\u1ee5 v\u1ec1 ch\xednh s\xe1ch cho m\xf4 h\xecnh ACL l\xe0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\n")),(0,r.kt)("p",null,"\u0110i\u1ec1u n\xe0y c\xf3 ngh\u0129a l\xe0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alice c\xf3 th\u1ec3 \u0111\u1ecdc data1"),(0,r.kt)("li",{parentName:"ul"},"bob c\xf3 th\u1ec3 ghi data2")),(0,r.kt)("p",null,"Ch\xfang t\xf4i c\u0169ng h\u1ed7 tr\u1ee3 ch\u1ebf \u0111\u1ed9 nhi\u1ec1u d\xf2ng b\u1eb1ng c\xe1ch th\xeam '' \u1edf cu\u1ed1i:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\\n  && r.act == p.act\n")),(0,r.kt)("p",null,"H\u01a1n n\u1eefa, n\u1ebfu b\u1ea1n \u0111ang s\u1eed d\u1ee5ng ABAC, b\u1ea1n c\xf3 th\u1ec3 th\u1eed to\xe1n t\u1eed 'in' nh\u01b0 \u0111\u01b0\u1ee3c tr\xecnh b\xe0y trong v\xed d\u1ee5 sau cho phi\xean b\u1ea3n ",(0,r.kt)("strong",{parentName:"p"},"golang")," c\u1ee7a Casbin (jCasbin v\xe0 Node-Casbin ch\u01b0a \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,r.kt)("p",null,"Nh\u01b0ng b\u1ea1n ",(0,r.kt)("strong",{parentName:"p"},"PH\u1ea2I")," \u0111\u1ea3m b\u1ea3o r\u1eb1ng \u0111\u1ed9 d\xe0i c\u1ee7a m\u1ea3ng l\xe0 ",(0,r.kt)("strong",{parentName:"p"},"L\u1edaN H\u01a0N")," ",(0,r.kt)("strong",{parentName:"p"},"1"),", n\u1ebfu kh\xf4ng n\xf3 s\u1ebd g\xe2y ra s\u1ef1 c\u1ed1 panic."),(0,r.kt)("p",null,"\u0110\u1ec3 bi\u1ebft th\xeam v\u1ec1 c\xe1c to\xe1n t\u1eed, b\u1ea1n c\xf3 th\u1ec3 xem t\u1ea1i ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"govaluate"),"."))}p.isMDXComponent=!0}}]);