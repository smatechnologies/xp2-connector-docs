---
sidebar_label: 'SMA Fetch Control Number INI'
---

# SMA Fetch Control Number INI

## Overview

This file contains the parameters necessary to set a property to the Batch Control number on an XP2 system.

## Parameters

### CharactersToEscape

* When building the expressions for testing, some of the characters must be “escaped”. 

:::tip Example

If ```*** == BCTL FILE NUMBER =``` is specified in the selection (search) criteria, the asterisks will not match a literal asterisk since they have a special meaning. This means to properly search for the string, it must be specified as ```/*/*/* == BCTL FILE NUMBER =```. Instead of requiring the user to specified each and every escape sequence, this parameter is a convenience function that will always escape the specified character(s). If there is more than one character, separate them with a pair of vertical pipe symbols ```||```.
:::

### Keys

* *Name that must match the –k option on the command line.*

* There are two values that are assigned to each key. The values are separated by a pair of vertical pipe symbols ```||```. The first value is a search criteria that may match one or more lines on the console log. This is the “general” search criteria. From the line(s) returned from the general search, the second value is a regular expression mask to capture a particular value from one of the lines.

## SMAFetchControlNumber Example

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
