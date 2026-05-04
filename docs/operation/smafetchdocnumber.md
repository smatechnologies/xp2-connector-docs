---
sidebar_label: 'SMA Fetch Doc Number'
title: 'SMAFetchDocNumber'
description: 'Use SMAFetchDocNumber.pl to retrieve the document number of an XP2 job output file and store it in an OpCon property.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# SMAFetchDocNumber

## What is it?

`SMAFetchDocNumber.pl` retrieves the document number (file name) of the output file produced by a specified XP2 job. The document number is displayed as `DXXXX` and the file name is stored as `dxxxx`. The value is stored in the specified OpCon property for use in downstream jobs.

- Use this script after an XP2 job runs to capture the document number of its output file
- Use the `-v` switch to verify the file contents before accepting the document number

:::note
The configuration file for this script must be set up prior to running your first XP2 job. Refer to the [MSGIN File](../reference/msgin-file) information in the Reference section.
:::

## Command line

Run this script from an OpCon job using the following command line:

```
[[SMAXPSetup]] SMAFetchDocNumber.pl -j <XP2 Job Name> -p <Property Name>
```

## Command line switches

:::note
Specify the arguments in alphabetical order. Some arguments may not be recognized if the order is incorrect.
:::

| Switch | Required | Description |
|---|---|---|
| `-d` | No | The date the job ran that produced the document. Specify in `MM-DD` format. Providing this date ensures the correct document is located. |
| `-j` | Yes | The job name that created the document. |
| `-p` | Yes | The property to update with the document number found in the XP2 console. Do not use a property name that contains spaces. |
| `-s` | No | Suppresses the `d` prefix on the document name. |
| `-v` | No | A verification string. The file is opened and read — the verification string must appear in the file. If omitted, the job name must appear in the file. |

:::tip Example
The following command retrieves the document number for the `COB7` job:

```
[[SMAXPSetup]]  SMAFetchDocNumber.pl -d [[$SCHEDULE DATE MM-DD]] -j COB7 -p COB7DocNum
```
:::

## Related topics

- [SMAFetchQueuedDocNumber](./smafetchqueueddocnumber.md)
- [MSGIN File](../reference/msgin-file.md)
