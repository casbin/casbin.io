"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,g=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"\u0417\u0430\u043f\u0443\u0449\u0435\u043d\u043e Casbin Server!",author:"Helong Zhang",authorTitle:"\u041e\u043f\u0456\u043a\u0443\u043d Casbin",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},o=void 0,s={permalink:"/uk/blog/2018/08/07/launching-casbin-server",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/i18n/uk/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md",source:"@site/i18n/uk/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md",title:"\u0417\u0430\u043f\u0443\u0449\u0435\u043d\u043e Casbin Server!",description:"\u0414\u0435\u044f\u043a\u0456 \u043d\u0430\u0448\u0456 \u043a\u043b\u0456\u0454\u043d\u0442\u0438 \u0437\u0430\u043f\u0438\u0442\u0443\u044e\u0442\u044c, \u0447\u0438 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 Casbin \u044f\u043a \u0441\u0435\u0440\u0432\u0456\u0441 \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438. \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c - \u0422\u0410\u041a. \u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u043c\u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 Casbin Server \u044f\u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0435 \u0440\u0456\u0448\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044e \u0414\u043e\u0441\u0442\u0443\u043f\u0443 \u044f\u043a \u0421\u0435\u0440\u0432\u0456\u0441\u0443.",date:"2018-08-07T00:00:00.000Z",formattedDate:"7 \u0441\u0435\u0440\u043f\u043d\u044f 2018 \u0440.",tags:[],readingTime:.61,hasTruncateMarker:!1,authors:[{name:"Helong Zhang",title:"\u041e\u043f\u0456\u043a\u0443\u043d Casbin",url:"http://github.com/BetaCat0",imageURL:"https://avatars.githubusercontent.com/BetaCat0"}],frontMatter:{title:"\u0417\u0430\u043f\u0443\u0449\u0435\u043d\u043e Casbin Server!",author:"Helong Zhang",authorTitle:"\u041e\u043f\u0456\u043a\u0443\u043d Casbin",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},prevItem:{title:"node-Casbin: \u041d\u043e\u0432\u0438\u0439 \u0447\u043b\u0435\u043d \u0441\u0456\u043c'\u0457 Casbin",permalink:"/uk/blog/2018/08/27/node-casbin"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0414\u0435\u044f\u043a\u0456 \u043d\u0430\u0448\u0456 \u043a\u043b\u0456\u0454\u043d\u0442\u0438 \u0437\u0430\u043f\u0438\u0442\u0443\u044e\u0442\u044c, \u0447\u0438 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 Casbin \u044f\u043a \u0441\u0435\u0440\u0432\u0456\u0441 \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438. \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c - ",(0,a.kt)("strong",{parentName:"p"},"\u0422\u0410\u041a"),". \u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u043c\u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"Casbin Server")," \u044f\u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0435 \u0440\u0456\u0448\u0435\u043d\u043d\u044f \u0434\u043b\u044f ",(0,a.kt)("strong",{parentName:"p"},"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044e \u0414\u043e\u0441\u0442\u0443\u043f\u0443 \u044f\u043a \u0421\u0435\u0440\u0432\u0456\u0441\u0443"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Casbin Server")," \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u043e\u0437\u0440\u043e\u0431\u043b\u044f\u0454\u0442\u044c\u0441\u044f \u043d\u0430\u0448\u043e\u044e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u044e. \u0412\u0456\u043d \u043c\u0430\u0454 \u043a\u0456\u043b\u044c\u043a\u0430 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0420\u043e\u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0439 \u0432\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u043d\u0430 Golang."),(0,a.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u0438 \u0442\u0438\u0441\u044f\u0447\u0430\u043c\u0438 \u0456\u043d\u0441\u0442\u0430\u043d\u0446\u0456\u0439 Casbin, \u0442\u043e\u043c\u0443 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0456\u043a\u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044e \u043f\u043e\u043b\u0456\u0442\u0438\u043a \u0437 \u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432 \u0432 \u043e\u0434\u0438\u043d Casbin Server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"gRPC")," \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0437\u0432'\u044f\u0437\u043a\u0443 \u0437 Casbin Server. \u041c\u0438 \u0442\u0430\u043a\u043e\u0436 \u0440\u043e\u0437\u0433\u043b\u044f\u0434\u0430\u0454\u043c\u043e \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0434\u043e\u0434\u0430\u0442\u0438 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0443 ",(0,a.kt)("strong",{parentName:"li"},"RESTful")," \u0443 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u043e\u043c\u0443 \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u044c\u043e\u043c\u0443."),(0,a.kt)("li",{parentName:"ul"},"\u0414\u0440\u0443\u0436\u043d\u0456\u0439 \u0432\u0435\u0431-\u043f\u043e\u0440\u0442\u0430\u043b \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0456\u0432, \u044f\u043a\u0456 \u043d\u0435 \u0454 \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0430\u043c\u0438, \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u0432\u0441\u0456\u043c\u0430 \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u044f\u043a \u0456\u043d\u0441\u0442\u0430\u043d\u0446\u0456\u0457 Casbin, \u043c\u043e\u0434\u0435\u043b\u0456, \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a \u0442\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f.")),(0,a.kt)("p",null,"\u0412\u0438\u0445\u0456\u0434\u043d\u0438\u0439 \u043a\u043e\u0434 \u0440\u043e\u0437\u043c\u0456\u0449\u0435\u043d\u043e \u043d\u0430 GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"https://github.com/casbin/casbin-server")),(0,a.kt)("p",null,"\u0411\u0443\u0434\u044c-\u044f\u043a\u0456 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 \u0447\u0438 \u0437\u0430\u043f\u0438\u0442\u0438 \u043d\u0430 \u0437\u043b\u0438\u0442\u0442\u044f \u0432\u0456\u0442\u0430\u044e\u0442\u044c\u0441\u044f :)"))}p.isMDXComponent=!0}}]);