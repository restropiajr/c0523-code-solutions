# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  A component is considered "mounted" when it is rendered and inserted into the DOM (Document Object Model) for the first time.

- What is a React Effect?
  In React, an effect is a function that is executed after the component has rendered or when certain dependencies have changed. It allows you to perform side effects, such as fetching data, subscribing to events, or updating the document title. Effects are primarily used in function components and are defined using the useEffect hook.

- When should you use an Effect and when should you not use an Effect?
  Effects should be used when you need to perform side effects that require interacting with the browser or external APIs, like fetching data or adding event listeners. Use effects when you want to manage lifecycle events or handle state changes asynchronously. However, you should avoid using effects for simple state updates or rendering logic that can be achieved directly in the component's render function.

- When do Effects run?
  Effects run after every completed render of the component by default. They also run when specific dependencies, passed as an array argument to useEffect, have changed. If the dependency array is empty, the effect runs only once.

- What function is used to declare an Effect?
  The useEffect function is used to declare an effect in a function component.

- What are Effect dependencies and how do you declare them?
  Effect dependencies are used to control when the effect should run. They are passed as the second argument to the useEffect hook as an array of values. The effect will be re-run only if one or more of the dependencies in the array have changed. If the dependency array is empty, the effect runs only once.

- Why would you want to clean up from an Effect?
  Cleaning up from an effect is important when you need to perform cleanup tasks or release resources associated with the effect.

- How do you clean up from an Effect?
  To clean up from an effect, you can return a cleanup function from the effect's callback function. The cleanup function will be called when the component is unmounted or when the effect is re-run.

- When does the cleanup function run?
  The cleanup function runs when the component is unmounted or when the dependencies of the effect have changed and the effect is about to run again.

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
