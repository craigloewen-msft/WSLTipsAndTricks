---
layout: post
title:  "Use sudo without inputting a password"
date:   2020-08-12 12:00:00 -0500
categories: sudo,password,security
author: Craig Loewen
author-twitter: craigaloewen
author-github: craigloewen-msft
author-website: http://www.craigloewen.com
---

If you want to still be able to use sudo commands, but never want to input your password, then run this command in your shell.

```bash
echo "%${USER} ALL=(ALL) NOPASSWD:ALL" | sudo EDITOR='tee ' visudo --quiet --file=/etc/sudoers.d/passwordless-sudo
```

Keep in mind that this can have security complications, as now a user can get root access to your WSL distro using your user account.
