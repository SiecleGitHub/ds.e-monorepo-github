# Bitbucket SSH-Key Guide

<!--
SSH-Key am 21.04.2026 generiert

ssh-keygen -t rsa -b 4096 -C "siecle@gmx.de"\n
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub

Hier ist der generierte Key hinterlegt:

https://bitbucket.org/account/settings/ssh-keys/

vim .git/config

[remote "origin"]
        url = git@bitbucket.org:Siecle/ds.e.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
        remote = origin
        merge = refs/heads/main

zuvor kam immer dieser Warnhinweis

 ~/projects/react/ds.e/scss  main  git push -u origin main                                                                          ✔
Enumerating objects: 71, done.
Counting objects: 100% (71/71), done.
Delta compression using up to 8 threads
Compressing objects: 100% (65/65), done.
Writing objects: 100% (71/71), 61.87 KiB | 8.84 MiB/s, done.
Total 71 (delta 27), reused 0 (delta 0), pack-reused 0 (from 0)
remote: WARNING This workspace is getting close to the 1 GB size limit
remote: If this workspace reaches the 1 GB size limit, you will not be able to push
remote: or merge new commits to any repositories in this workspace.
remote:
remote: Upgrade to a Standard or Premium plan: https://support.atlassian.com/bitbucket-cloud/docs/manage-your-plan-and-billing/#Change-your-plan
remote: Or learn how to reduce your repository size: https://support.atlassian.com/bitbucket-cloud/docs/reduce-repository-size/#Rewind-history-to-undo-large-commits.
remote:
remote: You are using an app password for Git over HTTPS.
remote: On September 9, 2025, the creation of app passwords will be discontinued.
remote: From that date forward, you will need to create and use API tokens.
remote: All existing app passwords will become inactive on June 9, 2026.
remote: More details:
remote: https://support.atlassian.com/bitbucket-cloud/docs/api-tokens/
To https://bitbucket.org/Siecle/ds.e.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
-->
