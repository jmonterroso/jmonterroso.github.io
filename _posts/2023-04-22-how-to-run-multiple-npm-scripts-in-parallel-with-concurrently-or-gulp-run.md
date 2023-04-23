---
layout: post
title:  'How to run multiple npm scripts in parallel with "concurrently" or "gulp-run"'
description: "Learn about React Query, a library that simplifies data management in React applications. With caching, invalidation, and mutation tools, React Query provides a simple API, improves performance, and is flexible enough to work with various data sources. Improve the scalability and complexity of your code with React Query."
date: 2023-04-22 8:46:02 -0600
categories:  npm node
reading_time: 5 min
comments: true
lang: en
permalink: /blog/how-to-run-multiple-npm-scripts-in-parallel-with-concurrently-or-gulp-run
---


When working with Node.js, you may have to run multiple npm scripts simultaneously, especially during development. Fortunately, npm provides a way to run multiple scripts in parallel with the help of the "concurrently" package. In this article, we will explore how to run multiple npm scripts in parallel and display their outputs in the console.

To begin with, let's install the "concurrently" package using npm. Open your terminal and run the following command:
```shell
npm install concurrently --save-dev
```


This will install the "concurrently" package as a dev-dependency in your project.

Now, we can modify our "dev" script in the package.json file to use "concurrently" to run our scripts in parallel. Update your "dev" script to look like this:
```json
"dev": "concurrently \"npm run start-watch\" \"npm run wp-server\""
```

What we're doing here is using the "concurrently" command to run both the "start-watch" and "wp-server" scripts in parallel. The "\" characters are used to escape the quotes around each script, allowing them to be passed as arguments to "concurrently".

Once you've made this change, you can run the "dev" script in your terminal by typing:
```shell
npm run dev
```


This will start both the "start-watch" and "wp-server" scripts in parallel, and you'll see their output in the console. If either script throws an error, it will be displayed in the console, so you'll know immediately if there's a problem.

If you prefer to use Gulp instead of "concurrently", you can achieve the same result by using the "gulp-run" package. Here's an example of how you could modify your gulpfile.js to run the same two scripts in parallel:
```js
const gulp = require('gulp');
const run = require('gulp-run');
gulp.task('dev', function() {
return run('npm run start-watch').exec()
    .pipe(run('npm run wp-server').exec());
});
```


This gulp task does the same thing as our "concurrently" script. It uses "gulp-run" to execute the "start-watch" and "wp-server" scripts in parallel, and their output will be displayed in the console.

In conclusion, running multiple npm scripts in parallel is easy with the help of "concurrently" or "gulp-run". By using these packages, you can save time and speed up your development workflow by running multiple scripts simultaneously.
