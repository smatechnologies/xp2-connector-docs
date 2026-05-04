---
sidebar_label: 'Installation'
title: 'XP2 Connector Installation'
description: 'Install the XP2 Connector scripts on an AIX platform to enable OpCon to schedule and monitor XP2 jobs.'
tags:
  - Procedural
  - System Administrator
  - Installation
---

# Installation

## What is it?

The XP2 Connector is a set of Perl scripts installed on the AIX platform where XP2 runs. Installing these scripts enables OpCon to submit, start, and monitor XP2 jobs.

- Install the connector when setting up OpCon integration with FiServ XP2 for the first time
- Reinstall from this procedure after a full system rebuild or migration to a new AIX host

It is recommended that the XP2 interface tools be installed in `/ops/bin`. The distribution file is named `XPApplications.tar`.

## Installation steps

To install the XP2 Connector, complete the following steps:

1. FTP the tar file to the AIX platform in **binary**. Place the tar file in the `/tmp` directory.
2. Create the installation directory by entering:
```
mkdir /ops
mkdir /ops/bin
```
3. Change to the installation directory by entering:
```
cd /ops/bin
```
4. Untar the distribution file:
```
tar xvf /tmp/XPApplications.tar
```
5. Under the installation directory, create a `locks` directory:
```
mkdir /ops/bin/locks
```
6. Verify the values in the following configuration files:
   - [Run XP Job INI](reference/run-xp-job-ini)
   - [SMAFetchControlNumber INI](reference/smafetchcontrolnumber)
   - [MSGIN File](reference/msgin-file)

:::info
If the installation is done in a non-standard directory, edit the file named `CreateXPEnvForPerl.ksh` and change the following line to reflect the correct directory name:
```
INSTALL_DIR=/ops/bin
```
:::

## OpCon property

Defining a global property that points to the environment initialization script simplifies job definitions across all XP2 jobs.

:::tip Example

During installation, create a global property with the following name and value:

**Name:** `SMAXPSetup`

**Value:** `/ops/bin/CreateXPEnvForPerl.ksh`
:::

## Related topics

- [Upgrade](./upgrade.md)
- [Run XP Job INI](./reference/run-xp-job-ini.md)
- [MSGIN File](./reference/msgin-file.md)
