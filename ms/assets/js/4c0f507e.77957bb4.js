"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9247],{3905:(a,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var i=n(7294);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,i)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function d(a,e){if(null==a)return{};var n,i,t=function(a,e){if(null==a)return{};var n,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var o=i.createContext({}),m=function(a){var e=i.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},s=function(a){var e=m(a.components);return i.createElement(o.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,o=a.parentName,s=d(a,["components","mdxType","originalType","parentName"]),p=m(n),k=t,c=p["".concat(o,".").concat(k)]||p[k]||u[k]||r;return n?i.createElement(c,l(l({ref:e},s),{},{components:n})):i.createElement(c,l({ref:e},s))}));function k(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,l=new Array(r);l[0]=p;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=a,d.mdxType="string"==typeof a?a:t,l[1]=d;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1759:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var i=n(7462),t=(n(7294),n(3905));const r={id:"api-overview",title:"API Overview",description:"Penggunaan API Casbin",keywords:["API overview","API","API usage"],authors:["hsluoyz"]},l=void 0,d={unversionedId:"api-overview",id:"api-overview",title:"API Overview",description:"Penggunaan API Casbin",source:"@site/i18n/ms/docusaurus-plugin-content-docs/current/APIOverview.mdx",sourceDirName:".",slug:"/api-overview",permalink:"/ms/docs/api-overview",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/APIOverview.mdx",tags:[],version:"current",frontMatter:{id:"api-overview",title:"API Overview",description:"Penggunaan API Casbin",keywords:["API overview","API","API usage"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"API",permalink:"/ms/docs/category/api"},next:{title:"Management API",permalink:"/ms/docs/management-api"}},o={},m=[{value:"Lakukan API",id:"lakukan-api",level:2},{value:"EnforceEx API",id:"enforceex-api",level:2},{value:"API Pengurusan",id:"api-pengurusan",level:2},{value:"API Dapatkan",id:"api-dapatkan",level:3},{value:"Tambah, Hapus, Kemas Kini API",id:"tambah-hapus-kemas-kini-api",level:3},{value:"API AddEx",id:"api-addex",level:3},{value:"RBAC API",id:"rbac-api",level:2}],s={toc:m};function u(a){let{components:e,...n}=a;return(0,t.kt)("wrapper",(0,i.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Gambaran ini hanya menunjukkan kepada anda cara menggunakan API Casbin dan tidak menerangkan bagaimana Casbin dipasang atau bagaimana ia berfungsi. Anda boleh mencari tutorial tersebut di sini: ",(0,t.kt)("a",{parentName:"p",href:"/docs/get-started"},"Pemasangan Casbin")," dan ",(0,t.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"Cara Casbin Berfungsi"),". Oleh itu, apabila anda mula membaca tutorial ini, kami menganggap bahawa anda telah memasang dan mengimport Casbin sepenuhnya ke dalam kod anda."),(0,t.kt)("h2",{id:"lakukan-api"},"Lakukan API"),(0,t.kt)("p",null,"Mari kita mulai dengan API Lakukan Casbin. Kami akan memuatkan model RBAC dari ",(0,t.kt)("inlineCode",{parentName:"p"},"model.conf")," dan memuatkan polisi dari ",(0,t.kt)("inlineCode",{parentName:"p"},"policy.csv"),". Anda boleh belajar tentang sintaks Model ",(0,t.kt)("a",{parentName:"p",href:"/docs/syntax-for-models"},"di sini"),", dan kami tidak akan membincangkannya dalam tutorial ini. Kami menganggap bahawa anda boleh memahami fail konfigurasi yang diberikan di bawah:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"model.conf")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"policy.csv")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"p, admin, data1, read\np, admin, data1, write\np, admin, data2, read\np, admin, data2, write\np, alice, data1, read\np, bob, data2, write\ng, amber, admin\ng, abc, admin\n")),(0,t.kt)("p",null,"Selepas membaca fail konfigurasi, sila baca kod berikut."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'// Load information from files.\nenforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    log.Fatalf("Error, detail: %s", err)\n}\nok, err := enforcer.Enforce("alice", "data1", "read")\n')),(0,t.kt)("p",null,"Kod ini memuatkan model kawalan akses dan polisi dari fail lokal. Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"casbin.NewEnforcer()")," akan mengembalikan enforcer. Ia akan mengenali dua parameternya sebagai laluan fail dan memuatkan fail dari sana. Ralat yang berlaku dalam proses ini disimpan dalam pemboleh ubah ",(0,t.kt)("inlineCode",{parentName:"p"},"err"),". Kod ini menggunakan penyesuai lalai untuk memuatkan model dan dasar, dan tentu saja, anda boleh mencapai hasil yang sama dengan menggunakan penyesuai pihak ketiga."),(0,t.kt)("p",null,"Kod ",(0,t.kt)("inlineCode",{parentName:"p"},'ok, err := enforcer.Enforce("alice", "data1", "read")')," digunakan untuk mengesahkan kebenaran akses. Jika Alice boleh mengakses data1 dengan operasi baca, nilai yang dikembalikan oleh ",(0,t.kt)("inlineCode",{parentName:"p"},"ok")," akan menjadi ",(0,t.kt)("inlineCode",{parentName:"p"},"true"),"; jika tidak, ia akan menjadi ",(0,t.kt)("inlineCode",{parentName:"p"},"false"),". Dalam contoh ini, nilai ",(0,t.kt)("inlineCode",{parentName:"p"},"ok")," adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,t.kt)("h2",{id:"enforceex-api"},"EnforceEx API"),(0,t.kt)("p",null,"Kadang kala anda mungkin tertanya-tanya dasar mana yang membenarkan permintaan, jadi kami telah menyediakan fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),". Anda boleh menggunakannya seperti ini:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, reason, err := enforcer.EnforceEx("amber", "data1", "read")\nfmt.Println(ok, reason) // true [admin data1 read]\n')),(0,t.kt)("p",null,"Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"EnforceEx()")," akan mengembalikan rentetan dasar yang tepat dalam nilai kembali ",(0,t.kt)("inlineCode",{parentName:"p"},"reason"),". Dalam contoh ini, ",(0,t.kt)("inlineCode",{parentName:"p"},"amber")," mempunyai peranan ",(0,t.kt)("inlineCode",{parentName:"p"},"admin"),", jadi polisi ",(0,t.kt)("inlineCode",{parentName:"p"},"p, admin, data1, read")," membenarkan permintaan ini menjadi ",(0,t.kt)("inlineCode",{parentName:"p"},"true"),". Output kod ini ada dalam komen."),(0,t.kt)("p",null,"Casbin telah menyediakan banyak API yang serupa dengan ini. API ini menambah beberapa fungsi tambahan kepada yang asas. Antara lain:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"ok, err := enforcer.EnforceWithMatcher(matcher, request)")),(0,t.kt)("p",{parentName:"li"},"Fungsi ini menggunakan pencocok.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"ok, reason, err := enforcer.EnforceExWithMatcher(matcher, request)")),(0,t.kt)("p",{parentName:"li"},"Ini adalah gabungan ",(0,t.kt)("inlineCode",{parentName:"p"},"EnforceWithMatcher()")," dan ",(0,t.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"boolArray, err := enforcer.BatchEnforce(requests)")),(0,t.kt)("p",{parentName:"li"},"Fungsi ini membolehkan senarai pekerjaan dan mengembalikan array."))),(0,t.kt)("p",null,"Ini adalah kes penggunaan mudah Casbin. Anda boleh menggunakan Casbin untuk memulakan pelayan pengkalan dengan menggunakan API ini. Kami akan menunjukkan kepada anda beberapa jenis API lain dalam perenggan berikut."),(0,t.kt)("h2",{id:"api-pengurusan"},"API Pengurusan"),(0,t.kt)("h3",{id:"api-dapatkan"},"API Dapatkan"),(0,t.kt)("p",null,"API ini digunakan untuk mengambil objek tertentu dalam dasar. Dalam contoh ini, kami memuatkan enforcer dan mengambil sesuatu daripadanya."),(0,t.kt)("p",null,"Sila lihat kod berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'enforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\nallSubjects := enforcer.GetAllSubjects()\nfmt.Println(allSubjects)\n')),(0,t.kt)("p",null,"Serupa dengan contoh sebelumnya, empat baris pertama digunakan untuk memuatkan maklumat yang diperlukan dari fail tempatan. Kami tidak akan membincangkan perkara itu di sini lagi."),(0,t.kt)("p",null,"Kod ",(0,t.kt)("inlineCode",{parentName:"p"},"allSubjects := enforcer.GetAllSubjects()")," mengambil semua subjek dalam fail polisi dan mengembalikannya sebagai array. Kami kemudian mencetak array tersebut."),(0,t.kt)("p",null,"Biasanya, output kod tersebut sepatutnya:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"[admin alice bob]\n")),(0,t.kt)("p",null,"Anda juga boleh menukar fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," kepada ",(0,t.kt)("inlineCode",{parentName:"p"},"GetAllNamedSubjects()")," untuk mendapatkan senarai subjek yang muncul dalam polisi bernama semasa."),(0,t.kt)("p",null,"Begitu juga, kami telah menyediakan fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"GetAll")," untuk ",(0,t.kt)("inlineCode",{parentName:"p"},"Objects, Actions, Roles"),". Untuk mengakses fungsi-fungsi ini, anda hanya perlu menggantikan perkataan ",(0,t.kt)("inlineCode",{parentName:"p"},"Subject")," dalam nama fungsi dengan kategori yang diinginkan."),(0,t.kt)("p",null,"Selain itu, terdapat lebih banyak getter yang tersedia untuk polisi. Kaedah panggilan dan nilai pulangan adalah serupa dengan yang dinyatakan di atas."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"policy = e.GetPolicy()")," mengambil semua peraturan kebenaran dalam polisi."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},'filteredPolicy := e.GetFilteredPolicy(0, "alice")')," mengambil semua peraturan keizinan dalam dasar dengan penapis medan yang ditentukan."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},'namedPolicy := e.GetNamedPolicy("p")')," mengambil semua peraturan keizinan dalam dasar bernama."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},'filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "bob")')," mengambil semua peraturan keizinan dalam dasar bernama dengan penapis medan yang ditentukan."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"groupingPolicy := e.GetGroupingPolicy()")," mengambil semua peraturan warisan peranan dalam dasar."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},'filteredGroupingPolicy := e.GetFilteredGroupingPolicy(0, "alice")')," mengambil semua peraturan warisan peranan dalam dasar dengan penapis medan yang ditentukan."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetNamedGroupingPolicy("g")')," mengambil semua peraturan warisan peranan dalam dasar."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetFilteredNamedGroupingPolicy("g", 0, "alice")')," mengambil semua peraturan warisan peranan dalam dasar dengan penapis medan yang ditentukan.")),(0,t.kt)("h3",{id:"tambah-hapus-kemas-kini-api"},"Tambah, Hapus, Kemas Kini API"),(0,t.kt)("p",null,"Casbin menyediakan pelbagai API untuk menambah, menghapus, atau mengubah suai dasar secara dinamik pada waktu runtime."),(0,t.kt)("p",null,"Kod berikut menunjukkan bagaimana untuk menambah, mengeluarkan, dan mengemas kini dasar, serta bagaimana untuk memeriksa sama ada dasar wujud:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'// load information from files\nenforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\n\n// add a policy and use HasPolicy() to confirm\nenforcer.AddPolicy("added_user", "data1", "read")\nhasPolicy := enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // true, the policy was added successfully\n\n// remove a policy and use HasPolicy() to confirm\nenforcer.RemovePolicy("alice", "data1", "read")\nhasPolicy = enforcer.HasPolicy("alice", "data1", "read")\nfmt.Println(hasPolicy) // false, the policy was removed successfully\n\n// update a policy and use HasPolicy() to confirm\nenforcer.UpdatePolicy([]string{"added_user", "data1", "read"}, []string{"added_user", "data1", "write"})\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // false, the original policy has expired\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "write")\nfmt.Println(hasPolicy) // true, the new policy is in effect\n')),(0,t.kt)("p",null,"Dengan menggunakan API ini, anda boleh mengedit polisi anda secara dinamik. Begitu juga, kami telah menyediakan API yang serupa untuk ",(0,t.kt)("inlineCode",{parentName:"p"},"FilteredPolicy, NamedPolicy, FilteredNamedPolicy, GroupingPolicy, NamedGroupingPolicy, FilteredGroupingPolicy, FilteredNamedGroupingPolicy"),". Untuk menggunakannya, gantikan sahaja perkataan ",(0,t.kt)("inlineCode",{parentName:"p"},"Policy")," dalam nama fungsi dengan kategori yang sesuai."),(0,t.kt)("p",null,"Selain itu, dengan mengubah parameter kepada tatasusunan, anda boleh melakukan pengeditan kumpulan polisi anda."),(0,t.kt)("p",null,"Sebagai contoh, pertimbangkan fungsi seperti ini:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicy([]string{"eve", "data3", "read"}, []string{"eve", "data3", "write"})\n')),(0,t.kt)("p",null,"Jika kita menukar ",(0,t.kt)("inlineCode",{parentName:"p"},"Policy")," kepada ",(0,t.kt)("inlineCode",{parentName:"p"},"Policies")," dan mengubah parameter seperti berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicies([][]string{{"eve", "data3", "read"}, {"jack", "data3", "read"}}, [][]string{{"eve", "data3", "write"}, {"jack", "data3", "write"}})\n')),(0,t.kt)("p",null,"maka kita boleh melakukan pengeditan kumpulan polisi ini."),(0,t.kt)("p",null,"Operasi yang sama juga boleh dikenakan kepada ",(0,t.kt)("inlineCode",{parentName:"p"},"GroupingPolicy, NamedGroupingPolicy"),"."),(0,t.kt)("h3",{id:"api-addex"},"API AddEx"),(0,t.kt)("p",null,"Casbin menyediakan siri API AddEx untuk membantu pengguna menambah peraturan secara kumpulan."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},"AddPoliciesEx(rules [][]string) (bool, error)\nAddNamedPoliciesEx(ptype string, rules [][]string) (bool, error)\nAddGroupingPoliciesEx(rules [][]string) (bool, error)\nAddNamedGroupingPoliciesEx(ptype string, rules [][]string) (bool, error)\nSelfAddPoliciesEx(sec string, ptype string, rules [][]string) (bool, error) \n")),(0,t.kt)("p",null,"Perbezaan antara kaedah-kaedah ini dan kaedah-kaedah tanpa akhiran Ex adalah bahawa jika salah satu peraturan sudah wujud, mereka akan terus menyemak peraturan seterusnya bukannya mengembalikan salah serta-merta."),(0,t.kt)("p",null,"Sebagai contoh, mari bandingkan ",(0,t.kt)("inlineCode",{parentName:"p"},"AddPolicies")," dan ",(0,t.kt)("inlineCode",{parentName:"p"},"AddPoliciesEx"),"."),(0,t.kt)("p",null,"Anda boleh menjalankan dan mengamati kod berikut dengan menyalinnya ke dalam ujian di bawah casbin."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'func TestDemo(t *testing.T) {\n    e, err := NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n    if err != nil {\n        fmt.Printf("Error, details: %s\\n", err)\n    }\n    e.ClearPolicy()\n    e.AddPolicy("user1", "data1", "read")\n    fmt.Println(e.GetPolicy())\n    testGetPolicy(t, e, [][]string{{"user1", "data1", "read"}})\n\n    // policy {"user1", "data1", "read"} now exists\n\n    // Use AddPolicies to add rules in batches\n    ok, _ := e.AddPolicies([][]string{{"user1", "data1", "read"}, {"user2", "data2", "read"}})\n    fmt.Println(e.GetPolicy())\n    // {"user2", "data2", "read"} failed to add because {"user1", "data1", "read"} already exists\n    // AddPolicies returns false and no other policies are checked, even though they may not exist in the existing ruleset\n    // ok == false\n    fmt.Println(ok)\n    testGetPolicy(t, e, [][]string{{"user1", "data1", "read"}})\n\n    // Use AddPoliciesEx to add rules in batches\n    ok, _ = e.AddPoliciesEx([][]string{{"user1", "data1", "read"}, {"user2", "data2", "read"}})\n    fmt.Println(e.GetPolicy())\n    // {"user2", "data2", "read"} is added successfully\n    // because AddPoliciesEx automatically filters the existing {"user1", "data1", "read"}\n    // ok == true\n    fmt.Println(ok)\n    testGetPolicy(t, e, [][]string{{"user1", "data1", "read"}, {"user2", "data2", "read"}})\n}\n')),(0,t.kt)("h2",{id:"rbac-api"},"RBAC API"),(0,t.kt)("p",null,"Casbin menyediakan beberapa API untuk anda mengubah model dan polisi RBAC. Jika anda biasa dengan RBAC, anda boleh menggunakan API ini dengan mudah."),(0,t.kt)("p",null,"Di sini, kami hanya menunjukkan kepada anda cara menggunakan API RBAC Casbin dan tidak akan membincangkan tentang RBAC itu sendiri. Anda boleh mendapatkan lebih banyak butiran ",(0,t.kt)("a",{parentName:"p",href:"/docs/rbac"},"di sini"),"."),(0,t.kt)("p",null,"Kami menggunakan kod berikut untuk memuatkan model dan polisi, sama seperti sebelumnya."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'enforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\n')),(0,t.kt)("p",null,"Kemudian, kita boleh menggunakan contoh Enforcer ",(0,t.kt)("inlineCode",{parentName:"p"},"enforcer")," untuk mengakses API ini."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := enforcer.GetRolesForUser("amber")\nfmt.Println(roles) // [admin]\nusers, err := enforcer.GetUsersForRole("admin")\nfmt.Println(users) // [amber abc]\n')),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," mengembalikan satu tatasusunan yang mengandungi semua peranan yang dimiliki oleh amber. Dalam contoh ini, amber hanya mempunyai satu peranan, iaitu admin, jadi tatasusunan ",(0,t.kt)("inlineCode",{parentName:"p"},"roles")," adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"[admin]"),". Begitu juga, anda boleh menggunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"GetUsersForRole()")," untuk mendapatkan pengguna yang tergolong dalam suatu peranan. Nilai pulangan fungsi ini juga adalah satu tatasusunan."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.HasRoleForUser("amber", "admin") // true\n')),(0,t.kt)("p",null,"Anda boleh menggunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"HasRoleForUser()")," untuk mengesahkan sama ada pengguna itu tergolong dalam peranan tersebut. Dalam contoh ini, amber adalah ahli dari admin, jadi nilai pulangan fungsi tersebut adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("bob", "data2", "write")) // true\nenforcer.DeletePermission("data2", "write")\nfmt.Println(enforcer.Enforce("bob", "data2", "write")) // false\n')),(0,t.kt)("p",null,"Anda boleh menggunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"DeletePermission()")," untuk memadamkan satu kebenaran."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("alice", "data1", "read")) // true\nenforcer.DeletePermissionForUser("alice", "data1", "read")\nfmt.Println(enforcer.Enforce("alice", "data1", "read")) // false\n')),(0,t.kt)("p",null,"Dan gunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"DeletePermissionForUser()")," untuk memadamkan satu kebenaran untuk seorang pengguna."),(0,t.kt)("p",null,"Casbin mempunyai banyak API seperti ini. Kaedah pemanggilan dan nilai pulangan mereka mempunyai gaya yang sama dengan API di atas. Anda boleh mencari API ini dalam ",(0,t.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"dokumen seterusnya"),"."))}u.isMDXComponent=!0}}]);