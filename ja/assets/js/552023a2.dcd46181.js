"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1898],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(r),m=n,b=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return r?a.createElement(b,o(o({ref:e},u),{},{components:r})):a.createElement(b,o({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5017:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const l={id:"cloud-native",title:"Cloud Native Middlewares",description:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30df\u30c9\u30eb\u30a6\u30a7\u30a2",keywords:["cloud native","authorization middleware","middlewares"],authors:["ErikQQY"]},o=void 0,i={unversionedId:"cloud-native",id:"cloud-native",title:"Cloud Native Middlewares",description:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30df\u30c9\u30eb\u30a6\u30a7\u30a2",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/CloudNative.mdx",sourceDirName:".",slug:"/cloud-native",permalink:"/ja/docs/cloud-native",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CloudNative.mdx",tags:[],version:"current",frontMatter:{id:"cloud-native",title:"Cloud Native Middlewares",description:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30df\u30c9\u30eb\u30a6\u30a7\u30a2",keywords:["cloud native","authorization middleware","middlewares"],authors:["ErikQQY"]},sidebar:"docs",previous:{title:"GraphQL Middlewares",permalink:"/ja/docs/graphql-middlewares"},next:{title:"API",permalink:"/ja/docs/category/api"}},p={},d=[{value:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},s=u("Tabs"),c=u("TabItem"),m={toc:d};function b(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"},"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,n.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8457\u8005"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/k8s-authz"},"k8s-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/"},"Kubernetes"),"\u306e\u305f\u3081\u306e\u8a8d\u53ef\u30df\u30c9\u30eb\u30a6\u30a7\u30a2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/envoy-authz"},"envoy-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://istio.io/"},"Istio"),"\u3068",(0,n.kt)("a",{parentName:"td",href:"https://envoyproxy.io/"},"Envoy"),"\u306e\u305f\u3081\u306e\u8a8d\u53ef\u30df\u30c9\u30eb\u30a6\u30a7\u30a2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/kubesphere-authz"},"kubesphere-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://kubesphere.io/"},"kubeSphere"),"\u306e\u305f\u3081\u306e\u8a8d\u53ef\u30df\u30c9\u30eb\u30a6\u30a7\u30a2"))))),(0,n.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8457\u8005"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"ODPF Shield")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/odpf"},"Open Data Platform")),(0,n.kt)("td",{parentName:"tr",align:null},"ODPF Shield\u306f\u3001\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u8a8d\u53ef\u3092\u8a8d\u8b58\u3059\u308b\u30ea\u30d0\u30fc\u30b9\u30d7\u30ed\u30ad\u30b7\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002")))))))}b.isMDXComponent=!0}}]);