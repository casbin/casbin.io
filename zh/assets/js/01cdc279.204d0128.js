"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6822],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"how-it-works",title:"\u5de5\u4f5c\u539f\u7406"},p=void 0,c={unversionedId:"how-it-works",id:"how-it-works",title:"\u5de5\u4f5c\u539f\u7406",description:"\u5728 Casbin \u4e2d, \u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u88ab\u62bd\u8c61\u4e3a\u57fa\u4e8e PERM (Policy, Effect, Request, Matcher) \u7684\u4e00\u4e2a\u6587\u4ef6\u3002 \u56e0\u6b64\uff0c\u5207\u6362\u6216\u5347\u7ea7\u9879\u76ee\u7684\u6388\u6743\u673a\u5236\u4e0e\u4fee\u6539\u914d\u7f6e\u4e00\u6837\u7b80\u5355\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u7ec4\u5408\u53ef\u7528\u7684\u6a21\u578b\u6765\u5b9a\u5236\u60a8\u81ea\u5df1\u7684\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u5728\u4e00\u4e2amodel\u4e2d\u7ed3\u5408RBAC\u89d2\u8272\u548cABAC\u5c5e\u6027\uff0c\u5e76\u5171\u4eab\u4e00\u7ec4policy\u89c4\u5219\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/HowItWorks.mdx",sourceDirName:".",slug:"/how-it-works",permalink:"/zh/docs/how-it-works",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/HowItWorks.mdx",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"\u5de5\u4f5c\u539f\u7406"},sidebar:"docs",previous:{title:"\u5f00\u59cb\u4f7f\u7528",permalink:"/zh/docs/get-started"},next:{title:"\u4f7f\u7528\u6307\u5357",permalink:"/zh/docs/tutorials"}},u={},s=[{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u7b56\u7565",id:"\u7b56\u7565",level:3},{value:"\u5339\u914d\u5668",id:"\u5339\u914d\u5668",level:3},{value:"\u6548\u679c",id:"\u6548\u679c",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Casbin \u4e2d, \u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u88ab\u62bd\u8c61\u4e3a\u57fa\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"PERM (Policy, Effect, Request, Matcher)")," \u7684\u4e00\u4e2a\u6587\u4ef6\u3002 \u56e0\u6b64\uff0c\u5207\u6362\u6216\u5347\u7ea7\u9879\u76ee\u7684\u6388\u6743\u673a\u5236\u4e0e\u4fee\u6539\u914d\u7f6e\u4e00\u6837\u7b80\u5355\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u7ec4\u5408\u53ef\u7528\u7684\u6a21\u578b\u6765\u5b9a\u5236\u60a8\u81ea\u5df1\u7684\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u5728\u4e00\u4e2amodel\u4e2d\u7ed3\u5408RBAC\u89d2\u8272\u548cABAC\u5c5e\u6027\uff0c\u5e76\u5171\u4eab\u4e00\u7ec4policy\u89c4\u5219\u3002"),(0,o.kt)("p",null,"PERM\u6a21\u5f0f\u7531\u56db\u4e2a\u57fa\u7840\uff08\u653f\u7b56\u3001\u6548\u679c\u3001\u8bf7\u6c42\u3001\u5339\u914d\uff09\u7ec4\u6210\uff0c\u63cf\u8ff0\u4e86\u8d44\u6e90\u4e0e\u7528\u6237\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"),(0,o.kt)("h3",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,o.kt)("p",null,"Define the request parameters. A basic request is a tuple object, requiring at least a subject (accessed entity), object (accessed resource) and action (access method)"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4e00\u4e2a\u8bf7\u6c42\u53ef\u80fd\u957f\u8fd9\u6837\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"r={sub,obj,act}")),(0,o.kt)("p",null,"\u5b83\u5b9e\u9645\u4e0a\u5b9a\u4e49\u4e86\u6211\u4eec\u5e94\u8be5\u63d0\u4f9b\u8bbf\u95ee\u63a7\u5236\u5339\u914d\u529f\u80fd\u7684\u53c2\u6570\u540d\u79f0\u548c\u987a\u5e8f\u3002"),(0,o.kt)("h3",{id:"\u7b56\u7565"},"\u7b56\u7565"),(0,o.kt)("p",null,"Define the model of the access strategy. In fact, it defines the name and order of the fields in the Policy rule document."),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act}")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act, eft}")),(0,o.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u672a\u5b9a\u4e49eft (policy result)\uff0c\u5219\u7b56\u7565\u6587\u4ef6\u4e2d\u7684\u7ed3\u679c\u5b57\u6bb5\u5c06\u4e0d\u4f1a\u88ab\u8bfb\u53d6\uff0c \u548c\u5339\u914d\u7684\u7b56\u7565\u7ed3\u679c\u5c06\u9ed8\u8ba4\u88ab\u5141\u8bb8\u3002"),(0,o.kt)("h3",{id:"\u5339\u914d\u5668"},"\u5339\u914d\u5668"),(0,o.kt)("p",null,"\u5339\u914d\u8bf7\u6c42\u548c\u653f\u7b56\u7684\u89c4\u5219\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p.obj")," \u8fd9\u4e2a\u7b80\u5355\u548c\u5e38\u89c1\u7684\u5339\u914d\u89c4\u5219\u610f\u5473\u7740\u5982\u679c\u8bf7\u6c42\u7684\u53c2\u6570(\u8bbf\u95ee\u5b9e\u4f53\uff0c\u8bbf\u95ee\u8d44\u6e90\u548c\u8bbf\u95ee\u65b9\u5f0f)\u5339\u914d\uff0c \u5982\u679c\u53ef\u4ee5\u5728\u7b56\u7565\u4e2d\u627e\u5230\u8d44\u6e90\u548c\u65b9\u6cd5\uff0c\u90a3\u4e48\u7b56\u7565\u7ed3\u679c\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"p.eft"),"\uff09\u4fbf\u4f1a\u8fd4\u56de\u3002 \u7b56\u7565\u7684\u7ed3\u679c\u5c06\u4fdd\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"p.eft")," \u4e2d\u3002"),(0,o.kt)("h3",{id:"\u6548\u679c"},"\u6548\u679c"),(0,o.kt)("p",null,"\u5b83\u53ef\u4ee5\u88ab\u7406\u89e3\u4e3a\u4e00\u79cd\u6a21\u578b\uff0c\u5728\u8fd9\u79cd\u6a21\u578b\u4e2d\uff0c\u5bf9\u5339\u914d\u7ed3\u679c\u518d\u6b21\u4f5c\u51fa\u903b\u8f91\u7ec4\u5408\u5224\u65ad\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"e = some (where (p.eft == allow))")),(0,o.kt)("p",null,"\u8fd9\u53e5\u8bdd\u610f\u5473\u7740\uff0c\u5982\u679c\u5339\u914d\u7684\u7b56\u7565\u7ed3\u679c\u6709\u4e00\u4e9b\u662f\u5141\u8bb8\u7684\uff0c\u90a3\u4e48\u6700\u7ec8\u7ed3\u679c\u4e3a\u771f\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u53e6\u4e00\u4e2a\u793a\u4f8b\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"e = some (where (p.eft == allow)) && !some(where (p.eft == deny)")," \u6b64\u793a\u4f8b\u7ec4\u5408\u7684\u903b\u8f91\u542b\u4e49\u662f\uff1a\u5982\u679c\u6709\u7b26\u5408\u5141\u8bb8\u7ed3\u679c\u7684\u7b56\u7565\u4e14\u6ca1\u6709\u7b26\u5408\u62d2\u7edd\u7ed3\u679c\u7684\u7b56\u7565\uff0c \u7ed3\u679c\u662f\u4e3a\u771f\u3002 \u6362\u8a00\u4e4b\uff0c\u5f53\u5339\u914d\u7b56\u7565\u5747\u4e3a\u5141\u8bb8\uff08\u6ca1\u6709\u4efb\u4f55\u5426\u8ba4\uff09\u662f\u4e3a\u771f\uff08\u66f4\u7b80\u5355\u7684\u662f\uff0c\u65e2\u5141\u8bb8\u53c8\u540c\u65f6\u5426\u8ba4\uff0c\u62d2\u7edd\u5c31\u5177\u6709\u4f18\u5148\u5730\u4f4d)\u3002"),(0,o.kt)("p",null,"The most basic and simplest model in Casbin is ACL. ACL's model CONF is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Request definition\n[request_definition]\nr = sub, obj, act\n\n# Policy definition\n[policy_definition]\np = sub, obj, act\n\n# Policy effect\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,o.kt)("p",null,"ACL\u6a21\u578b\u7684\u4e00\u4e2a\u793a\u4f8b\u7b56\u7565\u7c7b\u4f3c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"p, alice, data1, read\np, bob, data2, write\n")),(0,o.kt)("p",null,"\u5b83\u610f\u5473\u7740\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"alice\u53ef\u4ee5\u8bfb\u53d6data1"),(0,o.kt)("li",{parentName:"ul"},"bob\u53ef\u4ee5\u7f16\u5199data2")),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u652f\u6301\u591a\u884c\u6a21\u5f0f\uff0c\u901a\u8fc7\u5728\u7ed3\u5c3e\u5904\u8ffd\u52a0\u201c","\\","\u201d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"#  \u5339\u914d\u5668\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\ \n  && r.act == p.act\n")),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u5bf9\u4e8e ABAC\uff0c\u60a8\u5728\u53ef\u4ee5\u5728 Casbin ",(0,o.kt)("strong",{parentName:"p"},"golang")," \u7248\u672c\u4e2d\u5c1d\u8bd5\u4e0b\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"in")," (jCasbin \u548c Node-Casbin \u5c1a\u4e0d\u652f\u6301) \u64cd\u4f5c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,o.kt)("p",null,"But you ",(0,o.kt)("strong",{parentName:"p"},"SHOULD")," make sure that the length of the array is ",(0,o.kt)("strong",{parentName:"p"},"MORE")," than ",(0,o.kt)("strong",{parentName:"p"},"1"),", otherwise there will cause it to panic."),(0,o.kt)("p",null,"\u5bf9\u4e8e\u66f4\u591a\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"govaluate"),"\u3002"))}m.isMDXComponent=!0}}]);