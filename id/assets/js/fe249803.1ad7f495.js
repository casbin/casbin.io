"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5183,7298,9462],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7860:(e,n,t)=>{t.d(n,{B:()=>o,Z:()=>s});var r=t(7462),a=t(7294),i=t(5576);const o=e=>e.startsWith("http://")||e.startsWith("https://"),l=e=>{let{children:n,href:t,...i}=e;return o(t)?a.createElement("a",(0,r.Z)({href:t,target:"_blank",rel:"noopener noreferrer"},i),n):a.createElement("a",(0,r.Z)({href:t},i),n)},s=e=>{let{children:n}=e;return a.createElement(i.ZP,{options:{overrides:{a:{component:l}}}},n)}},1461:(e,n,t)=>{t.d(n,{D:()=>r});const r=[{title:"[Default Role Manager (built-in)](https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go)",author:"Casbin",description:"Supports role hierarchy stored in the Casbin policy"},{title:"[Session Role Manager](https://github.com/casbin/session-role-manager)",author:"[EDOMO Systems](https://github.com/edomosystems)",description:"Supports role hierarchy stored in the Casbin policy, with time-range-based sessions",image:"/img/ecosystem/session.png"},{title:"[Okta Role Manager](https://github.com/casbin/okta-role-manager)",author:"Casbin",description:"Supports role hierarchy stored in [Okta](https://www.okta.com/)",image:"/img/ecosystem/okta.png"},{title:"[Auth0 Role Manager](https://github.com/casbin/auth0-role-manager)",author:"Casbin",description:"Supports role hierarchy stored in [Auth0](https://auth0.com/)'s [Authorization Extension](https://auth0.com/docs/extensions/authorization-extension/v2)",image:"/img/ecosystem/auth0.png"}].map((e=>({...e,tags:["Go","RoleManager"]})))},3582:(e,n,t)=>{t.d(n,{d:()=>r});const r=[{title:"[Default Role Manager (built-in)](https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java)",author:"Casbin",description:"Supports role hierarchy stored in the Casbin policy"}].map((e=>({...e,tags:["Java","RoleManager"]})))},3596:(e,n,t)=>{t.d(n,{_:()=>r});const r=[{title:"[Default Role Manager (built-in)](https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts)",author:"Casbin",description:"Supports role hierarchy stored in the Casbin policy"},{title:"[Session Role Manager](https://github.com/node-casbin/session-role-manager)",author:"Casbin",description:"Supports role hierarchy stored in the Casbin policy, with time-range-based sessions",image:"/img/ecosystem/session.png"}].map((e=>({...e,tags:["NodeJS","RoleManager"]})))},7994:(e,n,t)=>{t.d(n,{F:()=>r});const r=[{title:"[Default Role Manager (built-in)](https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php)",author:"Casbin",description:"Supports role hierarchy stored in the Casbin policy"}].map((e=>({...e,tags:["PHP","RoleManager"]})))},7171:(e,n,t)=>{t.d(n,{K:()=>r});const r=[{title:"[Default Role Manager (built-in)](https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py)",author:"Casbin",description:"Supports role hierarchy stored in the Casbin policy"}].map((e=>({...e,tags:["Python","RoleManager"]})))},6676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>M,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var r=t(7462),a=t(7294),i=t(3905),o=t(1461),l=t(3582),s=t(7860);function c(e){let{data:n}=e,t="| Role manager | Author | Description |\n|---------|--------|---------|\n";return n.forEach((e=>{t+=`| ${e.title} | ${e.author} | ${e.description} |\n`})),a.createElement(s.Z,null,t)}var p=t(3596),u=t(7994),d=t(7171);const m={id:"role-managers",title:"Role Managers",description:"Manajer peran digunakan untuk mengelola hierarki peran RBAC di Casbin.",keywords:["role manager","RBAC","Casbin"],authors:["hsluoyz"]},g=void 0,h={unversionedId:"role-managers",id:"role-managers",title:"Role Managers",description:"Manajer peran digunakan untuk mengelola hierarki peran RBAC di Casbin.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/RoleManagers.mdx",sourceDirName:".",slug:"/role-managers",permalink:"/id/docs/role-managers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RoleManagers.mdx",tags:[],version:"current",frontMatter:{id:"role-managers",title:"Role Managers",description:"Manajer peran digunakan untuk mengelola hierarki peran RBAC di Casbin.",keywords:["role manager","RBAC","Casbin"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Dispatchers",permalink:"/id/docs/dispatchers"},next:{title:"Middlewares",permalink:"/id/docs/middlewares"}},b={},f=[{value:"API",id:"api",level:2}],y=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},k=y("Tabs"),v=y("TabItem"),x={toc:f};function M(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Manajer peran digunakan untuk mengelola hierarki peran RBAC (pemetaan pengguna-peran) di Casbin. Manajer peran dapat mengambil data peran dari aturan kebijakan Casbin atau sumber eksternal seperti LDAP, Okta, Auth0, Azure AD, dll. Kami mendukung implementasi yang berbeda dari manajer peran. Untuk menjaga ke ringanannya, kami tidak menyertakan kode manajer peran dalam pustaka utama (kecuali manajer peran default). Daftar lengkap manajer peran Casbin diberikan di bawah ini. Kontribusi pihak ketiga untuk manajer peran baru sangat kami harapkan. Mohon beritahu kami, dan kami akan menambahkannya ke dalam daftar ini:)"),(0,i.kt)(k,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(v,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)(c,{data:o.D,mdxType:"RoleManagerMDTable"}),(0,i.kt)("p",null,"Untuk pengembang: semua manajer peran harus mengimplementasikan antarmuka ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/rbac/role_manager.go"},"RoleManager"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/session-role-manager"},"Session Role Manager")," dapat digunakan sebagai implementasi referensi.")),(0,i.kt)(v,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)(c,{data:l.d,mdxType:"RoleManagerMDTable"}),(0,i.kt)("p",null,"Untuk pengembang: semua manajer peran harus mengimplementasikan antarmuka ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/RoleManager.java"},"RoleManager"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"Default Role Manager")," dapat digunakan sebagai implementasi referensi.")),(0,i.kt)(v,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)(c,{data:p._,mdxType:"RoleManagerMDTable"}),(0,i.kt)("p",null,"Untuk pengembang: semua manajer peran harus mengimplementasikan antarmuka ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/roleManager.ts"},"RoleManager"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"Default Role Manager")," dapat digunakan sebagai implementasi referensi.")),(0,i.kt)(v,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,i.kt)(c,{data:u.F,mdxType:"RoleManagerMDTable"}),(0,i.kt)("p",null,"Untuk pengembang: semua manajer peran harus mengimplementasikan antarmuka ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/RoleManager.php"},"RoleManager"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"Default Role Manager")," dapat digunakan sebagai implementasi referensi.")),(0,i.kt)(v,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)(c,{data:d.K,mdxType:"RoleManagerMDTable"}),(0,i.kt)("p",null,"Untuk pengembang: semua manajer peran harus mengimplementasikan antarmuka ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/role_manager.py"},"RoleManager"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"Manajer Peran Default")," dapat digunakan sebagai implementasi referensi."))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"Lihat bagian ",(0,i.kt)("a",{parentName:"p",href:"/docs/rolemanager-api"},"API")," untuk detailnya."))}M.isMDXComponent=!0},5576:(e,n,t)=>{t.d(n,{ZP:()=>Ve});var r=t(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}const i=["children","options"];var o,l,s;(s=o||(o={})).blockQuote="0",s.breakLine="1",s.breakThematic="2",s.codeBlock="3",s.codeFenced="4",s.codeInline="5",s.footnote="6",s.footnoteReference="7",s.gfmTask="8",s.heading="9",s.headingSetext="10",s.htmlBlock="11",s.htmlComment="12",s.htmlSelfClosing="13",s.image="14",s.link="15",s.linkAngleBraceStyleDetector="16",s.linkBareUrlDetector="17",s.linkMailtoDetector="18",s.newlineCoalescer="19",s.orderedList="20",s.paragraph="21",s.ref="22",s.refImage="23",s.refLink="24",s.table="25",s.tableSeparator="26",s.text="27",s.textBolded="28",s.textEmphasized="29",s.textEscaped="30",s.textMarked="31",s.textStrikethroughed="32",s.unorderedList="33",function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(l||(l={}));const c=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,n)=>(e[n.toLowerCase()]=n,e)),{for:"htmlFor"}),p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},u=["style","script"],d=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,m=/mailto:/i,g=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,b=/^ *> ?/gm,f=/^ {2,}\n/,y=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,M=/^(?:\n *)*\n/,R=/\r\n?/g,j=/^\[\^([^\]]+)](:.*)\n/,C=/^\[\^([^\]]+)]/,w=/\f/g,T=/^\s*?\[(x|\s)\]/,O=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,D=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,E=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,P=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,A=/^<!--[\s\S]*?(?:-->)/,$=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,N=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,I=/^\{.*\}$/,_=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,z=/^<([^ >]+@[^ >]+)>/,L=/^<([^ >]+:\/[^ >]+)>/,U=/-([a-z])?/gi,B=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Z=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,H=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,F=/^\[([^\]]*)\] ?\[([^\]]*)\]/,G=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,X=/\t/g,J=/^ *\| */,K=/(^ *\||\| *$)/g,q=/ *$/,V=/^ *:-+: *$/,Q=/^ *:-+ *$/,Y=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ne=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,te=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,re=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ae=/^\\([^0-9A-Za-z\s])/,ie=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/^\n+/,le=/^([ \t]*)/,se=/\\([^\\])/g,ce=/ *\n+$/,pe=/(?:^|\n)( *)$/,ue="(?:\\d+\\.)",de="(?:[*+-])";function me(e){return"( *)("+(1===e?ue:de)+") +"}const ge=me(1),he=me(2);function be(e){return new RegExp("^"+(1===e?ge:he))}const fe=be(1),ye=be(2);function ke(e){return new RegExp("^"+(1===e?ge:he)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ue:de)+" )[^\\n]*)*(\\n|$)","gm")}const ve=ke(1),xe=ke(2);function Me(e){const n=1===e?ue:de;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}const Re=Me(1),je=Me(2);function Ce(e,n){const t=1===n,r=t?Re:je,a=t?ve:xe,i=t?fe:ye;return{match(e,n,t){const a=pe.exec(t);return a&&(n.list||!n.inline&&!n.simple)?r.exec(e=a[1]+e):null},order:1,parse(e,n,r){const o=t?+e[2]:void 0,l=e[0].replace(g,"\n").match(a);let s=!1;return{items:l.map((function(e,t){const a=i.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),c=e.replace(o,"").replace(i,""),p=t===l.length-1,u=-1!==c.indexOf("\n\n")||p&&s;s=u;const d=r.inline,m=r.list;let g;r.list=!0,u?(r.inline=!1,g=c.replace(ce,"\n\n")):(r.inline=!0,g=c.replace(ce,""));const h=n(g,r);return r.inline=d,r.list=m,h})),ordered:t,start:o}},render:(n,t,r)=>e(n.ordered?"ol":"ul",{key:r.key,start:"20"===n.type?n.start:void 0},n.items.map((function(n,a){return e("li",{key:a},t(n,r))})))}}const we=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Te=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Oe=[h,k,v,O,S,D,A,B,ve,Re,xe,je],De=[...Oe,/^[^\n]+(?:  \n|\n{2,})/,E,N];function Se(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Ee(e){return Y.test(e)?"right":V.test(e)?"center":Q.test(e)?"left":null}function Pe(e,n,t){const r=t.inTable;t.inTable=!0;const a=n(e.trim(),t);t.inTable=r;let i=[[]];return a.forEach((function(e,n){"26"===e.type?0!==n&&n!==a.length-1&&i.push([]):("27"!==e.type||null!=a[n+1]&&"26"!==a[n+1].type||(e.text=e.text.replace(q,"")),i[i.length-1].push(e))})),i}function Ae(e,n,t){t.inline=!0;const r=Pe(e[1],n,t),a=e[2].replace(K,"").split("|").map(Ee),i=function(e,n,t){return e.trim().split("\n").map((function(e){return Pe(e,n,t)}))}(e[3],n,t);return t.inline=!1,{align:a,cells:i,header:r,type:"25"}}function $e(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function Ne(e){return function(n,t){return t.inline?e.exec(n):null}}function Ie(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function _e(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function ze(e){return function(n){return e.exec(n)}}function Le(e,n,t){if(n.inline||n.simple)return null;if(t&&!t.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!Oe.some((n=>n.test(e)))&&(r+=e+"\n",e.trim())));const a=r.trimEnd();return""==a?null:[r,a]}function Ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function Be(e){return e.replace(se,"$1")}function Ze(e,n,t){const r=t.inline||!1,a=t.simple||!1;t.inline=!0,t.simple=!0;const i=e(n,t);return t.inline=r,t.simple=a,i}function He(e,n,t){const r=t.inline||!1,a=t.simple||!1;t.inline=!1,t.simple=!0;const i=e(n,t);return t.inline=r,t.simple=a,i}function Fe(e,n,t){return t.inline=!1,e(n,t)}const Ge=(e,n,t)=>({children:Ze(n,e[1],t)});function We(){return{}}function Xe(){return null}function Je(...e){return e.filter(Boolean).join(" ")}function Ke(e,n,t){let r=e;const a=n.split(".");for(;a.length&&(r=r[a[0]],void 0!==r);)a.shift();return r||t}function qe(e,n={}){n.overrides=n.overrides||{},n.slugify=n.slugify||Se,n.namedCodesToUnicode=n.namedCodesToUnicode?a({},p,n.namedCodesToUnicode):p;const t=n.createElement||r.createElement;function i(e,r,...i){const o=Ke(n.overrides,`${e}.props`,{});return t(function(e,n){const t=Ke(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Ke(n,`${e}.component`,e):e}(e,n.overrides),a({},r,o,{className:Je(null==r?void 0:r.className,o.className)||void 0}),...i)}function o(e){let t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===W.test(e));const a=V(q(t?e:`${e.trimEnd().replace(oe,"")}\n\n`,{inline:t}));for(;"string"==typeof a[a.length-1]&&!a[a.length-1].trim();)a.pop();if(null===n.wrapper)return a;const o=n.wrapper||(t?"span":"div");let l;if(a.length>1||n.forceWrapper)l=a;else{if(1===a.length)return l=a[0],"string"==typeof l?i("span",{key:"outer"},l):l;l=null}return r.createElement(o,{key:"outer"},l)}function l(e){const n=e.match(d);return n?n.reduce((function(e,n,t){const a=n.indexOf("=");if(-1!==a){const i=function(e){return-1!==e.indexOf("-")&&null===e.match($)&&(e=e.replace(U,(function(e,n){return n.toUpperCase()}))),e}(n.slice(0,a)).trim(),l=function(e){const n=e[0];return('"'===n||"'"===n)&&e.length>=2&&e[e.length-1]===n?e.slice(1,-1):e}(n.slice(a+1).trim()),s=c[i]||i,p=e[s]=function(e,n){return"style"===e?n.split(/;\s?/).reduce((function(e,n){const t=n.slice(0,n.indexOf(":"));return e[t.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=n.slice(t.length+1).trim(),e}),{}):"href"===e||"src"===e?Ue(n):(n.match(I)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(i,l);"string"==typeof p&&(E.test(p)||N.test(p))&&(e[s]=r.cloneElement(o(p.trim()),{key:t}))}else"style"!==n&&(e[c[n]||n]=!0);return e}),{}):null}const s=[],g={},K={0:{match:_e(h),order:1,parse:(e,n,t)=>({children:n(e[0].replace(b,""),t)}),render:(e,n,t)=>i("blockquote",{key:t.key},n(e.children,t))},1:{match:ze(f),order:1,parse:We,render:(e,n,t)=>i("br",{key:t.key})},2:{match:_e(y),order:1,parse:We,render:(e,n,t)=>i("hr",{key:t.key})},3:{match:_e(v),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,t)=>i("pre",{key:t.key},i("code",a({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},4:{match:_e(k),order:0,parse:e=>({attrs:l(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"})},5:{match:Ie(x),order:3,parse:e=>({text:e[2]}),render:(e,n,t)=>i("code",{key:t.key},e.text)},6:{match:_e(j),order:0,parse:e=>(s.push({footnote:e[2],identifier:e[1]}),{}),render:Xe},7:{match:Ne(C),order:1,parse:e=>({target:`#${n.slugify(e[1])}`,text:e[1]}),render:(e,n,t)=>i("a",{key:t.key,href:Ue(e.target)},i("sup",{key:t.key},e.text))},8:{match:Ne(T),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,n,t)=>i("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})},9:{match:_e(n.enforceAtxHeadings?D:O),order:1,parse:(e,t,r)=>({children:Ze(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}),render:(e,n,t)=>i(`h${e.level}`,{id:e.id,key:t.key},n(e.children,t))},10:{match:_e(S),order:0,parse:(e,n,t)=>({children:Ze(n,e[1],t),level:"="===e[2]?1:2,type:"9"})},11:{match:ze(E),order:1,parse(e,n,t){const[,r]=e[3].match(le),a=new RegExp(`^${r}`,"gm"),i=e[3].replace(a,""),o=(s=i,De.some((e=>e.test(s)))?Fe:Ze);var s;const c=e[1].toLowerCase(),p=-1!==u.indexOf(c),d={attrs:l(e[2]),noInnerParse:p,tag:p?c:e[1]};return t.inAnchor=t.inAnchor||"a"===c,p?d.text=e[3]:d.children=o(n,i,t),t.inAnchor=!1,d},render:(e,n,t)=>i(e.tag,a({key:t.key},e.attrs),e.text||n(e.children,t))},13:{match:ze(N),order:1,parse:e=>({attrs:l(e[2]||""),tag:e[1]}),render:(e,n,t)=>i(e.tag,a({},e.attrs,{key:t.key}))},12:{match:ze(A),order:1,parse:()=>({}),render:Xe},14:{match:Ie(Te),order:1,parse:e=>({alt:e[1],target:Be(e[2]),title:e[3]}),render:(e,n,t)=>i("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:Ue(e.target)})},15:{match:Ne(we),order:3,parse:(e,n,t)=>({children:He(n,e[1],t),target:Be(e[2]),title:e[3]}),render:(e,n,t)=>i("a",{key:t.key,href:Ue(e.target),title:e.title},n(e.children,t))},16:{match:Ne(L),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],type:"15"})},17:{match:(e,n)=>n.inAnchor?null:Ne(_)(e,n),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"})},18:{match:Ne(z),order:0,parse(e){let n=e[1],t=e[1];return m.test(t)||(t="mailto:"+t),{children:[{text:n.replace("mailto:",""),type:"27"}],target:t,type:"15"}}},20:Ce(i,1),33:Ce(i,2),19:{match:_e(M),order:3,parse:We,render:()=>"\n"},21:{match:Le,order:3,parse:Ge,render:(e,n,t)=>i("p",{key:t.key},n(e.children,t))},22:{match:Ne(Z),order:0,parse:e=>(g[e[1]]={target:e[2],title:e[4]},{}),render:Xe},23:{match:Ie(H),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,n,t)=>i("img",{key:t.key,alt:e.alt,src:Ue(g[e.ref].target),title:g[e.ref].title})},24:{match:Ne(F),order:0,parse:(e,n,t)=>({children:n(e[1],t),fallbackChildren:n(e[0].replace(G,"\\$1"),t),ref:e[2]}),render:(e,n,t)=>g[e.ref]?i("a",{key:t.key,href:Ue(g[e.ref].target),title:g[e.ref].title},n(e.children,t)):i("span",{key:t.key},n(e.fallbackChildren,t))},25:{match:_e(B),order:1,parse:Ae,render:(e,n,t)=>i("table",{key:t.key},i("thead",null,i("tr",null,e.header.map((function(r,a){return i("th",{key:a,style:$e(e,a)},n(r,t))})))),i("tbody",null,e.cells.map((function(r,a){return i("tr",{key:a},r.map((function(r,a){return i("td",{key:a,style:$e(e,a)},n(r,t))})))}))))},26:{match:function(e,n){return n.inTable?(n.inline=!0,J.exec(e)):null},order:1,parse:function(){return{type:"26"}},render:()=>" | "},27:{match:ze(ie),order:4,parse:e=>({text:e[0].replace(P,((e,t)=>n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e))}),render:e=>e.text},28:{match:Ie(ee),order:2,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,t)=>i("strong",{key:t.key},n(e.children,t))},29:{match:Ie(ne),order:3,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,t)=>i("em",{key:t.key},n(e.children,t))},30:{match:Ie(ae),order:1,parse:e=>({text:e[1],type:"27"})},31:{match:Ie(te),order:3,parse:Ge,render:(e,n,t)=>i("mark",{key:t.key},n(e.children,t))},32:{match:Ie(re),order:3,parse:Ge,render:(e,n,t)=>i("del",{key:t.key},n(e.children,t))}};!0===n.disableParsingRawHTML&&(delete K[11],delete K[13]);const q=function(e){let n=Object.keys(e);function t(r,a){let i=[],o="";for(;r;){let l=0;for(;l<n.length;){const s=n[l],c=e[s],p=c.match(r,a,o);if(p){const e=p[0];r=r.substring(e.length);const n=c.parse(p,t,a);null==n.type&&(n.type=s),i.push(n),o=e;break}l++}}return i}return n.sort((function(n,t){let r=e[n].order,a=e[t].order;return r!==a?r-a:1})),function(e,n){return t(function(e){return e.replace(R,"\n").replace(w,"").replace(X,"    ")}(e),n)}}(K),V=(Q=function(e,n){return function(t,r,a){const i=e[t.type].render;return n?n((()=>i(t,r,a)),t,r,a):i(t,r,a)}}(K,n.renderRule),function e(n,t={}){if(Array.isArray(n)){const r=t.key,a=[];let i=!1;for(let o=0;o<n.length;o++){t.key=o;const r=e(n[o],t),l="string"==typeof r;l&&i?a[a.length-1]+=r:null!==r&&a.push(r),i=l}return t.key=r,a}return Q(n,e,t)});var Q;const Y=o(e);return s.length?i("div",null,Y,i("footer",{key:"footer"},s.map((function(e){return i("div",{id:n.slugify(e.identifier),key:e.identifier},e.identifier,V(q(e.footnote,{inline:!0})))})))):Y}const Ve=e=>{let{children:n,options:t}=e,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(a[t]=e[t]);return a}(e,i);return r.cloneElement(qe(n,t),a)}}}]);