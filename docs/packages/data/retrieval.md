---
sidebar_position: 2
---

# Retrieval

## Retrieve Documents from Elasticsearch Index

See [ElasticsearchRetrievalChainIT](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/retrieval/ElasticsearchRetrievalChainIT.java)

```java
RestClientBuilder restClientBuilder = RestClient.builder(new HttpHost("localhost", 9200));

Chain<Path, Void> createElasticsearchIndexChain = new ReadDocumentsFromPdfChain()
	.chain(new WriteDocumentsToElasticsearchIndexChain("my-index", restClientBuilder));

Path pdfDirectoryPath = Paths.get(ElasticsearchRetrievalChainTest.class.getResource("/pdf/qa").toURI());

// create and fill elasticsearch index with read pdfs (source, content)-pairs
createElasticsearchIndexChain.run(pdfDirectoryPath);

// retrieve documents relevant to a specific question
try (RestClient restClient = restClientBuilder.build();
		ElasticsearchRetrievalChain retrievalChain = new ElasticsearchRetrievalChain("my-index", restClient, 1)) {

	// retrieve the most relevant documents for the passed question
	Stream<Map<String, String>> retrievedDocuments = retrievalChain.run("who is john doe?").collect(Collectors.toList());

	// ...
}
```

## Retrieve Documents from Lucene Directory

See [LuceneRetrievalChainTest](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/retrieval/LuceneRetrievalChainTest.java)

```java
// create lucene index
Directory directory = new MMapDirectory(Files.createTempDirectory("myTempDir"));

// fill lucene index
try (IndexWriter indexWriter = new IndexWriter(directory, new IndexWriterConfig(new StandardAnalyzer()))) {
	List<String> documents = Arrays.asList("My first document", "My second document", "My third document");

	for (String content : documents) {
		Document doc = new Document();
		doc.add(new TextField(PromptConstants.CONTENT, content, Field.Store.YES));
		doc.add(new StringField(PromptConstants.SOURCE, String.valueOf(documents.indexOf(content) + 1), Field.Store.YES));
		indexWriter.addDocument(doc);
	}

	indexWriter.commit();
}

// create retrieval chain
RetrievalChain retrievalChain = new LuceneRetrievalChain(directory, 2 /* max count of retrieved documents */);

// retrieve the most relevant documents for the passed question
Stream<Map<String, String>> retrievedDocuments = retrievalChain.run("my question?");
```


## Retrieve Documents from RDBMS

See [JdbcRetrievalChainIT](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/retrieval/JdbcRetrievalChainIT.java)

```java
Supplier<Connection> connectionSupplier = () -> {
	try {
		return DriverManager.getConnection(connectionString, username, password);
	} catch (SQLException e) {
		throw new IllegalStateException("error creating database connection", e);
	}
};

RetrievalChain retrievalChain = new JdbcRetrievalChain(connectionSupplier, 2 /* max count of retrieved documents */);

Stream<Map<String, String>> retrievedDocuments = retrievalChain.run("my question?");
```