"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[553],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>u});var o=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var a=o.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||t;return r?o.createElement(f,i(i({ref:a},c),{},{components:r})):o.createElement(f,i({ref:a},c))}));function u(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,i=new Array(t);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<t;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},163:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const t={id:"api-overview",title:"API Overview",description:"Uso da API Casbin",keywords:["API overview","API","API usage"],authors:["hsluoyz"]},i=void 0,s={unversionedId:"api-overview",id:"api-overview",title:"API Overview",description:"Uso da API Casbin",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/APIOverview.mdx",sourceDirName:".",slug:"/api-overview",permalink:"/pt/docs/api-overview",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/APIOverview.mdx",tags:[],version:"current",frontMatter:{id:"api-overview",title:"API Overview",description:"Uso da API Casbin",keywords:["API overview","API","API usage"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"API",permalink:"/pt/docs/category/api"},next:{title:"Management API",permalink:"/pt/docs/management-api"}},l={},d=[{value:"API de Execu\xe7\xe3o",id:"api-de-execu\xe7\xe3o",level:2},{value:"EnforceEx API",id:"enforceex-api",level:2},{value:"API de Gerenciamento",id:"api-de-gerenciamento",level:2},{value:"API de Obten\xe7\xe3o",id:"api-de-obten\xe7\xe3o",level:3},{value:"Adicionar, Excluir, Atualizar API",id:"adicionar-excluir-atualizar-api",level:3},{value:"AddEx API",id:"addex-api",level:3},{value:"RBAC API",id:"rbac-api",level:2}],c={toc:d};function p(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Esta vis\xe3o geral mostra apenas como usar as APIs do Casbin e n\xe3o explica como o Casbin \xe9 instalado ou como funciona. Voc\xea pode encontrar esses tutoriais aqui: ",(0,n.kt)("a",{parentName:"p",href:"/docs/get-started"},"Instala\xe7\xe3o do Casbin")," e ",(0,n.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"Como o Casbin Funciona"),". Portanto, quando voc\xea come\xe7a a ler este tutorial, assumimos que voc\xea j\xe1 instalou e importou o Casbin para o seu c\xf3digo."),(0,n.kt)("h2",{id:"api-de-execu\xe7\xe3o"},"API de Execu\xe7\xe3o"),(0,n.kt)("p",null,"Vamos come\xe7ar com as APIs de Execu\xe7\xe3o do Casbin. Carregaremos um modelo RBAC de ",(0,n.kt)("inlineCode",{parentName:"p"},"model.conf")," e carregaremos pol\xedticas de ",(0,n.kt)("inlineCode",{parentName:"p"},"policy.csv"),". Voc\xea pode aprender sobre a sintaxe do Modelo ",(0,n.kt)("a",{parentName:"p",href:"/docs/syntax-for-models"},"aqui"),", e n\xe3o vamos discutir isso neste tutorial. Assumimos que voc\xea pode entender os arquivos de configura\xe7\xe3o abaixo:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"model.conf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"policy.csv")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, data1, read\np, admin, data1, write\np, admin, data2, read\np, admin, data2, write\np, alice, data1, read\np, bob, data2, write\ng, amber, admin\ng, abc, admin\n")),(0,n.kt)("p",null,"Ap\xf3s ler os arquivos de configura\xe7\xe3o, por favor, leia o seguinte c\xf3digo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// Load information from files.\nenforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    log.Fatalf("Error, detail: %s", err)\n}\nok, err := enforcer.Enforce("alice", "data1", "read")\n')),(0,n.kt)("p",null,"Este c\xf3digo carrega o modelo de controle de acesso e as pol\xedticas de arquivos locais. A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"casbin.NewEnforcer()")," retornar\xe1 um executor. Ela reconhecer\xe1 seus dois par\xe2metros como caminhos de arquivos e carregar\xe1 os arquivos a partir da\xed. Erros ocorridos no processo s\xe3o armazenados na vari\xe1vel ",(0,n.kt)("inlineCode",{parentName:"p"},"err"),". Este c\xf3digo usa o adaptador padr\xe3o para carregar o modelo e as pol\xedticas, e claro, voc\xea pode alcan\xe7ar o mesmo resultado usando um adaptador de terceiros."),(0,n.kt)("p",null,"O c\xf3digo ",(0,n.kt)("inlineCode",{parentName:"p"},'ok, err := enforcer.Enforce("alice", "data1", "read")')," \xe9 usado para confirmar permiss\xf5es de acesso. Se Alice pode acessar data1 com a opera\xe7\xe3o de leitura, o valor retornado de ",(0,n.kt)("inlineCode",{parentName:"p"},"ok")," ser\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"; caso contr\xe1rio, ser\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". Neste exemplo, o valor de ",(0,n.kt)("inlineCode",{parentName:"p"},"ok")," \xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h2",{id:"enforceex-api"},"EnforceEx API"),(0,n.kt)("p",null,"\xc0s vezes voc\xea pode se perguntar qual pol\xedtica permitiu a solicita\xe7\xe3o, ent\xe3o preparamos a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),". Voc\xea pode us\xe1-la assim:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'ok, reason, err := enforcer.EnforceEx("amber", "data1", "read")\nfmt.Println(ok, reason) // true [admin data1 read]\n')),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"EnforceEx()")," retornar\xe1 a exata string de pol\xedtica no valor de retorno ",(0,n.kt)("inlineCode",{parentName:"p"},"reason"),". Neste exemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},"amber")," \xe9 um papel de ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),", ent\xe3o a pol\xedtica ",(0,n.kt)("inlineCode",{parentName:"p"},"p, admin, data1, read")," permitiu que esta solicita\xe7\xe3o fosse ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),". A sa\xedda deste c\xf3digo est\xe1 no coment\xe1rio."),(0,n.kt)("p",null,"O Casbin forneceu muitas APIs semelhantes a esta. Essas APIs adicionam algumas fun\xe7\xf5es extras \xe0s b\xe1sicas. Elas incluem:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ok, err := enforcer.EnforceWithMatcher(matcher, request)")),(0,n.kt)("p",{parentName:"li"},"Esta fun\xe7\xe3o usa um comparador.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ok, reason, err := enforcer.EnforceExWithMatcher(matcher, request)")),(0,n.kt)("p",{parentName:"li"},"Esta \xe9 uma combina\xe7\xe3o de ",(0,n.kt)("inlineCode",{parentName:"p"},"EnforceWithMatcher()")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"boolArray, err := enforcer.BatchEnforce(requests)")),(0,n.kt)("p",{parentName:"li"},"Esta fun\xe7\xe3o permite uma lista de trabalhos e retorna um array."))),(0,n.kt)("p",null,"Este \xe9 um caso de uso simples do Casbin. Voc\xea pode usar o Casbin para iniciar um servidor de autoriza\xe7\xe3o usando essas APIs. Vamos mostrar-lhe alguns outros tipos de APIs nos par\xe1grafos seguintes."),(0,n.kt)("h2",{id:"api-de-gerenciamento"},"API de Gerenciamento"),(0,n.kt)("h3",{id:"api-de-obten\xe7\xe3o"},"API de Obten\xe7\xe3o"),(0,n.kt)("p",null,"Essas APIs s\xe3o usadas para recuperar objetos espec\xedficos nas pol\xedticas. Neste exemplo, estamos carregando um executor e recuperando algo dele."),(0,n.kt)("p",null,"Por favor, d\xea uma olhada no seguinte c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'enforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\nallSubjects := enforcer.GetAllSubjects()\nfmt.Println(allSubjects)\n')),(0,n.kt)("p",null,"Semelhante ao exemplo anterior, as primeiras quatro linhas s\xe3o usadas para carregar informa\xe7\xf5es necess\xe1rias de arquivos locais. N\xe3o vamos discutir isso aqui mais adiante."),(0,n.kt)("p",null,"O c\xf3digo ",(0,n.kt)("inlineCode",{parentName:"p"},"allSubjects := enforcer.GetAllSubjects()")," recupera todos os sujeitos no arquivo de pol\xedtica e os retorna como um array. Em seguida, imprimimos esse array."),(0,n.kt)("p",null,"Normalmente, a sa\xedda do c\xf3digo deve ser:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"[admin alice bob]\n")),(0,n.kt)("p",null,"Voc\xea tamb\xe9m pode mudar a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," para ",(0,n.kt)("inlineCode",{parentName:"p"},"GetAllNamedSubjects()")," para obter a lista de sujeitos que aparecem na pol\xedtica nomeada atual."),(0,n.kt)("p",null,"Da mesma forma, preparamos fun\xe7\xf5es ",(0,n.kt)("inlineCode",{parentName:"p"},"GetAll")," para ",(0,n.kt)("inlineCode",{parentName:"p"},"Objects, Actions, Roles"),". Para acessar essas fun\xe7\xf5es, voc\xea simplesmente precisa substituir a palavra ",(0,n.kt)("inlineCode",{parentName:"p"},"Subject")," no nome da fun\xe7\xe3o pela categoria desejada."),(0,n.kt)("p",null,"Al\xe9m disso, h\xe1 mais getters dispon\xedveis para pol\xedticas. O m\xe9todo de chamada e os valores de retorno s\xe3o semelhantes aos mencionados acima."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"policy = e.GetPolicy()")," recupera todas as regras de autoriza\xe7\xe3o na pol\xedtica."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'filteredPolicy := e.GetFilteredPolicy(0, "alice")')," recupera todas as regras de autoriza\xe7\xe3o na pol\xedtica com filtros de campo especificados."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'namedPolicy := e.GetNamedPolicy("p")')," recupera todas as regras de autoriza\xe7\xe3o na pol\xedtica nomeada."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "bob")')," recupera todas as regras de autoriza\xe7\xe3o na pol\xedtica nomeada com filtros de campo especificados."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"groupingPolicy := e.GetGroupingPolicy()")," recupera todas as regras de heran\xe7a de papel na pol\xedtica."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'filteredGroupingPolicy := e.GetFilteredGroupingPolicy(0, "alice")')," recupera todas as regras de heran\xe7a de papel na pol\xedtica com filtros de campo especificados."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetNamedGroupingPolicy("g")')," recupera todas as regras de heran\xe7a de papel na pol\xedtica."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetFilteredNamedGroupingPolicy("g", 0, "alice")')," recupera todas as regras de heran\xe7a de papel na pol\xedtica com filtros de campo especificados.")),(0,n.kt)("h3",{id:"adicionar-excluir-atualizar-api"},"Adicionar, Excluir, Atualizar API"),(0,n.kt)("p",null,"Casbin oferece uma variedade de APIs para adicionar, excluir ou modificar pol\xedticas dinamicamente em tempo de execu\xe7\xe3o."),(0,n.kt)("p",null,"O c\xf3digo a seguir demonstra como adicionar, remover e atualizar pol\xedticas, bem como verificar se uma pol\xedtica existe:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// load information from files\nenforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\n\n// add a policy and use HasPolicy() to confirm\nenforcer.AddPolicy("added_user", "data1", "read")\nhasPolicy := enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // true, the policy was added successfully\n\n// remove a policy and use HasPolicy() to confirm\nenforcer.RemovePolicy("alice", "data1", "read")\nhasPolicy = enforcer.HasPolicy("alice", "data1", "read")\nfmt.Println(hasPolicy) // false, the policy was removed successfully\n\n// update a policy and use HasPolicy() to confirm\nenforcer.UpdatePolicy([]string{"added_user", "data1", "read"}, []string{"added_user", "data1", "write"})\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // false, the original policy has expired\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "write")\nfmt.Println(hasPolicy) // true, the new policy is in effect\n')),(0,n.kt)("p",null,"Usando essas APIs, voc\xea pode editar suas pol\xedticas dinamicamente. Da mesma forma, fornecemos APIs semelhantes para ",(0,n.kt)("inlineCode",{parentName:"p"},"FilteredPolicy, NamedPolicy, FilteredNamedPolicy, GroupingPolicy, NamedGroupingPolicy, FilteredGroupingPolicy, FilteredNamedGroupingPolicy"),". Para us\xe1-las, basta substituir a palavra ",(0,n.kt)("inlineCode",{parentName:"p"},"Policy")," no nome da fun\xe7\xe3o pela categoria apropriada."),(0,n.kt)("p",null,"Al\xe9m disso, alterando os par\xe2metros para arrays, voc\xea pode realizar edi\xe7\xe3o em lote de suas pol\xedticas."),(0,n.kt)("p",null,"Por exemplo, considere fun\xe7\xf5es como esta:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicy([]string{"eve", "data3", "read"}, []string{"eve", "data3", "write"})\n')),(0,n.kt)("p",null,"Se mudarmos ",(0,n.kt)("inlineCode",{parentName:"p"},"Policy")," para ",(0,n.kt)("inlineCode",{parentName:"p"},"Policies")," e modificarmos os par\xe2metros da seguinte forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicies([][]string{{"eve", "data3", "read"}, {"jack", "data3", "read"}}, [][]string{{"eve", "data3", "write"}, {"jack", "data3", "write"}})\n')),(0,n.kt)("p",null,"ent\xe3o podemos realizar edi\xe7\xe3o em lote dessas pol\xedticas."),(0,n.kt)("p",null,"As mesmas opera\xe7\xf5es tamb\xe9m podem ser aplicadas a ",(0,n.kt)("inlineCode",{parentName:"p"},"GroupingPolicy, NamedGroupingPolicy"),"."),(0,n.kt)("h3",{id:"addex-api"},"AddEx API"),(0,n.kt)("p",null,"Casbin oferece a s\xe9rie de APIs AddEx para ajudar os usu\xe1rios a adicionar regras em lotes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"AddPoliciesEx(rules [][]string) (bool, error)\nAddNamedPoliciesEx(ptype string, rules [][]string) (bool, error)\nAddGroupingPoliciesEx(rules [][]string) (bool, error)\nAddNamedGroupingPoliciesEx(ptype string, rules [][]string) (bool, error)\nSelfAddPoliciesEx(sec string, ptype string, rules [][]string) (bool, error) \n")),(0,n.kt)("p",null,"A diferen\xe7a entre esses m\xe9todos e os m\xe9todos sem o sufixo Ex \xe9 que, se uma das regras j\xe1 existir, eles continuar\xe3o verificando a pr\xf3xima regra em vez de retornar falso imediatamente."),(0,n.kt)("p",null,"Por exemplo, vamos comparar ",(0,n.kt)("inlineCode",{parentName:"p"},"AddPolicies")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"AddPoliciesEx"),"."),(0,n.kt)("p",null,"Voc\xea pode executar e observar o seguinte c\xf3digo copiando-o para o teste sob casbin."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'func TestDemo(t *testing.T) {\n    e, err := NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n    if err != nil {\n        fmt.Printf("Error, details: %s\\n", err)\n    }\n    e.ClearPolicy()\n    e.AddPolicy("user1", "data1", "read")\n    fmt.Println(e.GetPolicy())\n    testGetPolicy(t, e, [][]string{{"user1", "data1", "read"}})\n\n    // policy {"user1", "data1", "read"} now exists\n\n    // Use AddPolicies to add rules in batches\n    ok, _ := e.AddPolicies([][]string{{"user1", "data1", "read"}, {"user2", "data2", "read"}})\n    fmt.Println(e.GetPolicy())\n    // {"user2", "data2", "read"} failed to add because {"user1", "data1", "read"} already exists\n    // AddPolicies returns false and no other policies are checked, even though they may not exist in the existing ruleset\n    // ok == false\n    fmt.Println(ok)\n    testGetPolicy(t, e, [][]string{{"user1", "data1", "read"}})\n\n    // Use AddPoliciesEx to add rules in batches\n    ok, _ = e.AddPoliciesEx([][]string{{"user1", "data1", "read"}, {"user2", "data2", "read"}})\n    fmt.Println(e.GetPolicy())\n    // {"user2", "data2", "read"} is added successfully\n    // because AddPoliciesEx automatically filters the existing {"user1", "data1", "read"}\n    // ok == true\n    fmt.Println(ok)\n    testGetPolicy(t, e, [][]string{{"user1", "data1", "read"}, {"user2", "data2", "read"}})\n}\n')),(0,n.kt)("h2",{id:"rbac-api"},"RBAC API"),(0,n.kt)("p",null,"Casbin oferece algumas APIs para voc\xea modificar o modelo RBAC e as pol\xedticas. Se voc\xea est\xe1 familiarizado com RBAC, voc\xea pode facilmente usar essas APIs."),(0,n.kt)("p",null,"Aqui, n\xf3s apenas mostramos como usar as APIs RBAC do Casbin e n\xe3o falaremos sobre RBAC em si. Voc\xea pode obter mais detalhes ",(0,n.kt)("a",{parentName:"p",href:"/docs/rbac"},"aqui"),"."),(0,n.kt)("p",null,"Usamos o seguinte c\xf3digo para carregar o modelo e as pol\xedticas, como antes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'enforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\n')),(0,n.kt)("p",null,"Ent\xe3o, podemos usar uma inst\xe2ncia do Enforcer ",(0,n.kt)("inlineCode",{parentName:"p"},"enforcer")," para acessar essas APIs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := enforcer.GetRolesForUser("amber")\nfmt.Println(roles) // [admin]\nusers, err := enforcer.GetUsersForRole("admin")\nfmt.Println(users) // [amber abc]\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," retorna um array que cont\xe9m todos os pap\xe9is que amber tem. Neste exemplo, amber tem apenas um papel, que \xe9 admin, ent\xe3o o array ",(0,n.kt)("inlineCode",{parentName:"p"},"roles")," \xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},"[admin]"),". Da mesma forma, voc\xea pode usar ",(0,n.kt)("inlineCode",{parentName:"p"},"GetUsersForRole()")," para obter os usu\xe1rios que pertencem a um papel. O valor de retorno desta fun\xe7\xe3o tamb\xe9m \xe9 um array."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.HasRoleForUser("amber", "admin") // true\n')),(0,n.kt)("p",null,"Voc\xea pode usar ",(0,n.kt)("inlineCode",{parentName:"p"},"HasRoleForUser()")," para confirmar se o usu\xe1rio pertence ao papel. Neste exemplo, amber \xe9 membro de admin, ent\xe3o o valor de retorno da fun\xe7\xe3o \xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("bob", "data2", "write")) // true\nenforcer.DeletePermission("data2", "write")\nfmt.Println(enforcer.Enforce("bob", "data2", "write")) // false\n')),(0,n.kt)("p",null,"Voc\xea pode usar ",(0,n.kt)("inlineCode",{parentName:"p"},"DeletePermission()")," para excluir uma permiss\xe3o."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("alice", "data1", "read")) // true\nenforcer.DeletePermissionForUser("alice", "data1", "read")\nfmt.Println(enforcer.Enforce("alice", "data1", "read")) // false\n')),(0,n.kt)("p",null,"E usar ",(0,n.kt)("inlineCode",{parentName:"p"},"DeletePermissionForUser()")," para excluir uma permiss\xe3o para um usu\xe1rio."),(0,n.kt)("p",null,"Casbin tem muitas APIs como esta. Seus m\xe9todos de chamada e valores de retorno t\xeam o mesmo estilo que as APIs acima. Voc\xea pode encontrar essas APIs nos ",(0,n.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"pr\xf3ximos documentos"),"."))}p.isMDXComponent=!0}}]);