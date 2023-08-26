---
sidebar_position: 1
---

# Introduction

`java-langchains` aims to provide a Java native alternative to [hwchase17/langchain](https://github.com/hwchase17/langchain). 
As such this project tries to empower user's to create modular and composable LLM applications.

## Chains

Modular components implement the [Chain](https://github.com/cupybara/java-langchains/tree/master/src/main/java/io/github/cupybara/javalangchains/chains/Chain.java) interface.
This provides an easy way to modularize the application and encouraging reuse for various use cases.

## Getting Started

First add one of our built versions as a maven dependency (for further information see [Installation](./install)). After that you can follow the [Quickstart](./quickstart) which demonstrates basic chain usage. For details about the concept of Chains as well as detailed information for different parts of this project check out the packages section.

## Packages

This section contains an overview of different packages and the available classes / functionality.

### [Base](../packages/base)

Basic chains that serve general purposes for e.g. logging.

### [Data](../category/data)

Data-related chains to read / retrieve / write documents from / to different sources.

### [LLM](../packages/llm)

LLM backends for different tasks.

### [QA](../packages/qa)

Different chains for document manipulation.