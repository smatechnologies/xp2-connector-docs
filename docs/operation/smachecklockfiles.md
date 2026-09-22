---
sidebar_label: 'SMA Check Lock Files'
title: 'SMACheckLockFiles'
description: 'Use SMACheckLockFiles.pl to find XP2 Connector lock files left behind by processes that are no longer running.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# SMACheckLockFiles

## What is it?

`SMACheckLockFiles.pl` reports on the lock files that `run_xp_job.pl` creates. For each lock file it reads the process ID recorded inside and checks whether a process with that ID is still running, so you can tell which locks are held by live jobs and which were left behind.

- Use this script when an XP2 job appears to hang waiting for a lock
- Use it after an unexpected agent or server restart, to see whether any locks were orphaned

:::note
The script only reports. It does not delete lock files and it does not stop processes.
:::

## Command line

Run this script from an OpCon job, or directly from a terminal session, using the following command line:

```
[[SMAXPSetup]] SMACheckLockFiles.pl -d <Lock File Directory>
```

## Command line switches

| Switch | Required | Description |
|---|---|---|
| `-d` | Yes | The directory that holds the lock files. This is the `LockFileDirectory` value from the [Run XP Job INI](../reference/run-xp-job-ini) file, normally `/ops/bin/locks`. |

:::tip Example
The following command checks the lock files in the default location:
```
[[SMAXPSetup]] SMACheckLockFiles.pl -d /ops/bin/locks
```
:::

## Reading the output

The script prints a block for each lock file it finds. Three outcomes are possible:

| Output | What it means |
|---|---|
| `Process With This Pid : [...]` | A process with the recorded ID is running, so the lock is in use. |
| `**** This doesn't look like the right pid for this process!` | A process with that ID is running but does not appear to be the expected one. The ID may have been reused after the original job ended. |
| `**** There were no processes running with this pid!` | No process with that ID exists. The lock file was left behind and the job that held it is gone. |

The script exits with a return code of `0` in every case, including when it finds orphaned lock files. Read the output rather than the return code.

## Related topics

- [Run XP Job](./run_xp_job.md)
- [Run XP Job INI](../reference/run-xp-job-ini.md)
