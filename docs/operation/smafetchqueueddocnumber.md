---
sidebar_label: 'SMA Fetch Queued Doc Number'
title: 'SMAFetchQueuedDocNumber'
description: 'Use SMAFetchQueuedDocNumber.pl to retrieve the document number of a queue entry matching specified parameters and store it in an OpCon property.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# SMAFetchQueuedDocNumber

## What is it?

`SMAFetchQueuedDocNumber.pl` retrieves the document number (file name) of the output file of the queue entry that matches the specified parameters. The document number is displayed as `Dxxxx` and the file name is stored as `dxxxx`. The value is stored in the specified OpCon property for use in downstream jobs.

- Use this script when you need the document number of a specific queued report identified by form, queue, and report title
- All options except `-o` are required to fully qualify which document number to select

## Command line

Run this script from an OpCon job using the following command line:

```
[[SMAXPSetup]] SMAFetchQueuedDocNumber.pl -d <Creation Date of Doc> -f <Form Name> -p <Property Name> -q <Queue Name> -r <Report Title>
```

## Command line switches

:::note
- Specify the arguments in alphabetical order. Some arguments may not be recognized if the order is incorrect.
- All options except `-o` and `-s` are required to fully qualify which document number to select.
:::

| Switch | Required | Description |
|---|---|---|
| `-d` | Yes | The date the document was created. Specify in `MM-DD` format. |
| `-f` | Yes | The form name associated with the document. |
| `-o` | No | The occurrence number of the report. If the occurrence is not 1, specify which occurrence is desired. Defaults to `1`. |
| `-p` | Yes | The property to update with the document number found in the XP2 console. Do not use a property name that contains spaces. |
| `-q` | Yes | The queue name associated with the document. |
| `-r` | Yes | The report name to select. |
| `-s` | No | Suppresses the `d` prefix in the document name. |

:::tip Example
The following command retrieves the document number for Share Draft Notices:
```
[[SMAXPSetup]]  SMAFetchQueuedDocNumber.pl -d [[$SCHEDULE DATE MM-DD]] -f SDNTC -p DOC_SDNOTICE -q \$NOTICES -r \"SHARE DRAFT NOTICES\"
```

If the response to a queue query was:
```
========================== Queue: $NOTICES =========================
-
Pr#   Type   Stat Queue    Doc/AltPr Stock    Seq-Num   ID Page Line
----- ------ ---- -------- --------- -------- --------- -- ---- -----
    No printers are assigned to this queue
-
Doc     Stat  P Form     Lines Created     Title
------- ----- - -------- ----- ----------- ----------------------------
1201    HLD   0 SDNTC    326   10-11/09:00 SHARE DRAFT NOTICES
```
:::

## Related topics

- [SMAFetchDocNumber](./smafetchdocnumber.md)
- [MSGIN File](../reference/msgin-file.md)
