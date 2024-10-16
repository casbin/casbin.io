"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[148],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),h=d(a),m=n,g=h["".concat(o,".").concat(m)]||h[m]||u[m]||l;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2602:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={id:"graphql-middlewares",title:"GraphQL Middlewares",description:"Otorisasi untuk endpoint GraphQL",keywords:["GraphQL","GraphQL Middlewares"],authors:["hsluoyz"]},i=void 0,p={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"GraphQL Middlewares",description:"Otorisasi untuk endpoint GraphQL",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/id/docs/graphql-middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GraphQLMiddlewares.mdx",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"GraphQL Middlewares",description:"Otorisasi untuk endpoint GraphQL",keywords:["GraphQL","GraphQL Middlewares"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Middlewares",permalink:"/id/docs/middlewares"},next:{title:"Cloud Native Middlewares",permalink:"/id/docs/cloud-native"}},o={},d=[{value:"Middleware GraphQL yang Didukung",id:"middleware-graphql-yang-didukung",level:2}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},u=s("Tabs"),h=s("TabItem"),m={toc:d};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casbin mengikuti cara yang disarankan secara resmi untuk memberikan otorisasi pada endpoint GraphQL dengan memiliki satu sumber kebenaran untuk otorisasi: ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/"),". Dengan kata lain, Casbin harus ditempatkan di antara lapisan GraphQL dan logika bisnis Anda."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Casbin authorization logic lives inside postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  fields: {\n    body: {\n      type: GraphQLString,\n      resolve: (post, args, context, { rootValue }) => {\n        return postRepository.getBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,n.kt)("h2",{id:"middleware-graphql-yang-didukung"},"Middleware GraphQL yang Didukung"),(0,n.kt)("p",null,"Daftar lengkap middleware GraphQL Casbin diberikan di bawah ini. Kontribusi pihak ketiga pada middleware GraphQL baru sangat diterima. Mohon beri tahu kami, dan kami akan menambahkannya ke dalam daftar ini:)"),(0,n.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(h,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Implementasi GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"Penulis"),(0,n.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Middleware otorisasi untuk graphql-go")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,n.kt)("td",{parentName:"tr",align:null},"Implementasi penggunaan Graphql dan Casbin bersama-sama")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"gqlgen","_","casbin","_","RBAC","_","example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"gqlgen")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,n.kt)("td",{parentName:"tr",align:null},"(kosong)"))))),(0,n.kt)(h,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Implementasi GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"Penulis"),(0,n.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Middleware otorisasi Casbin untuk ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")))))),(0,n.kt)(h,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Implementasi GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"Penulis"),(0,n.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,n.kt)("td",{parentName:"tr",align:null},"Middleware otorisasi Casbin untuk ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3"))))))))}g.isMDXComponent=!0}}]);