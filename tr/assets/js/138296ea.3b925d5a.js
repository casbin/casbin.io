"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8145],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>N});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var u=n.createContext({}),m=function(t){var a=n.useContext(u),e=a;return t&&(e="function"==typeof t?t(a):k(k({},a),t)),e},p=function(t){var a=m(t.components);return n.createElement(u.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},o=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),o=m(e),N=l,c=o["".concat(u,".").concat(N)]||o[N]||d[N]||r;return e?n.createElement(c,k(k({ref:a},p),{},{components:e})):n.createElement(c,k({ref:a},p))}));function N(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,k=new Array(r);k[0]=o;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,k[1]=i;for(var m=2;m<r;m++)k[m]=e[m];return n.createElement.apply(null,k)}return n.createElement.apply(null,e)}o.displayName="MDXCreateElement"},7735:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>u,contentTitle:()=>k,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=e(7462),l=(e(7294),e(3905));const r={id:"benchmark",title:"Benchmarks",description:"Casbin'de Politika Uygulaman\u0131n Ek Y\xfck\xfc",keywords:["benchmarks","overhead"],authors:["hsluoyz"]},k=void 0,i={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"Casbin'de Politika Uygulaman\u0131n Ek Y\xfck\xfc",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/tr/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"Casbin'de Politika Uygulaman\u0131n Ek Y\xfck\xfc",keywords:["benchmarks","overhead"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Multi-threading",permalink:"/tr/docs/multi-threading"},next:{title:"Performance Optimization",permalink:"/tr/docs/performance"}},u={},m=[{value:"Benchmark izleme",id:"benchmark-izleme",level:2}],p=t=>function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},d=p("Tabs"),o=p("TabItem"),N={toc:m};function c(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},N,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(o,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Politika uygulaman\u0131n ek y\xfck\xfc, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model","_","b","_","test.go")," dosyas\u0131nda referans noktas\u0131 olarak belirlenmi\u015ftir. Test ortam\u0131 yap\u0131land\u0131rmas\u0131 \u015fu \u015fekildedir:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,l.kt)("p",null,"A\u015fa\u011f\u0131da, ",(0,l.kt)("inlineCode",{parentName:"p"},"go test -bench=.")," komutunu \xe7al\u0131\u015ft\u0131rarak elde edilen referans noktas\u0131 sonu\xe7lar\u0131 bulunmaktad\u0131r. ",(0,l.kt)("inlineCode",{parentName:"p"},"-benchmem")," (op = bir ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforce()")," \xe7a\u011fr\u0131s\u0131, ms = milisaniye, KB = kilobayt):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test senaryosu"),(0,l.kt)("th",{parentName:"tr",align:null},"Kural boyutu"),(0,l.kt)("th",{parentName:"tr",align:null},"Zaman ek y\xfck\xfc (ms/op)"),(0,l.kt)("th",{parentName:"tr",align:null},"Bellek ek y\xfck\xfc (KB)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 kural (2 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,l.kt)("td",{parentName:"tr",align:null},"5.649")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,l.kt)("td",{parentName:"tr",align:null},"7.522")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (k\xfc\xe7\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 kurallar (1000 kullan\u0131c\u0131, 100 roller)"),(0,l.kt)("td",{parentName:"tr",align:null},"0,164309"),(0,l.kt)("td",{parentName:"tr",align:null},"80,620")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (orta)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 kurallar (10000 kullan\u0131c\u0131, 1000 roller)"),(0,l.kt)("td",{parentName:"tr",align:null},"2,258262"),(0,l.kt)("td",{parentName:"tr",align:null},"765,152")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (b\xfcy\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 kurallar (100000 kullan\u0131c\u0131, 10000 roller)"),(0,l.kt)("td",{parentName:"tr",align:null},"23,916776"),(0,l.kt)("td",{parentName:"tr",align:null},"7.606")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kaynak rolleri ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kural (2 kullan\u0131c\u0131, 2 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0,021146"),(0,l.kt)("td",{parentName:"tr",align:null},"7,906")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alanlar/kirac\u0131lar ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kural (2 kullan\u0131c\u0131, 1 rol, 2 alan)"),(0,l.kt)("td",{parentName:"tr",align:null},"0,032696"),(0,l.kt)("td",{parentName:"tr",align:null},"10,755")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 kural (0 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,l.kt)("td",{parentName:"tr",align:null},"2.328")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (3 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,l.kt)("td",{parentName:"tr",align:null},"91.774")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reddet-\xfcst\xfcnl\xfck"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,l.kt)("td",{parentName:"tr",align:null},"8.370")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xd6ncelik"),(0,l.kt)("td",{parentName:"tr",align:null},"9 kural (2 kullan\u0131c\u0131, 2 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,l.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,l.kt)(o,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin"},"Pycasbin")," i\xe7indeki politika uygulama ek y\xfck\xfc, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/tree/master/tests/benchmarks"},(0,l.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," dizininde kar\u015f\u0131la\u015ft\u0131rmal\u0131 olarak \xf6l\xe7\xfclm\xfc\u015ft\xfcr. Test ortam\u0131 yap\u0131land\u0131rmas\u0131 \u015fu \u015fekildedir:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz (Runned by Github actions)\nplatform linux -- Python 3.11.4, pytest-7.0.1, pluggy-1.2.0\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," \xe7al\u0131\u015ft\u0131r\u0131larak elde edilen kar\u015f\u0131la\u015ft\u0131rmal\u0131 sonu\xe7lar a\u015fa\u011f\u0131da verilmi\u015ftir (op = bir ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \xe7a\u011fr\u0131s\u0131, ms = milisaniye):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test durumu"),(0,l.kt)("th",{parentName:"tr",align:null},"Kural boyutu"),(0,l.kt)("th",{parentName:"tr",align:null},"Zaman ek y\xfck\xfc (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 kural (2 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.067691")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.080045")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (k\xfc\xe7\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 kural (1000 kullan\u0131c\u0131, 100 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.853590")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (orta)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 kurallar (10000 kullan\u0131c\u0131, 1000 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"6,986668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (b\xfcy\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 kurallar (100000 kullan\u0131c\u0131, 10000 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"77,922851")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kaynak rolleri ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kurallar (2 kullan\u0131c\u0131, 2 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0,106090")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alanlar/kirac\u0131lar ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kural (2 kullan\u0131c\u0131, 1 rol, 2 alan)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.103628")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 kural (0 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.053213")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (3 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reddet-\xfczerine"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xd6ncelik"),(0,l.kt)("td",{parentName:"tr",align:null},"9 kural (2 kullan\u0131c\u0131, 2 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0,084684"))))),(0,l.kt)(o,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," i\xe7indeki politika uygulama ek y\xfck\xfc, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google'nin k\u0131yaslama arac\u0131")," kullan\u0131larak ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,l.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," dizini i\xe7inde k\u0131yaslanm\u0131\u015ft\u0131r. Test ortam\u0131 yap\u0131land\u0131rmas\u0131 \u015fu \u015fekildedir:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 cores, 4 threads\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Release")," yap\u0131land\u0131rmas\u0131nda in\u015fa edilen ",(0,l.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," hedefini \xe7al\u0131\u015ft\u0131rarak elde edilen k\u0131yaslama sonu\xe7lar\u0131 a\u015fa\u011f\u0131da verilmi\u015ftir (op = bir ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \xe7a\u011fr\u0131s\u0131, ms = milisaniye):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test durumu"),(0,l.kt)("th",{parentName:"tr",align:null},"Kural boyutu"),(0,l.kt)("th",{parentName:"tr",align:null},"Zaman ek y\xfck\xfc (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 kural (2 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (k\xfc\xe7\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 kural (1000 kullan\u0131c\u0131, 100 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (orta)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 kurallar (10000 kullan\u0131c\u0131, 1000 roller)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.113")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (b\xfcy\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 kurallar (100000 kullan\u0131c\u0131, 10000 roller)"),(0,l.kt)("td",{parentName:"tr",align:null},"21.450")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kaynak rolleri ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kurallar (2 kullan\u0131c\u0131, 2 roller)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alanlar/kirac\u0131lar ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kurallar (2 kullan\u0131c\u0131, 1 rol, 2 alan)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.041")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 kural (0 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (3 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reddet-ge\xe7ersiz k\u0131l"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xd6ncelik"),(0,l.kt)("td",{parentName:"tr",align:null},"9 kural (2 kullan\u0131c\u0131, 2 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0,035"))))),(0,l.kt)(o,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin")," i\xe7indeki politika uygulama ek y\xfck\xfc, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua")," i\xe7inde kar\u015f\u0131la\u015ft\u0131rmal\u0131 olarak \xf6l\xe7\xfclm\xfc\u015ft\xfcr. Test ortam\u0131 yap\u0131land\u0131rmas\u0131 \u015fu \u015fekildedir:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 Threads\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," komutunu \xe7al\u0131\u015ft\u0131rarak elde edilen kar\u015f\u0131la\u015ft\u0131rmal\u0131 sonu\xe7lar a\u015fa\u011f\u0131daki gibidir (op = bir ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \xe7a\u011fr\u0131s\u0131, ms = milisaniye):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test durumu"),(0,l.kt)("th",{parentName:"tr",align:null},"Kural boyutu"),(0,l.kt)("th",{parentName:"tr",align:null},"Zaman ek y\xfck\xfc (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 kural (2 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (k\xfc\xe7\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 kural (1000 kullan\u0131c\u0131, 100 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (orta)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 kural (10000 kullan\u0131c\u0131, 1000 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (b\xfcy\xfck)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 kurallar (100000 kullan\u0131c\u0131, 10000 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kaynak rolleri ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kurallar (2 kullan\u0131c\u0131, 2 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alanlar/kirac\u0131lar ile RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kurallar (2 kullan\u0131c\u0131, 1 rol, 2 alan)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 kural (0 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 kural (3 kullan\u0131c\u0131)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reddet-\xfczerine yaz"),(0,l.kt)("td",{parentName:"tr",align:null},"6 kural (2 kullan\u0131c\u0131, 1 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xd6ncelik"),(0,l.kt)("td",{parentName:"tr",align:null},"9 kural (2 kullan\u0131c\u0131, 2 rol)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1437")))))),(0,l.kt)("h2",{id:"benchmark-izleme"},"Benchmark izleme"),(0,l.kt)("p",null,"A\u015fa\u011f\u0131daki g\xf6m\xfcl\xfc web sayfas\u0131nda, her commit i\xe7in Casbin'in performans de\u011fi\u015fikliklerini g\xf6rebilirsiniz."),(0,l.kt)("p",null,"Ayr\u0131ca do\u011frudan \u015fu adresten inceleyebilirsiniz: ",(0,l.kt)("a",{parentName:"p",href:"https://v1.casbin.org/casbin/benchmark-monitoring"},"https://v1.casbin.org/casbin/benchmark-monitoring")),(0,l.kt)("div",{style:{margin:"(0 auto)",transform:"scale(0.85)",width:"1000px",boxShadow:"0 0 50px grey",borderRadius:"20px"}},(0,l.kt)("iframe",{src:"https://v1.casbin.org/casbin/benchmark-monitoring",style:{width:"1000px",height:"700px",borderRadius:"20px"}})))}c.isMDXComponent=!0}}]);