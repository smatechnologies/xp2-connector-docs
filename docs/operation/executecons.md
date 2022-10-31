---
sidebar_label: 'Execute Cons'
---

# ExecuteCons

## Overview

This application simply submits the specified console command via 'cons'. Output from the command is printed to the STDOUT log.

## Command Line

In order to execute specific console commands, you need to create an OpCon job with a command line in the following format:

``` [[SMAXPSetup]] ExecuteCons.pl <Console Command> ```

:::note
If the "console command" must be enclosed in quotes, then they must be 'escaped' by a preceding backslash.
```
[[SMAXPSetup]] ExecuteCons.pl \"Console Command\"
```
:::
