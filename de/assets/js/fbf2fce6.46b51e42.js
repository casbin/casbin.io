"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3615,7298,9462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(r),u=i,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7860:(e,t,r)=>{r.d(t,{B:()=>o,Z:()=>s});var n=r(7462),i=r(7294),a=r(5576);const o=e=>e.startsWith("http://")||e.startsWith("https://"),c=e=>{let{children:t,href:r,...a}=e;return o(r)?i.createElement("a",(0,n.Z)({href:r,target:"_blank",rel:"noopener noreferrer"},a),t):i.createElement("a",(0,n.Z)({href:r},a),t)},s=e=>{let{children:t}=e;return i.createElement(a.ZP,{options:{overrides:{a:{component:c}}}},t)}},6555:(e,t,r)=>{r.d(t,{P:()=>n});const n=[{title:"[Redis Watcher](https://github.com/Sbou/Casbin.NET-Redis-Watcher)",type:"KV store",author:"[@Sbou](https://github.com/Sbou)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"}].map((e=>({...e,tags:["dotNET","Watcher"]})))},2191:(e,t,r)=>{r.d(t,{a:()=>n});const n=[{title:"[PostgreSQL WatcherEx](https://github.com/IguteChung/casbin-psql-watcher)",type:"Database",author:"[@IguteChung](https://github.com/IguteChung)",description:"WatcherEx for [PostgreSQL](https://www.postgresql.org/)",image:"/img/ecosystem/postgreSQL.png"},{title:"[Redis WatcherEx](https://github.com/casbin/redis-watcher)",type:"KV store",author:"Casbin",description:"WatcherEx for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Redis Watcher](https://github.com/billcobbler/casbin-redis-watcher)",type:"KV store",author:"[@billcobbler](https://github.com/billcobbler)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Etcd Watcher](https://github.com/casbin/etcd-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[TiKV Watcher](https://github.com/casbin/tikv-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [TiKV](https://github.com/tikv/tikv)",image:"/img/ecosystem/tikv.png"},{title:"[Kafka Watcher](https://github.com/wgarunap/casbin-kafka-watcher)",type:"Messaging system",author:"[@wgarunap](https://github.com/wgarunap)",description:"Watcher for [Apache Kafka](https://kafka.apache.org/)",image:"/img/ecosystem/kafka.png"},{title:"[NATS Watcher](https://github.com/Soluto/casbin-nats-watcher)",type:"Messaging system",author:"[Soluto](https://github.com/Soluto)",description:"Watcher for [NATS](https://nats.io/)"},{title:"[ZooKeeper Watcher](https://github.com/grepsr/casbin-zk-watcher)",type:"Messaging system",author:"[Grepsr](https://github.com/grepsr)",description:"Watcher for [Apache ZooKeeper](https://zookeeper.apache.org/)",image:"/img/ecosystem/zookeeper.png"},{title:"[NATS, RabbitMQ, GCP Pub/Sub, AWS SNS & SQS, Kafka, InMemory](https://github.com/rusenask/casbin-go-cloud-watcher)",type:"Messaging System",author:"[@rusenask](https://github.com/rusenask/)",description:"Watcher based on [Go Cloud Dev Kit](https://gocloud.dev/) that works with leading cloud providers and self-hosted infrastructure"},{title:"[NATS, RabbitMQ, GCP Pub/Sub, AWS SNS & SQS, Kafka, InMemory](https://github.com/bartventer/casbin-go-cloud-watcher)",type:"Messaging System",author:"[@bartventer](https://github.com/bartventer/)",description:"WatcherEx based on [Go Cloud Dev Kit](https://gocloud.dev/) that works with leading cloud providers and self-hosted infrastructure"},{title:"[RocketMQ Watcher](https://github.com/fmyxyz/casbin-rocketmq-watcher)",type:"Messaging system",author:"[@fmyxyz](https://github.com/fmyxyz)",description:"Watcher for [Apache RocketMQ](https://rocketmq.apache.org/)",image:"/img/ecosystem/rocketMQ.png"}].map((e=>({...e,tags:["Go","Watcher"]})))},1798:(e,t,r)=>{r.d(t,{l:()=>n});const n=[{title:"[Etcd Adapter](https://github.com/mapleafgo/jcasbin-extra)",type:"KV store",author:"[@mapleafgo](https://github.com/mapleafgo)",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[Redis Watcher](https://github.com/jcasbin/redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Lettuce-Based Redis Watcher](https://github.com/jcasbin/lettuce-redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/) based on [Lettuce](https://lettuce.io/))",image:"/img/ecosystem/lettuce.png"},{title:"[Kafka Watcher](https://github.com/jcasbin/kafka-watcher)",type:"Messaging system",author:"Casbin",description:"Watcher for [Apache Kafka](https://kafka.apache.org/)",image:"/img/ecosystem/kafka.png"}].map((e=>({...e,tags:["Java","Watcher"]})))},6304:(e,t,r)=>{r.d(t,{F:()=>n});const n=[{title:"[Etcd Watcher](https://github.com/node-casbin/etcd-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[Redis Watcher](https://github.com/node-casbin/redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Pub/Sub Watcher](https://github.com/node-casbin/pubsub-watcher)",type:"Messaging system",author:"Casbin",description:"Watcher for [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/docs)",image:"/img/ecosystem/pubsub.png"},{title:"[MongoDB Change Streams Watcher](https://github.com/node-casbin/mongo-changestream-watcher)",type:"Database",author:"Casbin",description:"Watcher for [MongoDB Change Streams](https://www.mongodb.com/docs/manual/changeStreams/)",image:"/img/ecosystem/monogoDB.png"},{title:"[Postgres Watcher](https://github.com/mcollina/casbin-pg-watcher)",type:"Database",author:"[@mcollina](https://github.com/mcollina)",description:"Watcher for [PostgreSQL](https://www.postgresql.org/)",image:"/img/ecosystem/postgreSQL.png"}].map((e=>({...e,tags:["NodeJS","Watcher"]})))},813:(e,t,r)=>{r.d(t,{r:()=>n});const n=[{title:"[Redis Watcher](https://github.com/php-casbin/webman-permission)",type:"KV store",author:"[@Tinywan](https://github.com/Tinywan)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"}].map((e=>({...e,tags:["PHP","Watcher"]})))},2642:(e,t,r)=>{r.d(t,{w:()=>n});const n=[{title:"[Etcd Watcher](https://github.com/pycasbin/etcd-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[Redis Watcher](https://github.com/pycasbin/redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Redis Watcher](https://github.com/ScienceLogic/flask-casbin-redis-watcher)",type:"KV store",author:"[ScienceLogic](https://github.com/ScienceLogic)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Redis Async Watcher](https://github.com/kevinkelin/casbin_async_redis_watcher)",type:"KV store",author:"[@kevinkelin](https://github.com/kevinkelin)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[PostgreSQL Watcher](https://github.com/pycasbin/postgresql-watcher)",type:"Database",author:"Casbin",description:"Watcher for [PostgreSQL](https://www.postgresql.org/)",image:"/img/ecosystem/redis.png"},{title:"[RabbitMQ Watcher](https://github.com/pycasbin/rabbitmq-watcher)",type:"Messaging system",author:"Casbin",description:"Watcher for [RabbitMQ](https://www.rabbitmq.com/)",image:"/img/ecosystem/rabbitMQ.png"}].map((e=>({...e,tags:["Python","Watcher"]})))},837:(e,t,r)=>{r.d(t,{W:()=>n});const n=[{title:"[Redis Watcher](https://github.com/CasbinRuby/casbin-ruby-redis-watcher)",type:"KV store",author:"[CasbinRuby](https://github.com/CasbinRuby)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[RabbitMQ Watcher](https://github.com/CasbinRuby/casbin-ruby-rabbitmq-watcher)",type:"Messaging system",author:"[CasbinRuby](https://github.com/CasbinRuby)",description:"Watcher for [RabbitMQ](https://www.rabbitmq.com/)",image:"/img/ecosystem/rabbitMQ.png"}].map((e=>({...e,tags:["Ruby","Watcher"]})))},3228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>E,frontMatter:()=>g,metadata:()=>y,toc:()=>k});var n=r(7462),i=r(7294),a=r(3905),o=r(6555),c=r(2191),s=r(1798),l=r(7860);function d(e){let{data:t}=e,r="| Watcher | Type | Author  | Description |\n|---------|------|--------|-------------|\n";return t.forEach((e=>{r+=`| ${e.title} | ${e.type} | ${e.author} | ${e.description} |\n`})),i.createElement(l.Z,null,r)}var p=r(6304),h=r(813),u=r(2642),m=r(837);const g={id:"watchers",title:"Watchers",description:"Aufrechterhaltung der Konsistenz zwischen mehreren Casbin Enforcer-Instanzen",keywords:["watcher","multiple Casbin enforcer","WatcherEx"],authors:["hsluoyz"]},f=void 0,y={unversionedId:"watchers",id:"watchers",title:"Watchers",description:"Aufrechterhaltung der Konsistenz zwischen mehreren Casbin Enforcer-Instanzen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Watchers.mdx",sourceDirName:".",slug:"/watchers",permalink:"/de/docs/watchers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Watchers.mdx",tags:[],version:"current",frontMatter:{id:"watchers",title:"Watchers",description:"Aufrechterhaltung der Konsistenz zwischen mehreren Casbin Enforcer-Instanzen",keywords:["watcher","multiple Casbin enforcer","WatcherEx"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Adapters",permalink:"/de/docs/adapters"},next:{title:"Dispatchers",permalink:"/de/docs/dispatchers"}},b={},k=[{value:"WatcherEx",id:"watcherex",level:2}],w=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},v=w("Tabs"),W=w("TabItem"),x={toc:k};function E(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},x,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wir unterst\xfctzen die Verwendung von verteilten Nachrichtensystemen wie ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreos/etcd"},"etcd")," zur Aufrechterhaltung der Konsistenz zwischen mehreren Casbin Enforcer-Instanzen. Dies erm\xf6glicht unseren Benutzern, gleichzeitig mehrere Casbin Enforcer zu verwenden, um eine gro\xdfe Anzahl von Berechtigungspr\xfcfungsanfragen zu bearbeiten."),(0,a.kt)("p",null,"\xc4hnlich wie bei den Policy-Speicheradaptern, beinhaltet die Hauptbibliothek keinen Watcher-Code. Jede Unterst\xfctzung f\xfcr ein neues Nachrichtensystem sollte als Watcher implementiert werden. Eine vollst\xe4ndige Liste der Casbin Watcher finden Sie unten. Wir begr\xfc\xdfen Beitr\xe4ge von Dritten f\xfcr einen neuen Watcher, bitte informieren Sie uns und wir werden ihn zu dieser Liste hinzuf\xfcgen:"),(0,a.kt)(v,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(W,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)(d,{data:c.a,mdxType:"WatcherMDTable"})),(0,a.kt)(W,{value:"Java",label:"Java",mdxType:"TabItem"},(0,a.kt)(d,{data:s.l,mdxType:"WatcherMDTable"})),(0,a.kt)(W,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,a.kt)(d,{data:p.F,mdxType:"WatcherMDTable"})),(0,a.kt)(W,{value:"Python",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{data:u.w,mdxType:"WatcherMDTable"})),(0,a.kt)(W,{value:".NET",label:".NET",mdxType:"TabItem"},(0,a.kt)(d,{data:o.P,mdxType:"WatcherMDTable"})),(0,a.kt)(W,{value:"Ruby",label:"Ruby",mdxType:"TabItem"},(0,a.kt)(d,{data:m.W,mdxType:"WatcherMDTable"})),(0,a.kt)(W,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)(d,{data:h.r,mdxType:"WatcherMDTable"}))),(0,a.kt)("h2",{id:"watcherex"},"WatcherEx"),(0,a.kt)("p",null,"Um die inkrementelle Synchronisation zwischen mehreren Instanzen zu unterst\xfctzen, bieten wir die ",(0,a.kt)("inlineCode",{parentName:"p"},"WatcherEx")," Schnittstelle an. Wir hoffen, dass es andere Instanzen benachrichtigen kann, wenn sich die Richtlinie \xe4ndert, aber derzeit gibt es keine Implementierung von ",(0,a.kt)("inlineCode",{parentName:"p"},"WatcherEx"),". Wir empfehlen, dass Sie Dispatcher verwenden, um dies zu erreichen."),(0,a.kt)("p",null,"Im Vergleich zur ",(0,a.kt)("inlineCode",{parentName:"p"},"Watcher")," Schnittstelle kann ",(0,a.kt)("inlineCode",{parentName:"p"},"WatcherEx")," unterscheiden, welche Art von Update-Aktion empfangen wird, z.B. ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPolicy")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"RemovePolicy"),"."),(0,a.kt)("p",null,"WatcherEx Apis:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"API"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback(func(string)) error"),(0,a.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback setzt die Callback-Funktion, die der Watcher aufrufen wird, wenn die Richtlinie in der DB von anderen Instanzen ge\xe4ndert wurde. Ein klassischer Callback ist Enforcer.LoadPolicy().")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Update() error"),(0,a.kt)("td",{parentName:"tr",align:null},"Update ruft den Update-Callback anderer Instanzen auf, um ihre Richtlinie zu synchronisieren. Es wird normalerweise aufgerufen, nachdem die Richtlinie in der DB ge\xe4ndert wurde, wie Enforcer.SavePolicy(), Enforcer.AddPolicy(), Enforcer.RemovePolicy(), usw.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Close()"),(0,a.kt)("td",{parentName:"tr",align:null},"Close stoppt und gibt den Watcher frei, die Callback-Funktion wird nicht mehr aufgerufen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy(sec, ptype string, params ...string) error"),(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy ruft den Update-Callback anderer Instanzen auf, um ihre Richtlinie zu synchronisieren. Es wird aufgerufen, nachdem eine Richtlinie \xfcber Enforcer.AddPolicy(), Enforcer.AddNamedPolicy(), Enforcer.AddGroupingPolicy() und Enforcer.AddNamedGroupingPolicy() hinzugef\xfcgt wurde.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicy(sec, ptype string, params ...string) error"),(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicy ruft den Update-Callback anderer Instanzen auf, um ihre Richtlinie zu synchronisieren. Es wird aufgerufen, nachdem eine Richtlinie durch Enforcer.RemovePolicy(), Enforcer.RemoveNamedPolicy(), Enforcer.RemoveGroupingPolicy() und Enforcer.RemoveNamedGroupingPolicy() entfernt wurde.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy(sec, ptype string, fieldIndex int, fieldValues ...string) error"),(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy ruft den Update-Callback anderer Instanzen auf, um ihre Richtlinie zu synchronisieren. Es wird aufgerufen nach Enforcer.RemoveFilteredPolicy(), Enforcer.RemoveFilteredNamedPolicy(), Enforcer.RemoveFilteredGroupingPolicy() und Enforcer.RemoveFilteredNamedGroupingPolicy().")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy(model model.Model) Fehler"),(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy ruft die Update-R\xfcckruffunktion anderer Instanzen auf, um ihre Richtlinie zu synchronisieren. Es wird aufgerufen nach Enforcer.SavePolicy()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies(sec string, ptype string, rules ...[]string) Fehler"),(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies ruft die Update-R\xfcckruffunktion anderer Instanzen auf, um ihre Richtlinie zu synchronisieren. Es wird aufgerufen nach Enforcer.AddPolicies(), Enforcer.AddNamedPolicies(), Enforcer.AddGroupingPolicies() und Enforcer.AddNamedGroupingPolicies().")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies(sec string, ptype string, rules ...[]string) Fehler"),(0,a.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies ruft die Update-R\xfcckruffunktion anderer Instanzen auf, um ihre Richtlinie zu synchronisieren. Es wird aufgerufen nach Enforcer.RemovePolicies(), Enforcer.RemoveNamedPolicies(), Enforcer.RemoveGroupingPolicies() und Enforcer.RemoveNamedGroupingPolicies().")))))}E.isMDXComponent=!0},5576:(e,t,r)=>{r.d(t,{ZP:()=>Xe});var n=r(7294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const a=["children","options"];var o,c,s;(s=o||(o={})).blockQuote="0",s.breakLine="1",s.breakThematic="2",s.codeBlock="3",s.codeFenced="4",s.codeInline="5",s.footnote="6",s.footnoteReference="7",s.gfmTask="8",s.heading="9",s.headingSetext="10",s.htmlBlock="11",s.htmlComment="12",s.htmlSelfClosing="13",s.image="14",s.link="15",s.linkAngleBraceStyleDetector="16",s.linkBareUrlDetector="17",s.linkMailtoDetector="18",s.newlineCoalescer="19",s.orderedList="20",s.paragraph="21",s.ref="22",s.refImage="23",s.refLink="24",s.table="25",s.tableSeparator="26",s.text="27",s.textBolded="28",s.textEmphasized="29",s.textEscaped="30",s.textMarked="31",s.textStrikethroughed="32",s.unorderedList="33",function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(c||(c={}));const l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},p=["style","script"],h=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,u=/mailto:/i,m=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,f=/^ *> ?/gm,y=/^ {2,}\n/,b=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,w=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,W=/^(?:\n *)*\n/,x=/\r\n?/g,E=/^\[\^([^\]]+)](:.*)\n/,P=/^\[\^([^\]]+)]/,R=/\f/g,C=/^\s*?\[(x|\s)\]/,S=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,N=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,T=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,z=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,A=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,M=/^<!--[\s\S]*?(?:-->)/,I=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,O=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,D=/^\{.*\}$/,U=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,K=/^<([^ >]+@[^ >]+)>/,F=/^<([^ >]+:\/[^ >]+)>/,L=/-([a-z])?/gi,j=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,$=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,V=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Q=/(\[|\])/g,B=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,_=/^ *\| */,q=/(^ *\||\| *$)/g,H=/ *$/,X=/^ *:-+: *$/,J=/^ *:-+ *$/,Y=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,te=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,re=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,ne=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ie=/^\\([^0-9A-Za-z\s])/,ae=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/^\n+/,ce=/^([ \t]*)/,se=/\\([^\\])/g,le=/ *\n+$/,de=/(?:^|\n)( *)$/,pe="(?:\\d+\\.)",he="(?:[*+-])";function ue(e){return"( *)("+(1===e?pe:he)+") +"}const me=ue(1),ge=ue(2);function fe(e){return new RegExp("^"+(1===e?me:ge))}const ye=fe(1),be=fe(2);function ke(e){return new RegExp("^"+(1===e?me:ge)+"[^\\n]*(?:\\n(?!\\1"+(1===e?pe:he)+" )[^\\n]*)*(\\n|$)","gm")}const we=ke(1),ve=ke(2);function We(e){const t=1===e?pe:he;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const xe=We(1),Ee=We(2);function Pe(e,t){const r=1===t,n=r?xe:Ee,i=r?we:ve,a=r?ye:be;return{match(e,t,r){const i=de.exec(r);return i&&(t.list||!t.inline&&!t.simple)?n.exec(e=i[1]+e):null},order:1,parse(e,t,n){const o=r?+e[2]:void 0,c=e[0].replace(m,"\n").match(i);let s=!1;return{items:c.map((function(e,r){const i=a.exec(e)[0].length,o=new RegExp("^ {1,"+i+"}","gm"),l=e.replace(o,"").replace(a,""),d=r===c.length-1,p=-1!==l.indexOf("\n\n")||d&&s;s=p;const h=n.inline,u=n.list;let m;n.list=!0,p?(n.inline=!1,m=l.replace(le,"\n\n")):(n.inline=!0,m=l.replace(le,""));const g=t(m,n);return n.inline=h,n.list=u,g})),ordered:r,start:o}},render:(t,r,n)=>e(t.ordered?"ol":"ul",{key:n.key,start:"20"===t.type?t.start:void 0},t.items.map((function(t,i){return e("li",{key:i},r(t,n))})))}}const Re=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Ce=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Se=[g,k,w,S,T,N,M,j,we,xe,ve,Ee],Ne=[...Se,/^[^\n]+(?:  \n|\n{2,})/,z,O];function Te(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ze(e){return Y.test(e)?"right":X.test(e)?"center":J.test(e)?"left":null}function Ae(e,t,r){const n=r.inTable;r.inTable=!0;const i=t(e.trim(),r);r.inTable=n;let a=[[]];return i.forEach((function(e,t){"26"===e.type?0!==t&&t!==i.length-1&&a.push([]):("27"!==e.type||null!=i[t+1]&&"26"!==i[t+1].type||(e.text=e.text.replace(H,"")),a[a.length-1].push(e))})),a}function Me(e,t,r){r.inline=!0;const n=Ae(e[1],t,r),i=e[2].replace(q,"").split("|").map(ze),a=function(e,t,r){return e.trim().split("\n").map((function(e){return Ae(e,t,r)}))}(e[3],t,r);return r.inline=!1,{align:i,cells:a,header:n,type:"25"}}function Ie(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Oe(e){return function(t,r){return r.inline?e.exec(t):null}}function De(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function Ue(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function Ke(e){return function(t){return e.exec(t)}}function Fe(e,t,r){if(t.inline||t.simple)return null;if(r&&!r.endsWith("\n"))return null;let n="";e.split("\n").every((e=>!Se.some((t=>t.test(e)))&&(n+=e+"\n",e.trim())));const i=n.trimEnd();return""==i?null:[n,i]}function Le(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function je(e){return e.replace(se,"$1")}function $e(e,t,r){const n=r.inline||!1,i=r.simple||!1;r.inline=!0,r.simple=!0;const a=e(t,r);return r.inline=n,r.simple=i,a}function Ge(e,t,r){const n=r.inline||!1,i=r.simple||!1;r.inline=!1,r.simple=!0;const a=e(t,r);return r.inline=n,r.simple=i,a}function Ve(e,t,r){return r.inline=!1,e(t,r)}const Qe=(e,t,r)=>({children:$e(t,e[1],r)});function Be(){return{}}function Ze(){return null}function _e(...e){return e.filter(Boolean).join(" ")}function qe(e,t,r){let n=e;const i=t.split(".");for(;i.length&&(n=n[i[0]],void 0!==n);)i.shift();return n||r}function He(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||Te,t.namedCodesToUnicode=t.namedCodesToUnicode?i({},d,t.namedCodesToUnicode):d;const r=t.createElement||n.createElement;function a(e,n,...a){const o=qe(t.overrides,`${e}.props`,{});return r(function(e,t){const r=qe(t,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:qe(t,`${e}.component`,e):e}(e,t.overrides),i({},n,o,{className:_e(null==n?void 0:n.className,o.className)||void 0}),...a)}function o(e){let r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===B.test(e));const i=X(H(r?e:`${e.trimEnd().replace(oe,"")}\n\n`,{inline:r}));for(;"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;const o=t.wrapper||(r?"span":"div");let c;if(i.length>1||t.forceWrapper)c=i;else{if(1===i.length)return c=i[0],"string"==typeof c?a("span",{key:"outer"},c):c;c=null}return n.createElement(o,{key:"outer"},c)}function c(e){const t=e.match(h);return t?t.reduce((function(e,t,r){const i=t.indexOf("=");if(-1!==i){const a=function(e){return-1!==e.indexOf("-")&&null===e.match(I)&&(e=e.replace(L,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,i)).trim(),c=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(i+1).trim()),s=l[a]||a,d=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){const r=t.slice(0,t.indexOf(":"));return e[r.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(r.length+1).trim(),e}),{}):"href"===e||"src"===e?Le(t):(t.match(D)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(a,c);"string"==typeof d&&(z.test(d)||O.test(d))&&(e[s]=n.cloneElement(o(d.trim()),{key:r}))}else"style"!==t&&(e[l[t]||t]=!0);return e}),{}):null}const s=[],m={},q={0:{match:Ue(g),order:1,parse:(e,t,r)=>({children:t(e[0].replace(f,""),r)}),render:(e,t,r)=>a("blockquote",{key:r.key},t(e.children,r))},1:{match:Ke(y),order:1,parse:Be,render:(e,t,r)=>a("br",{key:r.key})},2:{match:Ue(b),order:1,parse:Be,render:(e,t,r)=>a("hr",{key:r.key})},3:{match:Ue(w),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,t,r)=>a("pre",{key:r.key},a("code",i({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},4:{match:Ue(k),order:0,parse:e=>({attrs:c(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"})},5:{match:De(v),order:3,parse:e=>({text:e[2]}),render:(e,t,r)=>a("code",{key:r.key},e.text)},6:{match:Ue(E),order:0,parse:e=>(s.push({footnote:e[2],identifier:e[1]}),{}),render:Ze},7:{match:Oe(P),order:1,parse:e=>({target:`#${t.slugify(e[1])}`,text:e[1]}),render:(e,t,r)=>a("a",{key:r.key,href:Le(e.target)},a("sup",{key:r.key},e.text))},8:{match:Oe(C),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,r)=>a("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},9:{match:Ue(t.enforceAtxHeadings?N:S),order:1,parse:(e,r,n)=>({children:$e(r,e[2],n),id:t.slugify(e[2]),level:e[1].length}),render:(e,t,r)=>a(`h${e.level}`,{id:e.id,key:r.key},t(e.children,r))},10:{match:Ue(T),order:0,parse:(e,t,r)=>({children:$e(t,e[1],r),level:"="===e[2]?1:2,type:"9"})},11:{match:Ke(z),order:1,parse(e,t,r){const[,n]=e[3].match(ce),i=new RegExp(`^${n}`,"gm"),a=e[3].replace(i,""),o=(s=a,Ne.some((e=>e.test(s)))?Ve:$e);var s;const l=e[1].toLowerCase(),d=-1!==p.indexOf(l),h={attrs:c(e[2]),noInnerParse:d,tag:d?l:e[1]};return r.inAnchor=r.inAnchor||"a"===l,d?h.text=e[3]:h.children=o(t,a,r),r.inAnchor=!1,h},render:(e,t,r)=>a(e.tag,i({key:r.key},e.attrs),e.text||t(e.children,r))},13:{match:Ke(O),order:1,parse:e=>({attrs:c(e[2]||""),tag:e[1]}),render:(e,t,r)=>a(e.tag,i({},e.attrs,{key:r.key}))},12:{match:Ke(M),order:1,parse:()=>({}),render:Ze},14:{match:De(Ce),order:1,parse:e=>({alt:e[1],target:je(e[2]),title:e[3]}),render:(e,t,r)=>a("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Le(e.target)})},15:{match:Oe(Re),order:3,parse:(e,t,r)=>({children:Ge(t,e[1],r),target:je(e[2]),title:e[3]}),render:(e,t,r)=>a("a",{key:r.key,href:Le(e.target),title:e.title},t(e.children,r))},16:{match:Oe(F),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],type:"15"})},17:{match:(e,t)=>t.inAnchor?null:Oe(U)(e,t),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"})},18:{match:Oe(K),order:0,parse(e){let t=e[1],r=e[1];return u.test(r)||(r="mailto:"+r),{children:[{text:t.replace("mailto:",""),type:"27"}],target:r,type:"15"}}},20:Pe(a,1),33:Pe(a,2),19:{match:Ue(W),order:3,parse:Be,render:()=>"\n"},21:{match:Fe,order:3,parse:Qe,render:(e,t,r)=>a("p",{key:r.key},t(e.children,r))},22:{match:Oe($),order:0,parse:e=>(m[e[1]]={target:e[2],title:e[4]},{}),render:Ze},23:{match:De(G),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,t,r)=>a("img",{key:r.key,alt:e.alt,src:Le(m[e.ref].target),title:m[e.ref].title})},24:{match:Oe(V),order:0,parse:(e,t,r)=>({children:t(e[1],r),fallbackChildren:t(e[0].replace(Q,"\\$1"),r),ref:e[2]}),render:(e,t,r)=>m[e.ref]?a("a",{key:r.key,href:Le(m[e.ref].target),title:m[e.ref].title},t(e.children,r)):a("span",{key:r.key},t(e.fallbackChildren,r))},25:{match:Ue(j),order:1,parse:Me,render:(e,t,r)=>a("table",{key:r.key},a("thead",null,a("tr",null,e.header.map((function(n,i){return a("th",{key:i,style:Ie(e,i)},t(n,r))})))),a("tbody",null,e.cells.map((function(n,i){return a("tr",{key:i},n.map((function(n,i){return a("td",{key:i,style:Ie(e,i)},t(n,r))})))}))))},26:{match:function(e,t){return t.inTable?(t.inline=!0,_.exec(e)):null},order:1,parse:function(){return{type:"26"}},render:()=>" | "},27:{match:Ke(ae),order:4,parse:e=>({text:e[0].replace(A,((e,r)=>t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e))}),render:e=>e.text},28:{match:De(ee),order:2,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>a("strong",{key:r.key},t(e.children,r))},29:{match:De(te),order:3,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>a("em",{key:r.key},t(e.children,r))},30:{match:De(ie),order:1,parse:e=>({text:e[1],type:"27"})},31:{match:De(re),order:3,parse:Qe,render:(e,t,r)=>a("mark",{key:r.key},t(e.children,r))},32:{match:De(ne),order:3,parse:Qe,render:(e,t,r)=>a("del",{key:r.key},t(e.children,r))}};!0===t.disableParsingRawHTML&&(delete q[11],delete q[13]);const H=function(e){let t=Object.keys(e);function r(n,i){let a=[],o="";for(;n;){let c=0;for(;c<t.length;){const s=t[c],l=e[s],d=l.match(n,i,o);if(d){const e=d[0];n=n.substring(e.length);const t=l.parse(d,r,i);null==t.type&&(t.type=s),a.push(t),o=e;break}c++}}return a}return t.sort((function(t,r){let n=e[t].order,i=e[r].order;return n!==i?n-i:1})),function(e,t){return r(function(e){return e.replace(x,"\n").replace(R,"").replace(Z,"    ")}(e),t)}}(q),X=(J=function(e,t){return function(r,n,i){const a=e[r.type].render;return t?t((()=>a(r,n,i)),r,n,i):a(r,n,i)}}(q,t.renderRule),function e(t,r={}){if(Array.isArray(t)){const n=r.key,i=[];let a=!1;for(let o=0;o<t.length;o++){r.key=o;const n=e(t[o],r),c="string"==typeof n;c&&a?i[i.length-1]+=n:null!==n&&i.push(n),a=c}return r.key=n,i}return J(t,e,r)});var J;const Y=o(e);return s.length?a("div",null,Y,a("footer",{key:"footer"},s.map((function(e){return a("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,X(H(e.footnote,{inline:!0})))})))):Y}const Xe=e=>{let{children:t,options:r}=e,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}(e,a);return n.cloneElement(He(t,r),i)}}}]);