"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4337],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),d=p(a),k=r,N=d["".concat(u,".").concat(k)]||d[k]||o[k]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3766:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"benchmark",title:"Benchmarks",description:"Overhead of Policy Enforcement in Casbin",keywords:["benchmarks","overhead"],authors:["hsluoyz"]},i=void 0,m={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"Overhead of Policy Enforcement in Casbin",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/ko/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"Overhead of Policy Enforcement in Casbin",keywords:["benchmarks","overhead"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"\uba40\ud2f0 \uc2a4\ub808\ub529",permalink:"/ko/docs/multi-threading"},next:{title:"Performance Optimization",permalink:"/ko/docs/performance"}},u={},p=[{value:"Benchmark monitoring",id:"benchmark-monitoring",level:2}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},o=s("Tabs"),d=s("TabItem"),k={toc:p};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The overhead of policy enforcement has been benchmarked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),". The testbed configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,r.kt)("p",null,"Following are the benchmarking results obtained by running ",(0,r.kt)("inlineCode",{parentName:"p"},"go test -bench=. -benchmem")," (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforce()")," call, ms = millisecond, KB = kilobytes):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test case"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,r.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,r.kt)("td",{parentName:"tr",align:null},"5.649")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,r.kt)("td",{parentName:"tr",align:null},"7.522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,r.kt)("td",{parentName:"tr",align:null},"80.620")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,r.kt)("td",{parentName:"tr",align:null},"765.152")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,r.kt)("td",{parentName:"tr",align:null},"7,606")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub9ac\uc18c\uc2a4 \uc5ed\ud560"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,r.kt)("td",{parentName:"tr",align:null},"7.906")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,r.kt)("td",{parentName:"tr",align:null},"10.755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,r.kt)("td",{parentName:"tr",align:null},"2.328")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,r.kt)("td",{parentName:"tr",align:null},"91.774")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uac70\ubd80(Deny) \uc6b0\uc120"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,r.kt)("td",{parentName:"tr",align:null},"8.370")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,r.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("p",null,"The overhead of policy enforcement in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin"},"Pycasbin")," has been benchmarked in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/tree/master/tests/benchmarks"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," directory. The testbed configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz (Runned by Github actions)\nplatform linux -- Python 3.11.4, pytest-7.0.1, pluggy-1.2.0\n")),(0,r.kt)("p",null,"Here are the benchmarking results obtained from executing ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test case"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,r.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.067691")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.080045")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.853590")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"6.986668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"77.922851")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub9ac\uc18c\uc2a4 \uc5ed\ud560"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.106090")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.103628")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.053213")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uac70\ubd80(Deny) \uc6b0\uc120"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.084684"))))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,"The overhead of policy enforcement in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," has been benchmarked in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," directory using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google's benchmarking tool"),". The testbed configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 cores, 4 threads\n")),(0,r.kt)("p",null,"Here are the benchmarking results obtained from executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," target built in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," configuration (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test case"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,r.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"21.450")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub9ac\uc18c\uc2a4 \uc5ed\ud560"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.041")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uac70\ubd80(Deny) \uc6b0\uc120"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,r.kt)(d,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,r.kt)("p",null,"The overhead of policy enforcement in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin")," has been benchmarked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". The testbed configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 Threads\n")),(0,r.kt)("p",null,"Here are the benchmarking results obtained by running ",(0,r.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test case"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,r.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Priority"),(0,r.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1437")))))),(0,r.kt)("h2",{id:"benchmark-monitoring"},"Benchmark monitoring"),(0,r.kt)("p",null,"In the embedded web page below, you can see the performance changes of Casbin for each commit."),(0,r.kt)("p",null,"You can also directly browse it at: ",(0,r.kt)("a",{parentName:"p",href:"https://v1.casbin.org/casbin/benchmark-monitoring"},"https://v1.casbin.org/casbin/benchmark-monitoring")),(0,r.kt)("div",{style:{margin:"(0 auto)",transform:"scale(0.85)",width:"1000px",boxShadow:"0 0 50px grey",borderRadius:"20px"}},(0,r.kt)("iframe",{src:"https://v1.casbin.org/casbin/benchmark-monitoring",style:{width:"1000px",height:"700px",borderRadius:"20px"}})))}N.isMDXComponent=!0}}]);