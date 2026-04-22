# Default node version problem fix Guide

<!--
Agent Prompt
I have a nvm installed and several node versions. Unfortunately the oldest version is always the version which is set when I open a new terminal. Can you change this so that the node version v22.14.0 is the node version set when open a new terminal
-->

Perfect! I've successfully changed your default Node version to v22.14.0. Here's what I did:

Changes Made
Set Default Alias: Used nvm alias default 22.14.0 to configure nvm so that new terminal sessions will automatically use Node v22.14.0.
Verification
As you can see from the nvm list output, the default is now set to 22.14.0. Your current terminal session still shows Node 14.20.0 (as indicated in the prompt), but any new terminal windows or tabs you open will now default to Node v22.14.0.

How It Works
Nvm uses the default alias to determine which Node version to load when you start a new shell. This change will persist across terminal restarts and system reboots.

If you want to switch your current terminal session to use v22.14.0 right now, you can run:

nvm use 22.14.0

But for future sessions, v22.14.0 will be the default automatically. This should resolve the issue with the oldest version being selected by default.
