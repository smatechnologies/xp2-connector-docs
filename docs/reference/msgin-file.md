---
sidebar_label: 'MSGIN File'
---

# MSGIN File

## Overview

This file houses the parameters needed for the XP2 Connector to create events.

## Parameters

| Argument | Description |
| ----- | ----- |
| MSGIN Directory | this is the path the the MSGIN directory. This will be used for the file that will contain the event that is created.
| OpConUser | This is the OpCon user name to use on the event. |
| UserPassword | This is the External Event Password of the OpConUser. |

## MSGIN Example

```
# ======================================================================
# These are the parameters necessary for event creation.
# ======================================================================

[MSGIN Parameters]
MSGINDirectory=/usr/local/lsam/MSGIN/3100
OpConUser=ocadm
UserPassword=********************
```
