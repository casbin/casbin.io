"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[790],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>c});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),m=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?t.createElement(k,r(r({ref:a},d),{},{components:n})):t.createElement(k,r({ref:a},d))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var m=2;m<o;m++)r[m]=n[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2489:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var t=n(7462),l=(n(7294),n(3905));const o={id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Une API plus conviviale pour RBAC avec des domaines. Cette API est un sous-ensemble de l'API de gestion. Les utilisateurs RBAC peuvent utiliser cette API pour simplifier leur code.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},r=void 0,i={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Une API plus conviviale pour RBAC avec des domaines. Cette API est un sous-ensemble de l'API de gestion. Les utilisateurs RBAC peuvent utiliser cette API pour simplifier leur code.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/fr/docs/rbac-with-domains-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomainsAPI.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Une API plus conviviale pour RBAC avec des domaines. Cette API est un sous-ensemble de l'API de gestion. Les utilisateurs RBAC peuvent utiliser cette API pour simplifier leur code.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"RBAC API",permalink:"/fr/docs/rbac-api"},next:{title:"RBAC with Conditions API",permalink:"/fr/docs/rbac-with-conditions-api"}},s={},m=[{value:"R\xe9f\xe9rence",id:"r\xe9f\xe9rence",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3},{value:"<code>GetAllRolesByDomain()</code>",id:"getallrolesbydomain",level:3},{value:"<code>GetImplicitUsersForResourceByDomain()</code>",id:"getimplicitusersforresourcebydomain",level:3}],d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},p=d("Tabs"),u=d("TabItem"),c={toc:m};function k(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Une API plus conviviale pour RBAC avec des domaines. Cette API est un sous-ensemble de l'API de gestion. Les utilisateurs RBAC peuvent utiliser cette API pour simplifier leur code."),(0,l.kt)("h2",{id:"r\xe9f\xe9rence"},"R\xe9f\xe9rence"),(0,l.kt)("p",null,"La variable globale ",(0,l.kt)("inlineCode",{parentName:"p"},"e")," repr\xe9sente l'instance Enforcer."),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,l.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,l.kt)(u,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,l.kt)(u,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,l.kt)("h3",{id:"getusersforroleindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"GetUsersForRoleInDomain()")," r\xe9cup\xe8re les utilisateurs qui ont un r\xf4le dans un domaine."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,l.kt)("h3",{id:"getrolesforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"GetRolesForUserInDomain()")," r\xe9cup\xe8re les r\xf4les qu'un utilisateur a dans un domaine."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,l.kt)("h3",{id:"getpermissionsforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUserInDomain()")," r\xe9cup\xe8re les permissions pour un utilisateur ou un r\xf4le dans un domaine."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,l.kt)("h3",{id:"addroleforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"AddRoleForUserInDomain()")," ajoute un r\xf4le pour un utilisateur dans un domaine. Elle renvoie ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si l'utilisateur a d\xe9j\xe0 le r\xf4le (aucun changement effectu\xe9)."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,l.kt)("h3",{id:"deleteroleforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteRoleForUserInDomain()")," supprime un r\xf4le pour un utilisateur dans un domaine. Elle renvoie ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si l'utilisateur n'a pas le r\xf4le (aucun changement effectu\xe9)."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,l.kt)("h3",{id:"deleterolesforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteRolesForUserInDomain()")," supprime tous les r\xf4les pour un utilisateur dans un domaine. Elle renvoie ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si l'utilisateur n'a aucun r\xf4le (aucun changement effectu\xe9)."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,l.kt)("h3",{id:"getallusersbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAllUsersByDomain()")," r\xe9cup\xe8re tous les utilisateurs associ\xe9s au domaine donn\xe9. Elle renvoie un tableau de cha\xeenes de caract\xe8res vide si aucun domaine n'est d\xe9fini dans le mod\xe8le."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,l.kt)("h3",{id:"deleteallusersbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,l.kt)("p",null,"La fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteAllUsersByDomain()")," supprime tous les utilisateurs associ\xe9s au domaine donn\xe9. Elle renvoie ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si aucun domaine n'est d\xe9fini dans le mod\xe8le."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,l.kt)("h3",{id:"deletedomains"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,l.kt)("p",null,"DeleteDomains supprimerait tous les utilisateurs et r\xf4les associ\xe9s.\nIl supprimerait tous les domaines si aucun param\xe8tre n'est fourni."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,l.kt)("h3",{id:"getalldomains"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,l.kt)("p",null,"GetAllDomains obtiendrait tous les domaines."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Si vous manipulez un domaine comme ",(0,l.kt)("inlineCode",{parentName:"p"},"name::domain"),", cela peut entra\xeener un comportement inattendu. Dans Casbin, ",(0,l.kt)("inlineCode",{parentName:"p"},"::")," est un mot-cl\xe9 r\xe9serv\xe9, tout comme ",(0,l.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," dans un langage de programmation, nous ne devrions jamais mettre ",(0,l.kt)("inlineCode",{parentName:"p"},"::")," dans un domaine.")),(0,l.kt)("h3",{id:"getallrolesbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllRolesByDomain()")),(0,l.kt)("p",null,"GetAllRolesByDomain obtiendrait tous les r\xf4les associ\xe9s au domaine."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllRolesByDomain("domain1")\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Cette m\xe9thode ne s'applique pas aux domaines qui ont une relation d'h\xe9ritage, \xe9galement connus sous le nom de r\xf4les implicites.")),(0,l.kt)("h3",{id:"getimplicitusersforresourcebydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetImplicitUsersForResourceByDomain()")),(0,l.kt)("p",null,"GetImplicitUsersForResourceByDomain renvoie l'utilisateur implicite en fonction de la ressource et du domaine."),(0,l.kt)("p",null,"Par exemple :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\ng, alice, admin, domain1\ng, bob, admin, domain2\n")),(0,l.kt)("p",null,'GetImplicitUsersForResourceByDomain("data1", "domain1") renverra ',(0,l.kt)("inlineCode",{parentName:"p"},'["alice", "domain1", "data1", "read"],["alice", "domain1", "data1", "write"]], nil')),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ImplicitUsers, err := e.GetImplicitUsersForResourceByDomain("data1", "domain1")\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},'Seuls les utilisateurs seront renvoy\xe9s, les r\xf4les (2\xe8me argument dans "g") seront exclus.')))}k.isMDXComponent=!0}}]);