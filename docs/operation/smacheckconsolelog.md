---
sidebar_label: 'SMA Check Console Log'
---

# SMA Check Console Log

## Overview

This application uses the keys (and their values) that are defined in the SMAFetchControlNumber application. Instead of setting a property to the value of a matched field, this application will execute a specified event. This application requires that MSGIN parameters be set up. 

:::note
The configuration file for this program must be set up priot to executing your first XP2 job. Please refer to the [SMAFetchControlNumber INI](../reference/smafetchcontrolnumber) and [MSGIN File](../reference/msgin-file) information in the Reference section.
:::

## Command Line

This program is launched via an OpCon job with the following command line.

```
[[SMAXPSetup]] SMACheckConsoleLog.pl -c <SMAFetchControlNumber.INI> 
```

## Command Line Switches

:::note
The arguments should be specified in alphabetical order. There are situations where an argument may not be recognized if the order is incorrect.
:::

### -c

This option is used to indicate the location of the configuration file that should be used.

### -d 
This is a datestamp captured by SMACaptureDatestamp. If the desired key parameter cannot by satisfied by the records prior to this date/time stamp, a no-find condition is triggered and this job errors. 
:::caution
This field must be enclosed in quotes. The quotes must be “escaped” with a backslash.
:::

### -e 
The event that should be executed. 
:::note
* The leading $ sign must NOT be specified.
* The userid and password should not be specified. It will be derived from the MSGIN.ini file on the UNIX machine.
* If the match field is desired for usage in the event, refer to it as **MATCHING FIELD**. This will be replaced by the value that was found. 
:::
:::caution
This field must be enclosed in quotes. The quotes must be “escaped” with a backslash.
:::

### -k
The key to use for the rules lookup is specified by the –k parameter. This key must match one of the entries in the 'Keys' section of the SMAFetchControlNumber INI.

### -n
This switch is optional and is used to Negate the test. The specified event is created if the key can **NOT** be found.

:::tip Example
Here you will see that a $JOB:ADD event is to be submitted when the console has the 'Key' for 'inscuna'.

```
[[SMAXPSetup]]  SMACheckConsoleLog.pl  -c SMAFetchControlNumber.ini –d \“[[inscunaStart]]\” -e \“JOB:ADD,CURRENT,Schedule Name,Job Name,JobFrequency;BCTL=**MATCHING FIELD**\” -k inscuna
```
:::
