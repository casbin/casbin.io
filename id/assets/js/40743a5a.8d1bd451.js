"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3437],{3905:(a,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var u=t.createContext({}),s=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},p=function(a){var e=s(a.components);return t.createElement(u.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,u=a.parentName,p=o(a,["components","mdxType","originalType","parentName"]),d=s(n),m=r,c=d["".concat(u,".").concat(m)]||d[m]||k[m]||i;return n?t.createElement(c,l(l({ref:e},p),{},{components:n})):t.createElement(c,l({ref:e},p))}));function m(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=a,o.mdxType="string"==typeof a?a:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},929:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const i={id:"abac",title:"ABAC",description:"ABAC berbasis Casbin",keywords:["ABAC","ABAC model"],authors:["hsluoyz"]},l=void 0,o={unversionedId:"abac",id:"abac",title:"ABAC",description:"ABAC berbasis Casbin",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/ABAC.mdx",sourceDirName:".",slug:"/abac",permalink:"/id/docs/abac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ABAC.mdx",tags:[],version:"current",frontMatter:{id:"abac",title:"ABAC",description:"ABAC berbasis Casbin",keywords:["ABAC","ABAC model"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Casbin RBAC vs. RBAC96",permalink:"/id/docs/rbac-96"},next:{title:"Priority Model",permalink:"/id/docs/priority-model"}},u={},s=[{value:"Apa itu model ABAC?",id:"apa-itu-model-abac",level:2},{value:"Bagaimana cara menggunakan ABAC?",id:"bagaimana-cara-menggunakan-abac",level:2},{value:"Menskalakan model untuk aturan ABAC yang kompleks dan jumlah besar",id:"menskalakan-model-untuk-aturan-abac-yang-kompleks-dan-jumlah-besar",level:2}],p={toc:s};function k(a){let{components:e,...n}=a;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"apa-itu-model-abac"},"Apa itu model ABAC?"),(0,r.kt)("p",null,"ABAC merupakan singkatan dari Attribute-Based Access Control. Ini memungkinkan Anda mengendalikan akses dengan menggunakan atribut (properti) subjek, objek, atau tindakan, bukan dengan menggunakan nilai string itu sendiri. Anda mungkin pernah mendengar tentang bahasa kontrol akses ABAC yang rumit yang disebut XACML. ABAC Casbin, di sisi lain, jauh lebih sederhana. Di ABAC Casbin, Anda dapat menggunakan struct atau instance kelas alih-alih string untuk elemen model."),(0,r.kt)("p",null,"Mari kita lihat contoh resmi ABAC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == r.obj.Owner\n")),(0,r.kt)("p",null,"Dalam matcher, kita menggunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"r.obj.Owner")," alih-alih ",(0,r.kt)("inlineCode",{parentName:"p"},"r.obj"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"r.obj")," yang diteruskan dalam fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforce()")," akan menjadi struct atau instance kelas daripada string. Casbin akan menggunakan refleksi untuk mengambil variabel anggota ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," dalam struct atau kelas tersebut untuk Anda."),(0,r.kt)("p",null,"Berikut adalah definisi untuk struct atau kelas ",(0,r.kt)("inlineCode",{parentName:"p"},"r.obj"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type testResource struct {\n    Name  string\n    Owner string\n}\n")),(0,r.kt)("p",null,"Jika Anda ingin meneruskan parameter ke enforcer melalui JSON, Anda perlu mengaktifkan fungsi tersebut dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"e.EnableAcceptJsonRequest(true)"),"."),(0,r.kt)("p",null,"Misalnya:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("examples/abac_model.conf")\ne.EnableAcceptJsonRequest(true)\n\ndata1Json := `{ "Name": "data1", "Owner": "bob"}`\n\nok, _ := e.Enforce("alice", data1Json, "read")\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Mengaktifkan fungsi penerimaan parameter JSON dapat mengakibatkan penurunan performa sebesar 1,1 hingga 1,5 kali.")),(0,r.kt)("h2",{id:"bagaimana-cara-menggunakan-abac"},"Bagaimana cara menggunakan ABAC?"),(0,r.kt)("p",null,"Untuk menggunakan ABAC, Anda perlu melakukan dua hal:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tentukan atribut-atribut dalam pencocok model."),(0,r.kt)("li",{parentName:"ol"},"Lewatkan instance struct atau kelas untuk elemen tersebut sebagai argumen ke fungsi ",(0,r.kt)("inlineCode",{parentName:"li"},"Enforce()")," Casbin.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Saat ini, hanya elemen permintaan seperti ",(0,r.kt)("inlineCode",{parentName:"p"},"r.sub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"r.obj"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"r.act"),", dan sebagainya yang mendukung ABAC. Anda tidak dapat menggunakannya pada elemen kebijakan seperti ",(0,r.kt)("inlineCode",{parentName:"p"},"p.sub")," karena tidak ada cara untuk mendefinisikan struct atau kelas dalam kebijakan Casbin.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Anda dapat menggunakan beberapa atribut ABAC dalam pencocok. Contohnya: ",(0,r.kt)("inlineCode",{parentName:"p"},"m = r.sub.Domain == r.obj.Domain"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jika Anda perlu menggunakan koma dalam kebijakan yang bertentangan dengan pemisah CSV, Anda dapat meng-escape-nya dengan mengapit pernyataan tersebut dengan tanda kutip. Misalnya, ",(0,r.kt)("inlineCode",{parentName:"p"},'"keyMatch("bob", r.sub.Role)"')," tidak akan dipisah.")),(0,r.kt)("h2",{id:"menskalakan-model-untuk-aturan-abac-yang-kompleks-dan-jumlah-besar"},"Menskalakan model untuk aturan ABAC yang kompleks dan jumlah besar"),(0,r.kt)("p",null,"Implementasi model ABAC di atas pada dasarnya sederhana. Namun, dalam banyak kasus, sistem otorisasi memerlukan sejumlah besar dan kompleks dari aturan ABAC. Untuk mengakomodasi kebutuhan ini, disarankan untuk menambahkan aturan dalam kebijakan daripada dalam model. Hal ini dapat dilakukan dengan memperkenalkan konstruksi fungsional ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()"),". Berikut adalah contohnya:"),(0,r.kt)("p",null,"Ini adalah definisi file ",(0,r.kt)("inlineCode",{parentName:"p"},"CONF")," yang digunakan untuk mendefinisikan model ABAC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub_rule, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"Dalam contoh ini, ",(0,r.kt)("inlineCode",{parentName:"p"},"p.sub_rule")," adalah struct atau kelas (tipe yang ditentukan pengguna) yang berisi atribut-atribut yang diperlukan untuk digunakan dalam kebijakan."),(0,r.kt)("p",null,"Ini adalah kebijakan yang digunakan terhadap model untuk ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforcement"),". Sekarang, Anda dapat menggunakan instance objek yang diteruskan ke ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()")," sebagai parameter untuk mendefinisikan batasan ABAC tertentu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, r.sub.Age > 18, /data1, read\np, r.sub.Age < 60, /data2, write\n")))}k.isMDXComponent=!0}}]);