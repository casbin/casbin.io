"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),p=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,m=u["".concat(g,".").concat(c)]||u[c]||d[c]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"log-error",title:"Log & Error Handling",description:"Registrazione e gestione degli errori in Casbin",keywords:["log","error","error handling"],authors:["hsluoyz"]},o=void 0,l={unversionedId:"log-error",id:"log-error",title:"Log & Error Handling",description:"Registrazione e gestione degli errori in Casbin",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/LogError.mdx",sourceDirName:".",slug:"/log-error",permalink:"/it/docs/log-error",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/LogError.mdx",tags:[],version:"current",frontMatter:{id:"log-error",title:"Log & Error Handling",description:"Registrazione e gestione degli errori in Casbin",keywords:["log","error","error handling"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Casbin Service",permalink:"/it/docs/service"},next:{title:"Frontend Usage",permalink:"/it/docs/frontend"}},g={},p=[{value:"Registrazione",id:"registrazione",level:2},{value:"Utilizza diversi logger per diversi enforcer",id:"utilizza-diversi-logger-per-diversi-enforcer",level:3},{value:"Logger supportati",id:"logger-supportati",level:4},{value:"Come scrivere un logger",id:"come-scrivere-un-logger",level:4},{value:"Gestione degli errori",id:"gestione-degli-errori",level:2},{value:"Abilitare e disabilitare",id:"abilitare-e-disabilitare",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=s("Tabs"),u=s("TabItem"),c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"registrazione"},"Registrazione"),(0,a.kt)("p",null,"Casbin utilizza il ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," incorporato per stampare i log sulla console per impostazione predefinita, come:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2017/07/15 19:43:56 [Request: alice, data1, read ---\x3e true]\n")),(0,a.kt)("p",null,"La registrazione non \xe8 abilitata per impostazione predefinita. Puoi attivarla o disattivarla tramite ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableLog()")," o l'ultimo parametro di ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Supportiamo gi\xe0 la registrazione del modello, della richiesta di applicazione, del ruolo e dei criteri in Golang. Puoi definire il tuo log personalizzato per registrare Casbin.\nSe stai utilizzando Python, pycasbin sfrutta il meccanismo di logging predefinito di Python. Il pacchetto pycasbin effettua una chiamata a ",(0,a.kt)("inlineCode",{parentName:"p"},"logging.getLogger()")," per impostare il logger. Non \xe8 necessaria alcuna configurazione speciale del logging oltre all'inizializzazione del logger nell'applicazione principale. Se non viene inizializzato alcun logging all'interno dell'applicazione principale, non vedrai alcun messaggio di log da pycasbin. Allo stesso tempo, quando abiliti il log in pycasbin, utilizzer\xe0 la ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/c33cabfa0ac65cd09cf812a65e71794d64cb5132/casbin/util/log.py#L6C1-L6C1"},"configurazione predefinita del log"),". Per altre estensioni di pycasbin, puoi fare riferimento alla ",(0,a.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.2/topics/logging/"},"documentazione sul logging di Django")," se sei un utente di Django. Per altri utenti Python, dovresti fare riferimento alla ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.config.html"},"documentazione sul logging di Python")," per configurare il logger.")),(0,a.kt)("h3",{id:"utilizza-diversi-logger-per-diversi-enforcer"},"Utilizza diversi logger per diversi enforcer"),(0,a.kt)("p",null,"Ogni enforcer pu\xf2 avere il proprio logger per registrare informazioni e pu\xf2 essere modificato a runtime."),(0,a.kt)("p",null,"E puoi utilizzare un logger appropriato tramite l'ultimo parametro di ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),". Se stai utilizzando questo modo per inizializzare il tuo enforcer, non \xe8 necessario utilizzare il parametro abilitato perch\xe9 la priorit\xe0 del campo abilitato nel logger \xe8 pi\xf9 alta."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Set a default logger as enforcer e1's logger.\n// This operation can also be seen as changing the logger of e1 at runtime.\ne1.SetLogger(&Log.DefaultLogger{})\n\n// Set another logger as enforcer e2's logger.\ne2.SetLogger(&YouOwnLogger)\n\n// Set your logger when initializing enforcer e3.\ne3, _ := casbin.NewEnforcer(\"examples/rbac_model.conf\", a, logger)\n")),(0,a.kt)("h4",{id:"logger-supportati"},"Logger supportati"),(0,a.kt)("p",null,"Forniamo alcuni logger per aiutarti a registrare le informazioni."),(0,a.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Logger"),(0,a.kt)("th",{parentName:"tr",align:null},"Autore"),(0,a.kt)("th",{parentName:"tr",align:null},"Descrizione"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/log/default_logger.go"},"Logger predefinito (built-in)")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Il logger predefinito utilizzando il log di golang.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/zap-logger"},"Zap logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Utilizzando ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/uber-go/zap"},"zap"),", fornisci log codificati in formato JSON e puoi personalizzare ulteriormente con il tuo zap-logger."))))),(0,a.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Logger"),(0,a.kt)("th",{parentName:"tr",align:null},"Autore"),(0,a.kt)("th",{parentName:"tr",align:null},"Descrizione"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/psr3-bridge"},"psr3-bridge logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Fornisce una bridge conforme a ",(0,a.kt)("a",{parentName:"td",href:"https://www.php-fig.org/psr/psr-3/"},"PSR-3"),".")))))),(0,a.kt)("h4",{id:"come-scrivere-un-logger"},"Come scrivere un logger"),(0,a.kt)("p",null,"Il tuo logger deve implementare l'interfaccia ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/log/logger.go#L20"},"Logger"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metodo"),(0,a.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,a.kt)("th",{parentName:"tr",align:null},"Descrizione"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EnableLog()"),(0,a.kt)("td",{parentName:"tr",align:null},"obbligatorio"),(0,a.kt)("td",{parentName:"tr",align:null},"Controlla se stampare il messaggio.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsEnabled()"),(0,a.kt)("td",{parentName:"tr",align:null},"obbligatorio"),(0,a.kt)("td",{parentName:"tr",align:null},"Mostra lo stato attuale di abilitazione del logger.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogModel()"),(0,a.kt)("td",{parentName:"tr",align:null},"obbligatorio"),(0,a.kt)("td",{parentName:"tr",align:null},"Registra informazioni relative al modello.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogEnforce()"),(0,a.kt)("td",{parentName:"tr",align:null},"obbligatorio"),(0,a.kt)("td",{parentName:"tr",align:null},"Registra informazioni relative all'applicazione.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogRole()"),(0,a.kt)("td",{parentName:"tr",align:null},"obbligatorio"),(0,a.kt)("td",{parentName:"tr",align:null},"Registra informazioni relative al ruolo.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogPolicy()"),(0,a.kt)("td",{parentName:"tr",align:null},"obbligatorio"),(0,a.kt)("td",{parentName:"tr",align:null},"Registra informazioni relative alla politica.")))),(0,a.kt)("p",null,"Puoi passare il tuo ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," personalizzato a ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.SetLogger()"),"."),(0,a.kt)("p",null,"Ecco un esempio di come personalizzare un logger per Golang:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "fmt"\n    "log"\n    "strings"\n)\n\n// DefaultLogger is the implementation for a Logger using golang log.\ntype DefaultLogger struct {\n    enabled bool\n}\n\nfunc (l *DefaultLogger) EnableLog(enable bool) {\n    l.enabled = enable\n}\n\nfunc (l *DefaultLogger) IsEnabled() bool {\n    return l.enabled\n}\n\nfunc (l *DefaultLogger) LogModel(model [][]string) {\n    if !l.enabled {\n        return\n    }\n    var str strings.Builder\n    str.WriteString("Model: ")\n    for _, v := range model {\n        str.WriteString(fmt.Sprintf("%v\\n", v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogEnforce(matcher string, request []interface{}, result bool, explains [][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var reqStr strings.Builder\n    reqStr.WriteString("Request: ")\n    for i, rval := range request {\n        if i != len(request)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", rval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v", rval))\n        }\n    }\n    reqStr.WriteString(fmt.Sprintf(" ---\x3e %t\\n", result))\n\n    reqStr.WriteString("Hit Policy: ")\n    for i, pval := range explains {\n        if i != len(explains)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", pval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v \\n", pval))\n        }\n    }\n\n    log.Println(reqStr.String())\n}\n\nfunc (l *DefaultLogger) LogPolicy(policy map[string][][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var str strings.Builder\n    str.WriteString("Policy: ")\n    for k, v := range policy {\n        str.WriteString(fmt.Sprintf("%s : %v\\n", k, v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogRole(roles []string) {\n    if !l.enabled {\n        return\n    }\n\n    log.Println("Roles: ", roles)\n}\n')),(0,a.kt)("h2",{id:"gestione-degli-errori"},"Gestione degli errori"),(0,a.kt)("p",null,"Possono verificarsi errori o panici quando si utilizza Casbin per motivi come:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sintassi non valida nel file del modello (.conf)."),(0,a.kt)("li",{parentName:"ol"},"Sintassi non valida nel file della politica (.csv)."),(0,a.kt)("li",{parentName:"ol"},"Errori personalizzati dai adattatori di storage, ad esempio, la connessione a MySQL non riesce."),(0,a.kt)("li",{parentName:"ol"},"Bug di Casbin.")),(0,a.kt)("p",null,"Ci sono cinque funzioni principali di cui potresti aver bisogno di essere a conoscenza per errori o panico:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Funzione"),(0,a.kt)("th",{parentName:"tr",align:null},"Comportamento in caso di errore"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#NewEnforcer"},"NewEnforcer()")),(0,a.kt)("td",{parentName:"tr",align:null},"Restituisce un errore")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel"},"LoadModel()")),(0,a.kt)("td",{parentName:"tr",align:null},"Restituisce un errore")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy"},"LoadPolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Restituisce un errore")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy"},"SavePolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Restituisce un errore")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce"},"Enforce()")),(0,a.kt)("td",{parentName:"tr",align:null},"Restituisce un errore")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," chiama internamente ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadModel()")," e ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadPolicy()"),". Quindi non \xe8 necessario chiamare questi ultimi due quando si utilizza ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),".")),(0,a.kt)("h2",{id:"abilitare-e-disabilitare"},"Abilitare e disabilitare"),(0,a.kt)("p",null,"L'enforcer pu\xf2 essere disabilitato tramite la funzione ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableEnforce()"),". Quando \xe8 disabilitato, ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.Enforce()")," restituir\xe0 sempre ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Altre operazioni come l'aggiunta o la rimozione di policy non sono influenzate. Ecco un esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n\n// Will return false.\n// By default, the enforcer is enabled.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Disable the enforcer at runtime.\ne.EnableEnforce(false)\n\n// Will return true for any request.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Enable the enforcer again.\ne.EnableEnforce(true)\n\n// Will return false.\ne.Enforce("non-authorized-user", "data1", "read")\n')))}m.isMDXComponent=!0}}]);