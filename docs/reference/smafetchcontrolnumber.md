---
sidebar_label: 'SMA Fetch Control Number INI'
title: 'SMAFetchControlNumber INI'
description: 'Configuration reference for SMAFetchControlNumber.ini, which defines the key patterns used to retrieve batch control numbers from the XP2 console log.'
tags:
  - Reference
  - System Administrator
  - System Configuration
---

# SMAFetchControlNumber INI

## What is it?

`SMAFetchControlNumber.ini` contains the parameters and key definitions used by `SMAFetchControlNumber.pl` and `SMACheckConsoleLog.pl` to search the XP2 console log for batch control numbers and other values.

- Configure this file to define the search keys for each XP2 application whose control numbers you need to capture
- Each key maps to a two-part search pattern: a general search expression and a capture expression for extracting the specific value

## Parameters

### CharactersToEscape

When building match expressions, some characters must be escaped because they have special meaning in regular expressions. For example, `*` does not match a literal asterisk.

:::tip Example
If `*** == BCTL FILE NUMBER =` is specified in the selection criteria, the asterisks must be escaped: `/*/*/* == BCTL FILE NUMBER =`. Instead of requiring you to escape each character individually in every entry, this parameter automatically escapes the specified characters in all match expressions. Separate multiple characters with `||`.
:::

### Keys

Each key in the `[Keys]` section must match the `-k` option value passed to `SMAFetchControlNumber.pl` or `SMACheckConsoleLog.pl` on the command line.

Two values are assigned to each key, separated by `||`:

- **Left of `||`:** A general search expression that matches one or more lines on the console log
- **Right of `||`:** A regular expression mask applied to the lines returned by the general search to capture the specific value

## Configuration options

| Setting | What It Does | Default | Notes |
|---|---|---|---|
| `CharactersToEscape` | Characters automatically escaped in all match expressions | None | Separate multiple characters with `||` |
| Keys | Named search patterns for specific XP2 applications | None | Add one key per XP2 application whose control number you need to capture |

## Example configuration

```
# ======================================================================
# These are the parameters necessary to set a property/token to the
# batch control number of an XP Systems job.
# ======================================================================

[General]
#
# Use || between each character to escape in the next statement.
#
CharactersToEscape=*||

[Keys]
apgproof=apgproof: *** == BCTL FILE NUMBER =||apgproof: *** == BCTL FILE NUMBER =>(\d+)
apgdiv=apgdiv: *** == BCTL FILE NUMBER =||apgdiv: *** == BCTL FILE NUMBER =>(\d+) ASSIGNED ==
crmat=crtmat: *** BCTL file number =||crtmat: *** BCTL file number =>(\d+) assigned
sdproof=sdproof: *** SDPROOF, SD PROOF BCTL||sdproof: *** SDPROOF, SD PROOF BCTL (\d+)
certegy=CERTEGY CTF||*** BCTL(\d+) assigned for group \d+ - CERTEGY CTF
crdissue=crdissue: *** == BCTL||crdissue: *** == BCTL FILE NUMBER =>(\d+) ASSIGNED ==
lpxfer=lpxfer: *** BCTL file number =||lpxfer: *** BCTL file number =>(\d+) assigned
locxfer=locxfer: *** BCTL file number =||locxfer: *** BCTL file number =>(\d+) assigned
eftrelp=eftrelp: *** == BCTL FILE NUMBER =||eftrelp: *** == BCTL FILE NUMBER =>(\d+) ASSIGNED ==
inscuna=inscuna: *** == BCTL FILE NUMBER =||inscuna: *** == BCTL FILE NUMBER =>(\d+) ASSIGNED ==
```

## Glossary

**BCTL** — Batch Control number. A number assigned by the XP2 system to a batch run. Used by downstream processes to reference the specific batch output.

**`CharactersToEscape`** — A convenience setting that automatically escapes specified characters in all key expressions so they are treated as literals rather than regular expression operators.

**Key** — A named entry in the `[Keys]` section that maps to two search expressions. The key name must match the `-k` argument passed on the command line.

## Related topics

- [SMAFetchControlNumber](../operation/smafetchcontrolnumber.md)
- [SMACheckConsoleLog](../operation/smacheckconsolelog.md)
- [SMACaptureDatestamp](../operation/smacapturedatestamp.md)
