---
layout: post
title:  "Run commands across WSL distros"
date:   2020-08-12 12:00:00 -0500
categories: copy,paste,cut
author: Craig Loewen
author-twitter: craigaloewen
author-github: craigloewen-msft
author-website: http://www.craigloewen.com
---

You can pipe outputs from various distros and Windows as well to run commmands across WSL distros. For example, this command will take output from PowerShell, filter it in Debian, and then output it using cowsay in Ubuntu.

```PowerShell
Write-Output "Hello from Windows`nHello from Linux!" | wsl -d Debian grep -i linux | wsl -d Ubuntu cowsay
```
