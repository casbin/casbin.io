"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=u(n),g=r,N=k["".concat(m,".").concat(g)]||k[g]||d[g]||l;return n?a.createElement(N,i(i({ref:t},o),{},{components:n})):a.createElement(N,i({ref:t},o))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"],authors:["hsluoyz"]},i=void 0,p={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/de/docs/benchmark",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Mehrfachfachen",permalink:"/de/docs/multi-threading"},next:{title:"Leistungsoptimierung",permalink:"/de/docs/performance"}},m={},u=[],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=o("Tabs"),k=o("TabItem"),g={toc:u};function N(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Der Overhead der Durchsetzung der Richtlinien ist in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go")," verrechnet. Das Testbed ist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,r.kt)("p",null,"Das Benchmarking-Ergebnis von ",(0,r.kt)("inlineCode",{parentName:"p"},"geht Test -bench=. -benchmem")," ist wie folgt (op = ein ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforce()")," Aufruf, ms = Millisekunden, KB = Kilo Bytes):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Testfall"),(0,r.kt)("th",{parentName:"tr",align:null},"Regelgr\xf6\xdfe"),(0,r.kt)("th",{parentName:"tr",align:null},"Zeit\xfcberschreitung (ms/op)"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 Regeln (2 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,r.kt)("td",{parentName:"tr",align:null},"5.649")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Regeln (2 Benutzer, 1 Rolle)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,r.kt)("td",{parentName:"tr",align:null},"7.522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (klein)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 Regeln (1000 Benutzer, 100 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,r.kt)("td",{parentName:"tr",align:null},"80.620")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 Regeln (10000 Benutzer, 1000 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,r.kt)("td",{parentName:"tr",align:null},"765.152")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (gro\xdf)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 Regeln (100000 Benutzer, 10000 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,r.kt)("td",{parentName:"tr",align:null},"7,606")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC mit Ressourcen-Rollen"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 2 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,r.kt)("td",{parentName:"tr",align:null},"7.906")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC mit Dom\xe4nen/Mandanten"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 1 Rolle, 2 Domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,r.kt)("td",{parentName:"tr",align:null},"10.755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 Regel (0 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,r.kt)("td",{parentName:"tr",align:null},"2.328")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ruhen"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Regeln (3 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,r.kt)("td",{parentName:"tr",align:null},"91.774")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Verweigerung \xfcberschreiben"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 1 Rolle)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,r.kt)("td",{parentName:"tr",align:null},"8.370")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Priorit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:null},"9 Regeln (2 Benutzer, 2 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,r.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,r.kt)(k,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,"Der Overhead f\xfcr die Durchsetzung von Richtlinien von ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," wird in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,r.kt)("inlineCode",{parentName:"a"},"Tests/Benchmarks"))," mit Hilfe von ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"des Google-Benchmarking-Tools")," verglichen. Der Test f\xfcr diese Benchmarks ist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 Kerne, 4 Threads\n")),(0,r.kt)("p",null,"Hier ist das Benchmarking-Ergebnis der Ausf\xfchrung von ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," target in ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," Konfiguration (op = ein ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," Aufruf, ms = Millisekunden):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Testfall"),(0,r.kt)("th",{parentName:"tr",align:null},"Regelgr\xf6\xdfe"),(0,r.kt)("th",{parentName:"tr",align:null},"Zeit\xfcberschreitung (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 Regeln (2 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Regeln (2 Benutzer, 1 Rolle)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (klein)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 Regeln (1000 Benutzer, 100 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 Regeln (10000 Benutzer, 1000 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (gro\xdf)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 Regeln (100000 Benutzer, 10000 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"21.450")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC mit Ressourcen-Rollen"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 2 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC mit Dom\xe4nen/Mandanten"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 1 Rolle, 2 Domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.041")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 Regel (0 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"MN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ruhen"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Regeln (3 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"MN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Verweigerung \xfcberschreiben"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 1 Rolle)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Priorit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:null},"9 Regeln (2 Benutzer, 2 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,r.kt)(k,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin's")," Overhead of policy enforcement is benchmarked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". Das Testbed war ein Ubuntu VM mit der CPU:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Kerne, 12 Threads\n")),(0,r.kt)("p",null,"Das Benchmarking-Ergebnis von ",(0,r.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," ist wie folgt (op = ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = Millisekunden):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Testfall"),(0,r.kt)("th",{parentName:"tr",align:null},"Regelgr\xf6\xdfe"),(0,r.kt)("th",{parentName:"tr",align:null},"Zeit\xfcberschreitung (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 Regeln (2 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Regeln (2 Benutzer, 1 Rolle)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (klein)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 Regeln (1000 Benutzer, 100 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (Medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 Regeln (10000 Benutzer, 1000 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (gro\xdf)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 Regeln (100000 Benutzer, 10000 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC mit Ressourcen-Rollen"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 2 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC mit Dom\xe4nen/Mandanten"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 1 Rolle, 2 Domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 Regel (0 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ruhen"),(0,r.kt)("td",{parentName:"tr",align:null},"5 Regeln (3 Benutzer)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Verweigerung \xfcberschreiben"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Regeln (2 Benutzer, 1 Rolle)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Priorit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:null},"9 Regeln (2 Benutzer, 2 Rollen)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}N.isMDXComponent=!0}}]);