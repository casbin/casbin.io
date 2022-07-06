"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2403],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"syntax-for-models",title:"\ubaa8\ub378(Model) \ubb38\ubc95"},p=void 0,s={unversionedId:"syntax-for-models",id:"syntax-for-models",title:"\ubaa8\ub378(Model) \ubb38\ubc95",description:"- \ubaa8\ub378 \uc124\uc815\uc5d0\uc11c \ub2e4\uc74c 4\uac00\uc9c0 \ud56d\ubaa9\uc744 \ubc18\ub4dc\uc2dc \ud3ec\ud568\ud569\ub2c8\ub2e4: [requestdefinition], [policydefinition], [policy_effect], [matchers].",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/SyntaxForModels.mdx",sourceDirName:".",slug:"/syntax-for-models",permalink:"/ko/docs/syntax-for-models",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SyntaxForModels.mdx",tags:[],version:"current",frontMatter:{id:"syntax-for-models",title:"\ubaa8\ub378(Model) \ubb38\ubc95"},sidebar:"docs",previous:{title:"\uc9c0\uc6d0\ud558\ub294 \uc811\uadfc \uc81c\uc5b4 \ubaa8\ub378",permalink:"/ko/docs/supported-models"},next:{title:"Effector",permalink:"/ko/docs/effector"}},c={},m=[{value:"\uc694\uccad(Request) \ubaa8\ub378 \uc815\uc758",id:"\uc694\uccadrequest-\ubaa8\ub378-\uc815\uc758",level:2},{value:"\uc815\ucc45(Policy) \ubaa8\ub378 \uc815\uc758",id:"\uc815\ucc45policy-\ubaa8\ub378-\uc815\uc758",level:2},{value:"\uc815\ucc45 Effect",id:"\uc815\ucc45-effect",level:2},{value:"\uc870\uac74\uc2dd",id:"\uc870\uac74\uc2dd",level:2},{value:"Multiple sections type",id:"multiple-sections-type",level:2},{value:"Special Grammer",id:"special-grammer",level:3},{value:"\ud45c\ud604\uc2dd \ud3c9\uac00",id:"\ud45c\ud604\uc2dd-\ud3c9\uac00",level:3}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},u=d("Tabs"),f=d("TabItem"),k={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ubaa8\ub378 \uc124\uc815\uc5d0\uc11c \ub2e4\uc74c 4\uac00\uc9c0 \ud56d\ubaa9\uc744 \ubc18\ub4dc\uc2dc \ud3ec\ud568\ud569\ub2c8\ub2e4: ",(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition], [policy_definition], [policy_effect], [matchers]"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RBAC\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"[role_definition]")," \ud56d\ubaa9\uc774 \ucd94\uac00\ub429\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A model CONF can contain comments. The comments start with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," will comment the rest of the line."))),(0,i.kt)("h2",{id:"\uc694\uccadrequest-\ubaa8\ub378-\uc815\uc758"},"\uc694\uccad(Request) \ubaa8\ub378 \uc815\uc758"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition]")," is the definition for the access request. It defines the arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"e.Enforce(...)")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sub, obj, act"),"\ub294 \uac01\uac01 \uc811\uadfc \uc8fc\uccb4(Subject), \uc811\uadfc \ub300\uc0c1(Object), \uadf8\ub9ac\uace0 \uc811\uadfc \ub3d9\uc791(Action) \uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc694\uccad \ud615\uc2dd\uc744 \ub9de\ucda4 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"sub, act"),"\uc640 \uac19\uc774 \ud2b9\uc815 \ub9ac\uc18c\uc2a4\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\uac70\ub098, ",(0,i.kt)("inlineCode",{parentName:"p"},"sub, sub2, obj, act"),"\uc640 \uac19\uc774 \ubcf5\uc218\uc758 \uc811\uadfc \uc8fc\uccb4\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc815\ucc45policy-\ubaa8\ub378-\uc815\uc758"},"\uc815\ucc45(Policy) \ubaa8\ub378 \uc815\uc758"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[policy_definition]")," is the definition for the policy. It defines the meaning of the policy. For example, we have the following model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = sub, obj, act\np2 = sub, act\n")),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc815\ucc45 \uc124\uc815 \ud30c\uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, data1, read\np2, bob, write-all-objects\n")),(0,i.kt)("p",null,"\uc815\ucc45 \uc124\uc815 \ud30c\uc77c\uc758 \uac01 \uc904\uc744 \uc815\ucc45 \uaddc\uce59\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \uac01 \uc815\ucc45 \uaddc\uce59\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"\uc815\ucc45 \uc720\ud615"),"\uc73c\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),"\uc785\ub2c8\ub2e4. \uc5ec\ub7ec \uc885\ub958\uc758 \uc815\ucc45 \uc720\ud615\uc744 \uc0ac\uc6a9\ud560 \ub54c, \uc5b4\ub290 \uc815\ucc45 \uc720\ud615\uc5d0 \ud574\ub2f9\ud558\ub294 \uc9c0\ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4. \uc704 \uc815\ucc45\uc740 \uc544\ub798\uc640 \uac19\uc774 \uc5f0\uacb0\ub429\ub2c8\ub2e4. \uc774 \uc5f0\uacb0 \uad00\uacc4\ub294 ","[matchers]"," \ud56d\ubaa9\uc5d0\uc11c \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(alice, data1, read) -> (p.sub, p.obj, p.act)\n(bob, write-all-objects) -> (p2.sub, p2.act)\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The elements in a policy rule are always regarded as",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". If you have any question about this, please see the discussion at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/113"},"https://github.com/casbin/casbin/issues/113")))),(0,i.kt)("h2",{id:"\uc815\ucc45-effect"},"\uc815\ucc45 Effect"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[policy_effect]"),"\uc5d0\uc11c \uc815\ucc45 Effect(\uc694\uccad\uc744 \ud5c8\uc6a9\ud560\uc9c0 \uac70\ubd80\ud560\uc9c0 \uacb0\uc815) \ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\uc758 \uc815\ucc45 \uaddc\uce59\uc774 \uc788\uc744 \ub54c \ucd5c\uc885\uc801\uc73c\ub85c \uc694\uccad\uc744 \ud5c8\uc6a9\ud560 \uac83\uc778\uc9c0, \uac70\ubd80\ud560 \uac83\uc778\uc9c0\ub97c \ud310\ub2e8\ud558\ub294 \uaddc\uce59\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud55c \uaddc\uce59\uc740 \ud5c8\uc6a9\ud558\uace0 \ub2e4\ub978 \uaddc\uce59\uc740 \uac70\ubd80\ub418\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow))\n")),(0,i.kt)("p",null,"\uc774 \uc815\ucc45 Effect\uc758 \uc758\ubbf8\ub294, allow \uc815\ucc45 \uaddc\uce59 \uc911 \ud558\ub098\ub77c\ub3c4 \ub9cc\uc871\ub418\uba74 \ucd5c\uc885\uc801\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\uac00 \ub41c\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4. (\ud5c8\uc6a9 \uc6b0\uc120) ",(0,i.kt)("inlineCode",{parentName:"p"},"p.eft"),"\ub294 \uc815\ucc45\uc758 Effect\uc785\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," \ud639\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"deny")," \ub458 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc0dd\ub7b5 \uac00\ub2a5\ud55c \uac12\uc774\uba70, \uae30\ubcf8 \uac12\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\uc785\ub2c8\ub2e4. \ud2b9\uc815 \uac12\uc744 \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c \uae30\ubcf8 \uac12\uc774 \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc544\ub798\ub294 \ub610 \ub2e4\ub978 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = !some(where (p.eft == deny))\n")),(0,i.kt)("p",null,"\uba85\uc2dc\uc801\uc778 ",(0,i.kt)("inlineCode",{parentName:"p"},"\uac70\ubd80")," \uaddc\uce59\uc774 \uc5c6\ub2e4\uba74 \ucd5c\uc885\uc801\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud5c8\uc6a9"),"\uc774 \ub41c\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4. (\uac70\ubd80 \uc6b0\uc120) ",(0,i.kt)("inlineCode",{parentName:"p"},"some"),"\uc740 \uc801\uc5b4\ub3c4 \ud558\ub098 \uc774\uc0c1 \ub9cc\uc871\ud558\ub294 \uc815\ucc45 \uaddc\uce59\uc774 \uc788\uc744 \ub54c \ucc38(true) \uc774 \ub429\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"\ub294 \uc5b4\ub5a4 \uc815\ucc45 \uaddc\uce59\uc5d0\ub3c4 \ubd80\ud569\ud560 \ub54c \ucc38(true) \uc774 \ub429\ub2c8\ub2e4. (\uc5ec\uae30\uc11c\ub294 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.) \uc815\ucc45 Effect\ub294 \ub17c\ub9ac \uc5f0\uc0b0 \ud45c\ud604\uc2dd\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n")),(0,i.kt)("p",null,"\uc774\uac83\uc740 \uc801\uc5b4\ub3c4 \ud558\ub098 \uc774\uc0c1\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud5c8\uc6a9")," \uaddc\uce59\uc5d0 \ubd80\ud569\ud558\uace0, ",(0,i.kt)("inlineCode",{parentName:"p"},"\uac70\ubd80"),"\uac00 \ub418\ub294 \uaddc\uce59\uc774 \ud558\ub098\ub3c4 \uc5c6\ub294 \uc870\uac74\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774\uc640 \uac19\uc774, \uad8c\ud55c \uad00\ub9ac\uc5d0\uc11c \ud5c8\uc6a9\uacfc \uac70\ubd80\ub97c \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac70\ubd80\uac00 \ud5c8\uc6a9\uc5d0 \uc6b0\uc120\ud569\ub2c8\ub2e4."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Although we designed the syntax of policy effect as above, the current implementations only use hard-coded policy effect, as we found there's no much need for that sort of flexibility. \ub530\ub77c\uc11c \uc9c0\uae08\uc740 \ub9de\ucda4 \uc124\uc815 \ub300\uc2e0 \uc544\ub798\uc758 \ube4c\ud2b8\uc778 \uc815\ucc45 Effect\ub97c \uc0ac\uc6a9\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))),(0,i.kt)("p",null,"\uc9c0\uc6d0\ub418\ub294 \ube4c\ud2b8\uc778 \uc815\ucc45 Effect\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\uc815\ucc45 Effect"),(0,i.kt)("th",{parentName:"tr",align:null},"\uc758\ubbf8"),(0,i.kt)("th",{parentName:"tr",align:null},"\uc0ac\ub840"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow))"),(0,i.kt)("td",{parentName:"tr",align:null},"\ud5c8\uc6a9 \uc6b0\uc120"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"ACL, RBAC \ub4f1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"!some(where (p.eft == deny))"),(0,i.kt)("td",{parentName:"tr",align:null},"\uac70\ubd80 \uc6b0\uc120"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"\uac70\ubd80(Deny) \uc6b0\uc120"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow)) && !some(where (p.eft == deny))"),(0,i.kt)("td",{parentName:"tr",align:null},"\uba85\uc2dc\uc801 \ud5c8\uc6a9 + \uba85\uc2dc\uc801 \uac70\ubd80"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"\ud5c8\uc6a9/\uac70\ubd80"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"priority(p.eft) ","|","|"," deny"),(0,i.kt)("td",{parentName:"tr",align:null},"\uc6b0\uc120\uc21c\uc704"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"\uc6b0\uc120\uc21c\uc704"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subjectPriority(p.eft)"),(0,i.kt)("td",{parentName:"tr",align:null},"priority base on role"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Subject-Priority"))))),(0,i.kt)("h2",{id:"\uc870\uac74\uc2dd"},"\uc870\uac74\uc2dd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[matchers]")," is the definition for policy matchers. The matchers are expressions. It defines how the policy rules are evaluated against the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"\uc704 \uc870\uac74\uc2dd\uc740 \uac04\ub2e8\ud569\ub2c8\ub2e4. \uc694\uccad\uc758 \uc811\uadfc \uc8fc\uccb4(Subject), \uc811\uadfc \ub300\uc0c1(Object) \ubc0f \ub3d9\uc791(Action) \uc774 \uc815\ucc45 \uaddc\uce59\uc5d0 \ubd80\ud569\ud574\uc57c \ud55c\ub2e4\ub294 \uac83\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"+, -, *, /"),"\uc640 \uac19\uc740 \uc218\ub9ac \uc5f0\uc0b0\uc790\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"&&, ||, !")," \uac19\uc740 \ub17c\ub9ac \uc5f0\uc0b0\uc790\ub97c matchers\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"multiple-sections-type"},"Multiple sections type"),(0,i.kt)("p",null,"If you need multiple policy definitions or multiple matcher, you can use like ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"m2"),". In fact, all of the above four sections can use multiple types and the syntax is ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"+number, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"r2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"e2"),". By default these four sections should correspond one to one. Such as your ",(0,i.kt)("inlineCode",{parentName:"p"},"r2")," will only use matcher ",(0,i.kt)("inlineCode",{parentName:"p"},"m2")," to match policies ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),"."),(0,i.kt)("p",null,"You can pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," as the first parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"enforce")," method to specify the types, the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," is like this"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'EnforceContext{"r2","p2","e2","m2"}\ntype EnforceContext struct {\n    RType string\n    PType string\n    EType string\n    MType string\n}\n'))),(0,i.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const enforceContext = new EnforceContext('r2', 'p2', 'e2', 'm2');\nclass EnforceContext {\n  constructor(rType, pType, eType, mType) {\n    this.pType = pType;\n    this.eType = eType;\n    this.mType = mType;\n    this.rType = rType;\n  }\n}\n"))),(0,i.kt)(f,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'EnforceContext enforceContext = new EnforceContext("2");\npublic class EnforceContext {\n    private String pType;\n    private String eType;\n    private String mType;\n    private String rType;\n    public EnforceContext(String suffix) {\n      this.pType = "p" + suffix;\n      this.eType = "e" + suffix;\n      this.mType = "m" + suffix;\n      this.rType = "r" + suffix;\n    }\n}\n')))),(0,i.kt)("p",null,"Example usage, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_model.conf"},"model")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_policy.csv"},"policy"),", the request is as follows"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2,p2,etc..\nenforceContext := NewEnforceContext("2")\n// You can also specify a certain type individually\nenforceContext.EType = "e"\n// Don\'t pass in EnforceContext,the default is r,p,e,m\ne.Enforce("alice", "data2", "read")     // true\n// pass in EnforceContext\ne.Enforce(enforceContext, struct{ Age int }{Age: 70}, "/data1", "read")     //false\ne.Enforce(enforceContext, struct{ Age int }{Age: 30}, "/data1", "read")     //true\n'))),(0,i.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2,p2,etc..\nconst enforceContext = new NewEnforceContext(\'2\');\n// You can also specify a certain type individually\nenforceContext.eType = "e"\n// Don\'t pass in EnforceContext,the default is r,p,e,m\ne.Enforce("alice", "data2", "read")     // true\n// pass in EnforceContext\ne.Enforce(enforceContext, {Age: 70}, "/data1", "read")      //false\ne.Enforce(enforceContext, {Age: 30}, "/data1", "read")      //true\n'))),(0,i.kt)(f,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2, p2, etc..\nEnforceContext enforceContext = new EnforceContext("2");\n// You can also specify a certain type individually\nenforceContext.seteType("e");\n// Don\'t pass in EnforceContext, the default is r, p, e, m\ne.enforce("alice", "data2", "read");  // true\n// Pass in EnforceContext\n// TestEvalRule is located in https://github.com/casbin/jcasbin/blob/master/src/test/java/org/casbin/jcasbin/main/AbacAPIUnitTest.java#L56\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 70), "/data1", "read"); // false\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 30), "/data1", "read"); // true\n')))),(0,i.kt)("h3",{id:"special-grammer"},"Special Grammer"),(0,i.kt)("p",null,"You could also use ",(0,i.kt)("inlineCode",{parentName:"p"},"in"),", the only operator with a text name. This operator checks the right-hand side array to see if it contains a value that is equal to the left-side value. Equality is determined by the use of the == operator, and this library doesn't check types between the values. Any two values, when cast to interface{}, and can still be checked for equality with == will act as expected. Note that you can use a parameter for the array, but it must be an ",(0,i.kt)("inlineCode",{parentName:"p"},"[]interface{}"),"."),(0,i.kt)("p",null,"Also refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/rbac_model_matcher_using_in_op.conf"},"rbac_model_matcher_using_in_op"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget2_model.conf"},"keyget2_model")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget_model.conf"},"keyget_model")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj\n...\n[matchers]\nm = r.sub.Name in (r.obj.Admins)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.Enforce(Sub{Name: "alice"}, Obj{Name: "a book", Admins: []interface{}{"alice", "bob"}})\n')),(0,i.kt)("h3",{id:"\ud45c\ud604\uc2dd-\ud3c9\uac00"},"\ud45c\ud604\uc2dd \ud3c9\uac00"),(0,i.kt)("p",null,"\uac01 \uc5b8\uc5b4\uc5d0 \uc788\ub294 \uc870\uac74\uc2dd \ud3c9\uac00\uae30\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc870\uac74\uc2dd \ud3c9\uac00\ub97c \uad6c\ud604\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc77c\uad00\ub41c PERM \uc5b8\uc5b4\ub97c \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \uac01 \uc5b8\uc5b4\uc640 \uc5f0\ub3d9\ud558\ub3c4\ub85d \ud558\uc600\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc778 \uacf5\ud1b5 \ubaa8\ub378 \ubb38\ubc95 \uc678\uc5d0\ub3c4, \uac01 \uc5b8\uc5b4 \ub9c8\ub2e4 \uac01\uac01\uc758 \ucd94\uac00 \uae30\ub2a5\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc54c\uc544\uc11c \uc801\uc808\ud788 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc624."),(0,i.kt)("p",null,"\ud604\uc7ac \uad6c\ud604\ub41c Casbin \ud45c\ud604\uc2dd \ud3c9\uac00\uae30 \uad6c\ud604\uccb4 \ubaa9\ub85d\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\uad6c\ud604\uccb4"),(0,i.kt)("th",{parentName:"tr",align:null},"\uc5b8\uc5b4"),(0,i.kt)("th",{parentName:"tr",align:null},"\ud45c\ud604\uc2dd \ud3c9\uac00"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Golang"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Knetic/govaluate"},"https://github.com/Knetic/govaluate"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Java"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/killme2008/aviator"},"https://github.com/killme2008/aviator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/donmccurdy/expression-eval"},"https://github.com/donmccurdy/expression-eval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PHP-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"PHP"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/symfony/expression-language"},"https://github.com/symfony/expression-language"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PyCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Python"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/danthedeckie/simpleeval"},"https://github.com/danthedeckie/simpleeval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin.NET"),(0,i.kt)("td",{parentName:"tr",align:null},"C#"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/davideicardi/DynamicExpresso"},"https://github.com/davideicardi/DynamicExpresso"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin4D"),(0,i.kt)("td",{parentName:"tr",align:null},"Delphi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"},"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-rs"),(0,i.kt)("td",{parentName:"tr",align:null},"Rust"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jonathandturner/rhai"},"https://github.com/jonathandturner/rhai"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-cpp"),(0,i.kt)("td",{parentName:"tr",align:null},"C++"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ArashPartow/exprtk"},"https://github.com/ArashPartow/exprtk"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you encounter performance issue about Casbin, it's probably caused by the low efficiency of the expression evaluator. Casbin\uc774\ub098 \ud45c\ud604\uc2dd \ud3c9\uac00\uae30\uc758 \uac1c\uc120\uc744 \uc704\ud574 \uc774\uc288\ub97c \ub4f1\ub85d\ud574\uc8fc\uc2ed\uc2dc\uc624. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/benchmark"},"Benchmarks")," section for details."))))}h.isMDXComponent=!0}}]);