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
```javascript
let rows = [];
const numrows = [1,2,3,4,5];
for(let i=1, i <= numrows.length; i++){
   rows.push(<ObjectRow key={numrows[i]} />);
};

<tbody>
    { rows }
</tbody>
```

#### Option 2:

```javascript
var rows = [];
for (var i = 0; i < numrows; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ObjectRow key={i} />);
}
return <tbody>{rows}</tbody>;
```

### The elegant approach:
This is my preferred way to iterate on React and it's pretty elegant using the `.map` function and using `()` to return the JSX element after iterate over it using the **Arrow Function**. 

```javascript

 const rows = [{"id" : 01, "name" : "abc"}];
 <tbody>
       {rows.map(item=> (
             <ObjectRow key={item.id} name={item.name}/>
       ))}
</tbody>

```

This is an easy snippet but a very useful when you're starting with react

Have a blessed day :)