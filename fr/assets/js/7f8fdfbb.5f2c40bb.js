"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return r?i.createElement(y,o(o({ref:t},c),{},{components:r})):i.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(7462),a=(r(7294),r(3905));const n={id:"priority-model",title:"Mod\xe8le de priorit\xe9",description:"Casbin's Priority Model for managing policies with different priorities",keywords:["priority model"],authors:["hsluoyz"]},o=void 0,l={unversionedId:"priority-model",id:"priority-model",title:"Mod\xe8le de priorit\xe9",description:"Casbin's Priority Model for managing policies with different priorities",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/PriorityModel.mdx",sourceDirName:".",slug:"/priority-model",permalink:"/fr/docs/priority-model",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"priority-model",title:"Mod\xe8le de priorit\xe9",description:"Casbin's Priority Model for managing policies with different priorities",keywords:["priority model"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"ABAC",permalink:"/fr/docs/abac"},next:{title:"Super Admin",permalink:"/fr/docs/superadmin"}},p={},s=[{value:"Load Policy with Implicit Priority",id:"load-policy-with-implicit-priority",level:2},{value:"Load Policy with Explicit Priority",id:"load-policy-with-explicit-priority",level:2},{value:"Politique de charge avec priorit\xe9 bas\xe9e sur le r\xf4le et la hi\xe9rarchie des utilisateurs",id:"politique-de-charge-avec-priorit\xe9-bas\xe9e-sur-le-r\xf4le-et-la-hi\xe9rarchie-des-utilisateurs",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casbin supports loading policies with priority."),(0,a.kt)("h2",{id:"load-policy-with-implicit-priority"},"Load Policy with Implicit Priority"),(0,a.kt)("p",null,"It's quite simple: the order determines the priority; policies that appear earlier have higher priority."),(0,a.kt)("p",null,"model.conf :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = priorit\xe9(p.eft) || nier\n")),(0,a.kt)("h2",{id:"load-policy-with-explicit-priority"},"Load Policy with Explicit Priority"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Voir aussi : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/550"},"casbin#550"))),(0,a.kt)("p",null,"A smaller priority value indicates a higher priority. If there's a non-numerical character in the priority, it will be placed last instead of throwing an error."),(0,a.kt)("admonition",{title:"Token name convention",type:"info"},(0,a.kt)("p",{parentName:"admonition"},'The conventionally used priority token name in the policy definition is "priority". To use a custom one, you need to invoke ',(0,a.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," and reload the policies (see the full example on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/1044"},"TestCustomizedFieldIndex"),")."),(0,a.kt)("p",{parentName:"admonition"},"model.conf :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = customized_priority, sub, obj, act, eft\n")),(0,a.kt)("p",{parentName:"admonition"},"Golang code example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example/priority_model_explicit_customized.conf",\n                    "./example/priority_policy_explicit_customized.csv")\n// Due to the customized priority token, the enforcer fails to handle the priority.\nok, err := e.Enforce("bob", "data2", "read") // the result will be `true, nil`\n// Set PriorityIndex and reload\ne.SetFieldIndex("p", constant.PriorityIndex, 0)\nerr := e.LoadPolicy()\nif err != nil {\n    log.Fatalf("LoadPolicy: %v", err)\n}\nok, err := e.Enforce("bob", "data2", "read") // the result will be `false, nil`\n'))),(0,a.kt)("p",null,"Currently, explicit priority only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPolicy")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPolicies"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdatePolicy")," has been called, you shouldn't change the priority attribute."),(0,a.kt)("p",null,"model.conf :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = priority, sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = priority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"Politique.csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, 10, data1_deny_group, data1, read, deny\np, 10, data1_deny_group, data1, write, deny\np, 10, data2_allow_group, data2, read, allow\np, 10, data2_allow_group, data2, write, allow\n\n\np, 1, alice, data1, write, allow\np, 1, alice, data1, read, allow\np, 1, bob, data2, read, deny\n\ng, bob, data2_allow_group\ng, alice, data1_deny_group\n")),(0,a.kt)("p",null,"Requ\xeate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"alice, data1, write --\x3e true // because `p, 1, alice, data1, write, allow` has the highest priority\nbob, data2, read --\x3e false\nbob, data2, write --\x3e true // because bob has the role of `data2_allow_group` which has the right to write data2, and there's no deny policy with higher priority \n")),(0,a.kt)("h2",{id:"politique-de-charge-avec-priorit\xe9-bas\xe9e-sur-le-r\xf4le-et-la-hi\xe9rarchie-des-utilisateurs"},"Politique de charge avec priorit\xe9 bas\xe9e sur le r\xf4le et la hi\xe9rarchie des utilisateurs"),(0,a.kt)("p",null,"La structure h\xe9rit\xe9e des r\xf4les et des utilisateurs ne peut \xeatre que de multiples arborescences et non des graphiques. If a user has multiple roles, you have to make sure the user has the same level in different trees. If two roles have the same level, the policy (associated with the role) that appeared earlier has higher priority. For more details, also see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/833"},"casbin#833")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/831"},"casbin#831"),"."),(0,a.kt)("p",null,"model.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = subjectPriority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act \n")),(0,a.kt)("p",null,"Politique.csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, root, data1, read, deny\np, admin, data1, read, deny\n\np, editor, data1, read, deny\np, subscriber, data1, read, deny\n\np, jane, data1, read, allow\np, alice, data1, read, allow\n\ng, admin, root\n\ng, editor, admin\ng, subscriber, admin\n\ng, jane, editor\ng, alice, subscriber \n")),(0,a.kt)("p",null,"Requ\xeate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"jane, data1, read --\x3e true // because jane is at the bottom, her priority is higher than that of editor, admin, and root\nalice, data1, read --\x3e true\n")),(0,a.kt)("p",null," The role hierarchy looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"role: root\n \u2514\u2500 role: admin\n    \u251c\u2500 role editor\n    \u2502  \u2514\u2500 user: jane\n    \u2502\n    \u2514\u2500 role: subscriber\n       \u2514\u2500 user: alice\n")),(0,a.kt)("p",null,"The priority automatically looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"role: root                 # auto priority: 30\n \u2514\u2500 role: admin            # auto priority: 20\n     \u251c\u2500 role: editor       # auto priority: 10\n     \u2514\u2500 role: subscriber   # auto priority: 10\n")))}d.isMDXComponent=!0}}]);