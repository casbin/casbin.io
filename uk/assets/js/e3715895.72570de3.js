"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"priority-model",title:"Priority Model",description:"\u041c\u043e\u0434\u0435\u043b\u044c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0456\u0432 Casbin \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0430\u043c\u0438 \u0437 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0430\u043c\u0438",keywords:["priority model"],authors:["hsluoyz"]},i=void 0,l={unversionedId:"priority-model",id:"priority-model",title:"Priority Model",description:"\u041c\u043e\u0434\u0435\u043b\u044c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0456\u0432 Casbin \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0430\u043c\u0438 \u0437 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0430\u043c\u0438",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/PriorityModel.mdx",sourceDirName:".",slug:"/priority-model",permalink:"/uk/docs/priority-model",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PriorityModel.mdx",tags:[],version:"current",frontMatter:{id:"priority-model",title:"Priority Model",description:"\u041c\u043e\u0434\u0435\u043b\u044c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0456\u0432 Casbin \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0430\u043c\u0438 \u0437 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0430\u043c\u0438",keywords:["priority model"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"ABAC",permalink:"/uk/docs/abac"},next:{title:"Super Admin",permalink:"/uk/docs/superadmin"}},p={},c=[{value:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0437 \u043d\u0435\u044f\u0432\u043d\u0438\u043c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c",id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438-\u0437-\u043d\u0435\u044f\u0432\u043d\u0438\u043c-\u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c",level:2},{value:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0437 \u044f\u0432\u043d\u0438\u043c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c",id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438-\u0437-\u044f\u0432\u043d\u0438\u043c-\u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c",level:2},{value:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0437 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0457 \u0440\u043e\u043b\u0435\u0439 \u0442\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432",id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438-\u0437-\u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0456-\u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0457-\u0440\u043e\u043b\u0435\u0439-\u0442\u0430-\u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casbin \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a \u0437 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c."),(0,a.kt)("h2",{id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438-\u0437-\u043d\u0435\u044f\u0432\u043d\u0438\u043c-\u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c"},"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0437 \u043d\u0435\u044f\u0432\u043d\u0438\u043c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c"),(0,a.kt)("p",null,"\u0426\u0435 \u0434\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e: \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0454 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442; \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438, \u0449\u043e \u0437'\u044f\u0432\u043b\u044f\u044e\u0442\u044c\u0441\u044f \u0440\u0430\u043d\u0456\u0448\u0435, \u043c\u0430\u044e\u0442\u044c \u0432\u0438\u0449\u0438\u0439 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442."),(0,a.kt)("p",null,"model.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = priority(p.eft) || deny\n")),(0,a.kt)("h2",{id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438-\u0437-\u044f\u0432\u043d\u0438\u043c-\u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c"},"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0437 \u044f\u0432\u043d\u0438\u043c \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0422\u0430\u043a\u043e\u0436 \u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/550"},"casbin#550"))),(0,a.kt)("p",null,"\u041c\u0435\u043d\u0448\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0443 \u0432\u043a\u0430\u0437\u0443\u0454 \u043d\u0430 \u0432\u0438\u0449\u0438\u0439 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442. \u042f\u043a\u0449\u043e \u0432 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0456 \u0454 \u043d\u0435\u0447\u0438\u0441\u043b\u043e\u0432\u0438\u0439 \u0441\u0438\u043c\u0432\u043e\u043b, \u0432\u0456\u043d \u0431\u0443\u0434\u0435 \u0440\u043e\u0437\u043c\u0456\u0449\u0435\u043d\u0438\u0439 \u0432 \u043a\u0456\u043d\u0446\u0456, \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0432\u0438\u043a\u0438\u0434\u0430\u0442\u0438 \u043f\u043e\u043c\u0438\u043b\u043a\u0443."),(0,a.kt)("admonition",{title:"\u041a\u043e\u043d\u0432\u0435\u043d\u0446\u0456\u044f \u0456\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u043a\u0435\u043d\u0456\u0432",type:"info"},(0,a.kt)("p",{parentName:"admonition"},'\u041a\u043e\u043d\u0432\u0435\u043d\u0446\u0456\u0439\u043d\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u043d\u0435 \u0456\u043c\'\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0443 \u0432 \u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0456 \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 - "priority". \u0429\u043e\u0431 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043e\u0454, \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0442\u0438 ',(0,a.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," \u0442\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 (\u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u043d\u0430 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/1044"},"TestCustomizedFieldIndex"),")."),(0,a.kt)("p",{parentName:"admonition"},"model.conf:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = customized_priority, sub, obj, act, eft\n")),(0,a.kt)("p",{parentName:"admonition"},"Golang \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u043a\u043e\u0434\u0443:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example/priority_model_explicit_customized.conf",\n                    "./example/priority_policy_explicit_customized.csv")\n// Due to the customized priority token, the enforcer fails to handle the priority.\nok, err := e.Enforce("bob", "data2", "read") // the result will be `true, nil`\n// Set PriorityIndex and reload\ne.SetFieldIndex("p", constant.PriorityIndex, 0)\nerr := e.LoadPolicy()\nif err != nil {\n    log.Fatalf("LoadPolicy: %v", err)\n}\nok, err := e.Enforce("bob", "data2", "read") // the result will be `false, nil`\n'))),(0,a.kt)("p",null,"\u041d\u0430\u0440\u0430\u0437\u0456, \u044f\u0432\u043d\u0438\u0439 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u043b\u0438\u0448\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPolicy")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPolicies"),". \u042f\u043a\u0449\u043e \u0431\u0443\u043b\u043e \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdatePolicy"),", \u0432\u0430\u043c \u043d\u0435 \u0441\u043b\u0456\u0434 \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0443."),(0,a.kt)("p",null,"model.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = priority, sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = priority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"policy.csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, 10, data1_deny_group, data1, read, deny\np, 10, data1_deny_group, data1, write, deny\np, 10, data2_allow_group, data2, read, allow\np, 10, data2_allow_group, data2, write, allow\n\n\np, 1, alice, data1, write, allow\np, 1, alice, data1, read, allow\np, 1, bob, data2, read, deny\n\ng, bob, data2_allow_group\ng, alice, data1_deny_group\n")),(0,a.kt)("p",null,"\u0437\u0430\u043f\u0438\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"alice, data1, write --\x3e true // because `p, 1, alice, data1, write, allow` has the highest priority\nbob, data2, read --\x3e false\nbob, data2, write --\x3e true // because bob has the role of `data2_allow_group` which has the right to write data2, and there's no deny policy with higher priority \n")),(0,a.kt)("h2",{id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438-\u0437-\u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0456-\u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0457-\u0440\u043e\u043b\u0435\u0439-\u0442\u0430-\u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"},"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0437 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0457 \u0440\u043e\u043b\u0435\u0439 \u0442\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"),(0,a.kt)("p",null,"\u0423\u0441\u043f\u0430\u0434\u043a\u043e\u0432\u0430\u043d\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0440\u043e\u043b\u0435\u0439 \u0442\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043b\u0438\u0448\u0435 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u043e\u043c\u0430 \u0434\u0435\u0440\u0435\u0432\u0430\u043c\u0438, \u0430 \u043d\u0435 \u0433\u0440\u0430\u0444\u0430\u043c\u0438. \u042f\u043a\u0449\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043c\u0430\u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0440\u043e\u043b\u0435\u0439, \u0432\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u0442\u0438\u0441\u044f, \u0449\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043c\u0430\u0454 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0443 \u0440\u0456\u0437\u043d\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u0430\u0445. \u042f\u043a\u0449\u043e \u0434\u0432\u0456 \u0440\u043e\u043b\u0456 \u043c\u0430\u044e\u0442\u044c \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c, \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 (\u0430\u0441\u043e\u0446\u0456\u0439\u043e\u0432\u0430\u043d\u0430 \u0437 \u0440\u043e\u043b\u043b\u044e), \u0449\u043e \u0437'\u044f\u0432\u0438\u043b\u0430\u0441\u044f \u0440\u0430\u043d\u0456\u0448\u0435, \u043c\u0430\u0454 \u0432\u0438\u0449\u0438\u0439 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442. \u0414\u043b\u044f \u0431\u0456\u043b\u044c\u0448 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0457 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457 \u0442\u0430\u043a\u043e\u0436 \u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/833"},"casbin#833")," \u0442\u0430 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/831"},"casbin#831"),"."),(0,a.kt)("p",null,"model.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = subjectPriority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act \n")),(0,a.kt)("p",null,"policy.csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, root, data1, read, deny\np, admin, data1, read, deny\n\np, editor, data1, read, deny\np, subscriber, data1, read, deny\n\np, jane, data1, read, allow\np, alice, data1, read, allow\n\ng, admin, root\n\ng, editor, admin\ng, subscriber, admin\n\ng, jane, editor\ng, alice, subscriber \n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0438\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"jane, data1, read --\x3e true // because jane is at the bottom, her priority is higher than that of editor, admin, and root\nalice, data1, read --\x3e true\n")),(0,a.kt)("p",null,"\u0406\u0454\u0440\u0430\u0440\u0445\u0456\u044f \u0440\u043e\u043b\u0435\u0439 \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u0454 \u0442\u0430\u043a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"role: root\n \u2514\u2500 role: admin\n    \u251c\u2500 role editor\n    \u2502  \u2514\u2500 user: jane\n    \u2502\n    \u2514\u2500 role: subscriber\n       \u2514\u2500 user: alice\n")),(0,a.kt)("p",null,"\u041f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u0454 \u0442\u0430\u043a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"role: root                 # auto priority: 30\n \u2514\u2500 role: admin            # auto priority: 20\n     \u251c\u2500 role: editor       # auto priority: 10\n     \u2514\u2500 role: subscriber   # auto priority: 10\n")))}s.isMDXComponent=!0}}]);