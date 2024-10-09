---
sidebar_label: 'SMA Fetch Control Number'
---

# SMA Fetch Control Number

## Overview

BCTLs and Post Control Numbers must be resolved to automate downstream workflows. This application fetches the specified control number and sets the specified OpCon/xps property/token to this value. This application requires that MSGIN parameters be set up. 

:::note
The configuration file for this program must be set up priot to executing your first XP2 job. Please refer to the [SMAFetchControlNumber INI](../reference/smafetchcontrolnumber) and [MSGIN File](../reference/msgin-file) information in the Reference section.
:::

## Command Line

This program is launched via an OpCon job with the following command line.

```
[[SMAXPSetup]] SMAFetchControlNumber.pl -c <SMAFetchControlNumber.INI> 
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

### -k
The key to use for the rules lookup is specified by the –k parameter. This key must match one of the entries in the 'Keys' section of the SMAFetchControlNumber INI.

### -p
The property indicated by this option will be updated with the Control Number that is found in the XP2 Console.

:::tip Example
In this example, we are looking for the BCTL number for the 'inscuna' process and will update a property called 'inscunaproperty'.

```
[[SMAXPSetup]]  SMAFetchControlNumber.pl -c SMAFetchControlNumber.ini –d \“[[inscunaStart]]\” -k inscuna -p inscunaproperty
```
:::
