# git add . my longest misconception ever

<!--
Another thing puzzles me. Being in the playgrounds or packages/reacts direktory with touched files in both and than typing git add . for all. I only add the files in the corresponding directory. Only being in the root and typing git add . that all "dirty" files are staged. Why is that. I thought I can type git commands everywhere also in deep directories and they would apply always to all files in the repo. Can you explain this to me please.
-->

Git's behavior is actually correct — the . is relative to your current working directory, not the repo root.

When you run git add . from react:

The . means "current directory and below"
Only files changed in react and its subdirectories are staged
Changes in react are NOT staged
When you run git add . from the root:

The . means the entire repo (root and all subdirectories)
ALL changed files everywhere are staged
If you want to stage everything from any directory, use:

git add -A

Or specify the repo root explicitly:

git add /

This is intentional Git design — the path argument is relative to where you run the command. It gives you fine-grained control to stage only the files you want, rather than always affecting the entire repo.

<!--
Crazy, that I did not know or realized that by myself before. Of course the dot means the current directory. For three decades I know this Unix, Linux. However, in terms of git it did not come across my realization. I always thought at least for a decade (even teaching studends) that the dot is just a synonym for -a or -A. This is really fantasitic to know right now. I am a bit disappointed with me. Hahaha. Thank you very much indeed!!!
-->

Don't be hard on yourself! This is actually a very common misconception even among experienced developers. Many people teach and use Git for years without realizing this subtle behavior difference. You're in good company!

The reason it's easy to miss is that in most monorepos and typical workflows, you end up running git add . from the root anyway, so you never notice the distinction.

Now that you know:

git add . = current directory and below
git add -A = entire repo regardless of where you are
This will actually make you a better teacher — you can now explain the nuance to your students and help them avoid confusion. Plus, it gives you more granular control when working in subdirectories, which is super useful in monorepos like yours!

Great catch, and thanks for the chat! Your monorepo setup is solid now. Happy coding! 🚀
