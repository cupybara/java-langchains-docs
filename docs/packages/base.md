---
sidebar_position: 1
---

# Base

## Logging
The [LoggingChain](https://github.com/cupybara/java-langchains/tree/master/src/main/java/io/github/cupybara/javalangchains/chains/base/logging/LoggingChain.java) can be used to log the previous chain's output.
Take a look at the [RetrievalQaTest](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/usecases/RetrievalQaTest.java) to see some example usages (logging chains indented for improved readability):

```java
final Chain<String, AnswerWithSources> qaChain = retrievalChain
		.chain(summarizeDocumentsChain)
			.chain(new ApplyToStreamInputChain<>(new LoggingChain<>(LoggingChain.defaultLogPrefix("SUMMARIZED_DOCUMENT"))))
		.chain(combineDocumentsChain)
			.chain(new LoggingChain<>(LoggingChain.defaultLogPrefix("COMBINED_DOCUMENT")))
		.chain(openAiChatChain)
			.chain(new LoggingChain<>(LoggingChain.defaultLogPrefix("LLM_RESULT")))
		.chain(mapAnswerWithSourcesChain);
```

The summarizeDocumentsChain in this example provides a Stream as an output. To log each item of the Stream the LoggingChain can be wrapped in an 
[ApplyToStreamInputChain](https://github.com/cupybara/java-langchains/tree/master/src/main/java/io/github/cupybara/javalangchains/chains/base/ApplyToStreamInputChain.java).

This example provides the following log output running the RetrievalQaTest:

```
========================================================================================================================================================
SUMMARIZED_DOCUMENT
========================================================================================================================================================
{source=book-of-john-1.pdf, question=who is john doe?, content=John Doe is a highly skilled and experienced software engineer with a passion for problem-solving and creating innovative solutions. He has been working in the technology industry for over 15 years and has gained a reputation for his exceptional programming abilities and attention to detail.}

========================================================================================================================================================
SUMMARIZED_DOCUMENT
========================================================================================================================================================
{source=book-of-john-3.pdf, question=who is john doe?, content=John Doe is described as someone with a diverse range of hobbies and interests. Some of his notable hobbies include music production, culinary adventures, photography and travel, fitness and outdoor activities, and being a book club enthusiast. He is also involved in volunteering and community service, language learning, gardening, DIY projects, and astronomy.}

========================================================================================================================================================
COMBINED_DOCUMENT
========================================================================================================================================================
{question=who is john doe?, content=Content: John Doe is described as someone with a diverse range of hobbies and interests. Some of his notable hobbies include music production, culinary adventures, photography and travel, fitness and outdoor activities, and being a book club enthusiast. He is also involved in volunteering and community service, language learning, gardening, DIY projects, and astronomy.
Source: book-of-john-3.pdf

Content: John Doe is a highly skilled and experienced software engineer with a passion for problem-solving and creating innovative solutions. He has been working in the technology industry for over 15 years and has gained a reputation for his exceptional programming abilities and attention to detail.
Source: book-of-john-1.pdf}

========================================================================================================================================================
LLM_RESULT
========================================================================================================================================================
John Doe is described as someone with a diverse range of hobbies and interests, including music production, culinary adventures, photography, travel, fitness, outdoor activities, being a book club enthusiast, volunteering, community service, language learning, gardening, DIY projects, and astronomy. Additionally, John Doe is a highly skilled and experienced software engineer with a passion for problem-solving and creating innovative solutions. He has been working in the technology industry for over 15 years and is known for his exceptional programming abilities and attention to detail.
SOURCES: book-of-john-3.pdf, book-of-john-1.pdf
```