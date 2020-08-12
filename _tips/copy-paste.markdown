---
layout: post
title:  "Access copy and paste in WSL"
date:   2020-08-11 12:00:00 -0500
categories: copy,paste,cut
author: Craig Loewen
author-twitter: craigaloewen
author-github: craigloewen-msft
author-website: http://www.craigloewen.com
---

You can get and set copy and paste output straight from WSL!

#### Set the clipboard from WSL output

You can use `clip.exe` to set Windows' clipboard from WSL. For example, this line sets the last few lines of your .bashrc file to be your clipboard.

```bash
tail ~/.bashrc | clip.exe
```

#### Get the clipboard values in WSL

You can use the PowerShell command `Get-Clipboard` to get clipboard values from within WSL.

```bash
powershell.exe /c Get-Clipboard
```