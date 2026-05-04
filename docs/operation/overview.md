---
sidebar_label: 'Operation overview'
title: 'Operation Overview'
description: 'Overview of the XP2 Connector operation scripts, which submit, monitor, and manage XP2 jobs through OpCon.'
tags:
  - Conceptual
  - Automation Engineer
  - Jobs
---

# Operation overview

## What is it?

The Operation section covers the scripts that OpCon uses to start, monitor, and interact with XP2 jobs. Each script is run as an OpCon job on the AIX platform where XP2 is installed. Most scripts require the `[[SMAXPSetup]]` property on the command line to initialize the correct Perl environment before running.

- Use these scripts to build automated workflows that submit and track XP2 jobs through OpCon
- Combine scripts — for example, run `SMACaptureDatestamp` before a job, then use `SMAFetchControlNumber` after it completes — to capture output values for downstream processing

## Scripts in this section

| Script | Description |
|---|---|
| [Run XP Job](./run_xp_job.md) | Starts and monitors an XP2 job. The core script for all XP2 job automation. |
| [ExecuteCons](./executecons.md) | Submits a console command to the XP2 console and prints the output to the STDOUT log. |
| [Maintain Logfiles](./maintain_logfiles.md) | Deletes XP2 Connector log files older than a configured number of days. |
| [SMACaptureDatestamp](./smacapturedatestamp.md) | Captures the current date and time as an OpCon property to use as a boundary for control number lookups. |
| [SMACheckConsoleLog](./smacheckconsolelog.md) | Triggers an OpCon event when a specified key is found in the XP2 console log. |
| [SMAFetchControlNumber](./smafetchcontrolnumber.md) | Retrieves a batch control number from the XP2 console log and stores it in an OpCon property. |
| [SMAFetchDocNumber](./smafetchdocnumber.md) | Retrieves the document number of an XP2 job output file and stores it in an OpCon property. |
| [SMAFetchQueuedDocNumber](./smafetchqueueddocnumber.md) | Retrieves the document number of a queue entry matching specified parameters and stores it in an OpCon property. |
| [SMAListRptNumbers](./smasavedsxlistrptnumbers.md) | Finds the first and last report numbers in the DSX List and stores them in OpCon properties. |
| [WaitForXPJob](./waitforxpjob.md) | Pauses an OpCon workflow until a specified XP2 child job completes. |

## Related topics

- [Overview](../overview.md)
- [Run XP Job INI](../reference/run-xp-job-ini.md)
- [Auto Reply File Format](../reference/autoreplyfile-format.md)
- [MSGIN File](../reference/msgin-file.md)
