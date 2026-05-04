---
sidebar_label: 'SMA Fetch Control Number'
title: 'SMAFetchControlNumber'
description: 'Use SMAFetchControlNumber.pl to retrieve a batch control number from the XP2 console and store it in an OpCon property.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# SMAFetchControlNumber

## What is it?

`SMAFetchControlNumber.pl` retrieves a specified control number (BCTL or post control number) from the XP2 console log and stores the value in an OpCon property. This enables downstream jobs to reference the control number for dependent processing steps.

- Use this script after an XP2 job runs to capture its batch control number for use in later jobs
- Use it with the `-d` switch and a datestamp from `SMACaptureDatestamp` to prevent the script from returning a control number from a prior run

:::note
The configuration file for this script must be set up prior to running your first XP2 job. Refer to the [SMAFetchControlNumber INI](../reference/smafetchcontrolnumber) and [MSGIN File](../reference/msgin-file) information in the Reference section.
:::

## Command line

Run this script from an OpCon job using the following command line:

```
[[SMAXPSetup]] SMAFetchControlNumber.pl -c <SMAFetchControlNumber.INI>
```

## Command line switches

:::note
Specify the arguments in alphabetical order. Some arguments may not be recognized if the order is incorrect.
:::

| Switch | Required | Description |
|---|---|---|
| `-c` | Yes | The location of the configuration file to use. |
| `-d` | No | A datestamp captured by `SMACaptureDatestamp`. If the desired key cannot be satisfied by records prior to this timestamp, a not-found condition is triggered and the job fails. Must be enclosed in quotes with the quotes escaped by a backslash. |
| `-k` | Yes | The key to use for the rules lookup. Must match one of the entries in the `Keys` section of the `SMAFetchControlNumber` INI file. |
| `-p` | Yes | The property to update with the control number found in the XP2 console. |

:::tip Example
The following command looks for the BCTL number for the `inscuna` job and updates a property called `inscunaproperty`:

```
[[SMAXPSetup]]  SMAFetchControlNumber.pl -c SMAFetchControlNumber.ini -d \"[[inscunaStart]]\" -k inscuna -p inscunaproperty
```
:::

## Related topics

- [SMACaptureDatestamp](./smacapturedatestamp.md)
- [SMACheckConsoleLog](./smacheckconsolelog.md)
- [SMAFetchControlNumber INI](../reference/smafetchcontrolnumber.md)
- [MSGIN File](../reference/msgin-file.md)
