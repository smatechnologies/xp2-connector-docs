---
sidebar_label: 'SMA Check Console Log'
title: 'SMACheckConsoleLog'
description: 'Use SMACheckConsoleLog.pl to trigger an OpCon event when a specified key is found in the XP2 console log.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# SMACheckConsoleLog

## What is it?

`SMACheckConsoleLog.pl` uses the keys and values defined in the `SMAFetchControlNumber` configuration file to search the XP2 console log. Instead of setting a property to the value of a matched field, this script triggers a specified OpCon event when a match is found.

- Use this script to trigger downstream jobs or events when a specific XP2 console message is detected
- Use the `-n` switch to trigger an event when a key is **not** found in the console log

:::note
The configuration file for this script must be set up prior to running your first XP2 job. Refer to the [SMAFetchControlNumber INI](../reference/smafetchcontrolnumber) and [MSGIN File](../reference/msgin-file) information in the Reference section.
:::

## Command line

Run this script from an OpCon job using the following command line:

```
[[SMAXPSetup]] SMACheckConsoleLog.pl -c <SMAFetchControlNumber.INI>
```

## Command line switches

:::note
Specify the arguments in alphabetical order. Some arguments may not be recognized if the order is incorrect.
:::

| Switch | Required | Description |
|---|---|---|
| `-c` | Yes | The location of the configuration file to use. |
| `-d` | No | A datestamp captured by `SMACaptureDatestamp`. If the desired key cannot be satisfied by records prior to this timestamp, a not-found condition is triggered and the job fails. Must be enclosed in quotes with the quotes escaped by a backslash. |
| `-e` | Yes | The event to trigger when a match is found. Do not include the leading `$` sign or user credentials — credentials are derived from `MSGIN.ini`. To include the matched value in the event string, use the **MATCHING FIELD** placeholder. Must be enclosed in quotes with the quotes escaped by a backslash. |
| `-k` | Yes | The key to use for the rules lookup. Must match one of the entries in the `Keys` section of the `SMAFetchControlNumber` INI file. |
| `-n` | No | Negates the test — the specified event is triggered if the key is **not** found. |

:::tip Example
The following command triggers a `$JOB:ADD` event when the console contains the key for `inscuna`:

```
[[SMAXPSetup]]  SMACheckConsoleLog.pl  -c SMAFetchControlNumber.ini -d \"[[inscunaStart]]\" -e \"JOB:ADD,CURRENT,Schedule Name,Job Name,JobFrequency;BCTL=**MATCHING FIELD**\" -k inscuna
```
:::

## Related topics

- [SMACaptureDatestamp](./smacapturedatestamp.md)
- [SMAFetchControlNumber](./smafetchcontrolnumber.md)
- [SMAFetchControlNumber INI](../reference/smafetchcontrolnumber.md)
- [MSGIN File](../reference/msgin-file.md)
