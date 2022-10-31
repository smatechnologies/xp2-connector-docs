---
sidebar_label: 'Run XP Job'
---

# Run XP Job

## Overview

This application is the cornerstone of the XP2 Interface. It grants OpCon the ability to start and monitor XP2 jobs.

:::note
The configuration file for this program must be set up priot to executing your first XP2 job. Please refer to the information about the [Run XP Job INI](../reference/run-xp-job-ini) file in the Reference section.
:::

## Command Line

In order to execute XP2 jobs, you need to create an OpCon job with a command line in the following format:

``` [[SMAXPSetup]] run_xp_job.pl <XP2 Job Name> <Arguments> ```

:::tip Example
Here is how to run the XP2 job called CONLIST

``` [[SMAXPSetup]] run_xp_job.pl conlist ```
:::

### Tips and Tricks

* If <argurments\> contain double quotes, they must be escaped.

:::tip Example
The following is where the argument contains double quotes:
```
spec=TRLMAIL,rnge-10-15-11*10-11-11,prm1=10-05-11,prm2=10-11-11,prm3=11,delm=",",file=lnmerge
```
Here is the same argument line with the double quotes escaped:
```
spec=TRLMAIL,rnge-10-15-11*10-11-11,prm1=10-05-11,prm2=10-11-11,prm3=11,delm=\",\",file=lnmerge
```
:::

* The **AutoReplyFile** setting in the configuration can be over-ridden on the command line.

:::tip Example
The follow is a command line where the AutoReplyFile is being overwritten on the command line:
```
[[SMAXPSetup]] run_xp_job.pl <XP2 Job Name> -AutoReplyFile=/ops/bin/AltAutoReplyFile.ini
```
::: 
