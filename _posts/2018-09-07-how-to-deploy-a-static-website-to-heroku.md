---
layout: post
title:  "How to deploy a static website to Heroku"
description: In this post you will learn How to deploy a static website to Heroku in minutes and pretty straightforward.
image: '/img/blog/deploy-a-static-website-to-heroku-free.jpg'
date:   2018-09-07 08:46:02 -0600
categories: heroku deployment static devops
# image: hyperapp-fundamentals.png
reading_time: 5 min
comments: true
slug: how-to-deploy-a-static-website-to-heroku
---


Sometimes you want to deploy a simple website or a simple page to a free hosting for testing or development purposes this guide will help you to do it in an easy way.

The approach used to deploy the static website is to trick Heroku to think this is a php application and the redirect to our html file.

## Basic Assumptions in order to this guide works
1. You want to deploy some straight-up HTML, CSS, JS, maybe a few images. Nothing fancy here.
2. You are in the root directory of your site (i.e. the directory that contains all subdirectories and files for the site)
3. The root directory contains a main HTML page,for instance an index.html
4. A Heroku app and remote are set up and ready to go - Check this tutorial if you haven't set up already the heroku app <a href="https://trailhead.salesforce.com/en/modules/heroku_enterprise_baiscs/units/your_first_deployment" target="_blank">Click here</a>

### Steps
- First you have to add a file called composer.json to the root directory using the following command in  prompt (linux prompt) `touch composer.json`
- Add a file called `index.php` to the root directory using the following command: ``` touch index.php```
- The file you have as entry should have a different name than `index.html` (if not it won't work) so, rename the homepage static html file **(e.g. `index.html`) to `home.html`**
- Then edit the `index.php` that we've created in step #2, and add the following line to it ONLY 
```php   
<?php include_once("home.html"); ?> 
```
- After editing the `index.php` file next you have to edit `composer.json` and add the following line to the file `{}`
- The last step is to run the following command (we assumed you already set up the heroku app and the git branch inside your project) ```git push heroku master```


- That's it! Visit your deployed single-page website, hosted by Heroku (as a simple PHP app 😎).


Thanks for reading this post if you have questions feel free to let me know, the best

Jayson
