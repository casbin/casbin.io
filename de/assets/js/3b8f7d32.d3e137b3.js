"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4145],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={id:"frontend",title:"Frontend Usage",description:"Casbin.js ist ein Casbin-Addon, das die Verwaltung Ihrer Zugriffskontrolle in der Frontend-Anwendung erleichtert",keywords:["Casbin.js","react-authz","rbac-react","vue-authz","angular-authz"],authors:["hsluoyz"]},s=void 0,o={unversionedId:"frontend",id:"frontend",title:"Frontend Usage",description:"Casbin.js ist ein Casbin-Addon, das die Verwaltung Ihrer Zugriffskontrolle in der Frontend-Anwendung erleichtert",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/FrontendUsage.mdx",sourceDirName:".",slug:"/frontend",permalink:"/de/docs/frontend",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/FrontendUsage.mdx",tags:[],version:"current",frontMatter:{id:"frontend",title:"Frontend Usage",description:"Casbin.js ist ein Casbin-Addon, das die Verwaltung Ihrer Zugriffskontrolle in der Frontend-Anwendung erleichtert",keywords:["Casbin.js","react-authz","rbac-react","vue-authz","angular-authz"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Log & Error Handling",permalink:"/de/docs/log-error"},next:{title:"Editor",permalink:"/de/docs/category/editor"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Frontend-Middlewares",id:"frontend-middlewares",level:2},{value:"Schnellstart",id:"schnellstart",level:2},{value:"Berechtigungsobjekt",id:"berechtigungsobjekt",level:3},{value:"Erweiterte Nutzung",id:"erweiterte-nutzung",level:2},{value:"API-Liste",id:"api-liste",level:2},{value:"<code>setPermission(permission: string)</code>",id:"setpermissionpermission-string",level:3},{value:"<code>setUser(user: string)</code>",id:"setuseruser-string",level:3},{value:"<code>can(action: string, object: string)</code>",id:"canaction-string-object-string",level:3},{value:"<code>cannot(action: string, object: string)</code>",id:"cannotaction-string-object-string",level:3},{value:"<code>canAll(action: string, objects: Array&lt;object&gt;)</code>",id:"canallaction-string-objects-arrayobject",level:3},{value:"<code>canAny(action: string, objects: Array&lt;object&gt;)</code>",id:"cananyaction-string-objects-arrayobject",level:3},{value:"Warum Casbin.js",id:"warum-casbinjs",level:2}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js"},"Casbin.js")," ist ein Casbin-Addon, das die Verwaltung Ihrer Zugriffskontrolle in der Frontend-Anwendung erleichtert."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin.js\nnpm install casbin\n")),(0,a.kt)("p",null,"oder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin.js\n")),(0,a.kt)("h2",{id:"frontend-middlewares"},"Frontend-Middlewares"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,a.kt)("th",{parentName:"tr",align:null},"Typ"),(0,a.kt)("th",{parentName:"tr",align:null},"Autor"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/react-authz"},"react-authz")),(0,a.kt)("td",{parentName:"tr",align:null},"React"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"React-Wrapper f\xfcr Casbin.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-react"},"rbac-react")),(0,a.kt)("td",{parentName:"tr",align:null},"React"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/daobeng"},"@daobeng")),(0,a.kt)("td",{parentName:"tr",align:null},"Rollenbasierte Zugriffskontrolle in React mit HOCs, CASL und Casbin.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/vue-authz"},"vue-authz")),(0,a.kt)("td",{parentName:"tr",align:null},"Vue"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Vue-Wrapper f\xfcr Casbin.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/angular-authz"},"angular-authz")),(0,a.kt)("td",{parentName:"tr",align:null},"Angular"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Angular-Wrapper f\xfcr Casbin.js")))),(0,a.kt)("h2",{id:"schnellstart"},"Schnellstart"),(0,a.kt)("p",null,"Sie k\xf6nnen den ",(0,a.kt)("inlineCode",{parentName:"p"},"manual")," Modus in Ihrer Frontend-Anwendung verwenden und die Berechtigungen setzen, wann immer Sie m\xf6chten."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const casbinjs = require("casbin.js");\n// Set the user\'s permission:\n// He/She can read `data1` and `data2` objects and can write `data1` object\nconst permission = {\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n\n// Run casbin.js in manual mode, which requires you to set the permission manually.\nconst authorizer = new casbinjs.Authorizer("manual");\n')),(0,a.kt)("p",null,"Jetzt haben wir einen Autorisierer, ",(0,a.kt)("inlineCode",{parentName:"p"},"authorizer"),". Wir k\xf6nnen Berechtigungsregeln von ihm erhalten, indem wir die ",(0,a.kt)("inlineCode",{parentName:"p"},"authorizer.can()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"authorizer.cannot()")," APIs verwenden. Die R\xfcckgabewerte dieser 2 APIs sind JavaScript Promises (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"Details hier"),"), daher sollten wir die ",(0,a.kt)("inlineCode",{parentName:"p"},"then()")," Methode des R\xfcckgabewerts wie folgt verwenden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.can("write", "data1");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you can write data1");\n    } else {\n        console.log("you cannot write data1");\n    }\n});\n// output: you can write data1\n')),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"cannot()")," API wird auf die gleiche Weise verwendet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.cannot("read", "data2");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you cannot read data2");\n    } else {\n        console.log("you can read data2");\n    }\n});\n// output: you can read data2\n')),(0,a.kt)("p",null,"Im obigen Code bedeutet die ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," Variable in den Parametern, dass die Anfrage das Ergebnis erh\xe4lt, ohne einen Fehler auszul\xf6sen und bedeutet nicht, dass die Berechtigungsregel ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," ist. Die ",(0,a.kt)("inlineCode",{parentName:"p"},"failed")," Variable hat ebenfalls nichts mit den Berechtigungsregeln zu tun. Es macht nur Sinn, wenn im Prozess der Anfrage etwas schief geht."),(0,a.kt)("p",null,"Sie k\xf6nnen sich unser ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin-js/examples"},"React-Beispiel")," ansehen, um eine praktische Verwendung von Casbin.js zu sehen."),(0,a.kt)("h3",{id:"berechtigungsobjekt"},"Berechtigungsobjekt"),(0,a.kt)("p",null,"Casbin.js akzeptiert ein JSON-Objekt, um die entsprechende Berechtigung eines Besuchers zu manipulieren. Zum Beispiel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n')),(0,a.kt)("p",null,"Das oben gezeigte Berechtigungsobjekt zeigt, dass der Besucher die ",(0,a.kt)("inlineCode",{parentName:"p"},"data1")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"data2")," Objekte ",(0,a.kt)("inlineCode",{parentName:"p"},"lesen")," kann, w\xe4hrend sie nur die ",(0,a.kt)("inlineCode",{parentName:"p"},"data1")," Objekte ",(0,a.kt)("inlineCode",{parentName:"p"},"schreiben")," k\xf6nnen."),(0,a.kt)("h2",{id:"erweiterte-nutzung"},"Erweiterte Nutzung"),(0,a.kt)("p",null,"Casbin.js bietet eine perfekte L\xf6sung f\xfcr die Integration Ihres Frontend-Zugriffskontrollmanagements mit Ihrem Backend-Casbin-Service."),(0,a.kt)("p",null,"Verwenden Sie den ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," Modus und geben Sie Ihren Endpunkt bei der Initialisierung des Casbin.js ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorizer")," an, er wird automatisch die Berechtigung synchronisieren und den Frontend-Status manipulieren."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const casbinjs = require('casbin.js');\n\n// Set your backend Casbin service URL\nconst authorizer = new casbinjs.Authorizer(\n    'auto', // mode\n    {endpoint: 'http://your_endpoint/api/casbin'}\n);\n\n// Set your visitor.\n// Casbin.js will automatically sync the permission with your backend Casbin service.\nauthorizer.setUser(\"Tom\");\n\n// Evaluate the permission\nresult = authorizer.can(\"read\", \"data1\");\nresult.then((success, failed) => {\n    if (success) {\n        // Some frontend procedure ...\n    }\n});\n")),(0,a.kt)("p",null,"Entsprechend m\xfcssen Sie eine Schnittstelle (z.B. eine RestAPI) freigeben, um das Berechtigungsobjekt zu generieren und es an das Frontend zu \xfcbergeben. Rufen Sie in Ihrem API-Controller ",(0,a.kt)("inlineCode",{parentName:"p"},"CasbinJsGetUserPermission")," auf, um das Berechtigungsobjekt zu konstruieren. Hier ist ein Beispiel in Beego:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Ihr Endpunktserver sollte so etwas zur\xfcckgeben"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "other":"other",\n    "data": "What you get from `CasbinJsGetPermissionForUser`"\n}\n'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Router\nbeego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")\n\n// Controller\nfunc (c *APIController) GetFrontendPermission() {\n    // Get the visitor from the GET parameters. (The key is "casbin_subject")\n    visitor := c.Input().Get("casbin_subject")\n    // `e` is an initialized instance of Casbin Enforcer\n    c.Data["perm"] = casbin.CasbinJsGetPermissionForUser(e, visitor)\n    // Pass the data to the frontend.\n    c.ServeJSON()\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Derzeit wird die ",(0,a.kt)("inlineCode",{parentName:"p"},"CasbinJsGetPermissionForUser")," API nur in Go Casbin und Node-Casbin unterst\xfctzt. Wenn Sie m\xf6chten, dass diese API in anderen Sprachen unterst\xfctzt wird, stellen Sie bitte ein ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js/issues"},"Problem")," oder hinterlassen Sie einen Kommentar unten.")),(0,a.kt)("h2",{id:"api-liste"},"API-Liste"),(0,a.kt)("h3",{id:"setpermissionpermission-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"setPermission(permission: string)")),(0,a.kt)("p",null,"Setzen Sie das Berechtigungsobjekt. Immer im ",(0,a.kt)("inlineCode",{parentName:"p"},"manual")," Modus verwendet."),(0,a.kt)("h3",{id:"setuseruser-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"setUser(user: string)")),(0,a.kt)("p",null,"Setzen Sie die Besucheridentit\xe4t und aktualisieren Sie die Berechtigung. Immer im ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," Modus verwendet."),(0,a.kt)("h3",{id:"canaction-string-object-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"can(action: string, object: string)")),(0,a.kt)("p",null,"\xdcberpr\xfcfen Sie, ob der Benutzer ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," auf ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," ausf\xfchren kann."),(0,a.kt)("h3",{id:"cannotaction-string-object-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"cannot(action: string, object: string)")),(0,a.kt)("p",null,"\xdcberpr\xfcfen Sie, ob der Benutzer ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," auf ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," ",(0,a.kt)("strong",{parentName:"p"},"nicht")," ausf\xfchren kann."),(0,a.kt)("h3",{id:"canallaction-string-objects-arrayobject"},(0,a.kt)("inlineCode",{parentName:"h3"},"canAll(action: string, objects: Array<object>)")),(0,a.kt)("p",null,"\xdcberpr\xfcfen Sie, ob der Benutzer ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," auf ",(0,a.kt)("strong",{parentName:"p"},"allen")," Objekten in ",(0,a.kt)("inlineCode",{parentName:"p"},"objects")," ausf\xfchren kann."),(0,a.kt)("h3",{id:"cananyaction-string-objects-arrayobject"},(0,a.kt)("inlineCode",{parentName:"h3"},"canAny(action: string, objects: Array<object>)")),(0,a.kt)("p",null,"\xdcberpr\xfcfen Sie, ob der Benutzer ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," auf ",(0,a.kt)("strong",{parentName:"p"},"einem")," der ",(0,a.kt)("inlineCode",{parentName:"p"},"objects")," ausf\xfchren kann."),(0,a.kt)("h2",{id:"warum-casbinjs"},"Warum Casbin.js"),(0,a.kt)("p",null,"Die Leute fragen sich vielleicht, was der Unterschied zwischen Node-Casbin und Casbin.js ist. Mit einem Wort, Node-Casbin ist der Kern von Casbin, implementiert in der NodeJS-Umgebung, und wird normalerweise als Zugriffskontroll-Management-Toolkit an den Serverenden verwendet. Casbin.js ist eine Frontend-Bibliothek, die Ihnen hilft, Casbin zu verwenden, um Ihre Webseitenbenutzer auf der Client-Seite zu autorisieren."),(0,a.kt)("p",null,"Normalerweise ist es nicht angemessen, direkt einen Casbin-Dienst aufzubauen und die Autorisierungs-/Durchsetzungsaufgaben in einer Web-Frontend-Anwendung durchzuf\xfchren, aufgrund der folgenden Probleme:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Wenn jemand den Client einschaltet, wird der Durchsetzer initialisiert und er zieht alle Richtlinien aus den Backend-Persistent-Schichten. Eine hohe Nebenl\xe4ufigkeit k\xf6nnte hohen Druck auf die Datenbanken aus\xfcben und viel Netzwerkdurchsatz kosten."),(0,a.kt)("li",{parentName:"ol"},"Das Laden aller Richtlinien auf die Client-Seite k\xf6nnte Sicherheitsrisiken mit sich bringen."),(0,a.kt)("li",{parentName:"ol"},"Es ist schwierig, den Client und den Server zu trennen sowie eine agile Entwicklung zu erleichtern.")),(0,a.kt)("p",null,"Wir ben\xf6tigen ein Tool, das den Prozess der Verwendung von Casbin im Frontend erleichtert. Tats\xe4chlich ist der Kern von Casbin.js die Manipulation der Berechtigungen des aktuellen Benutzers auf der Client-Seite. Wie Sie erw\xe4hnt haben, f\xfchrt Casbin.js einen Abruf von einem bestimmten Endpunkt durch. Dieses Verfahren synchronisiert die Berechtigung des Benutzers mit dem Backend-Casbin-Dienst. Nachdem sie die Berechtigungsdaten haben, k\xf6nnen Entwickler die Casbin.js-Schnittstellen verwenden, um das Verhalten des Benutzers auf der Frontend-Seite zu verwalten."),(0,a.kt)("p",null,"Casbin.js vermeidet die beiden oben genannten Probleme: Der Casbin-Dienst wird nicht mehr wiederholt hochgezogen, und die Gr\xf6\xdfe der zwischen dem Client und dem Server \xfcbertragenen Nachrichten wird reduziert. Wir vermeiden auch, alle Richtlinien im Frontend zu speichern. Der Benutzer kann nur auf seine eigene Berechtigung zugreifen, hat aber keine Kenntnisse \xfcber das Zugriffskontrollmodell und die Berechtigungen anderer Benutzer. Au\xdferdem kann Casbin.js auch effizient den Client und den Server in der Autorisierungsverwaltung entkoppeln."))}c.isMDXComponent=!0}}]);