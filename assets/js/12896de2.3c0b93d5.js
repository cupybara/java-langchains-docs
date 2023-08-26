"use strict";(self.webpackChunkjava_langchains_docs=self.webpackChunkjava_langchains_docs||[]).push([[215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(v,c(c({ref:t},d),{},{components:r})):n.createElement(v,c({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},c="Retrieval",o={unversionedId:"packages/data/retrieval",id:"packages/data/retrieval",title:"Retrieval",description:"Retrieve Documents from Elasticsearch Index",source:"@site/docs/packages/data/retrieval.md",sourceDirName:"packages/data",slug:"/packages/data/retrieval",permalink:"/java-langchains-docs/docs/packages/data/retrieval",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/data/retrieval.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Reader",permalink:"/java-langchains-docs/docs/packages/data/reader"},next:{title:"Writer",permalink:"/java-langchains-docs/docs/packages/data/writer"}},s={},l=[{value:"Retrieve Documents from Elasticsearch Index",id:"retrieve-documents-from-elasticsearch-index",level:2},{value:"Retrieve Documents from Lucene Directory",id:"retrieve-documents-from-lucene-directory",level:2},{value:"Retrieve Documents from RDBMS",id:"retrieve-documents-from-rdbms",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieval"},"Retrieval"),(0,a.kt)("h2",{id:"retrieve-documents-from-elasticsearch-index"},"Retrieve Documents from Elasticsearch Index"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/retrieval/ElasticsearchRetrievalChainIT.java"},"ElasticsearchRetrievalChainIT")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'RestClientBuilder restClientBuilder = RestClient.builder(new HttpHost("localhost", 9200));\n\nChain<Path, Void> createElasticsearchIndexChain = new ReadDocumentsFromPdfChain()\n    .chain(new WriteDocumentsToElasticsearchIndexChain("my-index", restClientBuilder));\n\nPath pdfDirectoryPath = Paths.get(ElasticsearchRetrievalChainTest.class.getResource("/pdf/qa").toURI());\n\n// create and fill elasticsearch index with read pdfs (source, content)-pairs\ncreateElasticsearchIndexChain.run(pdfDirectoryPath);\n\n// retrieve documents relevant to a specific question\ntry (RestClient restClient = restClientBuilder.build();\n        ElasticsearchRetrievalChain retrievalChain = new ElasticsearchRetrievalChain("my-index", restClient, 1)) {\n\n    // retrieve the most relevant documents for the passed question\n    Stream<Map<String, String>> retrievedDocuments = retrievalChain.run("who is john doe?").collect(Collectors.toList());\n\n    // ...\n}\n')),(0,a.kt)("h2",{id:"retrieve-documents-from-lucene-directory"},"Retrieve Documents from Lucene Directory"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/retrieval/LuceneRetrievalChainTest.java"},"LuceneRetrievalChainTest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// create lucene index\nDirectory directory = new MMapDirectory(Files.createTempDirectory("myTempDir"));\n\n// fill lucene index\ntry (IndexWriter indexWriter = new IndexWriter(directory, new IndexWriterConfig(new StandardAnalyzer()))) {\n    List<String> documents = Arrays.asList("My first document", "My second document", "My third document");\n\n    for (String content : documents) {\n        Document doc = new Document();\n        doc.add(new TextField(PromptConstants.CONTENT, content, Field.Store.YES));\n        doc.add(new StringField(PromptConstants.SOURCE, String.valueOf(documents.indexOf(content) + 1), Field.Store.YES));\n        indexWriter.addDocument(doc);\n    }\n\n    indexWriter.commit();\n}\n\n// create retrieval chain\nRetrievalChain retrievalChain = new LuceneRetrievalChain(directory, 2 /* max count of retrieved documents */);\n\n// retrieve the most relevant documents for the passed question\nStream<Map<String, String>> retrievedDocuments = retrievalChain.run("my question?");\n')),(0,a.kt)("h2",{id:"retrieve-documents-from-rdbms"},"Retrieve Documents from RDBMS"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/retrieval/JdbcRetrievalChainIT.java"},"JdbcRetrievalChainIT")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Supplier<Connection> connectionSupplier = () -> {\n    try {\n        return DriverManager.getConnection(connectionString, username, password);\n    } catch (SQLException e) {\n        throw new IllegalStateException("error creating database connection", e);\n    }\n};\n\nRetrievalChain retrievalChain = new JdbcRetrievalChain(connectionSupplier, 2 /* max count of retrieved documents */);\n\nStream<Map<String, String>> retrievedDocuments = retrievalChain.run("my question?");\n')))}p.isMDXComponent=!0}}]);