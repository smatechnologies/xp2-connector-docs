---
sidebar_label: 'Upgrade'
title: 'XP2 Connector Upgrade'
description: 'Upgrade the XP2 Connector scripts on an AIX platform while preserving existing configuration files.'
tags:
  - Procedural
  - System Administrator
  - Upgrade
---

# Upgrade

## What is it?

The upgrade procedure replaces the XP2 Connector scripts with a newer version while preserving all configuration files. You must back up configuration files before extracting the new distribution to avoid overwriting customized settings.

- Perform this upgrade when a new version of the XP2 Connector distribution is released
- Use this procedure to replace scripts only — configuration files are backed up and restored separately

## Upgrade steps

To upgrade the XP2 Connector, complete the following steps:

1. FTP the distribution file to `/ops/bin` in **binary**.
2. Log in to the machine as root.
3. Change to the `/ops/bin` directory by entering:
```
cd /ops/bin
```
4. Copy all configuration (INI) files to the `/tmp` directory. The configuration files consist of:
   - [MSGIN File](reference/msgin-file)
   - [SMAFetchControlNumber INI](reference/smafetchcontrolnumber)
   - [Auto Reply File](reference/autoreplyfile-format)
   - [Run XP Job INI](reference/run-xp-job-ini)

```
cp MSGIN.ini /tmp
cp SMAFetchControlNumber.ini /tmp
cp autoreply.ini /tmp
cp run_xp_job.ini /tmp
```
5. Untar the distribution file in the `/ops/bin` directory:
```
tar -xvf XP2Applications-20.00.00.tar
```
6. Move the configuration files back into `/ops/bin` to restore the configuration:
```
mv /tmp/MSGIN.ini /ops/bin
mv /tmp/SMAFetchControlNumber.ini /ops/bin
mv /tmp/autoreply.ini /ops/bin
mv /tmp/run_xp_job.ini /ops/bin
```

## Related topics

- [Installation](./installation.md)
- [Run XP Job INI](./reference/run-xp-job-ini.md)
- [MSGIN File](./reference/msgin-file.md)
