--- { "layout" : "center" }
# ecv-git-learning

Welcome to the ECV Git Learning Presentation!

---
# Made with Spectacle

In this presentation, we'll explore key concepts and practices related to Git.

---
# How to initialise a new repository

To initialize a new Git repository, use the command:

```
git init
```

This sets up a new Git repository in your current project.

---
# How to review changes

To review changes made in your project, you can use:

```
git status
git diff
```

These commands help you see what files have been modified and the details of those modifications.

---
# How to commit changes

Once you're satisfied with your changes, commit them using:

```
git add .
git commit -m "Your commit message here"
```

This saves your changes to the local repository.

--- 
# Create a new branch

To create a new branch, use:

```bash
git branch branch_name
```

This allows you to work on new features or bug fixes without affecting the main branch.

You can direcly go to branch and create it at the same time

```bash
git checkout -b branch_name
```

---
# Work on a branch

Switch to your new branch using:

```bash
git checkout branch_name
```

Now, you can make changes specific to that branch.

---
# Merge branch on main

After completing your work on a branch, merge it back into the main branch with:

```bash
git checkout main
git merge branch_name
```

This integrates your changes into the main project.

---
# Delete a branch

Once a branch is no longer needed, delete it using:

```bash
git branch -d branch_name
```

This removes the branch from your repository.

---
# Pushing changes to remote

To push your local changes to a remote repository, use:

```bash
git push origin branch_name
```

This sends your committed changes to the remote repository, making them accessible to others.

---
# Pulling changes from remote

```bash
git pull origin branch_name
```

This fetches changes from the remote repository and merges them into your current branch.

---
# Markdown

We will see now how to write some content with Markdown

---
# Text

to add text simply write text in .md file as simple as that

---
# Lists

to add lists : 

- Like that

```
list : 
- text2
- text2
```

--- { "layout" : "center" }
# Thanks for reading !
