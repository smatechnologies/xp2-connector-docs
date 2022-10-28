---
sidebar_label: 'SMA Capture Datestamp'
---

# SMA Capture Datestamp

## Overview

This application formats the current date and time so it can be used as an argument to SMAFetchControlNumber.Some XP applications do not always create a post control number (if there is not post required). By capturing the date and time before executing the application that should create a control number, we can define a stopping point for SMAFetchControlNumber. If the control number is not found prior to this stopping point, a no found condition is created rather than reporting the prior day or prior execution control number for this application. 

:::note
This application requires that MSGIN parameters be set up. Please refer to the [MSGIN File](../reference/msgin-file) information of the Reference section.
:::

## Command Line

This program is launched via an OpCon job with the following command line.

```
[[SMAXPSetup]] SMACaptureDatestamp.pl -p <property name>
```

## Command Line Options

| Options | Description |
| ----- | -----|
| -p | This is the name of the property that will be created with the current datetime stamp. Do **NOT** use a property name that has embedded spaces in the name.|

:::tip Example
Here is an example of the command line where CurrentDateTime will be the property created.
```
[[SMAXPSetup]] SMACaptureDatestamp.pl -p CurrentDateTime
```
:::