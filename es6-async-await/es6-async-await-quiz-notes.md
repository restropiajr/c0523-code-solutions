# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async and await keywords are used for handling asynchronous operations in JavaScript. They provide a more synchronous-like syntax for writing asynchronous code, making it easier to read and reason about.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await differ from Promise.then and Promise.catch in terms of syntax and code structure. Promise.then and Promise.catch are methods used with promises to handle asynchronous operations. They use a chaining syntax and callbacks to handle the resolved value or catch errors. async and await keywords allow you to write asynchronous code that appears more like synchronous code, using a more linear and sequential style.

- When do you use `async`?
  You use the async keyword when defining a function that needs to perform asynchronous operations.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await within an async function to pause the execution and wait for a promise to resolve or reject. It can be used with any promise, allowing you to work with the resolved value directly. You do not use await with synchronous functions since they don't return promises. If you await a synchronous function, it will not pause the execution but immediately return the resolved value or throw an error if the function throws.

- How do you handle errors with `await`?
  Errors can be handled with await by using a try-catch block.

- What do `try`, `catch` and `throw` do? When do you use them?
  try, catch, and throw are used for error handling in JavaScript. The try block is used to wrap code that might throw an exception. If an exception occurs within the try block, it jumps to the catch block where you can handle the error. The throw keyword is used to manually throw an exception or error, allowing you to control the flow of execution when an exceptional condition occurs.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget to use await on a promise, the function will continue executing without waiting for the promise to resolve or reject. The promise rejection will not be caught by the function, and it will continue to propagate up the call stack until it is caught by a higher-level error handler or causes an unhandled promise rejection.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await because of its sequential structure

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
