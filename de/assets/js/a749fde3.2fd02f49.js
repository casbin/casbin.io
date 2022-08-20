"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1936],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),s=r,k=m["".concat(d,".").concat(s)]||m[s]||u[s]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],p={id:"policy-storage",title:"Richtlinien-Speicher",description:"Policy Storage",keywords:["policy storage"]},d=void 0,o={unversionedId:"policy-storage",id:"policy-storage",title:"Richtlinien-Speicher",description:"Policy Storage",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/de/docs/policy-storage",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"Richtlinien-Speicher",description:"Policy Storage",keywords:["policy storage"]},sidebar:"docs",previous:{title:"Modellspeicher",permalink:"/de/docs/model-storage"},next:{title:"Richtlinien-Untermengenladen",permalink:"/de/docs/policy-subset-loading"}},c={},u=[{value:"Richtlinien aus .CSV-Datei laden",id:"richtlinien-aus-csv-datei-laden",level:2},{value:"Adapter-API",id:"adapter-api",level:2},{value:"Datenbankspeicherformat",id:"datenbankspeicherformat",level:2},{value:"Adapter-Details",id:"adapter-details",level:2}],m={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Casbin wird der Richtlinienspeicher als ",(0,i.kt)("a",{parentName:"p",href:"/docs/adapters"},"-Adapter")," implementiert."),(0,i.kt)("h2",{id:"richtlinien-aus-csv-datei-laden"},"Richtlinien aus .CSV-Datei laden"),(0,i.kt)("p",null,"Dies ist die h\xe4ufigste Art Casbin zu benutzen. Es ist einfach f\xfcr Anf\xe4nger zu verstehen und praktisch, wenn Sie das Casbin Team um Hilfe bitten."),(0,i.kt)("p",null,"Der Inhalt der ",(0,i.kt)("inlineCode",{parentName:"p"},".CSV")," Datei ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"examples/rbac_policy.csv"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Wenn Ihre Datei Kommas",(0,i.kt)("inlineCode",{parentName:"p"},",")," enth\xe4lt, sollten Sie sie in doppelte Anf\xfchrungszeichen einbinden, zum Beispiel:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'p, alice, "data1,data2", read --correct\np, alice, data1,data2, read --incorrect ("data1,data2" should be a total)\n')),(0,i.kt)("p",{parentName:"admonition"},"Wenn Ihre Datei Kommas",(0,i.kt)("inlineCode",{parentName:"p"},",")," und doppelte Anf\xfchrungszeichen",(0,i.kt)("inlineCode",{parentName:"p"},'"'),"enth\xe4lt, sollten Sie das Feld in doppelte Anf\xfchrungszeichen einf\xfcgen und alle eingebetteten doppelten Anf\xfchrungszeichen verdoppeln."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'p, alice, data, "r.act in (""get"", ""post"")" --correct\np, alice, Daten, "r.act in ("get", "post")" --incorrect (sollte "" verwenden, um "") zu escapen\n')),(0,i.kt)("p",{parentName:"admonition"},"\xc4hnliches Problem: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"casbin#886"))),(0,i.kt)("h2",{id:"adapter-api"},"Adapter-API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Methode"),(0,i.kt)("th",{parentName:"tr",align:null},"Typ"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,i.kt)("td",{parentName:"tr",align:null},"einfach"),(0,i.kt)("td",{parentName:"tr",align:null},"Lade alle Regeln aus dem Speicher")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SavePolicy()"),(0,i.kt)("td",{parentName:"tr",align:null},"einfach"),(0,i.kt)("td",{parentName:"tr",align:null},"Alle Richtlinien-Regeln im Speicher speichern")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Richtlinien-Regel zum Speicher hinzuf\xfcgen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Eine Richtlinien-Regel vom Speicher entfernen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FilteredPolicy() entfernen"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Regeln, die dem Filter entsprechen, vom Speicher entfernen")))),(0,i.kt)("h2",{id:"datenbankspeicherformat"},"Datenbankspeicherformat"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"deine Richtlinien-Datei")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, data2_admin, data2, lesen\np, data2_admin, data2, schreiben\ng, alice, admin\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"entsprechende Datenbankstruktur (wie MySQL)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"id"),(0,i.kt)("th",{parentName:"tr",align:null},"ptype"),(0,i.kt)("th",{parentName:"tr",align:null},"v0"),(0,i.kt)("th",{parentName:"tr",align:null},"v1"),(0,i.kt)("th",{parentName:"tr",align:null},"v2"),(0,i.kt)("th",{parentName:"tr",align:null},"v3"),(0,i.kt)("th",{parentName:"tr",align:null},"v4"),(0,i.kt)("th",{parentName:"tr",align:null},"v5"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"p"),(0,i.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,i.kt)("td",{parentName:"tr",align:null},"data2"),(0,i.kt)("td",{parentName:"tr",align:null},"gelesen"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"p"),(0,i.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,i.kt)("td",{parentName:"tr",align:null},"data2"),(0,i.kt)("td",{parentName:"tr",align:null},"schreiben"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"g"),(0,i.kt)("td",{parentName:"tr",align:null},"alice"),(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Die Bedeutung jeder Spalte")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id"),": Es existiert nur in der Datenbank als Prim\xe4rschl\xfcssel. Nicht als Teil der ",(0,i.kt)("inlineCode",{parentName:"p"},"Casbin-Richtlinie"),". Die Art und Weise, wie sie generiert wird, h\xe4ngt vom jeweiligen Adapter ab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ptype"),": Es entspricht ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"g2"),", etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"v0-v5"),": Die Spaltennamen haben keine spezifische Bedeutung, und entsprechen den Werten in der ",(0,i.kt)("inlineCode",{parentName:"p"},"Policy csv")," von links nach rechts. Die Anzahl der Spalten h\xe4ngt davon ab, wie viele Sie selbst definieren. Theoretisch kann es eine unendliche Anzahl von Spalten geben. In der Regel werden aber nur ",(0,i.kt)("strong",{parentName:"p"},"6")," Spalten in Adapter implementiert. Falls es f\xfcr Sie nicht ausreicht, schicken Sie bitte ein Problem in das entsprechende Adapter-Repository."))),(0,i.kt)("h2",{id:"adapter-details"},"Adapter-Details"),(0,i.kt)("p",null,"Weitere Details zur Verwendung von Adapterapi und Datenbanktabellenstruktur. Bitte gehen Sie zu:  ",(0,i.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}s.isMDXComponent=!0}}]);