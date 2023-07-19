---
sidebar_position: 1
---

# Reader

## Read Documents from In Memory PDF
See [ReadDocumentsFromInMemoryPdfChainTest](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/read/ReadDocumentsFromInMemoryPdfChainTest.java)

Read the in memory pdf into a single document

```java
InMemoryPdf inMemoryPdf = new InMemoryPdf(
	IOUtils.toByteArray(ReadDocumentsFromInMemoryPdfChainTest.class.getResourceAsStream("/pdf/qa/book-of-john-3.pdf")),
	"my-in-memory.pdf");
	
Stream<Map<String, String>> readDocuments = new ReadDocumentsFromInMemoryPdfChain().run(inMemoryPdf)
	
// the readDocuments contains a (pdfContent, "my-in-memory.pdf") pair
```

Read documents for each page of the in memory pdf

```java
InMemoryPdf inMemoryPdf = new InMemoryPdf(
	IOUtils.toByteArray(ReadDocumentsFromInMemoryPdfChainTest.class.getResourceAsStream("/pdf/qa/book-of-john-3.pdf")),
	"my-in-memory.pdf");
	
Stream<Map<String, String>> readDocuments = new ReadDocumentsFromInMemoryPdfChain(PdfReadMode.PAGES).run(inMemoryPdf)
	
// the readDocuments contains (content, source) pairs for all read pdf pages (source is "my-in-memory.pdf" + the pdf page number)
```

## Read Documents from PDF
See [ReadDocumentsFromPdfChainTest](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/data/read/ReadDocumentsFromPdfChainTest.java)

Read each pdf in the given directory into a single document each

```java
Stream<Map<String, String>> readDocuments = new ReadDocumentsFromPdfChain()
	.run(Paths.get("path/to/my/pdf/folder"))
	
// the readDocuments contains (content, source) pairs for all read pdfs (source is the pdf filename)
```

Read each page of each pdf in the given directory into a single document each

```java
Stream<Map<String, String>> readDocuments = new ReadDocumentsFromPdfChain(PdfReadMode.PAGES)
	.run(Paths.get("path/to/my/pdf/folder"))
	
// the readDocuments contains (content, source) pairs for all read pdf pages (source is the pdf filename + the pdf page number)
```