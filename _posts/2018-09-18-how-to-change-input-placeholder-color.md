---
layout: post
title:  "How to Change HTML input placeholder"
description: This post describes how to change the color of an html input text field   
image: '/img/blog/how-to-change-html-input-placeholder.png'
date:   2018-09-18 08:46:02 -0600
categories: frontend javascript css version markup 
# image: hyperapp-fundamentals.png
reading_time: 1 min
comments: true
slug: how-to-change-html-input-placeholder
---
This post will describe how to change the color in input text html


<style>
#demo-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: magenta;
    opacity: 1; /* Firefox */
}

#demo-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: magenta;
}

#demo-input::-ms-input-placeholder { /* Microsoft Edge */
    color: magenta;
}
</style>
## Demo:
<input id="demo-input" type="text" placeholder="My awesome placeholder" />

## Snippet:

### HTML

```html
<input id="demo-input" type="text" placeholder="My awesome placeholder" />
```

### CSS

```css
#demo-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: magenta;
    opacity: 1; /* Firefox */
}

#demo-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: magenta;
}

#demo-input::-ms-input-placeholder { /* Microsoft Edge */
    color: magenta;
}

```
#### Code explanation

The pseudo element `::placeholder` is the key in this example, it needs to be used for each `.class`, `#id` or custom selector in order to change properly the placeholder attribute text styles. 

Thanks for reading this post hope it helps you a bit to understand more about placeholder styles. Have a blessed day!


Jay
