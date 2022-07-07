# Git 

Git is a distributed version control system (DVCS).


**Git has three main states** that your files can reside in: modified, staged, and committed:

- Modified means that you have changed the file but have not committed it to your database yet. 

- Staged means that you have marked a modified file in its current version to go into your next commit snapshot. 

- Committed means that the data is safely stored in your local database


**A git project have three main sections:** the working tree, the staging area, and the Git directory.

**The working tree** is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify. 

**The staging area** is a file, generally contained in your Git directory, that stores information about what will go into your next commit. Its technical name in Git parlance is the “index”, but the phrase “staging area” works just as well. 

**The Git directory** is where Git stores the metadata and object database for your project. This is the most important part of Git, and it is what is copied when you clone a repository from another computer.


**The basic Git workflow** goes something like this: 

1. You **modify** files in your working tree. 

2. You selectively **stage** just those changes you want to be part of your next commit, which adds only those changes to the staging area. 

3. You do a **commit**, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory


**To summarize**

If a particular version of a file is in the Git directory, it’s considered committed. If it has been modified and was added to the staging area, it is staged. And if it was changed since it was checked out but has not been staged, it is modified


## Version Control

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

**It allows you** to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a VCS also generally means that if you screw things up or lose files, you can easily recover.


## Git Commands


### Git Setup

The first thing you should do when you install Git is to set your user name and email address. This is important because every Git commit uses this information, and it’s immutably baked into the commits you start creating:


```
$ git config --global user.name "John Doe" 
$ git config --global user.email johndoe@example.com
```

You need to do this only once if you pass the _--global_ option, because then Git will always use that information for anything you do on that system. If you want to override this with a different name or email address for specific projects, you can run the command without the --global option when you’re in that project.


### Checking Your Settings 

If you want to check your configuration settings, you can use the git config --list command to list all the settings Git can find at that point:

```
$ git config --list
```


### Clone repository

You clone a repository with _git clone `<url>`_ For example, if you want to clone the Git linkable library called **libgit2**, you can do so like this:

```
$ git clone https://github.com/libgit2/libgit2
```

That creates a directory named **libgit2**, initializes a _.git_ directory inside it, pulls down all the data for that repository, and checks out a working copy of the latest version. If you go into the new **libgit2** directory that was just created, you’ll see the project files in there, ready to be worked on or used. 

If you want to clone the repository into a directory named something other than **libgit2**, you can specify the new directory name as an additional argument:

```
$ git clone https://github.com/libgit2/libgit2 mylibgit
```

That command does the same thing as the previous one, but the target directory is called **mylibgit**.


### Checking the Status of Your Files 

The main tool you use to determine which files are in which state is the _git status_ command. If you run this command directly after a clone, you should see something like this:

```
$ git status 
On branch master 
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean 
```

This means you have a clean working directory; in other words, none of your tracked files are modified.


### Tracking New Files

In order to begin tracking a new file, you use the command _git add `<files>`_. For example, to begin tracking a README file, you can run this: 

```
$ git add README
```

The git add command takes a path  name for either a file or a directory; if it’s a directory, the command adds all the files in that directory recursively.


### Git Ignore

Often, you’ll have a class of files that you don’t want Git to automatically add or even show you as being untracked.

In such cases, you can create a file listing patterns to match them named .gitignore. Here is an example .gitignore file:

```
# ignore all .a files.
*.a 

# but do track lib.a, even though you're ignoring .a files above.
!lib.a 

# only ignore the TODO file in the current directory, not subdir/TODO. /TODO 

# ignore all files in any directory named build.
build/ 

# ignore doc/notes.txt, but not doc/server/arch.txt. 
doc/*.txt 

# ignore all .pdf files in the doc/ directory and any of its subdirectories.
doc/**/*.pdf
```


### Git Commit 

You can type your commit message inline with the _commit_ command by specifying it after a _-m_ flag, like this:

```
$ git commit -m "Story 182: fix benchmarks for speed"
```


Adding the _-a_ option to the _git commit_ command makes Git automatically stage every file that is already tracked before doing the commit, letting you skip the _git add_ part:


For an even more explicit reminder of what you’ve modified, you can pass the _-v_ option to _git commit_. Doing so also puts the diff of your change in the editor so you can see exactly what changes you’re committing.

Write your commit message in the **imperative**: "Fix bug" and not "Fixed bug" or "Fixes bug." This convention matches up with commit messages generated by commands like git merge and git revert.


### Remove from Staging Area

To keep the file in your working tree but remove it from your staging area use:

```
$ git rm --cached FILE
```

This is particularly useful if you forgot to add something to your .gitignore file and accidentally staged it.


### Commit History

_git log_ lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.


**Options**
One of the more helpful options is _-p_ or _--patch_, which shows the difference (the patch output) introduced in each commit. 

You can also limit the number of log entries displayed, such as using _-2_ to show only the last two entries.

If you want to see some abbreviated stats for each commit, you can use the _--stat_ option.

Another really useful option is _--pretty_. This option changes the log output to formats other than the default. The _oneline_ value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits

The _oneline_ option value is useful with another _log_ option called _--graph_. This option adds a nice little ASCII graph showing your branch and merge history.

```
$ git log --pretty=oneline --graph
```

The _-S_ option takes a string and shows only those commits that changed the number of occurrences of that string; only show commits adding or removing code matching the string.

By default, _git log_ will only show commit history below the branch you’ve checked out. 

To show commit history for the desired branch you have to explicitly specify it: _git log <branch_Name>_. To show all of the branches, add _--all_ to your _git log_ command.


### Amend Commits

One of the common undos takes place when you commit too early and possibly forget to add some files, or you mess up your commit message. If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the _--amend_ option.

```
$ git commit -m 'Initial commit' 
$ git add forgotten_file 
$ git commit --amend
```


### Unmodify changes

With _git restore_ any local changes you made to that file are gone — Git just replaced that file with the last staged or committed version.

 
### Adding Remote Repositories

To add a new remote Git repository as a shortname you can reference easily, run:

```
$ git remote add <shortname> <url>
```


### Showing Your Remotes

To see which remote servers you have configured, you can run the _git remote_ command. It lists the shortnames of each remote handle you’ve specified.

You can also specify _-v_, which shows you the URLs that Git has stored for the shortname to be used when reading and writing to that remote:

```
$ git remote -v
```


### Pulling from Your Remotes

You can use the _git pull_ command,  it fetches data from the **server** you originally cloned from and automatically tries to **merge** it into the code you’re currently working on.


### Pushing to Your Remotes

To push any commits you’ve done back up to the server we use the command _git push_

```
$ git push origin master
```


## Git Branching


### Creating a New Branch

You do this with the git branch command: 

```
$ git branch testing
```


### Switching Branches 

To switch to an existing branch, you run the git checkout command. 

```
$ git checkout <branch_name>
```


**Switching branches changes files in your working directory** 

It’s important to note that when you switch branches in Git, files in your working directory will change. If you switch to an older branch, your working directory will be reverted to look like it did the last time you committed on that branch.


**Creating a new branch and switching to it at the same time** 

To create and  switch to a new branch at the same time use :

```
$ git checkout -b <branch_name>
```


### Merge a Branch

All you have to do is **check out** the branch you wish to merge into and then run the _git merge_ command:

```
$ git merge master
```


**Merge Conflicts**

If you want to use a graphical tool to resolve merge issues, you can run _git mergetool_, which fires up an appropriate visual merge tool and walks you through the conflicts.


### Delete a Branch

You can delete a branch with the _-d_ option to _git branch_:

```
$ git branch -d <branch_name>
```


### List branches

The _git branch_ command does more than just create and delete branches. If you run it with no arguments, you get a simple listing of your current branches.

To see the last commit on each branch, you can run git branch _-v_.

The useful _--merged_ and _--no-merged_ options can filter this list to branches that you have or have not yet merged into the branch you’re currently on.


### Change branch name

Rename the branch locally with the git branch _--move command_:

```
$ git branch --move bad-branch-name corrected-branch-name
```

This replaces your **bad-branch-name** with **corrected-branch-name**, but this change is only local. 

To let others see the corrected branch on the remote, push it: 

```
$ git push --set-upstream origin corrected-branch-name
```


The _-u_ flag is short for --set-upstream, which configures the branches for easier pushing and pulling later.


The branch with the bad name is also still present. You can delete it by executing the command: 

```
$ git push origin --delete bad-branch-name
```

Now the bad branch name is fully replaced with the corrected branch name.


### Push Branch

Your local branches aren’t automatically synchronized to the remotes you write to — you have to explicitly push the branches you want to share:

```
 $ git push <remote> <branch>
```

If you do some work on your local master branch, and, in the meantime, someone else pushes to origin and updates its master branch, then your histories move forward differently. Also, as long as you stay out of contact with your origin server, your origin/master **pointer** doesn’t move.

To synchronize your work with a given remote, you run a _git fetch_ `<remote>` command. This command looks up which server “origin” is, fetches any data from it that you don’t yet have, and updates your local database, moving your origin/master **pointer** to its new, more up-to-date position.

To reflect those changes that you don't yet have in your directory run _git merge_.


### Rebase

You may want to use rebase -i to squash your work down to a single commit, or rearrange the work in the commits to make the patch easier for the maintainer to review.


### Pull Request

The _git request-pull_ command takes the base branch into which you want your topic branch pulled and the Git repository URL you want them to pull from, and produces a summary of all the changes you’re asking to be pulled.



# Pág. 154

Chapter 1 --DONE
Chapter 2 --DONE
Chapter 3 --DONE
Chapter 5  
Chapter 6
Appendix C
