"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"k8s",title:"Authorization of Kubernetes",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["Kubernetes authorization","Kubernetes RBAC","Kubernetes ABAC","K8s-authz"],authors:["hsluoyz"]},i=void 0,s={unversionedId:"k8s",id:"k8s",title:"Authorization of Kubernetes",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/K8sAuthz.mdx",sourceDirName:".",slug:"/k8s",permalink:"/ko/docs/k8s",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"k8s",title:"Authorization of Kubernetes",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["Kubernetes authorization","Kubernetes RBAC","Kubernetes ABAC","K8s-authz"],authors:["hsluoyz"]},sidebar:"docs",previous:{title:"Performance Optimization",permalink:"/ko/docs/performance"},next:{title:"Admission Webhook for K8s",permalink:"/ko/docs/k8s-gatekeeper"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz"},"K8s-authz")," is a Kubernetes (k8s) authorization middleware based on Casbin that utilizes RBAC (Role-Based Access Control) and ABAC (Attribute-Based Access Control) for policy enforcement. This middleware integrates with the K8s validation admission webhook to validate the policies defined by Casbin for each request made to K8s resources. Custom admission controllers are registered with Kubernetes using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingAdmissionWebhook")," to perform validations on request objects forwarded by the API server and provide a response indicating whether the request should be allowed or rejected."),(0,a.kt)("p",null,"To determine when to send incoming requests to the admission controller, a validation webhook has been implemented. This webhook proxies requests for any type of K8s resource or sub-resource and performs policy verification. Users are only allowed to perform operations on these resources if they are authorized by the Casbin enforcer. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started#new-a-casbin-enforcer"},"enforcer")," checks the roles of the user as defined in the policies. The K8s cluster is the deployment target for this middleware."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Before proceeding, ensure that you have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Kubernetes cluster. You can set up a local cluster using Docker or set up a complete Kubernetes ecosystem on your server. For detailed instructions, refer to this ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/"},"guide")," for setting up a local Kubernetes cluster on Windows or this ",(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04"},"guide")," for setting up a cluster on Linux."),(0,a.kt)("li",{parentName:"ul"},"Kubectl CLI. Instructions for installing Kubectl on Windows can be found ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/"},"here"),", and for Linux ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"OpenSSL")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Follow these steps to use K8s-authz:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate certificates and keys for each user using OpenSSL. Run the script below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gen_cert.sh\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build the Docker image from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/Dockerfile"},"Dockerfile")," manually by running the following command. Remember to change the build version in the command and in the deployment ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/718f58c46e3dbf79063b5b1c18348c2fee5de9e9/manifests/deployment.yaml#L18"},"file")," accordingly."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t casbin/k8s_authz:0.1 .\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the Casbin policies in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/model.conf"},"model.conf")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/policy.csv"},"policy.csv")," files. For more information on how these policies work, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"documentation"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Before deploying, you can modify the ports in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/main.go"},"main.go")," file, as well as in the validation webhook configuration ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/manifests/deployment.yaml"},"file"),", based on your specific requirements.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy the validation controller and the webhook on the Kubernetes cluster by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deployment.yaml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For a production server, it is recommended to create a Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," to secure the certificates:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic casbin -n default \\\n  --from-file=key.pem=certs/casbin-key.pem \\\n  --from-file=cert.pem=certs/casbin-crt.pem\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After completing the above steps, you need to update the certificate directory in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/main.go#L26"},"main.go")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/manifests/deployment.yaml#L22"},"manifests")," with the directory of the created ",(0,a.kt)("inlineCode",{parentName:"p"},"secret"),"."))),(0,a.kt)("p",null,"Now, the server should be up and running, ready to validate requests made to K8s resources and enforce policies accordingly."))}p.isMDXComponent=!0}}]);