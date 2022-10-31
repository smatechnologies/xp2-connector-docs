---
sidebar_label: 'FAQ and Reference'
---

# FAQ and Reference

## FAQ

Q: What if the XP job displays multiple messages at different times? Can you specify multiple responses for the same XP job name?

A: Yes. Multiple responses for the same job name are permitted.

## Reference

Editor’s note: Since it can be somewhat challenging to capture the console message correctly, here is a procedure that will build entries for the autoreply.ini file.

1. Log onto a terminal session on the UNIX machine (this may need to be as root).
2. Execute the script to establish the environment.
```
. /xp/xpss/bin/xpenv
```
3. Have OpCon/xps start the job (with no entry in the autoreply.ini file for it).
4. In the terminal session, enter:
```
cons xp
```
:::note
Replace xp with the xpbase if it is different.
:::
5. At the cons prompt, enter:
```
a, disp rply
```
6. Repeat this step until the prompt from the XP job is shown. At some point, you will see the prompt, it will be in the form of:
7. Copy this prompt. Open the autoreply.ini file in the /ops/bin directory (or wherever the XP2 interface was installed.)
8. Insert a new line at the bottom. Enter the job name followed by an equals sign. The job name must
match the job name that was specified on the OpCon/xps command line. (Case is important.) 

:::tip Example

If the OpCon/xps command line looks like:
```
[[SMAXPSetup]] run_xp_job.pl p2purge QUE=HRP,RETN=0,RPT=A,DELT=Y,DOCS=A
```
The new line would look like:
```
p2purge=
```
:::

9. Paste the copy buffer at the end of this line. Now, this line should look something like:
```
p2purge=P2PURGE: 01, AND REPLY `GO`, OR REPLY NO TO TERMINATE
```
10. Change the message number to (\S+). This regular expression will match any message number AND will capture that message number for later use. Now, our new line should look like:
```
p2purge=P2PURGE: (\S+), AND REPLY `GO`, OR REPLY NO TO TERMINATE
```
11. Add two vertical bars at the end of the line. (This is to separate what we are looking for from the response that we want to use. Now, our new line should look like:
```
p2purge=P2PURGE: (\S+), AND REPLY `GO`, OR REPLY NO TO TERMINATE||
```
12. The last thing that we must specify is the response. In this case, we want to response with:
```<message number>, GO```

13. Earlier, we captured the message number to use. We will use the token [[1]] to dictate that the first
captured value be substituted for [[1]].
14. Our final specification looks like:
```
p2purge=P2PURGE: (\S+), AND REPLY `GO`, OR REPLY NO TO TERMINATE||[[1]],GO
```