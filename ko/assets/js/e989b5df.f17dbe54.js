"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9083],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={id:"rbac",title:"RBAC",description:"Casbin RBAC usage",keywords:["RBAC","role definition","role hierarchy"],authors:["hsluoyz"]},o=void 0,l={unversionedId:"rbac",id:"rbac",title:"RBAC",description:"Casbin RBAC usage",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/RBAC.mdx",sourceDirName:".",slug:"/rbac",permalink:"/ko/docs/rbac",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"rbac",title:"RBAC",description:"Casbin RBAC usage",keywords:["RBAC","role definition","role hierarchy"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Functions",permalink:"/ko/docs/function"},next:{title:"RBAC with Pattern",permalink:"/ko/docs/rbac-with-pattern"}},s={},p=[{value:"Role Definition",id:"role-definition",level:2},{value:"Role Hierarchy",id:"role-hierarchy",level:2},{value:"How to Distinguish Role from User?",id:"how-to-distinguish-role-from-user",level:2},{value:"How to Query Implicit Roles or Permissions?",id:"how-to-query-implicit-roles-or-permissions",level:2},{value:"Using Pattern Matching in RBAC",id:"using-pattern-matching-in-rbac",level:2},{value:"Role Manager",id:"role-manager",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"role-definition"},"Role Definition"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"[role_definition]")," is used to define the RBAC role inheritance relations. Casbin supports multiple instances of RBAC systems, where users can have roles and their inheritance relations, and resources can have roles and their inheritance relations too. These two RBAC systems won't interfere with each other."),(0,r.kt)("p",null,"This section is optional. If you don't use RBAC roles in the model, then omit this section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _\ng2 = _, _\n")),(0,r.kt)("p",null,"The above role definition shows that ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," is an RBAC system, and ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," is another RBAC system. ",(0,r.kt)("inlineCode",{parentName:"p"},"_,_")," means there are two parties involved in an inheritance relation. In the most common case, you usually use ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," alone if you only need roles for users. You can also use both ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," when you need roles (or groups) for both users and resources. Please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"rbac_model.conf")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf"},"rbac_model_with_resource_roles.conf")," for examples."),(0,r.kt)("p",null,"Casbin stores the actual user-role mapping (or resource-role mapping if you are using roles on resources) in the policy. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, data2_admin, data2, read\ng, alice, data2_admin\n")),(0,r.kt)("p",null,"It means that ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," inherits/is a member of the role ",(0,r.kt)("inlineCode",{parentName:"p"},"data2_admin"),". Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," can be a user, a resource, or a role. Casbin only recognizes it as a string."),(0,r.kt)("p",null,"Then, in a matcher, you should check the role as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"It means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," in the request should have the role ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," in the policy."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Casbin only stores the user-role mapping."),(0,r.kt)("li",{parentName:"ol"},"Casbin doesn't verify whether a user is a valid user or a role is a valid role. That should be taken care of by authentication."),(0,r.kt)("li",{parentName:"ol"},"Do not use the same name for a user and a role inside an RBAC system, because Casbin recognizes users and roles as strings, and there's no way for Casbin to know whether you are specifying user ",(0,r.kt)("inlineCode",{parentName:"li"},"alice")," or role ",(0,r.kt)("inlineCode",{parentName:"li"},"alice"),". You can simply solve it by using ",(0,r.kt)("inlineCode",{parentName:"li"},"role_alice"),"."),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," has role ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," has role ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," has role ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),". This transitivity is infinite for now."))),(0,r.kt)("admonition",{title:"Token Name Convention",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Conventionally, the subject token name in the policy definition is ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," and placed at the beginning. Now, Golang Casbin supports customized token names and places. If the subject token name is ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),", the subject token can be placed at an arbitrary place without any extra action needed. If the subject token name is not ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"constant.SubjectIndex")," should be called after the enforcer is initialized, regardless of its position."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# `subject` here is for sub\n[policy_definition]\np =  obj, act, subject\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.SetFieldIndex("p", constant.SubjectIndex, 2) // index starts from 0\nok, err := e.DeleteUser("alice") // without SetFieldIndex, it will raise an error\n'))),(0,r.kt)("h2",{id:"role-hierarchy"},"Role Hierarchy"),(0,r.kt)("p",null,"Casbin's RBAC supports RBAC1's role hierarchy feature, which means that if ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"role1"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"role1")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"role2"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," will also have ",(0,r.kt)("inlineCode",{parentName:"p"},"role2")," and inherit its permissions."),(0,r.kt)("p",null,"Here, we have a concept called a hierarchy level. So, in this example, the hierarchy level is 2. For the built-in role manager in Casbin, you can specify the maximum hierarchy level. The default value is 10. This means that an end user like ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," can only inherit 10 levels of roles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// NewRoleManager is the constructor for creating an instance of the\n// default RoleManager implementation.\nfunc NewRoleManager(maxHierarchyLevel int) rbac.RoleManager {\n    rm := RoleManager{}\n    rm.allRoles = &sync.Map{}\n    rm.maxHierarchyLevel = maxHierarchyLevel\n    rm.hasPattern = false\n\n    return &rm\n}\n")),(0,r.kt)("h2",{id:"how-to-distinguish-role-from-user"},"How to Distinguish Role from User?"),(0,r.kt)("p",null,"Casbin doesn't distinguish between roles and users in its RBAC. They are both treated as strings. If you only use a single-level RBAC (where a role will never be a member of another role), you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllSubjects()")," to get all users and ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllRoles()")," to get all roles. They will list all ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," and all ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),", respectively, in all ",(0,r.kt)("inlineCode",{parentName:"p"},"g, u, r")," rules."),(0,r.kt)("p",null,"But if you are using a multi-level RBAC (with role hierarchy) and your application doesn't record whether a name (string) is a user or a role, or you have a user and a role with the same name, you can add a prefix to the role like ",(0,r.kt)("inlineCode",{parentName:"p"},"role::admin")," before passing it to Casbin. This way, you will know if it's a role by checking this prefix."),(0,r.kt)("h2",{id:"how-to-query-implicit-roles-or-permissions"},"How to Query Implicit Roles or Permissions?"),(0,r.kt)("p",null,'When a user inherits a role or permission via RBAC hierarchy instead of being directly assigned them in a policy rule, we call this type of assignment "implicit". To query such implicit relations, you need to use these two APIs: ',(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser()")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser()"),". For more details, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"this GitHub issue"),"."),(0,r.kt)("h2",{id:"using-pattern-matching-in-rbac"},"Using Pattern Matching in RBAC"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC with Pattern")),(0,r.kt)("h2",{id:"role-manager"},"Role Manager"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/role-managers"},"Role Managers")," section for details."))}u.isMDXComponent=!0}}]);