---
sidebar_label: 'Wait for XP Job'
title: 'WaitForXPJob'
description: 'Use wait_for_xp_job.pl to pause an OpCon workflow until a specified XP2 child job completes.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# WaitForXPJob

## What is it?

`wait_for_xp_job.pl` waits for an XP2 child job to complete before allowing the OpCon workflow to continue. The script always exits with a return code of `0`.

- Use this script when an XP2 job starts a child job internally and downstream processing must not begin until the child job finishes
- Add it as a dependent job in your OpCon schedule to hold subsequent steps until the child job completes

## Command line

Run this script from an OpCon job using the following command line:

```
[[SMAXPSetup]] wait_for_xp_job.pl <XP2 Job Name>
```

:::note
Specify the XP2 job name exactly as it appears in the console log.
:::

## Related topics

- [Run XP Job](./run_xp_job.md)
