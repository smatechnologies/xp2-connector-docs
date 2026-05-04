---
sidebar_label: 'SMA Save DSX List Rpt Number'
title: 'SMAListRptNumbers'
description: 'Use the SMAListRptNumbers script to find and store the first and last report numbers in the DSX List as OpCon properties.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# SMAListRptNumbers

## What is it?

This script finds the first and the last report numbers in the DSX List and stores those values in the specified OpCon properties. The stored values can then be referenced by downstream jobs that need to process reports within that range.

- Use this script when downstream processing depends on knowing the starting and ending report numbers in the DSX List
- Run this script before jobs that iterate over or reference DSX List report numbers

:::note
The configuration file for this script must be set up prior to running your first XP2 job. Refer to the [MSGIN File](../reference/msgin-file) information in the Reference section.
:::

## Command line

Run this script from an OpCon job using the following command line:

```
[[SMAXPSetup]] SMAFetchQueuedDocNumber.pl -e <Ending Property Name> -s <Starting Property Name>
```

## Command line switches

:::note
Specify the arguments in alphabetical order. Some arguments may not be recognized if the order is incorrect.
:::

| Switch | Required | Description |
|---|---|---|
| `-e` | Yes | The name of the property to create with the ending report number in the DSX List file. Do not use a property name that contains spaces. |
| `-s` | Yes | The name of the property to create with the starting report number in the DSX List file. Do not use a property name that contains spaces. |

:::tip Example
The following command updates properties with the start and end report numbers:
```
[[SMAXPSetup]]  SMAFetchQueuedDocNumber.pl -e DSXListEndPropertyName -s DSXListStartPropertyName
```
:::

## Related topics

- [MSGIN File](../reference/msgin-file.md)
