"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3948],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(d.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,g=m["".concat(d,".").concat(u)]||m[u]||s[u]||l;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1857:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={id:"policy-storage",title:"Policy Storage",description:"Almacenamiento de Pol\xedticas",keywords:["policy storage"],authors:["hsluoyz"]},o=void 0,i={unversionedId:"policy-storage",id:"policy-storage",title:"Policy Storage",description:"Almacenamiento de Pol\xedticas",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/es/docs/policy-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PolicyStorage.mdx",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"Policy Storage",description:"Almacenamiento de Pol\xedticas",keywords:["policy storage"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Model Storage",permalink:"/es/docs/model-storage"},next:{title:"Policy Subset Loading",permalink:"/es/docs/policy-subset-loading"}},d={},p=[{value:"Cargando pol\xedtica desde un archivo .CSV",id:"cargando-pol\xedtica-desde-un-archivo-csv",level:2},{value:"API de Adaptador",id:"api-de-adaptador",level:2},{value:"Formato de Almacenamiento de Base de Datos",id:"formato-de-almacenamiento-de-base-de-datos",level:2},{value:"Detalles del Adaptador",id:"detalles-del-adaptador",level:2}],c={toc:p};function s(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En Casbin, el almacenamiento de pol\xedticas se implementa como un ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"adaptador"),"."),(0,r.kt)("h2",{id:"cargando-pol\xedtica-desde-un-archivo-csv"},"Cargando pol\xedtica desde un archivo .CSV"),(0,r.kt)("p",null,"Esta es la forma m\xe1s com\xfan de usar Casbin. Es f\xe1cil de entender para principiantes y conveniente para compartir cuando pides ayuda al equipo de Casbin."),(0,r.kt)("p",null,"El contenido del archivo ",(0,r.kt)("inlineCode",{parentName:"p"},".CSV")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"examples/rbac","_","policy.csv")," es el siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Si tu archivo contiene comas, debes envolverlas en comillas dobles. Por ejemplo:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, "data1,data2", read    --correct\np, alice, data1,data2, read        --incorrect (the whole phrase "data1,data2" should be wrapped in double quotes)\n')),(0,r.kt)("p",{parentName:"admonition"},"Si tu archivo contiene comas y comillas dobles, debes encerrar el campo en comillas dobles y duplicar cualquier comilla doble incrustada."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, data, "r.act in (""get"", ""post"")"        --correct\np, alice, data, "r.act in ("get", "post")"            --incorrect (you should use "" to escape "")\n')),(0,r.kt)("p",{parentName:"admonition"},"Problema relacionado: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"casbin#886"))),(0,r.kt)("h2",{id:"api-de-adaptador"},"API de Adaptador"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"M\xe9todo"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"b\xe1sico"),(0,r.kt)("td",{parentName:"tr",align:null},"Cargar todas las reglas de pol\xedtica desde el almacenamiento")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SavePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"b\xe1sico"),(0,r.kt)("td",{parentName:"tr",align:null},"Guardar todas las reglas de pol\xedtica en el almacenamiento")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"opcional"),(0,r.kt)("td",{parentName:"tr",align:null},"A\xf1adir una regla de pol\xedtica al almacenamiento")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"opcional"),(0,r.kt)("td",{parentName:"tr",align:null},"Eliminar una regla de pol\xedtica del almacenamiento")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveFilteredPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"opcional"),(0,r.kt)("td",{parentName:"tr",align:null},"Eliminar reglas de pol\xedtica que coincidan con el filtro del almacenamiento")))),(0,r.kt)("h2",{id:"formato-de-almacenamiento-de-base-de-datos"},"Formato de Almacenamiento de Base de Datos"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tu archivo de pol\xedtica")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Estructura de base de datos correspondiente (como MySQL)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"ptype"),(0,r.kt)("th",{parentName:"tr",align:null},"v0"),(0,r.kt)("th",{parentName:"tr",align:null},"v1"),(0,r.kt)("th",{parentName:"tr",align:null},"v2"),(0,r.kt)("th",{parentName:"tr",align:null},"v3"),(0,r.kt)("th",{parentName:"tr",align:null},"v4"),(0,r.kt)("th",{parentName:"tr",align:null},"v5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2","_","admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"read"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2","_","admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"write"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Significado de cada columna")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id"),": La clave primaria en la base de datos. No existe como parte de la ",(0,r.kt)("inlineCode",{parentName:"p"},"pol\xedtica de casbin"),". La forma en que se genera depende del adaptador espec\xedfico.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ptype"),": Corresponde a ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g2"),", etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v0-v5"),": Los nombres de las columnas no tienen un significado espec\xedfico y corresponden a los valores en el ",(0,r.kt)("inlineCode",{parentName:"p"},"policy csv")," de izquierda a derecha. El n\xfamero de columnas depende de cu\xe1ntas definas t\xfa mismo. En teor\xeda, puede haber un n\xfamero infinito de columnas, pero generalmente solo se implementan ",(0,r.kt)("strong",{parentName:"p"},"6")," columnas en el adaptador. Si esto no es suficiente para ti, por favor env\xeda un problema al repositorio del adaptador correspondiente."))),(0,r.kt)("h2",{id:"detalles-del-adaptador"},"Detalles del Adaptador"),(0,r.kt)("p",null,"Para m\xe1s detalles sobre el uso de la API del adaptador y el dise\xf1o de la estructura de la tabla de la base de datos, por favor visita: ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}s.isMDXComponent=!0}}]);