"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9090],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?n.createElement(b,s(s({ref:a},i),{},{components:t})):n.createElement(b,s({ref:a},i))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9322:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const l={id:"get-started",title:"Commencer",description:"Getting started with Casbin",keywords:["Casbin","get started","installation","usage"],authors:["nodece"]},s=void 0,o={unversionedId:"get-started",id:"get-started",title:"Commencer",description:"Getting started with Casbin",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/GetStarted.mdx",sourceDirName:".",slug:"/get-started",permalink:"/fr/docs/get-started",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"get-started",title:"Commencer",description:"Getting started with Casbin",keywords:["Casbin","get started","installation","usage"],authors:["nodece"]},sidebar:"docs",previous:{title:"Aper\xe7u",permalink:"/fr/docs/overview"},next:{title:"Comment \xe7a marche",permalink:"/fr/docs/how-it-works"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Un nouveau responsable de Casbin",id:"un-nouveau-responsable-de-casbin",level:2},{value:"V\xe9rifier les autorisations",id:"v\xe9rifier-les-autorisations",level:3}],i=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},p=i("Tabs"),d=i("TabItem"),m={toc:c};function b(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"allez obtenir github.com/casbin/casbin/v2\n"))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"Pour Maven :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.casbin/jcasbin --\x3e\n<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>jcasbin</artifactId>\n    <version>1.x.y</version>\n</dependency>\n"))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install casbin --save\n\n# Yarn\nyarn add casbin\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("p",null,"Requiert ce package dans le ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," de votre projet. Ceci va t\xe9l\xe9charger le paquet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"compositeur ont besoin de casbin/casbin\n"))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install casbin\n"))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Casbin.NET\n"))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# t\xe9l\xe9charger la source\ngit clone https://github.com/casbin/casbin-cpp. il\n\n# g\xe9n\xe9rer des fichiers de projet\ncd casbin-cpp && mkdir build && cd build && cmake .. -DCMAKE_BUILD_TYPE=Release\n\n# build and install casbin\ncmake --build . --config Release --target casbin install -j 10\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-edit\ncargo add casbin\n\n// If you use async-std as async executor\ncargo add async-std\n\n// If you use tokio as async executor\ncargo add tokio // make sure you activate its `macros` feature\n"))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("p",null,"Casbin4D est disponible dans un paquet (actuellement pour Delphi 10.3 Rio) et vous pouvez l'installer dans l'IDE. Cependant, il n'y a pas de composants visuels ce qui signifie que vous pouvez utiliser les unit\xe9s ind\xe9pendamment des paquets. Il vous suffit d'importer les unit\xe9s de votre projet (en supposant que le nombre de ces unit\xe9s ne vous d\xe9range pas).")),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks installer casbin  \n")),(0,r.kt)("p",null,"Si erreur de rapport : votre utilisateur n'a pas les permissions d'\xe9criture dans /usr/local/lib/luarocks/rocks -- vous pouvez utiliser votre arborescence locale avec --local. vous pouvez ajouter --local derri\xe8re votre commande pour corriger :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks installe casbin --local\n")))),(0,r.kt)("h2",{id:"un-nouveau-responsable-de-casbin"},"Un nouveau responsable de Casbin"),(0,r.kt)("p",null,"Casbin utilise des fichiers de configuration pour d\xe9finir le mod\xe8le de contr\xf4le d'acc\xe8s."),(0,r.kt)("p",null,"Il a deux fichiers de configuration, ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv"),". Parmi eux, ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," stocke notre mod\xe8le d'acc\xe8s, et ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," stocke notre configuration sp\xe9cifique de permission d'utilisateur. L'utilisation de Casbin est tr\xe8s raffin\xe9e. Fondamentalement, nous avons juste besoin d'une structure principale : ",(0,r.kt)("strong",{parentName:"p"},"enforcecer"),". Lors de la construction de cette structure, ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," seront charg\xe9s."),(0,r.kt)("p",null,"En un autre mot, pour un nouvel agent de s\xe9curit\xe9 Casbin, vous devez fournir un ",(0,r.kt)("a",{parentName:"p",href:"supported-models"},"mod\xe8le")," et un ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"adaptateur"),"."),(0,r.kt)("p",null,"Casbin has a ",(0,r.kt)("a",{parentName:"p",href:"adapters#file-adapter-built-in"},"FileAdapter"),", see ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"Adapter")," for more information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utiliser le fichier mod\xe8le et la valeur par d\xe9faut ",(0,r.kt)("a",{parentName:"li",href:"adapters#file-adapter-built-in"},"FileAdapter"),":")),(0,r.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/casbin/casbin/v2"\n\ne, err := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.casbin.jcasbin.main.Enforcer;\n\nEnforcer e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newEnforcer } from 'casbin';\n\nconst e = await newEnforcer('path/to/model.conf', 'path/to/policy.csv');\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'require_once \'./vendor/autoload.php\';\n\nuse Casbin\\Enforcer;\n\n$e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\n\ne = casbin.Enforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using NetCasbin; \n\nvar e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <casbin/casbin.h>\n\nint main() {\n    // Cr\xe9er un moteur\n    casbin::Enforcer e("path/to/model.conf", "path/to/policy.csv");\n\n    // votre code ..\n}\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"var\n  casbin: ICasbin;\nbegin\n  casbin := TCasbin.Create('path/to/model.conf', 'path/to/policy.csv');\n  ...\nend\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use casbin::prelude::*;\n\n// If you use async_td as async executor\n#[cfg(feature = "runtime-async-std")]\n#[async_std::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n\n// If you use tokio as async executor\n#[cfg(feature = "runtime-tokio")]\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local Enforcer = require("casbin")\nlocal e = Enforcer:new("path/to/model.conf", "path/to/policy.csv") -- The Casbin Enforcer\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utiliser le texte du mod\xe8le avec un autre adaptateur:")),(0,r.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/casbin/v2/model"\n    xormadapter "github.com/casbin/xorm-adapter/v2"\n    _ "github.com/go-sql-driver/mysql"\n)\n\n// Initialise un adaptateur Xorm avec une base de donn\xe9es MySQL.\na, err := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0. :3306)/casbin")\nif err != nil {\n    log.Fatalf("error: adapter: %s", err)\n}\n\nm, err := model. ewModelFromString(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p. ft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p. bj && r.act == p.act\n`)\nif err != nil {\n    log. atalf("erreur: mod\xe8le : %s", err)\n}\n\ne, err := casbin. ewEnforcer(m, a)\nif err != nil {\n    log.Fatalf("error: enforcer: %s", err)\n}\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\nimport casbin_sqlalchemy_adapter\n\n\n# Utiliser l\'adaptateur SQLAlchemy Casbin avec SQLLite DB\nadaptateur = casbin_sqlalchemy_adapter. dapter(\'sqlite:///test.db\')\n\n# Cr\xe9ez une charte de mod\xe8le de configuration\navec open("rbac_example_model.conf", "w") comme f:\n    f. rite("""\n    [request_definition]\n    r = sub, obj, act\n\n    [policy_definition]\n    p = sub, obj, act\n\n    [policy_effect]\n    e = quelque part (o\xf9 (p. ft == allow))\n\n    [matchers]\n    m = r. ub == p.sub && r.obj == p.obj && r.act == p. ct\n    """)\n\n# Cr\xe9er un enforcer \xe0 partir de l\'adaptateur et de la politique de configuration\ne = casbin.Enforcer(\'rbac_example_model.conf\', adaptateur)\n')))),(0,r.kt)("h3",{id:"v\xe9rifier-les-autorisations"},"V\xe9rifier les autorisations"),(0,r.kt)("p",null,"Ajoutez un crochet d'application \xe0 votre code juste avant que l'acc\xe8s ne se produise :"),(0,r.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'sub := "alice" // l\'utilisateur qui veut acc\xe9der \xe0 une ressource.\nobj := "data1" // la ressource qui va \xeatre acc\xe9d\xe9e.\nact := "read" // l\'op\xe9ration que l\'utilisateur effectue sur la ressource.\n\nok, erreur := e. nforce(sub, obj, act)\n\nsi erreur! nil {\n    // handle err\n}\n\nif ok == true {\n    // autorise alice \xe0 lire les donn\xe9es 1\n} else {\n    // refuse la requ\xeate, affiche une erreur\n}\n\n// Vous pouvez utiliser BatchEnforce() pour imposer certaines requ\xeates en lots.\n// Cette m\xe9thode retourne une tranche de bool\xe9en, et l\'index de cette tranche correspond \xe0 l\'index de ligne du tableau en deux dimensions.\n// par exemple les r\xe9sultats[0] sont le r\xe9sultat de {"alice", "data1", "read"}\nr\xe9sultats, erreur:= e.BatchEnforce([][]interface{}{{"alice", "data1", "read"}, {"bob", "data2", "write"}, {"jack", "data3", "read"}})\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String sub = "alice"; // l\'utilisateur qui veut acc\xe9der \xe0 une ressource.\nString obj = "data1"; // la ressource qui va \xeatre acc\xe9d\xe9e.\nString act = "read"; // l\'op\xe9ration que l\'utilisateur effectue sur la ressource.\n\nif (e. nforce(sub, obj, act) == true) {\n    // autorise alice \xe0 lire les donn\xe9es1\n} else {\n    // refuse la requ\xeate, afficher une erreur\n}\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sub = 'alice'; // l'utilisateur qui veut acc\xe9der \xe0 une ressource.\nconst obj = 'data1'; // la ressource qui va \xeatre acc\xe9d\xe9e.\nconst act = 'read'; // l'op\xe9ration que l'utilisateur effectue sur la ressource.\n\nif (attendez e. nforce(sub, obj, act)) === true) {\n    // autorise alice \xe0 lire les donn\xe9es1\n} else {\n    // refuse la requ\xeate, afficher une erreur\n}\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$sub = "alice"; // l\'utilisateur qui veut acc\xe9der \xe0 une ressource.\n$obj = "data1"; // la ressource qui va \xeatre acc\xe9d\xe9e.\n$act = "read"; // l\'op\xe9ration que l\'utilisateur effectue sur la ressource.\n\nif ($e->enforce($sub, $obj, $act) === true) {\n    // autorise alice \xe0 lire les donn\xe9es 1\n} else {\n    // refuse la requ\xeate, afficher une erreur\n}\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'sub = "alice" # l\'utilisateur qui veut acc\xe9der \xe0 une ressource.\nobj = "data1" # la ressource qui va \xeatre acc\xe9d\xe9e.\nact = "read" # l\'op\xe9ration que l\'utilisateur effectue sur la ressource.\n\nif e.enforce(sub, obj, act):\n    # permet alice de lire les donn\xe9es1\n    passe\nelse:\n    # refuse la requ\xeate, affiche une erreur\n    passe\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var sub = "alice"; # l\'utilisateur qui veut acc\xe9der \xe0 une ressource.\nvar obj = "data1"; # la ressource qui va \xeatre acc\xe9d\xe9e.\nvar act = "read"; # l\'op\xe9ration que l\'utilisateur effectue sur la ressource.\n\nif (attendre e. nforceAsync(sub, obj, act)) \n{\n    // autorise alice \xe0 lire les donn\xe9es 1\n}\nelse\n{\n    // refuse la requ\xeate, afficher une erreur\n}\n'))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    casbin::Enforcer e("../assets/model.conf", "../assets/policy.csv");\n\n    if (e. nforce({"alice", "/alice_data/bonjour", "GET"})) {\n        std::cout << "Forcer OK" << std::endl;\n    } else {\n        std::cout << "Force NOT Good" << std::endl;\n    }\n\n    if (e. nforce({"alice", "/alice_data/bonjour", "POST"})) {\n        std::cout << "Forcer OK" << std::endl;\n    } else {\n        std::cout << "Force NOT Good" << std::endl;\n}\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"if casbin.enforce(['alice,data1,read']) then\n  // Alice est super heureuse car elle peut lire les donn\xe9es1\nelse\n  // Alice est triste\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'  let sub = "alice"; // l\'utilisateur qui veut acc\xe9der \xe0 une ressource.\n  let obj = "data1"; // la ressource qui va \xeatre acc\xe9d\xe9e.\n  let act = "read"; // l\'op\xe9ration que l\'utilisateur effectue sur la ressource.\n\n  if e.enforce(sub, obj, act)).await? {\n      // autorise alice \xe0 lire les donn\xe9es1\n  } else {\n      // erreur survient\n}\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'if e:enforce("alice", "data1", "read") then\n   -- allow alice to read data1\nelse\n   -- deny the request, show an error\nend\n\n')))),(0,r.kt)("p",null,"Casbin fournit \xe9galement une API pour la gestion des permissions \xe0 l'ex\xe9cution. Par exemple, vous pouvez obtenir tous les r\xf4les assign\xe9s \xe0 un utilisateur comme ci-dessous:"),(0,r.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := e.GetRolesForUser("alice")\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Roles roles = e.getRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const roles = await e.getRolesForUser('alice');\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$roles = $e->getRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'roles = e.get_roles_for_user("alice")\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var roles = e.GetRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},'roles = e.rolesForEntity("alice")\n'))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let roles = e.get_roles_for_user("alice");\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local roles = e:GetRolesForUser("alice")\n')))),(0,r.kt)("p",null,"Voir ",(0,r.kt)("a",{parentName:"p",href:"/docs/management-api"},"Management API")," et ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"RBAC API")," pour plus d'utilisation."),(0,r.kt)("p",null,"Veuillez vous r\xe9f\xe9rer aux cas de test pour plus d'usage."))}b.isMDXComponent=!0}}]);