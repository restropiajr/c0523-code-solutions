# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  Scope in JavaScript is determined during the creation of a function. It is based on the lexical structure of the code, meaning the placement of functions and blocks within the code. The scope determines the accessibility and visibility of variables, functions, and objects in the code.

- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript functions have access to variables from their surrounding scope due to a concept called closures. Closures allow functions to retain references to variables even after their surrounding function has finished executing. This allows the function to "remember" the values of those variables and access them later.

- What values does a closure contain?
  A closure contains the function itself and the environment in which it was created. The environment includes all the variables and values that were in scope at the time the closure was created. This allows the closure to access and use those variables even after the surrounding function has completed.

- When is a closure created?
  A closure is created when an inner function is defined within an outer function, and the inner function references variables from the outer function's scope. The closure captures those variables and keeps them alive even when the outer function has finished executing.

- How can you tell if a function will be created with a closure?
  You can determine if a function will be created with a closure by observing if it references variables from its outer scope. If a function accesses variables outside of its own scope, it will create a closure.

- In React, what is one important case where you need to know if a closure was created?
  In React, one important case where you need to know if a closure was created is when using hooks like useEffect or useCallback that depend on variables from the component's scope. If a closure is created and those variables change, it can cause unexpected behavior or stale values within the effect or callback.

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
