"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"dispatchers",title:"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u044b",description:"Dispatchers provide a way to synchronize incremental changes of policy.",keywords:["dispatcher"],authors:["dovics"]},s=void 0,o={unversionedId:"dispatchers",id:"dispatchers",title:"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u044b",description:"Dispatchers provide a way to synchronize incremental changes of policy.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Dispatchers.mdx",sourceDirName:".",slug:"/dispatchers",permalink:"/ru/docs/dispatchers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Dispatchers.mdx",tags:[],version:"current",frontMatter:{id:"dispatchers",title:"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u044b",description:"Dispatchers provide a way to synchronize incremental changes of policy.",keywords:["dispatcher"],authors:["dovics"]},sidebar:"docs",previous:{title:"\u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u0438",permalink:"/ru/docs/watchers"},next:{title:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0440\u043e\u043b\u0435\u0439",permalink:"/ru/docs/role-managers"}},c={},l=[{value:"DistributedEnforcer",id:"distributedenforcer",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("Tabs"),u=p("TabItem"),h={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dispatchers provide a way to synchronize incremental changes of policy. They should be based on consistency algorithms such as Raft to ensure the consistency of all enforcer instances. Through dispatchers, users can easily establish distributed clusters."),(0,a.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434 \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438. The first part is the method combined with Casbin. These methods should be called inside Casbin. Users can use the more complete API provided by Casbin itself."),(0,a.kt)("p",null,"The other part is the method defined by the dispatcher itself, including the dispatcher initialization method, and different functions provided by different algorithms, such as dynamic membership and config changes."),(0,a.kt)("p",null,"::note"),(0,a.kt)("p",null,"We hope dispatchers only ensure the consistency of the Casbin enforcer at runtime. So if the policy is inconsistent during initialization, the dispatchers will not work properly. Users need to ensure that the state of all instances is consistent before using dispatchers."),(0,a.kt)("p",null,":::"),(0,a.kt)("p",null,"A complete list of Casbin dispatchers is provided below. Any 3rd-party contributions on a new dispatcher are welcomed. Please inform us, and we will add it to this list."),(0,a.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,a.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/hraft-dispatcher"},"Hashicorp Raft Dispatcher")),(0,a.kt)("td",{parentName:"tr",align:null},"Raft"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"A dispatcher based on ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/hashicorp/raft"},"Hashicorp Raft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/KDKYG/casbin-dispatcher"},"KDKYG/casbin-dispatcher")),(0,a.kt)("td",{parentName:"tr",align:null},"Raft"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/KDKYG"},"@KDKYG")),(0,a.kt)("td",{parentName:"tr",align:null},"A dispatcher based on ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/hashicorp/raft"},"Hashicorp Raft"))))))),(0,a.kt)("h3",{id:"distributedenforcer"},"DistributedEnforcer"),(0,a.kt)("p",null,"DistributedEnforcer wraps SyncedEnforcer for the dispatcher."),(0,a.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewDistributedEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n')))))}m.isMDXComponent=!0}}]);