# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  The purpose of React "context" is to provide a way to share data between components without the need to pass props explicitly through each level of the component tree. It allows you to create global or application-level state that can be accessed by any component within the context's scope.

- What values can be stored in context?
  In React context, you can store any values that you want to make available to multiple components. This can include primitive data types (strings, numbers, booleans), objects, arrays, functions, or even complex state management libraries.

- How do you create context and make it available to the components?
  To create a context in React, you can use the createContext() function provided by the React library.
  To make the context available to components, you need to use the Provider component from the created context. The Provider component wraps the components that should have access to the context and accepts a value prop to provide the data.

- How do you access the context values?
  To access the context values within components, you can use the useContext hook provided by React. The useContext hook takes the context object as an argument and returns the current value of the context.

- When would you use context? (in addition to the best answer: "rarely")
  Theming, user authentication

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
