"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8950,7298,9462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7860:(e,t,r)=>{r.d(t,{B:()=>o,Z:()=>c});var n=r(7462),a=r(7294),i=r(5576);const o=e=>e.startsWith("http://")||e.startsWith("https://"),s=e=>{let{children:t,href:r,...i}=e;return o(r)?a.createElement("a",(0,n.Z)({href:r,target:"_blank",rel:"noopener noreferrer"},i),t):a.createElement("a",(0,n.Z)({href:r},i),t)},c=e=>{let{children:t}=e;return a.createElement(i.ZP,{options:{overrides:{a:{component:s}}}},t)}},6555:(e,t,r)=>{r.d(t,{P:()=>n});const n=[{title:"[Redis Watcher](https://github.com/Sbou/Casbin.NET-Redis-Watcher)",type:"KV store",author:"[@Sbou](https://github.com/Sbou)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"}].map((e=>({...e,tags:["dotNET","Watcher"]})))},2191:(e,t,r)=>{r.d(t,{a:()=>n});const n=[{title:"[PostgreSQL WatcherEx](https://github.com/IguteChung/casbin-psql-watcher)",type:"Database",author:"[@IguteChung](https://github.com/IguteChung)",description:"WatcherEx for [PostgreSQL](https://www.postgresql.org/)",image:"/img/ecosystem/postgreSQL.png"},{title:"[Redis WatcherEx](https://github.com/casbin/redis-watcher)",type:"KV store",author:"Casbin",description:"WatcherEx for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Redis Watcher](https://github.com/billcobbler/casbin-redis-watcher)",type:"KV store",author:"[@billcobbler](https://github.com/billcobbler)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Etcd Watcher](https://github.com/casbin/etcd-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[TiKV Watcher](https://github.com/casbin/tikv-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [TiKV](https://github.com/tikv/tikv)",image:"/img/ecosystem/tikv.png"},{title:"[Kafka Watcher](https://github.com/wgarunap/casbin-kafka-watcher)",type:"Messaging system",author:"[@wgarunap](https://github.com/wgarunap)",description:"Watcher for [Apache Kafka](https://kafka.apache.org/)",image:"/img/ecosystem/kafka.png"},{title:"[NATS Watcher](https://github.com/Soluto/casbin-nats-watcher)",type:"Messaging system",author:"[Soluto](https://github.com/Soluto)",description:"Watcher for [NATS](https://nats.io/)"},{title:"[ZooKeeper Watcher](https://github.com/grepsr/casbin-zk-watcher)",type:"Messaging system",author:"[Grepsr](https://github.com/grepsr)",description:"Watcher for [Apache ZooKeeper](https://zookeeper.apache.org/)",image:"/img/ecosystem/zookeeper.png"},{title:"[NATS, RabbitMQ, GCP Pub/Sub, AWS SNS & SQS, Kafka, InMemory](https://github.com/rusenask/casbin-go-cloud-watcher)",type:"Messaging System",author:"[@rusenask](https://github.com/rusenask/)",description:"Watcher based on [Go Cloud Dev Kit](https://gocloud.dev/) that works with leading cloud providers and self-hosted infrastructure"},{title:"[NATS, RabbitMQ, GCP Pub/Sub, AWS SNS & SQS, Kafka, InMemory](https://github.com/bartventer/casbin-go-cloud-watcher)",type:"Messaging System",author:"[@bartventer](https://github.com/bartventer/)",description:"WatcherEx based on [Go Cloud Dev Kit](https://gocloud.dev/) that works with leading cloud providers and self-hosted infrastructure"},{title:"[RocketMQ Watcher](https://github.com/fmyxyz/casbin-rocketmq-watcher)",type:"Messaging system",author:"[@fmyxyz](https://github.com/fmyxyz)",description:"Watcher for [Apache RocketMQ](https://rocketmq.apache.org/)",image:"/img/ecosystem/rocketMQ.png"}].map((e=>({...e,tags:["Go","Watcher"]})))},1798:(e,t,r)=>{r.d(t,{l:()=>n});const n=[{title:"[Etcd Adapter](https://github.com/mapleafgo/jcasbin-extra)",type:"KV store",author:"[@mapleafgo](https://github.com/mapleafgo)",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[Redis Watcher](https://github.com/jcasbin/redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Lettuce-Based Redis Watcher](https://github.com/jcasbin/lettuce-redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/) based on [Lettuce](https://lettuce.io/))",image:"/img/ecosystem/lettuce.png"},{title:"[Kafka Watcher](https://github.com/jcasbin/kafka-watcher)",type:"Messaging system",author:"Casbin",description:"Watcher for [Apache Kafka](https://kafka.apache.org/)",image:"/img/ecosystem/kafka.png"}].map((e=>({...e,tags:["Java","Watcher"]})))},6304:(e,t,r)=>{r.d(t,{F:()=>n});const n=[{title:"[Etcd Watcher](https://github.com/node-casbin/etcd-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[Redis Watcher](https://github.com/node-casbin/redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Pub/Sub Watcher](https://github.com/node-casbin/pubsub-watcher)",type:"Messaging system",author:"Casbin",description:"Watcher for [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/docs)",image:"/img/ecosystem/pubsub.png"},{title:"[MongoDB Change Streams Watcher](https://github.com/node-casbin/mongo-changestream-watcher)",type:"Database",author:"Casbin",description:"Watcher for [MongoDB Change Streams](https://www.mongodb.com/docs/manual/changeStreams/)",image:"/img/ecosystem/monogoDB.png"},{title:"[Postgres Watcher](https://github.com/mcollina/casbin-pg-watcher)",type:"Database",author:"[@mcollina](https://github.com/mcollina)",description:"Watcher for [PostgreSQL](https://www.postgresql.org/)",image:"/img/ecosystem/postgreSQL.png"}].map((e=>({...e,tags:["NodeJS","Watcher"]})))},813:(e,t,r)=>{r.d(t,{r:()=>n});const n=[{title:"[Redis Watcher](https://github.com/php-casbin/webman-permission)",type:"KV store",author:"[@Tinywan](https://github.com/Tinywan)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"}].map((e=>({...e,tags:["PHP","Watcher"]})))},2642:(e,t,r)=>{r.d(t,{w:()=>n});const n=[{title:"[Etcd Watcher](https://github.com/officialpycasbin/etcd-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [etcd](https://github.com/coreos/etcd)",image:"/img/ecosystem/etcd.png"},{title:"[Redis Watcher](https://github.com/officialpycasbin/redis-watcher)",type:"KV store",author:"Casbin",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Redis Watcher](https://github.com/ScienceLogic/flask-casbin-redis-watcher)",type:"KV store",author:"[ScienceLogic](https://github.com/ScienceLogic)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[Redis Async Watcher](https://github.com/kevinkelin/casbin_async_redis_watcher)",type:"KV store",author:"[@kevinkelin](https://github.com/kevinkelin)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[PostgreSQL Watcher](https://github.com/officialpycasbin/postgresql-watcher)",type:"Database",author:"Casbin",description:"Watcher for [PostgreSQL](https://www.postgresql.org/)",image:"/img/ecosystem/redis.png"},{title:"[RabbitMQ Watcher](https://github.com/officialpycasbin/rabbitmq-watcher)",type:"Messaging system",author:"Casbin",description:"Watcher for [RabbitMQ](https://www.rabbitmq.com/)",image:"/img/ecosystem/rabbitMQ.png"}].map((e=>({...e,tags:["Python","Watcher"]})))},837:(e,t,r)=>{r.d(t,{W:()=>n});const n=[{title:"[Redis Watcher](https://github.com/CasbinRuby/casbin-ruby-redis-watcher)",type:"KV store",author:"[CasbinRuby](https://github.com/CasbinRuby)",description:"Watcher for [Redis](http://redis.io/)",image:"/img/ecosystem/redis.png"},{title:"[RabbitMQ Watcher](https://github.com/CasbinRuby/casbin-ruby-rabbitmq-watcher)",type:"Messaging system",author:"[CasbinRuby](https://github.com/CasbinRuby)",description:"Watcher for [RabbitMQ](https://www.rabbitmq.com/)",image:"/img/ecosystem/rabbitMQ.png"}].map((e=>({...e,tags:["Ruby","Watcher"]})))},1425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>P,frontMatter:()=>g,metadata:()=>f,toc:()=>k});var n=r(7462),a=r(7294),i=r(3905),o=r(6555),s=r(2191),c=r(1798),l=r(7860);function p(e){let{data:t}=e,r="| Watcher | Type | Author  | Description |\n|---------|------|--------|-------------|\n";return t.forEach((e=>{r+=`| ${e.title} | ${e.type} | ${e.author} | ${e.description} |\n`})),a.createElement(l.Z,null,r)}var d=r(6304),u=r(813),h=r(2642),m=r(837);const g={id:"watchers",title:"Watchers",description:"Maintenir la coh\xe9rence entre plusieurs instances de l'ex\xe9cuteur Casbin",keywords:["watcher","multiple Casbin enforcer","WatcherEx"],authors:["hsluoyz"]},y=void 0,f={unversionedId:"watchers",id:"watchers",title:"Watchers",description:"Maintenir la coh\xe9rence entre plusieurs instances de l'ex\xe9cuteur Casbin",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Watchers.mdx",sourceDirName:".",slug:"/watchers",permalink:"/fr/docs/watchers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Watchers.mdx",tags:[],version:"current",frontMatter:{id:"watchers",title:"Watchers",description:"Maintenir la coh\xe9rence entre plusieurs instances de l'ex\xe9cuteur Casbin",keywords:["watcher","multiple Casbin enforcer","WatcherEx"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Adapters",permalink:"/fr/docs/adapters"},next:{title:"Dispatchers",permalink:"/fr/docs/dispatchers"}},b={},k=[{value:"WatcherEx",id:"watcherex",level:2}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},w=v("Tabs"),x=v("TabItem"),W={toc:k};function P(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},W,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nous soutenons l'utilisation de syst\xe8mes de messagerie distribu\xe9s comme ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/coreos/etcd"},"etcd")," pour maintenir la coh\xe9rence entre plusieurs instances de l'ex\xe9cuteur Casbin. Cela permet \xe0 nos utilisateurs d'utiliser simultan\xe9ment plusieurs ex\xe9cuteurs Casbin pour g\xe9rer un grand nombre de demandes de v\xe9rification des autorisations."),(0,i.kt)("p",null,"Semblable aux adaptateurs de stockage de politiques, nous n'incluons pas le code du watcher dans la biblioth\xe8que principale. Tout support pour un nouveau syst\xe8me de messagerie doit \xeatre impl\xe9ment\xe9 en tant que watcher. Une liste compl\xe8te des watchers Casbin est fournie ci-dessous. Nous accueillons toute contribution de tiers pour un nouveau watcher, veuillez nous en informer et nous l'ajouterons \xe0 cette liste :"),(0,i.kt)(w,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(x,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)(p,{data:s.a,mdxType:"WatcherMDTable"})),(0,i.kt)(x,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)(p,{data:c.l,mdxType:"WatcherMDTable"})),(0,i.kt)(x,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)(p,{data:d.F,mdxType:"WatcherMDTable"})),(0,i.kt)(x,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)(p,{data:h.w,mdxType:"WatcherMDTable"})),(0,i.kt)(x,{value:".NET",label:".NET",mdxType:"TabItem"},(0,i.kt)(p,{data:o.P,mdxType:"WatcherMDTable"})),(0,i.kt)(x,{value:"Ruby",label:"Ruby",mdxType:"TabItem"},(0,i.kt)(p,{data:m.W,mdxType:"WatcherMDTable"})),(0,i.kt)(x,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,i.kt)(p,{data:u.r,mdxType:"WatcherMDTable"}))),(0,i.kt)("h2",{id:"watcherex"},"WatcherEx"),(0,i.kt)("p",null,"Afin de soutenir la synchronisation incr\xe9mentielle entre plusieurs instances, nous fournissons l'interface ",(0,i.kt)("inlineCode",{parentName:"p"},"WatcherEx"),". Nous esp\xe9rons qu'il peut notifier les autres instances lorsque la politique change, mais il n'y a actuellement aucune impl\xe9mentation de ",(0,i.kt)("inlineCode",{parentName:"p"},"WatcherEx"),". Nous vous recommandons d'utiliser le dispatcher pour y parvenir."),(0,i.kt)("p",null,"Compar\xe9 \xe0 l'interface ",(0,i.kt)("inlineCode",{parentName:"p"},"Watcher"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WatcherEx")," peut distinguer quel type d'action de mise \xe0 jour est re\xe7u, par exemple, ",(0,i.kt)("inlineCode",{parentName:"p"},"AddPolicy")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"RemovePolicy"),"."),(0,i.kt)("p",null,"Apis WatcherEx :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback(func(string)) error"),(0,i.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback d\xe9finit la fonction de rappel que le watcher appellera, lorsque la politique dans la base de donn\xe9es a \xe9t\xe9 modifi\xe9e par d'autres instances. Un rappel classique est Enforcer.LoadPolicy().")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Update() error"),(0,i.kt)("td",{parentName:"tr",align:null},"Update appelle la fonction de rappel de mise \xe0 jour des autres instances pour synchroniser leur politique. Il est g\xe9n\xe9ralement appel\xe9 apr\xe8s avoir modifi\xe9 la politique dans la base de donn\xe9es, comme Enforcer.SavePolicy(), Enforcer.AddPolicy(), Enforcer.RemovePolicy(), etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Close()"),(0,i.kt)("td",{parentName:"tr",align:null},"Close arr\xeate et lib\xe8re le watcher, la fonction de rappel ne sera plus appel\xe9e.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy(sec, ptype string, params ...string) error"),(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy appelle la fonction de rappel de mise \xe0 jour des autres instances pour synchroniser leur politique. Il est appel\xe9 apr\xe8s qu'une politique a \xe9t\xe9 ajout\xe9e via Enforcer.AddPolicy(), Enforcer.AddNamedPolicy(), Enforcer.AddGroupingPolicy() et Enforcer.AddNamedGroupingPolicy().")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicy(sec, ptype string, params ...string) error"),(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicy appelle la fonction de rappel de mise \xe0 jour des autres instances pour synchroniser leur politique. Il est appel\xe9 apr\xe8s qu'une politique a \xe9t\xe9 supprim\xe9e par Enforcer.RemovePolicy(), Enforcer.RemoveNamedPolicy(), Enforcer.RemoveGroupingPolicy() et Enforcer.RemoveNamedGroupingPolicy().")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy(sec, ptype string, fieldIndex int, fieldValues ...string) error"),(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy appelle la fonction de rappel de mise \xe0 jour des autres instances pour synchroniser leur politique. Il est appel\xe9 apr\xe8s Enforcer.RemoveFilteredPolicy(), Enforcer.RemoveFilteredNamedPolicy(), Enforcer.RemoveFilteredGroupingPolicy() et Enforcer.RemoveFilteredNamedGroupingPolicy().")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy(model model.Model) error"),(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy appelle la fonction de rappel de mise \xe0 jour des autres instances pour synchroniser leur politique. Il est appel\xe9 apr\xe8s Enforcer.SavePolicy()")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies(sec string, ptype string, rules ...[]string) error"),(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies appelle la fonction de rappel de mise \xe0 jour des autres instances pour synchroniser leur politique. Il est appel\xe9 apr\xe8s Enforcer.AddPolicies(), Enforcer.AddNamedPolicies(), Enforcer.AddGroupingPolicies() et Enforcer.AddNamedGroupingPolicies().")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies(sec string, ptype string, rules ...[]string) error"),(0,i.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies appelle la fonction de rappel de mise \xe0 jour des autres instances pour synchroniser leur politique. Il est appel\xe9 apr\xe8s Enforcer.RemovePolicies(), Enforcer.RemoveNamedPolicies(), Enforcer.RemoveGroupingPolicies() et Enforcer.RemoveNamedGroupingPolicies().")))))}P.isMDXComponent=!0},5576:(e,t,r)=>{r.d(t,{ZP:()=>Xe});var n=r(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const i=["children","options"];var o,s,c;(c=o||(o={})).blockQuote="0",c.breakLine="1",c.breakThematic="2",c.codeBlock="3",c.codeFenced="4",c.codeInline="5",c.footnote="6",c.footnoteReference="7",c.gfmTask="8",c.heading="9",c.headingSetext="10",c.htmlBlock="11",c.htmlComment="12",c.htmlSelfClosing="13",c.image="14",c.link="15",c.linkAngleBraceStyleDetector="16",c.linkBareUrlDetector="17",c.linkMailtoDetector="18",c.newlineCoalescer="19",c.orderedList="20",c.paragraph="21",c.ref="22",c.refImage="23",c.refLink="24",c.table="25",c.tableSeparator="26",c.text="27",c.textBolded="28",c.textEmphasized="29",c.textEscaped="30",c.textMarked="31",c.textStrikethroughed="32",c.unorderedList="33",function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(s||(s={}));const l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},d=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,h=/mailto:/i,m=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,f=/^ {2,}\n/,b=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,w=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,x=/^(?:\n *)*\n/,W=/\r\n?/g,P=/^\[\^([^\]]+)](:.*)\n/,E=/^\[\^([^\]]+)]/,C=/\f/g,N=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,R=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,M=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,A=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,O=/^<!--[\s\S]*?(?:-->)/,j=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,q=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,I=/^\{.*\}$/,D=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,$=/^<([^ >]+:\/[^ >]+)>/,K=/-([a-z])?/gi,U=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,F=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Q=/(\[|\])/g,V=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,_=/^ *\| */,B=/(^ *\||\| *$)/g,H=/ *$/,X=/^ *:-+: *$/,J=/^ *:-+ *$/,Y=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,te=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,re=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,ne=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ae=/^\\([^0-9A-Za-z\s])/,ie=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/^\n+/,se=/^([ \t]*)/,ce=/\\([^\\])/g,le=/ *\n+$/,pe=/(?:^|\n)( *)$/,de="(?:\\d+\\.)",ue="(?:[*+-])";function he(e){return"( *)("+(1===e?de:ue)+") +"}const me=he(1),ge=he(2);function ye(e){return new RegExp("^"+(1===e?me:ge))}const fe=ye(1),be=ye(2);function ke(e){return new RegExp("^"+(1===e?me:ge)+"[^\\n]*(?:\\n(?!\\1"+(1===e?de:ue)+" )[^\\n]*)*(\\n|$)","gm")}const ve=ke(1),we=ke(2);function xe(e){const t=1===e?de:ue;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const We=xe(1),Pe=xe(2);function Ee(e,t){const r=1===t,n=r?We:Pe,a=r?ve:we,i=r?fe:be;return{match(e,t,r){const a=pe.exec(r);return a&&(t.list||!t.inline&&!t.simple)?n.exec(e=a[1]+e):null},order:1,parse(e,t,n){const o=r?+e[2]:void 0,s=e[0].replace(m,"\n").match(a);let c=!1;return{items:s.map((function(e,r){const a=i.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(i,""),p=r===s.length-1,d=-1!==l.indexOf("\n\n")||p&&c;c=d;const u=n.inline,h=n.list;let m;n.list=!0,d?(n.inline=!1,m=l.replace(le,"\n\n")):(n.inline=!0,m=l.replace(le,""));const g=t(m,n);return n.inline=u,n.list=h,g})),ordered:r,start:o}},render:(t,r,n)=>e(t.ordered?"ol":"ul",{key:n.key,start:"20"===t.type?t.start:void 0},t.items.map((function(t,a){return e("li",{key:a},r(t,n))})))}}const Ce=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Ne=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Te=[g,k,v,T,R,S,O,U,ve,We,we,Pe],Se=[...Te,/^[^\n]+(?:  \n|\n{2,})/,M,q];function Re(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Me(e){return Y.test(e)?"right":X.test(e)?"center":J.test(e)?"left":null}function Ae(e,t,r){const n=r.inTable;r.inTable=!0;const a=t(e.trim(),r);r.inTable=n;let i=[[]];return a.forEach((function(e,t){"26"===e.type?0!==t&&t!==a.length-1&&i.push([]):("27"!==e.type||null!=a[t+1]&&"26"!==a[t+1].type||(e.text=e.text.replace(H,"")),i[i.length-1].push(e))})),i}function Oe(e,t,r){r.inline=!0;const n=Ae(e[1],t,r),a=e[2].replace(B,"").split("|").map(Me),i=function(e,t,r){return e.trim().split("\n").map((function(e){return Ae(e,t,r)}))}(e[3],t,r);return r.inline=!1,{align:a,cells:i,header:n,type:"25"}}function je(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function qe(e){return function(t,r){return r.inline?e.exec(t):null}}function Ie(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function De(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function Le(e){return function(t){return e.exec(t)}}function $e(e,t,r){if(t.inline||t.simple)return null;if(r&&!r.endsWith("\n"))return null;let n="";e.split("\n").every((e=>!Te.some((t=>t.test(e)))&&(n+=e+"\n",e.trim())));const a=n.trimEnd();return""==a?null:[n,a]}function Ke(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function Ue(e){return e.replace(ce,"$1")}function Fe(e,t,r){const n=r.inline||!1,a=r.simple||!1;r.inline=!0,r.simple=!0;const i=e(t,r);return r.inline=n,r.simple=a,i}function Ge(e,t,r){const n=r.inline||!1,a=r.simple||!1;r.inline=!1,r.simple=!0;const i=e(t,r);return r.inline=n,r.simple=a,i}function ze(e,t,r){return r.inline=!1,e(t,r)}const Qe=(e,t,r)=>({children:Fe(t,e[1],r)});function Ve(){return{}}function Ze(){return null}function _e(...e){return e.filter(Boolean).join(" ")}function Be(e,t,r){let n=e;const a=t.split(".");for(;a.length&&(n=n[a[0]],void 0!==n);)a.shift();return n||r}function He(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||Re,t.namedCodesToUnicode=t.namedCodesToUnicode?a({},p,t.namedCodesToUnicode):p;const r=t.createElement||n.createElement;function i(e,n,...i){const o=Be(t.overrides,`${e}.props`,{});return r(function(e,t){const r=Be(t,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:Be(t,`${e}.component`,e):e}(e,t.overrides),a({},n,o,{className:_e(null==n?void 0:n.className,o.className)||void 0}),...i)}function o(e){let r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===V.test(e));const a=X(H(r?e:`${e.trimEnd().replace(oe,"")}\n\n`,{inline:r}));for(;"string"==typeof a[a.length-1]&&!a[a.length-1].trim();)a.pop();if(null===t.wrapper)return a;const o=t.wrapper||(r?"span":"div");let s;if(a.length>1||t.forceWrapper)s=a;else{if(1===a.length)return s=a[0],"string"==typeof s?i("span",{key:"outer"},s):s;s=null}return n.createElement(o,{key:"outer"},s)}function s(e){const t=e.match(u);return t?t.reduce((function(e,t,r){const a=t.indexOf("=");if(-1!==a){const i=function(e){return-1!==e.indexOf("-")&&null===e.match(j)&&(e=e.replace(K,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),s=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(a+1).trim()),c=l[i]||i,p=e[c]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){const r=t.slice(0,t.indexOf(":"));return e[r.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(r.length+1).trim(),e}),{}):"href"===e||"src"===e?Ke(t):(t.match(I)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,s);"string"==typeof p&&(M.test(p)||q.test(p))&&(e[c]=n.cloneElement(o(p.trim()),{key:r}))}else"style"!==t&&(e[l[t]||t]=!0);return e}),{}):null}const c=[],m={},B={0:{match:De(g),order:1,parse:(e,t,r)=>({children:t(e[0].replace(y,""),r)}),render:(e,t,r)=>i("blockquote",{key:r.key},t(e.children,r))},1:{match:Le(f),order:1,parse:Ve,render:(e,t,r)=>i("br",{key:r.key})},2:{match:De(b),order:1,parse:Ve,render:(e,t,r)=>i("hr",{key:r.key})},3:{match:De(v),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,t,r)=>i("pre",{key:r.key},i("code",a({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},4:{match:De(k),order:0,parse:e=>({attrs:s(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"})},5:{match:Ie(w),order:3,parse:e=>({text:e[2]}),render:(e,t,r)=>i("code",{key:r.key},e.text)},6:{match:De(P),order:0,parse:e=>(c.push({footnote:e[2],identifier:e[1]}),{}),render:Ze},7:{match:qe(E),order:1,parse:e=>({target:`#${t.slugify(e[1])}`,text:e[1]}),render:(e,t,r)=>i("a",{key:r.key,href:Ke(e.target)},i("sup",{key:r.key},e.text))},8:{match:qe(N),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,r)=>i("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},9:{match:De(t.enforceAtxHeadings?S:T),order:1,parse:(e,r,n)=>({children:Fe(r,e[2],n),id:t.slugify(e[2]),level:e[1].length}),render:(e,t,r)=>i(`h${e.level}`,{id:e.id,key:r.key},t(e.children,r))},10:{match:De(R),order:0,parse:(e,t,r)=>({children:Fe(t,e[1],r),level:"="===e[2]?1:2,type:"9"})},11:{match:Le(M),order:1,parse(e,t,r){const[,n]=e[3].match(se),a=new RegExp(`^${n}`,"gm"),i=e[3].replace(a,""),o=(c=i,Se.some((e=>e.test(c)))?ze:Fe);var c;const l=e[1].toLowerCase(),p=-1!==d.indexOf(l),u={attrs:s(e[2]),noInnerParse:p,tag:p?l:e[1]};return r.inAnchor=r.inAnchor||"a"===l,p?u.text=e[3]:u.children=o(t,i,r),r.inAnchor=!1,u},render:(e,t,r)=>i(e.tag,a({key:r.key},e.attrs),e.text||t(e.children,r))},13:{match:Le(q),order:1,parse:e=>({attrs:s(e[2]||""),tag:e[1]}),render:(e,t,r)=>i(e.tag,a({},e.attrs,{key:r.key}))},12:{match:Le(O),order:1,parse:()=>({}),render:Ze},14:{match:Ie(Ne),order:1,parse:e=>({alt:e[1],target:Ue(e[2]),title:e[3]}),render:(e,t,r)=>i("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ke(e.target)})},15:{match:qe(Ce),order:3,parse:(e,t,r)=>({children:Ge(t,e[1],r),target:Ue(e[2]),title:e[3]}),render:(e,t,r)=>i("a",{key:r.key,href:Ke(e.target),title:e.title},t(e.children,r))},16:{match:qe($),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],type:"15"})},17:{match:(e,t)=>t.inAnchor?null:qe(D)(e,t),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"})},18:{match:qe(L),order:0,parse(e){let t=e[1],r=e[1];return h.test(r)||(r="mailto:"+r),{children:[{text:t.replace("mailto:",""),type:"27"}],target:r,type:"15"}}},20:Ee(i,1),33:Ee(i,2),19:{match:De(x),order:3,parse:Ve,render:()=>"\n"},21:{match:$e,order:3,parse:Qe,render:(e,t,r)=>i("p",{key:r.key},t(e.children,r))},22:{match:qe(F),order:0,parse:e=>(m[e[1]]={target:e[2],title:e[4]},{}),render:Ze},23:{match:Ie(G),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,t,r)=>i("img",{key:r.key,alt:e.alt,src:Ke(m[e.ref].target),title:m[e.ref].title})},24:{match:qe(z),order:0,parse:(e,t,r)=>({children:t(e[1],r),fallbackChildren:t(e[0].replace(Q,"\\$1"),r),ref:e[2]}),render:(e,t,r)=>m[e.ref]?i("a",{key:r.key,href:Ke(m[e.ref].target),title:m[e.ref].title},t(e.children,r)):i("span",{key:r.key},t(e.fallbackChildren,r))},25:{match:De(U),order:1,parse:Oe,render:(e,t,r)=>i("table",{key:r.key},i("thead",null,i("tr",null,e.header.map((function(n,a){return i("th",{key:a,style:je(e,a)},t(n,r))})))),i("tbody",null,e.cells.map((function(n,a){return i("tr",{key:a},n.map((function(n,a){return i("td",{key:a,style:je(e,a)},t(n,r))})))}))))},26:{match:function(e,t){return t.inTable?(t.inline=!0,_.exec(e)):null},order:1,parse:function(){return{type:"26"}},render:()=>" | "},27:{match:Le(ie),order:4,parse:e=>({text:e[0].replace(A,((e,r)=>t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e))}),render:e=>e.text},28:{match:Ie(ee),order:2,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>i("strong",{key:r.key},t(e.children,r))},29:{match:Ie(te),order:3,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>i("em",{key:r.key},t(e.children,r))},30:{match:Ie(ae),order:1,parse:e=>({text:e[1],type:"27"})},31:{match:Ie(re),order:3,parse:Qe,render:(e,t,r)=>i("mark",{key:r.key},t(e.children,r))},32:{match:Ie(ne),order:3,parse:Qe,render:(e,t,r)=>i("del",{key:r.key},t(e.children,r))}};!0===t.disableParsingRawHTML&&(delete B[11],delete B[13]);const H=function(e){let t=Object.keys(e);function r(n,a){let i=[],o="";for(;n;){let s=0;for(;s<t.length;){const c=t[s],l=e[c],p=l.match(n,a,o);if(p){const e=p[0];n=n.substring(e.length);const t=l.parse(p,r,a);null==t.type&&(t.type=c),i.push(t),o=e;break}s++}}return i}return t.sort((function(t,r){let n=e[t].order,a=e[r].order;return n!==a?n-a:1})),function(e,t){return r(function(e){return e.replace(W,"\n").replace(C,"").replace(Z,"    ")}(e),t)}}(B),X=(J=function(e,t){return function(r,n,a){const i=e[r.type].render;return t?t((()=>i(r,n,a)),r,n,a):i(r,n,a)}}(B,t.renderRule),function e(t,r={}){if(Array.isArray(t)){const n=r.key,a=[];let i=!1;for(let o=0;o<t.length;o++){r.key=o;const n=e(t[o],r),s="string"==typeof n;s&&i?a[a.length-1]+=n:null!==n&&a.push(n),i=s}return r.key=n,a}return J(t,e,r)});var J;const Y=o(e);return c.length?i("div",null,Y,i("footer",{key:"footer"},c.map((function(e){return i("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,X(H(e.footnote,{inline:!0})))})))):Y}const Xe=e=>{let{children:t,options:r}=e,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}(e,i);return n.cloneElement(He(t,r),a)}}}]);