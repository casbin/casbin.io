"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),h=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=h(n),y=o,d=p["".concat(u,".").concat(y)]||p[y]||s[y]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var h=2;h<a;h++)c[h]=n[h];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var r=n(7462),o=(n(7294),n(3905));const a={id:"envoy",title:"Authorization of Service Mesh through Envoy",description:"\u1ee6y quy\u1ec1n c\u1ee7a Service Mesh th\xf4ng qua Envoy",keywords:["Envoy","Envoy-authz","Istio"],authors:["ashish493"]},c=void 0,i={unversionedId:"envoy",id:"envoy",title:"Authorization of Service Mesh through Envoy",description:"\u1ee6y quy\u1ec1n c\u1ee7a Service Mesh th\xf4ng qua Envoy",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/vi/docs/envoy",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/EnvoyAuthz.mdx",tags:[],version:"current",frontMatter:{id:"envoy",title:"Authorization of Service Mesh through Envoy",description:"\u1ee6y quy\u1ec1n c\u1ee7a Service Mesh th\xf4ng qua Envoy",keywords:["Envoy","Envoy-authz","Istio"],authors:["ashish493"]},sidebar:"docs",previous:{title:"Admission Webhook for K8s",permalink:"/vi/docs/k8s-gatekeeper"},next:{title:"Management",permalink:"/vi/docs/category/management"}},u={},h=[{value:"Y\xeau c\u1ea7u",id:"y\xeau-c\u1ea7u",level:2},{value:"Ho\u1ea1t \u0111\u1ed9ng c\u1ee7a Middleware",id:"ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-middleware",level:2},{value:"S\u1eed d\u1ee5ng",id:"s\u1eed-d\u1ee5ng",level:2},{value:"T\xedch h\u1ee3p v\u1edbi Istio",id:"t\xedch-h\u1ee3p-v\u1edbi-istio",level:2}],l={toc:h};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," l\xe0 m\u1ed9t middleware cho Envoy th\u1ef1c hi\u1ec7n \u1ee7y quy\u1ec1n RBAC & ABAC b\xean ngo\xe0i th\xf4ng qua casbin. Middleware n\xe0y s\u1eed d\u1ee5ng ",(0,o.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"API \u1ee7y quy\u1ec1n b\xean ngo\xe0i c\u1ee7a Envoy")," th\xf4ng qua m\u1ed9t m\xe1y ch\u1ee7 gRPC. Proxy n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tri\u1ec3n khai tr\xean b\u1ea5t k\u1ef3 lo\u1ea1i Service Mesh d\u1ef1a tr\xean Envoy n\xe0o, ch\u1eb3ng h\u1ea1n nh\u01b0 Istio."),(0,o.kt)("h2",{id:"y\xeau-c\u1ea7u"},"Y\xeau c\u1ea7u"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Envoy 1.17+"),(0,o.kt)("li",{parentName:"ul"},"Istio ho\u1eb7c b\u1ea5t k\u1ef3 lo\u1ea1i service mesh n\xe0o kh\xe1c"),(0,o.kt)("li",{parentName:"ul"},"ph\u1ee5 thu\u1ed9c grpc")),(0,o.kt)("p",null,"Qu\u1ea3n l\xfd ph\u1ee5 thu\u1ed9c b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod"),"."),(0,o.kt)("h2",{id:"ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-middleware"},"Ho\u1ea1t \u0111\u1ed9ng c\u1ee7a Middleware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"M\u1ed9t client th\u1ef1c hi\u1ec7n m\u1ed9t y\xeau c\u1ea7u HTTP."),(0,o.kt)("li",{parentName:"ul"},"Proxy Envoy g\u1eedi y\xeau c\u1ea7u \u0111\u1ebfn m\xe1y ch\u1ee7 gRPC."),(0,o.kt)("li",{parentName:"ul"},"M\xe1y ch\u1ee7 gRPC x\xe1c th\u1ef1c y\xeau c\u1ea7u d\u1ef1a tr\xean ch\xednh s\xe1ch casbin."),(0,o.kt)("li",{parentName:"ul"},"N\u1ebfu \u0111\u01b0\u1ee3c x\xe1c th\u1ef1c, y\xeau c\u1ea7u s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n ti\u1ebfp; n\u1ebfu kh\xf4ng, n\xf3 s\u1ebd b\u1ecb t\u1eeb ch\u1ed1i.")),(0,o.kt)("p",null,"M\xe1y ch\u1ee7 gRPC d\u1ef1a tr\xean protocol buffer t\u1eeb ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external","_","auth.proto")," trong Envoy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// A generic interface for performing authorization checks on incoming\n// requests to a networked service.\nservice Authorization {\n  // Performs an authorization check based on the attributes associated with the\n  // incoming request and returns a status of `OK` or not `OK`.\n  rpc Check(v2.CheckRequest) returns (v2.CheckResponse);\n}\n")),(0,o.kt)("p",null,"T\u1eeb t\u1ec7p proto \u1edf tr\xean, ch\xfang ta c\u1ea7n s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Check()")," trong m\xe1y ch\u1ee7 \u1ee7y quy\u1ec1n."),(0,o.kt)("h2",{id:"s\u1eed-d\u1ee5ng"},"S\u1eed d\u1ee5ng"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0110\u1ecbnh ngh\u0129a c\xe1c ch\xednh s\xe1ch Casbin trong t\u1ec7p c\u1ea5u h\xecnh theo h\u01b0\u1edbng d\u1eabn n\xe0y ",(0,o.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"guide"),".")),(0,o.kt)("p",null,"B\u1ea1n c\xf3 th\u1ec3 x\xe1c minh/ki\u1ec3m tra c\xe1c ch\xednh s\xe1ch c\u1ee7a m\xecnh b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,o.kt)("a",{parentName:"p",href:"/editor"},"casbin-editor")," tr\u1ef1c tuy\u1ebfn."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kh\u1edfi \u0111\u1ed9ng m\xe1y ch\u1ee7 x\xe1c th\u1ef1c b\u1eb1ng c\xe1ch ch\u1ea1y:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build .\n./authz\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"T\u1ea3i c\u1ea5u h\xecnh Envoy:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"envoy -c authz.yaml -l info\n")),(0,o.kt)("p",null,"M\u1ed9t khi Envoy b\u1eaft \u0111\u1ea7u, n\xf3 s\u1ebd ch\u1eb7n c\xe1c y\xeau c\u1ea7u cho qu\xe1 tr\xecnh \u1ee7y quy\u1ec1n."),(0,o.kt)("h2",{id:"t\xedch-h\u1ee3p-v\u1edbi-istio"},"T\xedch h\u1ee3p v\u1edbi Istio"),(0,o.kt)("p",null,"\u0110\u1ec3 middleware n\xe0y ho\u1ea1t \u0111\u1ed9ng, b\u1ea1n c\u1ea7n g\u1eedi c\xe1c header t\xf9y ch\u1ec9nh ch\u1ee9a t\xean ng\u01b0\u1eddi d\xf9ng trong token JWT ho\u1eb7c header. B\u1ea1n c\xf3 th\u1ec3 tham kh\u1ea3o ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"t\xe0i li\u1ec7u ch\xednh th\u1ee9c c\u1ee7a Istio")," \u0111\u1ec3 bi\u1ebft th\xeam th\xf4ng tin v\u1ec1 vi\u1ec7c s\u1eeda \u0111\u1ed5i ",(0,o.kt)("inlineCode",{parentName:"p"},"Request Headers"),"."))}s.isMDXComponent=!0}}]);