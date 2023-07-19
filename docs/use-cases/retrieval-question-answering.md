---
siderbar_position: 2
---

# Retrieval Question-Answering Chain 

The [following unit test](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/usecases/RetrievalQaTest.java) provides a comprehensive solution for an information retrieval and summarization task, with the aim to provide concise, informative and relevant answers from a large set of documents. It combines multiple processes into a Question-Answering (QA) chain, each responsible for a specific task.

```java
/*
 * take a look at src/test/resources/pdf of this repository
 * the pdf directory contains three documents about a fictional person named john doe
 * which we want to query using our retrieval based qa with sources chain
 */
Path pdfDirectoryPath = Paths.get(RetrievalQaTest.class.getResource("/pdf/qa").toURI());

/*
 * We are creating and running an initializing chain which reads document from our pdf folder
 * and writes them to a lucene index directory
 */
Directory directory =  new ReadDocumentsFromPdfChain().chain(new WriteDocumentsToLuceneDirectoryChain()).run(pdfDirectoryPath);

// we got multiple OpenAI LLM Chains and define our parameters at first
OpenAiChatCompletionsParameters openAiChatParameters = new OpenAiChatCompletionsParameters()
		.temperature(0D)
		.model("gpt-3.5-turbo");

/*
 * Chain 1: The retrievalChain is used to retrieve relevant documents from an
 * index by using bm25 similarity
 */
try (LuceneRetrievalChain retrievalChain = new LuceneRetrievalChain(directory /* implies a filled lucene directory */, 2)) {

	/*
	 * Chain 2: The summarizeDocumentsChain is used to summarize documents to only
	 * contain the most relevant information. This is achieved using an OpenAI LLM
	 * (gpt-3.5-turbo in this case)
	 */
	ModifyDocumentsContentChain summarizeDocumentsChain = new ModifyDocumentsContentChain(new OpenAiChatCompletionsChain(
			PromptTemplates.QA_SUMMARIZE, openAiChatParameters, System.getenv("OPENAI_API_KEY")));

	/*
	 * Chain 3: The combineDocumentsChain is used to combine the retrieved documents
	 * in a single prompt
	 */
	CombineDocumentsChain combineDocumentsChain = new CombineDocumentsChain();

	/*
	 * Chain 4: The openAiChatChain is used to process the combined prompt using an
	 * OpenAI LLM (gpt-3.5-turbo in this case)
	 */
	OpenAiChatCompletionsChain openAiChatChain = new OpenAiChatCompletionsChain(PromptTemplates.QA_COMBINE,
			openAiChatParameters, System.getenv("OPENAI_API_KEY"));

	/*
	 * Chain 5: The mapAnswerWithSourcesChain is used to map the llm string output
	 * to a complex object using a regular expression which splits the sources and
	 * the answer.
	 */
	MapAnswerWithSourcesChain mapAnswerWithSourcesChain = new MapAnswerWithSourcesChain();

	// we combine all chain links into a self contained QA chain
	Chain<String, AnswerWithSources> qaChain = retrievalChain
		.chain(summarizeDocumentsChain)
		.chain(combineDocumentsChain)
		.chain(openAiChatChain)
		.chain(mapAnswerWithSourcesChain);

	// the QA chain can now be called with a question and delivers an answer
	AnswerWithSources answerWithSources = qaChain.run("who is john doe?");
	
	/*
	 * answerWithSources.getAnwswer() provides the answer to the question based on the retrieved documents
	 * answerWithSources.getSources() provides a list of source strings for the retrieved documents
	 */
}
```

The QA chain performs the following tasks:

1. **Document Retrieval**: This step is responsible for retrieving the most relevant documents related to a given query from a large collection. It uses an index-based search algorithm to find documents containing information related to the input query. This functionality can be facilitated by any `RetrievalChain` implementation. `LuceneRetrievalChain`, which utilizes the BM25 similarity metric, is just an example used in the test case.

2. **Document Summarization**: Once relevant documents are retrieved, they need to be summarized to extract the most essential information. The `SummarizeDocumentsChain` uses an instance of `LargeLanguageModelChain` for this task. In the provided example, OpenAI's GPT-3.5-turbo model via `OpenAiChatCompletionsChain` is used to reduce the information to its most relevant content.

3. **Document Combination**: The `CombineDocumentsChain` combines the summarized documents into a single prompt. This forms the input to the next stage of the process.

4. **Answer Generation**: The `OpenAiChatCompletionsChain` uses the combined prompt to generate a response. Any instance of `LargeLanguageModelChain` can be used for this step. In the given example, OpenAI's GPT-3.5-turbo model is utilized.

5. **Mapping and Answer Extraction**: Finally, the `MapAnswerWithSourcesChain` maps the string output to a complex object using a regular expression, which splits the answer from the sources of information. This provides a structured output that includes both the answer to the query and the sources from which the answer was derived.

In conclusion, the QA chain represents a comprehensive solution for document-based question-answering tasks, providing not only the most relevant answer but also citing the sources from which the information was retrieved. This chain is particularly useful in contexts where understanding the origin of information is as crucial as the answer itself.