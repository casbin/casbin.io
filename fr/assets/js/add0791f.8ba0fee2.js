"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5777],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),v=i,f=d["".concat(u,".").concat(v)]||d[v]||p[v]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4220:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],s={id:"envoy",title:"Autorisation de maillage de service par l'envoy\xe9",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},u=void 0,l={unversionedId:"envoy",id:"envoy",title:"Autorisation de maillage de service par l'envoy\xe9",description:"Authorization of Service Mesh through Envoy",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/fr/docs/envoy",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"envoy",title:"Autorisation de maillage de service par l'envoy\xe9",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},sidebar:"docs",previous:{title:"Autorisation de Kubernetes",permalink:"/fr/docs/k8s"},next:{title:"Portail Admin",permalink:"/fr/docs/admin-portal"}},c={},p=[{value:"Exigences",id:"exigences",level:2},{value:"Travail de Middleware",id:"travail-de-middleware",level:2},{value:"Usage",id:"usage",level:2},{value:"Int\xe9gration \xe0 Istio",id:"int\xe9gration-\xe0-istio",level:2}],d={toc:p};function v(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," est un middleware d'Envoy\xe9 qui effectue une autorisation externe RBAC & ABAC via casbin. Ce middleware utilise l'API d'autorisation externe ",(0,o.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"Envoy\xe9")," via un serveur gRPC. Ce proxy serait d\xe9ploy\xe9 sur n'importe quel type de mailles de service bas\xe9es sur l'envoi comme Istio."),(0,o.kt)("h2",{id:"exigences"},"Exigences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Envoy\xe9 1.17+"),(0,o.kt)("li",{parentName:"ul"},"Istio ou tout type de maillage de service"),(0,o.kt)("li",{parentName:"ul"},"D\xe9pendances grpc")),(0,o.kt)("p",null,"Les d\xe9pendances sont g\xe9r\xe9es via ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod"),"."),(0,o.kt)("h2",{id:"travail-de-middleware"},"Travail de Middleware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Un client ferait une requ\xeate http."),(0,o.kt)("li",{parentName:"ul"},"Envoy proxy enverrait cette requ\xeate au serveur grpc."),(0,o.kt)("li",{parentName:"ul"},"Le serveur grpc autoriserait alors la requ\xeate en se basant sur les r\xe8gles de casbin."),(0,o.kt)("li",{parentName:"ul"},"Si elle est autoris\xe9e, la demande sera envoy\xe9e par le biais ou autrement, elle sera refus\xe9e.")),(0,o.kt)("p",null,"Le serveur grpc est bas\xe9 sur le tampon de protocole de ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external_auth.proto")," d'Envoy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Une interface g\xe9n\xe9rique pour effectuer la v\xe9rification d'autorisation sur les requ\xeates entrantes\n// \xe0 un service en r\xe9seau.\nservice Authorization {\n  // Effectue une v\xe9rification d'autorisation bas\xe9e sur les attributs associ\xe9s \xe0 la requ\xeate entrante\n  // et retourne le statut `OK` ou pas `OK`.\n  rpc Check(v2.CheckRequest) retourne (v2.CheckResponse);\n}\n")),(0,o.kt)("p",null,"\xc0 partir du profil ci-dessus, nous devons utiliser le service ",(0,o.kt)("inlineCode",{parentName:"p"},"Check()")," dans le serveur d'autorisation."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"D\xe9finissez les politiques de Casbin sous les fichiers de configuration en suivant ce ",(0,o.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"guide"),".")),(0,o.kt)("p",null,"Vous pouvez v\xe9rifier/tester vos politiques sur ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"l'\xe9diteur de casbin-")," en ligne."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"D\xe9marrez le serveur d'autorisation en cours d'ex\xe9cution :-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ go build .\n$ ./authz \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Charger la configuration de l'envoy\xe9 :-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$  envoy -c authz.yaml -l info\n")),(0,o.kt)("p",null,"Une fois que l'envoy\xe9 aura d\xe9marr\xe9, il commencera \xe0 intercepter les demandes d'autorisation."),(0,o.kt)("h2",{id:"int\xe9gration-\xe0-istio"},"Int\xe9gration \xe0 Istio"),(0,o.kt)("p",null,"Vous devez envoyer des en-t\xeates personnalis\xe9s, qui contiendraient des noms d'utilisateur dans les en-t\xeates JWT pour que ce middleware fonctionne. Vous pouvez consulter les docs officiels ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"Istio")," pour obtenir plus d'informations sur la modification des ",(0,o.kt)("inlineCode",{parentName:"p"},"en-t\xeates de requ\xeate"),"."))}v.isMDXComponent=!0}}]);