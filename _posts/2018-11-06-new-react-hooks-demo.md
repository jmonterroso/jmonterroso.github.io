---
layout: post
title:  "New React Hooks: useState Hook Demo"
description: "This post has small examples of React Hook new features"   
image: '/img/blog/new-react-hooks-demo.jpg'
date:   2018-10-19 8:46:02 -0600
categories: es6 react react-hooks javascript snippets 
reading_time: 3 min
comments: true
slug: new-react-hooks-usestate-hook-demo
---




# What are React Hooks?

## What is a hook?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. Don't get crazy and re write your current code to use hooks. 

## Now, What is a react hook?:

The definition of React hooks Based on the <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">React Documentation</a>

> Hooks are a new feature proposal that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha and being discussed in an open RFC.

This definition is not as clear as we wanted to be, but lets list some of the reasons behind the creation of hooks to have a deeper understanding of "Hooks" new feature

It’s hard to reuse stateful logic between components (true): _React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this._

It’s hard to reuse stateful logic between components: _Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable._

Classes confuse both people and machines: _Hooks let you use more of React’s features without classes._ 👈 **Using stateless components using the actual state instead of props `<SWEEET/>`**


Ok, enough of theory lets move to the snippets:

## **State Hook**

#### useState is a Hook. We call it inside a function component to add some local state to it. 

#### **Important ⚠️**  
React will preserve this state between re-renders. 
`useState` returns a pair: **the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else.** 


### **Arguments**
The only argument to useState is the initial state. In the example below, it is 0 because our counter starts from zero. 

### **Differences between this.state** 

It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.🤔

#### Example

```jsx

import { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  // Note that the first argument in the detructured array is the actual state
  // and the second is the function that we're going to use 
  // to change/update the state
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


```

### Multiple values declaration

```javascript

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}

```

### Full Example

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, updateCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => updateCount(c => c - 1)}>Decrement</button>
      <button onClick={() => updateCount(c => c + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


```
### React oficial presentation of React Hooks

<iframe width="560" height="315" src="https://www.youtube.com/embed/dpw9EHDh2bM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Thanks for reading Have a blessed day :)



Source: <a href="https://reactjs.org/docs/hooks-overview.html" target="_blank">React Documentation</a>

