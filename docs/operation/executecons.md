---
sidebar_label: 'Execute Cons'
title: 'ExecuteCons'
description: 'Use ExecuteCons.pl to submit a console command to the XP2 console from an OpCon job and capture the output.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# ExecuteCons

## What is it?

`ExecuteCons.pl` submits a specified console command via `cons`. Output from the command is printed to the STDOUT log.

- Use this script when you need to run a console command as part of an automated OpCon workflow
- Use it to interact with the XP2 console in situations where no dedicated script exists for the operation

## Command line

To run specific console commands, create an OpCon job with a command line in the following format:

```
[[SMAXPSetup]] ExecuteCons.pl <Console Command>
```

:::note
If the console command must be enclosed in quotes, escape each quote with a preceding backslash:
```
[[SMAXPSetup]] ExecuteCons.pl \"Console Command\"
```
:::

## Related topics

- [Run XP Job](./run_xp_job.md)
- [Run XP Job INI](../reference/run-xp-job-ini.md)
