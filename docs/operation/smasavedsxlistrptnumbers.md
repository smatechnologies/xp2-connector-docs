---
sidebar_label: 'SMA Save DSX List Rpt Number'
---

# SMA Save DSX List Rpt Number

## Overview

This application finds the first and the last report numbers in the DSX List. These report numbers are stored in the specified properties.

:::note
The configuration file for this program must be set up priot to executing your first XP2 job. Please refer to the [MSGIN File](../reference/msgin-file) information in the Reference section..
:::

## Command Line

This program is launched via an OpCon job with the following command line.

```
[[SMAXPSetup]] SMAFetchQueuedDocNumber.pl -e <Ending Property Name> -s <Starting Property Name>
```

## Command Line Switches

:::note Notes
The arguments should be specified in alphabetical order. There are situations where an argument may not be recognized if the order is incorrect.
:::

### -e 
This is the name of the property that will be created with the ending report number in the DSX List file.

:::caution
Do not use a property name that has embedded spaces in the name.
:::

### -s
This is the name of the property that will be created with the starting report number in the DSX List file.

:::caution
Do not use a property name that has embedded spaces in the name.
:::


:::tip Example
In this example, we would updated properties with the start and end report number. 
```
[[SMAXPSetup]]  SMAFetchQueuedDocNumber.pl -e DSXListEndPropertyName -s DSXListStartPropertyName
```
:::
