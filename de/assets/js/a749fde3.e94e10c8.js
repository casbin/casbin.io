"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={id:"policy-storage",title:"Policy Storage",description:"Richtlinienspeicher",keywords:["policy storage"],authors:["hsluoyz"]},l=void 0,p={unversionedId:"policy-storage",id:"policy-storage",title:"Policy Storage",description:"Richtlinienspeicher",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/de/docs/policy-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PolicyStorage.mdx",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"Policy Storage",description:"Richtlinienspeicher",keywords:["policy storage"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Model Storage",permalink:"/de/docs/model-storage"},next:{title:"Policy Subset Loading",permalink:"/de/docs/policy-subset-loading"}},d={},o=[{value:"Laden der Richtlinie aus einer .CSV-Datei",id:"laden-der-richtlinie-aus-einer-csv-datei",level:2},{value:"Adapter API",id:"adapter-api",level:2},{value:"Datenbankspeicherformat",id:"datenbankspeicherformat",level:2},{value:"Adapter Details",id:"adapter-details",level:2}],c={toc:o};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Casbin wird der Richtlinienspeicher als ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"Adapter")," implementiert."),(0,r.kt)("h2",{id:"laden-der-richtlinie-aus-einer-csv-datei"},"Laden der Richtlinie aus einer .CSV-Datei"),(0,r.kt)("p",null,"Dies ist die gebr\xe4uchlichste Art, Casbin zu verwenden. Es ist leicht zu verstehen f\xfcr Anf\xe4nger und praktisch zum Teilen, wenn Sie das Casbin-Team um Hilfe bitten."),(0,r.kt)("p",null,"Der Inhalt der ",(0,r.kt)("inlineCode",{parentName:"p"},".CSV"),"-Datei ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"examples/rbac","_","policy.csv")," ist wie folgt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Wenn Ihre Datei Kommas enth\xe4lt, sollten Sie diese in doppelte Anf\xfchrungszeichen setzen. Zum Beispiel:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, "data1,data2", read    --correct\np, alice, data1,data2, read        --incorrect (the whole phrase "data1,data2" should be wrapped in double quotes)\n')),(0,r.kt)("p",{parentName:"admonition"},"Wenn Ihre Datei Kommas und doppelte Anf\xfchrungszeichen enth\xe4lt, sollten Sie das Feld in doppelte Anf\xfchrungszeichen setzen und alle eingebetteten doppelten Anf\xfchrungszeichen verdoppeln."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'p, alice, data, "r.act in (""get"", ""post"")"        --correct\np, alice, data, "r.act in ("get", "post")"            --incorrect (you should use "" to escape "")\n')),(0,r.kt)("p",{parentName:"admonition"},"Verwandtes Problem: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"casbin#886"))),(0,r.kt)("h2",{id:"adapter-api"},"Adapter API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methode"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"Grundlegend"),(0,r.kt)("td",{parentName:"tr",align:null},"Laden Sie alle Richtlinienregeln aus dem Speicher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SavePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"Grundlegend"),(0,r.kt)("td",{parentName:"tr",align:null},"Speichern Sie alle Richtlinienregeln im Speicher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xfcgen Sie eine Richtlinienregel zum Speicher hinzu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Entfernen Sie eine Richtlinienregel aus dem Speicher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveFilteredPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Entfernen Sie Richtlinienregeln, die dem Filter entsprechen, aus dem Speicher")))),(0,r.kt)("h2",{id:"datenbankspeicherformat"},"Datenbankspeicherformat"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ihre Richtliniendatei")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Entsprechende Datenbankstruktur (wie MySQL)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"ptype"),(0,r.kt)("th",{parentName:"tr",align:null},"v0"),(0,r.kt)("th",{parentName:"tr",align:null},"v1"),(0,r.kt)("th",{parentName:"tr",align:null},"v2"),(0,r.kt)("th",{parentName:"tr",align:null},"v3"),(0,r.kt)("th",{parentName:"tr",align:null},"v4"),(0,r.kt)("th",{parentName:"tr",align:null},"v5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2","_","admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"lesen"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"data2","_","admin"),(0,r.kt)("td",{parentName:"tr",align:null},"data2"),(0,r.kt)("td",{parentName:"tr",align:null},"schreiben"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bedeutung jeder Spalte")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id"),": Der Prim\xe4rschl\xfcssel in der Datenbank. Es existiert nicht als Teil der ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin policy"),". Die Art und Weise, wie es generiert wird, h\xe4ngt vom spezifischen Adapter ab.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ptype"),": Es entspricht ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g2"),", usw.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v0-v5"),": Die Spaltennamen haben keine spezifische Bedeutung und entsprechen den Werten in der ",(0,r.kt)("inlineCode",{parentName:"p"},"policy csv")," von links nach rechts. Die Anzahl der Spalten h\xe4ngt davon ab, wie viele Sie selbst definieren. Theoretisch kann es eine unendliche Anzahl von Spalten geben, aber in der Regel werden im Adapter nur ",(0,r.kt)("strong",{parentName:"p"},"6")," Spalten implementiert. Wenn das f\xfcr Sie nicht ausreicht, reichen Sie bitte ein Problem im entsprechenden Adapter-Repository ein."))),(0,r.kt)("h2",{id:"adapter-details"},"Adapter Details"),(0,r.kt)("p",null,"F\xfcr weitere Details zur Verwendung der Adapter-API und zum Design der Datenbanktabellenstruktur besuchen Sie bitte: ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}s.isMDXComponent=!0}}]);