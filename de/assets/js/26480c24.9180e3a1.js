"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2790],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?t.createElement(b,o(o({ref:a},p),{},{components:n})):t.createElement(b,o({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3356:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=n(7462),r=(n(7294),n(3905));const l={id:"get-started",title:"Get Started",description:"Erste Schritte mit Casbin",keywords:["Casbin","get started","installation","usage"],authors:["nodece"]},o=void 0,s={unversionedId:"get-started",id:"get-started",title:"Get Started",description:"Erste Schritte mit Casbin",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/GetStarted.mdx",sourceDirName:".",slug:"/get-started",permalink:"/de/docs/get-started",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GetStarted.mdx",tags:[],version:"current",frontMatter:{id:"get-started",title:"Get Started",description:"Erste Schritte mit Casbin",keywords:["Casbin","get started","installation","usage"],authors:["nodece"]},sidebar:"docs",previous:{title:"Overview",permalink:"/de/docs/overview"},next:{title:"How It Works",permalink:"/de/docs/how-it-works"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Neuen Casbin Enforcer erstellen",id:"neuen-casbin-enforcer-erstellen",level:2},{value:"Berechtigungen pr\xfcfen",id:"berechtigungen-pr\xfcfen",level:3}],p=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},u=p("Tabs"),d=p("TabItem"),m={toc:c};function b(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/casbin/casbin/v2\n"))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"F\xfcr Maven:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.casbin/jcasbin --\x3e\n<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>jcasbin</artifactId>\n    <version>1.x.y</version>\n</dependency>\n"))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install casbin --save\n\n# Yarn\nyarn add casbin\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("p",null,"F\xfcgen Sie dieses Paket in die ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," Ihres Projekts ein, um das Paket herunterzuladen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require casbin/casbin\n"))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install casbin\n"))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Casbin.NET\n"))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Download source\ngit clone https://github.com/casbin/casbin-cpp.git\n\n# Generate project files\ncd casbin-cpp && mkdir build && cd build && cmake .. -DCMAKE_BUILD_TYPE=Release\n\n# Build and install casbin\ncmake --build . --config Release --target casbin install -j 10\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-edit\ncargo add casbin\n\n// If you use async-std as async executor\ncargo add async-std\n\n// If you use tokio as async executor, make sure you activate its `macros` feature\ncargo add tokio\n"))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("p",null,"Casbin4D kommt in einem Paket (derzeit f\xfcr Delphi 10.3 Rio) und Sie k\xf6nnen es in der IDE installieren. Es gibt jedoch keine visuellen Komponenten, was bedeutet, dass Sie die Einheiten unabh\xe4ngig von Paketen verwenden k\xf6nnen. Importieren Sie einfach die Einheiten in Ihr Projekt (vorausgesetzt, Sie haben nichts gegen die Anzahl von ihnen).")),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks install casbin  \n")),(0,r.kt)("p",null,'Wenn Sie eine Fehlermeldung erhalten: "Ihr Benutzer hat keine Schreibberechtigungen in /usr/local/lib/luarocks/rocks", m\xf6chten Sie m\xf6glicherweise den Befehl als privilegierter Benutzer ausf\xfchren oder Ihren lokalen Baum mit ',(0,r.kt)("inlineCode",{parentName:"p"},"--local")," verwenden. Um den Fehler zu beheben, k\xf6nnen Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"--local")," hinter Ihren Befehl wie folgt hinzuf\xfcgen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks install casbin --local\n")))),(0,r.kt)("h2",{id:"neuen-casbin-enforcer-erstellen"},"Neuen Casbin Enforcer erstellen"),(0,r.kt)("p",null,"Casbin verwendet Konfigurationsdateien, um das Zugriffskontrollmodell zu definieren."),(0,r.kt)("p",null,"Es gibt zwei Konfigurationsdateien: ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," speichert das Zugriffsmodell, w\xe4hrend ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," die spezifische Benutzerberechtigungskonfiguration speichert. Die Verwendung von Casbin ist sehr einfach. Wir m\xfcssen nur eine Hauptstruktur erstellen: ",(0,r.kt)("strong",{parentName:"p"},"Enforcer"),". Beim Erstellen dieser Struktur werden ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," geladen."),(0,r.kt)("p",null,"Mit anderen Worten, um einen Casbin Enforcer zu erstellen, m\xfcssen Sie ein ",(0,r.kt)("a",{parentName:"p",href:"supported-models"},"Model")," und einen ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"Adapter")," bereitstellen."),(0,r.kt)("p",null,"Casbin bietet einen ",(0,r.kt)("a",{parentName:"p",href:"adapters#file-adapter-built-in"},"FileAdapter"),", den Sie verwenden k\xf6nnen. Siehe ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"Adapter")," f\xfcr weitere Informationen."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beispiel f\xfcr die Verwendung der Modelldatei und des standardm\xe4\xdfigen ",(0,r.kt)("a",{parentName:"li",href:"adapters#file-adapter-built-in"},"FileAdapter"),":")),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/casbin/casbin/v2"\n\ne, err := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.casbin.jcasbin.main.Enforcer;\n\nEnforcer e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newEnforcer } from 'casbin';\n\nconst e = await newEnforcer('path/to/model.conf', 'path/to/policy.csv');\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'require_once \'./vendor/autoload.php\';\n\nuse Casbin\\Enforcer;\n\n$e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\n\ne = casbin.Enforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using NetCasbin; \n\nvar e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <casbin/casbin.h>\n\nint main() {\n    // Create an Enforcer\n    casbin::Enforcer e("path/to/model.conf", "path/to/policy.csv");\n\n    // your code ..\n}\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"var\n  casbin: ICasbin;\nbegin\n  casbin := TCasbin.Create('path/to/model.conf', 'path/to/policy.csv');\n  ...\nend\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use casbin::prelude::*;\n\n// If you use async_td as async executor\n#[cfg(feature = "runtime-async-std")]\n#[async_std::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n\n// If you use tokio as async executor\n#[cfg(feature = "runtime-tokio")]\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local Enforcer = require("casbin")\nlocal e = Enforcer:new("path/to/model.conf", "path/to/policy.csv") -- The Casbin Enforcer\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie den Modeltext mit einem anderen Adapter:")),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    xormadapter "github.com/casbin/xorm-adapter/v2"\n    _ "github.com/go-sql-driver/mysql"\n)\n\n// Initialize a Xorm adapter with MySQL database.\na, err := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0.1:3306)/")\nif err != nil {\n    log.Fatalf("error: adapter: %s", err)\n}\n\nm, err := model.NewModelFromString(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n`)\nif err != nil {\n    log.Fatalf("error: model: %s", err)\n}\n\ne, err := casbin.NewEnforcer(m, a)\nif err != nil {\n    log.Fatalf("error: enforcer: %s", err)\n}\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\nimport casbin_sqlalchemy_adapter\n\n\n# Use SQLAlchemy Casbin adapter with SQLLite DB\nadapter = casbin_sqlalchemy_adapter.Adapter(\'sqlite:///test.db\')\n\n# Create a config model policy\nwith open("rbac_example_model.conf", "w") as f:\n    f.write("""\n    [request_definition]\n    r = sub, obj, act\n\n    [policy_definition]\n    p = sub, obj, act\n\n    [policy_effect]\n    e = some(where (p.eft == allow))\n\n    [matchers]\n    m = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n    """)\n\n# Create enforcer from adapter and config policy\ne = casbin.Enforcer(\'rbac_example_model.conf\', adapter)\n')))),(0,r.kt)("h3",{id:"berechtigungen-pr\xfcfen"},"Berechtigungen pr\xfcfen"),(0,r.kt)("p",null,"F\xfcgen Sie einen Durchsetzungshaken in Ihren Code ein, kurz bevor der Zugriff erfolgt:"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'sub := "alice" // the user that wants to access a resource.\nobj := "data1" // the resource that is going to be accessed.\nact := "read" // the operation that the user performs on the resource.\n\nok, err := e.Enforce(sub, obj, act)\n\nif err != nil {\n    // handle err\n}\n\nif ok == true {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n\n// You could use BatchEnforce() to enforce some requests in batches.\n// This method returns a bool slice, and this slice\'s index corresponds to the row index of the two-dimensional array.\n// e.g. results[0] is the result of {"alice", "data1", "read"}\nresults, err := e.BatchEnforce([][]interface{}{{"alice", "data1", "read"}, {"bob", "data2", "write"}, {"jack", "data3", "read"}})\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String sub = "alice"; // the user that wants to access a resource.\nString obj = "data1"; // the resource that is going to be accessed.\nString act = "read"; // the operation that the user performs on the resource.\n\nif (e.enforce(sub, obj, act) == true) {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sub = 'alice'; // the user that wants to access a resource.\nconst obj = 'data1'; // the resource that is going to be accessed.\nconst act = 'read'; // the operation that the user performs on the resource.\n\nif ((await e.enforce(sub, obj, act)) === true) {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$sub = "alice"; // the user that wants to access a resource.\n$obj = "data1"; // the resource that is going to be accessed.\n$act = "read"; // the operation that the user performs on the resource.\n\nif ($e->enforce($sub, $obj, $act) === true) {\n    // permit alice to read data1\n} else {\n    // deny the request, show an error\n}\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'sub = "alice"  # the user that wants to access a resource.\nobj = "data1"  # the resource that is going to be accessed.\nact = "read"  # the operation that the user performs on the resource.\n\nif e.enforce(sub, obj, act):\n    # permit alice to read data1\n    pass\nelse:\n    # deny the request, show an error\n    pass\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var sub = "alice";  # the user that wants to access a resource.\nvar obj = "data1";  # the resource that is going to be accessed.\nvar act = "read";  # the operation that the user performs on the resource.\n\nif (await e.EnforceAsync(sub, obj, act)) \n{\n    // permit alice to read data1\n}\nelse\n{\n    // deny the request, show an error\n}\n'))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    casbin::Enforcer e("../assets/model.conf", "../assets/policy.csv");\n\n    if (e.Enforce({"alice", "/alice_data/hello", "GET"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n\n    if (e.Enforce({"alice", "/alice_data/hello", "POST"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"if casbin.enforce(['alice,data1,read']) then\n  // Alice is super happy as she can read data1\nelse\n  // Alice is sad\n"))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'  let sub = "alice"; // the user that wants to access a resource.\n  let obj = "data1"; // the resource that is going to be accessed.\n  let act = "read"; // the operation that the user performs on the resource.\n\n  if e.enforce((sub, obj, act)).await? {\n      // permit alice to read data1\n  } else {\n      // error occurs\n  }\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'if e:enforce("alice", "data1", "read") then\n   -- permit alice to read data1\nelse\n   -- deny the request, show an error\nend\n\n')))),(0,r.kt)("p",null,"Casbin bietet auch eine API f\xfcr die Berechtigungsverwaltung zur Laufzeit. Zum Beispiel k\xf6nnen Sie alle Rollen, die einem Benutzer zugewiesen sind, wie folgt abrufen:"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := e.GetRolesForUser("alice")\n'))),(0,r.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<String> roles = e.getRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const roles = await e.getRolesForUser('alice');\n"))),(0,r.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$roles = $e->getRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'roles = e.get_roles_for_user("alice")\n'))),(0,r.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var roles = e.GetRolesForUser("alice");\n'))),(0,r.kt)(d,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},'roles = e.rolesForEntity("alice")\n'))),(0,r.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let roles = e.get_roles_for_user("alice");\n'))),(0,r.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local roles = e:GetRolesForUser("alice")\n')))),(0,r.kt)("p",null,"Siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/management-api"},"Management API")," und ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"RBAC API")," f\xfcr weitere Nutzung."),(0,r.kt)("p",null,"Bitte beziehen Sie sich auf die Testf\xe4lle f\xfcr weitere Nutzung."))}b.isMDXComponent=!0}}]);