---
layout: post
title:  'React Query Fundamentals'
description: "React Query is a library that simplifies the process of fetching and caching data in React applications. It provides hooks and utilities to manage server state, fetch data from APIs, and keep the UI in sync with server state. Examples of using the useQuery and useMutation hooks were provided."   
image: '/img/blog/rxjs-operators-audit-vs-audittime.png'
date: 2023-03-22 8:46:02 -0600
categories: react javascript 
reading_time: 3 min
comments: true
lang: es
permalink: /en/react-query-fundamentals
---


#### TL;DR

React Query is a library that simplifies the process of fetching and caching data in React applications. It provides hooks and utilities to manage server state, fetch data from APIs, and keep the UI in sync with server state. Examples of using the useQuery and useMutation hooks were provided.

## Introduction
React Query is a library that simplifies the process of fetching and caching data in your React applications. It provides a set of hooks and utilities that allow you to easily manage server state, fetch data from your API, and keep your UI in sync with your server state.

Installation
To get started with React Query, you need to install it in your project. You can do this by running the following command in you

```shell
npm install react-query
```

## Basic Concepts
React Query is built around a few basic concepts that you should be familiar with:

Query
A query is a function that retrieves data from your API. Queries are defined using the useQuery hook and can be passed any number of arguments, including query parameters and authentication tokens.

```jsx
import { useQuery } from 'react-query';

function App() {
    const { isLoading, data, error } = useQuery('todos', () =>
        fetch('/api/todos').then((res) => res.json())
    );

    if (isLoading) return 'Loading...';

    if (error) return `Error: ${error.message}`;

    return (
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

```

In the above example, we define a query called "todos" that retrieves a list of todos from our API. We use the useQuery hook to fetch the data and manage the state of our component.

### Query Keys

Query keys are unique identifiers for your queries that are used to retrieve and store data in the cache. They can be any value that can be serialized into a string, including objects, arrays, and strings. Query keys are passed as the first argument to the useQuery hook.

```jsx
import { useQuery } from 'react-query';

function App() {
  const { isLoading, data, error } = useQuery(['todos', { status: 'active' }], () =>
    fetch('/api/todos?status=active').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return `Error: ${error.message}`;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

```

In the above example, we use an array as the query key to identify our query as "todos" with the parameter status set to "active". This allows us to retrieve and store different sets of data in the cache based on the query parameters.

## Query Caching

React Query provides a powerful caching system that allows you to store data in memory, localStorage, or any other storage mechanism of your choice. The cache is used to store the results of your queries and can be configured with various options, such as the maximum age of the data, the maximum number of items in the cache, and more.

```jsx
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      cacheTime: 300000,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
function Todos() {
    const { isLoading, data, error } = useQuery('todos', () =>
        fetch('/api/todos').then((res) => res.json())
    );

    if (isLoading) return 'Loading...';

    if (error) return Error: ${error.message};

    return (
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}
```

In the above example, we create a new instance of the `QueryClient` and pass it to the `QueryClientProvider`. We also configure the default options for our queries, including the `staleTime`, `cacheTime`, and `refetchOnMount` options.

We then define a new component called `Todos` that uses the `useQuery` hook to fetch the todos from our API and store them in the cache. We render the todos in a list and handle loading and error states.

### Mutations

Mutations are functions that allow you to modify your data on the server. They are defined using the `useMutation` hook and can be passed any number of arguments, including query parameters and authentication tokens.

```jsx
import { useMutation } from 'react-query';

function AddTodo() {
  const [title, setTitle] = useState('');

  const { mutate, isLoading } = useMutation((title) =>
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title }),
    }).then((res) => res.json())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
      />
      <button disabled={isLoading}>Add Todo</button>
    </form>
  );
}
```

In the above example, we define a mutation called mutate that sends a POST request to our API to create a new todo. We use the useMutation hook to manage the state of our mutation and handle loading and error states.

We also define a new component called AddTodo that allows the user to enter a new todo and submit it to the server. We use the mutate function to send the data to the server and reset the form.

Conclusion
React Query is a powerful library that simplifies the process of fetching and caching data in your React applications. It provides a set of hooks and utilities that allow you to easily manage server state, fetch data from your API, and keep your UI in sync with your server state.

In this blog post, we covered the basic concepts of React Query and provided some easy example code to get you started. We hope this post helps you understand the fundamentals of React Query and how to use it in your own projects.
