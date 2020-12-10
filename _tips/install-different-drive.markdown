---
layout: post
title:  "Install a Distro to a different drive"
date:   2020-08-12 12:00:00 -0500
categories: c drive, different, drive, distro, export, import
author: Craig Loewen
author-twitter: craigaloewen
author-github: craigloewen-msft
author-website: http://www.craigloewen.com
---

First export your WSL distro a tar file using this command in PowerShell: 

`wsl --export <filename>` 

From there, using that file, import it back as a new distribution using this command in PowerShell:

`wsl --import <DistroName> <InstallLocation> <FileName>` 

Make sure to choose an install location that's under a new drive, and a useful distro name. Keep in mind that you won't be able to access this distro using the classic distro launcher app anymore (as that is referencing the old distro stored on your C drive), you will instaed need to run `wsl -d <DistroName>` or you can set it as your default with `wsl -s <DistroName>` and use `wsl` to access this distro in the future.

You will need to be on Windows 10 version 1903 or higher to access this feature. Check out [this blog post](https://devblogs.microsoft.com/commandline/whats-new-for-wsl-in-windows-10-version-1903/) for more info. 
