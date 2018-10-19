---
layout: post
title:  "How to Fix: fatal: refusing to merge unrelated histories"
description: "This post describes a simple snippet How to Fix: fatal: refusing to merge unrelated histories very common when you're creating a new repository"   
image: '/img/blog/how-to-fix-fatal-refusing-to-merge-unrelated-histories.jpg'
date:   2018-10-12 8:46:02 -0600
categories: es6 react react-router javascript snippet 
# image: hyperapp-fundamentals.png
reading_time: 1 min
comments: true
slug: how-to-fix-fatal-refusing-to-merge-unrelated-histories
---
Today I have a git error, I'll describe the situation I had maybe I'm not the only one.
I created a new git repository in bitbucket, and I already had a codebase, so I wanted to add my new codebase to an empty repository, so I ran the following commands:



```
# init the git into my codebase
git init
# adding remote origin using the url 
git remote add origin {url}
# selected the branch master  
git checkout master 
# adding everything from my codebase
git add .
# git commit my changes
git commit -am "Initial Commit"
# Pushing to master
git push -u origin master
# I got an error to select the upstream
# Then I had an error saying that I had to pull the changes.
git pull 
```
### And then the error shows up

```
fatal: refusing to merge unrelated histories
Error redoing merge 1234deadbeef1234deadbeef
```

### So how I fix it:

With this command 👇🏼
```
git pull origin master --allow-unrelated-histories
```
Based on <a target="_blank" href="https://git-scm.com/docs/git-merge#git-merge---allow-unrelated-histories">git-scm documentation</a> :
> --allow-unrelated-histories
  By default, git merge command refuses to merge histories that do not share a common ancestor. This option can be used to override this safety when merging histories of two projects that started their lives independently. As that is a very rare occasion, no configuration variable to enable this by default exists and will not be added.
  
 

And it worked like a charm 




Have a blessed day :)