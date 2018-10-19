---
layout: post
title:  "Loop inside React JSX Element"
description: This post describes a simple snippet to Loop inside React JSX   
image: '/img/blog/loop-inside-react-jsx.jpg'
date:   2018-10-12 8:46:02 -0600
categories: es6 react react-router javascript snippet 
# image: hyperapp-fundamentals.png
reading_time: 1 min
comments: true
slug: loop-inside-react-jsx
---
This is a simple but useful snippet code to create a loop inside a jsx element  

Let's say we want to iterate over the rows of a table and add a ObjectRow component each time we loop:
### Old fashion approaches:

#### Option 1:

<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(255%2C255%2C255%2C1)&t=material&wt=sharp&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fm=Inconsolata&fs=16px&lh=133%25&si=false&code=let%2520rows%2520%253D%2520%255B%255D%253B%250Aconst%2520numrows%2520%253D%2520%255B1%252C2%252C3%252C4%252C5%255D%253B%250A%250A%250Afor(let%2520i%253D1%252C%2520i%2520%253C%253D%2520numrows.length%253B%2520i%252B%252B)%257B%250A%2520%2520%2520rows.push(%253CObjectRow%2520key%253D%257Bnumrows%255Bi%255D%257D%2520%252F%253E)%253B%250A%257D%253B%250A%250A%250A%253Ctbody%253E%250A%2520%2520%2520%2520%257B%2520rows%2520%257D%250A%253C%252Ftbody%253E&es=2x&wm=false&ts=true"
  style="transform:scale(1); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
#### Option 2:

<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(255%2C255%2C255%2C1)&t=material&wt=sharp&l=jsx&ds=false&dsyoff=29px&dsblur=68px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fm=Inconsolata&fs=16px&lh=133%25&si=false&code=var%2520rows%2520%253D%2520%255B%255D%253B%250Afor%2520(var%2520i%2520%253D%25200%253B%2520i%2520%253C%2520numrows%253B%2520i%252B%252B)%2520%257B%250A%2520%2520%2520%2520%252F%252F%2520note%253A%2520we%2520add%2520a%2520key%2520prop%2520here%2520to%2520allow%2520react%2520to%2520uniquely%2520identify%2520each%250A%2520%2520%2520%2520%252F%252F%2520element%2520in%2520this%2520array.%2520see%253A%2520https%253A%252F%252Freactjs.org%252Fdocs%252Flists-and-keys.html%250A%2520%2520%2520%2520rows.push(%253CObjectRow%2520key%253D%257Bi%257D%2520%252F%253E)%253B%250A%257D%250A%250Areturn%2520%253Ctbody%253E%257Brows%257D%253C%252Ftbody%253E%253B&es=2x&wm=false&ts=true"
  style="transform:scale(1); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

### The elegant approach:
This is my preferred way to iterate on React and it's pretty elegant using the `.map` function and using `()` to return the JSX element after iterate over it using the **Arrow Function**. 

<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(255%2C255%2C255%2C1)&t=material&wt=sharp&l=jsx&ds=false&dsyoff=29px&dsblur=68px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fm=Inconsolata&fs=16px&lh=133%25&si=false&code=%2520const%2520rows%2520%253D%2520%255B%257B%2522id%2522%2520%253A%252001%252C%2520%2522name%2522%2520%253A%2520%2522abc%2522%257D%255D%253B%250A%250A%253Ctbody%253E%250A%2520%2520%2520%2520%2520%2520%2520%257Brows.map(item%253D%253E%2520(%253CObjectRow%2520key%253D%257Bitem.id%257D%2520name%253D%257Bitem.name%257D%252F%253E))%257D%250A%253C%252Ftbody%253E&es=2x&wm=false&ts=true"
  style="transform:scale(0.7); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

This is an easy snippet but a very useful when you're starting with react

Have a blessed day :)