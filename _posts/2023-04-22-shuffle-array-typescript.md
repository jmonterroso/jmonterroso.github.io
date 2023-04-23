---
layout: post
title:  'How to shuffle an array in TypeScript with the Fisher-Yates algorithm.'
description: "Learn about React Query, a library that simplifies data management in React applications. With caching, invalidation, and mutation tools, React Query provides a simple API, improves performance, and is flexible enough to work with various data sources. Improve the scalability and complexity of your code with React Query."
date: 2023-04-21 8:46:02 -0600
categories:  typescript react-query
reading_time: 5 min
comments: true
lang: en
permalink: /blog/shuffle-array-typescript
---

In this tutorial, we'll explore how to shuffle an array in typescript using the Fisher-Yates algorithm. We'll cover the basic concepts of the algorithm, and then implement a function that shuffles an array in place using typescript code.

## What is the Fisher-Yates algorithm?

The Fisher-Yates algorithm, also known as the Knuth shuffle, is a simple algorithm for shuffling the elements of an array. The algorithm works by iterating through the array from the end to the beginning, and swapping each element with a randomly selected element that comes before it.

The algorithm is named after Ronald Fisher and Frank Yates, who first described it in their book "Statistical tables for biological, agricultural and medical research" in 1938. The algorithm was later popularized by Donald Knuth in his book "The Art of Computer Programming".

The Fisher-Yates algorithm ensures that every possible ordering of the array is equally likely, making it a good choice for randomizing the order of elements in an array.

## Implementing the shuffleArray() function

Now that we understand the basics of the Fisher-Yates algorithm, let's implement a function that shuffles an array using TypeScript code.

Here's the code for the `shuffleArray()` function:

```typescript
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

Let's break down what this code does step-by-step:

1. The `shuffleArray()` function takes an array of type `T[]` as its argument and returns an array of the same type.
2. We loop through the array from the end to the beginning using a `for` loop.
3. In each iteration of the loop, we generate a random index `j` between 0 and `i`, where `i` is the current index.
4. We swap the element at index `i` with the element at index `j` using destructuring assignment.
5. After the loop completes, we return the shuffled array.

The `shuffleArray()` function shuffles the array in place, which means that the original array is modified. If you want to create a shuffled copy of the array instead, you can use the `slice()` method to create a copy and then shuffle the copy.

## Using the shuffleArray() function

Now that we have implemented the `shuffleArray()` function, let's see how we can use it in our TypeScript code.

Here's an example of how to use the `shuffleArray()` function to randomize the order of elements in an array:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
shuffleArray(numbers);
console.log(numbers); // [3, 5, 1, 4, 2]
```

In this example, we create an array of numbers and then pass it to the `shuffleArray()` function. The function shuffles the array in place, and we can see the shuffled array by logging it to the console.

## Conclusion

In this tutorial, we learned how to shuffle an array in typescript using the Fisher-Yates algorithm. We implemented a function that shuffles an array in place using TypeScript code, and saw how to use the function in our TypeScript code.

The Fisher-Yates algorithm is a powerful tool for randomizing the order of elements in an array
