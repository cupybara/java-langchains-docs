---
siderbar_position: 3
---

# Writer

## Write Documents to Elasticsearch Index
```java
RestClientBuilder restClientBuilder = RestClient.builder(new HttpHost("localhost", 9200));

// this chain reads documents from a folder of pdfs and writes them to an elasticsearch index
Chain<Path, Void> fillElasticsearchIndexChain = new ReadDocumentsFromPdfChain()
  .chain(new WriteDocumentsToElasticsearchIndexChain("my-index", restClientBuilder));

Path pdfDirectoryPath = Paths.get(getClass().getResource("/pdf/qa").toURI());

fillElasticsearchIndexChain.run(pdfDirectoryPath);
```

## Write Documents to Lucene Directory
```java
Path tempIndexPath = Files.createTempDirectory("lucene")

// this chain reads documents from a folder of pdfs and writes them to an index directory
Chain<Path, Directory> createLuceneIndexChain = new ReadDocumentsFromPdfChain()
	.chain(new WriteDocumentsToLuceneDirectoryChain(tempIndexPath));

Path pdfDirectoryPath = Paths.get(getClass().getResource("/pdf/qa").toURI());

Directory directory = createLuceneIndexChain.run(pdfDirectoryPath);
```