"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9113],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,b=p["".concat(d,".").concat(f)]||p[f]||l[f]||o;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9573:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],s={id:"online-editor",title:"Online-Editor",description:"Writing Casbin model and policy in web browser",keywords:["online editor","Casbin editor"]},d=void 0,c={unversionedId:"online-editor",id:"online-editor",title:"Online-Editor",description:"Writing Casbin model and policy in web browser",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/OnlineEditor.mdx",sourceDirName:".",slug:"/online-editor",permalink:"/de/docs/online-editor",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"online-editor",title:"Online-Editor",description:"Writing Casbin model and policy in web browser",keywords:["online editor","Casbin editor"]},sidebar:"docs",previous:{title:"Frontend-Nutzung",permalink:"/de/docs/frontend"},next:{title:"IDE-Plugins",permalink:"/de/docs/ide-plugins"}},u={},l=[{value:"Muster verwenden",id:"muster-verwenden",level:2}],p={toc:l};function f(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sie k\xf6nnen auch den Online-Editor (",(0,o.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"https://casbin.io/editor/"),") verwenden, um Ihr Casbin-Modell und Ihre Richtlinien in Ihrem Webbrowser zu schreiben. Es bietet Funktionen wie ",(0,o.kt)("inlineCode",{parentName:"p"},"Syntaxhervorhebung")," und ",(0,o.kt)("inlineCode",{parentName:"p"},"Code-Vervollst\xe4ndigung"),"wie eine IDE f\xfcr eine Programmiersprache."),(0,o.kt)("h2",{id:"muster-verwenden"},"Muster verwenden"),(0,o.kt)("p",null,"Wenn Sie ",(0,o.kt)("inlineCode",{parentName:"p"},"RBAC mit Muster")," oder ",(0,o.kt)("inlineCode",{parentName:"p"},"RBAC mit allem Muster verwenden"),", es gibt die Funktion Muster \xdcbereinstimmung in der unteren linken Ecke an."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"editor-tips",src:t(9523).Z,width:"480",height:"272"}),"."),(0,o.kt)("p",null,"Wenn Sie den entsprechenden Code schreiben wollen, m\xfcssen Sie \xfcber die entsprechende api die Funktion Muster passen. Siehe ",(0,o.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC mit Muster")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Der Editor basiert auf ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-casbin"),". Aufgrund der Verz\xf6gerung der Synchronisierung zwischen verschiedenen Sprachen des Kasbin, das Authentifizierungsergebnis des ",(0,o.kt)("inlineCode",{parentName:"p"},"Editors")," kann sich vom Authentifizierungsergebnis des von Ihnen verwendeten Casbin unterscheiden. Wenn ja, dann senden Sie bitte Probleme in das Kasbin-Repository, das Sie verwenden.")))}f.isMDXComponent=!0},9523:function(e,n,t){n.Z=t.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);