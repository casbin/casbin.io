"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[790],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return c}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),m=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(n),c=l,k=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return n?t.createElement(k,r(r({ref:a},d),{},{components:n})):t.createElement(k,r({ref:a},d))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var m=2;m<o;m++)r[m]=n[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2489:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var t=n(3117),l=n(102),o=(n(7294),n(3905)),r=["components"],i={id:"rbac-with-domains-api",title:"RBAC avec API Domains"},s=void 0,m={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC avec API Domains",description:"Une API plus conviviale pour RBAC avec les domaines. Cette API est un sous-ensemble de Management API. Les utilisateurs de RBAC peuvent utiliser cette API pour simplifier le code.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/fr/docs/rbac-with-domains-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomainsAPI.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC avec API Domains"},sidebar:"docs",previous:{title:"RBAC API",permalink:"/fr/docs/rbac-api"},next:{title:"API RoleManager",permalink:"/fr/docs/rolemanager-api"}},d={},u=[{value:"R\xe9f\xe9rence",id:"r\xe9f\xe9rence",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3}],p=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",a)}},c=p("Tabs"),k=p("TabItem"),g={toc:u};function b(e){var a=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Une API plus conviviale pour RBAC avec les domaines. Cette API est un sous-ensemble de Management API. Les utilisateurs de RBAC peuvent utiliser cette API pour simplifier le code."),(0,o.kt)("h2",{id:"r\xe9f\xe9rence"},"R\xe9f\xe9rence"),(0,o.kt)("p",null,"la variable globale ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," est l'instance Enforcer ."),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,o.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,o.kt)(k,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,o.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,o.kt)(k,{value:".NET",label:".NET",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,o.kt)(k,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,o.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,o.kt)("h3",{id:"getusersforroleindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,o.kt)("p",null,"GetUsersForRoleInDomain r\xe9cup\xe8re les utilisateurs qui ont un r\xf4le dans un domaine."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,o.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,o.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,o.kt)("h3",{id:"getrolesforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,o.kt)("p",null,"GetRolesForUserInDomain r\xe9cup\xe8re les r\xf4les qu'un utilisateur a dans un domaine."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,o.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,o.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,o.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,o.kt)("h3",{id:"getpermissionsforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,o.kt)("p",null,"GetPermissionsForUserInDomain r\xe9cup\xe8re les permissions pour un utilisateur ou un r\xf4le dans un domaine."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,o.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,o.kt)("h3",{id:"addroleforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,o.kt)("p",null,"AddRoleForUserInDomain ajoute un r\xf4le pour un utilisateur dans un domaine. Renvoie false si l'utilisateur a d\xe9j\xe0 le r\xf4le (aka non affect\xe9)."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,o.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,o.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,o.kt)("h3",{id:"deleteroleforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,o.kt)("p",null,"Supprimer r\xf4leForUserInDomain supprime un r\xf4le pour un utilisateur dans un domaine. Renvoie false si l'utilisateur n'a pas le r\xf4le (aka non affect\xe9)."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,o.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,o.kt)("h3",{id:"deleterolesforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,o.kt)("p",null,"Supprimer les RolesForUserInDomain supprime tous les r\xf4les pour un utilisateur dans un domaine. Renvoie false si l'utilisateur n'a aucun r\xf4le (aka non affect\xe9)."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,o.kt)("h3",{id:"getallusersbydomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,o.kt)("p",null,"GetAllUsersByDomain obtiendrait tous les utilisateurs associ\xe9s au domaine. Retourne un tableau de cha\xeene vide si aucun domaine n'est d\xe9fini dans le mod\xe8le."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,o.kt)("h3",{id:"deleteallusersbydomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,o.kt)("p",null,"DeleteAllUsersByDomain supprimera tous les utilisateurs associ\xe9s au domaine. Renvoie false si aucun domaine n'est d\xe9fini dans le mod\xe8le."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,o.kt)("h3",{id:"deletedomains"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,o.kt)("p",null,"DeleteDomains supprimera tous les utilisateurs et r\xf4les associ\xe9s. Cela supprimera tous les domaines si le param\xe8tre n'est pas fourni."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,o.kt)("h3",{id:"getalldomains"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,o.kt)("p",null,"GetAllDomains obtiendrait tous les domaines."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Si vous g\xe9rez un domaine comme ",(0,o.kt)("inlineCode",{parentName:"p"},"name::domain"),", cela peut conduire \xe0 un comportement inattendu. En Casbin, ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," est un mot cl\xe9 invers\xe9, tout comme ",(0,o.kt)("inlineCode",{parentName:"p"},"pour"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"si")," dans un langage de programmation, nous ne devrions jamais mettre ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," dans un domaine."))))}b.isMDXComponent=!0}}]);