"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3498],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>c});var n=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},d=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(o),c=r,b=m["".concat(p,".").concat(c)]||m[c]||u[c]||t;return o?n.createElement(b,i(i({ref:a},d),{},{components:o})):n.createElement(b,i({ref:a},d))}));function c(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,i=new Array(t);i[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<t;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},906:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const t={id:"rbac",title:"RBAC",description:"Uso do Casbin RBAC",keywords:["RBAC","role definition","role hierarchy"],authors:["hsluoyz"]},i=void 0,s={unversionedId:"rbac",id:"rbac",title:"RBAC",description:"Uso do Casbin RBAC",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/RBAC.mdx",sourceDirName:".",slug:"/rbac",permalink:"/pt/docs/rbac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBAC.mdx",tags:[],version:"current",frontMatter:{id:"rbac",title:"RBAC",description:"Uso do Casbin RBAC",keywords:["RBAC","role definition","role hierarchy"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Functions",permalink:"/pt/docs/function"},next:{title:"RBAC with Pattern",permalink:"/pt/docs/rbac-with-pattern"}},p={},l=[{value:"Defini\xe7\xe3o de Papel",id:"defini\xe7\xe3o-de-papel",level:2},{value:"Hierarquia de Pap\xe9is",id:"hierarquia-de-pap\xe9is",level:2},{value:"Como Distinguir Papel de Usu\xe1rio?",id:"como-distinguir-papel-de-usu\xe1rio",level:2},{value:"Como Consultar Pap\xe9is ou Permiss\xf5es Impl\xedcitas?",id:"como-consultar-pap\xe9is-ou-permiss\xf5es-impl\xedcitas",level:2},{value:"Usando Correspond\xeancia de Padr\xf5es no RBAC",id:"usando-correspond\xeancia-de-padr\xf5es-no-rbac",level:2},{value:"Gerenciador de Fun\xe7\xf5es",id:"gerenciador-de-fun\xe7\xf5es",level:2}],d={toc:l};function u(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"defini\xe7\xe3o-de-papel"},"Defini\xe7\xe3o de Papel"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"[role_definition]")," \xe9 usada para definir as rela\xe7\xf5es de heran\xe7a de pap\xe9is no RBAC. O Casbin suporta m\xfaltiplas inst\xe2ncias de sistemas RBAC, onde usu\xe1rios podem ter pap\xe9is e suas rela\xe7\xf5es de heran\xe7a, e recursos tamb\xe9m podem ter pap\xe9is e suas rela\xe7\xf5es de heran\xe7a. Esses dois sistemas RBAC n\xe3o interferir\xe3o um com o outro."),(0,r.kt)("p",null,"Esta se\xe7\xe3o \xe9 opcional. Se voc\xea n\xe3o usa pap\xe9is RBAC no modelo, ent\xe3o omita esta se\xe7\xe3o."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _\ng2 = _, _\n")),(0,r.kt)("p",null,"A defini\xe7\xe3o de papel acima mostra que ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \xe9 um sistema RBAC, e ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," \xe9 outro sistema RBAC. ",(0,r.kt)("inlineCode",{parentName:"p"},"_,_")," significa que h\xe1 duas partes envolvidas em uma rela\xe7\xe3o de heran\xe7a. No caso mais comum, voc\xea geralmente usa ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," sozinho se voc\xea s\xf3 precisa de pap\xe9is para usu\xe1rios. Voc\xea tamb\xe9m pode usar tanto ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," quanto ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," quando voc\xea precisa de pap\xe9is (ou grupos) tanto para usu\xe1rios quanto para recursos. Por favor, veja os exemplos em ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"rbac","_","model.conf")," e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf"},"rbac","_","model","_","with","_","resource","_","roles.conf"),"."),(0,r.kt)("p",null,"O Casbin armazena o mapeamento real entre usu\xe1rio-papel (ou mapeamento recurso-papel se voc\xea est\xe1 usando pap\xe9is em recursos) na pol\xedtica. Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, data2_admin, data2, read\ng, alice, data2_admin\n")),(0,r.kt)("p",null,"Isso significa que ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," herda/\xe9 membro do papel ",(0,r.kt)("inlineCode",{parentName:"p"},"data2_admin"),". Aqui, ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," pode ser um usu\xe1rio, um recurso ou um papel. O Casbin apenas o reconhece como uma string."),(0,r.kt)("p",null,"Ent\xe3o, em um comparador, voc\xea deve verificar o papel como mostrado abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"Isso significa que o ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," na solicita\xe7\xe3o deve ter o papel ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," na pol\xedtica."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"O Casbin apenas armazena o mapeamento usu\xe1rio-papel."),(0,r.kt)("li",{parentName:"ol"},"O Casbin n\xe3o verifica se um usu\xe1rio \xe9 um usu\xe1rio v\xe1lido ou se um papel \xe9 um papel v\xe1lido. Isso deve ser cuidado pela autentica\xe7\xe3o."),(0,r.kt)("li",{parentName:"ol"},"N\xe3o use o mesmo nome para um usu\xe1rio e um papel dentro de um sistema RBAC, porque o Casbin reconhece usu\xe1rios e pap\xe9is como strings, e n\xe3o h\xe1 como o Casbin saber se voc\xea est\xe1 especificando o usu\xe1rio ",(0,r.kt)("inlineCode",{parentName:"li"},"alice")," ou o papel ",(0,r.kt)("inlineCode",{parentName:"li"},"alice"),". Voc\xea pode simplesmente resolver isso usando ",(0,r.kt)("inlineCode",{parentName:"li"},"role_alice"),"."),(0,r.kt)("li",{parentName:"ol"},"Se ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," tem o papel ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", e ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," tem o papel ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),", ent\xe3o ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," tem o papel ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),". Esta transitividade \xe9 infinita por enquanto."))),(0,r.kt)("admonition",{title:"Conven\xe7\xe3o de Nomes de Tokens",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Convencionalmente, o nome do token de sujeito na defini\xe7\xe3o de pol\xedtica \xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," e colocado no in\xedcio. Agora, o Casbin em Golang suporta nomes de tokens personalizados e seus lugares. Se o nome do token de sujeito \xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),", o token de sujeito pode ser colocado em um lugar arbitr\xe1rio sem nenhuma a\xe7\xe3o extra necess\xe1ria. Se o nome do token de sujeito n\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," para ",(0,r.kt)("inlineCode",{parentName:"p"},"constant.SubjectIndex")," deve ser chamado ap\xf3s o inicializador do executor, independentemente de sua posi\xe7\xe3o."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# `subject` here is for sub\n[policy_definition]\np =  obj, act, subject\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.SetFieldIndex("p", constant.SubjectIndex, 2) // index starts from 0\nok, err := e.DeleteUser("alice") // without SetFieldIndex, it will raise an error\n'))),(0,r.kt)("h2",{id:"hierarquia-de-pap\xe9is"},"Hierarquia de Pap\xe9is"),(0,r.kt)("p",null,"O RBAC do Casbin suporta a caracter\xedstica de hierarquia de pap\xe9is do RBAC1, o que significa que se ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," tem ",(0,r.kt)("inlineCode",{parentName:"p"},"role1"),", e ",(0,r.kt)("inlineCode",{parentName:"p"},"role1")," tem ",(0,r.kt)("inlineCode",{parentName:"p"},"role2"),", ent\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," tamb\xe9m ter\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"role2")," e herdar\xe1 suas permiss\xf5es."),(0,r.kt)("p",null,"Aqui, temos um conceito chamado n\xedvel de hierarquia. Ent\xe3o, neste exemplo, o n\xedvel de hierarquia \xe9 2. Para o gerenciador de pap\xe9is embutido no Casbin, voc\xea pode especificar o n\xedvel m\xe1ximo de hierarquia. O valor padr\xe3o \xe9 10. Isso significa que um usu\xe1rio final como ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," s\xf3 pode herdar 10 n\xedveis de pap\xe9is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// NewRoleManager is the constructor for creating an instance of the\n// default RoleManager implementation.\nfunc NewRoleManager(maxHierarchyLevel int) rbac.RoleManager {\n    rm := RoleManager{}\n    rm.allRoles = &sync.Map{}\n    rm.maxHierarchyLevel = maxHierarchyLevel\n    rm.hasPattern = false\n\n    return &rm\n}\n")),(0,r.kt)("h2",{id:"como-distinguir-papel-de-usu\xe1rio"},"Como Distinguir Papel de Usu\xe1rio?"),(0,r.kt)("p",null,"O Casbin n\xe3o distingue entre pap\xe9is e usu\xe1rios em seu RBAC. Ambos s\xe3o tratados como strings. Se voc\xea usa apenas um RBAC de n\xedvel \xfanico (onde um papel nunca ser\xe1 membro de outro papel), voc\xea pode usar ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllSubjects()")," para obter todos os usu\xe1rios e ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllRoles()")," para obter todos os pap\xe9is. Eles listar\xe3o todos os ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," e todos os ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),", respectivamente, em todas as regras ",(0,r.kt)("inlineCode",{parentName:"p"},"g, u, r"),"."),(0,r.kt)("p",null,"Mas se voc\xea est\xe1 usando um RBAC de m\xfaltiplos n\xedveis (com hierarquia de pap\xe9is) e sua aplica\xe7\xe3o n\xe3o registra se um nome (string) \xe9 um usu\xe1rio ou um papel, ou voc\xea tem um usu\xe1rio e um papel com o mesmo nome, voc\xea pode adicionar um prefixo ao papel como ",(0,r.kt)("inlineCode",{parentName:"p"},"role::admin")," antes de pass\xe1-lo para o Casbin. Dessa forma, voc\xea saber\xe1 se \xe9 um papel verificando este prefixo."),(0,r.kt)("h2",{id:"como-consultar-pap\xe9is-ou-permiss\xf5es-impl\xedcitas"},"Como Consultar Pap\xe9is ou Permiss\xf5es Impl\xedcitas?"),(0,r.kt)("p",null,"Quando um usu\xe1rio herda um papel ou permiss\xe3o via hierarquia RBAC em vez de ser diretamente atribu\xeddo a eles em uma regra de pol\xedtica, chamamos esse tipo de atribui\xe7\xe3o de 'impl\xedcita'. Para consultar tais rela\xe7\xf5es impl\xedcitas, voc\xea precisa usar estas duas APIs: ",(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser()")," em vez de ",(0,r.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser()"),". Para mais detalhes, por favor, veja ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"esta quest\xe3o no GitHub"),"."),(0,r.kt)("h2",{id:"usando-correspond\xeancia-de-padr\xf5es-no-rbac"},"Usando Correspond\xeancia de Padr\xf5es no RBAC"),(0,r.kt)("p",null,"Veja ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC com Padr\xe3o")),(0,r.kt)("h2",{id:"gerenciador-de-fun\xe7\xf5es"},"Gerenciador de Fun\xe7\xf5es"),(0,r.kt)("p",null,"Veja a se\xe7\xe3o ",(0,r.kt)("a",{parentName:"p",href:"/docs/role-managers"},"Gerenciadores de Fun\xe7\xf5es")," para detalhes."))}u.isMDXComponent=!0}}]);