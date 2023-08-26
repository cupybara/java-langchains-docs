"use strict";(self.webpackChunkjava_langchains_docs=self.webpackChunkjava_langchains_docs||[]).push([[614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={siderbar_position:3},o="Writer",c={unversionedId:"packages/data/writer",id:"packages/data/writer",title:"Writer",description:"Write Documents to Elasticsearch Index",source:"@site/docs/packages/data/writer.md",sourceDirName:"packages/data",slug:"/packages/data/writer",permalink:"/docs/packages/data/writer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/data/writer.md",tags:[],version:"current",frontMatter:{siderbar_position:3},sidebar:"tutorialSidebar",previous:{title:"Retrieval",permalink:"/docs/packages/data/retrieval"},next:{title:"LLM",permalink:"/docs/packages/llm"}},s={},l=[{value:"Write Documents to Elasticsearch Index",id:"write-documents-to-elasticsearch-index",level:2},{value:"Write Documents to Lucene Directory",id:"write-documents-to-lucene-directory",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writer"},"Writer"),(0,a.kt)("h2",{id:"write-documents-to-elasticsearch-index"},"Write Documents to Elasticsearch Index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'RestClientBuilder restClientBuilder = RestClient.builder(new HttpHost("localhost", 9200));\n\n// this chain reads documents from a folder of pdfs and writes them to an elasticsearch index\nChain<Path, Void> fillElasticsearchIndexChain = new ReadDocumentsFromPdfChain()\n  .chain(new WriteDocumentsToElasticsearchIndexChain("my-index", restClientBuilder));\n\nPath pdfDirectoryPath = Paths.get(getClass().getResource("/pdf/qa").toURI());\n\nfillElasticsearchIndexChain.run(pdfDirectoryPath);\n')),(0,a.kt)("h2",{id:"write-documents-to-lucene-directory"},"Write Documents to Lucene Directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Path tempIndexPath = Files.createTempDirectory("lucene")\n\n// this chain reads documents from a folder of pdfs and writes them to an index directory\nChain<Path, Directory> createLuceneIndexChain = new ReadDocumentsFromPdfChain()\n    .chain(new WriteDocumentsToLuceneDirectoryChain(tempIndexPath));\n\nPath pdfDirectoryPath = Paths.get(getClass().getResource("/pdf/qa").toURI());\n\nDirectory directory = createLuceneIndexChain.run(pdfDirectoryPath);\n')))}p.isMDXComponent=!0}}]);