"use strict";(self.webpackChunkjava_langchains_docs=self.webpackChunkjava_langchains_docs||[]).push([[181],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?t.createElement(d,i(i({ref:n},u),{},{components:a})):t.createElement(d,i({ref:n},u))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8667:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="LLM",l={unversionedId:"packages/llm",id:"packages/llm",title:"LLM",description:"Azure",source:"@site/docs/packages/llm.md",sourceDirName:"packages",slug:"/packages/llm",permalink:"/java-langchains-docs/docs/packages/llm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/llm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Writer",permalink:"/java-langchains-docs/docs/packages/data/writer"},next:{title:"QA",permalink:"/java-langchains-docs/docs/packages/qa"}},s={},p=[{value:"Azure",id:"azure",level:2},{value:"Azure Chat",id:"azure-chat",level:3},{value:"Azure Completions",id:"azure-completions",level:3},{value:"OpenAI",id:"openai",level:2},{value:"OpenAI Chat",id:"openai-chat",level:3},{value:"OpenAI Completions",id:"openai-completions",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"llm"},"LLM"),(0,r.kt)("h2",{id:"azure"},"Azure"),(0,r.kt)("h3",{id:"azure-chat"},"Azure Chat"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/llm/azure/chat/AzureOpenAiChatCompletionsChainIT.java"},"AzureOpenAiChatCompletionsChainIT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AzureOpenAiChatCompletionsChain chain = new AzureOpenAiChatCompletionsChain(\n    "my-azure-resource-name",\n    "gpt-35-turbo", // deployment name\n    "2023-05-15", // api version\n    "Hello, this is ${name}", \n    new OpenAiChatCompletionsParameters().temperature(0D), // also allows to set more parameters\n    System.getenv("OPENAI_API_KEY"),\n    "You are a helpful assistant who answers questions to ${name}" // optional systemTemplate \n);\n\nString result = chain.run(Collections.singletonMap("name", "Manuel")); \n// the above outputs something like: "Hello Manuel, how are you"\n')),(0,r.kt)("h3",{id:"azure-completions"},"Azure Completions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AzureOpenAiCompletionsChain chain = new AzureOpenAiCompletionsChain(\n    "my-azure-resource-name",\n    "text-davinci-003", // deployment name\n    "2023-05-15", // api version\n    "Hello, this is ${name}", \n    new OpenAiCompletionsParameters().temperature(0D), // also allows to set more parameters\n    System.getenv("OPENAI_API_KEY"),\n    "You are a helpful assistant who answers questions to ${name}" // optional systemTemplate \n);\n\nString result = chain.run(Collections.singletonMap("name", "Manuel"));\n// the above outputs something like: "Hello Manuel, how are you"\n')),(0,r.kt)("h2",{id:"openai"},"OpenAI"),(0,r.kt)("h3",{id:"openai-chat"},"OpenAI Chat"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/llm/openai/chat/OpenAiChatCompletionsChainIT.java"},"OpenAiChatCompletionsChainIT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'OpenAiChatCompletionsChain chain = new OpenAiChatCompletionsChain(\n    "Hello, this is ${name}", \n    new OpenAiChatCompletionsParameters().model("gpt-3.5-turbo").temperature(0D), // also allows to set more parameters\n    System.getenv("OPENAI_API_KEY"),\n    "You are a helpful assistant who answers questions to ${name}" // optional systemTemplate \n);\n\nString result = chain.run(Collections.singletonMap("name", "Manuel"));\n// the above outputs something like: "Hello Manuel, how are you"\n')),(0,r.kt)("h3",{id:"openai-completions"},"OpenAI Completions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'OpenAiCompletionsChain chain = new OpenAiCompletionsChain(\n    "Hello, this is ${name}", \n    new OpenAiCompletionsParameters().model("text-davinci-003").temperature(0D), // also allows to set more parameters\n    System.getenv("OPENAI_API_KEY"),\n    "You are a helpful assistant who answers questions to ${name}" // optional systemTemplate \n);\n\nString result = chain.run(Collections.singletonMap("name", "Manuel"));\n// the above outputs something like: "Hello Manuel, how are you"\n')))}m.isMDXComponent=!0}}]);