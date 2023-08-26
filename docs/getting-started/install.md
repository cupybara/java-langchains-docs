---
sidebar_position: 2
---

# Installing

To group this repository with other related repositories in the future we lately transferred this repository to the freshly created organization [cupybara](https://github.com/cupybara).
Therefore we changed the package names from *com.github.hakenadu* to *io.github.cupybara* and also changed the groupId.
The latest artifact is therefore available by using the following Maven dependency:

```xml
<dependency>
    <groupId>io.github.cupybara</groupId>
    <artifactId>java-langchains</artifactId>
    <version>0.6.3</version>
</dependency>
```

## Older Versions

Packages up to version 0.5.0 are available using the groupId com.github.hakenadu.
These artifacts are not updated anymore so we don't suggest using them.
Please switch to newer versions distributed under the groupId **io.github.cupybara**.

```xml
<dependency>
    <groupId>com.github.hakenadu</groupId>
    <artifactId>java-langchains</artifactId>
    <version>0.5.0</version>
</dependency>
```