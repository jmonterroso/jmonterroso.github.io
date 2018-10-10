---
layout: post
title:  "How to call javascript functions without parentheses"
description: This post describes the use of a new syntax to call functions using literal strings   
image: '/img/blog/javascript-functions-without-parentheses.jpg'
date:   2018-10-10 08:46:02 -0600
categories: es6 babel javascript beauty-code 
# image: hyperapp-fundamentals.png
reading_time: 1 min
comments: true
slug: javascript-functions-without-parentheses
---
In this post I'll explain how to call javascript function without parentheses(it was surprising for me too), I have to say that when I first read about this feature it was really surprising for me,


### Using template strings

This is a new and very common feature for ES6, this feature is used for concatenation let's see an example


```javascript
let hello = `hello`;
let str = `this is a javascript string ${hello}`;
console.log(str);
```

Replacing the old fashion syntax used in ES5 for concatenation

```javascript
var hello = 'hello';
var str = 'this is a javascript string ' + hello;
console.log(str);
```
 
 ES6 template string was a huge change and improvement for concatenation, I remember concatenating a huge amount of html into a string was time consuming now is readable in many editors and easy to maintain too.
 
But **Template Strings** also has another functionality that is not very known for people, and is the main topic of this post, **Calling functions without parentheses** below an example:

```javascript

function welcome(name){
    console.log(`Welcome ${name}`);
}

welcome`Jayson`
// Welcome Jayson
// OR using a space 
welcome `Jayson`
``` 

Amazing right?, but that's not the only use you can have with template strings, We also can pass any number of variables to a function concatenated in the string lets see how it works:

```javascript
let bear = 'bear';
let legs = 4;

// First argument has an array of the strings in the function in this case ?["The ", " has ", " legs"]  
//  Following Arguments has the values of the variables provided in the string in this case ["bear", 4]  
function animal(strings, ...values) {
  console.log(strings[0]); // "The "
  console.log(strings[1]); // "  has "
  console.log(strings[2]); // " legs "
  console.log(values[0]);  // "Bear"
  console.log(values[1]);  // 4
  return "Animal Function!";
}

animal `The ${bear} has ${legs} legs`;
```

It can be confusing at first but it's very powerful, hope you have enjoyed the reading leave me a comment in case any question/feedback. H

Have a blessed day :)