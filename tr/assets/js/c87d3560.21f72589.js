"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[655],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),h=m(a),u=n,g=h["".concat(o,".").concat(u)]||h[u]||d[u]||l;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5332:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={id:"graphql-middlewares",title:"GraphQL Middlewares",description:"GraphQL u\xe7 noktalar\u0131 i\xe7in yetkilendirme",keywords:["GraphQL","GraphQL Middlewares"],authors:["hsluoyz"]},i=void 0,p={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"GraphQL Middlewares",description:"GraphQL u\xe7 noktalar\u0131 i\xe7in yetkilendirme",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/tr/docs/graphql-middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GraphQLMiddlewares.mdx",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"GraphQL Middlewares",description:"GraphQL u\xe7 noktalar\u0131 i\xe7in yetkilendirme",keywords:["GraphQL","GraphQL Middlewares"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Middlewares",permalink:"/tr/docs/middlewares"},next:{title:"Cloud Native Middlewares",permalink:"/tr/docs/cloud-native"}},o={},m=[{value:"Desteklenen GraphQL Ara Katmanlar",id:"desteklenen-graphql-ara-katmanlar",level:2}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},d=s("Tabs"),h=s("TabItem"),u={toc:m};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casbin, yetkilendirme i\xe7in resmi olarak \xf6nerilen y\xf6ntemi takip ederek GraphQL u\xe7 noktalar\u0131 i\xe7in yetkilendirme sa\u011flar: ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/"),". Ba\u015fka bir deyi\u015fle, Casbin, GraphQL katman\u0131 ile i\u015f mant\u0131\u011f\u0131n\u0131z aras\u0131na yerle\u015ftirilmelidir."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Casbin authorization logic lives inside postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  fields: {\n    body: {\n      type: GraphQLString,\n      resolve: (post, args, context, { rootValue }) => {\n        return postRepository.getBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,n.kt)("h2",{id:"desteklenen-graphql-ara-katmanlar"},"Desteklenen GraphQL Ara Katmanlar"),(0,n.kt)("p",null,"Casbin GraphQL ara katmanlar\u0131n\u0131n tam listesi a\u015fa\u011f\u0131da sunulmaktad\u0131r. Yeni bir GraphQL ara katman\u0131 \xfczerine herhangi bir \xfc\xe7\xfcnc\xfc taraf katk\u0131s\u0131na a\xe7\u0131k\u0131z. L\xfctfen bize bildirin, ve biz de bunu bu listeye ekleyece\u011fiz:)"),(0,n.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(h,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ara Katman"),(0,n.kt)("th",{parentName:"tr",align:null},"GraphQL Uygulamas\u0131"),(0,n.kt)("th",{parentName:"tr",align:null},"Yazar"),(0,n.kt)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"graphql-go i\xe7in bir yetkilendirme ara katman yaz\u0131l\u0131m\u0131")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,n.kt)("td",{parentName:"tr",align:null},"Graphql ve Casbin'i birlikte kullanman\u0131n bir uygulamas\u0131")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"gqlgen","_","casbin","_","RBAC","_","example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"gqlgen")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,n.kt)("td",{parentName:"tr",align:null},"(bo\u015f)"))))),(0,n.kt)(h,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ara Katman (Middleware)"),(0,n.kt)("th",{parentName:"tr",align:null},"GraphQL Uygulama"),(0,n.kt)("th",{parentName:"tr",align:null},"Yazar"),(0,n.kt)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")," i\xe7in bir Casbin yetkilendirme ara katman\u0131"))))),(0,n.kt)(h,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ara Katman"),(0,n.kt)("th",{parentName:"tr",align:null},"GraphQL Uygulamas\u0131"),(0,n.kt)("th",{parentName:"tr",align:null},"Yazar"),(0,n.kt)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")," i\xe7in bir Casbin yetkilendirme ara katman\u0131")))))))}g.isMDXComponent=!0}}]);