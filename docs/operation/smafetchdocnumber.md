---
sidebar_label: 'SMA Fetch Doc Number'
---

# SMA Fetch Doc Number

## Overview

This application fetches the document number (file name) of the output file of the specified job. The document number is displayed as DXXXX and the file name is stored as dxxxx.

:::note
The configuration file for this program must be set up priot to executing your first XP2 job. Please refer to the [MSGIN File](../reference/msgin-file) information in the Reference section..
:::

## Command Line

This program is launched via an OpCon job with the following command line.

```
[[SMAXPSetup]] SMAFetchDocNumber.pl -j <XP2 Job Name> -p <Property Name> 
```

## Command Line Switches

:::note
The arguments should be specified in alphabetical order. There are situations where an argument may not be recognized if the order is incorrect.
:::

### -d 
This option is used to indicate the date that the job ran that produced the document. This is to help ensure that the correct document is located. The date should be specified in the format of MM-DD.

### -j
This option specifies the job name that created the document.

### -p
The property indicated by this option will be updated with the document number that is found in the XP2 Console.

:::caution
Do not use a property name that has embedded spaces in the name.
:::

### -s
This option suppresss the 'd'prefx on the document name.

### -v
This is an optional parameter to specify the verification string. The file is opened and read. The verification string MUST appear in the file. If no verification string is specified, the job name must appear in the file.


:::tip Example
In this example, we are looking for the document number for the 'COB7'.

```
[[SMAXPSetup]]  SMAFetchDocNumber.pl -d [[$SCHEDULE DATE MM-DD]] -j COB7 -p COB7DocNum
```
:::
