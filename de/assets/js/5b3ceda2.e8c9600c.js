"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5176],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=l(n),g=a,m=b["".concat(s,".").concat(g)]||b[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],u={title:"Casbin Server wird gestartet!",author:"Helong Zhang",authorTitle:"Casbin-Betreuer",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},s=void 0,l={permalink:"/de/blog/2018/08/07/launching-casbin-server",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-08-07-launching-casbin-server.md",source:"@site/i18n/de/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md",title:"Casbin Server wird gestartet!",description:"Einige unserer Kunden fragen, ob Casbin als Service anstelle einer Bibliothek genutzt werden kann. Die Antwort lautet JA. Heute haben wir das Casbin Server Projekt als konkrete L\xf6sung f\xfcr Access Control as a Service gestartet.",date:"2018-08-07T00:00:00.000Z",formattedDate:"7. August 2018",tags:[],readingTime:.625,hasTruncateMarker:!1,authors:[{name:"Helong Zhang",title:"Casbin-Betreuer",url:"http://github.com/BetaCat0",imageURL:"https://avatars.githubusercontent.com/BetaCat0"}],frontMatter:{title:"Casbin Server wird gestartet!",author:"Helong Zhang",authorTitle:"Casbin-Betreuer",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},prevItem:{title:"node-Casbin: Neues Mitglied der Familie Casbin",permalink:"/de/blog/2018/08/27/node-casbin"}},c={authorsImageUrls:[void 0]},p=[],b={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Einige unserer Kunden fragen, ob Casbin als Service anstelle einer Bibliothek genutzt werden kann. Die Antwort lautet ",(0,i.kt)("strong",{parentName:"p"},"JA"),". Heute haben wir das ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"Casbin Server")," Projekt als konkrete L\xf6sung f\xfcr ",(0,i.kt)("strong",{parentName:"p"},"Access Control as a Service")," gestartet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Casbin Server")," wird von unserem Kernteam aktiv weiterentwickelt. Es hat mehrere Eigenschaften:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rein entwickelt in Golang."),(0,i.kt)("li",{parentName:"ul"},"Kann tausende Casbin-Instanzen verwalten, so dass Sie die Logik der Durchsetzung von Richtlinien von mehreren Diensten auf einen Casbin-Server umstellen k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gRPC")," wird verwendet, um mit Casbin Server zu kommunizieren. Wir erw\xe4gen auch, in naher Zukunft den ",(0,i.kt)("strong",{parentName:"li"},"RESTful")," Support hinzuzuf\xfcgen."),(0,i.kt)("li",{parentName:"ul"},"Ein benutzerfreundliches Web-Administratorportal f\xfcr nicht-Entwickler Administratoren zur Verwaltung aller Details wie Casbin-Instanzen, Modelle, Richtlinienspeicherung und Lastausgleich.")),(0,i.kt)("p",null,"Der Quellcode wird auf GitHub gehostet: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"https://github.com/casbin/casbin-server")),(0,i.kt)("p",null,"Alle Tickets oder Pull-Requests sind willkommen :)"))}g.isMDXComponent=!0}}]);