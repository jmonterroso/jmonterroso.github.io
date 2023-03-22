---
layout: post
title:  "How to make grid items the same height using bootstrap 4"
description: I was trying to make my blog items the same size and I remembered this easy snippet  
image: '/img/blog/how-to-make-grid-items-the-same-height-using-bootstrap-4.jpg'
date:   2018-09-13 10:46:02 -0600
categories: github vulnerabilities package.json javascript
# image: hyperapp-fundamentals.png
reading_time: 1 min
comments: true
slug: how-to-make-grid-items-the-same-height-using-bootstrap-4
---

Today I was trying to make my blog items the same height and I remembered this easy and very useful snippet to make them the same size, so here it is:

This snippet:
```html
<div class="row">
    <div class="col-6 d-flex flex-column">
        <h3>Hey you</h3>
        <p class="mt-auto">This random text</p>    
    </div>
    <div class="col-6 d-flex flex-column">
            <h3>Hey you</h3>
            <p class="mt-auto">This random text is greateer than the other text so it wont align</p>    
    </div>
</div>
``` 

Explanation:
1. Adding `.d-flex` (`display:flex`) and `.flex-column` in the item/card will tell that this is a flex and also the direction a `flex-direction:column` 
2. Adding `mt-auto` to the **LAST** element in the item will move it to the available space in the bottom of the div so it will make that all of them use the same height assigning `margin-top:auto;` to the element.

Using css will be something like:

```css
.column{
    display:flex;
    flex-direction: column;
}
/** only descriptive name */
.last-element-in-item{
    margin-top: auto;
}

```
Hope it makes sense if not let me know in the comments, have a wonderful day you all!


Jay
