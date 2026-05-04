---
sidebar_label: 'SMA Capture Datestamp'
title: 'SMACaptureDatestamp'
description: 'Use SMACaptureDatestamp.pl to capture the current date and time as an OpCon property, providing a reference point for SMAFetchControlNumber lookups.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# SMACaptureDatestamp

## What is it?

`SMACaptureDatestamp.pl` formats the current date and time and stores the value in a specified OpCon property. This timestamp serves as a boundary for `SMAFetchControlNumber` lookups.

- Use this script before running an XP2 application that should create a post control number
- Use it when an XP2 application does not always create a post control number — by capturing the timestamp before the application runs, you define a stopping point for `SMAFetchControlNumber`

If the control number is not found in console records prior to this stopping point, a not-found condition is created rather than returning the prior day's or prior run's control number for the application.

:::note
This script requires that MSGIN parameters be set up. Refer to the [MSGIN File](../reference/msgin-file) information in the Reference section.
:::

## Command line

Run this script from an OpCon job using the following command line:

```
[[SMAXPSetup]] SMACaptureDatestamp.pl -p <property name>
```

## Command line options

| Option | Description |
| ----- | -----|
| `-p` | The name of the property to create with the current datetime stamp. Do **NOT** use a property name that contains spaces. |

:::tip Example
The following command line stores the current datetime in a property named `CurrentDateTime`:
```
[[SMAXPSetup]] SMACaptureDatestamp.pl -p CurrentDateTime
```
:::

## Related topics

- [SMAFetchControlNumber](./smafetchcontrolnumber.md)
- [SMACheckConsoleLog](./smacheckconsolelog.md)
- [MSGIN File](../reference/msgin-file.md)
