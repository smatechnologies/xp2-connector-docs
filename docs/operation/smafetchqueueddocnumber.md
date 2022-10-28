---
sidebar_label: 'SMA Fetch Queued Doc Number'
---

# SMA Fetch Queued Doc Number

## Overview

This application fetches the document number (file name) of the output file of the queue entry that matches the specified parameters. The document number is displayed as Dxxxx and the file name is stored as dxxxx.

:::note
The configuration file for this program must be set up priot to executing your first XP2 job. Please refer to the [MSGIN File](../reference/msgin-file) information in the Reference section..
:::

## Command Line

This program is launched via an OpCon job with the following command line.

```
[[SMAXPSetup]] SMAFetchQueuedDocNumber.pl -d <Creation Date of Doc> -f <Form Name> -p <Property Name> -q <Queue Name> -r <Report Title>
```

## Command Line Switches

:::note Notes
* The arguments should be specified in alphabetical order. There are situations where an argument may not be recognized if the order is incorrect.
* All options are required to fully qualify which document number to select.
:::

### -d 
This option is used to indicate the date that the document was created. The date should be specified in the format of MM-DD.

### -f
This option specifies the form name associated with the document.

### -p
The property indicated by this option will be updated with the document number that is found in the XP2 Console.

:::caution
Do not use a property name that has embedded spaces in the name.
:::

### -q
This option specifies the queue number associated with the document.

### -o
This parameter is optional. If the occurance number of the report is not 1, you can specify which occurance you desire. (The default occurance is 1.)

### -r
This option speicifies the report name to select.

### -s
This option suppressses the 'd' prefix in the document name

:::tip Example
In this example, we would retrieve the desired document number for Share Draft Notices,
```
[[SMAXPSetup]]  SMAFetchQueuedDocNumber.pl -d [[$SCHEDULE DATE MM-DD]] -f SDNTC -p DOC_SDNOTICE -q \$NOTICES -r \"SHARE DRAFT NOTICES\"
```

If the responce to a queue query was:
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
