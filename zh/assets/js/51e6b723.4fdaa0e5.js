"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=g(n),c=a,u=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var g=2;g<o;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=n(7462),a=(n(7294),n(3905));const o={id:"log-error",title:"\u65e5\u5fd7 & \u9519\u8bef\u5904\u7406",description:"Logging and error handling in Casbin",keywords:["\u65e5\u5fd7","\u9519\u8bef","\u9519\u8bef\u5904\u7406"],authors:["hsluoyz"]},l=void 0,i={unversionedId:"log-error",id:"log-error",title:"\u65e5\u5fd7 & \u9519\u8bef\u5904\u7406",description:"Logging and error handling in Casbin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/LogError.mdx",sourceDirName:".",slug:"/log-error",permalink:"/zh/docs/log-error",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"log-error",title:"\u65e5\u5fd7 & \u9519\u8bef\u5904\u7406",description:"Logging and error handling in Casbin",keywords:["\u65e5\u5fd7","\u9519\u8bef","\u9519\u8bef\u5904\u7406"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Casbin\u670d\u52a1",permalink:"/zh/docs/service"},next:{title:"\u524d\u7aef\u4f7f\u7528",permalink:"/zh/docs/frontend"}},p={},g=[{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2},{value:"Enable and disable",id:"enable-and-disable",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=d("Tabs"),m=d("TabItem"),c={toc:g};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,a.kt)("p",null,"Casbin uses the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," to print logs to the console by default, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2017/07/15 19:43:56 [Request: alice, data1, read ---\x3e true]\n")),(0,a.kt)("p",null,"Logging is not enabled by default. \u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableLog()")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"\u51fd\u6570\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u6765\u5207\u6362\u5b83\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We already support logging the model, enforce request, role, and policy in Golang. \u60a8\u53ef\u4ee5\u5b9a\u4e49\u60a8\u81ea\u5df1\u7684\u65e5\u5fd7\u6765\u8bb0\u5f55Casbin\u3002 \u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 Python, pycasbin \u4f1a\u5f71\u54cd\u9ed8\u8ba4\u7684 Python \u65e5\u5fd7\u673a\u5236\u3002 The pycasbin package makes a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"logging.getLogger()")," to set the logger. \u9664\u4e86\u521d\u59cb\u5316\u7236\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u65e5\u5fd7\u8bb0\u5f55\u5668\u5916\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u914d\u7f6e\u7684\u65e5\u5fd7\u3002 If no logging is initialized within the parent application, you will not see any log messages from pycasbin. At the same time, when you enable log in pycasbin, it will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/c33cabfa0ac65cd09cf812a65e71794d64cb5132/casbin/util/log.py#L6C1-L6C1"},"default log configuration"),". For other pycasbin extensions, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.2/topics/logging/"},"Django logging docs")," if you are a Django user. For other Python users, you should refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.config.html"},"Python logging docs")," to configure the logger. :::"),(0,a.kt)("h3",{parentName:"admonition",id:"use-different-loggers-for-different-enforcers"},"Use different loggers for different enforcers"),(0,a.kt)("p",{parentName:"admonition"},"Every enforcer can have its own logger to log information, and it can be changed at runtime."),(0,a.kt)("p",{parentName:"admonition"},"And you can use a proper logger via the last parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),". If you are using this way to initialize your enforcer, you don't need to use the enabled parameter because the priority of the enabled field in the logger is higher."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u8bbe\u7f6e\u9ed8\u8ba4\u8bb0\u5f55\u5668\u4f5c\u4e3a\u6267\u884c\u5668e1\u7684\u8bb0\u5f55\u5668\u3002\n// This operation can also be seen as changing the logger of e1 at runtime.\ne1.SetLogger(&Log.DefaultLogger{})\n\n// \u8bbe\u7f6e\u53e6\u4e00\u4e2a\u8bb0\u5f55\u5668\u4f5c\u4e3a\u6267\u884c\u5668e2\u7684\u65e5\u5fd7\u8bb0\u5f55\u5668\u3002\ne2.SetLogger(&YouOwnLogger)\n\n// Set your logger when initializing enforcer e3.\ne3, _ := casbin.NewEnforcer("examples/rbac_model.conf", a, logger)\n')),(0,a.kt)("h4",{parentName:"admonition",id:"\u652f\u6301\u7684\u8bb0\u5f55\u5668"},"\u652f\u6301\u7684\u8bb0\u5f55\u5668"),(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u8bb0\u5f55\u5668\u6765\u5e2e\u52a9\u60a8\u8bb0\u5f55\u4fe1\u606f\u3002"),(0,a.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8bb0\u5f55\u5668"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/log/default_logger.go"},"Default logger (built-in)")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4f7f\u7528golang\u65e5\u5fd7\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/zap-logger"},"Zap logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Using ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/uber-go/zap"},"zap"),", provide json encoded log and you can customize more with your own zap-logger."))))),(0,a.kt)(m,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8bb0\u5f55\u5668"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/psr3-bridge"},"psr3-bridge \u8bb0\u5f55\u5668")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"td",href:"https://www.php-fig.org/psr/psr-3/"},"PSR-3")," \u517c\u5bb9\u6865\u3002")))))),(0,a.kt)("h4",{parentName:"admonition",id:"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u8bb0\u5f55\u5668"},"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u8bb0\u5f55\u5668"),(0,a.kt)("p",{parentName:"admonition"},"\u60a8\u7684\u8bb0\u5f55\u5668\u5e94\u8be5\u5b9e\u73b0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/log/logger.go#L20"},"Logger")," \u63a5\u53e3\u3002"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b9e\u73b0\u8981\u7d20"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EnableLog()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null},"Control whether to print the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsEnabled()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5f53\u524d\u65e5\u5fd7\u542f\u7528\u7684\u72b6\u6001\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogModel()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to the model.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogEnforce()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to enforcing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogRole()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to the role.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogPolicy()"),(0,a.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to the policy.")))),(0,a.kt)("p",{parentName:"admonition"},"\u60a8\u53ef\u4ee5\u5c06\u60a8\u7684\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8bb0\u5f55\u5668")," \u4f20\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.SetLogger()"),"\u51fd\u6570\u3002"),(0,a.kt)("p",{parentName:"admonition"},"Here is an example of how to customize a logger for Golang:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "fmt"\n    "log"\n    "strings"\n)\n\n// \u9ed8\u8ba4\u65e5\u5fd7\u662f\u4f7f\u7528golang\u65e5\u5fd7\u7684\u65e5\u5fd7\u5b9e\u73b0\u7684\u3002\ntype DefaultLogger struct {\n    enabled bool\n}\n\nfunc (l *DefaultLogger) EnableLog(enable bool) {\n    l.enabled = enable\n}\n\nfunc (l *DefaultLogger) IsEnabled() bool {\n    return l.enabled\n}\n\nfunc (l *DefaultLogger) LogModel(model [][]string) {\n    if !l.enabled {\n        return\n    }\n    var str strings.Builder\n    str.WriteString("Model: ")\n    for _, v := range model {\n        str.WriteString(fmt.Sprintf("%v\\n", v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogEnforce(matcher string, request []interface{}, result bool, explains [][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var reqStr strings.Builder\n    reqStr.WriteString("Request: ")\n    for i, rval := range request {\n        if i != len(request)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", rval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v", rval))\n        }\n    }\n    reqStr.WriteString(fmt.Sprintf(" ---\x3e %t\\n", result))\n\n    reqStr.WriteString("Hit Policy: ")\n    for i, pval := range explains {\n        if i != len(explains)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", pval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v \\n", pval))\n        }\n    }\n\n    log.Println(reqStr.String())\n}\n\nfunc (l *DefaultLogger) LogPolicy(policy map[string][][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var str strings.Builder\n    str.WriteString("Policy: ")\n    for k, v := range policy {\n        str.WriteString(fmt.Sprintf("%s : %v\\n", k, v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogRole(roles []string) {\n    if !l.enabled {\n        return\n    }\n\n    log.Println("Roles: ", roles)\n}\n')),(0,a.kt)("h2",{parentName:"admonition",id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,a.kt)("p",{parentName:"admonition"},"Errors or panics may occur when you use Casbin for reasons like:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Invalid syntax in the model file (.conf)."),(0,a.kt)("li",{parentName:"ol"},"Invalid syntax in the policy file (.csv)."),(0,a.kt)("li",{parentName:"ol"},"Custom errors from storage adapters, e.g., MySQL fails to connect."),(0,a.kt)("li",{parentName:"ol"},"Casbin\u7684bug\u3002")),(0,a.kt)("p",{parentName:"admonition"},"There are five main functions you may need to be aware of for errors or panics:"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5f02\u5e38\u65f6\u8868\u73b0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#NewEnforcer"},"NewEnforcer()")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel"},"LoadModel()")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy"},"LoadPolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy"},"SavePolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce"},"Enforce()")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an error"))))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadModel()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadPolicy()")," internally. So you don't have to call the latter two when using ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"."),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"enable-and-disable"},"Enable and disable"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Encer.EnableEnforcece()")," \u51fd\u6570\u7981\u7528\u6267\u884c\u5668\u3002 \u5f53\u5b83\u88ab\u7981\u7528\u65f6\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.Enforce()")," \u5c06\u603b\u662f\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002 Other operations like adding or removing policies are not affected. \u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n\n// \u5c06\u4f1a\u8fd4\u56defalse\n// \u9ed8\u8ba4\u60c5\u51b5\u4e0benforcer\u662f\u542f\u7528\u7684\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Disable the enforcer at runtime.\ne.EnableEnforce(false)\n\n// \u5bf9\u4efb\u4f55\u8bf7\u6c42\u90fd\u8fd4\u56detrue\ne.Enforce("non-authorized-user", "data1", "read")\n\n// \u6253\u5f00enforcer\ne.EnableEnforce(true)\n\n// \u5c06\u4f1a\u8fd4\u56defalse\ne.Enforce("non-authorized-user", "data1", "read")\n')))}u.isMDXComponent=!0}}]);