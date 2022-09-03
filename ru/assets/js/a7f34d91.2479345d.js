"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5526],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=d(a),N=r,g=o["".concat(m,".").concat(N)]||o[N]||u[N]||l;return a?n.createElement(g,p(p({ref:e},k),{},{components:a})):n.createElement(g,p({ref:e},k))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},9511:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},p=void 0,i={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/ru/docs/benchmark",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},sidebar:"docs",previous:{title:"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c",permalink:"/ru/docs/multi-threading"},next:{title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",permalink:"/ru/docs/performance"}},m={},d=[],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},u=k("Tabs"),o=k("TabItem"),N={toc:d};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(o,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043f\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),". \u0418\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,r.kt)("p",null,"\u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0438\u0434\u0435\u0442 \u0442\u0435\u0441\u0442 -bench=. -\u0431\u0435\u043d\u0447\u043c")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforce()")," \u0432\u044b\u0437\u043e\u0432, ms = millisecond, KB = \u043a\u0438\u043b\u043e\u0431\u0430\u0439\u0442):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u043c\u0441/\u043e\u043f)"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,r.kt)("td",{parentName:"tr",align:null},"5.649")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,r.kt)("td",{parentName:"tr",align:null},"7.522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 \u043f\u0440\u0430\u0432\u0438\u043b (1000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 100 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,r.kt)("td",{parentName:"tr",align:null},"80.620")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u0441\u0440\u0435\u0434\u043d\u0438\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 \u043f\u0440\u0430\u0432\u0438\u043b (10000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 1000 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,r.kt)("td",{parentName:"tr",align:null},"765.152")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u0431\u043e\u043b\u044c\u0448\u043e\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 110000 (100000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 10000 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,r.kt)("td",{parentName:"tr",align:null},"7,606")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0440\u043e\u043b\u044f\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,r.kt)("td",{parentName:"tr",align:null},"7.906")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c, 2 \u0434\u043e\u043c\u0435\u043d\u0430)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,r.kt)("td",{parentName:"tr",align:null},"10.755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0410\u0414\u0410\u0422"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u043f\u0440\u0430\u0432\u0438\u043b (0 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,r.kt)("td",{parentName:"tr",align:null},"2.328")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (3 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,r.kt)("td",{parentName:"tr",align:null},"91.774")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,r.kt)("td",{parentName:"tr",align:null},"8.370")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"),(0,r.kt)("td",{parentName:"tr",align:null},"9 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,r.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,r.kt)(o,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"CPP Casbin")," \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,r.kt)("inlineCode",{parentName:"a"},"\u0442\u0435\u0441\u0442\u0430/\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438"))," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433\u0430 Google"),". \u0418\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 \u044f\u0434\u0440\u0430, 4 \u043f\u043e\u0442\u043e\u043a\u0430\n")),(0,r.kt)("p",null,"\u0412\u043e\u0442 \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," , \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," (op = ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," \u0432\u044b\u0437\u043e\u0432, \u043c\u0441 = \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u043c\u0441/\u043e\u043f)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 \u043f\u0440\u0430\u0432\u0438\u043b (1000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 100 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u0441\u0440\u0435\u0434\u043d\u0438\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 \u043f\u0440\u0430\u0432\u0438\u043b (10000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 1000 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u0431\u043e\u043b\u044c\u0448\u043e\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 110000 (100000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 10000 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"21.450")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0440\u043e\u043b\u044f\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c, 2 \u0434\u043e\u043c\u0435\u043d\u0430)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.041")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0410\u0414\u0410\u0422"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u043f\u0440\u0430\u0432\u0438\u043b (0 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (3 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"),(0,r.kt)("td",{parentName:"tr",align:null},"9 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,r.kt)(o,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin's")," \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043f\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044e \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". The testbed was a Ubuntu VM with the CPU:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 \u043f\u043e\u0442\u043e\u043a\u043e\u0432\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," \u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c (op = ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," \u0432\u044b\u0437\u043e\u0432, ms = millisecond):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u043c\u0441/\u043e\u043f)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 \u043f\u0440\u0430\u0432\u0438\u043b (1000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 100 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u0441\u0440\u0435\u0434\u043d\u0438\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 \u043f\u0440\u0430\u0432\u0438\u043b (10000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 1000 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u0431\u043e\u043b\u044c\u0448\u043e\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 110000 (100000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 10000 \u0440\u043e\u043b\u0435\u0439)"),(0,r.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0440\u043e\u043b\u044f\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c, 2 \u0434\u043e\u043c\u0435\u043d\u0430)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0410\u0414\u0410\u0422"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u043f\u0440\u0430\u0432\u0438\u043b (0 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (3 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"),(0,r.kt)("td",{parentName:"tr",align:null},"9 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}g.isMDXComponent=!0}}]);