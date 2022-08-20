"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[790],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return c}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),m=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(n),c=o,k=p["".concat(s,".").concat(c)]||p[c]||u[c]||r;return n?t.createElement(k,l(l({ref:a},d),{},{components:n})):t.createElement(k,l({ref:a},d))}));function c(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2489:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var t=n(3117),o=n(102),r=(n(7294),n(3905)),l=["components"],i={id:"rbac-with-domains-api",title:"RBAC avec API Domains",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",keywords:["RBAC with domains","API"]},s=void 0,m={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC avec API Domains",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/fr/docs/rbac-with-domains-api",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC avec API Domains",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",keywords:["RBAC with domains","API"]},sidebar:"docs",previous:{title:"RBAC API",permalink:"/fr/docs/rbac-api"},next:{title:"API RoleManager",permalink:"/fr/docs/rolemanager-api"}},d={},u=[{value:"R\xe9f\xe9rence",id:"r\xe9f\xe9rence",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3}],p=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},c=p("Tabs"),k=p("TabItem"),b={toc:u};function g(e){var a=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Une API plus conviviale pour RBAC avec les domaines. Cette API est un sous-ensemble de Management API. Les utilisateurs de RBAC peuvent utiliser cette API pour simplifier le code."),(0,r.kt)("h2",{id:"r\xe9f\xe9rence"},"R\xe9f\xe9rence"),(0,r.kt)("p",null,"la variable globale ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," est l'instance Enforcer ."),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,r.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,r.kt)(k,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,r.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,r.kt)(k,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,r.kt)(k,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,r.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,r.kt)("h3",{id:"getusersforroleindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,r.kt)("p",null,"GetUsersForRoleInDomain r\xe9cup\xe8re les utilisateurs qui ont un r\xf4le dans un domaine."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,r.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,r.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,r.kt)("h3",{id:"getrolesforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,r.kt)("p",null,"GetRolesForUserInDomain r\xe9cup\xe8re les r\xf4les qu'un utilisateur a dans un domaine."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,r.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,r.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,r.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,r.kt)("h3",{id:"getpermissionsforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,r.kt)("p",null,"GetPermissionsForUserInDomain r\xe9cup\xe8re les permissions pour un utilisateur ou un r\xf4le dans un domaine."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,r.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,r.kt)("h3",{id:"addroleforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,r.kt)("p",null,"AddRoleForUserInDomain ajoute un r\xf4le pour un utilisateur dans un domaine. Renvoie false si l'utilisateur a d\xe9j\xe0 le r\xf4le (aka non affect\xe9)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,r.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,r.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,r.kt)("h3",{id:"deleteroleforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,r.kt)("p",null,"Supprimer r\xf4leForUserInDomain supprime un r\xf4le pour un utilisateur dans un domaine. Renvoie false si l'utilisateur n'a pas le r\xf4le (aka non affect\xe9)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,r.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,r.kt)("h3",{id:"deleterolesforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,r.kt)("p",null,"Supprimer les RolesForUserInDomain supprime tous les r\xf4les pour un utilisateur dans un domaine. Renvoie false si l'utilisateur n'a aucun r\xf4le (aka non affect\xe9)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,r.kt)("h3",{id:"getallusersbydomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,r.kt)("p",null,"GetAllUsersByDomain obtiendrait tous les utilisateurs associ\xe9s au domaine. Retourne un tableau de cha\xeene vide si aucun domaine n'est d\xe9fini dans le mod\xe8le."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,r.kt)("h3",{id:"deleteallusersbydomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,r.kt)("p",null,"DeleteAllUsersByDomain supprimera tous les utilisateurs associ\xe9s au domaine. Renvoie false si aucun domaine n'est d\xe9fini dans le mod\xe8le."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,r.kt)("h3",{id:"deletedomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,r.kt)("p",null,"DeleteDomains supprimera tous les utilisateurs et r\xf4les associ\xe9s. Cela supprimera tous les domaines si le param\xe8tre n'est pas fourni."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,r.kt)("h3",{id:"getalldomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,r.kt)("p",null,"GetAllDomains obtiendrait tous les domaines."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Si vous g\xe9rez un domaine comme ",(0,r.kt)("inlineCode",{parentName:"p"},"name::domain"),", cela peut conduire \xe0 un comportement inattendu. En Casbin, ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," est un mot cl\xe9 invers\xe9, tout comme ",(0,r.kt)("inlineCode",{parentName:"p"},"pour"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"si")," dans un langage de programmation, nous ne devrions jamais mettre ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," dans un domaine.")))}g.isMDXComponent=!0}}]);