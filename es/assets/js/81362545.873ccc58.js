"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7397],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>c});var o=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,o,l=function(e,a){if(null==e)return{};var n,o,l={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),d=function(e){var a=o.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=d(e.components);return o.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var n=e.components,l=e.mdxType,t=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||t;return n?o.createElement(k,r(r({ref:a},m),{},{components:n})):o.createElement(k,r({ref:a},m))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var t=n.length,r=new Array(t);r[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<t;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9534:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var o=n(7462),l=(n(7294),n(3905));const t={id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Una API m\xe1s amigable para el usuario para RBAC con dominios. Esta API es un subconjunto de la API de Gesti\xf3n. Los usuarios de RBAC pueden usar esta API para simplificar su c\xf3digo.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},r=void 0,i={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Una API m\xe1s amigable para el usuario para RBAC con dominios. Esta API es un subconjunto de la API de Gesti\xf3n. Los usuarios de RBAC pueden usar esta API para simplificar su c\xf3digo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/es/docs/rbac-with-domains-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomainsAPI.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"Una API m\xe1s amigable para el usuario para RBAC con dominios. Esta API es un subconjunto de la API de Gesti\xf3n. Los usuarios de RBAC pueden usar esta API para simplificar su c\xf3digo.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"RBAC API",permalink:"/es/docs/rbac-api"},next:{title:"RBAC with Conditions API",permalink:"/es/docs/rbac-with-conditions-api"}},s={},d=[{value:"Referencia",id:"referencia",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3},{value:"<code>GetAllRolesByDomain()</code>",id:"getallrolesbydomain",level:3},{value:"<code>GetImplicitUsersForResourceByDomain()</code>",id:"getimplicitusersforresourcebydomain",level:3}],m=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},p=m("Tabs"),u=m("TabItem"),c={toc:d};function k(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Una API m\xe1s amigable para el usuario para RBAC con dominios. Esta API es un subconjunto de la API de Gesti\xf3n. Los usuarios de RBAC pueden usar esta API para simplificar su c\xf3digo."),(0,l.kt)("h2",{id:"referencia"},"Referencia"),(0,l.kt)("p",null,"La variable global ",(0,l.kt)("inlineCode",{parentName:"p"},"e")," representa la instancia de Enforcer."),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,l.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,l.kt)(u,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,l.kt)(u,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,l.kt)("h3",{id:"getusersforroleindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"GetUsersForRoleInDomain()")," recupera los usuarios que tienen un rol dentro de un dominio."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,l.kt)("h3",{id:"getrolesforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"GetRolesForUserInDomain()")," recupera los roles que un usuario tiene dentro de un dominio."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,l.kt)("h3",{id:"getpermissionsforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUserInDomain()")," recupera los permisos para un usuario o rol dentro de un dominio."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,l.kt)("h3",{id:"addroleforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"AddRoleForUserInDomain()")," a\xf1ade un rol para un usuario dentro de un dominio. Devuelve ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si el usuario ya tiene el rol (no se realizaron cambios)."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,l.kt)("h3",{id:"deleteroleforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteRoleForUserInDomain()")," elimina un rol para un usuario dentro de un dominio. Devuelve ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si el usuario no tiene el rol (no se realizaron cambios)."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,l.kt)("h3",{id:"deleterolesforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteRolesForUserInDomain()")," elimina todos los roles para un usuario dentro de un dominio. Devuelve ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si el usuario no tiene ning\xfan rol (no se realizaron cambios)."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,l.kt)("h3",{id:"getallusersbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAllUsersByDomain()")," recupera todos los usuarios asociados con el dominio dado. Devuelve un arreglo de cadenas vac\xedo si no se define ning\xfan dominio en el modelo."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,l.kt)("h3",{id:"deleteallusersbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,l.kt)("p",null,"La funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteAllUsersByDomain()")," elimina todos los usuarios asociados con el dominio dado. Devuelve ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," si no se define ning\xfan dominio en el modelo."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,l.kt)("h3",{id:"deletedomains"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,l.kt)("p",null,"DeleteDomains eliminar\xeda todos los usuarios y roles asociados.\nEliminar\xeda todos los dominios si no se proporciona un par\xe1metro."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,l.kt)("h3",{id:"getalldomains"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,l.kt)("p",null,"GetAllDomains obtendr\xeda todos los dominios."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Si est\xe1s manejando un dominio como ",(0,l.kt)("inlineCode",{parentName:"p"},"name::domain"),", puede llevar a un comportamiento inesperado. En Casbin, ",(0,l.kt)("inlineCode",{parentName:"p"},"::")," es una palabra clave reservada, al igual que ",(0,l.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," en un lenguaje de programaci\xf3n, nunca deber\xedamos poner ",(0,l.kt)("inlineCode",{parentName:"p"},"::")," en un dominio.")),(0,l.kt)("h3",{id:"getallrolesbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllRolesByDomain()")),(0,l.kt)("p",null,"GetAllRolesByDomain obtendr\xeda todos los roles asociados con el dominio."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllRolesByDomain("domain1")\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Este m\xe9todo no se aplica a dominios que tienen una relaci\xf3n de herencia, tambi\xe9n conocidos como roles impl\xedcitos.")),(0,l.kt)("h3",{id:"getimplicitusersforresourcebydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetImplicitUsersForResourceByDomain()")),(0,l.kt)("p",null,"GetImplicitUsersForResourceByDomain devuelve usuarios impl\xedcitos basados en el recurso y el dominio."),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\ng, alice, admin, domain1\ng, bob, admin, domain2\n")),(0,l.kt)("p",null,'GetImplicitUsersForResourceByDomain("data1", "domain1") devolver\xe1 ',(0,l.kt)("inlineCode",{parentName:"p"},'["alice", "domain1", "data1", "read"],["alice", "domain1", "data1", "write"]], nil')),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ImplicitUsers, err := e.GetImplicitUsersForResourceByDomain("data1", "domain1")\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},'Solo se devolver\xe1n usuarios, los roles (2\xba arg en "g") ser\xe1n excluidos.')))}k.isMDXComponent=!0}}]);