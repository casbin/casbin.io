"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"how-it-works",title:"\uc791\ub3d9 \uc6d0\ub9ac",description:"How Casbin works",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},i=void 0,l={unversionedId:"how-it-works",id:"how-it-works",title:"\uc791\ub3d9 \uc6d0\ub9ac",description:"How Casbin works",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/HowItWorks.mdx",sourceDirName:".",slug:"/how-it-works",permalink:"/ko/docs/how-it-works",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"\uc791\ub3d9 \uc6d0\ub9ac",description:"How Casbin works",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},sidebar:"docs",previous:{title:"\uc2dc\uc791\ud558\uae30",permalink:"/ko/docs/get-started"},next:{title:"\ud29c\ud1a0\ub9ac\uc5bc",permalink:"/ko/docs/tutorials"}},s={},c=[{value:"Request",id:"request",level:3},{value:"Policy",id:"policy",level:3},{value:"Matcher",id:"matcher",level:3},{value:"Effect",id:"effect",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casbin\uc758 \uc811\uadfc \uc81c\uc5b4 \ubaa8\ub378\uc740 ",(0,a.kt)("strong",{parentName:"p"},"PERM \uba54\ud0c0 \ubaa8\ub378 (Policy, Effect, Request, Matchers)")," \ud615\uc2dd\uc73c\ub85c \ucd94\uc0c1\ud654\ub418\uc5b4 CONF \ud30c\uc77c\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud504\ub85c\uc81d\ud2b8\uc758 \uad8c\ud55c \ubd80\uc5ec \uba54\ucee4\ub2c8\uc998\uc744 \uc804\ud658\ud558\uac70\ub098 \ud655\uc7a5\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e8\uc9c0 Conf \uc124\uc815 \ud30c\uc77c\uc744 \ubcc0\uacbd\ud558\ub294 \uac83\uc73c\ub85c \uac00\ub2a5\ud569\ub2c8\ub2e4. \uac00\uc6a9\ud55c \ubaa8\ub378\uc744 \uacb0\ud569\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \ud544\uc694\uc5d0 \ub9de\ub294 \uc811\uadfc \uc81c\uc5b4 \ubaa8\ub378\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. For example, you can combine RBAC roles and ABAC attributes together inside one model and share one set of policy rules."),(0,a.kt)("p",null,"The PERM model is composed of four foundations (Policy, Effect, Request, Matchers) describing the relationship between resources and users."),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("p",null,"Define the request parameters. A basic request is a tuple object, requiring at least a subject (accessed entity), object (accessed resource) and action (access method)"),(0,a.kt)("p",null,"For instance, a request definition may look like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"r={sub,obj,act}")),(0,a.kt)("p",null,"It actually defines the parameter name and order which we should provide for access control matching function."),(0,a.kt)("h3",{id:"policy"},"Policy"),(0,a.kt)("p",null,"Define the model of the access strategy. In fact, it defines the name and order of the fields in the Policy rule document."),(0,a.kt)("p",null,"For instance: ",(0,a.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act, eft}")),(0,a.kt)("p",null,"Note: If eft (policy result) is not defined, then the result field in the policy file will not be read, and the matching policy result will be allowed by default."),(0,a.kt)("h3",{id:"matcher"},"Matcher"),(0,a.kt)("p",null,"Matching rules of Request and Policy."),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p.obj")," This simple and common matching rule means that if the requested parameters (entities, resources, and methods) are equal, that is, if they can be found in the policy, then the policy result (",(0,a.kt)("inlineCode",{parentName:"p"},"p.eft"),") is returned. The result of the strategy will be saved in ",(0,a.kt)("inlineCode",{parentName:"p"},"p.eft"),"."),(0,a.kt)("h3",{id:"effect"},"Effect"),(0,a.kt)("p",null,"It can be understood as a model in which a logical combination judgment is performed again on the matching results of Matchers."),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"e = some(where(p.eft == allow))")),(0,a.kt)("p",null,"This sentence means that if the matching strategy result p.eft has the result of (some) allow, then the final result is true"),(0,a.kt)("p",null,"Let's look at another example: ",(0,a.kt)("inlineCode",{parentName:"p"},"e = some(where (p.eft == allow)) && !some(where (p.eft == deny))")," The logical meaning of this example combination is: if there is a strategy that matches the result of allow and no strategy that matches the result of deny, the result is true. In other words, it is true when the matching strategies are all allow, if there is any deny, both are false (more simply, when allow and deny exist at the same time, deny takes precedence)"),(0,a.kt)("p",null,"The most basic and simplest model in Casbin is ACL. ACL's model CONF is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Request \uc815\uc758\n[request_definition]\nr = sub, obj, act\n\n# Policy \uc815\uc758\n[policy_definition]\np = sub, obj, act\n\n# Policy effect (\ud5c8\uc6a9/\uac70\ubd80)\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# \uc870\uac74\uc2dd\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 ACL \ubaa8\ub378\uc758 \uc815\ucc45(Policy) \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\n")),(0,a.kt)("p",null,"\uc774\uac83\uc740 \ub2e4\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"alice\ub294 data1\uc5d0 \ub300\ud574 read \ud560 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},"bob\uc740 data2\uc5d0 \ub300\ud574 write \ud560 \uc218 \uc788\uc74c")),(0,a.kt)("p",null,"\uac01 \uc904\uc758 \ub05d\uc5d0 '","\\","'\ub97c \ubd99\uc5ec\uc11c \uc5ec\ub7ec \uc904\ub85c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# \uc870\uac74\uc2dd\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\ \n  && r.act == p.act\n")),(0,a.kt)("p",null,"Furthermore, if you are using ABAC,  you can try operator ",(0,a.kt)("inlineCode",{parentName:"p"},"in")," like the following in Casbin ",(0,a.kt)("strong",{parentName:"p"},"golang")," edition (jCasbin and Node-Casbin are not supported yet):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# \uc870\uac74\uc2dd\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,a.kt)("p",null,"But you ",(0,a.kt)("strong",{parentName:"p"},"SHOULD")," make sure that the length of the array is ",(0,a.kt)("strong",{parentName:"p"},"MORE")," than ",(0,a.kt)("strong",{parentName:"p"},"1"),", otherwise there will cause it to panic."),(0,a.kt)("p",null,"\ub354 \ub9ce\uc740 \uc5f0\uc0b0\uc790\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\ub824\uba74 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"govaluate"),"\ub97c \ucc38\uc870\ud558\uc138\uc694."))}u.isMDXComponent=!0}}]);