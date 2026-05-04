---
sidebar_label: 'Auto Reply File'
title: 'Auto Reply File Format'
description: 'Configuration reference for autoreply.ini, which maps XP2 console messages to automated responses used by the run_xp_job.pl script.'
tags:
  - Reference
  - Automation Engineer
  - System Configuration
---

# Auto Reply File Format

## What is it?

`autoreply.ini` specifies the automated responses the connector sends when an XP2 job displays a prompt on the console. The connector checks the console at a configurable interval and replies based on the job name and the matched console message.

- Configure this file when XP2 jobs prompt for interactive input during execution
- Use capture groups (`(\S+)`) in patterns to extract parts of the console message and include them in the response

## Parameters

### General

#### CharactersToEscape

When building match expressions, some characters must be escaped. For example, an asterisk (`*`) has a special meaning in regular expressions and does not match a literal asterisk. Instead of requiring you to escape each character individually in every entry, this parameter automatically escapes the specified characters in all match expressions. Separate multiple characters with `||`.

#### SecondsBetweenChecks

Specifies how often (in seconds) the connector checks the console for outstanding messages.

### Console messages

#### XP2 job name

Each entry in the `[Console Messages]` section maps an XP2 job name to a match pattern and a response. The two values are separated by `||`.

- **Left of `||`:** A regular expression that matches a line on the console log. The first value enclosed in parentheses is captured as `$1`; the second is captured as `$2` (if present).
- **Right of `||`:** The string to send as a response. It can include literal values as well as `[[$1]]` and `[[$2]]` tokens, which are replaced by the captured values.

## Configuration options

| Setting | What It Does | Default | Notes |
|---|---|---|---|
| `CharactersToEscape` | Characters automatically escaped in all match expressions | None | Separate multiple characters with `||` |
| `SecondsBetweenChecks` | Interval in seconds between console checks | 15 | Lower values increase responsiveness but add polling overhead |

## Example configuration

```
#------------------------------------------------------------------
#  This configuration file specifies the responses to be made for
#  various console messages.
#------------------------------------------------------------------

[General]
#
# Use || between each character to escape in the next statement.
#
CharactersToEscape=*||
SecondsBetweenChecks=15

[Console Messages]
ccstmt1=ccstmt1: (\S+),  AND REPLY (\S+), OR REPLY NO TO TERMINATE||[[1]],[[2]]
```

:::note
A simpler version of the same entry, using a fixed reply of `GO`:
```
ccstmt1=ccstmt1: (\S+),  AND REPLY `GO`, OR REPLY NO TO TERMINATE||[[1]],GO
```
:::

## Glossary

**`[[$1]]`** — A token in the response string that is replaced by the first capture group value from the match expression.

**`[[$2]]`** — A token in the response string that is replaced by the second capture group value from the match expression.

**`CharactersToEscape`** — A convenience setting that automatically escapes specified characters in all match expressions so they are treated as literals rather than regular expression operators.

**`SecondsBetweenChecks`** — The polling interval controlling how often the connector checks the XP2 console for outstanding messages that require a response.

## FAQs

**Q: What if a job name in the autoreply file does not match the job name passed on the command line?**

A: The match is case-sensitive. The job name in `autoreply.ini` must match the job name specified on the `run_xp_job.pl` command line exactly, including case.

**Q: Can a single job name have multiple entries?**

A: Each job name maps to one pattern-and-response pair. For multiple response scenarios, see the [FAQ](./faq.md) page for a procedure to build entries.

## Related topics

- [Run XP Job INI](./run-xp-job-ini.md)
- [Run XP Job](../operation/run_xp_job.md)
- [FAQ](./faq.md)
