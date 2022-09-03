"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=m(a),u=r,d=b["".concat(s,".").concat(u)]||b[u]||c[u]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},8234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={id:"role-managers",title:"Rollen-Manager",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",keywords:["rolemanager","role manager"]},i=void 0,o={unversionedId:"role-managers",id:"role-managers",title:"Rollen-Manager",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/RoleManagers.mdx",sourceDirName:".",slug:"/role-managers",permalink:"/de/docs/role-managers",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"role-managers",title:"Rollen-Manager",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",keywords:["rolemanager","role manager"]},sidebar:"docs",previous:{title:"Dispatcher",permalink:"/de/docs/dispatchers"},next:{title:"Middleware",permalink:"/de/docs/middlewares"}},s={},m=[{value:"API",id:"api",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Tabs"),b=p("TabItem"),u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Der Rollenmanager wird verwendet, um die RBAC Rollenhierarchie (Benutzerrollenzuordnung) in Casbin zu verwalten. Ein Rollenmanager kann die Rollendaten aus den Regeln der Casbin-Richtlinien oder externen Quellen wie LDAP, Okta, Auth0, Azure AD usw. abrufen. Wir unterst\xfctzen verschiedene Implementierungen eines Rollenmanagers. Um das Gewicht gering zu halten, setzen wir den Rollenmanager Code nicht in die Hauptbibliothek (au\xdfer den Standard-Rollenmanager). Eine vollst\xe4ndige Liste der Casbin Rollenmanager finden Sie wie unten. Jeder Beitrag von Drittanbietern zu einem neuen Rollenmanager ist willkommen, bitte informieren Sie uns und ich werde ihn in diese Liste setzen:)"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollen-Manager"),(0,r.kt)("th",{parentName:"tr",align:null},"Autor"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go"},"Standard Rollenmanager (eingebaut)")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in Casbin-Richtlinien")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/session-role-manager"},"Session-Rollen-Manager")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/edomosystems"},"EDOMO-Systeme")),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in Casbin-Richtlinien mit zeitgesteuerten Sessions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/okta-role-manager"},"Okta Rollen-Manager")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in ",(0,r.kt)("a",{parentName:"td",href:"https://www.okta.com/"},"Okta"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/auth0-role-manager"},"Auth0 Rollen-Manager")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in ",(0,r.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Auth0"),"'s ",(0,r.kt)("a",{parentName:"td",href:"https://auth0.com/docs/extensions/authorization-extension/v2"},"Autorisierungs-Erweiterung"))))),(0,r.kt)("p",null,"F\xfcr Entwickler: Alle Rollenmanager m\xfcssen die ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/rbac/role_manager.go"},"RoleManager")," Schnittstelle implementieren. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/session-role-manager"},"Der Session-Rollen-Manager")," kann als Referenz-Implementierung verwendet werden.")),(0,r.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollen-Manager"),(0,r.kt)("th",{parentName:"tr",align:null},"Autor"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"Standard Rollenmanager (eingebaut)")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in Casbin-Richtlinien")))),(0,r.kt)("p",null,"F\xfcr Entwickler: Alle Rollenmanager m\xfcssen die ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/RoleManager.java"},"RoleManager")," Schnittstelle implementieren. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"Standard-Rollenmanager")," kann als Referenzimplementierung verwendet werden.")),(0,r.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollen-Manager"),(0,r.kt)("th",{parentName:"tr",align:null},"Autor"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"Standard Rollenmanager (eingebaut)")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in Casbin-Richtlinien")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/session-role-manager"},"Session-Rollen-Manager")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in Casbin-Richtlinien mit zeitgesteuerten Sessions")))),(0,r.kt)("p",null,"F\xfcr Entwickler: Alle Rollenmanager m\xfcssen die ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/roleManager.ts"},"RoleManager")," Schnittstelle implementieren. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"Standard-Rollenmanager")," kann als Referenzimplementierung verwendet werden.")),(0,r.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollen-Manager"),(0,r.kt)("th",{parentName:"tr",align:null},"Autor"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"Standard Rollenmanager (eingebaut)")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in Casbin-Richtlinien")))),(0,r.kt)("p",null,"F\xfcr Entwickler: Alle Rollenmanager m\xfcssen die ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/RoleManager.php"},"RoleManager")," Schnittstelle implementieren. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"Standard-Rollenmanager")," kann als Referenzimplementierung verwendet werden.")),(0,r.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollen-Manager"),(0,r.kt)("th",{parentName:"tr",align:null},"Autor"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"Standard Rollenmanager (eingebaut)")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unterst\xfctzt Rollenhierarchie in Casbin-Richtlinien")))),(0,r.kt)("p",null,"F\xfcr Entwickler: Alle Rollenmanager m\xfcssen die ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/role_manager.py"},"RoleManager")," Schnittstelle implementieren. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"Standard-Rollenmanager")," kann als Referenzimplementierung verwendet werden."))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"Siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/rolemanager-api"},"API")," Abschnitt f\xfcr Details."))}d.isMDXComponent=!0}}]);