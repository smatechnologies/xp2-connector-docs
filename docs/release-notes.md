---
sidebar_label: 'Release Notes'
title: 'XP2 Connector Release Notes'
description: 'Version history and change details for the XP2 Connector, including new features, improvements, and bug fixes.'
tags:
  - Reference
  - Automation Engineer
  - XP2 Connector
---

# XP2 Connector Release Notes

:::note
This page records the releases from 20.00.00 onward. The connector has a longer history: a dated `Changelog` covering earlier versions is included in the distribution and is installed alongside the scripts.
:::

## 20

### 20.03.00

2022 June

:white_check_mark: **CreateXPEnvForPerl.ksh**: Fixed the script so it can set an OpCon property with `SMACaptureDatestamp`.

### 20.02.00

2020 November

:white_check_mark: **run_xp_job.pl**: Fixed the parsing of the lock file.

### 20.01.00

2020 February

:eight_spoked_asterisk: **run_xp_job.pl**: Reworked logging to create individual log files named with the application, start timestamp and process ID. Added a log entry showing the contents of the lock file, and a version number for the script itself so its replacement can be verified after an upgrade.

:eight_spoked_asterisk: **maintain_logfiles**: Added this script to simplify log file management. Configure the number of days to keep and schedule it daily to stop the log directory growing.

### 20.00.00

2020 February

:white_check_mark: **run_xp_job.pl**: Replaced an incorrect function call and corrected use of the PID directory before it had been initialized, to address locking issues.

:white_check_mark: **run_xp_job.ini**: Changed the default directory values to use `/ops/bin` rather than a relative path.
