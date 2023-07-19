---
sidebar_position: 3
---

# Quickstart

After creating a new maven project and adding the dependency as described in [Installing](./install) modify the `Main` class and add the following code

```java title="/src/your/package/name/Main.java"
public class Main {
    public static void main(String[] args) {
        OpenAiChatCompletionsChain chain = new OpenAiChatCompletionsChain(
            "Hello, this is ${name}", 
            new OpenAiChatCompletionsParameters().model("gpt-3.5-turbo").temperature(0D), // also allows to set more parameters
            System.getenv("OPENAI_API_KEY"),
            "You are a helpful assistant who answers questions to ${name}" // optional systemTemplate 
        );

        String result = chain.run(Collections.singletonMap("name", "Manuel"));
        // the above outputs something like: "Hello Manuel, how are you"
    }
}
```

This requires an environment variable containing your OpenAI API key which has to be set with your OS specific command beforehand.

The above example illustrates a very basic chain which only contains an OpenAI interaction with a `gpt-3.5-turbo` model which is given the system context of being a helpful assistant that responds to the user's prompts. This basic chain can be extended using different already implemented chains or custom implementations that adhere to the [Chain](https://github.com/cupybara/java-langchains/tree/master/src/main/java/io/github/cupybara/javalangchains/chains/Chain.java) interface interface. 
One such example is the consecutive execution of different OpenAI prompts like in the following snippet:
```java
Chain<Map<String, String>, String> chain = new OpenAiChatCompletionsChain(
	    "Hello, this is ${name}. What is your name?", parameters, System.getenv("OPENAI_API_KEY"))
    .chain(prev -> Collections.singletonMap("result", prev))
	.chain(new OpenAiChatCompletionsChain("What was the question for the following answer: ${result}", 
        parameters, System.getenv("OPENAI_API_KEY")));

String result = chain.run(Collections.singletonMap("name", "Manuel"));
```

For further use case examples which contain more complex chains check out the [Use Cases section](/docs/category/use-cases).
