---
sidebar_label: 'Run XP Job INI'
---

# Run XP Job INI

## Overview

This configuration file specifies the general configuration in order to run XP2 jobs via OpCon.

## Parameters

### General

#### DefaultWaitForSlotTimeout

* This is the number of seconds to wait for the lock file to become available. Only one instance of an application can be started at one time. (For example, two instances of CONLIST could not be executed concurrently. If the lock file does not become available, the run_xp_job script will exit with a failure code.

#### DefaultWaitForStartTimeout

* This is the number of seconds to wait for the job to be started (after it has been submitted). If the job doesn’t have a start message (displayed upon the console) in this time frame, the run_xp_job script will exit with a failure code.

#### DefaultWaitAfterJobTimeout

* This is a “wait” time (in seconds) after the XP2 job finishes. This small delay gives the XP2 system time to finish writing buffered output to files and then to close them.

### File Locations

#### LockFileDirectory

* The LockFileDirectory indicates where lock files should be created. Only one instance of an application can be started at one time. (For example, two instances of CONLIST could not be executed concurrently.

#### sma_status

* This parameter should be the path to the sma_status application. It will be used to update the status area of the user interface.

#### AutoReplyFile

* This is an optional argument that specifies an autoreply file (if autoreplies are desired). See the following section to see what the autoreply file should look like.

## run_xp_job.ini Example

```
#------------------------------------------------------------------
# This section of the configuration file specifies the general
# configuration paramters. 
#------------------------------------------------------------------

[General]
DefaultWaitForSlotTimeout=600
DefaultWaitForStartTimeout=36000
DefaultWaitAfterJobTimeout=5

[File Locations]
LockFileDirectory=/ops/bin/
sma_status=/usr/local/lsam/bin/sma_status
AutoReplyFile=/ops/bin/autoreply.ini
```
