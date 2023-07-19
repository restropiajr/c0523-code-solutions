# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?
  A React custom hook is a JavaScript function that follows specific conventions. It allows you to encapsulate reusable logic and stateful behavior in a way that can be easily shared and reused across different components. Custom hooks are a way to extract common logic from components and make it more reusable.

- When are custom hooks useful? When are they not required?
  Custom hooks are useful when you have logic that needs to be shared across multiple components. They help to avoid code duplication and provide a clean way to separate concerns. Custom hooks can encapsulate complex functionality, manage state, handle side effects, and provide reusable utilities.

  Custom hooks are not required in every situation. They are most beneficial when you have logic that is used in multiple places, or when you want to abstract away complex logic into a reusable function. If the logic is simple and only used within a single component, it may be more appropriate to keep it within the component itself.

- What is the syntax (or naming convention) for writing a custom hook?
  The function name should start with the prefix "use". For example, useCustomHookName. This naming convention helps distinguish custom hooks from regular functions and also enables the benefits of hooks, such as the ability to use other hooks inside the custom hook.

- How do you call a custom hook?
  To use a custom hook, you simply call it like any other function. Custom hooks can be called from within functional components or other custom hooks.

- When do custom hooks execute?
  Custom hooks execute whenever they are called within a functional component.

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
