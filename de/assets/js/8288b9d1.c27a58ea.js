"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2851],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=r.createContext({}),d=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(g.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,m=p["".concat(g,".").concat(c)]||p[c]||s[c]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={id:"log-error",title:"Log & Error Handling",description:"Protokollierung und Fehlerbehandlung in Casbin",keywords:["log","error","error handling"],authors:["hsluoyz"]},l=void 0,o={unversionedId:"log-error",id:"log-error",title:"Log & Error Handling",description:"Protokollierung und Fehlerbehandlung in Casbin",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/LogError.mdx",sourceDirName:".",slug:"/log-error",permalink:"/de/docs/log-error",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/LogError.mdx",tags:[],version:"current",frontMatter:{id:"log-error",title:"Log & Error Handling",description:"Protokollierung und Fehlerbehandlung in Casbin",keywords:["log","error","error handling"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Casbin Service",permalink:"/de/docs/service"},next:{title:"Frontend Usage",permalink:"/de/docs/frontend"}},g={},d=[{value:"Protokollierung",id:"protokollierung",level:2},{value:"Verwenden Sie verschiedene Logger f\xfcr verschiedene Durchsetzer",id:"verwenden-sie-verschiedene-logger-f\xfcr-verschiedene-durchsetzer",level:3},{value:"Unterst\xfctzte Logger",id:"unterst\xfctzte-logger",level:4},{value:"Wie man einen Logger schreibt",id:"wie-man-einen-logger-schreibt",level:4},{value:"Fehlerbehandlung",id:"fehlerbehandlung",level:2},{value:"Aktivieren und Deaktivieren",id:"aktivieren-und-deaktivieren",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},s=u("Tabs"),p=u("TabItem"),c={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"protokollierung"},"Protokollierung"),(0,a.kt)("p",null,"Casbin verwendet standardm\xe4\xdfig das eingebaute ",(0,a.kt)("inlineCode",{parentName:"p"},"log"),", um Protokolle auf der Konsole auszugeben, wie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2017/07/15 19:43:56 [Request: alice, data1, read ---\x3e true]\n")),(0,a.kt)("p",null,"Die Protokollierung ist standardm\xe4\xdfig nicht aktiviert. Sie k\xf6nnen es \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableLog()")," oder den letzten Parameter von ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," umschalten."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Wir unterst\xfctzen bereits die Protokollierung des Modells, der Durchsetzungsanforderung, der Rolle und der Richtlinie in Golang. Sie k\xf6nnen Ihr eigenes Protokoll f\xfcr die Protokollierung von Casbin definieren.\nWenn Sie Python verwenden, nutzt pycasbin den standardm\xe4\xdfigen Python-Protokollierungsmechanismus. Das pycasbin-Paket ruft ",(0,a.kt)("inlineCode",{parentName:"p"},"logging.getLogger()")," auf, um den Logger zu setzen. Es ist keine spezielle Protokollierungskonfiguration erforderlich, au\xdfer der Initialisierung des Loggers in der \xfcbergeordneten Anwendung. Wenn in der \xfcbergeordneten Anwendung keine Protokollierung initialisiert wird, sehen Sie keine Protokollnachrichten von pycasbin. Gleichzeitig, wenn Sie das Protokoll in pycasbin aktivieren, wird es die ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/c33cabfa0ac65cd09cf812a65e71794d64cb5132/casbin/util/log.py#L6C1-L6C1"},"Standardprotokollkonfiguration")," verwenden. F\xfcr andere pycasbin-Erweiterungen k\xf6nnen Sie sich auf die ",(0,a.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.2/topics/logging/"},"Django-Protokollierungsdokumentation")," beziehen, wenn Sie ein Django-Benutzer sind. F\xfcr andere Python-Benutzer sollten Sie sich auf die ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.config.html"},"Python-Protokollierungsdokumentation")," beziehen, um den Logger zu konfigurieren.")),(0,a.kt)("h3",{id:"verwenden-sie-verschiedene-logger-f\xfcr-verschiedene-durchsetzer"},"Verwenden Sie verschiedene Logger f\xfcr verschiedene Durchsetzer"),(0,a.kt)("p",null,"Jeder Durchsetzer kann seinen eigenen Logger haben, um Informationen zu protokollieren, und er kann zur Laufzeit ge\xe4ndert werden."),(0,a.kt)("p",null,"Und Sie k\xf6nnen einen geeigneten Logger \xfcber den letzten Parameter von ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," verwenden. Wenn Sie auf diese Weise Ihren Durchsetzer initialisieren, m\xfcssen Sie den aktivierten Parameter nicht verwenden, da die Priorit\xe4t des aktivierten Feldes im Logger h\xf6her ist."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Set a default logger as enforcer e1's logger.\n// This operation can also be seen as changing the logger of e1 at runtime.\ne1.SetLogger(&Log.DefaultLogger{})\n\n// Set another logger as enforcer e2's logger.\ne2.SetLogger(&YouOwnLogger)\n\n// Set your logger when initializing enforcer e3.\ne3, _ := casbin.NewEnforcer(\"examples/rbac_model.conf\", a, logger)\n")),(0,a.kt)("h4",{id:"unterst\xfctzte-logger"},"Unterst\xfctzte Logger"),(0,a.kt)("p",null,"Wir bieten einige Logger an, um Ihnen bei der Protokollierung von Informationen zu helfen."),(0,a.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(p,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Logger"),(0,a.kt)("th",{parentName:"tr",align:null},"Autor"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/log/default_logger.go"},"Standard-Logger (eingebaut)")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Der Standard-Logger verwendet Golang-Log.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/zap-logger"},"Zap-Logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Verwendet ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/uber-go/zap"},"zap"),", bietet json-kodierten Log und Sie k\xf6nnen mehr mit Ihrem eigenen Zap-Logger anpassen."))))),(0,a.kt)(p,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Logger"),(0,a.kt)("th",{parentName:"tr",align:null},"Autor"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/psr3-bridge"},"psr3-bridge logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Bietet eine ",(0,a.kt)("a",{parentName:"td",href:"https://www.php-fig.org/psr/psr-3/"},"PSR-3")," konforme Br\xfccke.")))))),(0,a.kt)("h4",{id:"wie-man-einen-logger-schreibt"},"Wie man einen Logger schreibt"),(0,a.kt)("p",null,"Ihr Logger sollte das ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/log/logger.go#L20"},"Logger")," Interface implementieren."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Methode"),(0,a.kt)("th",{parentName:"tr",align:null},"Typ"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EnableLog()"),(0,a.kt)("td",{parentName:"tr",align:null},"obligatorisch"),(0,a.kt)("td",{parentName:"tr",align:null},"Steuern Sie, ob die Nachricht gedruckt werden soll.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsEnabled()"),(0,a.kt)("td",{parentName:"tr",align:null},"obligatorisch"),(0,a.kt)("td",{parentName:"tr",align:null},"Zeigen Sie den aktuellen aktivierten Status des Loggers an.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogModel()"),(0,a.kt)("td",{parentName:"tr",align:null},"obligatorisch"),(0,a.kt)("td",{parentName:"tr",align:null},"Protokollieren Sie Informationen, die sich auf das Modell beziehen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogEnforce()"),(0,a.kt)("td",{parentName:"tr",align:null},"obligatorisch"),(0,a.kt)("td",{parentName:"tr",align:null},"Protokollieren Sie Informationen, die sich auf die Durchsetzung beziehen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogRole()"),(0,a.kt)("td",{parentName:"tr",align:null},"obligatorisch"),(0,a.kt)("td",{parentName:"tr",align:null},"Protokollieren Sie Informationen, die sich auf die Rolle beziehen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogPolicy()"),(0,a.kt)("td",{parentName:"tr",align:null},"obligatorisch"),(0,a.kt)("td",{parentName:"tr",align:null},"Protokollieren Sie Informationen, die sich auf die Richtlinie beziehen.")))),(0,a.kt)("p",null,"Sie k\xf6nnen Ihren benutzerdefinierten ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," an ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.SetLogger()")," \xfcbergeben."),(0,a.kt)("p",null,"Hier ist ein Beispiel, wie man einen Logger f\xfcr Golang anpasst:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "fmt"\n    "log"\n    "strings"\n)\n\n// DefaultLogger is the implementation for a Logger using golang log.\ntype DefaultLogger struct {\n    enabled bool\n}\n\nfunc (l *DefaultLogger) EnableLog(enable bool) {\n    l.enabled = enable\n}\n\nfunc (l *DefaultLogger) IsEnabled() bool {\n    return l.enabled\n}\n\nfunc (l *DefaultLogger) LogModel(model [][]string) {\n    if !l.enabled {\n        return\n    }\n    var str strings.Builder\n    str.WriteString("Model: ")\n    for _, v := range model {\n        str.WriteString(fmt.Sprintf("%v\\n", v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogEnforce(matcher string, request []interface{}, result bool, explains [][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var reqStr strings.Builder\n    reqStr.WriteString("Request: ")\n    for i, rval := range request {\n        if i != len(request)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", rval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v", rval))\n        }\n    }\n    reqStr.WriteString(fmt.Sprintf(" ---\x3e %t\\n", result))\n\n    reqStr.WriteString("Hit Policy: ")\n    for i, pval := range explains {\n        if i != len(explains)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", pval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v \\n", pval))\n        }\n    }\n\n    log.Println(reqStr.String())\n}\n\nfunc (l *DefaultLogger) LogPolicy(policy map[string][][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var str strings.Builder\n    str.WriteString("Policy: ")\n    for k, v := range policy {\n        str.WriteString(fmt.Sprintf("%s : %v\\n", k, v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogRole(roles []string) {\n    if !l.enabled {\n        return\n    }\n\n    log.Println("Roles: ", roles)\n}\n')),(0,a.kt)("h2",{id:"fehlerbehandlung"},"Fehlerbehandlung"),(0,a.kt)("p",null,"Fehler oder Paniken k\xf6nnen auftreten, wenn Sie Casbin aus Gr\xfcnden wie folgenden verwenden:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ung\xfcltige Syntax in der Modell-Datei (.conf)."),(0,a.kt)("li",{parentName:"ol"},"Ung\xfcltige Syntax in der Richtliniendatei (.csv)."),(0,a.kt)("li",{parentName:"ol"},"Benutzerdefinierte Fehler von Speicheradaptern, z.B., MySQL kann keine Verbindung herstellen."),(0,a.kt)("li",{parentName:"ol"},"Casbins Fehler.")),(0,a.kt)("p",null,"Es gibt f\xfcnf Hauptfunktionen, auf die Sie bei Fehlern oder Paniken aufmerksam sein sollten:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Funktion"),(0,a.kt)("th",{parentName:"tr",align:null},"Verhalten bei Fehler"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#NewEnforcer"},"NewEnforcer()")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt einen Fehler zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel"},"LoadModel()")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt einen Fehler zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy"},"LoadPolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt einen Fehler zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy"},"SavePolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt einen Fehler zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce"},"Enforce()")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt einen Fehler zur\xfcck")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," ruft intern ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadModel()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadPolicy()")," auf. Sie m\xfcssen also die beiden letzteren nicht aufrufen, wenn Sie ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," verwenden.")),(0,a.kt)("h2",{id:"aktivieren-und-deaktivieren"},"Aktivieren und Deaktivieren"),(0,a.kt)("p",null,"Der Durchsetzer kann \xfcber die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableEnforce()")," deaktiviert werden. Wenn er deaktiviert ist, wird ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.Enforce()")," immer ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcckgeben. Andere Operationen wie das Hinzuf\xfcgen oder Entfernen von Richtlinien sind nicht betroffen. Hier ist ein Beispiel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n\n// Will return false.\n// By default, the enforcer is enabled.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Disable the enforcer at runtime.\ne.EnableEnforce(false)\n\n// Will return true for any request.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Enable the enforcer again.\ne.EnableEnforce(true)\n\n// Will return false.\ne.Enforce("non-authorized-user", "data1", "read")\n')))}m.isMDXComponent=!0}}]);