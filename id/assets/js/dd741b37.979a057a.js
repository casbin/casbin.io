"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6825],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>k});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=t.createContext({}),d=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=d(e.components);return t.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=d(n),k=i,c=u["".concat(m,".").concat(k)]||u[k]||p[k]||l;return n?t.createElement(c,o(o({ref:a},s),{},{components:n})):t.createElement(c,o({ref:a},s))}));function k(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var m in a)hasOwnProperty.call(a,m)&&(r[m]=a[m]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6726:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(7462),i=(n(7294),n(3905));const l={id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"API yang lebih ramah pengguna untuk RBAC dengan domain. API ini adalah subset dari API Manajemen. Pengguna RBAC dapat menggunakan API ini untuk menyederhanakan kode mereka.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},o=void 0,r={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"API yang lebih ramah pengguna untuk RBAC dengan domain. API ini adalah subset dari API Manajemen. Pengguna RBAC dapat menggunakan API ini untuk menyederhanakan kode mereka.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/id/docs/rbac-with-domains-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomainsAPI.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"API yang lebih ramah pengguna untuk RBAC dengan domain. API ini adalah subset dari API Manajemen. Pengguna RBAC dapat menggunakan API ini untuk menyederhanakan kode mereka.",keywords:["RBAC with domains","API"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"RBAC API",permalink:"/id/docs/rbac-api"},next:{title:"RBAC with Conditions API",permalink:"/id/docs/rbac-with-conditions-api"}},m={},d=[{value:"Referensi",id:"referensi",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3},{value:"<code>GetAllRolesByDomain()</code>",id:"getallrolesbydomain",level:3},{value:"<code>GetImplicitUsersForResourceByDomain()</code>",id:"getimplicitusersforresourcebydomain",level:3}],s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},p=s("Tabs"),u=s("TabItem"),k={toc:d};function c(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API yang lebih ramah pengguna untuk RBAC dengan domain. API ini adalah subset dari API Manajemen. Pengguna RBAC dapat menggunakan API ini untuk menyederhanakan kode mereka."),(0,i.kt)("h2",{id:"referensi"},"Referensi"),(0,i.kt)("p",null,"Variabel global ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," mewakili instance Enforcer."),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,i.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,i.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,i.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,i.kt)(u,{value:".NET",label:".NET",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,i.kt)(u,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,i.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,i.kt)("h3",{id:"getusersforroleindomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"GetUsersForRoleInDomain()")," mengambil pengguna yang memiliki peran dalam suatu domain."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,i.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,i.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,i.kt)("h3",{id:"getrolesforuserindomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRolesForUserInDomain()")," mengambil peran yang dimiliki pengguna dalam suatu domain."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,i.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,i.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,i.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,i.kt)("h3",{id:"getpermissionsforuserindomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUserInDomain()")," mengambil izin untuk pengguna atau peran dalam suatu domain."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,i.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,i.kt)("h3",{id:"addroleforuserindomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"AddRoleForUserInDomain()")," menambahkan peran untuk pengguna dalam suatu domain. Ini mengembalikan ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," jika pengguna sudah memiliki peran (tidak ada perubahan yang dilakukan)."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,i.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,i.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,i.kt)("h3",{id:"deleteroleforuserindomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteRoleForUserInDomain()")," menghapus peran untuk pengguna dalam suatu domain. Ini mengembalikan ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," jika pengguna tidak memiliki peran (tidak ada perubahan yang dilakukan)."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,i.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,i.kt)("h3",{id:"deleterolesforuserindomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteRolesForUserInDomain()")," menghapus semua peran untuk pengguna dalam suatu domain. Ini mengembalikan ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," jika pengguna tidak memiliki peran apapun (tidak ada perubahan yang dilakukan)."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,i.kt)("h3",{id:"getallusersbydomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllUsersByDomain()")," mengambil semua pengguna yang terkait dengan domain yang diberikan. Fungsi ini mengembalikan array string kosong jika tidak ada domain yang didefinisikan dalam model."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,i.kt)("h3",{id:"deleteallusersbydomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteAllUsersByDomain()")," menghapus semua pengguna yang terkait dengan domain yang diberikan. Fungsi ini mengembalikan ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," jika tidak ada domain yang didefinisikan dalam model."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,i.kt)("h3",{id:"deletedomains"},(0,i.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeleteDomains")," akan menghapus semua pengguna dan peran yang terkait.\nIni akan menghapus semua domain jika parameter tidak diberikan."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,i.kt)("h3",{id:"getalldomains"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,i.kt)("p",null,"GetAllDomains akan mendapatkan semua domain."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Jika Anda menangani domain seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"name::domain"),", hal ini dapat menyebabkan perilaku yang tidak terduga. Di Casbin, ",(0,i.kt)("inlineCode",{parentName:"p"},"::")," adalah kata kunci yang dicadangkan, seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," dalam bahasa pemrograman, kita tidak boleh menempatkan ",(0,i.kt)("inlineCode",{parentName:"p"},"::")," dalam domain.")),(0,i.kt)("h3",{id:"getallrolesbydomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetAllRolesByDomain()")),(0,i.kt)("p",null,"GetAllRolesByDomain akan mendapatkan semua peran yang terkait dengan domain."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllRolesByDomain("domain1")\n')))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Metode ini tidak berlaku untuk domain yang memiliki hubungan pewarisan, juga dikenal sebagai peran implisit.")),(0,i.kt)("h3",{id:"getimplicitusersforresourcebydomain"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetImplicitUsersForResourceByDomain()")),(0,i.kt)("p",null,"GetImplicitUsersForResourceByDomain mengembalikan pengguna implisit berdasarkan sumber daya dan domain."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\ng, alice, admin, domain1\ng, bob, admin, domain2\n")),(0,i.kt)("p",null,'GetImplicitUsersForResourceByDomain("data1", "domain1") akan mengembalikan ',(0,i.kt)("inlineCode",{parentName:"p"},'[["alice", "domain1", "data1", "read"],["alice", "domain1", "data1", "write"]], nil')),(0,i.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ImplicitUsers, err := e.GetImplicitUsersForResourceByDomain("data1", "domain1")\n')))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Hanya pengguna yang akan dikembalikan, peran (argumen ke-2 dalam "g") akan dikecualikan.')))}c.isMDXComponent=!0}}]);