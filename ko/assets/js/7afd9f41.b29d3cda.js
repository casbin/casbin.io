"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,b=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"performance",title:"Performance Optimization",description:"Casbin \uc131\ub2a5 \ucd5c\uc801\ud654",keywords:["optimization"],authors:["hsluoyz"]},o=void 0,c={unversionedId:"performance",id:"performance",title:"Performance Optimization",description:"Casbin \uc131\ub2a5 \ucd5c\uc801\ud654",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Performance.mdx",sourceDirName:".",slug:"/performance",permalink:"/ko/docs/performance",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Performance.mdx",tags:[],version:"current",frontMatter:{id:"performance",title:"Performance Optimization",description:"Casbin \uc131\ub2a5 \ucd5c\uc801\ud654",keywords:["optimization"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Benchmarks",permalink:"/ko/docs/benchmark"},next:{title:"Authorization of Kubernetes",permalink:"/ko/docs/k8s"}},s={},p=[{value:"\uace0\ub7c9 \ud2b8\ub798\ud53d",id:"\uace0\ub7c9-\ud2b8\ub798\ud53d",level:4},{value:"\uc815\ucc45 \uaddc\uce59 \uc218\uac00 \ub9ce\uc74c",id:"\uc815\ucc45-\uaddc\uce59-\uc218\uac00-\ub9ce\uc74c",level:4}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ubc31\ub9cc \uba85 \uc774\uc0c1\uc758 \uc0ac\uc6a9\uc790 \ub610\ub294 \uad8c\ud55c\uc774 \uc788\ub294 \uc0dd\uc0b0 \ud658\uacbd\uc5d0\uc11c \uc801\uc6a9\ud560 \ub54c, Casbin \uc9d1\ud589\uc5d0\uc11c \uc131\ub2a5 \uc800\ud558\ub97c \uacaa\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcf4\ud1b5 \ub450 \uac00\uc9c0 \uc6d0\uc778\uc774 \uc788\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("h4",{id:"\uace0\ub7c9-\ud2b8\ub798\ud53d"},"\uace0\ub7c9 \ud2b8\ub798\ud53d"),(0,a.kt)("p",null,"\ucd08\ub2f9 \ub4e4\uc5b4\uc624\ub294 \uc694\uccad \uc218\uac00 \ub108\ubb34 \ub9ce\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub2e8\uc77c Casbin \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud574 10,000 \uc694\uccad/\ucd08\uc785\ub2c8\ub2e4. \uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294, \ub2e8\uc77c Casbin \uc778\uc2a4\ud134\uc2a4\ub85c\ub294 \ubaa8\ub4e0 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \ub370 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub450 \uac00\uc9c0 \uac00\ub2a5\ud55c \ud574\uacb0\ucc45\uc774 \uc788\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uba40\ud2f0 \uc2a4\ub808\ub529\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec Casbin \uc778\uc2a4\ud134\uc2a4\ub97c \ud65c\uc131\ud654\ud558\uba74, \uae30\uacc4\uc758 \ubaa8\ub4e0 \ucf54\uc5b4\ub97c \ucd5c\ub300\ud55c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624: ",(0,a.kt)("a",{parentName:"p",href:"/docs/multi-threading"},"\uba40\ud2f0 \uc2a4\ub808\ub529"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Casbin \uc778\uc2a4\ud134\uc2a4\ub97c \ud074\ub7ec\uc2a4\ud130(\uc5ec\ub7ec \ub300\uc758 \uae30\uacc4)\uc5d0 \ubc30\ud3ec\ud558\uace0 Watcher\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 Casbin \uc778\uc2a4\ud134\uc2a4\uac00 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624: ",(0,a.kt)("a",{parentName:"p",href:"/docs/watchers"},"Watchers"),"."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc744 \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, Casbin\uc744 \uac01 \uae30\uacc4\uac00 \ub3d9\uc2dc\uc5d0 5\uac1c\uc758 \uc2a4\ub808\ub4dc\ub85c Casbin \uc9d1\ud589 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 10\ub300\uc758 \uae30\uacc4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h4",{id:"\uc815\ucc45-\uaddc\uce59-\uc218\uac00-\ub9ce\uc74c"},"\uc815\ucc45 \uaddc\uce59 \uc218\uac00 \ub9ce\uc74c"),(0,a.kt)("p",null,"\ud074\ub77c\uc6b0\ub4dc \ub610\ub294 \uba40\ud2f0 \ud14c\ub10c\ud2b8 \ud658\uacbd\uc5d0\uc11c\ub294 \uc218\ubc31\ub9cc \uac1c\uc758 \uc815\ucc45 \uaddc\uce59\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \uc9d1\ud589 \ud638\ucd9c \ub610\ub294 \ucd08\uae30 \uc2dc\uac04\uc5d0 \uc815\ucc45 \uaddc\uce59\uc744 \ub85c\ub4dc\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \ub290\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294 \ubcf4\ud1b5 \uc5ec\ub7ec \uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc644\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Casbin \ubaa8\ub378 \ub610\ub294 \uc815\ucc45\uc774 \uc798 \uc124\uacc4\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uc798 \uc791\uc131\ub41c \ubaa8\ub378\uacfc \uc815\ucc45\uc740 \uac01 \uc0ac\uc6a9\uc790/\ud14c\ub10c\ud2b8\uc5d0 \ub300\ud55c \uc911\ubcf5 \ub85c\uc9c1\uc744 \ucd94\uc0c1\ud654\ud558\uace0 \uaddc\uce59 \uc218\ub97c \ub9e4\uc6b0 \uc791\uc740 \uc218\uc900(\\< 100)\uc73c\ub85c \uc904\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ubaa8\ub4e0 \ud14c\ub10c\ud2b8\uc5d0 \ub300\ud574 \uc77c\ubd80 \uae30\ubcf8 \uaddc\uce59\uc744 \uacf5\uc720\ud558\uace0 \uc0ac\uc6a9\uc790\uac00 \ub098\uc911\uc5d0 \uaddc\uce59\uc744 \uc0ac\uc6a9\uc790 \uc815\uc758\ud560 \uc218 \uc788\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uc815\uc758 \uaddc\uce59\uc740 \uae30\ubcf8 \uaddc\uce59\uc744 \ub36e\uc5b4\uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub354 \uad81\uae08\ud55c \uc810\uc774 \uc788\uc73c\uba74 Casbin \uc800\uc7a5\uc18c\uc5d0 GitHub \uc774\uc288\ub97c \uc5f4\uc5b4 \uc8fc\uc138\uc694.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc0e4\ub529\uc744 \uc218\ud589\ud558\uc5ec Casbin \uc9d1\ud589\uc790\uac00 \uc815\ucc45 \uaddc\uce59\uc758 \uc791\uc740 \uc9d1\ud569\ub9cc \ub85c\ub4dc\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, enforcer","_","0\ub294 tenant","_","0\uc5d0\uc11c tenant","_","99\uae4c\uc9c0 \uc11c\ube44\uc2a4\ud560 \uc218 \uc788\uace0, enforcer","_","1\uc740 tenant","_","100\uc5d0\uc11c tenant","_","199\uae4c\uc9c0 \uc11c\ube44\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \uc815\ucc45 \uaddc\uce59\uc758 \ud558\uc704 \uc9d1\ud569\ub9cc \ub85c\ub4dc\ud558\ub824\uba74 \ub2e4\uc74c\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624: ",(0,a.kt)("a",{parentName:"p",href:"/docs/policy-subset-loading"},"\uc815\ucc45 \ud558\uc704 \uc9d1\ud569 \ub85c\ub529"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"RBAC \uc5ed\ud560\uc5d0 \uc9c1\uc811 \uc0ac\uc6a9\uc790 \ub300\uc2e0 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud569\ub2c8\ub2e4. Casbin\uc758 RBAC\uc740 \uc5ed\ud560 \uc0c1\uc18d \ud2b8\ub9ac(\uce90\uc2dc\ub85c) \uad6c\ud604\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c, Alice\uc640 \uac19\uc740 \uc0ac\uc6a9\uc790\uac00 \uc8fc\uc5b4\uc9c0\uba74, Casbin\uc740 \uc5ed\ud560-\uc0ac\uc6a9\uc790 \uad00\uacc4\ub97c RBAC \ud2b8\ub9ac\uc5d0\uc11c \uc870\ud68c\ud558\uace0 \uc9d1\ud589\uc744 \uc218\ud589\ud558\ub294 \ub370 O(1) \uc2dc\uac04\ub9cc \uc18c\uc694\ub429\ub2c8\ub2e4. g \uaddc\uce59\uc774 \uc790\uc8fc \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74, RBAC \ud2b8\ub9ac\ub97c \uacc4\uc18d \uc5c5\ub370\uc774\ud2b8\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \ub17c\uc758\uc758 \uc138\ubd80 \uc0ac\ud56d\uc740 \uc5ec\uae30\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/681#issuecomment-763801583"},"https://github.com/casbin/casbin/issues/681#issuecomment-763801583")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ubaa8\ub4e0 \ubc29\ubc95\uc744 \ub3d9\uc2dc\uc5d0 \uc2dc\ub3c4\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);