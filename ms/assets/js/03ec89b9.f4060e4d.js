"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6294],{3905:(a,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var s=t.createContext({}),u=function(a){var e=t.useContext(s),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},p=function(a){var e=u(a.components);return t.createElement(s.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,s=a.parentName,p=o(a,["components","mdxType","originalType","parentName"]),k=u(n),m=r,c=k["".concat(s,".").concat(m)]||k[m]||d[m]||i;return n?t.createElement(c,l(l({ref:e},p),{},{components:n})):t.createElement(c,l({ref:e},p))}));function m(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o.mdxType="string"==typeof a?a:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4115:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const i={id:"how-it-works",title:"How It Works",description:"Bagaimana Casbin Berfungsi",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},l=void 0,o={unversionedId:"how-it-works",id:"how-it-works",title:"How It Works",description:"Bagaimana Casbin Berfungsi",source:"@site/i18n/ms/docusaurus-plugin-content-docs/current/HowItWorks.mdx",sourceDirName:".",slug:"/how-it-works",permalink:"/ms/docs/how-it-works",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/HowItWorks.mdx",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"How It Works",description:"Bagaimana Casbin Berfungsi",keywords:["PERM","request","policy","matcher","effect"],authors:["nodece"]},sidebar:"docs",previous:{title:"Get Started",permalink:"/ms/docs/get-started"},next:{title:"Tutorials",permalink:"/ms/docs/tutorials"}},s={},u=[{value:"Request",id:"request",level:3},{value:"Policy",id:"policy",level:3},{value:"Matcher",id:"matcher",level:3},{value:"Effect",id:"effect",level:3}],p={toc:u};function d(a){let{components:e,...n}=a;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dalam Casbin, model kawalan akses diabstrakkan ke dalam fail CONF berdasarkan ",(0,r.kt)("strong",{parentName:"p"},"model metamodel PERM (Policy, Effect, Request, Matchers)"),". Menukar atau menaik taraf mekanisme pengkalan untuk satu projek adalah semudah mengubah suai konfigurasi. Anda boleh menyesuaikan model kawalan akses anda sendiri dengan menggabungkan model yang ada. Sebagai contoh, anda boleh menggabungkan peranan RBAC dan atribut ABAC bersama dalam satu model dan berkongsi satu set peraturan dasar."),(0,r.kt)("p",null,"Model PERM terdiri daripada empat asas: Policy, Effect, Request, dan Matchers. Asas-asas ini menerangkan hubungan antara sumber dan pengguna."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"Menentukan parameter permintaan. Permintaan asas adalah objek tuple, memerlukan sekurang-kurangnya subjek (entiti yang diakses), objek (sumber yang diakses), dan tindakan (cara akses)."),(0,r.kt)("p",null,"Contohnya, definisi permintaan mungkin kelihatan seperti ini:"),(0,r.kt)("p",null,"Definisi ini menentukan nama dan susunan parameter yang diperlukan oleh fungsi pemadanan kawalan akses."),(0,r.kt)("h3",{id:"policy"},"Policy"),(0,r.kt)("p",null,"Menentukan model untuk strategi akses. Ia menetapkan nama dan susunan medan dalam dokumen peraturan Polisi."),(0,r.kt)("p",null,"Contohnya:"),(0,r.kt)("p",null,"Perhatian: Jika eft (hasil polisi) tidak ditentukan, medan hasil dalam fail polisi tidak akan dibaca, dan hasil polisi pemadanan akan dibenarkan secara lalai."),(0,r.kt)("h3",{id:"matcher"},"Matcher"),(0,r.kt)("p",null,"Menentukan peraturan padanan untuk Permintaan dan Polisi."),(0,r.kt)("p",null,"Sebagai contoh: ",(0,r.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p.obj")," Hasil strategi akan disimpan dalam ",(0,r.kt)("inlineCode",{parentName:"p"},"p.eft"),"."),(0,r.kt)("h3",{id:"effect"},"Effect"),(0,r.kt)("p",null,"Melakukan penilaian gabungan logik pada hasil padanan Matchers."),(0,r.kt)("p",null,"Sebagai contoh: ",(0,r.kt)("inlineCode",{parentName:"p"},"e = some(where(p.eft == allow))")),(0,r.kt)("p",null,"Pernyataan ini bermaksud bahawa jika hasil strategi padanan ",(0,r.kt)("inlineCode",{parentName:"p"},"p.eft")," mempunyai hasil (beberapa) izin, maka hasil akhir adalah benar."),(0,r.kt)("p",null,"Mari kita lihat contoh lain:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"e = some(where (p.eft == allow)) && !some(where (p.eft == deny))")),(0,r.kt)("p",null,"Makna logik bagi gabungan contoh ini ialah: jika terdapat strategi yang sepadan dengan hasil izinkan dan tiada strategi yang sepadan dengan hasil tolak, hasilnya adalah benar. Dalam erti kata lain, ia adalah benar apabila semua strategi yang sepadan adalah izinkan. Jika terdapat sebarang tolak, kedua-duanya adalah palsu (lebih mudah, apabila izinkan dan tolak wujud pada masa yang sama, tolak mengambil keutamaan)."),(0,r.kt)("p",null,"Model yang paling asas dan paling mudah dalam Casbin ialah ACL. Konfigurasi CONF untuk ACL adalah seperti berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Request definition\n[request_definition]\nr = sub, obj, act\n\n# Policy definition\n[policy_definition]\np = sub, obj, act\n\n# Policy effect\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,r.kt)("p",null,"Contoh polisi untuk model ACL ialah:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data2, write\n")),(0,r.kt)("p",null,"Ini bermakna:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alice boleh membaca data1"),(0,r.kt)("li",{parentName:"ul"},"bob boleh menulis data2")),(0,r.kt)("p",null,"Kami juga menyokong mod multi-baris dengan menambahkan '' di hujung:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\\n  && r.act == p.act\n")),(0,r.kt)("p",null,"Selain itu, jika anda menggunakan ABAC, anda boleh mencuba operator 'in' seperti yang ditunjukkan dalam contoh berikut untuk edisi ",(0,r.kt)("strong",{parentName:"p"},"golang")," Casbin (jCasbin dan Node-Casbin masih belum disokong):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,r.kt)("p",null,"Tetapi anda ",(0,r.kt)("strong",{parentName:"p"},"HARUS")," memastikan bahawa panjang array itu ",(0,r.kt)("strong",{parentName:"p"},"LEBIH")," daripada ",(0,r.kt)("strong",{parentName:"p"},"1"),", jika tidak ia akan menyebabkan kepanikan."),(0,r.kt)("p",null,"Untuk lebih banyak operator, anda boleh melihat ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"govaluate"),"."))}d.isMDXComponent=!0}}]);