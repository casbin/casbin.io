"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"rbac-96",title:"RBAC \u043f\u0440\u043e\u0442\u0438\u0432 RBAC96",description:"The Difference Between Casbin RBAC and RBAC96",keywords:["RBAC96","Casbin RBAC"],authors:["kininaru"]},l=void 0,o={unversionedId:"rbac-96",id:"rbac-96",title:"RBAC \u043f\u0440\u043e\u0442\u0438\u0432 RBAC96",description:"The Difference Between Casbin RBAC and RBAC96",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/ru/docs/rbac-96",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"RBAC \u043f\u0440\u043e\u0442\u0438\u0432 RBAC96",description:"The Difference Between Casbin RBAC and RBAC96",keywords:["RBAC96","Casbin RBAC"],authors:["kininaru"]},sidebar:"docs",previous:{title:"RBAC with Conditions",permalink:"/ru/docs/rbac-with-conditions"},next:{title:"\u0410\u0414\u0410\u0422",permalink:"/ru/docs/abac"}},s={},p=[{value:"RBAC \u0438 RBAC96",id:"rbac-\u0438-rbac96",level:2},{value:"The Difference Between Casbin RBAC and RBAC96",id:"the-difference-between-casbin-rbac-and-rbac96",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rbac-\u0438-rbac96"},"RBAC \u0438 RBAC96"),(0,r.kt)("p",null,"In this document, we will compare Casbin RBAC with ",(0,r.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96"),"."),(0,r.kt)("p",null,"Casbin RBAC supports nearly all the features of RBAC96 and adds new features on top of that."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RBAC Version"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,r.kt)("td",{parentName:"tr",align:null},"Fully Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC0 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439 RBAC96. It clarifies the relationship between Users, Roles, and Permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,r.kt)("td",{parentName:"tr",align:null},"Fully Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC1 adds role hierarchies on top of RBAC0. This means that if ",(0,r.kt)("inlineCode",{parentName:"td"},"alice")," has ",(0,r.kt)("inlineCode",{parentName:"td"},"role1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"role1")," has ",(0,r.kt)("inlineCode",{parentName:"td"},"role2"),", then ",(0,r.kt)("inlineCode",{parentName:"td"},"alice")," will also have ",(0,r.kt)("inlineCode",{parentName:"td"},"role2")," and inherit its permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,r.kt)("td",{parentName:"tr",align:null},"Mutually Exclusive Handling Supported (",(0,r.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"like this"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC2 adds constraints on RBAC0. This allows RBAC2 to handle mutually exclusive policies. However, quantitative limits are not supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,r.kt)("td",{parentName:"tr",align:null},"Mutually Exclusive Handling Supported (",(0,r.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"like this"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC3 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e RBAC1 \u0438 RBAC2. It supports role hierarchies and constraints found in RBAC1 and RBAC2. However, quantitative limits are not supported.")))),(0,r.kt)("h2",{id:"the-difference-between-casbin-rbac-and-rbac96"},"The Difference Between Casbin RBAC and RBAC96"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Casbin, the distinction between User and Role is not as clear as in RBAC96."),(0,r.kt)("p",{parentName:"li"},"\u0412 \u041a\u0430\u0441\u0431\u0438\u043d\u0435 \u0438 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u0438 \u0440\u043e\u043b\u044c \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u0438. For example, consider the following policy file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,r.kt)("p",{parentName:"li"},"If you call the method ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," using an instance of the Casbin Enforcer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,r.kt)("p",{parentName:"li"},"the return value will be:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"[alice]\n")),(0,r.kt)("p",{parentName:"li"},"This is because in Casbin, subjects include both Users and Roles."),(0,r.kt)("p",{parentName:"li"},"However, if you call the method ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAllRoles()"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,r.kt)("p",{parentName:"li"},"the return value will be:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,r.kt)("p",{parentName:"li"},"From this, you can see that there is a distinction between Users and Roles in Casbin, but it is not as sharp as in RBAC96. Of course, you can add a prefix to your policies such as ",(0,r.kt)("inlineCode",{parentName:"p"},"user::alice")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"role::admin")," to clarify their relationships.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casbin RBAC provides more permissions than RBAC96."),(0,r.kt)("p",{parentName:"li"},"RBAC96 defines only 7 permissions: read, write, append, execute, credit, debit, and inquiry."),(0,r.kt)("p",{parentName:"li"},"\u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435, \u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u0438. This allows you to create permissions that better suit your needs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casbin RBAC supports domains."),(0,r.kt)("p",{parentName:"li"},"In Casbin, you can perform authorizations based on domains. This feature makes your Access Control Model more flexible."))))}d.isMDXComponent=!0}}]);