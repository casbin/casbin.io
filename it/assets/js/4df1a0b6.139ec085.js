"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9834],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,g=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC con Pattern",keywords:["RBAC with pattern","pattern matching"],authors:["hsluoyz"]},o=void 0,l={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC con Pattern",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/it/docs/rbac-with-pattern",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithPattern.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC con Pattern",keywords:["RBAC with pattern","pattern matching"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"RBAC",permalink:"/it/docs/rbac"},next:{title:"RBAC with Domains",permalink:"/it/docs/rbac-with-domains"}},p={},d=[{value:"Guida rapida",id:"guida-rapida",level:2},{value:"Utilizza la corrispondenza dei pattern in RBAC",id:"utilizza-la-corrispondenza-dei-pattern-in-rbac",level:2}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},s=c("Tabs"),m=c("TabItem"),u={toc:d};function g(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"guida-rapida"},"Guida rapida"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Utilizza il pattern in ",(0,i.kt)("inlineCode",{parentName:"p"},"g(_, _)"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Utilizza il pattern con dominio."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Utilizza tutti i pattern."),(0,i.kt)("p",{parentName:"li"},"Basta combinare l'uso di entrambe le API."))),(0,i.kt)("p",null,"Come mostrato sopra, dopo aver creato l'istanza di ",(0,i.kt)("inlineCode",{parentName:"p"},"enforcer"),", \xe8 necessario attivare la corrispondenza dei pattern tramite le API ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedDomainMatchingFunc"),", che determinano come avviene la corrispondenza del pattern."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Se utilizzi l'editor online, specifica la funzione di corrispondenza dei pattern nell'angolo in basso a sinistra.\n",(0,i.kt)("img",{alt:"suggerimenti-editor",src:t(9523).Z,width:"480",height:"272"}))),(0,i.kt)("h2",{id:"utilizza-la-corrispondenza-dei-pattern-in-rbac"},"Utilizza la corrispondenza dei pattern in RBAC"),(0,i.kt)("p",null,"A volte, desideri che determinati soggetti, oggetti o domini/tenant con un pattern specifico vengano automaticamente concessi a un ruolo. Le funzioni di corrispondenza dei pattern in RBAC possono aiutarti a farlo. Una funzione di corrispondenza dei pattern condivide gli stessi parametri e valore di ritorno della precedente ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"funzione matcher"),"."),(0,i.kt)("p",null,"La funzione di corrispondenza dei pattern supporta ciascun parametro di ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,i.kt)("p",null,"Sappiamo che normalmente RBAC \xe8 espresso come ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," in un matcher. Quindi possiamo utilizzare una politica come:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,i.kt)("p",null,"Cos\xec ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," pu\xf2 leggere tutti i libri, inclusi ",(0,i.kt)("inlineCode",{parentName:"p"},"libro 1")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"libro 2"),". Ma possono esserci migliaia di libri, ed \xe8 molto noioso aggiungere ciascun libro al ruolo (o gruppo) dei libri con una regola di politica ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,i.kt)("p",null,"Ma con le funzioni di corrispondenza dei modelli, puoi scrivere la politica con una sola riga:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"g, /book/:id, book_group\n")),(0,i.kt)("p",null,"Casbin far\xe0 automaticamente corrispondere ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/1")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/2")," al modello ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/:id")," per te. Devi solo registrare la funzione con l'enforcer in questo modo:"),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,i.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"Quando si utilizza una funzione di corrispondenza dei modelli nei domini/tenant, \xe8 necessario registrare la funzione con l'enforcer e il modello."),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g", "KeyMatch2", util.KeyMatch2)\n'))),(0,i.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"Se non capisci cosa significhi ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)"),", per favore leggi ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". In breve, ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," controller\xe0 se l'utente ",(0,i.kt)("inlineCode",{parentName:"p"},"r.sub")," ha un ruolo ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub")," nel dominio ",(0,i.kt)("inlineCode",{parentName:"p"},"r.dom"),". Quindi questo \xe8 come funziona il matcher. Puoi vedere l'esempio completo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"qui"),"."),(0,i.kt)("p",null,"Oltre alla sintassi di corrispondenza dei modelli sopra, possiamo anche utilizzare un modello di dominio puro."),(0,i.kt)("p",null,"Ad esempio, se vogliamo che ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," abbia accesso in diversi domini, ",(0,i.kt)("inlineCode",{parentName:"p"},"domain1")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"domain2"),", possiamo utilizzare il pattern di dominio puro:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,i.kt)("p",null,"In questo esempio, vogliamo che ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," possa leggere e scrivere ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in domain1 e domain2. La corrispondenza del pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," fa s\xec che ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," abbia accesso a due domini."),(0,i.kt)("p",null,"Utilizzando la corrispondenza di pattern, specialmente in scenari pi\xf9 complessi e che implicano molti domini o oggetti da considerare, possiamo implementare la ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition")," in modo pi\xf9 elegante ed efficace."))}g.isMDXComponent=!0},9523:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);