"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6619],{3905:(e,r,o)=>{o.d(r,{Zo:()=>s,kt:()=>u});var a=o(7294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,a,t=function(e,r){if(null==e)return{};var o,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=a.createContext({}),d=function(e){var r=a.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},s=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var o=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(o),u=t,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return o?a.createElement(g,i(i({ref:r},s),{},{components:o})):a.createElement(g,i({ref:r},s))}));function u(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=o.length,i=new Array(n);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var d=2;d<n;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1190:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var a=o(7462),t=(o(7294),o(3905));const n={id:"model-storage",title:"Model Storage",description:"Armazenamento de modelo",keywords:["model storage"],authors:["hsluoyz"]},i=void 0,c={unversionedId:"model-storage",id:"model-storage",title:"Model Storage",description:"Armazenamento de modelo",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/ModelStorage.mdx",sourceDirName:".",slug:"/model-storage",permalink:"/pt/docs/model-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ModelStorage.mdx",tags:[],version:"current",frontMatter:{id:"model-storage",title:"Model Storage",description:"Armazenamento de modelo",keywords:["model storage"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Storage",permalink:"/pt/docs/category/storage"},next:{title:"Policy Storage",permalink:"/pt/docs/policy-storage"}},l={},d=[{value:"Carregar modelo a partir de arquivo .CONF",id:"carregar-modelo-a-partir-de-arquivo-conf",level:2},{value:"Carregar modelo a partir do c\xf3digo",id:"carregar-modelo-a-partir-do-c\xf3digo",level:2},{value:"Carregar modelo a partir de string",id:"carregar-modelo-a-partir-de-string",level:2}],s={toc:d};function p(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Ao contr\xe1rio da pol\xedtica, o modelo s\xf3 pode ser carregado, n\xe3o pode ser salvo. Acreditamos que o modelo n\xe3o \xe9 um componente din\xe2mico e n\xe3o deve ser modificado em tempo de execu\xe7\xe3o, por isso n\xe3o implementamos uma API para salvar o modelo no armazenamento."),(0,t.kt)("p",null,"No entanto, h\xe1 boas not\xedcias. Fornecemos tr\xeas maneiras equivalentes de carregar um modelo, seja estaticamente ou dinamicamente:"),(0,t.kt)("h2",{id:"carregar-modelo-a-partir-de-arquivo-conf"},"Carregar modelo a partir de arquivo .CONF"),(0,t.kt)("p",null,"Esta \xe9 a maneira mais comum de usar o Casbin. \xc9 f\xe1cil de entender para iniciantes e conveniente para compartilhar quando voc\xea precisa de ajuda da equipe do Casbin."),(0,t.kt)("p",null,"O conte\xfado do arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},".CONF")," ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"examples/rbac","_","model.conf")," \xe9 o seguinte:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,t.kt)("p",null,"Ent\xe3o voc\xea pode carregar o arquivo de modelo da seguinte forma:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,t.kt)("h2",{id:"carregar-modelo-a-partir-do-c\xf3digo"},"Carregar modelo a partir do c\xf3digo"),(0,t.kt)("p",null,"O modelo pode ser inicializado dinamicamente a partir do c\xf3digo em vez de usar um arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},".CONF"),". Aqui est\xe1 um exemplo para o modelo RBAC:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\n// Initialize the model from Go code.\nm := model.NewModel()\nm.AddDef("r", "r", "sub, obj, act")\nm.AddDef("p", "p", "sub, obj, act")\nm.AddDef("g", "g", "_, _")\nm.AddDef("e", "e", "some(where (p.eft == allow))")\nm.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act")\n\n// Load the policy rules from the .CSV file adapter.\n// Replace it with your adapter to avoid using files.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')),(0,t.kt)("h2",{id:"carregar-modelo-a-partir-de-string"},"Carregar modelo a partir de string"),(0,t.kt)("p",null,"Alternativamente, voc\xea pode carregar todo o texto do modelo a partir de uma string de v\xe1rias linhas. A vantagem dessa abordagem \xe9 que voc\xea n\xe3o precisa manter um arquivo de modelo."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n)\n\n// Initialize the model from a string.\ntext :=\n`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n`\nm, _ := model.NewModelFromString(text)\n\n// Load the policy rules from the .CSV file adapter.\n// Replace it with your adapter to avoid using files.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')))}p.isMDXComponent=!0}}]);