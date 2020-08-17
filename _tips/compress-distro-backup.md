---
layout: post
title:  "Compress distribution backups"
date:   2020-08-17 12:00:00 -0500
categories: maintenance
author: Carlos Ramirez Castillo
author-twitter: crramirezc
author-github: crramirez
author-website: https://www.crramirez.com
---
The wsl.exe --export command Exports the specified distribution to a tar file. But it doesn't compress it due to it will take more time. If you are short of space or want to upload it to the cloud, it is better if it is compressed.

Suppose that you make this export in cmd:

```
wsl.exe --export WLinux %USERPROFILE%\mybackup.tar
```
After that you can compress the backup in cmd with:
```
wsl.exe gzip %USERPROFILE%\mybackup.tar
```
The above command results in a mybackup.tar.gz file. The funny thing is that you can use this file directly in the import command without decompressing it first:
```
mkdir C:\MyDistros\MyPengwin
wsl.exe --import MyPengwin C:\MyDistros\MyPengwin %USERPROFILE%\mybackup.tar.gz
```
Hope it helps

-Carlos
