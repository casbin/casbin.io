"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[623],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(a),u=r,b=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(b,o(o({ref:e},d),{},{components:a})):n.createElement(b,o({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7825:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={id:"adopters",title:"Casbin \uc801\uc6a9 \uc0ac\ub840",description:"Casbin' Adopters",keywords:["adopter","showcase"]},p=void 0,m={unversionedId:"adopters",id:"adopters",title:"Casbin \uc801\uc6a9 \uc0ac\ub840",description:"Casbin' Adopters",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Adopters.mdx",sourceDirName:".",slug:"/adopters",permalink:"/ko/docs/adopters",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Adopters.mdx",tags:[],version:"current",frontMatter:{id:"adopters",title:"Casbin \uc801\uc6a9 \uc0ac\ub840",description:"Casbin' Adopters",keywords:["adopter","showcase"]},sidebar:"docs",previous:{title:"IDE Plugins",permalink:"/ko/docs/ide-plugins"},next:{title:"Contributing",permalink:"/ko/docs/contributing"}},d={},c=[{value:"Direct integration",id:"direct-integration",level:2},{value:"Integration via plugin",id:"integration-via-plugin",level:2}],s=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},u=s("Tabs"),b=s("TabItem"),g={toc:c};function h(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"direct-integration"},"Direct integration"),(0,l.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"\ubaa8\ub378"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/goharbor/harbor"},"VMware Harbor")),(0,l.kt)("td",{parentName:"tr",align:null},"VMware's open source trusted cloud native registry project that stores, signs, and scans content."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/goharbor/harbor/blob/master/src/pkg/permission/evaluator/rbac/casbin.go#L24-L44"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/goharbor/harbor/blob/master/src/replication/dao/policy.go#L24-L26"},"Beego ORM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/intel/rmd"},"Intel RMD")),(0,l.kt)("td",{parentName:"tr",align:null},"Intel's resource management daemon."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vmware/dispatch"},"VMware Dispatch")),(0,l.kt)("td",{parentName:"tr",align:null},"A framework for deploying and managing serverless style applications."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers.go#L46-L55"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers_test.go#L35-L45"},"Code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/skydive-project/skydive"},"Skydive")),(0,l.kt)("td",{parentName:"tr",align:null},"An open source real-time network topology and protocols analyzer."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/skydive-project/skydive/blob/master/config/config.go#L136-L140"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/skydive-project/skydive/blob/master/rbac/policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/insionng/zenpress"},"Zenpress")),(0,l.kt)("td",{parentName:"tr",align:null},"A CMS system written in Golang."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/insionng/zenpress/blob/master/content/config/rbac_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/insionng/zenpress/blob/master/model/user.go#L53-L77"},"Gorm"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/argoproj/argo-cd"},"Argo CD")),(0,l.kt)("td",{parentName:"tr",align:null},"GitOps continuous delivery for Kubernetes."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/argoproj/argo-cd/blob/master/util/rbac/model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/argoproj/argo-cd/blob/master/util/rbac/builtin-policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/muxiyun/Mae"},"Muxi Cloud")),(0,l.kt)("td",{parentName:"tr",align:null},"PaaS of Muxi Cloud, an easier way to manage Kubernetes cluster."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/muxiyun/Mae/blob/master/conf/casbinmodel.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/muxiyun/Mae/blob/master/pkg/casbin/initPolicy.go#L21-L95"},"Code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3xxx/EngineerCMS"},"EngineerCMS")),(0,l.kt)("td",{parentName:"tr",align:null},"A CMS to manage knowledge for engineers."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3xxx/EngineerCMS/blob/master/conf/rbac_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3xxx/EngineerCMS/blob/master/database/engineer.db"},"SQLite"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CyberlifeCN/cyber-auth-api"},"Cyber Auth API")),(0,l.kt)("td",{parentName:"tr",align:null},"A Golang authentication API project."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/irisnet/iris-community"},"IRIS Community")),(0,l.kt)("td",{parentName:"tr",align:null},"Website for IRIS Community Activities."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/irisnet/iris-community/blob/master/authz/authz_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/irisnet/iris-community/blob/master/authz/authz_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Bnei-Baruch/mdb"},"Metadata DB")),(0,l.kt)("td",{parentName:"tr",align:null},"BB archive metadata database."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ProtocolONE/qilin.api"},"Qilin API")),(0,l.kt)("td",{parentName:"tr",align:null},"ProtocolONE's licenses managemen tool for game content."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ProtocolONE/rbac/blob/master/model.go"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ProtocolONE/rbac/tree/master/conf"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/devtron-labs/devtron"},"Devtron Labs")),(0,l.kt)("td",{parentName:"tr",align:null},"Software Delivery Workflow For Kubernetes."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/devtron-labs/devtron/blob/main/auth_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/devtron-labs/devtron/blob/main/internal/casbin/Adapter.go"},"Xorm")))))),(0,l.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"\ubaa8\ub378"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/PantheonTechnologies/lighty-core"},"lighty.io")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenDaylight's solution for SDN controller."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/PantheonTechnologies/lighty-core/blob/6f2ceaae6a68e08c96d14d2fa8ee060ad9f61606/lighty-examples/lighty-controller-springboot-netconf/README.md#security"},"README")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"))))),(0,l.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"\ubaa8\ub378"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/notadd/notadd"},"Notadd")),(0,l.kt)("td",{parentName:"tr",align:null},"A micro-service development architecture based on Nest.js."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/notadd/notadd/blob/e58d0a0cf5d691c3fe20170e94cdd8e2c627abd4/apps/nest-upms/src/casbin/rbac_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/notadd/notadd/blob/e58d0a0cf5d691c3fe20170e94cdd8e2c627abd4/apps/nest-upms/src/casbin/adapter.ts"},"DB adapter")))))),(0,l.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"\ubaa8\ub378"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/EduScaled/dtrace"},"dtrace")),(0,l.kt)("td",{parentName:"tr",align:null},"EduScaled's tracing system."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/EduScaled/dtrace/commit/6e8d6b52ec2fa120e8ad63f84a4aecc3eae14c02"},"Commit")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,l.kt)("h2",{id:"integration-via-plugin"},"Integration via plugin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,l.kt)("th",{parentName:"tr",align:null},"\ubaa8\ub378"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/docker/docker"},"Docker")),(0,l.kt)("td",{parentName:"tr",align:null},"The world's leading software container platform"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-authz-plugin"},"casbin-authz-plugin")," (",(0,l.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/extend/legacy_plugins/#authorization-plugins"},"recommended by Docker"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-authz-plugin/blob/master/examples/basic_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-authz-plugin/blob/master/examples/basic_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis"},"Gobis")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry"},"Orange"),"'s lightweight API Gateway written in go"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis-middlewares/tree/master/casbin"},"casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/model.go#L52-L65"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/adapter.go#L46-L64"},"Request"))))))}h.isMDXComponent=!0}}]);