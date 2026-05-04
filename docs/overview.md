---
sidebar_label: 'Overview'
title: 'XP2 Connector Overview'
description: 'Overview of the SMA OpCon XP2 Connector, which integrates OpCon workload automation with FiServ XP2 software used by credit unions.'
tags:
  - Conceptual
  - Automation Engineer
  - XP2 Connector
---

# XP2 Connector Overview

## What is it?

The XP2 Connector is a set of scripts developed by SMA Technologies that integrates OpCon workload automation with the XP2 software from FiServ. The connector allows credit unions running the XP2 software package to use OpCon to start, monitor, and manage XP2 jobs on AIX platforms.

Some scripts must be started by `CreateXPEnvForPerl.ksh` to establish the correct Perl environment before execution. Each script description indicates whether this requirement applies.

## How it works

The connector operates through a collection of Perl scripts installed on the AIX platform where XP2 runs. OpCon submits jobs to the XP2 system by running these scripts via the OpCon Agent. The scripts communicate with the XP2 console, monitor job status, and return results to OpCon.

A global OpCon property (`SMAXPSetup`) pointing to `CreateXPEnvForPerl.ksh` simplifies job definitions across all XP2 jobs by providing a single reference to the environment initialization script.

## Key components

| Component | Description |
|---|---|
| `run_xp_job.pl` | Core script that starts and monitors XP2 jobs |
| `CreateXPEnvForPerl.ksh` | Shell script that initializes the Perl environment required by most XP2 scripts |
| `run_xp_job.ini` | Configuration file specifying timeouts, file locations, and the autoreply file path |
| `autoreply.ini` | Optional file containing automated responses to XP2 console prompts |
| `SMAFetchControlNumber.pl` | Retrieves control numbers from XP2 job output |
| `MSGIN` | Directory used to pass event messages to OpCon |

## Related topics

- [Installation](./installation.md)
- [Run XP Job](./operation/run_xp_job.md)
- [Run XP Job INI](./reference/run-xp-job-ini.md)
- [Auto Reply File Format](./reference/autoreplyfile-format.md)
