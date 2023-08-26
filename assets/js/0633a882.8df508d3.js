"use strict";(self.webpackChunkjava_langchains_docs=self.webpackChunkjava_langchains_docs||[]).push([[547],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=i,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||r;return t?a.createElement(d,o(o({ref:n},l),{},{components:t})):a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const r={siderbar_position:2},o="Retrieval Question-Answering Chain",s={unversionedId:"use-cases/retrieval-question-answering",id:"use-cases/retrieval-question-answering",title:"Retrieval Question-Answering Chain",description:"The following unit test provides a comprehensive solution for an information retrieval and summarization task, with the aim to provide concise, informative and relevant answers from a large set of documents. It combines multiple processes into a Question-Answering (QA) chain, each responsible for a specific task.",source:"@site/docs/use-cases/retrieval-question-answering.md",sourceDirName:"use-cases",slug:"/use-cases/retrieval-question-answering",permalink:"/java-langchains-docs/docs/use-cases/retrieval-question-answering",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-cases/retrieval-question-answering.md",tags:[],version:"current",frontMatter:{siderbar_position:2},sidebar:"tutorialSidebar",previous:{title:"Document Comparison",permalink:"/java-langchains-docs/docs/use-cases/document-comparison"},next:{title:"Further Information",permalink:"/java-langchains-docs/docs/further-information"}},c={},u=[],l={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"retrieval-question-answering-chain"},"Retrieval Question-Answering Chain"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/usecases/RetrievalQaTest.java"},"following unit test")," provides a comprehensive solution for an information retrieval and summarization task, with the aim to provide concise, informative and relevant answers from a large set of documents. It combines multiple processes into a Question-Answering (QA) chain, each responsible for a specific task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/*\n * take a look at src/test/resources/pdf of this repository\n * the pdf directory contains three documents about a fictional person named john doe\n * which we want to query using our retrieval based qa with sources chain\n */\nPath pdfDirectoryPath = Paths.get(RetrievalQaTest.class.getResource("/pdf/qa").toURI());\n\n/*\n * We are creating and running an initializing chain which reads document from our pdf folder\n * and writes them to a lucene index directory\n */\nDirectory directory =  new ReadDocumentsFromPdfChain().chain(new WriteDocumentsToLuceneDirectoryChain()).run(pdfDirectoryPath);\n\n// we got multiple OpenAI LLM Chains and define our parameters at first\nOpenAiChatCompletionsParameters openAiChatParameters = new OpenAiChatCompletionsParameters()\n        .temperature(0D)\n        .model("gpt-3.5-turbo");\n\n/*\n * Chain 1: The retrievalChain is used to retrieve relevant documents from an\n * index by using bm25 similarity\n */\ntry (LuceneRetrievalChain retrievalChain = new LuceneRetrievalChain(directory /* implies a filled lucene directory */, 2)) {\n\n    /*\n     * Chain 2: The summarizeDocumentsChain is used to summarize documents to only\n     * contain the most relevant information. This is achieved using an OpenAI LLM\n     * (gpt-3.5-turbo in this case)\n     */\n    ModifyDocumentsContentChain summarizeDocumentsChain = new ModifyDocumentsContentChain(new OpenAiChatCompletionsChain(\n            PromptTemplates.QA_SUMMARIZE, openAiChatParameters, System.getenv("OPENAI_API_KEY")));\n\n    /*\n     * Chain 3: The combineDocumentsChain is used to combine the retrieved documents\n     * in a single prompt\n     */\n    CombineDocumentsChain combineDocumentsChain = new CombineDocumentsChain();\n\n    /*\n     * Chain 4: The openAiChatChain is used to process the combined prompt using an\n     * OpenAI LLM (gpt-3.5-turbo in this case)\n     */\n    OpenAiChatCompletionsChain openAiChatChain = new OpenAiChatCompletionsChain(PromptTemplates.QA_COMBINE,\n            openAiChatParameters, System.getenv("OPENAI_API_KEY"));\n\n    /*\n     * Chain 5: The mapAnswerWithSourcesChain is used to map the llm string output\n     * to a complex object using a regular expression which splits the sources and\n     * the answer.\n     */\n    MapAnswerWithSourcesChain mapAnswerWithSourcesChain = new MapAnswerWithSourcesChain();\n\n    // we combine all chain links into a self contained QA chain\n    Chain<String, AnswerWithSources> qaChain = retrievalChain\n        .chain(summarizeDocumentsChain)\n        .chain(combineDocumentsChain)\n        .chain(openAiChatChain)\n        .chain(mapAnswerWithSourcesChain);\n\n    // the QA chain can now be called with a question and delivers an answer\n    AnswerWithSources answerWithSources = qaChain.run("who is john doe?");\n    \n    /*\n     * answerWithSources.getAnwswer() provides the answer to the question based on the retrieved documents\n     * answerWithSources.getSources() provides a list of source strings for the retrieved documents\n     */\n}\n')),(0,i.kt)("p",null,"The QA chain performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Document Retrieval"),": This step is responsible for retrieving the most relevant documents related to a given query from a large collection. It uses an index-based search algorithm to find documents containing information related to the input query. This functionality can be facilitated by any ",(0,i.kt)("inlineCode",{parentName:"p"},"RetrievalChain")," implementation. ",(0,i.kt)("inlineCode",{parentName:"p"},"LuceneRetrievalChain"),", which utilizes the BM25 similarity metric, is just an example used in the test case.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Document Summarization"),": Once relevant documents are retrieved, they need to be summarized to extract the most essential information. The ",(0,i.kt)("inlineCode",{parentName:"p"},"SummarizeDocumentsChain")," uses an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"LargeLanguageModelChain")," for this task. In the provided example, OpenAI's GPT-3.5-turbo model via ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAiChatCompletionsChain")," is used to reduce the information to its most relevant content.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Document Combination"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"CombineDocumentsChain")," combines the summarized documents into a single prompt. This forms the input to the next stage of the process.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Answer Generation"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAiChatCompletionsChain")," uses the combined prompt to generate a response. Any instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"LargeLanguageModelChain")," can be used for this step. In the given example, OpenAI's GPT-3.5-turbo model is utilized.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mapping and Answer Extraction"),": Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"MapAnswerWithSourcesChain")," maps the string output to a complex object using a regular expression, which splits the answer from the sources of information. This provides a structured output that includes both the answer to the query and the sources from which the answer was derived."))),(0,i.kt)("p",null,"In conclusion, the QA chain represents a comprehensive solution for document-based question-answering tasks, providing not only the most relevant answer but also citing the sources from which the information was retrieved. This chain is particularly useful in contexts where understanding the origin of information is as crucial as the answer itself."))}m.isMDXComponent=!0}}]);