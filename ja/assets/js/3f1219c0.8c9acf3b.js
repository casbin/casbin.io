"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"how-it-works",title:"How It Works",description:"How Casbin Works",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},i=void 0,s={unversionedId:"how-it-works",id:"how-it-works",title:"How It Works",description:"How Casbin Works",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/HowItWorks.mdx",sourceDirName:".",slug:"/how-it-works",permalink:"/ja/docs/how-it-works",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/HowItWorks.mdx",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"How It Works",description:"How Casbin Works",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},sidebar:"docs",previous:{title:"Get Started",permalink:"/ja/docs/get-started"},next:{title:"Tutorials",permalink:"/ja/docs/tutorials"}},l={},c=[{value:"Request",id:"request",level:3},{value:"Policy",id:"policy",level:3},{value:"Matcher",id:"matcher",level:3},{value:"Effect",id:"effect",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Casbin, an access control model is abstracted into a CONF file based on the ",(0,a.kt)("strong",{parentName:"p"},"PERM metamodel (Policy, Effect, Request, Matchers)"),". Switching or upgrading the authorization mechanism for a project is as simple as modifying a configuration. You can customize your own access control model by combining the available models. For example, you can combine RBAC roles and ABAC attributes together inside one model and share one set of policy rules."),(0,a.kt)("p",null,"The PERM model is composed of four foundations: Policy, Effect, Request, and Matchers. These foundations describe the relationship between resources and users."),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("p",null,"Defines the request parameters. A basic request is a tuple object, requiring at least a subject (accessed entity), object (accessed resource), and action (access method)."),(0,a.kt)("p",null,"For instance, a request definition may look like this:\n",(0,a.kt)("inlineCode",{parentName:"p"},"r={sub,obj,act}")),(0,a.kt)("p",null,"This definition specifies the parameter names and ordering required by the access control matching function."),(0,a.kt)("h3",{id:"policy"},"Policy"),(0,a.kt)("p",null,"Defines the model for the access strategy. It specifies the name and order of the fields in the Policy rule document."),(0,a.kt)("p",null,"For instance:\n",(0,a.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act, eft}")),(0,a.kt)("p",null,"Note: If eft (policy result) is not defined, the result field in the policy file will not be read, and the matching policy result will be allowed by default."),(0,a.kt)("h3",{id:"matcher"},"Matcher"),(0,a.kt)("p",null,"Defines the matching rules for Request and Policy."),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p.obj"),"\nThis simple and common matching rule means that if the requested parameters (entities, resources, and methods) are equal to those found in the policy, then the policy result (",(0,a.kt)("inlineCode",{parentName:"p"},"p.eft"),") is returned. The result of the strategy will be saved in ",(0,a.kt)("inlineCode",{parentName:"p"},"p.eft"),"."),(0,a.kt)("h3",{id:"effect"},"Effect"),(0,a.kt)("p",null,"Performs a logical combination judgment on the matching results of Matchers."),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"e = some(where(p.eft == allow))")),(0,a.kt)("p",null,"This statement means that if the matching strategy result ",(0,a.kt)("inlineCode",{parentName:"p"},"p.eft")," has the result of (some) allow, then the final result is true."),(0,a.kt)("p",null,"Let's look at another example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"e = some(where (p.eft == allow)) && !some(where (p.eft == deny))")),(0,a.kt)("p",null,"The logical meaning of this example combination is: if there is a strategy that matches the result of allow and no strategy that matches the result of deny, the result is true. In other words, it is true when the matching strategies are all allow. If there is any deny, both are false (more simply, when allow and deny exist at the same time, deny takes precedence)."),(0,a.kt)("p",null,"The most basic and simplest model in Casbin is ACL. The model CONF for ACL is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Request definition\n[request_definition]\nr = sub, obj, act\n\n# Policy definition\n[policy_definition]\np = sub, obj, act\n\n# Policy effect\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,a.kt)("p",null,"An example policy for the ACL model is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\n")),(0,a.kt)("p",null,"This means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"alice can read data1"),(0,a.kt)("li",{parentName:"ul"},"bob can write data2")),(0,a.kt)("p",null,"We also support multi-line mode by appending '' in the end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\\n  && r.act == p.act\n")),(0,a.kt)("p",null,"Furthermore, if you are using ABAC, you can try the 'in' operator as shown in the following example for the Casbin ",(0,a.kt)("strong",{parentName:"p"},"golang")," edition (jCasbin and Node-Casbin are not supported yet):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,a.kt)("p",null,"But you ",(0,a.kt)("strong",{parentName:"p"},"MUST")," make sure that the length of the array is ",(0,a.kt)("strong",{parentName:"p"},"MORE")," than ",(0,a.kt)("strong",{parentName:"p"},"1"),", otherwise it will cause a panic."),(0,a.kt)("p",null,"For more operators, you may take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"govaluate"),"."))}u.isMDXComponent=!0}}]);