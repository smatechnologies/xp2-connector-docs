---
sidebar_label: 'Run XP Job INI'
title: 'Run XP Job INI'
description: 'Configuration reference for run_xp_job.ini, which controls timeout values, file locations, and the autoreply file path for the XP2 Connector.'
tags:
  - Reference
  - System Administrator
  - System Configuration
---

# Run XP Job INI

## What is it?

`run_xp_job.ini` is the configuration file for the `run_xp_job.pl` script. It specifies timeout values, file path locations, and the optional autoreply file used for automated console responses.

- Configure this file during initial installation before running any XP2 jobs through OpCon
- Update `AutoReplyFile` to point to a custom autoreply file when multiple XP2 job types require different response configurations

## Parameters

### General

#### DefaultWaitForSlotTimeout

The number of seconds to wait for the lock file to become available. Only one instance of an application can run at one time — for example, two instances of `CONLIST` cannot run concurrently. If the lock file does not become available within this timeout, `run_xp_job.pl` exits with a failure code.

#### DefaultWaitForStartTimeout

The number of seconds to wait for the job to start after it has been submitted. If the job does not display a start message on the console within this time frame, `run_xp_job.pl` exits with a failure code.

#### DefaultWaitAfterJobTimeout

A wait time in seconds after the XP2 job finishes. This delay allows the XP2 system time to finish writing buffered output to files and close them before the next step runs.

### File locations

#### LockFileDirectory

The path where lock files are created. Only one instance of an application can run at one time.

#### sma_status

The path to the `sma_status` application. This application is used to update the status area of the OpCon user interface.

#### AutoReplyFile

An optional path to an autoreply file. When specified, the connector looks up console prompts in this file and sends the configured responses automatically. See [Auto Reply File Format](./autoreplyfile-format.md) for the file structure.

## Configuration options

| Setting | What It Does | Default | Notes |
|---|---|---|---|
| `DefaultWaitForSlotTimeout` | Seconds to wait for the lock file | 600 | Increase for systems with long-running concurrent jobs |
| `DefaultWaitForStartTimeout` | Seconds to wait for a job start message | 36000 | Increase for jobs with long startup times |
| `DefaultWaitAfterJobTimeout` | Seconds to wait after job completion | 5 | Increase if output files are not fully written before the next step reads them |
| `LockFileDirectory` | Path where lock files are created | `/ops/bin/` | Must be writable by the process running the connector |
| `sma_status` | Path to the sma_status application | `/usr/local/lsam/bin/sma_status` | Must match the actual installation path of the agent |
| `AutoReplyFile` | Path to the autoreply INI file | `/ops/bin/autoreply.ini` | Optional — omit if no automated console responses are needed |

## Example configuration

```
#------------------------------------------------------------------
# This section of the configuration file specifies the general
# configuration parameters.
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

## Glossary

**Lock file** — A file created in `LockFileDirectory` to prevent more than one instance of the same XP2 application from running simultaneously.

**sma_status** — An executable provided with the OpCon agent that the connector uses to update the job status displayed in Solution Manager.

**AutoReplyFile** — A configuration file that maps XP2 console prompts to automated responses. See [Auto Reply File Format](./autoreplyfile-format.md).

## Related topics

- [Auto Reply File Format](./autoreplyfile-format.md)
- [Run XP Job](../operation/run_xp_job.md)
- [Installation](../installation.md)
