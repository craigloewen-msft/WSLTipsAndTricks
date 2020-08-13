---
layout: post
title:  "Piping inside WSL when using Powershell"
date:   2020-08-13 12:00:00 -0500
categories: powershell, oneliner, piping
author: Nuno Captain Corsair
author-twitter: nunixtech
author-github: nunix
author-website: https://wsl.dev
---

When running a `wsl.exe` command in Powershell, it can be needed/useful to pipe the output *inside* the WSL shell instead of Powershell (see [Run commands across WSL distros](https://craigloewen-msft.github.io/WSLTipsAndTricks/tip/multi-distro-commands.html)
In order to achieve that, we need to use the `wsl.exe --` instead of `wsl.exe --exec` command as we need the WSL shell to be spawned (which `--exec` doesn't do).
Finally, we also need to "escape" the pipe character so it's not interpreted by Powershell:

```bash
wsl.exe -- cat /etc/hosts `| grep localhost
``` 
