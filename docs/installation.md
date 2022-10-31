---
sidebar_label: 'Installation'
---

# Installation

## Overview

It is recommended that the XP2 interface tools be installed in /ops/bin. The distribution file is named XPApplications.tar. 

## Installation Steps
1. FTP the tar file to the AIX platform in **binary**. It is recommended to place the tar file in the ```/tmp``` directory.
2. Create the installation directory by entering:
```
mkdir /ops
mkdir /ops/bin
```
3. Change directories to the installation directory by entering:
```
cd /ops/bin
```
4. Untar the distribution file.
```
tar xvf /tmp/XPApplications.tar
```

5. Under the installation directory, create a “locks” directory. 
```
mkdir /ops/bin/locks
```
6. Check the values in the following configuration files to make sure that the appropriate values are being used.
* [Run XP Job INI](reference/run-xp-job-ini)
* [SMAFetchControlNumber INI](reference/smafetchcontrolnumber)
* [MSGIN File](reference/msgin-file)


:::info
If the installation in done in a non-standerd directory, edit the file named CreateXPEnvForPerl.ksh.
Change the following line to reflect the appropriate directory name:
```
INSTALL_DIR=/ops/bin
```
:::

## OpCon Property

It will greatly simplify job definition if a property is defined that points to the script used to initialize the perl environment. 

:::tip Example

During installation a Globab Property with the following Name and Value is created.

**Name:** SMAXPSetup

**Value:** /ops/bin/CreateXPEnvForPerl.ksh
:::