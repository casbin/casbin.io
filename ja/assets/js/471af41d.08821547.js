"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9670],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(b,i(i({ref:n},s),{},{components:t})):r.createElement(b,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={id:"abac",title:"ABAC",description:"Casbin\u306b\u57fa\u3065\u304fABAC",keywords:["ABAC","ABAC model"],authors:["hsluoyz"]},i=void 0,l={unversionedId:"abac",id:"abac",title:"ABAC",description:"Casbin\u306b\u57fa\u3065\u304fABAC",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/ABAC.mdx",sourceDirName:".",slug:"/abac",permalink:"/ja/docs/abac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ABAC.mdx",tags:[],version:"current",frontMatter:{id:"abac",title:"ABAC",description:"Casbin\u306b\u57fa\u3065\u304fABAC",keywords:["ABAC","ABAC model"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Casbin RBAC vs. RBAC96",permalink:"/ja/docs/rbac-96"},next:{title:"Priority Model",permalink:"/ja/docs/priority-model"}},p={},c=[{value:"ABAC\u30e2\u30c7\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",id:"abac\u30e2\u30c7\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b",level:2},{value:"ABAC\u306e\u4f7f\u3044\u65b9\u306f\uff1f",id:"abac\u306e\u4f7f\u3044\u65b9\u306f",level:2},{value:"\u8907\u96d1\u3067\u5927\u91cf\u306eABAC\u30eb\u30fc\u30eb\u306e\u30e2\u30c7\u30eb\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b",id:"\u8907\u96d1\u3067\u5927\u91cf\u306eabac\u30eb\u30fc\u30eb\u306e\u30e2\u30c7\u30eb\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b",level:2}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"abac\u30e2\u30c7\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b"},"ABAC\u30e2\u30c7\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f"),(0,a.kt)("p",null,"ABAC\u306fAttribute-Based Access Control\u306e\u7565\u3067\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u6587\u5b57\u5217\u306e\u5024\u81ea\u4f53\u3092\u4f7f\u7528\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u4e3b\u4f53\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3001\u307e\u305f\u306f\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u5c5e\u6027\uff08\u30d7\u30ed\u30d1\u30c6\u30a3\uff09\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002 XACML\u3068\u3044\u3046\u8907\u96d1\u306aABAC\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u8a00\u8a9e\u3092\u805e\u3044\u305f\u3053\u3068\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002 \u4e00\u65b9\u3001Casbin\u306eABAC\u306f\u306f\u308b\u304b\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3002 Casbin\u306eABAC\u3067\u306f\u3001\u30e2\u30c7\u30eb\u8981\u7d20\u306e\u6587\u5b57\u5217\u306e\u4ee3\u308f\u308a\u306b\u69cb\u9020\u4f53\u3084\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u516c\u5f0f\u306eABAC\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == r.obj.Owner\n")),(0,a.kt)("p",null,"\u30de\u30c3\u30c1\u30e3\u30fc\u3067\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj"),"\u306e\u4ee3\u308f\u308a\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj.Owner"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforce()"),"\u95a2\u6570\u306b\u6e21\u3055\u308c\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj"),"\u306f\u6587\u5b57\u5217\u3067\u306f\u306a\u304f\u3001\u69cb\u9020\u4f53\u307e\u305f\u306f\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u306a\u308a\u307e\u3059\u3002 Casbin\u306f\u30ea\u30d5\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u305d\u306e\u69cb\u9020\u4f53\u307e\u305f\u306f\u30af\u30e9\u30b9\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"obj"),"\u30e1\u30f3\u30d0\u5909\u6570\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u3053\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj"),"\u306e\u69cb\u9020\u4f53\u307e\u305f\u306f\u30af\u30e9\u30b9\u306e\u5b9a\u7fa9\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type testResource struct {\n    Name  string\n    Owner string\n}\n")),(0,a.kt)("p",null,"JSON\u3092\u901a\u3058\u3066\u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"e.EnableAcceptJsonRequest(true)"),"\u3067\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("examples/abac_model.conf")\ne.EnableAcceptJsonRequest(true)\n\ndata1Json := `{ "Name": "data1", "Owner": "bob"}`\n\nok, _ := e.Enforce("alice", data1Json, "read")\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"JSON\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u53d7\u3051\u5165\u308c\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c1.1\u304b\u30891.5\u500d\u4f4e\u4e0b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"abac\u306e\u4f7f\u3044\u65b9\u306f"},"ABAC\u306e\u4f7f\u3044\u65b9\u306f\uff1f"),(0,a.kt)("p",null,"ABAC\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u6b21\u306e2\u3064\u306e\u3053\u3068\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u30e2\u30c7\u30eb\u30de\u30c3\u30c1\u30e3\u30fc\u3067\u5c5e\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8981\u7d20\u306e\u5f15\u6570\u3068\u3057\u3066\u69cb\u9020\u4f53\u307e\u305f\u306f\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092Casbin\u306e",(0,a.kt)("inlineCode",{parentName:"li"},"Enforce()"),"\u95a2\u6570\u306b\u6e21\u3057\u307e\u3059\u3002")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u73fe\u5728\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"r.sub"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"r.act"),"\u306a\u3069\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u8981\u7d20\u306e\u307f\u304cABAC\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 Casbin\u306e\u30dd\u30ea\u30b7\u30fc\u3067\u69cb\u9020\u4f53\u3084\u30af\u30e9\u30b9\u3092\u5b9a\u7fa9\u3059\u308b\u65b9\u6cd5\u304c\u306a\u3044\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"p.sub"),"\u306e\u3088\u3046\u306a\u30dd\u30ea\u30b7\u30fc\u8981\u7d20\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u30de\u30c3\u30c1\u30e3\u30fc\u3067\u8907\u6570\u306eABAC\u5c5e\u6027\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u4f8b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"m = r.sub.Domain == r.obj.Domain"),"\u3002")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"CSV\u306e\u30bb\u30d1\u30ec\u30fc\u30bf\u3068\u7af6\u5408\u3059\u308b\u30dd\u30ea\u30b7\u30fc\u3067\u30ab\u30f3\u30de\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u5f15\u7528\u7b26\u3067\u56f2\u3080\u3053\u3068\u3067\u30a8\u30b9\u30b1\u30fc\u30d7\u3067\u304d\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001",(0,a.kt)("inlineCode",{parentName:"p"},'"keyMatch("bob", r.sub.Role)"'),"\u306f\u5206\u5272\u3055\u308c\u307e\u305b\u3093\u3002")),(0,a.kt)("h2",{id:"\u8907\u96d1\u3067\u5927\u91cf\u306eabac\u30eb\u30fc\u30eb\u306e\u30e2\u30c7\u30eb\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b"},"\u8907\u96d1\u3067\u5927\u91cf\u306eABAC\u30eb\u30fc\u30eb\u306e\u30e2\u30c7\u30eb\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b"),(0,a.kt)("p",null,"\u4e0a\u8a18\u306eABAC\u30e2\u30c7\u30eb\u306e\u5b9f\u88c5\u306f\u3001\u305d\u306e\u6838\u5fc3\u3067\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3002 \u3057\u304b\u3057\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u8a8d\u8a3c\u30b7\u30b9\u30c6\u30e0\u306f\u8907\u96d1\u3067\u5927\u91cf\u306eABAC\u30eb\u30fc\u30eb\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002 \u3053\u306e\u8981\u4ef6\u3092\u6e80\u305f\u3059\u305f\u3081\u306b\u3001\u30e2\u30c7\u30eb\u3067\u306f\u306a\u304f\u30dd\u30ea\u30b7\u30fc\u306b\u30eb\u30fc\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"eval()"),"\u6a5f\u80fd\u69cb\u9020\u3092\u5c0e\u5165\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002 \u3053\u3053\u306b\u4f8b\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001ABAC\u30e2\u30c7\u30eb\u3092\u5b9a\u7fa9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"CONF"),"\u30d5\u30a1\u30a4\u30eb\u306e\u5b9a\u7fa9\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub_rule, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"p.sub_rule"),"\u306f\u30dd\u30ea\u30b7\u30fc\u3067\u4f7f\u7528\u3055\u308c\u308b\u5fc5\u8981\u306a\u5c5e\u6027\u3092\u542b\u3080\u69cb\u9020\u4f53\u307e\u305f\u306f\u30af\u30e9\u30b9\uff08\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u578b\uff09\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcement"),"\u306e\u305f\u3081\u306e\u30e2\u30c7\u30eb\u306b\u5bfe\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u30dd\u30ea\u30b7\u30fc\u3067\u3059\u3002 \u3053\u308c\u3067\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"eval()"),"\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u6e21\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3001\u7279\u5b9a\u306eABAC\u5236\u7d04\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, r.sub.Age > 18, /data1, read\np, r.sub.Age < 60, /data2, write\n")))}u.isMDXComponent=!0}}]);