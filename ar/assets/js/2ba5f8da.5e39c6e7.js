"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,k=m["".concat(l,".").concat(b)]||m[b]||u[b]||s;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={id:"k8s",title:"Authorization of Kubernetes",description:"\u0648\u0633\u064a\u0637 \u062a\u0641\u0648\u064a\u0636 Kubernetes (k8s) RBAC & ABAC \u0645\u0628\u0646\u064a \u0639\u0644\u0649 Casbin",keywords:["Kubernetes authorization","Kubernetes RBAC","Kubernetes ABAC","K8s-authz"],authors:["hsluoyz"]},o=void 0,i={unversionedId:"k8s",id:"k8s",title:"Authorization of Kubernetes",description:"\u0648\u0633\u064a\u0637 \u062a\u0641\u0648\u064a\u0636 Kubernetes (k8s) RBAC & ABAC \u0645\u0628\u0646\u064a \u0639\u0644\u0649 Casbin",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/K8sAuthz.mdx",sourceDirName:".",slug:"/k8s",permalink:"/ar/docs/k8s",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/K8sAuthz.mdx",tags:[],version:"current",frontMatter:{id:"k8s",title:"Authorization of Kubernetes",description:"\u0648\u0633\u064a\u0637 \u062a\u0641\u0648\u064a\u0636 Kubernetes (k8s) RBAC & ABAC \u0645\u0628\u0646\u064a \u0639\u0644\u0649 Casbin",keywords:["Kubernetes authorization","Kubernetes RBAC","Kubernetes ABAC","K8s-authz"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Performance Optimization",permalink:"/ar/docs/performance"},next:{title:"Admission Webhook for K8s",permalink:"/ar/docs/k8s-gatekeeper"}},l={},c=[{value:"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a",id:"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a",level:2},{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz"},"K8s-authz")," \u0647\u0648 \u0648\u0633\u064a\u0637 \u062a\u0641\u0648\u064a\u0636 Kubernetes (k8s) \u0645\u0628\u0646\u064a \u0639\u0644\u0649 Casbin \u064a\u0633\u062a\u062e\u062f\u0645 RBAC (Role-Based Access Control) \u0648 ABAC (Attribute-Based Access Control) \u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a. \u064a\u062a\u0643\u0627\u0645\u0644 \u0647\u0630\u0627 \u0627\u0644\u0648\u0633\u064a\u0637 \u0645\u0639 \u0648\u064a\u0628 \u0647\u0648\u0643 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 K8s \u0644\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0628\u0648\u0627\u0633\u0637\u0629 Casbin \u0644\u0643\u0644 \u0637\u0644\u0628 \u064a\u062a\u0645 \u0625\u062c\u0631\u0627\u0624\u0647 \u0639\u0644\u0649 \u0645\u0648\u0627\u0631\u062f K8s. \u064a\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u0648\u062d\u062f\u0627\u062a \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u0642\u0628\u0648\u0644 \u0627\u0644\u0645\u062e\u0635\u0635\u0629 \u0645\u0639 Kubernetes \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 ",(0,n.kt)("inlineCode",{parentName:"p"},"ValidatingAdmissionWebhook")," \u0644\u0623\u062f\u0627\u0621 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u062a\u0645 \u062a\u0648\u062c\u064a\u0647\u0647\u0627 \u0628\u0648\u0627\u0633\u0637\u0629 \u062e\u0627\u062f\u0645 API \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u062a\u0634\u064a\u0631 \u0625\u0644\u0649 \u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u064a\u062c\u0628 \u0627\u0644\u0633\u0645\u0627\u062d \u0628\u0627\u0644\u0637\u0644\u0628 \u0623\u0648 \u0631\u0641\u0636\u0647."),(0,n.kt)("p",null,"\u0644\u062a\u062d\u062f\u064a\u062f \u0645\u062a\u0649 \u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0648\u0627\u0631\u062f\u0629 \u0625\u0644\u0649 \u0648\u062d\u062f\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u0642\u0628\u0648\u0644\u060c \u062a\u0645 \u062a\u0646\u0641\u064a\u0630 \u0648\u064a\u0628 \u0647\u0648\u0643 \u0644\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u062d\u0629. \u064a\u0642\u0648\u0645 \u0647\u0630\u0627 \u0627\u0644\u0648\u064a\u0628 \u0647\u0648\u0643 \u0628\u062a\u0648\u062c\u064a\u0647 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0644\u0623\u064a \u0646\u0648\u0639 \u0645\u0646 \u0645\u0648\u0627\u0631\u062f K8s \u0623\u0648 \u0627\u0644\u0641\u0631\u0639\u064a\u0629 \u0648\u064a\u0624\u062f\u064a \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0633\u064a\u0627\u0633\u0629. \u064a\u064f\u0633\u0645\u062d \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0628\u0623\u062f\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0641\u0642\u0637 \u0625\u0630\u0627 \u062a\u0645 \u062a\u0641\u0648\u064a\u0636\u0647\u0645 \u0645\u0646 \u0642\u0628\u0644 \u0645\u064f\u0646\u0641\u0630 Casbin. \u064a\u062a\u062d\u0642\u0642 ",(0,n.kt)("a",{parentName:"p",href:"/docs/get-started#new-a-casbin-enforcer"},"\u0627\u0644\u0645\u064f\u0646\u0641\u0630")," \u0645\u0646 \u0623\u062f\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0643\u0645\u0627 \u0647\u0648 \u0645\u062d\u062f\u062f \u0641\u064a \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a. \u0639\u0642\u062f\u0629 K8s \u0647\u064a \u0647\u062f\u0641 \u0627\u0644\u0646\u0634\u0631 \u0644\u0647\u0630\u0627 \u0627\u0644\u0648\u0633\u064a\u0637."),(0,n.kt)("h2",{id:"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a"},"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a"),(0,n.kt)("p",null,"\u0642\u0628\u0644 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629\u060c \u062a\u0623\u0643\u062f \u0645\u0646 \u0623\u0646 \u0644\u062f\u064a\u0643 \u0645\u0627 \u064a\u0644\u064a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u0639\u0642\u062f\u0629 Kubernetes \u062a\u0639\u0645\u0644. \u064a\u0645\u0643\u0646\u0643 \u0625\u0639\u062f\u0627\u062f \u0639\u0642\u062f\u0629 \u0645\u062d\u0644\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Docker \u0623\u0648 \u0625\u0639\u062f\u0627\u062f \u0646\u0638\u0627\u0645 \u0628\u064a\u0626\u064a \u0643\u0627\u0645\u0644 \u0644\u0640 Kubernetes \u0639\u0644\u0649 \u0627\u0644\u062e\u0627\u062f\u0645 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643. \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u0645\u0641\u0635\u0644\u0629\u060c \u0631\u0627\u062c\u0639 \u0647\u0630\u0627 ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/"},"\u0627\u0644\u062f\u0644\u064a\u0644")," \u0644\u0625\u0639\u062f\u0627\u062f \u0639\u0642\u062f\u0629 Kubernetes \u0645\u062d\u0644\u064a\u0629 \u0639\u0644\u0649 Windows \u0623\u0648 \u0647\u0630\u0627 ",(0,n.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04"},"\u0627\u0644\u062f\u0644\u064a\u0644")," \u0644\u0625\u0639\u062f\u0627\u062f \u0639\u0642\u062f\u0629 \u0639\u0644\u0649 Linux."),(0,n.kt)("li",{parentName:"ul"},"\u0648\u0627\u062c\u0647\u0629 \u0633\u0637\u0631 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 Kubectl. \u064a\u0645\u0643\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u0644\u062a\u062b\u0628\u064a\u062a Kubectl \u0639\u0644\u0649 Windows ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/"},"\u0647\u0646\u0627"),"\u060c \u0648\u0644\u0640 Linux ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"\u0647\u0646\u0627"),"."),(0,n.kt)("li",{parentName:"ul"},"OpenSSL")),(0,n.kt)("h2",{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"},"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,n.kt)("p",null,"\u0627\u062a\u0628\u0639 \u0647\u0630\u0647 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 K8s-authz:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0642\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0645\u0641\u0627\u062a\u064a\u062d \u0644\u0643\u0644 \u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 OpenSSL. \u0642\u0645 \u0628\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0633\u0643\u0631\u0628\u062a \u0623\u062f\u0646\u0627\u0647:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./gen_cert.sh\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0635\u0648\u0631\u0629 Docker \u0645\u0646 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/Dockerfile"},"Dockerfile")," \u064a\u062f\u0648\u064a\u064b\u0627 \u0628\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u062a\u0627\u0644\u064a. \u062a\u0630\u0643\u0631 \u062a\u063a\u064a\u064a\u0631 \u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0628\u0646\u0627\u0621 \u0641\u064a \u0627\u0644\u0623\u0645\u0631 \u0648\u0641\u064a \u0645\u0644\u0641 \u0627\u0644\u0646\u0634\u0631 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/718f58c46e3dbf79063b5b1c18348c2fee5de9e9/manifests/deployment.yaml#L18"},"file")," \u0648\u0641\u0642\u064b\u0627 \u0644\u0630\u0644\u0643."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t casbin/k8s_authz:0.1 .\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u062d\u062f\u062f \u0633\u064a\u0627\u0633\u0627\u062a Casbin \u0641\u064a \u0645\u0644\u0641\u0627\u062a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/model.conf"},"model.conf")," \u0648 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/policy.csv"},"policy.csv"),". \u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062d\u0648\u0644 \u0643\u064a\u0641\u064a\u0629 \u0639\u0645\u0644 \u0647\u0630\u0647 \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a\u060c \u0631\u0627\u062c\u0639 ",(0,n.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"\u0627\u0644\u062a\u0648\u062b\u064a\u0642"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0642\u0628\u0644 \u0627\u0644\u0646\u0634\u0631\u060c \u064a\u0645\u0643\u0646\u0643 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0646\u0627\u0641\u0630 \u0641\u064a \u0645\u0644\u0641 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/main.go"},"main.go"),"\u060c \u0648\u0643\u0630\u0644\u0643 \u0641\u064a \u0645\u0644\u0641 \u062a\u0643\u0648\u064a\u0646 \u0648\u064a\u0628 \u0647\u0648\u0643 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u062d\u0629 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/manifests/deployment.yaml"},"file"),"\u060c \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0645\u062a\u0637\u0644\u0628\u0627\u062a\u0643 \u0627\u0644\u062e\u0627\u0635\u0629.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0642\u0645 \u0628\u0646\u0634\u0631 \u0648\u062d\u062f\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u062a\u062d\u0642\u0642 \u0648\u0627\u0644\u0648\u064a\u0628 \u0647\u0648\u0643 \u0639\u0644\u0649 \u0639\u0642\u062f\u0629 Kubernetes \u0628\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u062a\u0627\u0644\u064a:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deployment.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0644\u062e\u0627\u062f\u0645 \u0627\u0644\u0625\u0646\u062a\u0627\u062c\u060c \u064a\u064f\u0646\u0635\u062d \u0628\u0625\u0646\u0634\u0627\u0621 ",(0,n.kt)("inlineCode",{parentName:"p"},"secret")," \u0641\u064a Kubernetes \u0644\u062a\u0623\u0645\u064a\u0646 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic casbin -n default \\\n  --from-file=key.pem=certs/casbin-key.pem \\\n  --from-file=cert.pem=certs/casbin-crt.pem\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0628\u0639\u062f \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629 \u0623\u0639\u0644\u0627\u0647\u060c \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u062a\u062d\u062f\u064a\u062b \u062f\u0644\u064a\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0641\u064a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/main.go#L26"},"main.go")," \u0648 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/manifests/deployment.yaml#L22"},"\u0627\u0644\u0645\u0638\u0627\u0647\u0631")," \u0628\u062f\u0644\u064a\u0644 ",(0,n.kt)("inlineCode",{parentName:"p"},"secret")," \u0627\u0644\u0630\u064a \u062a\u0645 \u0625\u0646\u0634\u0627\u0624\u0647."))),(0,n.kt)("p",null,"\u0627\u0644\u0622\u0646\u060c \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0627\u0644\u062e\u0627\u062f\u0645 \u0642\u064a\u062f \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0648\u062c\u0627\u0647\u0632\u064b\u0627 \u0644\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0645\u0642\u062f\u0645\u0629 \u0625\u0644\u0649 \u0645\u0648\u0627\u0631\u062f K8s \u0648\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0633\u064a\u0627\u0633\u0627\u062a \u0648\u0641\u0642\u064b\u0627 \u0644\u0630\u0644\u0643."))}u.isMDXComponent=!0}}]);