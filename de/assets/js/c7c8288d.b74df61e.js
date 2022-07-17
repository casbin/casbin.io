"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3264],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return u}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),d=m(a),u=n,b=d["".concat(p,".").concat(u)]||d[u]||h[u]||i;return a?r.createElement(b,l(l({ref:e},o),{},{components:a})):r.createElement(b,l({ref:e},o))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5235:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return h}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),l=["components"],s={id:"middlewares",title:"Middleware",description:"Casbin middlewares",keywords:["middleware"]},p=void 0,m={unversionedId:"middlewares",id:"middlewares",title:"Middleware",description:"Casbin middlewares",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Middlewares.mdx",sourceDirName:".",slug:"/middlewares",permalink:"/de/docs/middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Middlewares.mdx",tags:[],version:"current",frontMatter:{id:"middlewares",title:"Middleware",description:"Casbin middlewares",keywords:["middleware"]},sidebar:"docs",previous:{title:"Rollen-Manager",permalink:"/de/docs/role-managers"},next:{title:"GraphQL Middlewares",permalink:"/de/docs/graphql-middlewares"}},o={},h=[{value:"Web frameworks",id:"web-frameworks",level:3},{value:"Cloud-Anbieter",id:"cloud-anbieter",level:3}],d=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}},u=d("Tabs"),b=d("TabItem"),k={toc:h};function g(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"web-frameworks"},"Web frameworks"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gin-gonic/gin"},"Gin")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein HTTP-Web-Framework mit einer Martini-artigen API mit viel besserer Performance, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/gin-contrib/authz"},"authz")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/maxwellhertz/gin-casbin"},"gin-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/beego/beego"},"Beego")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Open-Source-Hochleistungs-Web-Framework f\xfcr Go, \xfcber integriertes Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/astaxie/beego/blob/master/plugins/authz"},"Plugins/authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/caddyserver/caddy"},"Caddy")),(0,i.kt)("td",{parentName:"tr",align:null},"Schneller, plattform\xfcbergreifender HTTP/2-Webserver mit automatischer HTTPS, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/caddy-authz"},"caddy-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/traefik/traefik"},"Traefik")),(0,i.kt)("td",{parentName:"tr",align:null},"Der Cloud-native Anwendungsproxy via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Knight-7/auth-plugin"},"traefik-auth-plugin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-kit/kit"},"Gehe Kit")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Toolkit f\xfcr Mikrodienste, \xfcber integriertes Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-kit/kit/tree/master/auth/casbin"},"plugins/authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber"},"Faser")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Express inspiriertes Web-Framework, geschrieben in Go, \xfcber Middleware: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/arsmn/fiber-casbin"},"Faserkasbin")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/prongbang/fiber-casbinrest"},"Faserkasbinrest")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/sujit-baniya/fiber-boilerplate"},"Faserplatte"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/revel/revel"},"Schmiede")),(0,i.kt)("td",{parentName:"tr",align:null},"Eine hohe Produktivit\xe4t, Vollstapel-Web-Framework f\xfcr die Go-Sprache, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/revel/modules/tree/master/auth/casbin"},"auth/casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/labstack/echo"},"Echo")),(0,i.kt)("td",{parentName:"tr",align:null},"Hohe Leistung, minimalistisches Go Web-Framework, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/labstack/echo-contrib/tree/master/casbin"},"echo-authz")," (Dank an ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/xqbumu"},"@xqbumu"),") oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/prongbang/casbinrest"},"Casbinrest"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/kataras/iris"},"Isis")),(0,i.kt)("td",{parentName:"tr",align:null},"Das schnellste Web-Framework f\xfcr Go in (THIS) Erde. HTTP/2 Ready-To-GO via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/iris-contrib/middleware/tree/master/casbin"},"casbin")," (Dank an ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/hiveminded"},"@hiveminded"),") oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/kokobing/iris-middleware-casbin"},"iris-middleware-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gogf/gf"},"GoFrame")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein modulares, leistungsstarkes, leistungsf\xe4higes und unternehmensf\xe4higes Anwendungs-Entwicklungs-Framework von Golang, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dobyte/gf-casbin"},"gf-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/urfave/negroni"},"Negroni")),(0,i.kt)("td",{parentName:"tr",align:null},"Idiomatic HTTP Middleware f\xfcr Golang, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/negroni-authz"},"negroni-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pressly/chi"},"Hannah")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein leichter, idiomatischer und komponierbarer Router f\xfcr das Erstellen von HTTP-Diensten via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/chi-authz"},"chi-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gobuffalo/buffalo"},"Buffalo")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Go-Web-Entwicklungs-\xd6kosystem, das Ihnen das Leben erleichtert, \xfcber Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/kgosse/buffalo-mw-rbac"},"buffalo-mw-rbac"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-macaron/macaron"},"Macaron")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein hochproduktives und modulares Web-Framework in Go, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-macaron/authz"},"authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/devfeel/dotweb"},"DotWeb")),(0,i.kt)("td",{parentName:"tr",align:null},"Einfache und einfache Web-Mikro-Framework, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/devfeel/middleware/tree/master/authz"},"authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/lunny/tango"},"Tango")),(0,i.kt)("td",{parentName:"tr",align:null},"Micro & pluggable Web-Framework f\xfcr Go, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://gitea.com/tango/authz"},"authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-baa/baa"},"Baa")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Express-Go-Webframework mit Routing, Middleware, Dependency Injection und http-Kontext, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/baa-middleware/authz"},"authz")))))),(0,i.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://projects.spring.io/spring-boot/"},"Fr\xfchlingsstart")),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht die Erstellung von Anwendungen und Diensten mit Federantrieb via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/casbin-spring-boot-starter"},"casbin-spring-boot-starter")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/jcasbin-springboot-plugin"},"jcasbin-springboot-plugin")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jveverka/spring-examples/tree/master/spring-jcasbin"},"Simple SpringBoot Sicherheitsdemo mit jCasbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://shiro.apache.org/"},"Apache Shiro")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein leistungsf\xe4higes und einfach zu bedienendes Java-Sicherheits-Framework, das Authentifizierung, Autorisierung, Kryptographie und Session-Management \xfcber das Plugin durchf\xfchrt: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/shiro-casbin"},"shiro-casbin")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo/shiro-jcasbin-spring-boot-starter"},"shiro-jcasbin-spring-boot-starter"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://vertx.io/"},"Vert.x")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Toolkit zum Erstellen reaktiver Anwendungen auf der JVM, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/vert-x3/vertx-auth/pull/215"},"vertx-auth-jcasbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.jfinal.com/"},"Jenny")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein einfaches, leichtes, schnelles, unabh\xe4ngiges und erweiterbares Java-WEB + ORM-Framework, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/jfinal-authz"},"jfinal-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://nutzam.com/"},"Nutz")),(0,i.kt)("td",{parentName:"tr",align:null},"Web Framework (MVC/IOC/AOP/DAO/JSON) f\xfcr alle Java-Entwickler, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/nutz-authz"},"nutz-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/svenkubiak/mangooio"},"mangoo I/O")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein intuitives, leichtgewichtiges und leistungsf\xe4higes Full-Stack Java Web Framework, \xfcber eingebautes Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/svenkubiak/mangooio/blob/e8c647a3f7c427bce27377025bec074f6d767f50/mangooio-core/src/main/java/io/mangoo/services/AuthorizationService.java"},"AuthorizationService.java")))))),(0,i.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"Schild")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein authZ-Server und authZ-bewusster Reverse-Proxy, der auf dem Casbin aufbaut.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/expressjs/express"},"Express")),(0,i.kt)("td",{parentName:"tr",align:null},"Schnell, un\xfcberlegtes, minimalistisches Web-Framework f\xfcr Knoten, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/express-authz"},"express-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/koajs/koa"},"Koa")),(0,i.kt)("td",{parentName:"tr",align:null},"Expressive Middleware f\xfcr node.js mit async-Funktionen ES2017, \xfcber Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/koa-authz"},"koa-authz")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/djordjep/koajs-starter"},"koajs-starter")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/zcong1993/koa-casbin"},"koa-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/koajs/koa"},"LoopBack 4")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein hocherweiterbares Node.js und TypeScript Framework f\xfcr das Erstellen von APIs und Mikrodiensten via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/sourcefuse/loopback4-authorization"},"loopback4-authorization"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://nestjs.com/"},"Nest")),(0,i.kt)("td",{parentName:"tr",align:null},"Progressive Node.js Framework, um effiziente und skalierbare serverseitige Anwendungen auf TypeScript & JavaScript zu erstellen. via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dreamdevil00/nest-authz"},"nest-authz")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pardjs/nest-casbin"},"nest-casbin")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/switchit-conseil/nestjs-casbin-module"},"NestJS Casbin Modul")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/juicycleff/nestjs-casbin"},"nestjs-casbin")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/merajsahebdar/shanbe-api"},"shanbe-api")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Twiddlle/acl-nest"},"acl-nest")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/0xb4lamx/nestjs-casbin-typeorm"},"nestjs-casbin-typeorm"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/fastify/fastify"},"Fastifizieren")),(0,i.kt)("td",{parentName:"tr",align:null},"Schneller und niedriger Overhead Web-Framework, f\xfcr Node.js. via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/nearform/fastify-casbin"},"fastify-casbin")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/nearform/fastify-casbin-rest"},"fastify-casbin-rest"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eggjs/egg"},"Ei")),(0,i.kt)("td",{parentName:"tr",align:null},"Geboren um bessere Enterprise-Frameworks und Apps mit Node.js & Koa zu erstellen, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/egg-authz"},"egg-authz")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/klren0312/egg-zrole"},"egg-zrole"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://hapi.dev/"},"hapi")),(0,i.kt)("td",{parentName:"tr",align:null},"Das einfache, sichere Framework Developers Trust. \xfcber Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/hapi-authz"},"hapi-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/tiagostutz/casbin-jwt-express"},"Casbin JWT Express")),(0,i.kt)("td",{parentName:"tr",align:null},"Autorisierung Middleware, die den zustandslosen JWT-Token verwendet, um ACL-Regeln mit Casbin zu validieren"))))),(0,i.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://laravel.com/"},"Laravel")),(0,i.kt)("td",{parentName:"tr",align:null},"Das PHP-Framework f\xfcr Web-Handwerker via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/laravel-authz"},"laravel-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.yiiframework.com/"},"Yii PHP Framework")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein schnelles, sicheres und effizientes PHP-Framework, \xfcber Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/yii-permission"},"yii-permission")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/yii-casbin"},"yii-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cakephp.org/"},"CakePHP")),(0,i.kt)("td",{parentName:"tr",align:null},"Erstellen Sie schnell und entwickeln Sie ein solides PHP-Framework, \xfcber das Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/cake-permission"},"cake-permission"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://codeigniter.com/"},"CodeIgniter")),(0,i.kt)("td",{parentName:"tr",align:null},"Verkn\xfcpfen Sie Benutzer mit Rollen und Berechtigungen im CodeIgniter4 Web Framework via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/codeigniter-permission"},"CodeIgniter Berechtigung"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.thinkphp.cn/"},"ThinkPHP 5.1")),(0,i.kt)("td",{parentName:"tr",align:null},"Das ThinkPHP 5.1 Framework via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/think-casbin"},"think-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.thinkphp.cn/"},"ThinkPHP 6.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Das ThinkPHP 6.0 Framework via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/think-authz"},"think-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://symfony.com/"},"Symfony")),(0,i.kt)("td",{parentName:"tr",align:null},"Das Symfony PHP Framework via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/symfony-permission"},"Symfony-Berechtigung")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/videni/symfony-casbin"},"symfony-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/hyperf/hyperf"},"Hyperf")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Coroutine-Framework, das sich auf Hypergeschwindigkeit und Flexibilit\xe4t mittels Plugin konzentriert: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/hyperf-permission"},"Hyperf-Berechtigung")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/donjan-deng/hyperf-casbin"},"hyperf-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.easyswoole.com/"},"EasySwoole")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein verteiltes, persistentes PHP Speicher-Framework basierend auf der Swoole Erweiterung, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/easyswoole-permission"},"easyswoole-Berechtigung")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/ice-leng/easyswoole-hyperfOrm-permission"},"easyswoole-hyperfOrm-Berechtigung"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.slimframework.com/"},"Slim")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein PHP-Mikro-Framework, mit dem Sie schnell einfache, aber leistungsstarke Web-Anwendungen und APIs \xfcber das Plugin schreiben k\xf6nnen: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/casbin-with-slim"},"casbin-with-slim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://phalcon.io/"},"Phalcon")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Full-Stack-PHP-Framework, das als C-Erweiterung \xfcber das Plugin geliefert wird: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/phalcon-permission"},"Phalcon-Berechtigung"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/walkor/webman"},"webman")),(0,i.kt)("td",{parentName:"tr",align:null},"Hochleistungs-HTTP Service Framework f\xfcr PHP basierend auf Workerman, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/webman-permission"},"Webman-Berechtigung"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/walkor/webman"},"webman Plugin")),(0,i.kt)("td",{parentName:"tr",align:null},"Webman f\xfcr Casbin-Plugin, Ver\xf6ffentlichen und abonnieren Sie Watcher basierend auf Redis,via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/casbin"},"casbin")))))),(0,i.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.djangoproject.com/"},"Django")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein hochstufiges Python-Web-Framework, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/django-casbin"},"django-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://flask.pocoo.org/"},"Flasche")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Microframework f\xfcr Python, basierend auf Werkzeug, Jinja 2 und guten Absichten, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/flask-authz"},"flask-authz")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/daymien/Flask-Casbin"},"Flask-Casbin (3rd-party, aber vielleicht freundlicher)")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-flask/tree/flask-casbin"},"rbac-flask"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/tiangolo/fastapi"},"FastAPI")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein modernes, schnelles (leistungsstarkes) Web-Framework zum Erstellen von APIs mit Python 3. + basierend auf Standard-Python-Tipps, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/fastapi-authz"},"fastapi-authz")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lqmanh/fastapi-app"},"Fastapi-app"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.openstack.org/"},"OpenStack")),(0,i.kt)("td",{parentName:"tr",align:null},"Die am weitesten verbreitete Open-Source-Cloud-Software der Welt, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-patron"},"openstack-patron")))))),(0,i.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/aspnet/core"},"ASP.NET-Kern")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Open-Source- und Cross-Plattform-Framework f\xfcr den Aufbau moderner Cloud-basierter Internetanwendungen wie Web-Apps, IoT-Apps und mobile Backends, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-net/Casbin.AspNetCore"},"Casbin. spNetCore"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/aspnet/core"},"ASP.NET-Kern")),(0,i.kt)("td",{parentName:"tr",align:null},"Eine einfache Demo zur Verwendung von Casbin bei ASP.NET Core Framework, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/MustafaMustafayev/CasbinACL-aspNetCore"},"CasbinACL-aspNetCore")))))),(0,i.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/actix/actix"},"Actix")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Rust actors Framework, \xfcber Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/actix-casbin"},"actix-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/actix/actix-web"},"Actix web")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein kleines, pragmatisches und extrem schnelles Web Framework, \xfcber Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/actix-casbin-auth"},"actix-casbin-auth"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/SergioBenitez/Rocket"},"Rakete")),(0,i.kt)("td",{parentName:"tr",align:null},"ein Web-Framework f\xfcr Rust, das es einfach macht, schnelle, sichere Web-Anwendungen zu schreiben, ohne Flexibilit\xe4t, Benutzerfreundlichkeit oder Typsicherheit zu opfern \xfcber Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/rocket-authz"},"rocket-authz")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/oiatz/rocket-casbin-auth"},"rocket-casbin-auth")," oder ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/simoin/Rocket_Casbin_Demo"},"rocket-casbin-demo")))))),(0,i.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://openresty.org/"},"OpenResty")),(0,i.kt)("td",{parentName:"tr",align:null},"Eine dynamische Web-Plattform basierend auf NGINX und LuaJIT, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-lua/lua-resty-casbin"},"lua-resty-casbin")," und ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rushitote/casbin-openresty-example"},"casbin-openresty-example"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Kong/kong"},"Kong")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein Cloud-einheimisches, plattform-agnostisches, skalierbares API Gateway zeichnet sich durch seine hohe Leistung und Erweiterbarkeit \xfcber Plugins, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-lua/kong-authz"},"kong-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix"},"APISIX")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein dynamisches, hochmodernes API-Gateway, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/authz-casbin.md"},"authz-casbin")))))),(0,i.kt)(b,{value:"Swift",label:"Swift",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vapor/vapor"},"Vapor")),(0,i.kt)("td",{parentName:"tr",align:null},"Ein serverseitiges Swift Web-Framework, via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/SwiftCasbin/vapor-authz"},"vapor-authz"))))))),(0,i.kt)("h3",{id:"cloud-anbieter"},"Cloud-Anbieter"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://okta.com/"},"Okta")),(0,i.kt)("td",{parentName:"tr",align:null},"Eine vertrauensw\xfcrdige Plattform, um jede Identit\xe4t \xfcber das Plugin zu sichern: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/myriad-personal/casbin-spring-boot-demo"},"casbin-spring-boot-demo"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Autor 0")),(0,i.kt)("td",{parentName:"tr",align:null},"Eine einfach zu implementierende, anpassbare Authentifizierungs- und Autorisierungsplattform via Plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://auth0.com/"},"casbin-auth0-rbac"))))))))}g.isMDXComponent=!0}}]);