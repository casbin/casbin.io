"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(l,".").concat(u)]||s[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"rbac-with-pattern",title:"RBAC with Pattern",description:"\ud328\ud134\uc744 \uc0ac\uc6a9\ud55c RBAC",keywords:["RBAC with pattern","pattern matching"],authors:["hsluoyz"]},o=void 0,p={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC with Pattern",description:"\ud328\ud134\uc744 \uc0ac\uc6a9\ud55c RBAC",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/ko/docs/rbac-with-pattern",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithPattern.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC with Pattern",description:"\ud328\ud134\uc744 \uc0ac\uc6a9\ud55c RBAC",keywords:["RBAC with pattern","pattern matching"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"RBAC",permalink:"/ko/docs/rbac"},next:{title:"RBAC with Domains",permalink:"/ko/docs/rbac-with-domains"}},l={},c=[{value:"\ube60\ub978 \uc2dc\uc791",id:"\ube60\ub978-\uc2dc\uc791",level:2},{value:"RBAC\uc5d0\uc11c \ud328\ud134 \ub9e4\uce6d \uc0ac\uc6a9",id:"rbac\uc5d0\uc11c-\ud328\ud134-\ub9e4\uce6d-\uc0ac\uc6a9",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("Tabs"),s=d("TabItem"),u={toc:c};function k(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ube60\ub978-\uc2dc\uc791"},"\ube60\ub978 \uc2dc\uc791"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"g(_, _)"),"\uc5d0\uc11c \ud328\ud134 \uc0ac\uc6a9."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub3c4\uba54\uc778\uc5d0\uc11c \ud328\ud134 \uc0ac\uc6a9."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubaa8\ub4e0 \ud328\ud134 \uc0ac\uc6a9."),(0,r.kt)("p",{parentName:"li"},"\ub450 API\uc758 \uc0ac\uc6a9\uc744 \uacb0\ud569\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."))),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \ubcf4\uc5ec\uc9c4 \uac83\ucc98\ub7fc, ",(0,r.kt)("inlineCode",{parentName:"p"},"enforcer")," \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud55c \ud6c4\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"AddNamedDomainMatchingFunc")," API\ub97c \ud1b5\ud574 \ud328\ud134 \ub9e4\uce6d\uc744 \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub4e4\uc740 \ud328\ud134\uc774 \uc5b4\ub5bb\uac8c \ub9e4\uce6d\ub418\ub294\uc9c0\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\uc628\ub77c\uc778 \ud3b8\uc9d1\uae30\ub97c \uc0ac\uc6a9\ud558\uba74 \uc67c\ucabd \ud558\ub2e8\uc5d0\uc11c \ud328\ud134 \ub9e4\uce6d \ud568\uc218\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n",(0,r.kt)("img",{alt:"editor-tips",src:n(9523).Z,width:"480",height:"272"}))),(0,r.kt)("h2",{id:"rbac\uc5d0\uc11c-\ud328\ud134-\ub9e4\uce6d-\uc0ac\uc6a9"},"RBAC\uc5d0\uc11c \ud328\ud134 \ub9e4\uce6d \uc0ac\uc6a9"),(0,r.kt)("p",null,"\ub54c\ub54c\ub85c, \ud2b9\uc815 \uc8fc\uccb4, \uac1d\uccb4, \ub610\ub294 \ud2b9\uc815 \ud328\ud134\uc744 \uac00\uc9c4 \ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8\uac00 \uc790\ub3d9\uc73c\ub85c \uc5ed\ud560\uc744 \ubd80\uc5ec\ubc1b\uae30\ub97c \uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. RBAC\uc758 \ud328\ud134 \ub9e4\uce6d \ud568\uc218\ub294 \uc774\ub97c \ub3c4\uc640\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud328\ud134 \ub9e4\uce6d \ud568\uc218\ub294 \uc774\uc804\uc758 ",(0,r.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"\ub9e4\ucc98 \ud568\uc218"),"\uc640 \ub3d9\uc77c\ud55c \ub9e4\uac1c\ubcc0\uc218\uc640 \ubc18\ud658 \uac12\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"g"),"\uc758 \uac01 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc9c0\uc6d0\ud558\ub294 \ud328\ud134 \ub9e4\uce6d \ud568\uc218."),(0,r.kt)("p",null,"\uc6b0\ub9ac\ub294 \uc77c\ubc18\uc801\uc73c\ub85c RBAC\uac00 \ub9e4\ucc98\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)"),"\ub85c \ud45c\ud604\ub41c\ub2e4\ub294 \uac83\uc744 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc6b0\ub9ac\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc815\ucc45\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,r.kt)("p",null,"\uadf8\ub798\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"book 1"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"book 2"),"\ub97c \ud3ec\ud568\ud55c \ubaa8\ub4e0 \ucc45\uc744 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc218\ucc9c \uad8c\uc758 \ucc45\uc774 \uc788\uc744 \uc218 \uc788\uace0, \uac01 \ucc45\uc744 \ucc45 \uc5ed\ud560(\ub610\ub294 \uadf8\ub8f9)\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \uc815\ucc45 \uaddc\uce59\uc73c\ub85c \ucd94\uac00\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \uc9c0\ub8e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\ub098 \ud328\ud134 \ub9e4\uce6d \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74, \ub2e8 \ud55c \uc904\ub85c \uc815\ucc45\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"g, /book/:id, book_group\n")),(0,r.kt)("p",null,"Casbin\uc740 \uc790\ub3d9\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/1"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/2"),"\ub97c \ud328\ud134 ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/:id"),"\uc5d0 \ub9e4\uce6d\uc2dc\ucf1c\uc90d\ub2c8\ub2e4. \ub2f9\uc2e0\uc740 \ub2e8\uc9c0 \ub2e4\uc74c\uacfc \uac19\uc774 enforcer\uc5d0 \ud568\uc218\ub97c \ub4f1\ub85d\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(s,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,r.kt)(s,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,r.kt)("p",null,"\ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8\uc5d0\uc11c \ud328\ud134 \ub9e4\uce6d \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \ub54c, \ud568\uc218\ub97c enforcer\uc640 \ubaa8\ub378\uc5d0 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(s,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,r.kt)(s,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)"),"\uc774 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud558\ub294\uc9c0 \uc774\ud574\ud558\uc9c0 \ubabb\ud55c\ub2e4\uba74, ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),"\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694. \uac04\ub2e8\ud788 \ub9d0\ud574\uc11c, ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)"),"\uc740 \uc0ac\uc6a9\uc790 ",(0,r.kt)("inlineCode",{parentName:"p"},"r.sub"),"\uac00 \ub3c4\uba54\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"r.dom"),"\uc5d0\uc11c \uc5ed\ud560 ",(0,r.kt)("inlineCode",{parentName:"p"},"p.sub"),"\ub97c \uac00\uc9c0\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc774\uac83\uc774 \ub9e4\ucc98\uac00 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0\uc785\ub2c8\ub2e4. \uc804\uccb4 \uc608\uc81c\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"\uc5ec\uae30"),"\uc5d0\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc758 \ud328\ud134 \ub9e4\uce6d \uad6c\ubb38 \uc678\uc5d0\ub3c4, \uc6b0\ub9ac\ub294 \uc21c\uc218 \ub3c4\uba54\uc778 \ud328\ud134\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),"\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"domain1"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"domain2"),"\ub77c\ub294 \ub2e4\ub978 \ub3c4\uba54\uc778\uc5d0\uc11c \uc811\uadfc \uad8c\ud55c\uc744 \uac00\uc9c0\uae38 \uc6d0\ud55c\ub2e4\uba74, \uc21c\uc218 \ub3c4\uba54\uc778 \ud328\ud134\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),"\uac00 domain1\uacfc domain2\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\ub97c \uc77d\uace0 \uc4f8 \uc218 \uc788\ub3c4\ub85d \ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),"\uc5d0\uc11c \ud328\ud134 \ub9e4\uce6d ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\uc744 \uc0ac\uc6a9\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),"\uac00 \ub450 \ub3c4\uba54\uc778\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"By using pattern matching, especially in scenarios that are more complicated and have a lot of domains or objects to consider, we can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy_definition")," in a more elegant and effective way."))}k.isMDXComponent=!0},9523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);