"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9220],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(a),s=r,k=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8545:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"policy-storage",title:"Policy Storage",description:"\uc815\ucc45 \uc800\uc7a5\uc18c",keywords:["policy storage"],authors:["hsluoyz"]},i=void 0,p={unversionedId:"policy-storage",id:"policy-storage",title:"Policy Storage",description:"\uc815\ucc45 \uc800\uc7a5\uc18c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/ko/docs/policy-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PolicyStorage.mdx",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"Policy Storage",description:"\uc815\ucc45 \uc800\uc7a5\uc18c",keywords:["policy storage"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Model Storage",permalink:"/ko/docs/model-storage"},next:{title:"Policy Subset Loading",permalink:"/ko/docs/policy-subset-loading"}},o={},d=[{value:".CSV \ud30c\uc77c\uc5d0\uc11c \uc815\ucc45 \ub85c\ub4dc",id:"csv-\ud30c\uc77c\uc5d0\uc11c-\uc815\ucc45-\ub85c\ub4dc",level:2},{value:"\uc5b4\ub311\ud130 API",id:"\uc5b4\ub311\ud130-api",level:2},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc800\uc7a5 \ud615\uc2dd",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc800\uc7a5-\ud615\uc2dd",level:2},{value:"\uc5b4\ub311\ud130 \uc138\ubd80 \uc815\ubcf4",id:"\uc5b4\ub311\ud130-\uc138\ubd80-\uc815\ubcf4",level:2}],m={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casbin\uc5d0\uc11c \uc815\ucc45 \uc800\uc7a5\uc18c\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"\uc5b4\ub311\ud130"),"\ub85c \uad6c\ud604\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"csv-\ud30c\uc77c\uc5d0\uc11c-\uc815\ucc45-\ub85c\ub4dc"},".CSV \ud30c\uc77c\uc5d0\uc11c \uc815\ucc45 \ub85c\ub4dc"),(0,r.kt)("p",null,"\uc774\uac83\uc740 Casbin\uc744 \uc0ac\uc6a9\ud558\ub294 \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \ucd08\ubcf4\uc790\uac00 \uc774\ud574\ud558\uae30 \uc27d\uace0 Casbin \ud300\uc5d0\uac8c \ub3c4\uc6c0\uc744 \uccad\ud560 \ub54c \uacf5\uc720\ud558\uae30 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".CSV")," \ud30c\uc77c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"examples/rbac","_","policy.csv"),"\uc758 \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ud30c\uc77c\uc5d0 \uc27c\ud45c\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\ub2e4\uba74, \uc774\ub97c \ud070\ub530\uc634\ud45c\ub85c \uac10\uc2f8\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, "data1,data2", read    --correct\np, alice, data1,data2, read        --incorrect (the whole phrase "data1,data2" should be wrapped in double quotes)\n')),(0,r.kt)("p",{parentName:"admonition"},"\ud30c\uc77c\uc5d0 \uc27c\ud45c\uc640 \ud070\ub530\uc634\ud45c\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\ub2e4\uba74, \ud544\ub4dc\ub97c \ud070\ub530\uc634\ud45c\ub85c \uac10\uc2f8\uace0 \ub0b4\uc7a5\ub41c \ud070\ub530\uc634\ud45c\ub97c \ub450 \ubc30\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, data, "r.act in (""get"", ""post"")"        --correct\np, alice, data, "r.act in ("get", "post")"            --incorrect (you should use "" to escape "")\n')),(0,r.kt)("p",{parentName:"admonition"},"\uad00\ub828 \uc774\uc288: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"casbin#886"))),(0,r.kt)("h2",{id:"\uc5b4\ub311\ud130-api"},"\uc5b4\ub311\ud130 API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uba54\uc18c\ub4dc"),(0,r.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\uae30\ubcf8"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc800\uc7a5\uc18c\uc5d0\uc11c \ubaa8\ub4e0 \uc815\ucc45 \uaddc\uce59\uc744 \ub85c\ub4dc\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SavePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\uae30\ubcf8"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubaa8\ub4e0 \uc815\ucc45 \uaddc\uce59\uc744 \uc800\uc7a5\uc18c\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc120\ud0dd\uc801"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc815\ucc45 \uaddc\uce59\uc744 \uc800\uc7a5\uc18c\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc120\ud0dd\uc801"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc815\ucc45 \uaddc\uce59\uc744 \uc800\uc7a5\uc18c\uc5d0\uc11c \uc81c\uac70\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveFilteredPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc120\ud0dd\uc801"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud544\ud130\uc640 \uc77c\uce58\ud558\ub294 \uc815\ucc45 \uaddc\uce59\uc744 \uc800\uc7a5\uc18c\uc5d0\uc11c \uc81c\uac70\ud569\ub2c8\ub2e4")))),(0,r.kt)("h2",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc800\uc7a5-\ud615\uc2dd"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc800\uc7a5 \ud615\uc2dd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uadc0\ud558\uc758 \uc815\ucc45 \ud30c\uc77c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud574\ub2f9 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad6c\uc870 (\uc608: MySQL)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"ptype"),(0,r.kt)("th",{parentName:"tr",align:null},"v0"),(0,r.kt)("th",{parentName:"tr",align:null},"v1"),(0,r.kt)("th",{parentName:"tr",align:null},"v2"),(0,r.kt)("th",{parentName:"tr",align:null},"v3"),(0,r.kt)("th",{parentName:"tr",align:null},"v4"),(0,r.kt)("th",{parentName:"tr",align:null},"v5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2","_","admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"read"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2","_","admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"write"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uac01 \uc5f4\uc758 \uc758\ubbf8")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id"),": \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uae30\ubcf8 \ud0a4\uc785\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin policy"),"\uc758 \uc77c\ubd80\ub85c \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc0dd\uc131 \ubc29\ubc95\uc740 \ud2b9\uc815 \uc5b4\ub311\ud130\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ptype"),": \uc774\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," \ub4f1\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v0-v5"),": \uc5f4 \uc774\ub984\uc740 \ud2b9\uc815 \uc758\ubbf8\uac00 \uc5c6\uc73c\uba70, \uc67c\ucabd\uc5d0\uc11c \uc624\ub978\ucabd\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"policy csv"),"\uc758 \uac12\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \uc5f4\uc758 \uc218\ub294 \uc0ac\uc6a9\uc790\uac00 \uc815\uc758\ud558\ub294 \uac83\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc774\ub860\uc801\uc73c\ub85c\ub294 \uc5f4\uc758 \uc218\uac00 \ubb34\ud55c\ud788 \ub9ce\uc744 \uc218 \uc788\uc9c0\ub9cc, \uc77c\ubc18\uc801\uc73c\ub85c \uc5b4\ub311\ud130\uc5d0\ub294 ",(0,r.kt)("strong",{parentName:"p"},"6"),"\uac1c\uc758 \uc5f4\ub9cc \uad6c\ud604\ub429\ub2c8\ub2e4. \uc774\uac83\uc774 \ucda9\ubd84\ud558\uc9c0 \uc54a\ub2e4\uba74, \ud574\ub2f9 \uc5b4\ub311\ud130 \uc800\uc7a5\uc18c\uc5d0 \ubb38\uc81c\ub97c \uc81c\ucd9c\ud574 \uc8fc\uc138\uc694."))),(0,r.kt)("h2",{id:"\uc5b4\ub311\ud130-\uc138\ubd80-\uc815\ubcf4"},"\uc5b4\ub311\ud130 \uc138\ubd80 \uc815\ubcf4"),(0,r.kt)("p",null,"\uc5b4\ub311\ud130 API\uc758 \uc0ac\uc6a9 \ubc0f \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud14c\uc774\ube14 \uad6c\uc870 \uc124\uacc4\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uc744 \ubc29\ubb38\ud558\uc2ed\uc2dc\uc624: ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}c.isMDXComponent=!0}}]);