---
layout: post
title:  "Have Git in WSL use your Windows credentials"
date:   2020-08-10 12:00:00 -0500
categories: git, credentials, windows
author: Craig Loewen
author-twitter: craigaloewen
author-github: craigloewen-msft
author-website: http://www.craigloewen.com
---

If you have Git set up on Windows, you can use your Git credentials stored in Windows to do Git operations in Linux. Run the command below in bash to set this up:

```bash
 git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"
 ```

 For more Git setup tips check out [this tutorial on the WSL docs](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git).