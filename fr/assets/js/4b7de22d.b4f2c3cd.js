"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"effector",title:"Effector",description:"L'interface Effector dans Casbin",keywords:["effector","Effect","MergeEffects"],authors:["ErikQQY"]},o=void 0,l={unversionedId:"effector",id:"effector",title:"Effector",description:"L'interface Effector dans Casbin",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/fr/docs/effector",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Effector.mdx",tags:[],version:"current",frontMatter:{id:"effector",title:"Effector",description:"L'interface Effector dans Casbin",keywords:["effector","Effect","MergeEffects"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"Syntax for Models",permalink:"/fr/docs/syntax-for-models"},next:{title:"Functions",permalink:"/fr/docs/function"}},s={},p=[{value:"<code>MergeEffects()</code>",id:"mergeeffects",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},f=c("Tabs"),u=c("TabItem"),d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"L'",(0,i.kt)("inlineCode",{parentName:"p"},"Effect")," repr\xe9sente le r\xe9sultat d'une r\xe8gle de politique, et l'",(0,i.kt)("inlineCode",{parentName:"p"},"Effector")," est l'interface pour g\xe9rer les effets dans Casbin."),(0,i.kt)("h2",{id:"mergeeffects"},(0,i.kt)("inlineCode",{parentName:"h2"},"MergeEffects()")),(0,i.kt)("p",null,"La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects()")," est utilis\xe9e pour fusionner tous les r\xe9sultats correspondants collect\xe9s par l'ex\xe9cuteur en une seule d\xe9cision."),(0,i.kt)("p",null,"Par exemple :"),(0,i.kt)(f,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"Dans cet exemple :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Effect")," est la d\xe9cision finale qui est fusionn\xe9e par cette fonction (initialement d\xe9finie comme ",(0,i.kt)("inlineCode",{parentName:"li"},"Indeterminate"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"explainIndex")," est l'index de ",(0,i.kt)("inlineCode",{parentName:"li"},"eft")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Allow")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny"),"), et il est initialis\xe9 \xe0 ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"err")," est utilis\xe9 pour v\xe9rifier si l'effet est pris en charge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," est la repr\xe9sentation en cha\xeene de caract\xe8res des effets de la politique."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"effects")," est un tableau d'effets, qui peuvent \xeatre ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Indeterminate"),", ou ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"matches")," est un tableau qui indique si le r\xe9sultat correspond \xe0 la politique."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyIndex")," est l'index de la politique dans le mod\xe8le."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyLength")," est la longueur de la politique.")),(0,i.kt)("p",null,"Le code ci-dessus illustre comment passer les param\xe8tres \xe0 la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects()"),", et la fonction traitera les effets et les correspondances en fonction de l'",(0,i.kt)("inlineCode",{parentName:"p"},"expr"),"."),(0,i.kt)("p",null,"Pour utiliser l'",(0,i.kt)("inlineCode",{parentName:"p"},"Effector"),", suivez ces \xe9tapes :"),(0,i.kt)(f,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"L'id\xe9e de base de ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects()")," est que si l'",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," peut correspondre aux r\xe9sultats, indiquant que le ",(0,i.kt)("inlineCode",{parentName:"p"},"p_eft")," est ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),", alors tous les effets peuvent \xeatre fusionn\xe9s. Si aucune r\xe8gle de refus n'est correspondante, alors la d\xe9cision est d'autoriser."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Si l'",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," ne correspond pas \xe0 la condition ",(0,i.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || deny"'),", et que l'",(0,i.kt)("inlineCode",{parentName:"p"},"policyIndex")," est plus court que ",(0,i.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", il ",(0,i.kt)("strong",{parentName:"p"},"court-circuitera")," certains effets au milieu.")))}m.isMDXComponent=!0}}]);