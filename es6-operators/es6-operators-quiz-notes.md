# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  A set of boolean operands that will be true if and only if all the operands are true, or at least if one is true, respectively,

  1. Conditional assignment
  2. short-circuiting evaluation
  3. providing default values

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  short-circuit evaluation is when you have an expression or function call that should only be executed if a certain condition is met.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  nullish coalescing operator is a logical operator to provide default value when dealing with null or undefined values.
  ?? only evaluates the left side operand if its null or undefined while || evaluates the left side operand for all falsy values;

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?" is a conditional operator to provide a concise way to express conditional statements and allows you to make decisions based ona condition.
  It differ from if/else since it is one line code while if/else is multiple lines of code and requires {}.

- What is the `?.` (optional chaining) operator? When would you use it?
  ?. allows you to access nested properties without causing an error if any intermediate property is null or undefined. Instead of throwing an error or stopping the execution, the expression using optional chaining evalutes to undefined. When you want to access properties and see if they are defined or not (working with API for example).

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It allows you to expand an iterable array or object into multiple elements or properties in various contexts. You use the operator ... and then the variable that you want to spread.

- What data types can be spread into an array? Into an object?

  1. Array: arrays, string, numbers, arguments object
  2. Object: properties, arrays as properties, iterables

- How does spread syntax differ from rest syntax?
  TSpread - Used to spread elements of an iterable (like an array, string, or set) into individual elements or properties.
  Rest - Used to represent an indefinite number of function arguments as an array.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
