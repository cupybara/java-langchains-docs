---
siderbar_position: 4
---

# Further Information

## Usage behind a corporate proxy
If a chain needs to access to an external service, there will be a constructor parameter for passing the http client.
The [WebClient](https://docs.spring.io/spring-framework/reference/web/webflux-webclient.html) is used for the following chains:
* [AzureOpenAiChatCompletionsChain](src/main/java/io/github/cupybara/javalangchains/chains/llm/azure/chat/AzureOpenAiChatCompletionsChain.java)
* [AzureOpenAiCompletionsChain](src/main/java/io/github/cupybara/javalangchains/chains/llm/azure/completions/AzureOpenAiCompletionsChain.java)
* [OpenAiChatCompletionsChain](src/main/java/io/github/cupybara/javalangchains/chains/llm/openai/chat/OpenAiChatCompletionsChain.java)
* [OpenAiCompletionsChain](src/main/java/io/github/cupybara/javalangchains/chains/llm/openai/completions/OpenAiCompletionsChain.java)

There exists plenty of public documentation on how to configure a http proxy for those cases.
One example is [this one from Baeldung](https://www.baeldung.com/spring-webflux-timeout).

For accessing an Elasticsearch cluster the [Elasticsearch Low Level Client](https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/java-rest-low.html) is used.
The [official documentation](https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/8.8/java-rest-low-usage-initialization.html) shows how to use a proxy in this case.