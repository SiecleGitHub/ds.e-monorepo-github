# Kill running processes - before that get the PID

lsof -iTCP:3000,60117 -sTCP:LISTEN -Pn

Two process found (for example)
PID
... 50009 ...
... 52851 ...

Kill these two processes one by one
kill -9 50009
kill -9 52851
