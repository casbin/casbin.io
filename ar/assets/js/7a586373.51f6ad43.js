"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>C});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),C=r,u=d["".concat(o,".").concat(C)]||d[C]||m[C]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function C(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"\u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 Casbin RBAC \u0648 RBAC96",keywords:["RBAC96","Casbin RBAC"],authors:["kininaru"]},l=void 0,p={unversionedId:"rbac-96",id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"\u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 Casbin RBAC \u0648 RBAC96",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/ar/docs/rbac-96",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"\u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 Casbin RBAC \u0648 RBAC96",keywords:["RBAC96","Casbin RBAC"],authors:["kininaru"]},sidebar:"docs",previous:{title:"RBAC with Conditions",permalink:"/ar/docs/rbac-with-conditions"},next:{title:"ABAC",permalink:"/ar/docs/abac"}},o={},c=[{value:"Casbin RBAC \u0648 RBAC96",id:"casbin-rbac-\u0648-rbac96",level:2},{value:"\u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 Casbin RBAC \u0648 RBAC96",id:"\u0627\u0644\u0641\u0631\u0642-\u0628\u064a\u0646-casbin-rbac-\u0648-rbac96",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"casbin-rbac-\u0648-rbac96"},"Casbin RBAC \u0648 RBAC96"),(0,r.kt)("p",null,"\u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u060c \u0633\u0646\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 Casbin RBAC \u0648 ",(0,r.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96"),"."),(0,r.kt)("p",null,"Casbin RBAC \u064a\u062f\u0639\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b \u062c\u0645\u064a\u0639 \u0645\u064a\u0632\u0627\u062a RBAC96 \u0648\u064a\u0636\u064a\u0641 \u0645\u064a\u0632\u0627\u062a \u062c\u062f\u064a\u062f\u0629 \u0641\u0648\u0642 \u0630\u0644\u0643."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0625\u0635\u062f\u0627\u0631 RBAC"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u062f\u0639\u0645"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0648\u0635\u0641"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u062f\u0639\u0648\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC0 \u0647\u0648 \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064a \u0645\u0646 RBAC96. \u064a\u0648\u0636\u062d \u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0648\u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062a.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u062f\u0639\u0648\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC1 \u064a\u0636\u064a\u0641 \u062a\u0633\u0644\u0633\u0644\u0627\u062a \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0641\u0648\u0642 RBAC0. \u0647\u0630\u0627 \u064a\u0639\u0646\u064a \u0623\u0646\u0647 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0644\u062f\u0649 ",(0,r.kt)("inlineCode",{parentName:"td"},"alice")," ",(0,r.kt)("inlineCode",{parentName:"td"},"role1"),"\u060c \u0648 ",(0,r.kt)("inlineCode",{parentName:"td"},"role1")," \u0644\u062f\u064a\u0647 ",(0,r.kt)("inlineCode",{parentName:"td"},"role2"),"\u060c \u0641\u0625\u0646 ",(0,r.kt)("inlineCode",{parentName:"td"},"alice")," \u0633\u062a\u0645\u062a\u0644\u0643 \u0623\u064a\u0636\u0627\u064b ",(0,r.kt)("inlineCode",{parentName:"td"},"role2")," \u0648\u062a\u0631\u062b \u0623\u0630\u0648\u0646\u0627\u062a\u0647.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u062d\u0635\u0631\u064a\u0629 \u0627\u0644\u0645\u062a\u0628\u0627\u062f\u0644\u0629 \u0645\u062f\u0639\u0648\u0645 (",(0,r.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u0645\u062b\u0644 \u0647\u0630\u0627"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC2 \u064a\u0636\u064a\u0641 \u0642\u064a\u0648\u062f \u0639\u0644\u0649 RBAC0. \u0647\u0630\u0627 \u064a\u0633\u0645\u062d \u0644\u0640 RBAC2 \u0628\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a \u0627\u0644\u0645\u062a\u0628\u0627\u062f\u0644\u0629 \u0627\u0644\u062d\u0635\u0631\u064a\u0629. \u0648\u0645\u0639 \u0630\u0644\u0643\u060c \u0627\u0644\u062d\u062f\u0648\u062f \u0627\u0644\u0643\u0645\u064a\u0629 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u062d\u0635\u0631\u064a\u0629 \u0627\u0644\u0645\u062a\u0628\u0627\u062f\u0644\u0629 \u0645\u062f\u0639\u0648\u0645 (",(0,r.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u0645\u062b\u0644 \u0647\u0630\u0627"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC3 \u0647\u0648 \u0645\u0632\u064a\u062c \u0645\u0646 RBAC1 \u0648 RBAC2. \u064a\u062f\u0639\u0645 \u062a\u0633\u0644\u0633\u0644\u0627\u062a \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0648\u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0641\u064a RBAC1 \u0648 RBAC2. \u0648\u0645\u0639 \u0630\u0644\u0643\u060c \u0627\u0644\u062d\u062f\u0648\u062f \u0627\u0644\u0643\u0645\u064a\u0629 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629.")))),(0,r.kt)("h2",{id:"\u0627\u0644\u0641\u0631\u0642-\u0628\u064a\u0646-casbin-rbac-\u0648-rbac96"},"\u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 Casbin RBAC \u0648 RBAC96"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0641\u064a Casbin\u060c \u0627\u0644\u062a\u0645\u064a\u064a\u0632 \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u0627\u0644\u062f\u0648\u0631 \u0644\u064a\u0633 \u0648\u0627\u0636\u062d\u0627\u064b \u0643\u0645\u0627 \u0641\u064a RBAC96."),(0,r.kt)("p",{parentName:"li"},"\u0641\u064a Casbin\u060c \u0643\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u0627\u0644\u062f\u0648\u0631 \u064a\u0639\u0627\u0645\u0644\u0627\u0646 \u0643\u0633\u0644\u0627\u0633\u0644 \u0646\u0635\u064a\u0629. \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c \u0636\u0639 \u0641\u064a \u0627\u0639\u062a\u0628\u0627\u0631\u0643 \u0645\u0644\u0641 \u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062a\u0627\u0644\u064a:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,r.kt)("p",{parentName:"li"},"\u0625\u0630\u0627 \u0642\u0645\u062a \u0628\u062f\u0639\u0648\u0629 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0646\u0645\u0648\u0630\u062c Casbin Enforcer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,r.kt)("p",{parentName:"li"},"\u0633\u062a\u0643\u0648\u0646 \u0642\u064a\u0645\u0629 \u0627\u0644\u0639\u0648\u062f\u0629:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"[admin alice]\n")),(0,r.kt)("p",{parentName:"li"},"\u0647\u0630\u0627 \u0644\u0623\u0646\u0647 \u0641\u064a Casbin\u060c \u0627\u0644\u0645\u0648\u0636\u0648\u0639\u0627\u062a \u062a\u0634\u0645\u0644 \u0643\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u0631."),(0,r.kt)("p",{parentName:"li"},"\u0648\u0645\u0639 \u0630\u0644\u0643\u060c \u0625\u0630\u0627 \u0642\u0645\u062a \u0628\u062f\u0639\u0648\u0629 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAllRoles()"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,r.kt)("p",{parentName:"li"},"\u0633\u062a\u0643\u0648\u0646 \u0642\u064a\u0645\u0629 \u0627\u0644\u0639\u0648\u062f\u0629:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,r.kt)("p",{parentName:"li"},"\u0645\u0646 \u0647\u0630\u0627\u060c \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0631\u0649 \u0623\u0646 \u0647\u0646\u0627\u0643 \u062a\u0645\u064a\u064a\u0632 \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0641\u064a Casbin\u060c \u0648\u0644\u0643\u0646\u0647 \u0644\u064a\u0633 \u062d\u0627\u062f\u0627\u064b \u0643\u0645\u0627 \u0641\u064a RBAC96. \u0628\u0627\u0644\u0637\u0628\u0639\u060c \u064a\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0628\u0627\u062f\u0626\u0629 \u0625\u0644\u0649 \u0633\u064a\u0627\u0633\u0627\u062a\u0643 \u0645\u062b\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"user::alice")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"role::admin")," \u0644\u062a\u0648\u0636\u064a\u062d \u0639\u0644\u0627\u0642\u0627\u062a\u0647\u0645.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casbin RBAC \u064a\u0648\u0641\u0631 \u0623\u0630\u0648\u0646\u0627\u062a \u0623\u0643\u062b\u0631 \u0645\u0646 RBAC96."),(0,r.kt)("p",{parentName:"li"},"RBAC96 \u064a\u062d\u062f\u062f \u0641\u0642\u0637 7 \u0623\u0630\u0648\u0646\u0627\u062a: \u0627\u0644\u0642\u0631\u0627\u0621\u0629\u060c \u0627\u0644\u0643\u062a\u0627\u0628\u0629\u060c \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u060c \u0627\u0644\u062a\u0646\u0641\u064a\u0630\u060c \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646\u060c \u0627\u0644\u062e\u0635\u0645\u060c \u0648\u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645."),(0,r.kt)("p",{parentName:"li"},"\u0648\u0645\u0639 \u0630\u0644\u0643\u060c \u0641\u064a Casbin\u060c \u0646\u0639\u0627\u0645\u0644 \u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062a \u0643\u0633\u0644\u0627\u0633\u0644 \u0646\u0635\u064a\u0629. \u0647\u0630\u0627 \u064a\u0633\u0645\u062d \u0644\u0643 \u0628\u0625\u0646\u0634\u0627\u0621 \u0623\u0630\u0648\u0646\u0627\u062a \u062a\u0646\u0627\u0633\u0628 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643 \u0628\u0634\u0643\u0644 \u0623\u0641\u0636\u0644.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casbin RBAC \u064a\u062f\u0639\u0645 \u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062a."),(0,r.kt)("p",{parentName:"li"},"\u0641\u064a Casbin\u060c \u064a\u0645\u0643\u0646\u0643 \u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u062a\u0641\u0648\u064a\u0636\u0627\u062a \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062a. \u0647\u0630\u0647 \u0627\u0644\u0645\u064a\u0632\u0629 \u062a\u062c\u0639\u0644 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u062f\u064a\u0643 \u0623\u0643\u062b\u0631 \u0645\u0631\u0648\u0646\u0629."))))}m.isMDXComponent=!0}}]);