"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4195],{6491:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const s=JSON.parse('[{"caption":"Intel RMD","image":"users/intel.png","infolink":"https://github.com/intel/rmd","pinned":true},{"caption":"Vmware Harbor","image":"users/vmware.png","infolink":"https://github.com/goharbor/harbor","pinned":true},{"caption":"Docker","image":"users/docker.png","infolink":"https://docs.docker.com/engine/extend/legacy_plugins/#authorization-plugins","pinned":true},{"caption":"Orange Gobis","image":"users/orange.png","infolink":"https://github.com/orange-cloudfoundry/gobis","pinned":true},{"caption":"Cisco","image":"users/cisco.svg","infolink":"https://www.linkedin.com/in/openmohan/","pinned":true},{"caption":"Microsoft","image":"users/microsoft.png","infolink":"https://github.com/microsoft/mouselog","pinned":true},{"caption":"Verizon","image":"users/verizon.png","infolink":"https://github.com/casbin/casbin/pull/56","pinned":true},{"caption":"Alibaba","image":"users/alibaba.png","infolink":"https://github.com/dragonflyoss/Dragonfly2/search?q=casbin&type=code","pinned":true},{"caption":"Redhat","image":"users/redhat.png","infolink":"https://github.com/skydive-project/skydive","pinned":true},{"caption":"Tencent","image":"users/tencent.png","infolink":"https://github.com/tkestack/tke","pinned":true},{"caption":"ETH Zurich","image":"users/eth.jpg","infolink":"https://github.com/netsec-ethz/","pinned":true},{"caption":"T-Mobile","image":"users/t-mobile.png","infolink":"https://github.com/tmobile/jazz","pinned":true},{"caption":"IBM","image":"users/ibm.png","infolink":"https://loopback.io/doc/en/lb4/migration-auth-access-control-example.html#using-casbin","pinned":true},{"caption":"F5","image":"users/f5.png","infolink":"https://github.com/casbin/casbin/issues/299","pinned":true},{"caption":"Bose","image":"users/bose.png","infolink":"https://github.com/casbin/casbin/issues/302","pinned":true},{"caption":"r/SpaceX","image":"users/rspacex.png","infolink":"https://github.com/r-spacex/SpaceX-API/commit/f8daa8f9878dcd7a281fc8081e3aeb8e5d216089","pinned":true},{"caption":"Elastic","image":"users/elastic.svg","infolink":"https://www.elastic.co/guide/en/cloud-on-k8s/master/k8s-dependencies.html","pinned":true},{"caption":"Honeywell","image":"users/honeywell.png","infolink":"https://www.linkedin.com/search/results/people/?keywords=casbin%20honeywell","pinned":true},{"caption":"HPE","image":"users/hpe.jpg","infolink":"https://www.linkedin.com/in/raghavbabu","pinned":true},{"caption":"Schneider Electric","image":"users/se.png","infolink":"https://www.linkedin.com/in/peterjotoole","pinned":true},{"caption":"SIEMENS","image":"users/siemens.svg","infolink":"https://www.linkedin.com/in/kshitij-rastogi19","pinned":true},{"caption":"Musma","image":"users/musma.svg","infolink":"https://www.musma.net/","pinned":true},{"caption":"Jdlt","image":"users/jdlt.svg","infolink":"https://jdlt.co.uk/","pinned":true},{"caption":"Jfif","image":"users/360.jfif","infolink":"https://www.linkedin.com/in/andrew-weng/","pinned":true},{"caption":"Bytebase","image":"users/bytebase.svg","infolink":"https://github.com/bytebase/bytebase/blob/740afc6286cd855fecc3cc54875583c6b650a41a/server/server.go","pinned":true},{"caption":"zilliz","image":"users/zilliz.png","infolink":"https://github.com/milvus-io/milvus/blob/d7f38a803d5d23d3e061702e73770cb68aee1dc2/internal/proxy/privilege_interceptor.go","pinned":true},{"caption":"Ontario Government","image":"users/ontario.jpg","infolink":"https://www.linkedin.com/in/nihalpandit","pinned":true},{"caption":"Apache Pulsar","image":"users/pulsar.svg","infolink":"https://apachecon.com/acasia2021/sessions/1049.html","pinned":true}]');function i(){const e=s.map((e=>n.createElement("a",{className:"showcaseLogo",href:e.infolink,target:"_blank",key:e.caption,rel:"noreferrer"},n.createElement("img",{src:"/img/"+e.image,title:e.caption,alt:e.caption}))));return n.createElement("div",{className:"showcaseLogos"},e)}},3261:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(7294),s=a(6010),i=a(566),r=a(9960),l=a(2263);const o="heroBanner_qdFl",c="buttons_AeoN",m="policypersistence_VeHm",g="policyenforcement_aBLo",p="rolemanager_Dhe_",u="embedbutton_BUq7";var d=a(7462);const h="features_t9lD",b="featureSvg_GfXr";var f=a(5999),E=a(2949);const y=[{title:n.createElement(f.Z,null,"Hybrid access control models"),path:"/img/model",description:n.createElement(f.Z,null,"In Casbin, an access control model is abstracted into a CONF file based on the PERM metamodel (Policy, Effect, Request, Matchers). So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration.")},{title:n.createElement(f.Z,null,"Flexible policy storage"),path:"/img/storage",description:n.createElement(f.Z,{values:{adaptersLink:n.createElement("a",{href:"/docs/adapters"},n.createElement(f.Z,null,"adapters"))}},"Besides memory and file, Casbin policy can be stored into lots of places. Currently, dozens of databases are supported, from MySQL, Postgres, Oracle to MongoDB, Redis, Cassandra, AWS S3. Check the full supported list at: {adaptersLink}.")},{title:n.createElement(f.Z,null,"Cross-languages & cross-platforms"),path:"/img/language",description:n.createElement(f.Z,null,"Casbin is implemented in Golang, Java, PHP and Node.js. All implementations share the same API and behaviors. You can learn Casbin once and use it everywhere.")}];function v(e){let{title:t,path:a,description:i}=e;const{colorMode:r}=(0,E.I)();return n.createElement("div",{className:(0,s.Z)("col col--4")},n.createElement("div",{className:"text--center"},n.createElement("img",{src:"light"===r?a+".png":a+"-dark.png",className:b,alt:t})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,i)))}function k(){return n.createElement("section",{className:h},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},y.map(((e,t)=>n.createElement(v,(0,d.Z)({key:t},e)))))))}var N=a(6491),w=a(7524);class C extends n.Component{render(){return n.createElement("div",null,n.createElement("a",{style:{marginRight:"8px",marginBottom:"8px"},className:"button",href:this.props.href,target:this.props.target,icon:this.props.icon},n.createElement("img",{className:"icon",src:this.props.icon,height:"20px",width:"20px"}),this.props.children))}}function Z(){const{siteConfig:e}=(0,l.Z)();return n.createElement("header",{className:(0,s.Z)("hero hero--primary",o)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},n.createElement(f.Z,null,"An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir")),n.createElement("div",null,n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:"3rem",marginLeft:"3rem"},to:"/docs/get-started"},n.createElement(f.Z,null,"Get Started")),n.createElement("div",{className:c},n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/go-logo-1.svg"}),"Golang"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/jcasbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/jee-3.svg"}),"Java"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/casbin-cpp"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/c.svg"}),"C/C++"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/node-casbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/nodejs-1.svg"}),"Node.js"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/casbin.js"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/logo-javascript.svg"}),"Front-end js"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/php-casbin/php-casbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/PHP-logo.svg"}),"PHP"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/php-casbin/laravel-authz"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/laravel-2.svg"}),"Laravel"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/pycasbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/python-5.svg"}),"Python"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/Casbin.NET"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/dotnet-logo.svg"}),".Net (C#)"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin4d/Casbin4D"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/delphi-2.svg"}),"Delphi"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/casbin-rs"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/rust.svg"}),"Rust"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/CasbinRuby/casbin-ruby"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/ruby.svg"}),"Ruby"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/SwiftCasbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/swift-15.svg"}),"Swift (Objective-C)"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/lua-casbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/lua-5.svg"}),"Lua (OpenResty, Kong, APISIX)"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/dart-casbin"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/dart.svg"}),"Dart (Flutter)"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"https://github.com/casbin/casbin-ex"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/elixir-lang-icon.svg"}),"Elixir"),n.createElement(r.Z,{className:"button button--secondary button--lg",style:{marginTop:"1rem",marginRight:".5rem",marginLeft:".5rem",display:"flex"},to:"/docs/cloud-native"},n.createElement("img",{className:u,src:"https://cdn.casbin.org/language/kubernets.svg"}),"Cloud Native (Kubernetes, Istio, Envoy, KubeSphere)")))))}function x(){return n.createElement("div",{className:m},n.createElement("div",{className:"container text--center"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col",style:{marginBlock:"auto"}},n.createElement("h3",null," ",n.createElement(f.Z,null,"Policy Persistence")),n.createElement(f.Z,{values:{adaptersLink:n.createElement(r.Z,{to:"/docs/adapters"},n.createElement(f.Z,null,"adapters"))}},"In Casbin, the policy storage is implemented as an adapter(aka middleware for Casbin). To keep light-weight, we don't put adapter code in the main library (except the default file adapter). A complete list of Casbin adapters is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and I will put it in this list:) For details of adapters, please refer to the documentation: {adaptersLink}.")),n.createElement("div",{style:{marginInline:"auto"}},n.createElement("img",{src:"/img/store.png",alt:"Policy Persistence",width:"500",height:"500"})))))}function R(){return n.createElement("div",{className:g},n.createElement("div",{className:"container text--center"},n.createElement("div",{className:"row"},n.createElement("div",{style:{marginInline:"auto"}},n.createElement("img",{src:"/img/scale.png",alt:"Policy enforcement at scale",width:"500",height:"500"})),n.createElement("div",{className:"col",style:{marginBlock:"auto"}},n.createElement("h3",null,n.createElement(f.Z,null,"Policy enforcement at scale")),n.createElement(f.Z,null,"Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.")))))}function L(){return n.createElement("div",{className:p},n.createElement("div",{className:"container text--center"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col",style:{marginBlock:"auto"}},n.createElement("h3",null,n.createElement(f.Z,null,"Role manager")),n.createElement(f.Z,{values:{rolemanagersLink:n.createElement(r.Z,{to:"/docs/role-managers"},n.createElement(f.Z,null,"role-managers"))}},"The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. We support different implementations of a role manager. To keep light-weight, we don't put role manager code in the main library (except the default role manager). A complete list of Casbin role managers is provided as: {rolemanagersLink} .")),n.createElement("div",{style:{marginInline:"auto"}},n.createElement("img",{src:"/img/role.png",alt:"Role manager",width:"500",height:"500"})))))}function P(){return n.createElement("div",{className:"hero text--center showcase"},n.createElement("div",{className:"container"},n.createElement("h1",null,n.createElement(f.Z,null,"Who's using Casbin?")),n.createElement("p",{style:{width:"50vw",margin:"auto"}},n.createElement(f.Z,{values:{UsersPage:n.createElement(r.Z,{to:"/users"},n.createElement(f.Z,null,"check out these apps"))}},"Hundreds of projects are using Casbin, from established Fortune 500 companies to hot new startups.If you're curious to see what can be accomplished Casbin, {UsersPage}!")),n.createElement("br",null),n.createElement("br",null),n.createElement(N.Z,null)))}function A(){return"mobile"===(0,w.i)()?n.createElement("iframe",{title:"Sponsors",src:"https://opencollective.com/casbin/banner.html",style:{width:"100%",height:"1100px",display:"block"}}):n.createElement("iframe",{title:"Sponsors",src:"https://opencollective.com/casbin/banner.html",style:{width:"100%",height:"650px",display:"block"}})}function T(){return n.createElement(i.Z,{title:"Casbin \xb7 An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir",description:"An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir"},n.createElement(Z,null),n.createElement("main",null,n.createElement(k,null),n.createElement(x,null),n.createElement(R,null),n.createElement(L,null),n.createElement(P,null),n.createElement(A,null)))}C.defaultProps={target:"_self"}}}]);