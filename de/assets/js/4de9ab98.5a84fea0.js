"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6070],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return t?i.createElement(m,a(a({ref:n},s),{},{components:t})):i.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7922:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=t(3117),r=t(102),o=(t(7294),t(3905)),a=["components"],l={id:"policy-subset-loading",title:"Richtlinien-Untermengenladen",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},c=void 0,d={unversionedId:"policy-subset-loading",id:"policy-subset-loading",title:"Richtlinien-Untermengenladen",description:"Loading filtered policy",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/PolicySubsetLoading.mdx",sourceDirName:".",slug:"/policy-subset-loading",permalink:"/de/docs/policy-subset-loading",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"policy-subset-loading",title:"Richtlinien-Untermengenladen",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},sidebar:"docs",previous:{title:"Richtlinien-Speicher",permalink:"/de/docs/policy-storage"},next:{title:"Enforcers",permalink:"/de/docs/enforcers"}},s={},p=[],u={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Einige Adapter unterst\xfctzen gefiltertes Richtlinien-Management. Dies bedeutet, dass die von Casbin geladene Richtlinie eine Teilmenge der Richtlinie im Speicher ist, die auf einem bestimmten Filter basiert. Dies erm\xf6glicht eine effiziente Durchsetzung der Richtlinien in gro\xdfen, mehrk\xf6pfigen Umgebungen, wenn das Parsen der gesamten Politik zu einem Leistungsengp\xe4ck wird."),(0,o.kt)("p",null,"Um gefilterte Richtlinien mit einem unterst\xfctzten Adapter zu verwenden, rufen Sie einfach die ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadFilteredPolicy")," Methode auf. Das g\xfcltige Format f\xfcr den Filterparameter h\xe4ngt vom verwendeten Adapter ab. Um unbeabsichtigten Datenverlust zu verhindern, ist die Methode ",(0,o.kt)("inlineCode",{parentName:"p"},"SavePolicy")," deaktiviert, wenn eine gefilterte Richtlinie geladen wird."),(0,o.kt)("p",null,"Zum Beispiel verwendet das folgende Code-Snippet den eingebauten gefilterten Datei-Adapter und das RBAC-Modell mit Dom\xe4nen. In diesem Fall beschr\xe4nkt der Filter die Richtlinie auf eine einzige Dom\xe4ne. Alle Richtlinien-Zeilen f\xfcr andere Domains als ",(0,o.kt)("inlineCode",{parentName:"p"},'"domain1"')," werden in der geladenen Richtlinie weggelassen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    fileadapter "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\nenforcer, _ := casbin.NewEnforcer()\n\nadapter := fileadapter.NewFilteredAdapter("examples/rbac_with_domains_policy.csv")\nenforcer.InitWithAdapter("examples/rbac_with_domains_model.conf", adapter)\n\nfilter := &fileadapter.Filter{\n    P: []string{"", "domain1"},\n    G: []string{"", "", "domain1"},\n}\nenforcer.LoadFilteredPolicy(filter)\n\n// The loaded policy now only contains the entries pertaining to "domain1".\n')),(0,o.kt)("p",null,"Es gibt eine andere Methode, die das Laden von Untermen\xfcs unterst\xfctzt: ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy")," ist \xe4hnlich wie LoadFilteredPolicy, aber es l\xf6scht keine vorherige geladene Richtlinie, sondern nur angeh\xe4ngt."))}f.isMDXComponent=!0}}]);