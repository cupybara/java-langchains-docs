---
sidebar_position: 4
---

# QA

## Modify Documents

The ModifyDocumentsContentChain can be used for document summarization (for example).

```java
// create the llm chain which is used for summarization
LargeLanguageModelChain llmChain = new OpenAiChatCompletionsChain(
		PromptTemplates.QA_SUMMARIZE, 
		new OpenAiChatCompletionsParameters().temperature(0D).model("gpt-3.5-turbo"),
		System.getenv("OPENAI_API_KEY"));

// create the ModifyDocumentsContentChain which is used to apply the llm chain to each passed document
ModifyDocumentsContentChain summarizeDocumentsChain = new ModifyDocumentsContentChain(llmChain);

// create some example documents
Map<String, String> myFirstDocument = new HashMap<String, String>();
myFirstDocument.put(PromptConstants.CONTENT, "this is my first document content");
myFirstDocument.put(PromptConstants.SOURCE, "this is my first document source");
// the default summarize prompt PromptTemplates.QA_SUMMARIZE also expects the question used for retrieval in the document
myFirstDocument.put(PromptConstants.QUESTION, "who is John Doe?");

Map<String, String> mySecondDocument = new HashMap<String, String>();
mySecondDocument.put(PromptConstants.CONTENT, "this is my second document content");
mySecondDocument.put(PromptConstants.SOURCE, "this is my second document source");
mySecondDocument.put(PromptConstants.QUESTION, "how old is John Doe?"); // see comment above

// input for the summarize chain is a stream of documents
Stream<Map<String, String>> documents = Stream.of(myFirstDocument, mySecondDocument);

// output contains the passed documents with summarized content-Value
Stream<Map<String, String>> summarizedDocuments = summarizeDocumentsChain.run(documents);
```

## Combine Documents

```java
CombineDocumentsChain combineDocumentsChain = new CombineDocumentsChain();

Map<String, String> myFirstDocument = new HashMap<String, String>();
myFirstDocument.put(PromptConstants.CONTENT, "this is my first document content");
myFirstDocument.put(PromptConstants.SOURCE, "this is my first document source");

Map<String, String> mySecondDocument = new HashMap<String, String>();
mySecondDocument.put(PromptConstants.CONTENT, "this is my second document content");
mySecondDocument.put(PromptConstants.SOURCE, "this is my second document source");

Stream<Map<String, String>> documents = Stream.of(myFirstDocument, mySecondDocument);

Map<String, String> combinedDocument = combineDocumentsChain.run(documents);
/* 
 * Content: this is my first document content
 * Source: this is my first document source
 *
 * Content: this is my second document content
 * Source: this is my second document source
 * 
 * (stored with key "content" inside the map)
 */
```

## Map LLM results to answers with sources

```java
MapAnswerWithSourcesChain mapAnswerWithSourcesChain = new MapAnswerWithSourcesChain();

AnswerWithSources answerWithSources = mapAnswerWithSourcesChain.run("The answer is bla bla bla.\nSOURCES: page 1 book xy, page 2 book ab");

System.out.println(answerWithSources.getAnswer());  // The answer is bla bla bla.
System.out.println(answerWithSources.getSources()); // [page 1 book xy, page 2 book ab]

```

## Split Documents

See [SplitDocumentsChainTest](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/qa/split/SplitDocumentsChainTest.java)

```java

// 1. Create Documents

List<Map<String, String>> documents = new LinkedList<>();

Map<String, String> firstDocument = new LinkedHashMap<>();
firstDocument.put(PromptConstants.SOURCE, "book of john");
firstDocument.put(PromptConstants.CONTENT, "This is a short text. This is another short text.");
documents.add(firstDocument);

Map<String, String> secondDocument = new LinkedHashMap<>();
secondDocument.put(PromptConstants.SOURCE, "book of jane");
secondDocument.put(PromptConstants.CONTENT, "This is a short text.");
documents.add(secondDocument);

// 2. Split Documents

/*
 * We create a TextSplitter that splits a text into partitions using a JTokkit
 * Encoding. We use the cl100k_base encoding (which btw is the default for
 * gpt-3.5-turbo)
 */
TextSplitter textSplitter = new JtokkitTextSplitter(
		Encodings.newDefaultEncodingRegistry().getEncoding(EncodingType.CL100K_BASE), 10);

/*
 * we now instantiate the SplitDocumentsChain which will split our documents
 * using the above created TextSplitter on the "content" field.
 */
SplitDocumentsChain splitDocumentsChain = new SplitDocumentsChain(textSplitter);

List<Map<String, String>> splitDocuments = splitDocumentsChain.run(documents.stream())
		.collect(Collectors.toList());

// splitDocuments: [
//   {content=This is a short text. , source=book of john},
//   {content=This is another short text., source=book of john},
//   {content=This is a short text., source=book of jane}
// ]
```