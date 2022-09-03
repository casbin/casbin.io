"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"function",title:"Fonction",description:"Using the built-in functions or specifying your own function",keywords:["function","customize"]},l=void 0,o={unversionedId:"function",id:"function",title:"Fonction",description:"Using the built-in functions or specifying your own function",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Function.mdx",sourceDirName:".",slug:"/function",permalink:"/fr/docs/function",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"function",title:"Fonction",description:"Using the built-in functions or specifying your own function",keywords:["function","customize"]},sidebar:"docs",previous:{title:"Effet",permalink:"/fr/docs/effector"},next:{title:"RBAC",permalink:"/fr/docs/rbac"}},c={},p=[{value:"Fonctions dans les matchers",id:"fonctions-dans-les-matchers",level:2},{value:"Comment ajouter une fonction personnalis\xe9e",id:"comment-ajouter-une-fonction-personnalis\xe9e",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fonctions-dans-les-matchers"},"Fonctions dans les matchers"),(0,r.kt)("p",null,"Vous pouvez m\xeame sp\xe9cifier des fonctions dans un matcher pour le rendre plus puissant. Vous pouvez utiliser les fonctions int\xe9gr\xe9es ou sp\xe9cifier votre propre fonction. The built-in key-matching functions take such a format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern)\n")),(0,r.kt)("p",null,"It returns a boolean indicating whether ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern"),"."),(0,r.kt)("p",null,"Les fonctions int\xe9gr\xe9es support\xe9es sont :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Fonction"),(0,r.kt)("th",{parentName:"tr",align:null},"url"),(0,r.kt)("th",{parentName:"tr",align:null},"pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Exemple"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format@@0 keyMatch2"),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,r.kt)("inlineCode",{parentName:"td"},":")," comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf"},"keymatch2_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format@@0 keyMatch3"),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/{resource}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format@@0 keyMatch4"),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/123/book/123")),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/book/{id}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Correspondance regexe"),(0,r.kt)("td",{parentName:"tr",align:null},"toute cha\xeene de caract\xe8res"),(0,r.kt)("td",{parentName:"tr",align:null},"un motif d'expression r\xe9guli\xe8re"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"une adresse IP comme ",(0,r.kt)("inlineCode",{parentName:"td"},"192.168.2.123")),(0,r.kt)("td",{parentName:"tr",align:null},"une adresse IP ou un CIDR comme ",(0,r.kt)("inlineCode",{parentName:"td"},"192.168.2.0/24")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf"},"ipmatch_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv"},"ipmatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"un chemin semblable \xe0 un chemin comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"un mod\xe8le de glob comme ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"))))),(0,r.kt)("p",null,"For key-getting functions, they usually take three parameters(except ",(0,r.kt)("inlineCode",{parentName:"p"},"keyGet"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern, string key_name)\n")),(0,r.kt)("p",null,"They will return the value of the key ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name")," if it matches the pattern, and return ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," if nothing is matched."),(0,r.kt)("p",null,"For example,  ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet2("/resource1/action", "/:res/action, "res")')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet3("/resource1_admin/action", "/{res}_admin/*", "res")')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1"'),". As for ",(0,r.kt)("inlineCode",{parentName:"p"},"KetGet"),", which takes two parameters, ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet("/resource1/action", "/*)')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1/action"'),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"url"),(0,r.kt)("th",{parentName:"tr",align:null},"pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"key_name"),(0,r.kt)("th",{parentName:"tr",align:null},"example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/*")),(0,r.kt)("td",{parentName:"tr",align:null},"\\ "),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf"},"keyget_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or ",(0,r.kt)("inlineCode",{parentName:"td"},":")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/prooj/:resource")),(0,r.kt)("td",{parentName:"tr",align:null},"key name specified in the pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf"},"keyget2_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet3"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/res3_admin/")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/{resource}_admin/*")),(0,r.kt)("td",{parentName:"tr",align:null},"key name specified in the pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin_operators_test.go#L209-L247"},"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin_operators_test.go#L209-L247"))))),(0,r.kt)("p",null,"Voir les d\xe9tails pour les fonctions ci-dessus \xe0 : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go")),(0,r.kt)("h2",{id:"comment-ajouter-une-fonction-personnalis\xe9e"},"Comment ajouter une fonction personnalis\xe9e"),(0,r.kt)("p",null,"Pr\xe9parez d'abord votre fonction. Il prend plusieurs param\xe8tres et retourne un bool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func KeyMatch(key1 string, key2 string) bool {\n    i := strings.Index(key2, "*")\n    if i == -1 {\n        return key1 == key2\n    }\n\n    if len(key1) > i {\n        return key1[:i] == key2[:i]\n    }\n    return key1 == key2[:i]\n}\n')),(0,r.kt)("p",null,"Ensuite enveloppez-le avec les types ",(0,r.kt)("inlineCode",{parentName:"p"},"interface{}"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func KeyMatchFunc(args ...interface{}) (interface{}, error) {\n    name1 := args[0].(string)\n    name2 := args[1].(string)\n\n    return (bool)(KeyMatch(name1, name2)), nil\n}\n")),(0,r.kt)("p",null,"Enfin enregistrez la fonction aupr\xe8s de l'agent de contr\xf4le de Casbin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddFunction("my_func", KeyMatchFunc)\n')),(0,r.kt)("p",null,"Maintenant, vous pouvez utiliser la fonction dans votre mod\xe8le CONF comme ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act\n")))}s.isMDXComponent=!0}}]);