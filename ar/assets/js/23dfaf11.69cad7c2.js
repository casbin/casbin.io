"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=g(n),u=a,m=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=n(7462),a=(n(7294),n(3905));const l={id:"log-error",title:"Log & Error Handling",description:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0641\u064a Casbin",keywords:["log","error","error handling"],authors:["hsluoyz"]},o=void 0,i={unversionedId:"log-error",id:"log-error",title:"Log & Error Handling",description:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0641\u064a Casbin",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/LogError.mdx",sourceDirName:".",slug:"/log-error",permalink:"/ar/docs/log-error",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/LogError.mdx",tags:[],version:"current",frontMatter:{id:"log-error",title:"Log & Error Handling",description:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0641\u064a Casbin",keywords:["log","error","error handling"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Casbin Service",permalink:"/ar/docs/service"},next:{title:"Frontend Usage",permalink:"/ar/docs/frontend"}},p={},g=[{value:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644",id:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644",level:2},{value:"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0633\u062c\u0644\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0645\u0646\u0641\u0630\u064a\u0646 \u0645\u062e\u062a\u0644\u0641\u064a\u0646",id:"\u0627\u0633\u062a\u062e\u062f\u0627\u0645-\u0645\u0633\u062c\u0644\u0627\u062a-\u0645\u062e\u062a\u0644\u0641\u0629-\u0644\u0645\u0646\u0641\u0630\u064a\u0646-\u0645\u062e\u062a\u0644\u0641\u064a\u0646",level:3},{value:"\u0627\u0644\u0645\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629",id:"\u0627\u0644\u0645\u0633\u062c\u0644\u0627\u062a-\u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629",level:4},{value:"\u0643\u064a\u0641\u064a\u0629 \u0643\u062a\u0627\u0628\u0629 \u0645\u0633\u062c\u0644",id:"\u0643\u064a\u0641\u064a\u0629-\u0643\u062a\u0627\u0628\u0629-\u0645\u0633\u062c\u0644",level:4},{value:"\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621",id:"\u0645\u0639\u0627\u0644\u062c\u0629-\u0627\u0644\u0623\u062e\u0637\u0627\u0621",level:2},{value:"\u062a\u0645\u0643\u064a\u0646 \u0648\u062a\u0639\u0637\u064a\u0644",id:"\u062a\u0645\u0643\u064a\u0646-\u0648\u062a\u0639\u0637\u064a\u0644",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=d("Tabs"),s=d("TabItem"),u={toc:g};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"},"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"),(0,a.kt)("p",null,"Casbin \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u0645\u062f\u0645\u062c ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," \u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0625\u0644\u0649 \u0648\u062d\u062f\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0634\u0643\u0644 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u060c \u0645\u062b\u0644:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2017/07/15 19:43:56 [Request: alice, data1, read ---\x3e true]\n")),(0,a.kt)("p",null,"\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u063a\u064a\u0631 \u0645\u0641\u0639\u0644 \u0628\u0634\u0643\u0644 \u0627\u0641\u062a\u0631\u0627\u0636\u064a. \u064a\u0645\u0643\u0646\u0643 \u062a\u0628\u062f\u064a\u0644 \u0630\u0644\u0643 \u0639\u0628\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableLog()")," \u0623\u0648 \u0627\u0644\u0648\u0633\u064a\u0637 \u0627\u0644\u0623\u062e\u064a\u0631 \u0644\u0640 ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0644\u0642\u062f \u0642\u0645\u0646\u0627 \u0628\u062f\u0639\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0644\u0646\u0645\u0648\u0630\u062c\u060c \u0637\u0644\u0628 \u0627\u0644\u062a\u0646\u0641\u064a\u0630\u060c \u0627\u0644\u062f\u0648\u0631\u060c \u0648\u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u0641\u064a Golang. \u064a\u0645\u0643\u0646\u0643 \u062a\u0639\u0631\u064a\u0641 \u0633\u062c\u0644 \u062e\u0627\u0635 \u0628\u0643 \u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0640 Casbin.\n\u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0633\u062a\u062e\u062f\u0645 Python\u060c \u064a\u0633\u062a\u062e\u062f\u0645 pycasbin \u0622\u0644\u064a\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629 \u0641\u064a Python. \u064a\u0642\u0648\u0645 \u062d\u0632\u0645\u0629 pycasbin \u0628\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0640 ",(0,a.kt)("inlineCode",{parentName:"p"},"logging.getLogger()")," \u0644\u0636\u0628\u0637 \u0627\u0644\u0645\u0633\u062c\u0644. \u0644\u0627 \u062d\u0627\u062c\u0629 \u0644\u062a\u0643\u0648\u064a\u0646 \u062e\u0627\u0635 \u0644\u0644\u062a\u0633\u062c\u064a\u0644 \u063a\u064a\u0631 \u062a\u0647\u064a\u0626\u0629 \u0627\u0644\u0645\u0633\u062c\u0644 \u0641\u064a \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0623\u0635\u0644. \u0625\u0630\u0627 \u0644\u0645 \u064a\u062a\u0645 \u062a\u0647\u064a\u0626\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u062f\u0627\u062e\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0623\u0635\u0644\u060c \u0641\u0644\u0646 \u062a\u0631\u0649 \u0623\u064a \u0631\u0633\u0627\u0626\u0644 \u0633\u062c\u0644 \u0645\u0646 pycasbin. \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0646\u0641\u0633\u0647\u060c \u0639\u0646\u062f \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0633\u062c\u0644 \u0641\u064a pycasbin\u060c \u0633\u064a\u0633\u062a\u062e\u062f\u0645 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/c33cabfa0ac65cd09cf812a65e71794d64cb5132/casbin/util/log.py#L6C1-L6C1"},"\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a"),". \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0627\u0645\u062a\u062f\u0627\u062f\u0627\u062a pycasbin \u0627\u0644\u0623\u062e\u0631\u0649\u060c \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639 \u0625\u0644\u0649 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.2/topics/logging/"},"\u0648\u062b\u0627\u0626\u0642 \u062a\u0633\u062c\u064a\u0644 Django")," \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u062a\u062e\u062f\u0645 Django. \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a Python \u0627\u0644\u0622\u062e\u0631\u064a\u0646\u060c \u064a\u062c\u0628 \u0627\u0644\u0631\u062c\u0648\u0639 \u0625\u0644\u0649 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.config.html"},"\u0648\u062b\u0627\u0626\u0642 \u062a\u0633\u062c\u064a\u0644 Python")," \u0644\u0636\u0628\u0637 \u0627\u0644\u0645\u0633\u062c\u0644.")),(0,a.kt)("h3",{id:"\u0627\u0633\u062a\u062e\u062f\u0627\u0645-\u0645\u0633\u062c\u0644\u0627\u062a-\u0645\u062e\u062a\u0644\u0641\u0629-\u0644\u0645\u0646\u0641\u0630\u064a\u0646-\u0645\u062e\u062a\u0644\u0641\u064a\u0646"},"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0633\u062c\u0644\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0645\u0646\u0641\u0630\u064a\u0646 \u0645\u062e\u062a\u0644\u0641\u064a\u0646"),(0,a.kt)("p",null,"\u064a\u0645\u0643\u0646 \u0644\u0643\u0644 \u0645\u0646\u0641\u0630 \u0623\u0646 \u064a\u0645\u062a\u0644\u0643 \u0645\u0633\u062c\u0644\u0647 \u0627\u0644\u062e\u0627\u0635 \u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a\u060c \u0648\u064a\u0645\u0643\u0646 \u062a\u063a\u064a\u064a\u0631\u0647 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u062a\u0634\u063a\u064a\u0644."),(0,a.kt)("p",null,"\u0648\u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0633\u062c\u0644 \u0645\u0646\u0627\u0633\u0628 \u0639\u0628\u0631 \u0627\u0644\u0648\u0633\u064a\u0637 \u0627\u0644\u0623\u062e\u064a\u0631 \u0644\u0640 ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),". \u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0633\u062a\u062e\u062f\u0645 \u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u062a\u0647\u064a\u0626\u0629 \u0645\u0646\u0641\u0630\u0643\u060c \u0644\u0627 \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0648\u0633\u064a\u0637 \u0627\u0644\u0645\u0641\u0639\u0644 \u0644\u0623\u0646 \u0623\u0648\u0644\u0648\u064a\u0629 \u062d\u0642\u0644 \u0627\u0644\u0645\u0641\u0639\u0644 \u0641\u064a \u0627\u0644\u0645\u0633\u062c\u0644 \u0623\u0639\u0644\u0649."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Set a default logger as enforcer e1's logger.\n// This operation can also be seen as changing the logger of e1 at runtime.\ne1.SetLogger(&Log.DefaultLogger{})\n\n// Set another logger as enforcer e2's logger.\ne2.SetLogger(&YouOwnLogger)\n\n// Set your logger when initializing enforcer e3.\ne3, _ := casbin.NewEnforcer(\"examples/rbac_model.conf\", a, logger)\n")),(0,a.kt)("h4",{id:"\u0627\u0644\u0645\u0633\u062c\u0644\u0627\u062a-\u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629"},"\u0627\u0644\u0645\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629"),(0,a.kt)("p",null,"\u0646\u062d\u0646 \u0646\u0648\u0641\u0631 \u0628\u0639\u0636 \u0627\u0644\u0645\u0633\u062c\u0644\u0627\u062a \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0639\u0644\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a."),(0,a.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(s,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0645\u0633\u062c\u0644"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0645\u0624\u0644\u0641"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0648\u0635\u0641"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/log/default_logger.go"},"\u0627\u0644\u0645\u0633\u062c\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a (\u0645\u062f\u0645\u062c)")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0627\u0644\u0645\u0633\u062c\u0644 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0633\u062c\u0644 golang.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/zap-logger"},"\u0645\u0633\u062c\u0644 Zap")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/uber-go/zap"},"zap"),"\u060c \u064a\u0648\u0641\u0631 \u0633\u062c\u0644 \u0645\u0634\u0641\u0631 \u0628\u0635\u064a\u063a\u0629 json \u0648\u064a\u0645\u0643\u0646\u0643 \u062a\u062e\u0635\u064a\u0635 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0639 \u0645\u0633\u062c\u0644 zap \u0627\u0644\u062e\u0627\u0635 \u0628\u0643."))))),(0,a.kt)(s,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0645\u0633\u062c\u0644"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0645\u0624\u0644\u0641"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0648\u0635\u0641"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/psr3-bridge"},"\u0645\u0633\u062c\u0644 psr3-bridge")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"\u064a\u0648\u0641\u0631 \u062c\u0633\u0631 \u0645\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 ",(0,a.kt)("a",{parentName:"td",href:"https://www.php-fig.org/psr/psr-3/"},"PSR-3"),".")))))),(0,a.kt)("h4",{id:"\u0643\u064a\u0641\u064a\u0629-\u0643\u062a\u0627\u0628\u0629-\u0645\u0633\u062c\u0644"},"\u0643\u064a\u0641\u064a\u0629 \u0643\u062a\u0627\u0628\u0629 \u0645\u0633\u062c\u0644"),(0,a.kt)("p",null,"\u064a\u062c\u0628 \u0623\u0646 \u064a\u0646\u0641\u0630 \u0645\u0633\u062c\u0644\u0643 \u0648\u0627\u062c\u0647\u0629 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/log/logger.go#L20"},"Logger"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0637\u0631\u064a\u0642\u0629"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0646\u0648\u0639"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0648\u0635\u0641"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EnableLog()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0625\u0644\u0632\u0627\u0645\u064a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0633\u064a\u062a\u0645 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsEnabled()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0625\u0644\u0632\u0627\u0645\u064a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u064a\u0639\u0631\u0636 \u062d\u0627\u0644\u0629 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0645\u0633\u062c\u0644 \u0627\u0644\u062d\u0627\u0644\u064a.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogModel()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0625\u0644\u0632\u0627\u0645\u064a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u0646\u0645\u0648\u0630\u062c.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogEnforce()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0625\u0644\u0632\u0627\u0645\u064a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0633\u062c\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u062a\u0646\u0641\u064a\u0630.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogRole()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0625\u0644\u0632\u0627\u0645\u064a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0633\u062c\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u062f\u0648\u0631.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogPolicy()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0625\u0644\u0632\u0627\u0645\u064a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0633\u062c\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u0633\u064a\u0627\u0633\u0629.")))),(0,a.kt)("p",null,"\u064a\u0645\u0643\u0646\u0643 \u062a\u0645\u0631\u064a\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," \u0645\u062e\u0635\u0635 \u0625\u0644\u0649 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.SetLogger()"),"."),(0,a.kt)("p",null,"\u0625\u0644\u064a\u0643 \u0645\u062b\u0627\u0644 \u0639\u0644\u0649 \u0643\u064a\u0641\u064a\u0629 \u062a\u062e\u0635\u064a\u0635 \u0645\u0633\u062c\u0644 \u0644\u0644\u063a\u0629 Golang:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "fmt"\n    "log"\n    "strings"\n)\n\n// DefaultLogger is the implementation for a Logger using golang log.\ntype DefaultLogger struct {\n    enabled bool\n}\n\nfunc (l *DefaultLogger) EnableLog(enable bool) {\n    l.enabled = enable\n}\n\nfunc (l *DefaultLogger) IsEnabled() bool {\n    return l.enabled\n}\n\nfunc (l *DefaultLogger) LogModel(model [][]string) {\n    if !l.enabled {\n        return\n    }\n    var str strings.Builder\n    str.WriteString("Model: ")\n    for _, v := range model {\n        str.WriteString(fmt.Sprintf("%v\\n", v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogEnforce(matcher string, request []interface{}, result bool, explains [][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var reqStr strings.Builder\n    reqStr.WriteString("Request: ")\n    for i, rval := range request {\n        if i != len(request)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", rval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v", rval))\n        }\n    }\n    reqStr.WriteString(fmt.Sprintf(" ---\x3e %t\\n", result))\n\n    reqStr.WriteString("Hit Policy: ")\n    for i, pval := range explains {\n        if i != len(explains)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", pval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v \\n", pval))\n        }\n    }\n\n    log.Println(reqStr.String())\n}\n\nfunc (l *DefaultLogger) LogPolicy(policy map[string][][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var str strings.Builder\n    str.WriteString("Policy: ")\n    for k, v := range policy {\n        str.WriteString(fmt.Sprintf("%s : %v\\n", k, v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogRole(roles []string) {\n    if !l.enabled {\n        return\n    }\n\n    log.Println("Roles: ", roles)\n}\n')),(0,a.kt)("h2",{id:"\u0645\u0639\u0627\u0644\u062c\u0629-\u0627\u0644\u0623\u062e\u0637\u0627\u0621"},"\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621"),(0,a.kt)("p",null,"\u0642\u062f \u062a\u062d\u062f\u062b \u0623\u062e\u0637\u0627\u0621 \u0623\u0648 \u0627\u0646\u0647\u064a\u0627\u0631\u0627\u062a \u0639\u0646\u062f \u0627\u0633\u062a\u062e\u062f\u0627\u0645 Casbin \u0644\u0623\u0633\u0628\u0627\u0628 \u0645\u062b\u0644:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0635\u064a\u0627\u063a\u0629 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629 \u0641\u064a \u0645\u0644\u0641 \u0627\u0644\u0646\u0645\u0648\u0630\u062c (.conf)."),(0,a.kt)("li",{parentName:"ol"},"\u0635\u064a\u0627\u063a\u0629 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629 \u0641\u064a \u0645\u0644\u0641 \u0627\u0644\u0633\u064a\u0627\u0633\u0629 (.csv)."),(0,a.kt)("li",{parentName:"ol"},"\u0623\u062e\u0637\u0627\u0621 \u0645\u062e\u0635\u0635\u0629 \u0645\u0646 \u0645\u062d\u0648\u0644\u0627\u062a \u0627\u0644\u062a\u062e\u0632\u064a\u0646\u060c \u0645\u062b\u0644 \u0641\u0634\u0644 MySQL \u0641\u064a \u0627\u0644\u0627\u062a\u0635\u0627\u0644."),(0,a.kt)("li",{parentName:"ol"},"\u062e\u0637\u0623 \u0641\u064a Casbin.")),(0,a.kt)("p",null,"\u0647\u0646\u0627\u0643 \u062e\u0645\u0633 \u0648\u0638\u0627\u0626\u0641 \u0631\u0626\u064a\u0633\u064a\u0629 \u0642\u062f \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0625\u0644\u064a\u0647\u0627 \u0644\u0644\u0623\u062e\u0637\u0627\u0621 \u0623\u0648 \u0627\u0644\u0627\u0646\u0647\u064a\u0627\u0631\u0627\u062a:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u0648\u0638\u064a\u0641\u0629"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0633\u0644\u0648\u0643 \u0639\u0646\u062f \u062d\u062f\u0648\u062b \u062e\u0637\u0623"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#NewEnforcer"},"NewEnforcer()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u064a\u0639\u064a\u062f \u062e\u0637\u0623")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel"},"LoadModel()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u064a\u0639\u064a\u062f \u062e\u0637\u0623")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy"},"LoadPolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u064a\u0639\u064a\u062f \u062e\u0637\u0623")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy"},"SavePolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u064a\u0639\u064a\u062f \u062e\u0637\u0623")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce"},"Enforce()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u064a\u0639\u064a\u062f \u062e\u0637\u0623")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," \u064a\u0633\u062a\u062f\u0639\u064a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadModel()")," \u0648 ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadPolicy()")," \u062f\u0627\u062e\u0644\u064a\u064b\u0627. \u0644\u0630\u0627 \u0644\u0627 \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u0623\u062e\u064a\u0631\u064a\u0646 \u0639\u0646\u062f \u0627\u0633\u062a\u062e\u062f\u0627\u0645 ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),".")),(0,a.kt)("h2",{id:"\u062a\u0645\u0643\u064a\u0646-\u0648\u062a\u0639\u0637\u064a\u0644"},"\u062a\u0645\u0643\u064a\u0646 \u0648\u062a\u0639\u0637\u064a\u0644"),(0,a.kt)("p",null,"\u064a\u0645\u0643\u0646 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0645\u0646\u0641\u0630 \u0639\u0628\u0631 \u0648\u0638\u064a\u0641\u0629 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableEnforce()"),". \u0639\u0646\u062f \u062a\u0639\u0637\u064a\u0644\u0647\u060c \u0633\u064a\u0639\u064a\u062f ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.Enforce()")," \u062f\u0627\u0626\u0645\u064b\u0627 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0623\u062e\u0631\u0649 \u0645\u062b\u0644 \u0625\u0636\u0627\u0641\u0629 \u0623\u0648 \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a \u0644\u0627 \u062a\u062a\u0623\u062b\u0631. \u0625\u0644\u064a\u0643 \u0645\u062b\u0627\u0644:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n\n// Will return false.\n// By default, the enforcer is enabled.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Disable the enforcer at runtime.\ne.EnableEnforce(false)\n\n// Will return true for any request.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Enable the enforcer again.\ne.EnableEnforce(true)\n\n// Will return false.\ne.Enforce("non-authorized-user", "data1", "read")\n')))}m.isMDXComponent=!0}}]);