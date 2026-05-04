---
sidebar_label: 'MSGIN File'
title: 'MSGIN File'
description: 'Configuration reference for MSGIN.ini, which provides the connection parameters the XP2 Connector uses to submit OpCon events.'
tags:
  - Reference
  - System Administrator
  - System Configuration
---

# MSGIN File

## What is it?

`MSGIN.ini` provides the parameters the XP2 Connector uses to create OpCon events. Scripts that trigger events — such as `SMAFetchControlNumber.pl`, `SMACheckConsoleLog.pl`, and `SMACaptureDatestamp.pl` — read this file to determine where to place event files and which credentials to use.

- Configure this file before using any script that triggers OpCon events
- Update the `MSGINDirectory` path if the OpCon agent is installed in a non-default location

## Parameters

| Argument | Description |
| ----- | ----- |
| `MSGINDirectory` | The path to the MSGIN directory. Event files created by the connector are placed here for the OpCon agent to process. |
| `OpConUser` | The OpCon user name to associate with the event. |
| `UserPassword` | The external event password for the specified OpCon user. |

## Configuration options

| Setting | What It Does | Default | Notes |
|---|---|---|---|
| `MSGINDirectory` | Path to the MSGIN directory | `/usr/local/lsam/MSGIN/3100` | Must match the MSGIN path configured in the OpCon agent |
| `OpConUser` | OpCon user name for submitted events | None | The user must have permission to submit the events used in your workflows |
| `UserPassword` | External event password | None | Use the external event password, not the OpCon login password |

## Example configuration

```
# ======================================================================
# These are the parameters necessary for event creation.
# ======================================================================

[MSGIN Parameters]
MSGINDirectory=/usr/local/lsam/MSGIN/3100
OpConUser=ocadm
UserPassword=********************
```

## Glossary

**MSGIN directory** — A directory monitored by the OpCon agent. Files placed here by the connector are read by the agent and processed as OpCon events.

**External event password** — A separate credential from the OpCon login password, used specifically for submitting events through MSGIN or the API. Configured in OpCon user settings.

## Related topics

- [SMAFetchControlNumber](../operation/smafetchcontrolnumber.md)
- [SMACheckConsoleLog](../operation/smacheckconsolelog.md)
- [SMACaptureDatestamp](../operation/smacapturedatestamp.md)
