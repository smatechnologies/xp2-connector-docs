---
sidebar_label: 'Reference overview'
title: 'Reference Overview'
description: 'Overview of the XP2 Connector reference pages, covering configuration files and frequently asked questions.'
tags:
  - Conceptual
  - System Administrator
  - System Configuration
---

# Reference overview

## What is it?

The Reference section covers the configuration files required by the XP2 Connector scripts and a FAQ page with guidance on building autoreply entries. These files must be configured correctly before running XP2 jobs through OpCon.

- Use this section to look up configuration parameters, required fields, and example file contents
- Refer to the FAQ page when building `autoreply.ini` entries for jobs that display console prompts

## Pages in this section

| Page | Description |
|---|---|
| [Run XP Job INI](./run-xp-job-ini.md) | Configuration reference for `run_xp_job.ini`, which controls timeout values, file locations, and the autoreply file path. |
| [SMAFetchControlNumber INI](./smafetchcontrolnumber.md) | Configuration reference for `SMAFetchControlNumber.ini`, which defines the key patterns used to retrieve batch control numbers from the XP2 console log. |
| [Auto Reply File Format](./autoreplyfile-format.md) | Configuration reference for `autoreply.ini`, which maps XP2 console messages to automated responses. |
| [MSGIN File](./msgin-file.md) | Configuration reference for `MSGIN.ini`, which provides the connection parameters used to submit OpCon events. |
| [FAQ](./faq.md) | Frequently asked questions and a procedure for building `autoreply.ini` entries by capturing console messages directly. |

## Related topics

- [Overview](../overview.md)
- [Installation](../installation.md)
- [Operation overview](../operation/overview.md)
