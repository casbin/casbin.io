"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8754],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),h=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=h(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=h(a),s=n,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||l;return a?r.createElement(m,p(p({ref:e},c),{},{components:a})):r.createElement(m,p({ref:e},c))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var h=2;h<l;h++)p[h]=a[h];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6874:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const l={id:"graphql-middlewares",title:"GraphQL Middlewares",description:"\u1ee6y quy\u1ec1n cho c\xe1c \u0111i\u1ec3m cu\u1ed1i GraphQL",keywords:["GraphQL","GraphQL Middlewares"],authors:["hsluoyz"]},p=void 0,i={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"GraphQL Middlewares",description:"\u1ee6y quy\u1ec1n cho c\xe1c \u0111i\u1ec3m cu\u1ed1i GraphQL",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/vi/docs/graphql-middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GraphQLMiddlewares.mdx",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"GraphQL Middlewares",description:"\u1ee6y quy\u1ec1n cho c\xe1c \u0111i\u1ec3m cu\u1ed1i GraphQL",keywords:["GraphQL","GraphQL Middlewares"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Middlewares",permalink:"/vi/docs/middlewares"},next:{title:"Cloud Native Middlewares",permalink:"/vi/docs/cloud-native"}},o={},h=[{value:"C\xe1c Middleware GraphQL \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3",id:"c\xe1c-middleware-graphql-\u0111\u01b0\u1ee3c-h\u1ed7-tr\u1ee3",level:2}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},d=c("Tabs"),u=c("TabItem"),s={toc:h};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casbin tu\xe2n theo c\xe1ch \u0111\u01b0\u1ee3c \u0111\u1ec1 xu\u1ea5t ch\xednh th\u1ee9c \u0111\u1ec3 cung c\u1ea5p \u1ee7y quy\u1ec1n cho c\xe1c \u0111i\u1ec3m cu\u1ed1i GraphQL b\u1eb1ng c\xe1ch c\xf3 m\u1ed9t ngu\u1ed3n s\u1ef1 th\u1eadt duy nh\u1ea5t cho vi\u1ec7c \u1ee7y quy\u1ec1n: ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/"),". N\xf3i c\xe1ch kh\xe1c, Casbin n\xean \u0111\u01b0\u1ee3c \u0111\u1eb7t gi\u1eefa l\u1edbp GraphQL v\xe0 logic kinh doanh c\u1ee7a b\u1ea1n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Casbin authorization logic lives inside postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  fields: {\n    body: {\n      type: GraphQLString,\n      resolve: (post, args, context, { rootValue }) => {\n        return postRepository.getBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,n.kt)("h2",{id:"c\xe1c-middleware-graphql-\u0111\u01b0\u1ee3c-h\u1ed7-tr\u1ee3"},"C\xe1c Middleware GraphQL \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3"),(0,n.kt)("p",null,"Danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c middleware GraphQL c\u1ee7a Casbin \u0111\u01b0\u1ee3c cung c\u1ea5p d\u01b0\u1edbi \u0111\xe2y. B\u1ea5t k\u1ef3 \u0111\xf3ng g\xf3p c\u1ee7a b\xean th\u1ee9 ba v\u1ec1 m\u1ed9t middleware GraphQL m\u1edbi \u0111\u1ec1u \u0111\u01b0\u1ee3c hoan ngh\xeanh. Xin vui l\xf2ng th\xf4ng b\xe1o cho ch\xfang t\xf4i, v\xe0 ch\xfang t\xf4i s\u1ebd th\xeam n\xf3 v\xe0o danh s\xe1ch n\xe0y:)"),(0,n.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Tri\u1ec3n khai GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"T\xe1c gi\u1ea3"),(0,n.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"M\u1ed9t middleware x\xe1c th\u1ef1c cho graphql-go")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,n.kt)("td",{parentName:"tr",align:null},"M\u1ed9t tri\u1ec3n khai s\u1eed d\u1ee5ng Graphql v\xe0 Casbin c\xf9ng nhau")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"gqlgen","_","casbin","_","RBAC","_","example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"gqlgen")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,n.kt)("td",{parentName:"tr",align:null},"(tr\u1ed1ng)"))))),(0,n.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Tri\u1ec3n khai GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"T\xe1c gi\u1ea3"),(0,n.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"M\u1ed9t middleware \u1ee7y quy\u1ec1n Casbin cho ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")))))),(0,n.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Tri\u1ec3n khai GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"T\xe1c gi\u1ea3"),(0,n.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,n.kt)("td",{parentName:"tr",align:null},"M\u1ed9t middleware \u1ee7y quy\u1ec1n Casbin cho ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3"))))))))}m.isMDXComponent=!0}}]);