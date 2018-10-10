---
layout: post
title:  "Programmatically navigate using react router"
description: This post describes a simple snippet to navigate through routes with React Router   
image: '/img/blog/programmatically-navigate-using-react-router.jpg'
date:   2018-10-10 10:46:02 -0600
categories: es6 react react-router javascript snippet 
# image: hyperapp-fundamentals.png
reading_time: 1 min
comments: true
slug: javascript-functions-without-parentheses
---
This is a snippet code for all developers looking how to navigate between "Views" using React Router programmatically, 

For React v.4 you have to wrap the component with the High Order Component `withRouter`:

### Example 1
```javascript
import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const MyButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/new-location') }}
  >
    Click Me!
  </button>
))
```
### Example 2

```javascript
import { withRouter } from 'react-router-dom'

class MyClass extends React.Component {
  yourFunction = () => {
    doSomeAsyncAction(() =>
      this.props.history.push('/other_location')
    )
  }

  render() {
    return (
      <div>
        <Form onSubmit={ this.yourFunction } />
      </div>
    )
  }
}

export default withRouter(MyClass);
```

This is an easy snippet but a very useful when you're starting with react

Have a blessed day :)