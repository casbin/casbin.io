"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[147],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(a),s=r,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7202:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"policy-storage",title:"Policy\u7684\u5b58\u50a8",description:"Policy\u7684\u5b58\u50a8",keywords:["\u7b56\u7565\u7684\u5b58\u50a8"],authors:["hsluoyz"]},i=void 0,o={unversionedId:"policy-storage",id:"policy-storage",title:"Policy\u7684\u5b58\u50a8",description:"Policy\u7684\u5b58\u50a8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/zh/docs/policy-storage",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"Policy\u7684\u5b58\u50a8",description:"Policy\u7684\u5b58\u50a8",keywords:["\u7b56\u7565\u7684\u5b58\u50a8"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Model \u7684\u5b58\u50a8",permalink:"/zh/docs/model-storage"},next:{title:"\u7b56\u7565\u5b50\u96c6\u52a0\u8f7d",permalink:"/zh/docs/policy-subset-loading"}},p={},d=[{value:"Loading policy from a .CSV file",id:"loading-policy-from-a-csv-file",level:2},{value:"\u9002\u914d\u5668 API",id:"\u9002\u914d\u5668-api",level:2},{value:"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f",id:"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f",level:2},{value:"\u9002\u914d\u5668\u8be6\u60c5",id:"\u9002\u914d\u5668\u8be6\u60c5",level:2}],c={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728Casbin\uff0c\u7b56\u7565\u5b58\u50a8\u4f5c\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"\u9002\u914d\u5668")," \u6765\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"loading-policy-from-a-csv-file"},"Loading policy from a .CSV file"),(0,r.kt)("p",null,"\u8fd9\u662f\u4f7f\u7528Casbin\u7684\u6700\u5e38\u89c1\u65b9\u5f0f\u3002 It is easy to understand for beginners and convenient for sharing when you ask the Casbin team for help."),(0,r.kt)("p",null,"The content of the ",(0,r.kt)("inlineCode",{parentName:"p"},".CSV")," file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"examples/rbac_policy.csv")," is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your file contains commas, you should wrap them in double quotes. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, "data1,data2", read    --correct\np, alice, data1,data2, read        --incorrect (the whole phrase "data1,data2" should be wrapped in double quotes)\n')),(0,r.kt)("p",{parentName:"admonition"},"If your file contains commas and double quotes, you should enclose the field in double quotes and double any embedded double quotes."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, data, "r.act in (""get"", ""post"")"        --correct\np, alice, data, "r.act in ("get", "post")"            --incorrect (you should use "" to escape "")\n')),(0,r.kt)("p",{parentName:"admonition"},"\u76f8\u5173\u95ee\u9898: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"issue#886"))),(0,r.kt)("h2",{id:"\u9002\u914d\u5668-api"},"\u9002\u914d\u5668 API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c\u8bbe\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u6301\u4e45\u5c42\u4e2d\u52a0\u8f7dpolicy\u89c4\u5219")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SavePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c\u8bbe\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06policy\u89c4\u5219\u4fdd\u5b58\u81f3\u6301\u4e45\u5c42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5355\u6761policy\u89c4\u5219\u81f3\u6301\u4e45\u5c42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u6301\u4e45\u5c42\u5220\u9664\u5355\u6761policy\u89c4\u5219")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveFilteredPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u6301\u4e45\u5c42\u5220\u9664\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684policy\u89c4\u5219")))),(0,r.kt)("h2",{id:"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f"},"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your policy file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Corresponding database structure (such as MySQL)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"ptype"),(0,r.kt)("th",{parentName:"tr",align:null},"v0"),(0,r.kt)("th",{parentName:"tr",align:null},"v1"),(0,r.kt)("th",{parentName:"tr",align:null},"v2"),(0,r.kt)("th",{parentName:"tr",align:null},"v3"),(0,r.kt)("th",{parentName:"tr",align:null},"v4"),(0,r.kt)("th",{parentName:"tr",align:null},"v5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bfb"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u5199"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Meaning of each column")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id"),": The primary key in the database. It does not exist as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin policy"),". The way it is generated depends on the specific adapter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ptype"),": \u5b83\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g2"),", \u7b49\u7b49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v0-v5"),": The column names have no specific meaning and correspond to the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy csv")," from left to right. \u5217\u6570\u53d6\u51b3\u4e8e\u60a8\u81ea\u5df1\u5b9a\u4e49\u7684\u6570\u91cf\u3002 In theory, there can be an infinite number of columns, but generally only ",(0,r.kt)("strong",{parentName:"p"},"6")," columns are implemented in the adapter. If this is not enough for you, please submit an issue to the corresponding adapter repository."))),(0,r.kt)("h2",{id:"\u9002\u914d\u5668\u8be6\u60c5"},"\u9002\u914d\u5668\u8be6\u60c5"),(0,r.kt)("p",null,"For more details about the use of the adapter API and database table structure design, please visit: ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}m.isMDXComponent=!0}}]);