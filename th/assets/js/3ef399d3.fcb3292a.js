"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5747],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(b,o(o({ref:a},i),{},{components:t})):n.createElement(b,o({ref:a},i))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},463:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={id:"get-started",title:"Get Started",description:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a Casbin",keywords:["Casbin","get started","installation","usage"],authors:["nodece"]},o=void 0,s={unversionedId:"get-started",id:"get-started",title:"Get Started",description:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a Casbin",source:"@site/i18n/th/docusaurus-plugin-content-docs/current/GetStarted.mdx",sourceDirName:".",slug:"/get-started",permalink:"/th/docs/get-started",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GetStarted.mdx",tags:[],version:"current",frontMatter:{id:"get-started",title:"Get Started",description:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a Casbin",keywords:["Casbin","get started","installation","usage"],authors:["nodece"]},sidebar:"docs",previous:{title:"Overview",permalink:"/th/docs/overview"},next:{title:"How It Works",permalink:"/th/docs/how-it-works"}},c={},p=[{value:"\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07",id:"\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07",level:2},{value:"\u0e2a\u0e23\u0e49\u0e32\u0e07 Casbin enforcer \u0e43\u0e2b\u0e21\u0e48",id:"\u0e2a\u0e23\u0e49\u0e32\u0e07-casbin-enforcer-\u0e43\u0e2b\u0e21\u0e48",level:2},{value:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c",id:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c",level:3}],i=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},u=i("Tabs"),d=i("TabItem"),m={toc:p};function b(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07"},"\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/casbin/casbin/v2\n"))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Maven:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.casbin/jcasbin --\x3e\n<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>jcasbin</artifactId>\n    <version>1.x.y</version>\n</dependency>\n"))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install casbin --save\n\n# Yarn\nyarn add casbin\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("p",null,"\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e47\u0e04\u0e40\u0e01\u0e08\u0e19\u0e35\u0e49\u0e43\u0e19\u0e44\u0e1f\u0e25\u0e4c ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," \u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e41\u0e1e\u0e47\u0e04\u0e40\u0e01\u0e08:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require casbin/casbin\n"))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install casbin\n"))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Casbin.NET\n"))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Download source\ngit clone https://github.com/casbin/casbin-cpp.git\n\n# Generate project files\ncd casbin-cpp && mkdir build && cd build && cmake .. -DCMAKE_BUILD_TYPE=Release\n\n# Build and install casbin\ncmake --build . --config Release --target casbin install -j 10\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-edit\ncargo add casbin\n\n// If you use async-std as async executor\ncargo add async-std\n\n// If you use tokio as async executor, make sure you activate its `macros` feature\ncargo add tokio\n"))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("p",null,"Casbin4D \u0e21\u0e32\u0e43\u0e19\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e41\u0e1e\u0e47\u0e04\u0e40\u0e01\u0e08 (\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Delphi 10.3 Rio) \u0e41\u0e25\u0e30\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07\u0e44\u0e14\u0e49\u0e43\u0e19 IDE. \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e15\u0e32\u0e21 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e17\u0e32\u0e07\u0e20\u0e32\u0e1e \u0e0b\u0e36\u0e48\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e22\u0e39\u0e19\u0e34\u0e15\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2d\u0e34\u0e2a\u0e23\u0e30\u0e08\u0e32\u0e01\u0e41\u0e1e\u0e47\u0e04\u0e40\u0e01\u0e08 \u0e40\u0e1e\u0e35\u0e22\u0e07\u0e19\u0e33\u0e40\u0e02\u0e49\u0e32\u0e22\u0e39\u0e19\u0e34\u0e15\u0e43\u0e19\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 (\u0e42\u0e14\u0e22\u0e2a\u0e21\u0e21\u0e15\u0e34\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e23\u0e31\u0e07\u0e40\u0e01\u0e35\u0e22\u0e08\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32)")),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks install casbin  \n")),(0,r.kt)("p",null,'\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e41\u0e2a\u0e14\u0e07\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14: "Your user does not have write permissions in /usr/local/lib/luarocks/rocks", \u0e04\u0e38\u0e13\u0e2d\u0e32\u0e08\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e14\u0e49\u0e27\u0e22\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e0a\u0e49\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e14\u0e49\u0e27\u0e22 ',(0,r.kt)("inlineCode",{parentName:"p"},"--local"),". \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1e\u0e34\u0e48\u0e21 ",(0,r.kt)("inlineCode",{parentName:"p"},"--local")," \u0e44\u0e27\u0e49\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e07\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e0a\u0e48\u0e19\u0e19\u0e35\u0e49:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks install casbin --local\n")))),(0,r.kt)("h2",{id:"\u0e2a\u0e23\u0e49\u0e32\u0e07-casbin-enforcer-\u0e43\u0e2b\u0e21\u0e48"},"\u0e2a\u0e23\u0e49\u0e32\u0e07 Casbin enforcer \u0e43\u0e2b\u0e21\u0e48"),(0,r.kt)("p",null,"Casbin \u0e43\u0e0a\u0e49\u0e44\u0e1f\u0e25\u0e4c\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e42\u0e21\u0e40\u0e14\u0e25\u0e01\u0e32\u0e23\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07"),(0,r.kt)("p",null,"\u0e21\u0e35\u0e44\u0e1f\u0e25\u0e4c\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e2a\u0e2d\u0e07\u0e44\u0e1f\u0e25\u0e4c: ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," \u0e40\u0e01\u0e47\u0e1a\u0e42\u0e21\u0e40\u0e14\u0e25\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07 \u0e02\u0e13\u0e30\u0e17\u0e35\u0e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u0e40\u0e01\u0e47\u0e1a\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30 \u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 Casbin \u0e19\u0e31\u0e49\u0e19\u0e07\u0e48\u0e32\u0e22\u0e21\u0e32\u0e01 \u0e40\u0e23\u0e32\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e01\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27: ",(0,r.kt)("strong",{parentName:"p"},"enforcer"),". \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e19\u0e35\u0e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," \u0e41\u0e25\u0e30 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u0e08\u0e30\u0e16\u0e39\u0e01\u0e42\u0e2b\u0e25\u0e14"),(0,r.kt)("p",null,"\u0e01\u0e25\u0e48\u0e32\u0e27\u0e2d\u0e35\u0e01\u0e19\u0e31\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Casbin enforcer \u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49\u0e21\u0e35 ",(0,r.kt)("a",{parentName:"p",href:"supported-models"},"Model")," \u0e41\u0e25\u0e30 ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"Adapter"),"."),(0,r.kt)("p",null,"Casbin \u0e21\u0e35 ",(0,r.kt)("a",{parentName:"p",href:"adapters#file-adapter-built-in"},"FileAdapter")," \u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49 \u0e14\u0e39 ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"Adapter")," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e44\u0e1f\u0e25\u0e4c Model \u0e41\u0e25\u0e30 ",(0,r.kt)("a",{parentName:"li",href:"adapters#file-adapter-built-in"},"FileAdapter")," \u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e48\u0e32\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19:")),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/casbin/casbin/v2"\n\ne, err := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.casbin.jcasbin.main.Enforcer;\n\nEnforcer e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newEnforcer } from 'casbin';\n\nconst e = await newEnforcer('path/to/model.conf', 'path/to/policy.csv');\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'require_once \'./vendor/autoload.php\';\n\nuse Casbin\\Enforcer;\n\n$e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\n\ne = casbin.Enforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using NetCasbin; \n\nvar e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <casbin/casbin.h>\n\nint main() {\n    // Create an Enforcer\n    casbin::Enforcer e("path/to/model.conf", "path/to/policy.csv");\n\n    // your code ..\n}\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"var\n  casbin: ICasbin;\nbegin\n  casbin := TCasbin.Create('path/to/model.conf', 'path/to/policy.csv');\n  ...\nend\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use casbin::prelude::*;\n\n// If you use async_td as async executor\n#[cfg(feature = "runtime-async-std")]\n#[async_std::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n\n// If you use tokio as async executor\n#[cfg(feature = "runtime-tokio")]\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local Enforcer = require("casbin")\nlocal e = Enforcer:new("path/to/model.conf", "path/to/policy.csv") -- The Casbin Enforcer\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0e43\u0e0a\u0e49\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 Model \u0e01\u0e31\u0e1a Adapter \u0e2d\u0e37\u0e48\u0e19:")),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    xormadapter "github.com/casbin/xorm-adapter/v2"\n    _ "github.com/go-sql-driver/mysql"\n)\n\n// Initialize a Xorm adapter with MySQL database.\na, err := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0.1:3306)/")\nif err != nil {\n    log.Fatalf("error: adapter: %s", err)\n}\n\nm, err := model.NewModelFromString(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n`)\nif err != nil {\n    log.Fatalf("error: model: %s", err)\n}\n\ne, err := casbin.NewEnforcer(m, a)\nif err != nil {\n    log.Fatalf("error: enforcer: %s", err)\n}\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\nimport casbin_sqlalchemy_adapter\n\n\n# Use SQLAlchemy Casbin adapter with SQLLite DB\nadapter = casbin_sqlalchemy_adapter.Adapter(\'sqlite:///test.db\')\n\n# Create a config model policy\nwith open("rbac_example_model.conf", "w") as f:\n    f.write("""\n    [request_definition]\n    r = sub, obj, act\n\n    [policy_definition]\n    p = sub, obj, act\n\n    [policy_effect]\n    e = some(where (p.eft == allow))\n\n    [matchers]\n    m = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n    """)\n\n# Create enforcer from adapter and config policy\ne = casbin.Enforcer(\'rbac_example_model.conf\', adapter)\n')))),(0,r.kt)("h3",{id:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c"},"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c"),(0,r.kt)("p",null,"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e15\u0e30\u0e02\u0e2d\u0e01\u0e32\u0e23\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e43\u0e0a\u0e49\u0e25\u0e07\u0e43\u0e19\u0e42\u0e04\u0e49\u0e14\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e01\u0e48\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19:"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'sub := "alice" // the user that wants to access a resource.\nobj := "data1" // the resource that is going to be accessed.\nact := "read" // the operation that the user performs on the resource.\n\nok, err := e.Enforce(sub, obj, act)\n\nif err != nil {\n    // handle err\n}\n\nif ok == true {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n\n// You could use BatchEnforce() to enforce some requests in batches.\n// This method returns a bool slice, and this slice\'s index corresponds to the row index of the two-dimensional array.\n// e.g. results[0] is the result of {"alice", "data1", "read"}\nresults, err := e.BatchEnforce([][]interface{}{{"alice", "data1", "read"}, {"bob", "data2", "write"}, {"jack", "data3", "read"}})\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String sub = "alice"; // the user that wants to access a resource.\nString obj = "data1"; // the resource that is going to be accessed.\nString act = "read"; // the operation that the user performs on the resource.\n\nif (e.enforce(sub, obj, act) == true) {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sub = 'alice'; // the user that wants to access a resource.\nconst obj = 'data1'; // the resource that is going to be accessed.\nconst act = 'read'; // the operation that the user performs on the resource.\n\nif ((await e.enforce(sub, obj, act)) === true) {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$sub = "alice"; // the user that wants to access a resource.\n$obj = "data1"; // the resource that is going to be accessed.\n$act = "read"; // the operation that the user performs on the resource.\n\nif ($e->enforce($sub, $obj, $act) === true) {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'sub = "alice"  # the user that wants to access a resource.\nobj = "data1"  # the resource that is going to be accessed.\nact = "read"  # the operation that the user performs on the resource.\n\nif e.enforce(sub, obj, act):\n    # permit alice to read data1\n    pass\nelse:\n    # deny the request, show an error\n    pass\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var sub = "alice";  # the user that wants to access a resource.\nvar obj = "data1";  # the resource that is going to be accessed.\nvar act = "read";  # the operation that the user performs on the resource.\n\nif (await e.EnforceAsync(sub, obj, act)) \n{\n    // permit alice to read data1\n}\nelse\n{\n    // deny the request, show an error\n}\n'))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    casbin::Enforcer e("../assets/model.conf", "../assets/policy.csv");\n\n    if (e.Enforce({"alice", "/alice_data/hello", "GET"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n\n    if (e.Enforce({"alice", "/alice_data/hello", "POST"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"if casbin.enforce(['alice,data1,read']) then\n  // Alice is super happy as she can read data1\nelse\n  // Alice is sad\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'  let sub = "alice"; // the user that wants to access a resource.\n  let obj = "data1"; // the resource that is going to be accessed.\n  let act = "read"; // the operation that the user performs on the resource.\n\n  if e.enforce((sub, obj, act)).await? {\n      // permit alice to read data1\n  } else {\n      // error occurs\n  }\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'if e:enforce("alice", "data1", "read") then\n   -- permit alice to read data1\nelse\n   -- deny the request, show an error\nend\n\n')))),(0,r.kt)("p",null,"Casbin \u0e22\u0e31\u0e07\u0e21\u0e35 API \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e43\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48\u0e23\u0e31\u0e19\u0e44\u0e17\u0e21\u0e4c \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e0a\u0e48\u0e19 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e23\u0e31\u0e1a\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e21\u0e2d\u0e1a\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49:"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := e.GetRolesForUser("alice")\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<String> roles = e.getRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const roles = await e.getRolesForUser('alice');\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$roles = $e->getRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'roles = e.get_roles_for_user("alice")\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var roles = e.GetRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},'roles = e.rolesForEntity("alice")\n'))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let roles = e.get_roles_for_user("alice");\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local roles = e:GetRolesForUser("alice")\n')))),(0,r.kt)("p",null,"\u0e14\u0e39 ",(0,r.kt)("a",{parentName:"p",href:"/docs/management-api"},"Management API")," \u0e41\u0e25\u0e30 ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"RBAC API")," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21"),(0,r.kt)("p",null,"\u0e42\u0e1b\u0e23\u0e14\u0e14\u0e39\u0e17\u0e35\u0e48\u0e01\u0e23\u0e13\u0e35\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21"))}b.isMDXComponent=!0}}]);