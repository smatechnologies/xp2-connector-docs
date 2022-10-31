---
sidebar_label: 'Upgrade'
---

# Upgrade Steps

1. FTP the distribution file to /ops/bin in **bianry**.
2. Log into the machine as root.
3. Change directories to the /ops/bin directory by entering
```
cd /ops/bin
```
4. Copy all configuration (INI) files to the ```/tmp``` directory. The configuration files consist of 
* [MSGIN File](reference/msgin-file)
* [SMAFetchControlNumber INI](reference/smafetchcontrolnumber)
* [Auto Reply File](reference/autoreplyfile-format)
* [Run XP Job INI](reference/run-xp-job-ini)


```
cp MSGIN.ini /tmp
cp SMAFetchControlNumber.ini /tmp
cp autoreply.ini /tmp
cp run_xp_job.ini /tmp
```
5. Untar the distribution file in the ```/ops/bin``` directory.
```
tar -xvf XP2Applications-20.00.00.tar
```
6. Move the configuration files back into /ops/bin directory to restore the configuration files.
```
mv /tmp/MSGIN.ini /ops/bin
mv /tmp/SMAFetchControlNumber.ini /ops/bin
mv /tmp/autoreply.ini /ops/bin
mv /tmp/run_xp_job.ini /ops/bin
```
