"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4732],{3905:(a,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var i=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function t(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,i)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,i,r=function(a,e){if(null==a)return{};var n,i,r={},t=Object.keys(a);for(i=0;i<t.length;i++)n=t[i],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(i=0;i<t.length;i++)n=t[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var d=i.createContext({}),p=function(a){var e=i.useContext(d),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},k=function(a){var e=p(a.components);return i.createElement(d.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(a,e){var n=a.components,r=a.mdxType,t=a.originalType,d=a.parentName,k=l(a,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(d,".").concat(m)]||u[m]||o[m]||t;return n?i.createElement(g,s(s({ref:e},k),{},{components:n})):i.createElement(g,s({ref:e},k))}));function m(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var t=n.length,s=new Array(t);s[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=a,l.mdxType="string"==typeof a?a:r,s[1]=l;for(var p=2;p<t;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8669:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const t={id:"understanding-casbin-detail",title:"Understanding How Casbin Matching Works in Detail",description:"Kebijakan Pengembalian Dana Situs Web Casbin",keywords:["RBAC","ACL"],authors:["aravindarc"]},s=void 0,l={unversionedId:"understanding-casbin-detail",id:"understanding-casbin-detail",title:"Understanding How Casbin Matching Works in Detail",description:"Kebijakan Pengembalian Dana Situs Web Casbin",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/UnderstandingCasbinMatchingInDetail.mdx",sourceDirName:".",slug:"/understanding-casbin-detail",permalink:"/id/docs/understanding-casbin-detail",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/UnderstandingCasbinMatchingInDetail.mdx",tags:[],version:"current",frontMatter:{id:"understanding-casbin-detail",title:"Understanding How Casbin Matching Works in Detail",description:"Kebijakan Pengembalian Dana Situs Web Casbin",keywords:["RBAC","ACL"],authors:["aravindarc"]},sidebar:"docs",previous:{title:"Tutorials",permalink:"/id/docs/tutorials"},next:{title:"Model",permalink:"/id/docs/category/model"}},d={},p=[{value:"Pengenalan ke RBAC",id:"pengenalan-ke-rbac",level:2},{value:"Memahami RBAC Hierarkis Azure",id:"memahami-rbac-hierarkis-azure",level:2},{value:"Bagaimana Cara Kerja Casbin?",id:"bagaimana-cara-kerja-casbin",level:2},{value:"Apa itu ACL?",id:"apa-itu-acl",level:2},{value:"Definisi model",id:"definisi-model",level:3},{value:"Sekarang mari kita uji model pada editor Casbin",id:"sekarang-mari-kita-uji-model-pada-editor-casbin",level:3},{value:"Representasi visual dari model ACL, kebijakan, dan pencocokan permintaan",id:"representasi-visual-dari-model-acl-kebijakan-dan-pencocokan-permintaan",level:3},{value:"Apa itu RBAC?",id:"apa-itu-rbac",level:2},{value:"Definisi model",id:"definisi-model-1",level:3},{value:"Sekarang mari kita uji model tersebut pada editor Casbin",id:"sekarang-mari-kita-uji-model-tersebut-pada-editor-casbin",level:3},{value:"Representasi visual dari model RBAC, kebijakan, dan pencocokan permintaan",id:"representasi-visual-dari-model-rbac-kebijakan-dan-pencocokan-permintaan",level:3},{value:"Apa itu RBAC Hierarkis?",id:"apa-itu-rbac-hierarkis",level:2},{value:"Definisi model",id:"definisi-model-2",level:3},{value:"Sekarang mari kita uji model ini pada editor Casbin",id:"sekarang-mari-kita-uji-model-ini-pada-editor-casbin",level:3},{value:"Representasi visual dari model RBAC, kebijakan, dan pencocokan permintaan",id:"representasi-visual-dari-model-rbac-kebijakan-dan-pencocokan-permintaan-1",level:3},{value:"Representasi visual pencocokan subjek",id:"representasi-visual-pencocokan-subjek",level:4},{value:"Representasi visual pencocokan tindakan",id:"representasi-visual-pencocokan-tindakan",level:4},{value:"Representasi visual pencocokan objek",id:"representasi-visual-pencocokan-objek",level:4},{value:"Kesimpulan",id:"kesimpulan",level:2}],k={toc:p};function o(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,i.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dalam postingan ini, saya akan menjelaskan desain dan implementasi RBAC menggunakan pustaka ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),". Untuk platform SaaS yang menangani beberapa hierarki sumber daya dan peran yang mewarisi izin dari tingkat yang lebih tinggi, Casbin menawarkan alternatif yang performan untuk dipertimbangkan."),(0,r.kt)("h2",{id:"pengenalan-ke-rbac"},"Pengenalan ke RBAC"),(0,r.kt)("p",null,"RBAC adalah metode untuk membatasi akses ke sumber daya berdasarkan peran yang dimiliki individu. Untuk lebih memahami bagaimana RBAC hierarkis bekerja, mari kita lihat sistem RBAC Azure di bagian berikutnya dan kemudian mencoba mengimplementasikan sistem serupa."),(0,r.kt)("h2",{id:"memahami-rbac-hierarkis-azure"},"Memahami RBAC Hierarkis Azure"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/media/organize-resources/scope-levels.png",alt:"Hierarki Azure"})),(0,r.kt)("p",null,"Ada peran yang disebut ",(0,r.kt)("strong",{parentName:"p"},"Pemilik")," untuk semua sumber daya di Azure. Misalkan jika saya memiliki peran ",(0,r.kt)("strong",{parentName:"p"},"Pemilik")," yang ditetapkan kepada saya pada tingkat langganan, itu berarti saya adalah ",(0,r.kt)("strong",{parentName:"p"},"Pemilik")," dari semua grup sumber daya dan sumber daya di bawah langganan tersebut. Jika saya memiliki ",(0,r.kt)("strong",{parentName:"p"},"Pemilik")," pada tingkat grup sumber daya, maka saya adalah ",(0,r.kt)("strong",{parentName:"p"},"Pemilik")," dari semua sumber daya di bawah grup sumber daya tersebut."),(0,r.kt)("p",null,"Gambar ini menunjukkan bahwa saya memiliki akses ",(0,r.kt)("strong",{parentName:"p"},"Pemilik")," pada tingkat langganan. ",(0,r.kt)("img",{alt:"Pemilik Langganan",src:n(6970).Z,width:"3456",height:"1836"})),(0,r.kt)("p",null,"Ketika saya memeriksa IAM dari Grup Sumber Daya di bawah Langganan ini, Anda dapat melihat bahwa saya mewarisi akses ",(0,r.kt)("strong",{parentName:"p"},"Pemilik")," dari langganan. ",(0,r.kt)("img",{alt:"Pemilik RG",src:n(9742).Z,width:"3456",height:"1836"})),(0,r.kt)("p",null,"Jadi, begini cara kerja RBAC di Azure yang bersifat hierarkis. Sebagian besar perangkat lunak perusahaan menggunakan RBAC hierarkis karena sifat hierarkis dari tingkat sumber daya. Dalam tutorial ini, kita akan mencoba mengimplementasikan sistem serupa menggunakan Casbin."),(0,r.kt)("h2",{id:"bagaimana-cara-kerja-casbin"},"Bagaimana Cara Kerja Casbin?"),(0,r.kt)("p",null,"Sebelum menyelam ke dalam implementasi, penting untuk memahami apa itu Casbin dan bagaimana ia berfungsi pada tingkat tinggi. Pemahaman ini diperlukan karena setiap sistem Kontrol Akses Berbasis Peran (RBAC) mungkin bervariasi berdasarkan persyaratan khusus. Dengan memahami cara kerja Casbin, kita dapat secara efektif menyesuaikan modelnya."),(0,r.kt)("h2",{id:"apa-itu-acl"},"Apa itu ACL?"),(0,r.kt)("p",null,"ACL adalah singkatan dari Access Control List. Ini adalah metode di mana pengguna dipetakan ke tindakan dan tindakan ke sumber daya."),(0,r.kt)("h3",{id:"definisi-model"},"Definisi model"),(0,r.kt)("p",null,"Mari kita pertimbangkan contoh sederhana dari model ACL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[request_definition]\nr = sub, act, obj\n\n[policy_definition]\np = sub, act, obj\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"request","_","definition")," adalah templat kueri dari sistem. Misalnya, permintaan ",(0,r.kt)("inlineCode",{parentName:"p"},"alice, write, data1")," dapat diinterpretasikan sebagai \"Dapatkah subjek Alice melakukan aksi 'write' pada objek 'data1'?\"")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"policy","_","definition")," adalah templat penetapan dari sistem. Misalnya, dengan membuat kebijakan ",(0,r.kt)("inlineCode",{parentName:"p"},"alice, write, data1"),", Anda memberikan izin kepada subjek Alice untuk melakukan aksi 'write' pada objek 'data1'.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"policy","_","effect")," mendefinisikan efek dari kebijakan.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Di bagian ",(0,r.kt)("strong",{parentName:"p"},"matchers"),", permintaan dipasangkan dengan kebijakan menggunakan kondisi ",(0,r.kt)("inlineCode",{parentName:"p"},"r.sub == p.sub && r.obj == p.obj && r.act == p.act"),"."))),(0,r.kt)("h3",{id:"sekarang-mari-kita-uji-model-pada-editor-casbin"},"Sekarang mari kita uji model pada editor Casbin"),(0,r.kt)("p",null,"Buka ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"editor")," dan tempel model di atas ke dalam Model editor."),(0,r.kt)("p",null,"Tempelkan yang berikut ini di editor Kebijakan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, read, data1\np, bob, write, data2\n")),(0,r.kt)("p",null,"dan yang berikut ini di editor Permintaan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"alice, read, data1\n")),(0,r.kt)("p",null,"Hasilnya akan menjadi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"true\n")),(0,r.kt)("h3",{id:"representasi-visual-dari-model-acl-kebijakan-dan-pencocokan-permintaan"},"Representasi visual dari model ACL, kebijakan, dan pencocokan permintaan"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"acl",src:n(3353).Z,width:"6968",height:"3096"})),(0,r.kt)("h2",{id:"apa-itu-rbac"},"Apa itu RBAC?"),(0,r.kt)("p",null,"RBAC merupakan singkatan dari Role-Based Access Control. Dalam RBAC, seorang pengguna diberikan peran untuk suatu sumber daya, dan sebuah peran dapat mengandung tindakan sewenang-wenang. Permintaan kemudian memeriksa apakah pengguna memiliki izin untuk melakukan tindakan pada sumber daya tersebut."),(0,r.kt)("h3",{id:"definisi-model-1"},"Definisi model"),(0,r.kt)("p",null,"Mari kita pertimbangkan contoh model RBAC yang sederhana:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[request_definition]\nr = sub, act, obj\n\n[policy_definition]\np = sub, act, obj\n\n[role_definition]\ng = _, _\ng2 = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && g(p.act, r.act) && r.obj == p.obj\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"role","_","definition")," adalah pembangun relasi grafik yang menggunakan Graf untuk membandingkan objek permintaan dengan objek kebijakan.")),(0,r.kt)("h3",{id:"sekarang-mari-kita-uji-model-tersebut-pada-editor-casbin"},"Sekarang mari kita uji model tersebut pada editor Casbin"),(0,r.kt)("p",null,"Buka ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"editor")," dan tempel model di atas ke dalam Model editor."),(0,r.kt)("p",null,"Tempelkan yang berikut ini di Policy editor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, reader, data1\np, bob, owner, data2\n\ng, reader, read\ng, owner, read\ng, owner, write\n")),(0,r.kt)("p",null,"dan yang berikut ini di Request editor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"alice, read, data1\nalice, write, data1\nbob, write, data2\nbob, read, data2\nbob, write, data1\n")),(0,r.kt)("p",null,"Hasilnya akan menjadi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"true\nfalse\ntrue\ntrue\nfalse\n")),(0,r.kt)("h3",{id:"representasi-visual-dari-model-rbac-kebijakan-dan-pencocokan-permintaan"},"Representasi visual dari model RBAC, kebijakan, dan pencocokan permintaan"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rbac",src:n(3859).Z,width:"7016",height:"2844"})),(0,r.kt)("p",null,"Tabel ",(0,r.kt)("strong",{parentName:"p"},"g - Pemetaan peran ke tindakan")," memiliki pemetaan Graf yang memetakan peran ke tindakan. Grafik ini dapat dikodekan sebagai daftar tepi, seperti yang ditunjukkan dalam kebijakan yang merupakan cara umum untuk mewakili Grafik:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"g, reader, read\ng, owner, read\ng, owner, write\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"p")," menunjukkan kebijakan normal yang dapat dibandingkan menggunakan operator ",(0,r.kt)("strong",{parentName:"p"},"=="),". ",(0,r.kt)("strong",{parentName:"p"},"g")," adalah fungsi perbandingan berbasis Grafik. Anda dapat mendefinisikan beberapa pembanding Grafik dengan menambahkan akhiran numerik seperti ",(0,r.kt)("strong",{parentName:"p"},"g, g2, g3, ...")," dan seterusnya.")),(0,r.kt)("h2",{id:"apa-itu-rbac-hierarkis"},"Apa itu RBAC Hierarkis?"),(0,r.kt)("p",null,'Dalam RBAC Hierarkis, terdapat lebih dari satu jenis sumber daya dan ada hubungan warisan antara jenis sumber daya tersebut. Misalnya, "subscription" adalah satu jenis dan "resourceGroup" adalah jenis lain. sub1 dari jenis ',(0,r.kt)("strong",{parentName:"p"},"Subscription")," dapat mengandung beberapa resourceGroups (rg1, rg2) dari jenis ",(0,r.kt)("strong",{parentName:"p"},"ResourceGroup"),"."),(0,r.kt)("p",null,"Serupa dengan hierarki sumber daya, akan ada dua jenis peran dan tindakan: Peran dan tindakan Subscription, serta Peran dan tindakan ResourceGroup. Terdapat hubungan sewenang-wenang antara peran Subscription dan peran ResourceGroup. Misalnya, pertimbangkan peran Langganan ",(0,r.kt)("strong",{parentName:"p"},"sub-owner"),". Peran ini diwariskan oleh Peran Grup Sumber Daya ",(0,r.kt)("strong",{parentName:"p"},"rg-owner"),", yang berarti jika saya diberikan peran ",(0,r.kt)("strong",{parentName:"p"},"sub-owner")," pada Langganan ",(0,r.kt)("strong",{parentName:"p"},"sub1"),", maka saya juga secara otomatis mendapatkan peran ",(0,r.kt)("strong",{parentName:"p"},"rg-owner")," pada ",(0,r.kt)("strong",{parentName:"p"},"rg1 dan rg2"),"."),(0,r.kt)("h3",{id:"definisi-model-2"},"Definisi model"),(0,r.kt)("p",null,"Mari kita ambil contoh sederhana dari model ",(0,r.kt)("strong",{parentName:"p"},"Hierarchical RBAC"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[request_definition]\nr = sub, act, obj\n\n[policy_definition]\np = sub, act, obj\n\n[role_definition]\ng = _, _\ng2 = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && g(p.act, r.act) && g2(p.obj, r.obj)\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"role","_","definition")," adalah pembuat relasi grafik yang menggunakan Graf untuk membandingkan objek permintaan dengan objek kebijakan.")),(0,r.kt)("h3",{id:"sekarang-mari-kita-uji-model-ini-pada-editor-casbin"},"Sekarang mari kita uji model ini pada editor Casbin"),(0,r.kt)("p",null,"Buka ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"editor")," dan tempel model di atas ke dalam Model editor."),(0,r.kt)("p",null,"Tempelkan berikut ini di Policy editor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, sub-reader, sub1\np, bob, rg-owner, rg2\n\n// subscription role to subscription action mapping\ng, sub-reader, sub-read\ng, sub-owner, sub-read\ng, sub-owner, sub-write\n\n// resourceGroup role to resourceGroup action mapping\ng, rg-reader, rg-read\ng, rg-owner, rg-read\ng, rg-owner, rg-write\n\n// subscription role to resourceGroup role mapping\ng, sub-reader, rg-reader\ng, sub-owner, rg-owner\n\n// subscription resource to resourceGroup resource mapping\ng2, sub1, rg1\ng2, sub2, rg2\n")),(0,r.kt)("p",null,"Dan tempelkan berikut ini di Request editor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"alice, rg-read, rg1\n")),(0,r.kt)("p",null,"Hasilnya akan menjadi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"true\n")),(0,r.kt)("h3",{id:"representasi-visual-dari-model-rbac-kebijakan-dan-pencocokan-permintaan-1"},"Representasi visual dari model RBAC, kebijakan, dan pencocokan permintaan"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hrbac",src:n(4492).Z,width:"7968",height:"4204"})),(0,r.kt)("p",null,"Tabel ",(0,r.kt)("strong",{parentName:"p"},"g - Pemetaan Peran ke (Tindakan, Peran)")," memiliki grafik yang memetakan peran ke pemetaan tindakan, peran. Grafik ini dapat dikodekan sebagai daftar tepi, seperti yang ditunjukkan dalam kebijakan, yang merupakan cara umum untuk merepresentasikan grafik:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"// subscription role to subscription action mapping\ng, sub-reader, sub-read\ng, sub-owner, sub-read\ng, sub-owner, sub-write\n\n// resourceGroup role to resourceGroup action mapping\ng, rg-reader, rg-read\ng, rg-owner, rg-read\ng, rg-owner, rg-write\n\n// subscription role to resourceGroup role mapping\ng, sub-reader, rg-reader\ng, sub-owner, rg-owner\n")),(0,r.kt)("p",null,"Tabel ",(0,r.kt)("strong",{parentName:"p"},"g2 - Pemetaan Sub ke RG")," memiliki grafik yang memetakan langganan ke resourceGroup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"// subscription resource to resourceGroup resource mapping\ng2, sub1, rg1\ng2, sub2, rg2\n")),(0,r.kt)("h4",{id:"representasi-visual-pencocokan-subjek"},"Representasi visual pencocokan subjek"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hrbac-sub-match",src:n(3541).Z,width:"8176",height:"4336"})),(0,r.kt)("h4",{id:"representasi-visual-pencocokan-tindakan"},"Representasi visual pencocokan tindakan"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hrbac-act-match",src:n(8303).Z,width:"7964",height:"4376"})),(0,r.kt)("h4",{id:"representasi-visual-pencocokan-objek"},"Representasi visual pencocokan objek"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hrbac-obj-match",src:n(6879).Z,width:"7964",height:"4296"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ketika sebuah permintaan diajukan ke Casbin, proses pencocokan ini terjadi untuk semua kebijakan. Jika setidaknya satu kebijakan cocok, maka hasil dari permintaan tersebut adalah benar. Jika tidak ada kebijakan yang cocok dengan permintaan, maka hasilnya adalah salah.")),(0,r.kt)("h2",{id:"kesimpulan"},"Kesimpulan"),(0,r.kt)("p",null,"Dalam tutorial ini, kita belajar tentang bagaimana model otorisasi yang berbeda bekerja dan bagaimana mereka dapat dimodelkan menggunakan Casbin. Di bagian kedua dari tutorial ini, kita akan mengimplementasikannya dalam aplikasi demo Spring Boot dan mengamankan API menggunakan Casbin."))}o.isMDXComponent=!0},3353:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/acl-704097c47b27a1f2235c82f593af469e.png"},8303:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/hrbac-act-match-bbb086158782591771f2df01419dc4b8.png"},6879:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/hrbac-obj-match-aad370d5cbfe1020ec108b9242f8d4bd.png"},3541:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/hrbac-sub-match-55dffd4e5fadb9773658dc90bacbb091.png"},4492:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/hrbac-1350d755e04234a34394996344d2b259.png"},3859:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/rbac-4c8e405408b9e4df554f7cd619eae897.png"},9742:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/rg-owner-9c6cd2ae5997a5fba717c445f43130e6.png"},6970:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/subscription-owner-f1a7e1c9c03d7c587ce910ae5e6d8a35.png"}}]);