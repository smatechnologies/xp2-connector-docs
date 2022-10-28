---
sidebar_label: 'Wait for XP Job'
---

# Wait for XP Job

## Overview

There are occasions when an XP2 job starts a child job (internally) and the **child job** needs to be waited on before continuing the next processing step. This application will do that. The application will always exit with a 0.

## Command Line

This program is launched via an OpCon job with the following command line.

```
[[SMAXPSetup]] wait_for_xp_job.pl <XP2 Job Name>
```

:::note
The XP2 Job Name should be specified as it appears in the console log.
:::