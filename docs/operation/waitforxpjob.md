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

`wait_for_xp_job.pl` waits for an XP2 child job to complete before allowing the OpCon workflow to continue.

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

## Return codes

| Code | Meaning |
|---|---|
| `0` | A completion record was found for the child job and it did not report UNSUCCESSFUL. |
| `1` | The child job reported UNSUCCESSFUL, or the script could not read the submitted record it needs to start watching. |

A return code of `1` covers three situations, each of which prints its own message before the script ends:

| Message | What it means |
|---|---|
| `<job name> submitted record not found` | No submitted record for that job name was in the console log. Check that the name matches the log exactly. |
| `<job name> submitted record has strange format` | The submitted record was found, but its timestamp did not match the expected format, so the script could not establish when to start watching. |
| The completion record, followed by `Exit Value : 1` | The child job ran and reported UNSUCCESSFUL. |

:::caution Let a non-zero return fail the job
A return code of `1` means the child job did not succeed, or was never tracked. Leave the OpCon job's failure criteria at the default so the job fails, rather than configuring it to ignore the exit code — otherwise a failed XP2 child job is reported as a successful OpCon job and the workflow continues.
:::

:::caution The script waits indefinitely
This script has no wait timeout. Once it finds the submitted record, it waits for a completion record for as long as the job runs, and it does not give up on its own. Set late or overrun notification on the OpCon job so an XP2 child job that never completes is surfaced, rather than leaving the OpCon job running.
:::

## Related topics

- [Run XP Job](./run_xp_job.md)
