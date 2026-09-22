---
sidebar_label: 'Run XP Job'
title: 'Run XP Job'
description: 'Use the run_xp_job.pl script to start and monitor XP2 jobs from OpCon on an AIX platform.'
tags:
  - Reference
  - Automation Engineer
  - Jobs
---

# Run XP Job

## What is it?

`run_xp_job.pl` is the core script of the XP2 Connector. It grants OpCon the ability to start and monitor XP2 jobs running on an AIX platform.

- Use this script for every XP2 job you want OpCon to schedule and track
- Use the `AutoReplyFile` option when XP2 jobs prompt the console for input during execution

:::note
The configuration file for this script must be set up prior to running your first XP2 job. Refer to the [Run XP Job INI](../reference/run-xp-job-ini) file in the Reference section.
:::

## Command line

To run XP2 jobs, create an OpCon job with a command line in the following format:

```
[[SMAXPSetup]] run_xp_job.pl <XP2 Job Name> <Arguments>
```

:::tip Example
To run the XP2 job called CONLIST:

```
[[SMAXPSetup]] run_xp_job.pl conlist
```
:::

## Return codes

The return code of the OpCon job is the return code of `run_xp_job.pl`.

| Code | Meaning |
|---|---|
| `0` | The XP2 job completed successfully. |
| `1` | The XP2 job did not complete successfully, **or** the connector could not submit or cancel it. Check the log to tell these apart. |
| `19` | Required arguments were missing from the command line. |
| `20` | The connector gave up waiting for an XP2 job slot. Governed by `DefaultWaitForSlotTimeout` in [Run XP Job INI](../reference/run-xp-job-ini). |
| `21` | The connector gave up waiting for the job to start. Governed by `DefaultWaitForStartTimeout` in [Run XP Job INI](../reference/run-xp-job-ini). |

:::note Code `1` covers two different situations
A `1` means either the XP2 job ran and failed, or the connector never got it submitted. The log records which — look for `Error on submit` or `Error on cancel` to identify the second case.
:::

## Tips and tricks

- If `<arguments>` contain double quotes, they must be escaped.

:::tip Example
The following argument contains double quotes:
```
spec=TRLMAIL,rnge-10-15-11*10-11-11,prm1=10-05-11,prm2=10-11-11,prm3=11,delm=",",file=lnmerge
```
The same argument line with the double quotes escaped:
```
spec=TRLMAIL,rnge-10-15-11*10-11-11,prm1=10-05-11,prm2=10-11-11,prm3=11,delm=\",\",file=lnmerge
```
:::

- The **AutoReplyFile** setting in the configuration file can be overridden on the command line.

:::tip Example
A command line where the AutoReplyFile is overridden:
```
[[SMAXPSetup]] run_xp_job.pl <XP2 Job Name> -AutoReplyFile=/ops/bin/AltAutoReplyFile.ini
```
:::

## FAQs

**Q: What if the XP2 job displays multiple console messages at different times?**

A: Multiple responses for the same job name are permitted in the `autoreply.ini` file. See the [Auto Reply File Format](../reference/autoreplyfile-format.md) for details.

**Q: What if an argument contains double quotes?**

A: Escape each double quote with a backslash (`\"`). See the example in the Tips and tricks section above.

**Q: Can I use a different autoreply file for a specific job?**

A: Yes. Override the `AutoReplyFile` setting by passing `-AutoReplyFile=<path>` on the command line for that job.

## Glossary

**AutoReplyFile** — A configuration file that maps XP2 console prompts to automated responses. When an XP2 job displays a prompt on the console, the connector looks up the job name in this file and sends the configured reply automatically.

**SMAXPSetup** — An OpCon global property that stores the path to `CreateXPEnvForPerl.ksh`. Using this property in job command lines ensures the correct Perl environment is initialized before each script runs.

## Related topics

- [Run XP Job INI](../reference/run-xp-job-ini.md)
- [Auto Reply File Format](../reference/autoreplyfile-format.md)
- [FAQ](../reference/faq.md)
