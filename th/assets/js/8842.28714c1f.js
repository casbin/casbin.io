"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8842,7298,9462],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5576:(e,n,t)=>{t.d(n,{ZP:()=>Je});var r=t(7294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}const o=["children","options"];var l,c,a;(a=l||(l={})).blockQuote="0",a.breakLine="1",a.breakThematic="2",a.codeBlock="3",a.codeFenced="4",a.codeInline="5",a.footnote="6",a.footnoteReference="7",a.gfmTask="8",a.heading="9",a.headingSetext="10",a.htmlBlock="11",a.htmlComment="12",a.htmlSelfClosing="13",a.image="14",a.link="15",a.linkAngleBraceStyleDetector="16",a.linkBareUrlDetector="17",a.linkMailtoDetector="18",a.newlineCoalescer="19",a.orderedList="20",a.paragraph="21",a.ref="22",a.refImage="23",a.refLink="24",a.table="25",a.tableSeparator="26",a.text="27",a.textBolded="28",a.textEmphasized="29",a.textEscaped="30",a.textMarked="31",a.textStrikethroughed="32",a.unorderedList="33",function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(c||(c={}));const s=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,n)=>(e[n.toLowerCase()]=n,e)),{for:"htmlFor"}),u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},p=["style","script"],d=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,m=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,g=/^ {2,}\n/,k=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,b=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,O=/^(?:\n *)*\n/,w=/\r\n?/g,E=/^\[\^([^\]]+)](:.*)\n/,C=/^\[\^([^\]]+)]/,$=/\f/g,j=/^\s*?\[(x|\s)\]/,S=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,T=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,P=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,A=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,L=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,M=/^<!--[\s\S]*?(?:-->)/,z=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,I=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,D=/^\{.*\}$/,N=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,R=/^<([^ >]+@[^ >]+)>/,_=/^<([^ >]+:\/[^ >]+)>/,U=/-([a-z])?/gi,B=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,H=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,F=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,G=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,X=/\t/g,q=/^ *\| */,V=/(^ *\||\| *$)/g,Q=/ *$/,J=/^ *:-+: *$/,K=/^ *:-+ *$/,Y=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ne=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,te=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,re=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ie=/^\\([^0-9A-Za-z\s])/,oe=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,le=/^\n+/,ce=/^([ \t]*)/,ae=/\\([^\\])/g,se=/ *\n+$/,ue=/(?:^|\n)( *)$/,pe="(?:\\d+\\.)",de="(?:[*+-])";function fe(e){return"( *)("+(1===e?pe:de)+") +"}const me=fe(1),he=fe(2);function ye(e){return new RegExp("^"+(1===e?me:he))}const ge=ye(1),ke=ye(2);function be(e){return new RegExp("^"+(1===e?me:he)+"[^\\n]*(?:\\n(?!\\1"+(1===e?pe:de)+" )[^\\n]*)*(\\n|$)","gm")}const xe=be(1),ve=be(2);function Oe(e){const n=1===e?pe:de;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}const we=Oe(1),Ee=Oe(2);function Ce(e,n){const t=1===n,r=t?we:Ee,i=t?xe:ve,o=t?ge:ke;return{match(e,n,t){const i=ue.exec(t);return i&&(n.list||!n.inline&&!n.simple)?r.exec(e=i[1]+e):null},order:1,parse(e,n,r){const l=t?+e[2]:void 0,c=e[0].replace(m,"\n").match(i);let a=!1;return{items:c.map((function(e,t){const i=o.exec(e)[0].length,l=new RegExp("^ {1,"+i+"}","gm"),s=e.replace(l,"").replace(o,""),u=t===c.length-1,p=-1!==s.indexOf("\n\n")||u&&a;a=p;const d=r.inline,f=r.list;let m;r.list=!0,p?(r.inline=!1,m=s.replace(se,"\n\n")):(r.inline=!0,m=s.replace(se,""));const h=n(m,r);return r.inline=d,r.list=f,h})),ordered:t,start:l}},render:(n,t,r)=>e(n.ordered?"ol":"ul",{key:r.key,start:"20"===n.type?n.start:void 0},n.items.map((function(n,i){return e("li",{key:i},t(n,r))})))}}const $e=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,je=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Se=[h,b,x,S,P,T,M,B,xe,we,ve,Ee],Te=[...Se,/^[^\n]+(?:  \n|\n{2,})/,A,I];function Pe(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Ae(e){return Y.test(e)?"right":J.test(e)?"center":K.test(e)?"left":null}function Le(e,n,t){const r=t.inTable;t.inTable=!0;const i=n(e.trim(),t);t.inTable=r;let o=[[]];return i.forEach((function(e,n){"26"===e.type?0!==n&&n!==i.length-1&&o.push([]):("27"!==e.type||null!=i[n+1]&&"26"!==i[n+1].type||(e.text=e.text.replace(Q,"")),o[o.length-1].push(e))})),o}function Me(e,n,t){t.inline=!0;const r=Le(e[1],n,t),i=e[2].replace(V,"").split("|").map(Ae),o=function(e,n,t){return e.trim().split("\n").map((function(e){return Le(e,n,t)}))}(e[3],n,t);return t.inline=!1,{align:i,cells:o,header:r,type:"25"}}function ze(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function Ie(e){return function(n,t){return t.inline?e.exec(n):null}}function De(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function Ne(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function Re(e){return function(n){return e.exec(n)}}function _e(e,n,t){if(n.inline||n.simple)return null;if(t&&!t.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!Se.some((n=>n.test(e)))&&(r+=e+"\n",e.trim())));const i=r.trimEnd();return""==i?null:[r,i]}function Ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function Be(e){return e.replace(ae,"$1")}function He(e,n,t){const r=t.inline||!1,i=t.simple||!1;t.inline=!0,t.simple=!0;const o=e(n,t);return t.inline=r,t.simple=i,o}function Fe(e,n,t){const r=t.inline||!1,i=t.simple||!1;t.inline=!1,t.simple=!0;const o=e(n,t);return t.inline=r,t.simple=i,o}function Ze(e,n,t){return t.inline=!1,e(n,t)}const We=(e,n,t)=>({children:He(n,e[1],t)});function Ge(){return{}}function Xe(){return null}function qe(...e){return e.filter(Boolean).join(" ")}function Ve(e,n,t){let r=e;const i=n.split(".");for(;i.length&&(r=r[i[0]],void 0!==r);)i.shift();return r||t}function Qe(e,n={}){n.overrides=n.overrides||{},n.slugify=n.slugify||Pe,n.namedCodesToUnicode=n.namedCodesToUnicode?i({},u,n.namedCodesToUnicode):u;const t=n.createElement||r.createElement;function o(e,r,...o){const l=Ve(n.overrides,`${e}.props`,{});return t(function(e,n){const t=Ve(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Ve(n,`${e}.component`,e):e}(e,n.overrides),i({},r,l,{className:qe(null==r?void 0:r.className,l.className)||void 0}),...o)}function l(e){let t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===G.test(e));const i=J(Q(t?e:`${e.trimEnd().replace(le,"")}\n\n`,{inline:t}));for(;"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===n.wrapper)return i;const l=n.wrapper||(t?"span":"div");let c;if(i.length>1||n.forceWrapper)c=i;else{if(1===i.length)return c=i[0],"string"==typeof c?o("span",{key:"outer"},c):c;c=null}return r.createElement(l,{key:"outer"},c)}function c(e){const n=e.match(d);return n?n.reduce((function(e,n,t){const i=n.indexOf("=");if(-1!==i){const o=function(e){return-1!==e.indexOf("-")&&null===e.match(z)&&(e=e.replace(U,(function(e,n){return n.toUpperCase()}))),e}(n.slice(0,i)).trim(),c=function(e){const n=e[0];return('"'===n||"'"===n)&&e.length>=2&&e[e.length-1]===n?e.slice(1,-1):e}(n.slice(i+1).trim()),a=s[o]||o,u=e[a]=function(e,n){return"style"===e?n.split(/;\s?/).reduce((function(e,n){const t=n.slice(0,n.indexOf(":"));return e[t.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=n.slice(t.length+1).trim(),e}),{}):"href"===e||"src"===e?Ue(n):(n.match(D)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(o,c);"string"==typeof u&&(A.test(u)||I.test(u))&&(e[a]=r.cloneElement(l(u.trim()),{key:t}))}else"style"!==n&&(e[s[n]||n]=!0);return e}),{}):null}const a=[],m={},V={0:{match:Ne(h),order:1,parse:(e,n,t)=>({children:n(e[0].replace(y,""),t)}),render:(e,n,t)=>o("blockquote",{key:t.key},n(e.children,t))},1:{match:Re(g),order:1,parse:Ge,render:(e,n,t)=>o("br",{key:t.key})},2:{match:Ne(k),order:1,parse:Ge,render:(e,n,t)=>o("hr",{key:t.key})},3:{match:Ne(x),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,t)=>o("pre",{key:t.key},o("code",i({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},4:{match:Ne(b),order:0,parse:e=>({attrs:c(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"})},5:{match:De(v),order:3,parse:e=>({text:e[2]}),render:(e,n,t)=>o("code",{key:t.key},e.text)},6:{match:Ne(E),order:0,parse:e=>(a.push({footnote:e[2],identifier:e[1]}),{}),render:Xe},7:{match:Ie(C),order:1,parse:e=>({target:`#${n.slugify(e[1])}`,text:e[1]}),render:(e,n,t)=>o("a",{key:t.key,href:Ue(e.target)},o("sup",{key:t.key},e.text))},8:{match:Ie(j),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,n,t)=>o("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})},9:{match:Ne(n.enforceAtxHeadings?T:S),order:1,parse:(e,t,r)=>({children:He(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}),render:(e,n,t)=>o(`h${e.level}`,{id:e.id,key:t.key},n(e.children,t))},10:{match:Ne(P),order:0,parse:(e,n,t)=>({children:He(n,e[1],t),level:"="===e[2]?1:2,type:"9"})},11:{match:Re(A),order:1,parse(e,n,t){const[,r]=e[3].match(ce),i=new RegExp(`^${r}`,"gm"),o=e[3].replace(i,""),l=(a=o,Te.some((e=>e.test(a)))?Ze:He);var a;const s=e[1].toLowerCase(),u=-1!==p.indexOf(s),d={attrs:c(e[2]),noInnerParse:u,tag:u?s:e[1]};return t.inAnchor=t.inAnchor||"a"===s,u?d.text=e[3]:d.children=l(n,o,t),t.inAnchor=!1,d},render:(e,n,t)=>o(e.tag,i({key:t.key},e.attrs),e.text||n(e.children,t))},13:{match:Re(I),order:1,parse:e=>({attrs:c(e[2]||""),tag:e[1]}),render:(e,n,t)=>o(e.tag,i({},e.attrs,{key:t.key}))},12:{match:Re(M),order:1,parse:()=>({}),render:Xe},14:{match:De(je),order:1,parse:e=>({alt:e[1],target:Be(e[2]),title:e[3]}),render:(e,n,t)=>o("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:Ue(e.target)})},15:{match:Ie($e),order:3,parse:(e,n,t)=>({children:Fe(n,e[1],t),target:Be(e[2]),title:e[3]}),render:(e,n,t)=>o("a",{key:t.key,href:Ue(e.target),title:e.title},n(e.children,t))},16:{match:Ie(_),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],type:"15"})},17:{match:(e,n)=>n.inAnchor?null:Ie(N)(e,n),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"})},18:{match:Ie(R),order:0,parse(e){let n=e[1],t=e[1];return f.test(t)||(t="mailto:"+t),{children:[{text:n.replace("mailto:",""),type:"27"}],target:t,type:"15"}}},20:Ce(o,1),33:Ce(o,2),19:{match:Ne(O),order:3,parse:Ge,render:()=>"\n"},21:{match:_e,order:3,parse:We,render:(e,n,t)=>o("p",{key:t.key},n(e.children,t))},22:{match:Ie(H),order:0,parse:e=>(m[e[1]]={target:e[2],title:e[4]},{}),render:Xe},23:{match:De(F),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,n,t)=>o("img",{key:t.key,alt:e.alt,src:Ue(m[e.ref].target),title:m[e.ref].title})},24:{match:Ie(Z),order:0,parse:(e,n,t)=>({children:n(e[1],t),fallbackChildren:n(e[0].replace(W,"\\$1"),t),ref:e[2]}),render:(e,n,t)=>m[e.ref]?o("a",{key:t.key,href:Ue(m[e.ref].target),title:m[e.ref].title},n(e.children,t)):o("span",{key:t.key},n(e.fallbackChildren,t))},25:{match:Ne(B),order:1,parse:Me,render:(e,n,t)=>o("table",{key:t.key},o("thead",null,o("tr",null,e.header.map((function(r,i){return o("th",{key:i,style:ze(e,i)},n(r,t))})))),o("tbody",null,e.cells.map((function(r,i){return o("tr",{key:i},r.map((function(r,i){return o("td",{key:i,style:ze(e,i)},n(r,t))})))}))))},26:{match:function(e,n){return n.inTable?(n.inline=!0,q.exec(e)):null},order:1,parse:function(){return{type:"26"}},render:()=>" | "},27:{match:Re(oe),order:4,parse:e=>({text:e[0].replace(L,((e,t)=>n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e))}),render:e=>e.text},28:{match:De(ee),order:2,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,t)=>o("strong",{key:t.key},n(e.children,t))},29:{match:De(ne),order:3,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,t)=>o("em",{key:t.key},n(e.children,t))},30:{match:De(ie),order:1,parse:e=>({text:e[1],type:"27"})},31:{match:De(te),order:3,parse:We,render:(e,n,t)=>o("mark",{key:t.key},n(e.children,t))},32:{match:De(re),order:3,parse:We,render:(e,n,t)=>o("del",{key:t.key},n(e.children,t))}};!0===n.disableParsingRawHTML&&(delete V[11],delete V[13]);const Q=function(e){let n=Object.keys(e);function t(r,i){let o=[],l="";for(;r;){let c=0;for(;c<n.length;){const a=n[c],s=e[a],u=s.match(r,i,l);if(u){const e=u[0];r=r.substring(e.length);const n=s.parse(u,t,i);null==n.type&&(n.type=a),o.push(n),l=e;break}c++}}return o}return n.sort((function(n,t){let r=e[n].order,i=e[t].order;return r!==i?r-i:1})),function(e,n){return t(function(e){return e.replace(w,"\n").replace($,"").replace(X,"    ")}(e),n)}}(V),J=(K=function(e,n){return function(t,r,i){const o=e[t.type].render;return n?n((()=>o(t,r,i)),t,r,i):o(t,r,i)}}(V,n.renderRule),function e(n,t={}){if(Array.isArray(n)){const r=t.key,i=[];let o=!1;for(let l=0;l<n.length;l++){t.key=l;const r=e(n[l],t),c="string"==typeof r;c&&o?i[i.length-1]+=r:null!==r&&i.push(r),o=c}return t.key=r,i}return K(n,e,t)});var K;const Y=l(e);return a.length?o("div",null,Y,o("footer",{key:"footer"},a.map((function(e){return o("div",{id:n.slugify(e.identifier),key:e.identifier},e.identifier,J(Q(e.footnote,{inline:!0})))})))):Y}const Je=e=>{let{children:n,options:t}=e,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(i[t]=e[t]);return i}(e,o);return r.cloneElement(Qe(n,t),i)}}}]);