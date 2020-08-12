---
layout: post
title:  "Duplicate a WSL distro"
date:   2020-08-12 12:00:00 -0500
categories: duplicate,distro, export, import
author: Craig Loewen
author-twitter: craigaloewen
author-github: craigloewen-msft
author-website: http://www.craigloewen.com
---

You can duplicate a WSL distro by running `wsl --export <filename>` in PowerShell to export your distro a tar file, and then you can run `wsl --import <DistroName> <InstallLocation> <FileName>` to import it back to any location on your machine, under any new name that you like. To run this distro again, you can run `wsl -d <DistroName>` or you can set it as your default with `wsl -s <DistroName>`.

You will need to be on Windows 10 version 1903 or higher to access this feature. Check out [this blog post](https://devblogs.microsoft.com/commandline/whats-new-for-wsl-in-windows-10-version-1903/) for more info. 