"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"function",title:"Functions",description:"Usando funciones integradas o especificando funciones personalizadas",keywords:["function","customize"],authors:["hsluoyz"]},i=void 0,l={unversionedId:"function",id:"function",title:"Functions",description:"Usando funciones integradas o especificando funciones personalizadas",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Function.mdx",sourceDirName:".",slug:"/function",permalink:"/es/docs/function",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Function.mdx",tags:[],version:"current",frontMatter:{id:"function",title:"Functions",description:"Usando funciones integradas o especificando funciones personalizadas",keywords:["function","customize"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Effector",permalink:"/es/docs/effector"},next:{title:"RBAC",permalink:"/es/docs/rbac"}},c={},p=[{value:"Funciones en comparadores",id:"funciones-en-comparadores",level:2},{value:"C\xf3mo agregar una funci\xf3n personalizada",id:"c\xf3mo-agregar-una-funci\xf3n-personalizada",level:2}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"funciones-en-comparadores"},"Funciones en comparadores"),(0,r.kt)("p",null,"Incluso puedes especificar funciones en un comparador para hacerlo m\xe1s poderoso. Puedes usar funciones integradas o especificar tu propia funci\xf3n.\nLas funciones integradas de coincidencia de claves toman el siguiente formato:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern)\n")),(0,r.kt)("p",null,"Devuelven un booleano indicando si la ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," coincide con el ",(0,r.kt)("inlineCode",{parentName:"p"},"patr\xf3n"),"."),(0,r.kt)("p",null,"Las funciones integradas soportadas son:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Funci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"url"),(0,r.kt)("th",{parentName:"tr",align:null},"patr\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Ejemplo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL o un patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch","_","model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch","_","policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch2"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL o un patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},":")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf"},"keymatch2","_","model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2","_","policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch3"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL o un patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/{resource}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin","_","operators","_","test.go#L171-L196"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch4"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/123/book/123")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL o un patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/book/{id}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin","_","operators","_","test.go#L208-L222"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch5"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/123/?status=1")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL, un patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," o ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/1cde2646d10ad1190c0d784c3a1c0e1ace1b5bc9/util/builtin_operators_test.go#L485-L526"},"https://github.com/casbin/casbin/blob/1cde2646d10ad1190c0d784c3a1c0e1ace1b5bc9/util/builtin","_","operators","_","test.go#L485-L526"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regexMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"cualquier cadena"),(0,r.kt)("td",{parentName:"tr",align:null},"un patr\xf3n de expresi\xf3n regular"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch","_","model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch","_","policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"una direcci\xf3n IP como ",(0,r.kt)("inlineCode",{parentName:"td"},"192.168.2.123")),(0,r.kt)("td",{parentName:"tr",align:null},"una direcci\xf3n IP o un CIDR como ",(0,r.kt)("inlineCode",{parentName:"td"},"192.168.2.0/24")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf"},"ipmatch","_","model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv"},"ipmatch","_","policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta similar a un path como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"un patr\xf3n glob como ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin","_","operators","_","test.go#L426-L466"))))),(0,r.kt)("p",null,"Para las funciones de obtenci\xf3n de claves, generalmente toman tres par\xe1metros (excepto ",(0,r.kt)("inlineCode",{parentName:"p"},"keyGet"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern, string key_name)\n")),(0,r.kt)("p",null,"Devolver\xe1n el valor de la clave ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name")," si coincide con el patr\xf3n, y devolver\xe1n ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," si no hay coincidencia."),(0,r.kt)("p",null,"Por ejemplo, ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet2("/resource1/action", "/:res/action", "res")')," devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1"'),", y ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet3("/resource1_admin/action", "/{res}_admin/*", "res")')," devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1"'),".\nEn cuanto a ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyGet"),", que toma dos par\xe1metros, ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet("/resource1/action", "/*")')," devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1/action"'),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Funci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"url"),(0,r.kt)("th",{parentName:"tr",align:null},"patr\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"key","_","name"),(0,r.kt)("th",{parentName:"tr",align:null},"ejemplo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL o un patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/*")),(0,r.kt)("td",{parentName:"tr",align:null},"\\"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf"},"keyget","_","model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch","_","policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL o patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},":")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/prooj/:resource")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre de clave especificado en el patr\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf"},"keyget2","_","model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2","_","policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet3"),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL como ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/res3_admin/")),(0,r.kt)("td",{parentName:"tr",align:null},"una ruta de URL o patr\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," como ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/{resource}_admin/*")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre de clave especificado en el patr\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin_operators_test.go#L209-L247"},"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin","_","operators","_","test.go#L209-L247"))))),(0,r.kt)("p",null,"Vea los detalles de las funciones anteriores en: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"https://github.com/casbin/casbin/blob/master/util/builtin","_","operators","_","test.go")),(0,r.kt)("h2",{id:"c\xf3mo-agregar-una-funci\xf3n-personalizada"},"C\xf3mo agregar una funci\xf3n personalizada"),(0,r.kt)("p",null,"Primero, prepara tu funci\xf3n. Toma varios par\xe1metros y devuelve un bool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func KeyMatch(key1 string, key2 string) bool {\n    i := strings.Index(key2, "*")\n    if i == -1 {\n        return key1 == key2\n    }\n\n    if len(key1) > i {\n        return key1[:i] == key2[:i]\n    }\n    return key1 == key2[:i]\n}\n')),(0,r.kt)("p",null,"Luego, envu\xe9lvela con tipos ",(0,r.kt)("inlineCode",{parentName:"p"},"interface{}"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func KeyMatchFunc(args ...interface{}) (interface{}, error) {\n    name1 := args[0].(string)\n    name2 := args[1].(string)\n\n    return (bool)(KeyMatch(name1, name2)), nil\n}\n")),(0,r.kt)("p",null,"Finalmente, registra la funci\xf3n en el enforcer de Casbin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddFunction("my_func", KeyMatchFunc)\n')),(0,r.kt)("p",null,"Ahora, puedes usar la funci\xf3n en tu modelo CONF de esta manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act\n")))}d.isMDXComponent=!0}}]);