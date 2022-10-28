---
sidebar_label: 'Auto Reply File'
---

# AutoReplyFile Format

## Overview

This configuration file specifies the responses to be made for various consule messges.

## Parameters

### General

#### CharactersToEscape

* When building the expressions for testing, some of the characters must be 'escaped'. For example, if there are asterisks in the console message to search for, it must be preceeded by a backslash. This is because the asterisks will not match a literal asterisk since an asterisk has a special meaning. Instead of requiring the user to specified each and every escape sequence, this parameter is a convenience function that will always escape the specified character(s). If there is more than one character, separate them with a pair of vertical pipe symbols ```||```.

#### SecondsBetweekChecks

* This specifies how often (in seconds) to check the console for outstanding messages.

### Console Messages

#### XP2 Job Name

* There are two values that are assigned to each key. The values are separated by a pair of vertical pipe symbols (||).
* **To the left of the vertical pipe symbol:**
The first value is a search criterion that may match a line on the console log. If there is a match, the first field that is enclosed by parenthesis is considered to be $1. The second field that is enclosed by parenthesis is considered to be $2 (if present).
* **To the right of the vertical pipe symbol:**
This is the string that is desired to be the response that will be sent to the console. It can be built from literal values as well as from [[$1]] and [[$2]].

## AutoReplyFile 

```
#------------------------------------------------------------------
#  This configuration file specifies the reponses to be made for
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

A simpler version of this line would be:
```
ccstmt1=ccstmt1: (\S+),  AND REPLY `GO`, OR REPLY NO TO TERMINATE||[[1]],GO
```
:::

