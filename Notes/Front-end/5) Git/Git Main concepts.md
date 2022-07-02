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


# Pág. 37
