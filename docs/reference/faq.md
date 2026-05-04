---
sidebar_label: 'FAQ and Reference'
title: 'FAQ and Reference'
description: 'Frequently asked questions and a procedure for building autoreply.ini entries by capturing XP2 console messages directly from the console.'
tags:
  - Reference
  - Automation Engineer
  - System Configuration
---

# FAQ and reference

## What is it?

This page provides answers to common questions about the XP2 Connector and a step-by-step procedure for building `autoreply.ini` entries by reading console prompts directly from the XP2 console.

- Use the FAQ section for quick answers to common configuration questions
- Use the procedure in the Reference section to build autoreply entries when you do not know the exact console message text a job displays

## FAQs

**Q: What if the XP2 job displays multiple messages at different times? Can you specify multiple responses for the same XP2 job name?**

A: Yes. Multiple responses for the same job name are permitted in the `autoreply.ini` file.

**Q: Where should I install the XP2 Connector scripts?**

A: Install the scripts in `/ops/bin`. If you install to a different directory, edit `CreateXPEnvForPerl.ksh` and change `INSTALL_DIR` to reflect the correct path.

**Q: How do I know what console message an XP2 job displays?**

A: Use the procedure in the Reference section below to capture the exact console message at runtime, then use it to build the correct entry in `autoreply.ini`.

## Reference

Capturing the exact console message an XP2 job displays can be difficult. The following procedure builds entries for the `autoreply.ini` file by observing the console directly.

To build an autoreply entry, complete the following steps:

1. Log onto a terminal session on the UNIX machine (this may need to be as root).
2. Run the script to establish the environment:
```
. /xp/xpss/bin/xpenv
```
3. Have OpCon start the job (with no entry in the `autoreply.ini` file for it).
4. In the terminal session, enter:
```
cons xp
```
:::note
Replace `xp` with the xpbase if it is different.
:::
5. At the `cons` prompt, enter:
```
a, disp rply
```
6. Repeat this step until the prompt from the XP job is shown. At some point, you will see the prompt in the following form.
7. Copy the prompt. Open the `autoreply.ini` file in the `/ops/bin` directory (or the directory where the XP2 Connector is installed).
8. Insert a new line at the bottom. Enter the job name followed by an equals sign. The job name must match the job name specified on the OpCon command line (case-sensitive).

:::tip Example
If the OpCon command line is:
```
[[SMAXPSetup]] run_xp_job.pl p2purge QUE=HRP,RETN=0,RPT=A,DELT=Y,DOCS=A
```
The new line starts as:
```
p2purge=
```
:::

9. Paste the copied console message after the equals sign. The line should now look similar to:
```
p2purge=P2PURGE: 01, AND REPLY `GO`, OR REPLY NO TO TERMINATE
```
10. Change the message number to `(\S+)`. This regular expression matches any message number and captures it for use in the response. The line should now look like:
```
p2purge=P2PURGE: (\S+), AND REPLY `GO`, OR REPLY NO TO TERMINATE
```
11. Add two vertical bars at the end of the line to separate the match pattern from the response:
```
p2purge=P2PURGE: (\S+), AND REPLY `GO`, OR REPLY NO TO TERMINATE||
```
12. Add the response after the `||`. In this case, the response should include the captured message number followed by `, GO`.
13. Use the token `[[1]]` to substitute the first captured value into the response. The completed entry looks like:
```
p2purge=P2PURGE: (\S+), AND REPLY `GO`, OR REPLY NO TO TERMINATE||[[1]],GO
```

## Glossary

**`[[1]]`** — A token in the autoreply response string that is replaced by the first capture group value from the match expression. Use `[[2]]` for the second capture group.

**`(\S+)`** — A regular expression pattern that matches one or more non-whitespace characters and captures the matched value for use in the response via `[[1]]`.

**xpbase** — The base identifier for the XP2 console session, used as an argument to the `cons` command.

## Related topics

- [Auto Reply File Format](./autoreplyfile-format.md)
- [Run XP Job](../operation/run_xp_job.md)
- [Run XP Job INI](./run-xp-job-ini.md)
