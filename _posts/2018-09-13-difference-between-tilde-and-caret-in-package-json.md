---
layout: post
title:  "Tilde(~) vs Caret(^) in Package.json"
description: In this post I approach the versions and the symbols that helps to describe the version used in package.json file  
image: '/img/blog/tilde-vs-caret-in-package-json.png'
date:   2018-09-13 08:46:02 -0600
categories: frontend javascript version 
# image: hyperapp-fundamentals.png
reading_time: 3 min
comments: true
slug: tilde-vs-caret-in-package-json
---
It's common as front end or javascript developer get into a project and check the folder structure and found a package.json file with a bunch of packages and versions,  in this article I try to explain the symbols ~ and ^ used in the files.

Let's start describing how versioning works:

## Semver explained easy
 
 Semantic Versioning helps us to understand what kind of changes cause the version number to be incremented. Semver uses three part version number like 3.9.2 and call these three numbers from left to right as the major, minor and patch numbers. As the table shows below


| Major | Minor | Patch |
|-------|-------|-------|
| 1     | 0     | 0     |


## Major Number Version

Major version numbers change whenever there is some significant change being introduced. For example, a large or potentially backward-incompatible change to a software package.

## Minor Number Version

Minor version numbers change when a new, minor feature is introduced or when a set of smaller features is rolled out.

## Patch Number Version

Patch numbers change when a new build of the software is released to customers. This is normally for small bug-fixes or the like.

After understanding how Semantic Versioning works and what kind of changes are introduced by each number lets talk about the symbols in package.json

## The tilde (~)

The easy way to understand this, the tilde (~) matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.

## The Caret(^)
 
The caret (^), on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

## Other options for versioning in package.json

| Symbol                | Meaning                                                                         |
|-----------------------|---------------------------------------------------------------------------------|
| `~version`            | Approximately equivalent to version                                             |
| `^version`            | Compatible with version                                                         |
| `version`               | Must match version exactly                                                      |
| `>version`              | Must be greater than version                                                    |
| `>=version`             | Must be greater or equal than version                                           |
| `<version`              | Must be less than version                                                       |
| `<=version`             | Must be less or equal than version                                              |
| `http://xxx` | This may be the URL of a tarball which will be downloaded and installed locally |
| `*`                     | Matches any version                                                             |
| `latest`                | Obtains latest release                                                          |

Thanks for reading this post hope it help you a bit to understand forms in angular. Have an amazing day!


Jayson