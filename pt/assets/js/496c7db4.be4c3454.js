"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[425],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>c});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=n.createContext({}),m=function(e){var a=n.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},d=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(o),c=t,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return o?n.createElement(k,l(l({ref:a},d),{},{components:o})):n.createElement(k,l({ref:a},d))}));function c(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var m=2;m<r;m++)l[m]=o[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2955:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=o(7462),t=(o(7294),o(3905));const r={id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Uma API mais amig\xe1vel para usu\xe1rios para RBAC com dom\xednios. Esta API \xe9 um subconjunto da API de Gerenciamento. Usu\xe1rios RBAC podem usar esta API para simplificar seu c\xf3digo.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},l=void 0,i={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Uma API mais amig\xe1vel para usu\xe1rios para RBAC com dom\xednios. Esta API \xe9 um subconjunto da API de Gerenciamento. Usu\xe1rios RBAC podem usar esta API para simplificar seu c\xf3digo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/pt/docs/rbac-with-domains-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomainsAPI.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Uma API mais amig\xe1vel para usu\xe1rios para RBAC com dom\xednios. Esta API \xe9 um subconjunto da API de Gerenciamento. Usu\xe1rios RBAC podem usar esta API para simplificar seu c\xf3digo.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"RBAC API",permalink:"/pt/docs/rbac-api"},next:{title:"RBAC with Conditions API",permalink:"/pt/docs/rbac-with-conditions-api"}},s={},m=[{value:"Refer\xeancia",id:"refer\xeancia",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3},{value:"<code>GetAllRolesByDomain()</code>",id:"getallrolesbydomain",level:3},{value:"<code>GetImplicitUsersForResourceByDomain()</code>",id:"getimplicitusersforresourcebydomain",level:3}],d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",a)},p=d("Tabs"),u=d("TabItem"),c={toc:m};function k(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,n.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Uma API mais amig\xe1vel para usu\xe1rios para RBAC com dom\xednios. Esta API \xe9 um subconjunto da API de Gerenciamento. Usu\xe1rios RBAC podem usar esta API para simplificar seu c\xf3digo."),(0,t.kt)("h2",{id:"refer\xeancia"},"Refer\xeancia"),(0,t.kt)("p",null,"A vari\xe1vel global ",(0,t.kt)("inlineCode",{parentName:"p"},"e")," representa a inst\xe2ncia do Enforcer."),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,t.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,t.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,t.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,t.kt)(u,{value:".NET",label:".NET",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,t.kt)(u,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,t.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,t.kt)("h3",{id:"getusersforroleindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"GetUsersForRoleInDomain()")," recupera os usu\xe1rios que t\xeam uma fun\xe7\xe3o dentro de um dom\xednio."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,t.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,t.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,t.kt)("h3",{id:"getrolesforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"GetRolesForUserInDomain()")," recupera as fun\xe7\xf5es que um usu\xe1rio tem dentro de um dom\xednio."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,t.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,t.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,t.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,t.kt)("h3",{id:"getpermissionsforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUserInDomain()")," recupera as permiss\xf5es para um usu\xe1rio ou fun\xe7\xe3o dentro de um dom\xednio."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,t.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,t.kt)("h3",{id:"addroleforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"AddRoleForUserInDomain()")," adiciona uma fun\xe7\xe3o para um usu\xe1rio dentro de um dom\xednio. Ela retorna ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," se o usu\xe1rio j\xe1 tem a fun\xe7\xe3o (nenhuma altera\xe7\xe3o feita)."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,t.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,t.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,t.kt)("h3",{id:"deleteroleforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"DeleteRoleForUserInDomain()")," remove uma fun\xe7\xe3o para um usu\xe1rio dentro de um dom\xednio. Ela retorna ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," se o usu\xe1rio n\xe3o tem a fun\xe7\xe3o (nenhuma altera\xe7\xe3o feita)."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,t.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,t.kt)("h3",{id:"deleterolesforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"DeleteRolesForUserInDomain()")," remove todas as fun\xe7\xf5es para um usu\xe1rio dentro de um dom\xednio. Ela retorna ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," se o usu\xe1rio n\xe3o tem nenhuma fun\xe7\xe3o (nenhuma altera\xe7\xe3o feita)."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,t.kt)("h3",{id:"getallusersbydomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"GetAllUsersByDomain()")," recupera todos os usu\xe1rios associados com o dom\xednio dado. Ela retorna um array de strings vazio se nenhum dom\xednio \xe9 definido no modelo."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,t.kt)("h3",{id:"deleteallusersbydomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,t.kt)("p",null,"A fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"DeleteAllUsersByDomain()")," deleta todos os usu\xe1rios associados com o dom\xednio dado. Ela retorna ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," se nenhum dom\xednio \xe9 definido no modelo."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,t.kt)("h3",{id:"deletedomains"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,t.kt)("p",null,"DeleteDomains deletaria todos os usu\xe1rios e fun\xe7\xf5es associados.\nEla deletaria todos os dom\xednios se o par\xe2metro n\xe3o for fornecido."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,t.kt)("h3",{id:"getalldomains"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,t.kt)("p",null,"GetAllDomains obteria todos os dom\xednios."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Se voc\xea est\xe1 lidando com um dom\xednio como ",(0,t.kt)("inlineCode",{parentName:"p"},"name::domain"),", isso pode levar a um comportamento inesperado. No Casbin, ",(0,t.kt)("inlineCode",{parentName:"p"},"::")," \xe9 uma palavra reservada, assim como ",(0,t.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"if")," em uma linguagem de programa\xe7\xe3o, nunca devemos colocar ",(0,t.kt)("inlineCode",{parentName:"p"},"::")," em um dom\xednio.")),(0,t.kt)("h3",{id:"getallrolesbydomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetAllRolesByDomain()")),(0,t.kt)("p",null,"GetAllRolesByDomain obteria todas as fun\xe7\xf5es associadas com o dom\xednio."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllRolesByDomain("domain1")\n')))),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Este m\xe9todo n\xe3o se aplica a dom\xednios que t\xeam uma rela\xe7\xe3o de heran\xe7a, tamb\xe9m conhecidos como fun\xe7\xf5es impl\xedcitas.")),(0,t.kt)("h3",{id:"getimplicitusersforresourcebydomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetImplicitUsersForResourceByDomain()")),(0,t.kt)("p",null,"GetImplicitUsersForResourceByDomain retorna usu\xe1rio impl\xedcito baseado no recurso e dom\xednio."),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\ng, alice, admin, domain1\ng, bob, admin, domain2\n")),(0,t.kt)("p",null,'GetImplicitUsersForResourceByDomain("data1", "domain1") retornar\xe1 ',(0,t.kt)("inlineCode",{parentName:"p"},'["alice", "domain1", "data1", "read"],["alice", "domain1", "data1", "write"]], nil')),(0,t.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,t.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ImplicitUsers, err := e.GetImplicitUsersForResourceByDomain("data1", "domain1")\n')))),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},'Apenas usu\xe1rios ser\xe3o retornados, fun\xe7\xf5es (2\xba arg em "g") ser\xe3o exclu\xeddas.')))}k.isMDXComponent=!0}}]);