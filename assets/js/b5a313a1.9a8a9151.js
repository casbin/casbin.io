"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6429],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"how-it-works",title:"How it Works"},s=void 0,c={unversionedId:"how-it-works",id:"how-it-works",isDocsHomePage:!1,title:"How it Works",description:"In Casbin, an access control model is abstracted into a CONF file based on the PERM metamodel (Policy, Effect, Request, Matchers). So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration. You can customize your own access control model by combining the available models. For example, you can combine RBAC roles and ABAC attributes together inside one model and share one set of policy rules.",source:"@site/docs/HowItWorks.md",sourceDirName:".",slug:"/how-it-works",permalink:"/docs/how-it-works",editUrl:"https://github.com/casbin/casbin-website/edit/master/docs/docs/HowItWorks.md",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"How it Works"},sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/get-started"},next:{title:"Tutorials",permalink:"/docs/tutorials"}},u=[{value:"Request",id:"request",children:[],level:3},{value:"Policy",id:"policy",children:[],level:3},{value:"Matcher",id:"matcher",children:[],level:3},{value:"Effect",id:"effect",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Casbin, an access control model is abstracted into a CONF file based on the ",(0,o.kt)("strong",{parentName:"p"},"PERM metamodel (Policy, Effect, Request, Matchers)"),". So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration. You can customize your own access control model by combining the available models. For example, you can combine RBAC roles and ABAC attributes together inside one model and share one set of policy rules."),(0,o.kt)("p",null,"The PERM model is composed of four foundations (Policy, Effect, Request, Matchers) describing the relationship between resources and users."),(0,o.kt)("h3",{id:"request"},"Request"),(0,o.kt)("p",null,"Define the request parameters. A basic request is a tuple object, requiring at least a subject (accessed entity), object (accessed resource) and action (access method)"),(0,o.kt)("p",null,"For instance, a request definition may look like this:\n",(0,o.kt)("inlineCode",{parentName:"p"},"r={sub,obj,act}")),(0,o.kt)("p",null,"It actually defines the parameter name and order which we should provide for access control matching function."),(0,o.kt)("h3",{id:"policy"},"Policy"),(0,o.kt)("p",null,"Define the model of the access strategy. In fact, it defines the name and order of the fields in the Policy rule document."),(0,o.kt)("p",null,"For instance:\n",(0,o.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act}")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act, eft}")),(0,o.kt)("p",null,"Note: If eft (policy result) is not defined, then the result field in the policy file will not be read, and the matching policy result will be allowed by default."),(0,o.kt)("h3",{id:"matcher"},"Matcher"),(0,o.kt)("p",null,"Matching rules of Request and Policy."),(0,o.kt)("p",null,"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p.obj"),"\nThis simple and common matching rule means that if the requested parameters (entities, resources, and methods) are equal, that is, if they can be found in the policy, then the policy result (",(0,o.kt)("inlineCode",{parentName:"p"},"p.eft"),") is returned. The result of the strategy will be saved in ",(0,o.kt)("inlineCode",{parentName:"p"},"p.eft"),"."),(0,o.kt)("h3",{id:"effect"},"Effect"),(0,o.kt)("p",null,"It can be understood as a model in which a logical combination judgment is performed again on the matching results of Matchers."),(0,o.kt)("p",null,"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"e = some(where(p.eft == allow))")),(0,o.kt)("p",null,"This sentence means that if the matching strategy result p.eft has the result of (some) allow, then the final result is true"),(0,o.kt)("p",null,"Let's look at another example:\n",(0,o.kt)("inlineCode",{parentName:"p"},"e = some(where (p.eft == allow)) && !some(where (p.eft == deny))"),"\nThe logical meaning of this example combination is: if there is a strategy that matches the result of allow and no strategy that matches the result of deny, the result is true. In other words, it is true when the matching strategies are all allow, if there is any deny, both are false (more simply, when allow and deny exist at the same time, deny takes precedence)"),(0,o.kt)("p",null,"The most basic and simplest model in Casbin is ACL. ACL's model CONF is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Request definition\n[request_definition]\nr = sub, obj, act\n\n# Policy definition\n[policy_definition]\np = sub, obj, act\n\n# Policy effect\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,o.kt)("p",null,"An example policy for ACL model is like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"p, alice, data1, read\np, bob, data2, write\n")),(0,o.kt)("p",null,"It means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"alice can read data1"),(0,o.kt)("li",{parentName:"ul"},"bob can write data2")),(0,o.kt)("p",null,"We also support multi-line mode by appending '","\\","'  in the end:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\ \n  && r.act == p.act\n")),(0,o.kt)("p",null,"Furthermore, if you are using ABAC,  you can try operator ",(0,o.kt)("inlineCode",{parentName:"p"},"in")," like the following in Casbin ",(0,o.kt)("strong",{parentName:"p"},"golang")," edition (jCasbin and Node-Casbin are not supported yet):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,o.kt)("p",null,"But you ",(0,o.kt)("strong",{parentName:"p"},"SHOULD")," make sure that the length of the array is ",(0,o.kt)("strong",{parentName:"p"},"MORE")," than ",(0,o.kt)("strong",{parentName:"p"},"1"),", otherwise there will cause it to panic."),(0,o.kt)("p",null,"For more operators, you may take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"govaluate")))}d.isMDXComponent=!0}}]);