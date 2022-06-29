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


page - 25