"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={id:"envoy",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"],authors:["ashish493"]},a=void 0,s={unversionedId:"envoy",id:"envoy",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430",description:"Authorization of Service Mesh through Envoy",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/ru/docs/envoy",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/EnvoyAuthz.mdx",tags:[],version:"current",frontMatter:{id:"envoy",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"],authors:["ashish493"]},sidebar:"docs",previous:{title:"Admission Webhook for K8s",permalink:"/ru/docs/k8s-gatekeeper"},next:{title:"Management",permalink:"/ru/docs/category/management"}},l={},u=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"Working of the Middleware",id:"working-of-the-middleware",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"Integrating with Istio",id:"integrating-with-istio",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," is a middleware for Envoy that performs external RBAC & ABAC authorization through casbin. This middleware uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"Envoy's external authorization API")," via a gRPC server. This proxy can be deployed on any type of Envoy-based service mesh, such as Istio."),(0,o.kt)("h2",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a 117 +"),(0,o.kt)("li",{parentName:"ul"},"Istio or any other type of service mesh"),(0,o.kt)("li",{parentName:"ul"},"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 grpc")),(0,o.kt)("p",null,"Dependencies are managed using ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod"),"."),(0,o.kt)("h2",{id:"working-of-the-middleware"},"Working of the Middleware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A client makes an HTTP request."),(0,o.kt)("li",{parentName:"ul"},"The Envoy proxy sends the request to the gRPC server."),(0,o.kt)("li",{parentName:"ul"},"The gRPC server authorizes the request based on casbin policies."),(0,o.kt)("li",{parentName:"ul"},"If authorized, the request is forwarded; otherwise, it is denied.")),(0,o.kt)("p",null,"The gRPC server is based on protocol buffer from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external_auth.proto")," in Envoy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// A generic interface for performing authorization checks on incoming\n// requests to a networked service.\nservice Authorization {\n  // Performs an authorization check based on the attributes associated with the\n  // incoming request and returns a status of `OK` or not `OK`.\n  \u0412\u043e\u0437\u0432\u0440\u0430\u0442 rpc Check(v2.CheckRequest) (v2.CheckResponse);\n}\n")),(0,o.kt)("p",null,"From the above proto file, we need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Check()")," service in the authorization server."),(0,o.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define the Casbin policies in the config files following this ",(0,o.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"guide"),".")),(0,o.kt)("p",null,"You can verify/test your policies using the online ",(0,o.kt)("a",{parentName:"p",href:"/editor"},"casbin-editor"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start the authentication server by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build .\n./authz\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Load the Envoy configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"envoy -c authz.yaml -l info\n")),(0,o.kt)("p",null,"Once Envoy starts, it will intercept requests for the authorization process."),(0,o.kt)("h2",{id:"integrating-with-istio"},"Integrating with Istio"),(0,o.kt)("p",null,"To make this middleware work, you need to send custom headers containing usernames in the JWT token or headers. You can refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"Istio documentation")," for more information on modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"Request Headers"),"."))}p.isMDXComponent=!0}}]);