"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"node-Casbin: \u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e43\u0e2b\u0e21\u0e48\u0e02\u0e2d\u0e07\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27 Casbin",author:"Zixuan Liu",authorTitle:"Casbin Maintainer",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},i=void 0,c={permalink:"/th/blog/2018/08/27/node-casbin",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/i18n/th/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md",source:"@site/i18n/th/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md",title:"node-Casbin: \u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e43\u0e2b\u0e21\u0e48\u0e02\u0e2d\u0e07\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27 Casbin",description:"\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e40\u0e23\u0e32\u0e44\u0e14\u0e49\u0e17\u0e33\u0e01\u0e32\u0e23\u0e22\u0e49\u0e32\u0e22 Casbin \u0e44\u0e1b\u0e22\u0e31\u0e07 Node.js \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u0e0b\u0e36\u0e48\u0e07\u0e21\u0e35\u0e0a\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32: node-Casbin.",date:"2018-08-27T00:00:00.000Z",formattedDate:"27 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 2018",tags:[],readingTime:.13,hasTruncateMarker:!1,authors:[{name:"Zixuan Liu",title:"Casbin Maintainer",url:"http://github.com/nodece",imageURL:"https://avatars.githubusercontent.com/nodece"}],frontMatter:{title:"node-Casbin: \u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e43\u0e2b\u0e21\u0e48\u0e02\u0e2d\u0e07\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27 Casbin",author:"Zixuan Liu",authorTitle:"Casbin Maintainer",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},prevItem:{title:"\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32",permalink:"/th/blog/2018/09/23/new-website"},nextItem:{title:"\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c Casbin \u0e40\u0e1b\u0e34\u0e14\u0e15\u0e31\u0e27\u0e41\u0e25\u0e49\u0e27!",permalink:"/th/blog/2018/08/07/launching-casbin-server"}},s={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e40\u0e23\u0e32\u0e44\u0e14\u0e49\u0e17\u0e33\u0e01\u0e32\u0e23\u0e22\u0e49\u0e32\u0e22 Casbin \u0e44\u0e1b\u0e22\u0e31\u0e07 Node.js \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u0e0b\u0e36\u0e48\u0e07\u0e21\u0e35\u0e0a\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-Casbin"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"node-Casbin")," \u0e21\u0e35\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e25\u0e30 API \u0e17\u0e35\u0e48\u0e04\u0e25\u0e49\u0e32\u0e22\u0e04\u0e25\u0e36\u0e07\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e43\u0e19\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e02\u0e2d\u0e07 Casbin \u0e21\u0e34\u0e14\u0e40\u0e14\u0e34\u0e25\u0e41\u0e27\u0e23\u0e4c\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Express, Koa2 \u0e41\u0e25\u0e30 Egg.js \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27 \u0e2d\u0e41\u0e14\u0e1b\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Sequelize \u0e01\u0e47\u0e44\u0e14\u0e49\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21\u0e44\u0e27\u0e49\u0e41\u0e25\u0e49\u0e27"),(0,a.kt)("p",null,"\u0e2b\u0e27\u0e31\u0e07\u0e27\u0e48\u0e32\u0e21\u0e31\u0e19\u0e08\u0e30\u0e15\u0e2d\u0e1a\u0e2a\u0e19\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e14\u0e35\u0e19\u0e30 :)"),(0,a.kt)("p",null,"GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"https://github.com/casbin/node-casbin")))}p.isMDXComponent=!0}}]);