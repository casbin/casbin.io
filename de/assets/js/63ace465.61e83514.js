"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4760],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>c});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),m=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return n?t.createElement(k,o(o({ref:a},d),{},{components:n})):t.createElement(k,o({ref:a},d))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9408:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=n(7462),l=(n(7294),n(3905));const r={id:"rbac-with-domains-api",title:"RBAC mit Domains API",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},o=void 0,i={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC mit Domains API",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/de/docs/rbac-with-domains-api",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC mit Domains API",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"RBAC API",permalink:"/de/docs/rbac-api"},next:{title:"Rollen-Manager-API",permalink:"/de/docs/rolemanager-api"}},s={},m=[{value:"Referenz",id:"referenz",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3},{value:"<code>GetImplicitUsersForResourceByDomain()</code>",id:"getimplicitusersforresourcebydomain",level:3}],d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},p=d("Tabs"),u=d("TabItem"),c={toc:m};function k(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Eine benutzerfreundlichere API f\xfcr RBAC mit Domains. Diese API ist eine Teilmenge der Management-API. Die RBAC-Benutzer k\xf6nnen diese API verwenden, um den Code zu vereinfachen."),(0,l.kt)("h2",{id:"referenz"},"Referenz"),(0,l.kt)("p",null,"globale Variable ",(0,l.kt)("inlineCode",{parentName:"p"},"e")," ist Enforcer Instanz."),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,l.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,l.kt)(u,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,l.kt)(u,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,l.kt)("h3",{id:"getusersforroleindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,l.kt)("p",null,"GetUsersForRoleInDomain holt die Benutzer, die eine Rolle innerhalb einer Domain haben."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,l.kt)("h3",{id:"getrolesforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,l.kt)("p",null,"GetRolesForUserInDomain erh\xe4lt die Rollen, die ein Benutzer innerhalb einer Domain hat."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,l.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,l.kt)("h3",{id:"getpermissionsforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,l.kt)("p",null,"GetPermissionsForUserInDomain erh\xe4lt Berechtigungen f\xfcr einen Benutzer oder eine Rolle innerhalb einer Dom\xe4ne."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,l.kt)("h3",{id:"addroleforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,l.kt)("p",null,"AddRoleForUserInDomain f\xfcgt eine Rolle f\xfcr einen Benutzer innerhalb einer Domain hinzu. Gibt false zur\xfcck, wenn der Benutzer bereits die Rolle hat (aka nicht betroffen)."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,l.kt)("h3",{id:"deleteroleforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,l.kt)("p",null,"DeleteRoleForUserInDomain l\xf6scht eine Rolle f\xfcr einen Benutzer innerhalb einer Dom\xe4ne. Gibt false zur\xfcck, wenn der Benutzer nicht die Rolle hat (aka nicht betroffen)."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,l.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,l.kt)("h3",{id:"deleterolesforuserindomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,l.kt)("p",null,"DeleteRolesForUserInDomain l\xf6scht alle Rollen eines Benutzers innerhalb einer Dom\xe4ne. Gibt false zur\xfcck, wenn der Benutzer keine Rollen hat (aka nicht betroffen)."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,l.kt)("h3",{id:"getallusersbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,l.kt)("p",null,"GetAllUsersByDomain w\xfcrde alle Benutzer erhalten, die mit der Domain verbunden sind. Gibt ein leeres String Array zur\xfcck, wenn keine Dom\xe4ne im Modell definiert ist."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,l.kt)("h3",{id:"deleteallusersbydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,l.kt)("p",null,"DeleteAllUsersByDomain w\xfcrde alle Benutzer l\xf6schen, die dieser Domain zugeordnet sind. Gibt false zur\xfcck, wenn keine Dom\xe4ne im Modell definiert ist."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,l.kt)("h3",{id:"deletedomains"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,l.kt)("p",null,"DeleteDomains w\xfcrden alle zugeh\xf6rigen Benutzer und Rollen l\xf6schen. Es w\xfcrde alle Dom\xe4nen l\xf6schen, wenn kein Parameter angegeben wird."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,l.kt)("h3",{id:"getalldomains"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,l.kt)("p",null,"GetAllDomains w\xfcrde alle Domains bekommen."),(0,l.kt)("p",null,"Zum Beispiel:"),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Wenn Sie eine Domain wie ",(0,l.kt)("inlineCode",{parentName:"p"},"name::domain"),"behandeln, kann dies zu unerwartetem Verhalten f\xfchren. In Casbin, ",(0,l.kt)("inlineCode",{parentName:"p"},"::")," is a reserved keyword, just like ",(0,l.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," in a programming language, we should never put ",(0,l.kt)("inlineCode",{parentName:"p"},"::")," in a domain.")),(0,l.kt)("h3",{id:"getimplicitusersforresourcebydomain"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetImplicitUsersForResourceByDomain()")),(0,l.kt)("p",null,"GetImplicitUsersForResourceByDomain return implicit user based on resource and domain."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\ng, alice, admin, domain1\ng, bob, admin, domain2\n")),(0,l.kt)("p",null,'GetImplicitUsersForResourceByDomain("data1", "domain1") will return ',(0,l.kt)("inlineCode",{parentName:"p"},'[["alice", "domain1", "data1", "read"],["alice", "domain1", "data1", "write"]], nil')),(0,l.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ImplicitUsers, err := e.GetImplicitUsersForResourceByDomain("data1", "domain1")\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},'Only users will be returned, roles (2nd arg in "g") will be excluded.')))}k.isMDXComponent=!0}}]);