"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"dispatchers",title:"Dispatchers",description:"Dispatcher provide a way to synchronize incremental changes of policy",keywords:["dispatcher"],authors:["dovics"]},o=void 0,s={unversionedId:"dispatchers",id:"dispatchers",title:"Dispatchers",description:"Dispatcher provide a way to synchronize incremental changes of policy",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Dispatchers.mdx",sourceDirName:".",slug:"/dispatchers",permalink:"/ko/docs/dispatchers",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"dispatchers",title:"Dispatchers",description:"Dispatcher provide a way to synchronize incremental changes of policy",keywords:["dispatcher"],authors:["dovics"]},sidebar:"docs",previous:{title:"\uac10\uc2dc\uc790",permalink:"/ko/docs/watchers"},next:{title:"\uc5ed\ud560(Role) \uad00\ub9ac\uc790",permalink:"/ko/docs/role-managers"}},c={},l=[{value:"DistributedEnforcer",id:"distributedenforcer",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("Tabs"),u=p("TabItem"),h={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dispatcher provide a way to synchronize incremental changes of policy. It should be based on consistency algorithms such as raft to ensure the consistency of all enforcer instances. Through dispatcher users can easily establish distributed clusters."),(0,a.kt)("p",null,"The dispatcher's method is divided into two parts. The first is the method combined with casbin. These methods should be called inside casbin. Users can use the more complete api provided by casbin itself."),(0,a.kt)("p",null,"The other part is the method defined by the dispatcher itself, including the dispatcher initialization method, and different functions provided by different algorithms, such as dynamic membership, config changes etc."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"we hope dispatcher just ensure the consistency of Casbin enforcer at runtime. So if the policy is inconsistent when initialization, the dispatcher will not work properly. Users need to ensure that the state of all instances is consistent before using dispatcher.")),(0,a.kt)("p",null,"A complete list of Casbin dispatchers is provided as below. Any 3rd-party contribution on a new dispatcher is welcomed, please inform us and we will put it in this list:)"),(0,a.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Dispatcher"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/hraft-dispatcher"},"Hashicorp Raft Dispatcher")),(0,a.kt)("td",{parentName:"tr",align:null},"raft"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Dispatcher based on ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/hashicorp/raft"},"hashicorp/raft"))))))),(0,a.kt)("h3",{id:"distributedenforcer"},"DistributedEnforcer"),(0,a.kt)("p",null,"DistributedEnforcer wraps SyncedEnforcer for dispatcher."),(0,a.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewDistributedEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n')))))}m.isMDXComponent=!0}}]);