"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[953],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var o=t.createContext({}),p=function(a){var e=t.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},d=function(a){var e=p(a.components);return t.createElement(o.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,o=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),m=p(n),u=i,c=m["".concat(o,".").concat(u)]||m[u]||k[u]||r;return n?t.createElement(c,s(s({ref:e},d),{},{components:n})):t.createElement(c,s({ref:e},d))}));function u(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=a,l.mdxType="string"==typeof a?a:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2784:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const r={id:"syntax-for-models",title:"Syntax for Models",description:"Sintaks untuk Model",keywords:["syntax"],authors:["nodece"]},s=void 0,l={unversionedId:"syntax-for-models",id:"syntax-for-models",title:"Syntax for Models",description:"Sintaks untuk Model",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/SyntaxForModels.mdx",sourceDirName:".",slug:"/syntax-for-models",permalink:"/id/docs/syntax-for-models",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SyntaxForModels.mdx",tags:[],version:"current",frontMatter:{id:"syntax-for-models",title:"Syntax for Models",description:"Sintaks untuk Model",keywords:["syntax"],authors:["nodece"]},sidebar:"docs",previous:{title:"Supported Models",permalink:"/id/docs/supported-models"},next:{title:"Effector",permalink:"/id/docs/effector"}},o={},p=[{value:"Definisi permintaan",id:"definisi-permintaan",level:2},{value:"Definisi Kebijakan",id:"definisi-kebijakan",level:2},{value:"Efek Kebijakan",id:"efek-kebijakan",level:2},{value:"Pemadanan (Matchers)",id:"pemadanan-matchers",level:2},{value:"Urutan ekspresi dalam pemadanan",id:"urutan-ekspresi-dalam-pemadanan",level:3},{value:"Beberapa Jenis Bagian",id:"beberapa-jenis-bagian",level:2},{value:"Tata Bahasa Khusus",id:"tata-bahasa-khusus",level:2},{value:"Evaluator Ekspresi",id:"evaluator-ekspresi",level:2}],d=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)},k=d("Tabs"),m=d("TabItem"),u={toc:p};function c(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Konfigurasi model (CONF) harus memiliki setidaknya empat bagian: ",(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"[policy_definition]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"[policy_effect]"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"[matchers]"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jika sebuah model menggunakan Kontrol Akses Berbasis Peran (RBAC), model tersebut juga harus menyertakan bagian ",(0,i.kt)("inlineCode",{parentName:"p"},"[role_definition]"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Konfigurasi model (CONF) dapat berisi komentar. Komentar dimulai dengan simbol ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),", dan semua yang ada setelah simbol ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," akan diabaikan."))),(0,i.kt)("h2",{id:"definisi-permintaan"},"Definisi permintaan"),(0,i.kt)("p",null,"Bagian ",(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition]")," mendefinisikan argumen dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"e.Enforce(...)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n")),(0,i.kt)("p",null,"Dalam contoh ini, ",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"obj"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"act")," mewakili triple akses klasik: subjek (entitas yang mengakses), objek (sumber daya yang diakses), dan aksi (metode akses). Namun, Anda dapat menyesuaikan format permintaan Anda sendiri. Misalnya, Anda dapat menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"sub, act")," jika Anda tidak perlu menentukan sumber daya tertentu, atau ",(0,i.kt)("inlineCode",{parentName:"p"},"sub, sub2, obj, act")," jika Anda memiliki dua entitas yang mengakses."),(0,i.kt)("h2",{id:"definisi-kebijakan"},"Definisi Kebijakan"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[policy_definition]")," adalah definisi untuk sebuah kebijakan. Ini mendefinisikan makna dari kebijakan tersebut. Misalnya, kami memiliki model berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = sub, obj, act\np2 = sub, act\n")),(0,i.kt)("p",null,"Dan kami memiliki kebijakan berikut (jika dalam file kebijakan):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np2, bob, write-all-objects\n")),(0,i.kt)("p",null,"Setiap baris dalam kebijakan disebut sebagai aturan kebijakan. Setiap aturan kebijakan dimulai dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"tipe kebijakan"),", seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),". Ini digunakan untuk mencocokkan definisi kebijakan jika ada beberapa definisi. Kebijakan di atas menunjukkan pengikatan berikut. Pengikatan ini dapat digunakan dalam matcher."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"(alice, data1, read) -> (p.sub, p.obj, p.act)\n(bob, write-all-objects) -> (p2.sub, p2.act)\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Elemen-elemen dalam aturan kebijakan selalu dianggap sebagai ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". Jika Anda memiliki pertanyaan tentang ini, silakan merujuk pada diskusi di: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/113"},"https://github.com/casbin/casbin/issues/113"))),(0,i.kt)("h2",{id:"efek-kebijakan"},"Efek Kebijakan"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[policy_effect]")," adalah definisi untuk efek kebijakan. Ini menentukan apakah permintaan akses harus disetujui jika beberapa aturan kebijakan cocok dengan permintaan tersebut. Misalnya, satu aturan mengizinkan dan yang lain menolak."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow))\n")),(0,i.kt)("p",null,"Efek kebijakan di atas berarti bahwa jika ada aturan kebijakan yang cocok dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),", efek akhirnya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," (juga dikenal sebagai allow-override). ",(0,i.kt)("inlineCode",{parentName:"p"},"p.eft")," adalah efek untuk kebijakan, dan dapat berupa ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),". Ini bersifat opsional, dan nilai defaultnya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),". Karena kita tidak menentukannya di atas, maka nilai default yang digunakan."),(0,i.kt)("p",null,"Contoh lain untuk efek kebijakan adalah:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = !some(where (p.eft == deny))\n")),(0,i.kt)("p",null,"Ini berarti jika tidak ada aturan kebijakan yang cocok dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),", efek akhirnya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," (juga dikenal sebagai deny-override). ",(0,i.kt)("inlineCode",{parentName:"p"},"some")," berarti ada setidaknya satu aturan kebijakan yang cocok. ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," berarti semua aturan kebijakan yang cocok (tidak digunakan di sini). Efek kebijakan bahkan dapat dihubungkan dengan ekspresi logika:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n")),(0,i.kt)("p",null,"Ini berarti harus ada setidaknya satu aturan kebijakan yang cocok dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),", dan tidak boleh ada aturan kebijakan yang cocok dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),". Oleh karena itu, dengan cara ini, baik otorisasi allow maupun deny didukung, dan deny menggantikan."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Meskipun kami merancang sintaks efek kebijakan seperti di atas, implementasi saat ini hanya menggunakan efek kebijakan yang dikodekan secara keras. Hal ini karena kami menemukan bahwa tidak ada kebutuhan yang besar untuk tingkat fleksibilitas tersebut. Jadi untuk saat ini, Anda harus menggunakan salah satu efek kebijakan bawaan alih-alih menyesuaikan sendiri.")),(0,i.kt)("p",null,"Efek kebijakan bawaan yang didukung adalah:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Efek Kebijakan"),(0,i.kt)("th",{parentName:"tr",align:null},"Arti"),(0,i.kt)("th",{parentName:"tr",align:null},"Contoh"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow))"),(0,i.kt)("td",{parentName:"tr",align:null},"izinkan-override"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"ACL, RBAC, dll."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"!some(where (p.eft == deny))"),(0,i.kt)("td",{parentName:"tr",align:null},"tolak-menggantikan"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Tolak-menggantikan"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"beberapa(di mana (p.eft == izinkan)) && !beberapa(di mana (p.eft == tolak))"),(0,i.kt)("td",{parentName:"tr",align:null},"izinkan-dan-tolak"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Izinkan-dan-tolak"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prioritas(p.eft) ","|","|"," tolak"),(0,i.kt)("td",{parentName:"tr",align:null},"prioritas"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Prioritas"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prioritasSubjek(p.eft)"),(0,i.kt)("td",{parentName:"tr",align:null},"prioritas berdasarkan peran"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Subjek-Prioritas"))))),(0,i.kt)("h2",{id:"pemadanan-matchers"},"Pemadanan (Matchers)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[matchers]")," adalah definisi untuk pemadanan kebijakan. Pemadanan adalah ekspresi yang mendefinisikan bagaimana aturan kebijakan dievaluasi terhadap permintaan."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"Pemadanan di atas adalah yang paling sederhana dan berarti bahwa subjek, objek, dan tindakan dalam permintaan harus sesuai dengan yang ada dalam aturan kebijakan."),(0,i.kt)("p",null,"Operator aritmatika seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"+, -, *, /")," dan operator logika seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"&&, ||, !")," dapat digunakan dalam pemadanan."),(0,i.kt)("h3",{id:"urutan-ekspresi-dalam-pemadanan"},"Urutan ekspresi dalam pemadanan"),(0,i.kt)("p",null,"Urutan ekspresi dapat sangat mempengaruhi kinerja. Lihat contoh berikut untuk detail lebih lanjut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'const rbac_models = `\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n`\n\nfunc TestManyRoles(t *testing.T) {\n\n    m, _ := model.NewModelFromString(rbac_models)\n    e, _ := NewEnforcer(m, false)\n\n    roles := []string{"admin", "manager", "developer", "tester"}\n\n    // 2500 projects\n    for nbPrj := 1; nbPrj < 2500; nbPrj++ {\n        // 4 objects and 1 role per object (so 4 roles)\n        for _, role := range roles {\n            roleDB := fmt.Sprintf("%s_project:%d", role, nbPrj)\n            objectDB := fmt.Sprintf("/projects/%d", nbPrj)\n            e.AddPolicy(roleDB, objectDB, "GET")\n        }\n        jasmineRole := fmt.Sprintf("%s_project:%d", roles[1], nbPrj)\n        e.AddGroupingPolicy("jasmine", jasmineRole)\n    }\n\n    e.AddGroupingPolicy("abu", "manager_project:1")\n    e.AddGroupingPolicy("abu", "manager_project:2499")\n\n    // With same number of policies\n    // User \'abu\' has only two roles\n    // User \'jasmine\' has many roles (1 role per policy, here 2500 roles)\n\n    request := func(subject, object, action string) {\n        t0 := time.Now()\n        resp, _ := e.Enforce(subject, object, action)\n        tElapse := time.Since(t0)\n        t.Logf("RESPONSE %-10s %s\\t %s : %5v IN: %+v", subject, object, action, resp, tElapse)\n        if tElapse > time.Millisecond*100 {\n            t.Errorf("More than 100 milliseconds for %s %s %s : %+v", subject, object, action, tElapse)\n        }\n    }\n\n    request("abu", "/projects/1", "GET")        // really fast because only 2 roles in all policies and at the beginning of the casbin_rule table\n    request("abu", "/projects/2499", "GET")     // fast because only 2 roles in all policies\n    request("jasmine", "/projects/1", "GET")    // really fast at the beginning of the casbin_rule table\n\n    request("jasmine", "/projects/2499", "GET") // slow and fails the only 1st time   <<<< pb here\n    request("jasmine", "/projects/2499", "GET") // fast maybe due to internal cache mechanism\n\n    // same issue with non-existing roles\n    // request("jasmine", "/projects/999999", "GET") // slow fails the only 1st time   <<<< pb here\n    // request("jasmine", "/projects/999999", "GET") // fast maybe due to internal cache mechanism\n}\n')),(0,i.kt)("p",null,"Waktu penegakan mungkin sangat lama, hingga 6 detik."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go test -run ^TestManyRoles$ github.com/casbin/casbin/v2 -v\n\n=== RUN   TestManyRoles\n    rbac_api_test.go:598: RESPONSE abu        /projects/1        GET :  true IN: 438.379\xb5s\n    rbac_api_test.go:598: RESPONSE abu        /projects/2499     GET :  true IN: 39.005173ms\n    rbac_api_test.go:598: RESPONSE jasmine    /projects/1        GET :  true IN: 1.774319ms\n    rbac_api_test.go:598: RESPONSE jasmine    /projects/2499     GET :  true IN: 6.164071648s\n    rbac_api_test.go:600: More than 100 milliseconds for jasmine /projects/2499 GET : 6.164071648s\n    rbac_api_test.go:598: RESPONSE jasmine    /projects/2499     GET :  true IN: 12.164122ms\n--- FAIL: TestManyRoles (6.24s)\nFAIL\nFAIL    github.com/casbin/casbin/v2     6.244s\nFAIL\n")),(0,i.kt)("p",null,"Namun, jika kita menyesuaikan urutan ekspresi dalam matchers dan menempatkan ekspresi yang lebih memakan waktu seperti fungsi di belakang, waktu eksekusi akan menjadi sangat singkat."),(0,i.kt)("p",null,"Mengubah urutan ekspresi dalam matchers pada contoh di atas menjadi:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.obj == p.obj && g(r.sub, p.sub) && r.act == p.act\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go test -run ^TestManyRoles$ github.com/casbin/casbin/v2 -v\n=== RUN   TestManyRoles\n    rbac_api_test.go:599: RESPONSE abu        /projects/1        GET :  true IN: 786.635\xb5s\n    rbac_api_test.go:599: RESPONSE abu        /projects/2499     GET :  true IN: 4.933064ms\n    rbac_api_test.go:599: RESPONSE jasmine    /projects/1        GET :  true IN: 2.908534ms\n    rbac_api_test.go:599: RESPONSE jasmine    /projects/2499     GET :  true IN: 7.292963ms\n    rbac_api_test.go:599: RESPONSE jasmine    /projects/2499     GET :  true IN: 6.168307ms\n--- PASS: TestManyRoles (0.05s)\nPASS\nok      github.com/casbin/casbin/v2     0.053s\n")),(0,i.kt)("h2",{id:"beberapa-jenis-bagian"},"Beberapa Jenis Bagian"),(0,i.kt)("p",null,"Jika Anda memerlukan beberapa definisi kebijakan atau beberapa matchers, Anda dapat menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"p2")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"m2")," sebagai contoh. Sebenarnya, keempat bagian yang disebutkan di atas dapat menggunakan beberapa jenis, dan sintaksnya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," diikuti dengan angka, seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"r2")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"e2"),". Secara default, keempat bagian ini seharusnya berkorespondensi satu-ke-satu. Misalnya, bagian ",(0,i.kt)("inlineCode",{parentName:"p"},"r2")," Anda hanya akan menggunakan matcher ",(0,i.kt)("inlineCode",{parentName:"p"},"m2")," untuk mencocokkan kebijakan ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),"."),(0,i.kt)("p",null,"Anda dapat meneruskan ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," sebagai parameter pertama dari metode ",(0,i.kt)("inlineCode",{parentName:"p"},"enforce")," untuk menentukan jenis-jenisnya. ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," didefinisikan sebagai berikut:"),(0,i.kt)(k,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'EnforceContext{"r2","p2","e2","m2"}\ntype EnforceContext struct {\n    RType string\n    PType string\n    EType string\n    MType string\n}\n'))),(0,i.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const enforceContext = new EnforceContext('r2', 'p2', 'e2', 'm2');\nclass EnforceContext {\n  constructor(rType, pType, eType, mType) {\n    this.pType = pType;\n    this.eType = eType;\n    this.mType = mType;\n    this.rType = rType;\n  }\n}\n"))),(0,i.kt)(m,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'EnforceContext enforceContext = new EnforceContext("2");\npublic class EnforceContext {\n    private String pType;\n    private String eType;\n    private String mType;\n    private String rType;\n    public EnforceContext(String suffix) {\n      this.pType = "p" + suffix;\n      this.eType = "e" + suffix;\n      this.mType = "m" + suffix;\n      this.rType = "r" + suffix;\n    }\n}\n')))),(0,i.kt)("p",null,"Berikut adalah contoh penggunaannya. Silakan merujuk ke ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_model.conf"},"model")," dan ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_policy.csv"},"kebijakan"),". Permintaannya adalah sebagai berikut:"),(0,i.kt)(k,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Pass in a suffix as a parameter to NewEnforceContext, such as 2 or 3, and it will create r2, p2, etc.\nenforceContext := NewEnforceContext("2")\n// You can also specify a certain type individually\nenforceContext.EType = "e"\n// Don\'t pass in EnforceContext; the default is r, p, e, m\ne.Enforce("alice", "data2", "read")        // true\n// Pass in EnforceContext\ne.Enforce(enforceContext, struct{ Age int }{Age: 70}, "/data1", "read")        //false\ne.Enforce(enforceContext, struct{ Age int }{Age: 30}, "/data1", "read")        //true\n'))),(0,i.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Pass in a suffix as a parameter to NewEnforceContext, such as 2 or 3, and it will create r2, p2, etc.\nconst enforceContext = new NewEnforceContext(\'2\');\n\n// You can also specify a certain type individually\nenforceContext.eType = "e"\n\n// Don\'t pass in EnforceContext; the default is r, p, e, m\ne.Enforce("alice", "data2", "read")        // true\n\n// Pass in EnforceContext\ne.Enforce(enforceContext, {Age: 70}, "/data1", "read")        //false\ne.Enforce(enforceContext, {Age: 30}, "/data1", "read")        //true\n'))),(0,i.kt)(m,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Pass in a suffix as a parameter to NewEnforceContext, such as 2 or 3, and it will create r2, p2, etc.\nEnforceContext enforceContext = new EnforceContext("2");\n// You can also specify a certain type individually\nenforceContext.seteType("e");\n// Don\'t pass in EnforceContext; the default is r, p, e, m\ne.enforce("alice", "data2", "read");  // true\n// Pass in EnforceContext\n// TestEvalRule is located in https://github.com/casbin/jcasbin/blob/master/src/test/java/org/casbin/jcasbin/main/AbacAPIUnitTest.java#L56\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 70), "/data1", "read"); // false\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 30), "/data1", "read"); // true\n')))),(0,i.kt)("h2",{id:"tata-bahasa-khusus"},"Tata Bahasa Khusus"),(0,i.kt)("p",null,'Anda juga bisa menggunakan operator "in", yang merupakan satu-satunya operator dengan nama teks. Operator ini memeriksa array di sisi kanan untuk melihat apakah mengandung nilai yang sama dengan nilai di sisi kiri. Kesamaan ditentukan dengan menggunakan operator ==, dan perpustakaan ini tidak memeriksa tipe antara nilai-nilai tersebut. Selama dua nilai dapat diubah menjadi interface{} dan masih dapat diperiksa kesamaannya dengan ==, mereka akan berperilaku seperti yang diharapkan. Perhatikan bahwa Anda dapat menggunakan parameter untuk array, tetapi itu harus berupa []interface{}.'),(0,i.kt)("p",null,"Juga merujuk ke ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/rbac_model_matcher_using_in_op.conf"},"rbac","_","model","_","matcher","_","using","_","in","_","op"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget2_model.conf"},"keyget2","_","model"),", dan ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget_model.conf"},"keyget","_","model"),"."),(0,i.kt)("p",null,"Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj\n...\n[matchers]\nm = r.sub.Name in (r.obj.Admins)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.Enforce(Sub{Name: "alice"}, Obj{Name: "a book", Admins: []interface{}{"alice", "bob"}})\n')),(0,i.kt)("h2",{id:"evaluator-ekspresi"},"Evaluator Ekspresi"),(0,i.kt)("p",null,"Evaluasi pencocokan di Casbin diimplementasikan oleh evaluator ekspresi dalam setiap bahasa. Casbin mengintegrasikan kekuatan mereka untuk menyediakan bahasa PERM yang terpadu. Selain sintaks model yang disediakan di sini, evaluator ekspresi ini mungkin menawarkan fungsionalitas tambahan yang mungkin tidak didukung oleh bahasa atau implementasi lain. Harap berhati-hati saat menggunakan fungsionalitas ini."),(0,i.kt)("p",null,"Evaluator ekspresi yang digunakan oleh setiap implementasi Casbin adalah sebagai berikut:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Implementasi"),(0,i.kt)("th",{parentName:"tr",align:null},"Bahasa"),(0,i.kt)("th",{parentName:"tr",align:null},"Evaluator Ekspresi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Golang"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Knetic/govaluate"},"https://github.com/Knetic/govaluate"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Java"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/killme2008/aviator"},"https://github.com/killme2008/aviator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/donmccurdy/expression-eval"},"https://github.com/donmccurdy/expression-eval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PHP-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"PHP"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/symfony/expression-language"},"https://github.com/symfony/expression-language"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PyCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Python"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/danthedeckie/simpleeval"},"https://github.com/danthedeckie/simpleeval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin.NET"),(0,i.kt)("td",{parentName:"tr",align:null},"C#"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/davideicardi/DynamicExpresso"},"https://github.com/davideicardi/DynamicExpresso"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin4D"),(0,i.kt)("td",{parentName:"tr",align:null},"Delphi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"},"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-rs"),(0,i.kt)("td",{parentName:"tr",align:null},"Rust"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jonathandturner/rhai"},"https://github.com/jonathandturner/rhai"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-cpp"),(0,i.kt)("td",{parentName:"tr",align:null},"C++"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ArashPartow/exprtk"},"https://github.com/ArashPartow/exprtk"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Jika Anda menemukan masalah performa dengan Casbin, hal ini kemungkinan disebabkan oleh efisiensi yang rendah dari evaluator ekspresi. Anda dapat menghadapi masalah tersebut kepada Casbin atau evaluator ekspresi secara langsung untuk mendapatkan saran tentang mempercepat performa. Untuk detail lebih lanjut, silakan merujuk ke bagian ",(0,i.kt)("a",{parentName:"p",href:"/docs/benchmark"},"Benchmarks"),".")))}c.isMDXComponent=!0}}]);