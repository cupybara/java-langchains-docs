---
sidebar_position: 3
---

# LLM

## Azure

### Azure Chat
See [AzureOpenAiChatCompletionsChainIT](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/llm/azure/chat/AzureOpenAiChatCompletionsChainIT.java)

```java
AzureOpenAiChatCompletionsChain chain = new AzureOpenAiChatCompletionsChain(
	"my-azure-resource-name",
	"gpt-35-turbo", // deployment name
	"2023-05-15", // api version
	"Hello, this is ${name}", 
	new OpenAiChatCompletionsParameters().temperature(0D), // also allows to set more parameters
	System.getenv("OPENAI_API_KEY"),
	"You are a helpful assistant who answers questions to ${name}" // optional systemTemplate 
);

String result = chain.run(Collections.singletonMap("name", "Manuel")); 
// the above outputs something like: "Hello Manuel, how are you"
```

### Azure Completions
```java
AzureOpenAiCompletionsChain chain = new AzureOpenAiCompletionsChain(
	"my-azure-resource-name",
	"text-davinci-003", // deployment name
	"2023-05-15", // api version
	"Hello, this is ${name}", 
	new OpenAiCompletionsParameters().temperature(0D), // also allows to set more parameters
	System.getenv("OPENAI_API_KEY"),
	"You are a helpful assistant who answers questions to ${name}" // optional systemTemplate 
);

String result = chain.run(Collections.singletonMap("name", "Manuel"));
// the above outputs something like: "Hello Manuel, how are you"
```

## OpenAI

### OpenAI Chat
See [OpenAiChatCompletionsChainIT](https://github.com/cupybara/java-langchains/tree/master/src/test/java/io/github/cupybara/javalangchains/chains/llm/openai/chat/OpenAiChatCompletionsChainIT.java)

```java
OpenAiChatCompletionsChain chain = new OpenAiChatCompletionsChain(
	"Hello, this is ${name}", 
	new OpenAiChatCompletionsParameters().model("gpt-3.5-turbo").temperature(0D), // also allows to set more parameters
	System.getenv("OPENAI_API_KEY"),
	"You are a helpful assistant who answers questions to ${name}" // optional systemTemplate 
);

String result = chain.run(Collections.singletonMap("name", "Manuel"));
// the above outputs something like: "Hello Manuel, how are you"
```

### OpenAI Completions
```java
OpenAiCompletionsChain chain = new OpenAiCompletionsChain(
	"Hello, this is ${name}", 
	new OpenAiCompletionsParameters().model("text-davinci-003").temperature(0D), // also allows to set more parameters
	System.getenv("OPENAI_API_KEY"),
	"You are a helpful assistant who answers questions to ${name}" // optional systemTemplate 
);

String result = chain.run(Collections.singletonMap("name", "Manuel"));
// the above outputs something like: "Hello Manuel, how are you"
```